"use client";

import { useState } from "react";

export default function CatalogueForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send to API
      const response = await fetch("/api/register-catalogue-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          leadSource: "catalogue_download",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }
      
      // Track the Lead event after successful submission
      if (typeof window !== "undefined" && window.fbq) {
        // Use properly typed fbq function
        window.fbq("track", "Lead", { lead_type: "catalogue" });
      }
      
      setSuccess(true);
      
      // Trigger download after a short delay
      setTimeout(() => {
        // Replace with your actual catalogue PDF path
        const catalogueUrl = "/catalogues/Belarg_Catalogue_2025.pdf";
        const link = document.createElement("a");
        link.href = catalogueUrl;
        link.setAttribute("download", "Belarg_Catalogue_2025.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
      
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[var(--card)]/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-[var(--gold)]/20">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[var(--gold)]">
            Thank You!
          </h3>
          <p className="mb-4">
            Your catalogue is downloading now. If the download doesn&apos;t
            start automatically,
            <button
              onClick={() => {
                const catalogueUrl = "/catalogues/Belarg_Catalogue_2025.pdf";
                const link = document.createElement("a");
                link.href = catalogueUrl;
                link.setAttribute("download", "Belarg_Catalogue_2025.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="text-[var(--gold)] hover:underline ml-1"
            >
              click here
            </button>
            .
          </p>
          <p className="text-sm text-[var(--foreground)]/70">
            We&apos;ve also sent a copy to your email for future reference.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--card)]/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-[var(--gold)]/20">
      <h3 className="text-xl font-semibold mb-4 text-[var(--gold)]">
        Download Our Catalogue
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
          className="w-full py-2 px-4 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent)]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : "Download Catalogue"}
        </button>
        
        <p className="text-xs text-center mt-4 opacity-70">
          By downloading, you agree to receive emails from Belarg about our products and promotions.
        </p>
      </form>
    </div>
  );
}