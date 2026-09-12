import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const project = String(body.project || "").trim();
    const location = String(body.location || "").trim();
    const requirements = String(body.requirements || "").trim();

    if (
      !name ||
      !email ||
      !phone ||
      !project ||
      !location ||
      !requirements
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 1. Send the inquiry to Levell Up Builders
    const { data, error } = await resend.emails.send({
      from: "Levell Up Builders <onboarding@resend.dev>",
      to: ["avantika.saras@gmail.com"],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(project)}</p>
        <p><strong>Project Location:</strong> ${escapeHtml(location)}</p>

        <h3>Project Requirements</h3>
        <p>${escapeHtml(requirements).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend inquiry error:", error);

      return NextResponse.json(
        { error: "Unable to send inquiry." },
        { status: 500 }
      );
    }

    // 2. Send an automatic confirmation to the person who submitted the form
    const { error: confirmationError } = await resend.emails.send({
      from: "Levell Up Builders <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Levell Up Builders",
      html: `
        <h2>Thank you, ${escapeHtml(name)}.</h2>

        <p>
          We have received your project inquiry and appreciate you
          reaching out to Levell Up Builders.
        </p>

        <p>
          Our team will review your requirements and get back to you
          as soon as possible.
        </p>

        <p>
          Best regards,<br />
          Levell Up Builders
        </p>
      `,
    });

    if (confirmationError) {
      console.error(
        "Resend confirmation error:",
        confirmationError
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}