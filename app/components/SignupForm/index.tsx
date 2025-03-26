"use client";

import { useState } from "react";
import { subscriberService } from "@/lib/appwrite";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); 
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Check if email is already subscribed
      const isAlreadySubscribed = await subscriberService.isEmailSubscribed(email);
      
      if (isAlreadySubscribed) {
        // If already subscribed, show success but don't add duplicate
        setIsSubmitted(true);
        setEmail("");
        setName("");
        return;
      }
      
      // Add to Appwrite database
      await subscriberService.addSubscriber({
        name: name.trim(),
        email: email.trim()
      });
      
      // Send welcome email via API route
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email, 
          name: name.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
      setEmail("");
      setName("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="p-4 md:p-8 rounded-xl backdrop-blur-sm border-[var(--saddle-brown)] border-1">
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-medium text-[#C6A55C]">
              Join Our Journey
            </h3>
            <p className="text-sm md:text-base text-[var(--foreground)]/80">
              Be the first to know when we launch our collection.
            </p>

            {/* Add name input field */}
            <div className="flex flex-col">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-[var(--background)]/80 border border-[var(--accent)]/20 focus:border-[var(--accent)] focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg bg-[var(--background)]/80 border border-[var(--accent)]/20 focus:border-[var(--accent)] focus:outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg 
                hover:bg-[var(--accent-dark)] hover:shadow-lg hover:scale-[1.02] 
                active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50
                transition-all duration-200 ease-in-out cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl md:text-2xl font-medium text-[var(--accent)] mb-4">
              Thank You!
            </h3>
            <p className="text-[var(--foreground)]/80">
              We&apos;ll keep you updated on what&apos;s coming next.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}