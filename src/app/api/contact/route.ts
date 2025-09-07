import { NextResponse, NextRequest } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Missing Telegram bot token or chat ID');
    return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
  }

  try {
    const { name, subject, email, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const textMessage = `
      🎉 New Contact Form Submission! 🎉
      ---
      **Name:** ${name}
      **Subject:** ${subject}
      **Email:** ${email}
      **Message:** ${message}
    `;

    const telegramResponse = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: textMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      throw new Error(`Failed to send message to Telegram: ${errorText}`);
    }

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error in API Route:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}
