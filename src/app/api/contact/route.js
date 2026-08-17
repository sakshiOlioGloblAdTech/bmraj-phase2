import { NextResponse } from "next/server";
import {
  buildHtml,
  buildText,
  createTransporter,
  getSmtpConfig,
  isValidEmail,
} from "@/lib/mail";
import { appendToSheet, isSheetConfigured } from "@/lib/sheet";
import { verifyRecaptcha } from "@/lib/recaptcha";

export const runtime = "nodejs";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ ok: false }, { status: 404 });
  }
  const keys = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM", "CONTACT_TO"];
  const status = {};
  for (const k of keys) status[k] = process.env[k] ? "set" : "MISSING";
  return NextResponse.json({ ok: true, env: status });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const { fullName, companyName, phoneNumber, email, product, message, recaptchaToken } = body || {};

  // Verify the reCAPTCHA token before doing any work, so bot submissions are
  // rejected up front. Fails open only when no secret key is configured.
  const remoteIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;
  const recaptcha = await verifyRecaptcha(recaptchaToken, "contact", remoteIp);
  if (!recaptcha.ok) {
    console.warn("[contact] reCAPTCHA rejected:", recaptcha.reason, "score:", recaptcha.score);
    return NextResponse.json(
      { ok: false, error: "Could not verify you are human. Please try again." },
      { status: 400 }
    );
  }

  if (!fullName || !companyName || !phoneNumber || !email) {
    return NextResponse.json(
      { ok: false, error: "Full name, company name, phone number, and email are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  const phoneClean = String(phoneNumber).replace(/[\s\-()]/g, "");
  if (!/^\+?\d{10,15}$/.test(phoneClean)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid phone number." },
      { status: 400 }
    );
  }

  const config = getSmtpConfig();
  if (config.missing.length) {
    console.error("[contact] Missing SMTP configuration:", config.missing.join(", "));
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  // Append to the Google Sheet first. Both the sheet write and the email must
  // succeed, so if this fails we abort before sending the email (no duplicate).
  if (isSheetConfigured()) {
    try {
      await appendToSheet({
        type: "Contact",
        fullName,
        companyName,
        phoneNumber,
        email,
        product,
        message,
      });
    } catch (err) {
      console.error("[contact] sheet append failed", err);
      return NextResponse.json(
        { ok: false, error: "Could not save your enquiry. Please try again." },
        { status: 502 }
      );
    }
  }

  const transporter = createTransporter(config);
  const fromAddress = config.SMTP_FROM || config.SMTP_USER;

  const rows = [
    ["Full Name", fullName],
    ["Company Name", companyName],
    ["Email", email],
    ["Phone", phoneNumber],
    ["Product", product],
  ];

  const subject = `New contact: ${fullName}${companyName ? ` — ${companyName}` : ""}`;

  try {
    await transporter.sendMail({
      from: `"BMRAJ Website" <${fromAddress}>`,
      to: config.CONTACT_TO,
      ...(config.CONTACT_CC ? { cc: config.CONTACT_CC } : {}),
      replyTo: email,
      subject,
      text: buildText({ heading: "New Contact Lead", rows, message }),
      html: buildHtml({
        heading: "New Contact Lead",
        intro: "A new enquiry has been submitted through the BMRAJ contact form.",
        rows,
        message,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 502 }
    );
  }
}
