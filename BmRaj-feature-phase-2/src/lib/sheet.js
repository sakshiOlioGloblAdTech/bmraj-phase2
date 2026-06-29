// Appends a form submission as a row to a Google Sheet via a Google Apps Script
// Web App. The Apps Script (scripts/google-sheet-appscript.gs) receives a JSON
// POST and writes one row. Configure SHEET_WEBHOOK_URL + SHEET_WEBHOOK_SECRET.

export function isSheetConfigured() {
  return Boolean(process.env.SHEET_WEBHOOK_URL);
}

/**
 * Append one row to the Google Sheet. Throws on any failure so the caller can
 * decide what to do (we treat a failure as fatal — see the API routes).
 *
 * @param {Object} data - Flat object of the form fields. A `type` key
 *   ("Contact" | "Quote") is expected so the sheet can label the row.
 */
export async function appendToSheet(data) {
  const url = process.env.SHEET_WEBHOOK_URL;
  const secret = process.env.SHEET_WEBHOOK_SECRET || "";

  if (!url) {
    throw new Error("SHEET_WEBHOOK_URL is not configured.");
  }

  const payload = {
    secret,
    timestamp: new Date().toISOString(),
    type: data.type || "",
    fullName: data.fullName || "",
    companyName: data.companyName || "",
    phoneNumber: data.phoneNumber || "",
    email: data.email || "",
    product: data.product || "",
    quantity: data.quantity || "",
    isPrintingRequired:
      typeof data.isPrintingRequired === "boolean"
        ? data.isPrintingRequired
          ? "Yes"
          : "No"
        : "",
    message: data.message || "",
  };

  // Apps Script Web Apps follow a redirect (302 → script.googleusercontent.com)
  // before returning the final response; fetch follows it automatically.
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    // Abort if Google is slow so we don't hang the API route indefinitely.
    signal: AbortSignal.timeout(10000),
  });

  if (!res.ok) {
    throw new Error(`Sheet webhook responded ${res.status}`);
  }

  // Apps Script returns JSON { ok: true } on success.
  let body;
  try {
    body = await res.json();
  } catch {
    throw new Error("Sheet webhook returned a non-JSON response.");
  }

  if (!body || body.ok !== true) {
    throw new Error(body?.error || "Sheet webhook reported a failure.");
  }

  return body;
}
