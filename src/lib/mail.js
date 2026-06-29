import nodemailer from "nodemailer";

export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function buildHtml({ heading, intro, rows, message }) {
  const tableRows = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 16px;background:#F6F6EF;border:1px solid #E3E3D6;font-family:'Inter Tight',system-ui,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#139C57;width:200px;">${escapeHtml(
            label
          )}</td>
          <td style="padding:8px 16px;border:1px solid #E3E3D6;font-family:'Inter Tight',system-ui,sans-serif;font-size:14px;color:#183F34;">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join("");

  return `
    <!doctype html>
    <html>
      <body style="margin:0;padding:32px;background:#FFFFFF;font-family:'Inter Tight',system-ui,sans-serif;color:#5D6865;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;width:100%;">
          <tr>
            <td style="padding-bottom:24px;">
              <h1 style="margin:0 0 8px 0;font-family:'Inter Tight',system-ui,sans-serif;font-size:24px;font-weight:700;color:#183F34;">${escapeHtml(
                heading
              )}</h1>
              <p style="margin:0;font-size:14px;color:#5D6865;">${escapeHtml(intro)}</p>
            </td>
          </tr>
          <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">${tableRows}</table>
            </td>
          </tr>
          ${
            message
              ? `<tr>
                  <td style="padding-top:24px;">
                    <p style="margin:0 0 8px 0;font-family:'Inter Tight',system-ui,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#139C57;">Message</p>
                    <div style="padding:16px;border:1px solid #E3E3D6;background:#F6F6EF;font-size:14px;line-height:24px;color:#183F34;white-space:pre-wrap;">${escapeHtml(
                      message
                    )}</div>
                  </td>
                </tr>`
              : ""
          }
          <tr>
            <td style="padding-top:24px;border-top:1px solid #E3E3D6;">
              <p style="margin:16px 0 0 0;font-size:12px;color:#9A9A9A;">Submitted ${new Date().toUTCString()}</p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export function buildText({ heading, rows, message }) {
  const lines = [heading, ""];
  for (const [label, value] of rows) {
    lines.push(`${label}: ${value || "-"}`);
  }
  if (message) {
    lines.push("", "Message:", message);
  }
  lines.push("", `Submitted ${new Date().toUTCString()}`);
  return lines.join("\n");
}

export function getSmtpConfig() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    CONTACT_TO,
    CONTACT_CC,
  } = process.env;

  const missing = [];
  if (!SMTP_HOST) missing.push("SMTP_HOST");
  if (!SMTP_USER) missing.push("SMTP_USER");
  if (!SMTP_PASS) missing.push("SMTP_PASS");
  if (!CONTACT_TO) missing.push("CONTACT_TO");

  return { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO, CONTACT_CC, missing };
}

export function createTransporter({ SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS }) {
  const port = Number(SMTP_PORT) || 587;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}
