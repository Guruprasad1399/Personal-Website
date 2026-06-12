import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	const body = await req.json() as { name?: string; email?: string; message?: string };
	const { name, email, message } = body;

	if (!name?.trim() || !email?.trim() || !message?.trim()) {
		return NextResponse.json({ error: "All fields are required." }, { status: 400 });
	}

	// Path 1: Resend — requires a verified sending domain set in RESEND_FROM
	const resendKey = process.env.RESEND_API_KEY;
	const resendFrom = process.env.RESEND_FROM;
	if (resendKey && resendFrom) {
		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
			body: JSON.stringify({
				from: resendFrom,
				to: ["vgp1399@gmail.com"],
				replyTo: email,
				subject: `Portfolio message from ${name}`,
				text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
				html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
			}),
		});
		if (!res.ok) {
			console.error("[contact] Resend error:", await res.text());
			return NextResponse.json({ error: "Failed to send. Please email me directly." }, { status: 500 });
		}
		return NextResponse.json({ success: true });
	}

	// Path 2: Gmail SMTP via nodemailer — works immediately with an App Password
	const gmailUser = process.env.GMAIL_USER;
	const gmailPass = process.env.GMAIL_APP_PASSWORD;
	if (gmailUser && gmailPass) {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: { user: gmailUser, pass: gmailPass },
		});
		try {
			await transporter.sendMail({
				from: `"Portfolio Contact" <${gmailUser}>`,
				to: gmailUser,
				replyTo: `"${name}" <${email}>`,
				subject: `Portfolio message from ${name}`,
				text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
				html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
			});
		} catch (err) {
			console.error("[contact] nodemailer error:", err);
			return NextResponse.json({ error: "Failed to send. Please email me directly." }, { status: 500 });
		}
		return NextResponse.json({ success: true });
	}

	console.warn("[contact] No email transport configured.");
	return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
}
