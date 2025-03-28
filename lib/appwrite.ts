import { Client, Account, Databases, ID, Query } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");
  // Note: setSelfSigned is no longer needed in newer Appwrite SDK versions

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);

// Database and collection IDs
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
export const DISCOUNT_COLLECTION_ID = "67e2b85100336ee8416c";
export const SUBSCRIBERS_COLLECTION_ID = "67e2c87200092fc8326f";

// Helper functions for discount codes
export const discountService = {
  // Create a new discount code
  async createDiscount(data: {
    name: string;
    email: string;
    discountCode: string;
    discountAmount: number;
    campaignSource: string;
  }) {
    // Check if email already has a discount code
    try {
      const existingDiscounts = await this.getDiscountsByEmail(data.email);
      
      if (existingDiscounts.length > 0) {
        // Email already has a discount code, return the existing one with a flag
        // but don't include the actual discount code to prevent reuse
        return {
          documentId: existingDiscounts[0].$id,
          email: data.email,
          name: data.name,
          alreadyExists: true, // Flag to indicate this is an existing discount
          preventCodeDisplay: true // Flag to prevent displaying the code
        };
      }
      
      // If no existing discount, create a new one
      return databases.createDocument(
        DATABASE_ID,
        DISCOUNT_COLLECTION_ID,
        ID.unique(),
        {
          ...data,
        }
      );
    } catch (error) {
      console.error('Error checking existing discounts:', error);
      throw error;
    }
  },

  // Get a discount code by code
  async getDiscountByCode(code: string) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        DISCOUNT_COLLECTION_ID,
        [Query.equal('discountCode', code)]
      );
      
      // Return the first document if found, otherwise return a fallback object
      return response.documents.length > 0 
        ? response.documents[0] 
        : { 
            discountCode: code,
            discountAmount: 50,
            name: "Customer",
            email: "",
            campaignSource: "default",
            createdAt: new Date().toISOString()
          };
    } catch (error) {
      console.error('Error fetching discount:', error);
      // Return a fallback object instead of null
      return { 
        discountCode: code,
        discountAmount: 50,
        name: "Customer",
        email: "",
        campaignSource: "default",
        createdAt: new Date().toISOString()
      };
    }
  },

  // Get all discounts for a specific email
  async getDiscountsByEmail(email: string) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        DISCOUNT_COLLECTION_ID,
        [Query.equal('email', email)]
      );
      
      return response.documents;
    } catch (error) {
      console.error('Error fetching discounts by email:', error);
      return [];
    }
  },
};

// Helper functions for subscribers
export const subscriberService = {
  // Add a new subscriber
  async addSubscriber(data: { name: string; email: string }) {
    return databases.createDocument(
      DATABASE_ID,
      SUBSCRIBERS_COLLECTION_ID,
      ID.unique(),
      {
        ...data,
      }
    );
  },

  // Check if email is already subscribed
  async isEmailSubscribed(email: string) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        SUBSCRIBERS_COLLECTION_ID,
        [Query.equal('email', email)]
      );
      
      return response.documents.length > 0;
    } catch (error) {
      console.error('Error checking subscription:', error);
      return false;
    }
  },
  
  // Get all subscribers (useful for admin purposes)
  async getAllSubscribers(limit = 100, offset = 0) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        SUBSCRIBERS_COLLECTION_ID,
        [Query.limit(limit), Query.offset(offset)]
      );
      
      return response.documents;
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      return [];
    }
  },
  
  // Get subscriber count
  async getSubscriberCount() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        SUBSCRIBERS_COLLECTION_ID,
        [Query.limit(0)]
      );
      
      return response.total;
    } catch (error) {
      console.error('Error counting subscribers:', error);
      return 0;
    }
  }
};

export { ID };