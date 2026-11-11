import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, role, teamSize, useCase, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ ok: true }); // silently drop
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Build email body
    const text = `
New Demo Request — AgintX

Name:      ${name}
Email:     ${email}
Company:   ${company || "—"}
Role:      ${role || "—"}
Team Size: ${teamSize || "—"}
Use Case:  ${useCase || "—"}

Message:
${message || "No message provided."}
    `.trim();

    // Try to send via SMTP if configured, otherwise log
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"AgintX Website" <${process.env.SMTP_USER}>`,
        to: "contact@agintx.com",
        replyTo: email,
        subject: `Demo Request from ${name} at ${company || "unknown"}`,
        text,
      });
    } else {
      // Development fallback — log to console
      console.log("[DEMO REQUEST]", text);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[DEMO REQUEST ERROR]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
