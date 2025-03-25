import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import DiscountEmail from '@/app/emails/DiscountEmail';
import { discountService } from '@/lib/appwrite';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, discountCode, campaignSource } = await request.json();
    
    // Hardcode discount amount to 50%
    const discountAmount = 50;

    // Validate input
    if (!name || !email || !discountCode) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Store the discount in Appwrite
    try {
      await discountService.createDiscount({
        name,
        email,
        discountCode,
        discountAmount,
        campaignSource: campaignSource || 'default',
      });
    } catch (dbError) {
      console.error("Error storing discount in database:", dbError);
      // Continue with email sending even if database storage fails
    }

    console.log('Sending discount email to:', email, 'Name:', name, 'Code:', discountCode);

    // Send email with discount code
    // Use await without assigning to a variable since we're not using the result
    await resend.emails.send({
      from: 'Belarg <noreply@belarg.com>',
      to: email,
      subject: 'Your Exclusive Belarg Discount Code',
      react: DiscountEmail({ 
        userName: name,
        discountCode,
        discountAmount
      }),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Discount registration successful",
        discountCode,
        discountAmount
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error registering discount:", error);
    return NextResponse.json(
      { error: "Failed to register discount" },
      { status: 500 }
    );
  }
}