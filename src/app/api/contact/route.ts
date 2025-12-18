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

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpTo = process.env.SMTP_TO || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpTo) {
      console.error("SMTP environment variables are not fully configured");
      return NextResponse.json(
        { success: false, error: "Mail service is not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subjectLine =
      body.subject && body.subject.trim().length > 0
        ? `[Website Quote] ${body.subject}`
        : "[Website Quote] New inquiry from contact form";

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

    if (!mailResult.messageId) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}