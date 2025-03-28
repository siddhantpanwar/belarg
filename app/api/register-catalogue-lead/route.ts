import { NextResponse } from "next/server";
import { Resend } from "resend";
import { subscriberService } from "@/lib/appwrite";
import CatalogueEmail from "@/components/emails/CatalogueEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Register the lead in your database
    await subscriberService.addSubscriber({
      name,
      email,
    });

    // Send confirmation email with catalogue attachment
    const data = await resend.emails.send({
      from: "Belarg <noreply@belarg.com>",
      to: email,
      subject: "Your Belarg Product Catalogue",
      react: CatalogueEmail({
        userName: name,
        userEmail: email,
        catalogueUrl: "https://belarg.com/catalogues/Belarg_Catalogue_2025.pdf",
      }),
    });

    console.log("Email sent successfully:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error registering catalogue lead:", error);
    return NextResponse.json(
      { error: "Failed to register" },
      { status: 500 }
    );
  }
}