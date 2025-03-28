"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, memo } from "react";
import Leather1 from "../../../public/Leather_Textures/L1.jpg";
import { useQuery } from "@tanstack/react-query";
import { discountService } from "@/lib/appwrite";
import { Suspense } from "react";
import BelargLogo from "../../../public/Brand_Logos/Belarg_Mark.png";

// Memoize components that don't need to re-render
const BackgroundImage = memo(function BackgroundImage({ isVisible }: { isVisible: boolean }) {
  return (
    <>
      <div
        className={`absolute inset-0 bg-cover transition-opacity duration-700 ease-out ${isVisible ? 'opacity-45' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${Leather1.src})`,
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/30 to-[var(--background)]/90" />
    </>
  );
});

const SocialLinks = memo(function SocialLinks() {
  return (
    <div className="flex justify-center space-x-8">
      <a
        href="https://instagram.com/belargluxury"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[var(--card)]/40 hover:bg-[var(--card)]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a
        href="https://facebook.com/belargluxury"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[var(--card)]/40 hover:bg-[var(--card)]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>
    </div>
  );
});

function ThankYouClient() {
  const searchParams = useSearchParams();
  const discountCode = searchParams.get("code") || "BELARG-DISCOUNT";
  const name = searchParams.get("name") || "valued customer";
  const amount = "50";
  const campaign = searchParams.get("campaign") || "default";
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a small delay to trigger animations
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Verify the discount code exists in the database
  useQuery({
    queryKey: ['discount', discountCode],
    queryFn: async () => {
      // Ensure we always return a non-undefined value
      const result = await discountService.getDiscountByCode(discountCode);
      return result || { discountCode, discountAmount: 50 };
    },
    // Only run this query if we have a non-default discount code
    enabled: discountCode !== "BELARG-DISCOUNT",
  });

  // Campaign-specific content
  const campaignContent = {
    default: {
      title: `Thank You, ${name}!`,
      description: "Your exclusive discount has been secured. We'll notify you as soon as our store launches.",
      codeMessage: "Save this code to use when our store launches. We've also sent it to your email.",
    },
    "exclusive-launch": {
      title: `Thank you, ${name}!`,
      description: "Thanks for joining our exclusive launch campaign! Your discount is now ready to use at launch.",
      codeMessage: "Screenshot this code or check your email. Valid for our entire collection when we launch.",
    },
    instagram: {
      title: `You're In, ${name}!`,
      description: "Thanks for responding to our Instagram offer! Your special discount has been reserved.",
      codeMessage: "Keep this code handy for our upcoming launch. A confirmation has been sent to your email.",
    },
    facebook: {
      title: `Welcome, ${name}!`,
      description: "Thank you for subscribing through our Facebook campaign.",
      codeMessage: "This code is exclusive to our Facebook followers. We've sent a copy to your inbox as well.",
    }
  };

  // Get content based on campaign or use default
  const content = campaignContent[campaign as keyof typeof campaignContent] || campaignContent.default;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundImage isVisible={isVisible} />

      <main className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <div 
          className={`w-full max-w-2xl mx-auto text-center space-y-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Logo with glow effect */}
          <div className="mb-8 relative w-32 h-32 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--gold)]/20 to-[var(--accent)]/20 rounded-full blur-lg animate-pulse" />
            <Image
              src={BelargLogo}
              alt="Belarg Logo"
              className="relative w-full h-full"
              priority
              width={128}
              height={128}
            />
          </div>

          <h1 
            className={`text-3xl md:text-4xl font-font-heading font-medium text-[var(--foreground)] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {content.title}
          </h1>

          <p 
            className={`text-lg md:text-xl transition-opacity duration-700 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {content.description}
          </p>

          {/* Enhanced discount code display */}
          <div 
            className={`bg-[var(--card)]/80 backdrop-blur-md p-8 rounded-lg shadow-xl border border-[var(--gold)]/20 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-[var(--gold)]/20 text-[var(--gold)] rounded-full text-sm">
                Exclusive Offer
              </span>
            </div>
            <p className="text-sm mb-4">
              Your exclusive {amount}% discount code:
            </p>
            <button
              onClick={copyToClipboard}
              className="w-full bg-[var(--background)]/70 py-4 px-6 rounded-lg text-[#C6A55C] font-mono text-xl tracking-wider border border-[var(--gold)]/30 hover:border-[var(--gold)]/50 transition-all duration-300 relative group hover:scale-[1.02] active:scale-[0.98]"
            >
              {discountCode}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm opacity-60 group-hover:opacity-100">
                {copied ? "Copied!" : "Click to copy"}
              </span>
            </button>
            <p className="mt-4 text-sm text-[var(--foreground)]/80">{content.codeMessage}</p>
          </div>

          {/* Enhanced social media section */}
          <div 
            className={`mt-12 transition-opacity duration-700 delay-900 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="mb-6 text-[var(--gold)]">Stay Connected:</p>
            <SocialLinks />
          </div>

          <div
            className={`transition-opacity duration-700 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 mt-8 text-[var(--accent)] hover:text-[var(--gold)] transition-colors group"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">←</span>
              <span>Return to home</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

// Create a loading fallback component
const ThankYouFallback = memo(function ThankYouFallback() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-cover transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${Leather1.src})`,
          backgroundBlendMode: "overlay",
          opacity: 0.45,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/30 to-[var(--background)]/90" />
      
      <div className="relative z-10 text-center">
        <div className="w-32 h-32 mx-auto mb-8">
          <Image
            src={BelargLogo}
            alt="Belarg Logo"
            className="w-full h-full animate-pulse"
            width={128}
            height={128}
            priority
          />
        </div>
        <h2 className="text-2xl font-medium">Loading your discount...</h2>
      </div>
    </div>
  );
});

// Main page component with Suspense boundary
export default function ThankYou() {
  return (
    <Suspense fallback={<ThankYouFallback />}>
      <ThankYouClient />
    </Suspense>
  );
}