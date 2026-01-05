const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ success: false, error: 'Method Not Allowed' }),
        };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        console.log('=== NETLIFY FUNCTION: contact ===', { name: body.name, email: body.email });

        if (!body.name || !body.email || !body.message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ success: false, error: 'Missing required fields' }),
            };
        }

        const smtpHost = process.env.SMTP_HOST;
        let smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const smtpTo = process.env.SMTP_TO || smtpUser;

        // QQ Mail special handling
        let secure = smtpPort === 465;
        if (smtpHost === 'smtp.qq.com' && !process.env.SMTP_PORT) {
            smtpPort = 465;
            secure = true;
        }

        if (!smtpHost || !smtpUser || !smtpPass) {
            console.error('Missing SMTP env vars');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ success: false, error: 'Server configuration error' }),
            };
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: secure,
            auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.verify();

        const subject = body.subject && body.subject.trim()
            ? `[Website Quote] ${body.subject}`
            : '[Website Quote] New inquiry';

        await transporter.sendMail({
            from: `"Website Contact" <${smtpUser}>`,
            to: smtpTo,
            replyTo: body.email,
            subject: subject,
            text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || '-'}\nInterest: ${body.subject || '-'}\n\nMessage:\n${body.message}`,
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ success: false, error: error.message || 'Internal Server Error' }),
        };
    }
};
