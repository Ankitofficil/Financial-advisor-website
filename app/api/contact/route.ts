import { NextResponse } from "next/server";

/**
 * Placeholder contact handler.
 *
 * TODO(client): Wire this to a real email/CRM integration, e.g.:
 *   - Send an email via Resend / SendGrid / Postmark
 *   - Create a lead in a CRM (Redtail, Wealthbox, HubSpot)
 *   - Push to a scheduling tool (Calendly) or a spreadsheet
 * Add server-side validation, rate limiting, and spam protection (e.g. a
 * honeypot field and/or hCaptcha) before going live. Do not log PII.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message, honeypot } = data ?? {};

    // Honeypot: real users leave this empty; bots often fill it.
    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const errors: Record<string, string> = {};
    if (!name || String(name).trim().length < 2)
      errors.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim()))
      errors.email = "Please enter a valid email address.";
    if (!message || String(message).trim().length < 10)
      errors.message = "Please tell us a little more (10+ characters).";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    // TODO(client): deliver the message here (email/CRM). For now we simply
    // acknowledge receipt so the front-end flow can be demonstrated.
    console.log("[contact] new inquiry received (placeholder handler)");

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
