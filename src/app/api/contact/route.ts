import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    console.log("=== API CONTACT REQUEST ===", { name: body.name, email: body.email });

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    let smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpTo = process.env.SMTP_TO || smtpUser;

    // Special handling for QQ Mail
    let secure = smtpPort === 465;
    if (smtpHost === "smtp.qq.com" && !process.env.SMTP_PORT) {
      console.log("=== QQ MAIL DETECTED: Defaulting to Port 465 (Secure) ===");
      smtpPort = 465;
      secure = true;
    }

    console.log("=== SMTP CONFIG CHECK ===", {
      host: smtpHost,
      hasUser: !!smtpUser,
      hasPass: !!smtpPass,
      hasTo: !!smtpTo,
      port: smtpPort,
      secure,
    });

    if (!smtpHost || !smtpUser || !smtpPass || !smtpTo) {
      console.error("SMTP environment variables are not fully configured");
      return NextResponse.json(
        {
          success: false,
          error: "Mail service is not configured (Missing SMTP variables). Please check server logs."
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subjectLine =
      body.subject && body.subject.trim().length > 0
        ? `[Website Quote] ${body.subject}`
        : "[Website Quote] New inquiry from contact form";

    console.log("=== ATTEMPTING TO SEND EMAIL ===", { to: smtpTo, subject: subjectLine });

    try {
      // Verify connection configuration
      await transporter.verify();
      console.log("=== SMTP CONNECTION VERIFIED ===");
    } catch (verifyError) {
      console.error("=== SMTP CONNECTION FAILED ===", verifyError);
      return NextResponse.json(
        {
          success: false,
          error: `SMTP Connection Failed: ${verifyError instanceof Error ? verifyError.message : "Unknown error"}`
        },
        { status: 500 }
      );
    }

    const mailResult = await transporter.sendMail({
      from: `"Website Contact" <${smtpUser}>`,
      to: smtpTo,
      replyTo: body.email,
      subject: subjectLine,
      text: `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || "-"}
Interest: ${body.subject || "-"}

Message:
${body.message}
      `.trim(),
    });

    console.log("=== EMAIL SEND RESULT ===", { messageId: mailResult.messageId, response: mailResult.response });

    if (!mailResult.messageId) {
      throw new Error("Failed to send email (No message ID returned)");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("=== ERROR IN /api/contact ===", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal Server Error"
      },
      { status: 500 }
    );
  }
}
