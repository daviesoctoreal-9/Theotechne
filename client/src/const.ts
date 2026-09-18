export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// The client only starts the server-side flow. The Google client secret is never
// imported, embedded, or sent from the browser.
export const startLogin = () => {
  const origin = encodeURIComponent(window.location.origin);
  window.location.href = `/api/auth/google/start?origin=${origin}`;
};
