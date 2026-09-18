import { describe, expect, it } from "vitest";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const projectRoot = process.cwd();

describe("Google OAuth server configuration", () => {
  it("accepts the configured client credentials at Google’s token endpoint", async () => {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    expect(clientId).toBeTruthy();
    expect(clientSecret).toBeTruthy();

    const body = new URLSearchParams({
      client_id: clientId!,
      client_secret: clientSecret!,
      code: "invalid-test-code",
      grant_type: "authorization_code",
      redirect_uri: "https://example.com/api/auth/google/callback",
    });
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    });
    const payload = await response.json() as { error?: string; error_description?: string };
    expect(response.status).toBe(400);
    expect(payload.error).toBe("invalid_grant");
  }, 15000);

  it("does not expose the client secret in frontend source", async () => {
    const secret = process.env.GOOGLE_CLIENT_SECRET;
    expect(secret).toBeTruthy();
    const frontendFiles = [
      join(projectRoot, "client/src/App.tsx"),
      join(projectRoot, "client/src/pages/Home.tsx"),
      join(projectRoot, "client/index.html"),
    ];
    const source = (await Promise.all(frontendFiles.map((file) => readFile(file, "utf8")))).join("\n");
    expect(source).not.toContain(secret!);
    expect(source).not.toContain("GOOGLE_CLIENT_SECRET");
  });
});
