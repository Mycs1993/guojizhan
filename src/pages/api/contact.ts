import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactPayload = {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // 1. 只允许 POST 请求
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    try {
        const body = req.body as Partial<ContactPayload>;
        console.log("=== API CONTACT REQUEST (PAGES) ===", { name: body.name, email: body.email });

        if (!body.name || !body.email || !body.message) {
            return res.status(400).json({ success: false, error: "Missing required fields" });
        }

        const smtpHost = process.env.SMTP_HOST;
        let smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const smtpTo = process.env.SMTP_TO || smtpUser;

        // Special handling for QQ Mail
        let secure = smtpPort === 465;
        if (smtpHost === "smtp.qq.com" && !process.env.SMTP_PORT) {
            smtpPort = 465;
            secure = true;
        }

        if (!smtpHost || !smtpUser || !smtpPass || !smtpTo) {
            console.error("SMTP environment variables are missing");
            return res.status(500).json({
                success: false,
                error: "Server configuration error: Missing SMTP variables."
            });
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

        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error("SMTP Verify Failed:", verifyError);
            return res.status(500).json({
                success: false,
                error: "Failed to connect to email server. Please try again later."
            });
        }

        const subjectLine = body.subject && body.subject.trim().length > 0
            ? `[Website Quote] ${body.subject}`
            : "[Website Quote] New inquiry from contact form";

        await transporter.sendMail({
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

        return res.status(200).json({ success: true });

    } catch (error) {
        console.error("API Error:", error);
        return res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : "Internal Server Error"
        });
    }
}
