import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import WelcomeEmail from '@/app/emails/WelcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add debugging log
    console.log('Sending welcome email to:', email, 'Name:', name);

    const data = await resend.emails.send({
      from: 'Belarg <noreply@belarg.com>',
      to: email,
      subject: 'Welcome to Belarg',
      react: WelcomeEmail({ 
        userEmail: email, 
        userName: name // Make sure name is being passed correctly
      }),
    });

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Email sending failed:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}