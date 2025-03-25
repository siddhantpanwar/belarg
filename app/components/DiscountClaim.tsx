"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface DiscountClaimProps {
  campaignSource?: string;
}

export default function DiscountClaim({ campaignSource = "default" }: DiscountClaimProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Generate a unique discount code
      const discountCode = `BELARG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      
      // Hardcode discount to 50%
      const discountAmount = 50;
      
      // Send to API
      const response = await fetch("/api/register-discount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          discountCode,
          discountAmount,
          campaignSource
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register for discount");
      }

      // Redirect to thank you page with the discount code and campaign info
      router.push(`/thank-you?code=${discountCode}&name=${encodeURIComponent(name)}&campaign=${campaignSource}`);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[var(--card)]/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-[var(--gold)]/20">
        <h3 className="text-xl font-semibold mb-4 text-[var(--gold)]">
          Claim Your Exclusive 50% Discount
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 bg-[var(--background)]/70 border border-[var(--gold)]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/30 transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 bg-[var(--background)]/70 border border-[var(--gold)]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/30 transition-all"
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-[var(--gold)] text-white rounded-md hover:bg-[var(--gold)]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Claim Your Discount"}
          </button>
          
          <p className="text-xs text-center mt-4 opacity-70">
            By claiming your discount, you agree to receive emails from Belarg about our products and promotions.
          </p>
        </form>
      </div>
    </div>
  );
}