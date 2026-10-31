
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";
    const project =
      typeof body.project === "string" ? body.project.trim() : "";
    const location =
      typeof body.location === "string" ? body.location.trim() : "";
    const requirements =
      typeof body.requirements === "string"
        ? body.requirements.trim()
        : "";

    if (!name || !email || !phone || !project || !location || !requirements) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (name.length > 150 || email.length > 254 || phone.length > 50 ||
        project.length > 150 || location.length > 200 ||
        requirements.length > 10000) {
      return NextResponse.json(
        { success: false, message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeProject = escapeHtml(project);
    const safeLocation = escapeHtml(location);
    const safeRequirements = escapeHtml(requirements).replace(/\n/g, "<br />");

    const inquiryResult = await resend.emails.send({
      from: "Levell Up Builders <noreply@levellupbuilders.in>",
      to: ["levellupbuilders@gmail.com"],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Project Type:</strong> ${safeProject}</p>
          <p><strong>Location:</strong> ${safeLocation}</p>
          <p><strong>Requirements:</strong><br />${safeRequirements}</p>
        </div>
      `,
    });

    if (inquiryResult.error) {
      console.error("Inquiry email failed:", inquiryResult.error);

      return NextResponse.json(
        {
          success: false,
          message: "We couldn't send your inquiry. Please try again.",
        },
        { status: 502 }
      );
    }

    const confirmationResult = await resend.emails.send({
      from: "Levell Up Builders <noreply@levellupbuilders.in>",
      to: [email],
      subject: "Thank you for contacting Levell Up Builders",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>Thank you, ${safeName}!</h2>
          <p>We've received your inquiry and appreciate your interest in Levell Up Builders.</p>
          <p>Our team will review your project details and get back to you as soon as possible.</p>
          <p>Best regards,<br /><strong>Levell Up Builders</strong></p>
          <p><a href="https://levellupbuilders.in">levellupbuilders.in</a></p>
        </div>
      `,
    });

    if (confirmationResult.error) {
      console.error("Confirmation email failed:", confirmationResult.error);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully.",
      confirmationSent: !confirmationResult.error,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
