import crypto from "node:crypto";
import { parse as parseCookieHeader } from "cookie";
import type { Express, Request, Response } from "express";
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import * as db from "../db";
import { getSessionCookieOptions } from "./cookies";
import { ENV } from "./env";
import { sdk } from "./sdk";

const GOOGLE_STATE_COOKIE = "__Host-google_oauth_state";
const GOOGLE_AUTHORIZE_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://openidconnect.googleapis.com/v1/userinfo";

function getRedirectUri(req: Request) {
  const forwardedProto = req.headers["x-forwarded-proto"];
  const protocol = typeof forwardedProto === "string" ? forwardedProto.split(",")[0] : req.protocol;
  return `${protocol}://${req.get("host")}/api/auth/google/callback`;
}

function safeOrigin(value: string | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.hostname !== "localhost") return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function registerGoogleOAuthRoutes(app: Express) {
  app.get("/api/auth/google/start", (req: Request, res: Response) => {
    if (!ENV.googleClientId || !ENV.googleClientSecret) {
      res.status(503).json({ error: "Google sign-in is not configured" });
      return;
    }
    const origin = safeOrigin(typeof req.query.origin === "string" ? req.query.origin : undefined);
    if (!origin) {
      res.status(400).json({ error: "A valid HTTPS application origin is required" });
      return;
    }
    const nonce = crypto.randomUUID();
    const redirectUri = getRedirectUri(req);
    res.cookie(GOOGLE_STATE_COOKIE, JSON.stringify({ nonce, origin }), { httpOnly: true, secure: true, sameSite: "none", path: "/", maxAge: 600000 });
    const params = new URLSearchParams({ client_id: ENV.googleClientId, redirect_uri: redirectUri, response_type: "code", scope: "openid email profile", access_type: "offline", prompt: "select_account", state: nonce });
    res.redirect(`${GOOGLE_AUTHORIZE_URL}?${params.toString()}`);
  });

  app.get("/api/auth/google/callback", async (req: Request, res: Response) => {
    const code = typeof req.query.code === "string" ? req.query.code : undefined;
    const state = typeof req.query.state === "string" ? req.query.state : undefined;
    const cookies = parseCookieHeader(req.headers.cookie ?? "");
    let saved: { nonce?: string; origin?: string } = {};
    try { saved = JSON.parse(cookies[GOOGLE_STATE_COOKIE] ?? "{}"); } catch { saved = {}; }
    if (!code || !state || !saved.nonce || state !== saved.nonce || !saved.origin) {
      res.status(403).json({ error: "Invalid Google OAuth state" });
      return;
    }
    res.clearCookie(GOOGLE_STATE_COOKIE, { httpOnly: true, secure: true, sameSite: "none", path: "/" });
    try {
      const tokenResponse = await fetch(GOOGLE_TOKEN_URL, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ code, client_id: ENV.googleClientId, client_secret: ENV.googleClientSecret, redirect_uri: getRedirectUri(req), grant_type: "authorization_code" }) });
      if (!tokenResponse.ok) throw new Error(`Google token exchange failed: ${tokenResponse.status}`);
      const token = await tokenResponse.json() as { access_token?: string };
      if (!token.access_token) throw new Error("Google access token missing");
      const profileResponse = await fetch(GOOGLE_USERINFO_URL, { headers: { Authorization: `Bearer ${token.access_token}` } });
      if (!profileResponse.ok) throw new Error(`Google profile request failed: ${profileResponse.status}`);
      const profile = await profileResponse.json() as { sub?: string; name?: string; email?: string };
      if (!profile.sub) throw new Error("Google profile subject missing");
      const openId = `google:${profile.sub}`;
      await db.upsertUser({ openId, name: profile.name ?? null, email: profile.email ?? null, loginMethod: "google", lastSignedIn: new Date() });
      const sessionToken = await sdk.createSessionToken(openId, { name: profile.name ?? "", expiresInMs: ONE_YEAR_MS });
      res.cookie(COOKIE_NAME, sessionToken, { ...getSessionCookieOptions(req), maxAge: ONE_YEAR_MS });
      res.redirect(302, `${saved.origin}/dashboard`);
    } catch (error) {
      console.error("[Google OAuth] Callback failed", error);
      res.status(500).json({ error: "Google sign-in failed" });
    }
  });
}
