// Server-side Google reCAPTCHA v3 verification.
//
// The client obtains a short-lived token via grecaptcha.execute() and sends it
// with the form POST. Here we exchange that token with Google's siteverify
// endpoint, which returns a success flag and a score (0.0 = likely bot,
// 1.0 = likely human). We reject submissions below RECAPTCHA_MIN_SCORE.

const SITEVERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const DEFAULT_MIN_SCORE = 0.5;

export function isRecaptchaConfigured() {
  return Boolean(process.env.RECAPTCHA_SECRET_KEY);
}

function getMinScore() {
  const raw = Number(process.env.RECAPTCHA_MIN_SCORE);
  return Number.isFinite(raw) && raw >= 0 && raw <= 1 ? raw : DEFAULT_MIN_SCORE;
}

/**
 * Verify a reCAPTCHA v3 token.
 *
 * @param {string} token   The g-recaptcha-response token from the client.
 * @param {string} [expectedAction]  The action name set on the client (e.g. "contact").
 * @param {string} [remoteIp]  The end-user's IP, optional but recommended.
 * @returns {Promise<{ ok: boolean, score?: number, reason?: string }>}
 */
export async function verifyRecaptcha(token, expectedAction, remoteIp) {
  if (!isRecaptchaConfigured()) {
    // Fail open when not configured so the site keeps working in dev/local
    // setups that haven't added keys yet. Configure keys in production.
    return { ok: true, reason: "not-configured" };
  }

  if (!token || typeof token !== "string") {
    return { ok: false, reason: "missing-token" };
  }

  const params = new URLSearchParams();
  params.append("secret", process.env.RECAPTCHA_SECRET_KEY);
  params.append("response", token);
  if (remoteIp) params.append("remoteip", remoteIp);

  let data;
  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    data = await res.json();
  } catch (err) {
    console.error("[recaptcha] siteverify request failed", err);
    return { ok: false, reason: "verify-request-failed" };
  }

  if (!data.success) {
    return {
      ok: false,
      reason: `failed: ${(data["error-codes"] || []).join(", ") || "unknown"}`,
    };
  }

  // v3 responses include action + score. If an action was expected, ensure it
  // matches so a token minted for a different form can't be replayed here.
  if (expectedAction && data.action && data.action !== expectedAction) {
    return { ok: false, reason: `action-mismatch: ${data.action}` };
  }

  const minScore = getMinScore();
  if (typeof data.score === "number" && data.score < minScore) {
    return { ok: false, score: data.score, reason: "low-score" };
  }

  return { ok: true, score: data.score };
}
