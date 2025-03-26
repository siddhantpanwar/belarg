import { NextResponse } from 'next/server';
import { Client, Databases, ID, Query } from 'appwrite';

// Server-side Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

const databases = new Databases(client);
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
const SUBSCRIBERS_COLLECTION_ID = "67e2c87200092fc8326f";

export async function POST(request: Request) {
  try {
    const { name, email, action } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    
    // Check if subscriber exists
    if (action === 'check') {
      const response = await databases.listDocuments(
        DATABASE_ID,
        SUBSCRIBERS_COLLECTION_ID,
        [Query.equal('email', email)]
      );
      
      return NextResponse.json({ 
        exists: response.documents.length > 0 
      });
    }
    
    // Add subscriber
    if (action === 'add') {
      if (!name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
      }
      
      // Check if already exists
      const existingCheck = await databases.listDocuments(
        DATABASE_ID,
        SUBSCRIBERS_COLLECTION_ID,
        [Query.equal('email', email)]
      );
      
      if (existingCheck.documents.length > 0) {
        return NextResponse.json({ 
          success: true,
          message: "Already subscribed" 
        });
      }
      
      // Add new subscriber
      await databases.createDocument(
        DATABASE_ID,
        SUBSCRIBERS_COLLECTION_ID,
        ID.unique(),
        {
          name: name.trim(),
          email: email.trim(),
          subscribedAt: new Date().toISOString(),
        }
      );
      
      return NextResponse.json({ 
        success: true,
        message: "Subscription successful" 
      });
    }
    
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Subscriber API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}