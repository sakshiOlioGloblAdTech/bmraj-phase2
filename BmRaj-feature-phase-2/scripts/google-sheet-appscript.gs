/**
 * Google Apps Script — appends BMRAJ contact/quote form submissions to a Sheet.
 *
 * SETUP
 * 1. Create a Google Sheet (e.g. "BMRAJ Leads").
 * 2. Extensions → Apps Script. Delete the boilerplate, paste this whole file.
 * 3. Set SHARED_SECRET below to a random string and use the SAME value for
 *    SHEET_WEBHOOK_SECRET in the website's .env / Vercel env.
 * 4. Deploy → New deployment → type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorize, copy the "/exec" Web app URL.
 * 5. Put that URL in SHEET_WEBHOOK_URL in the website's .env / Vercel env.
 * 6. Restart `next dev` (locally) or redeploy (Vercel).
 *
 * To change columns later, edit HEADERS below and the row mapping in doPost.
 * After editing the script you must redeploy (Deploy → Manage deployments →
 * edit → new version) for changes to take effect.
 */

const SHARED_SECRET = "change-me-to-a-random-string"; // must match SHEET_WEBHOOK_SECRET
const SHEET_NAME = "Leads"; // tab name; created automatically if missing

const HEADERS = [
  "Timestamp",
  "Type",
  "Full Name",
  "Company",
  "Phone",
  "Email",
  "Product",
  "Quantity",
  "Printing Required",
  "Message",
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Reject writes that don't carry the shared secret.
    if (SHARED_SECRET && data.secret !== SHARED_SECRET) {
      return jsonOutput({ ok: false, error: "Unauthorized" });
    }

    const sheet = getOrCreateSheet();

    // Format the timestamp in IST (Asia/Kolkata) as a readable date-time string,
    // e.g. "27 May 2026, 06:29 PM". Generated here so the sheet shows local time
    // regardless of what the caller sends.
    const timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "dd MMM yyyy, hh:mm a"
    );

    sheet.appendRow([
      timestamp,
      data.type || "",
      data.fullName || "",
      data.companyName || "",
      data.phoneNumber || "",
      data.email || "",
      data.product || "",
      data.quantity || "",
      data.isPrintingRequired || "",
      data.message || "",
    ]);

    return jsonOutput({ ok: true });
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) });
  }
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  // Write the header row once.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
