import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const body = await req.json() as { name?: string; email?: string; message?: string };
	const { name, email, message } = body;

	if (!name?.trim() || !email?.trim() || !message?.trim()) {
		return NextResponse.json({ error: "All fields are required." }, { status: 400 });
	}

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		// Graceful fallback: log locally, return success so the user isn't blocked
		console.warn("[contact] RESEND_API_KEY not set — message not delivered:", { name, email });
		return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
	}

	const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";

	const res = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			from,
			to: ["vgp1399@gmail.com"],
			reply_to: email,
			subject: `Portfolio message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
		}),
	});

	if (!res.ok) {
		const detail = await res.text();
		console.error("[contact] Resend error:", detail);
		return NextResponse.json({ error: "Failed to send. Please email me directly." }, { status: 500 });
	}

	return NextResponse.json({ success: true });
}
