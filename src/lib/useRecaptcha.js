"use client";

import { useCallback, useEffect } from "react";

// Client hook for Google reCAPTCHA v3.
//
// Injects the reCAPTCHA script once (using the public site key) and exposes an
// executeRecaptcha(action) function that returns a fresh token to send with the
// form submission. If no site key is configured, execute resolves to null and
// the form still submits (the server verifier fails open when unconfigured).

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "google-recaptcha-v3";

function loadScript() {
  if (typeof window === "undefined" || !SITE_KEY) return;
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

export function useRecaptcha() {
  useEffect(() => {
    loadScript();
  }, []);

  const executeRecaptcha = useCallback(async (action = "submit") => {
    if (!SITE_KEY) return null;

    const grecaptcha = typeof window !== "undefined" ? window.grecaptcha : null;
    if (!grecaptcha || !grecaptcha.execute) {
      // Script hasn't finished loading; make sure it's requested and bail.
      loadScript();
      return null;
    }

    try {
      return await new Promise((resolve, reject) => {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(SITE_KEY, { action })
            .then(resolve)
            .catch(reject);
        });
      });
    } catch (err) {
      console.error("[recaptcha] execute failed", err);
      return null;
    }
  }, []);

  return { executeRecaptcha, isEnabled: Boolean(SITE_KEY) };
}
