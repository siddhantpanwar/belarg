"use client";

import Image from "next/image";
import { useState } from "react";
import BelargLogo from "../public/Brand_Logos/Belarg_Mark.svg";
import Leather1 from "../public/Leather_Textures/L1.jpg";
export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll add email collection logic later
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax leather texture background */}
      <div
        className="absolute inset-0 bg-cover transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${Leather1.src})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "400px 400px",
          opacity: 0.45,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/30 to-[var(--background)]/90" />

      <main className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fadeIn">
          {/* Logo placeholder - replace with actual logo */}
          <div className="mb-8 md:mb-16 relative w-40 h-40 md:w-58 md:h-58 mx-auto transform hover:scale-105 transition-transform duration-500">
            <div className="relative flex items-center justify-center h-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--gold)]/20 to-[var(--accent)]/20 rounded-full blur-xl animate-pulse" />
              <Image
                src={BelargLogo}
                alt="Belarg Logo"
                className="relative z-10 w-42 md:w-auto"
              />
            </div>
          </div>

          <h2 className="heading-xl mb-4 md:mb-6 text-[var(--foreground)] text-2xl md:text-4xl lg:text-5xl px-4">
            Crafting Tomorrow&apos;s Legacy
          </h2>

          <p className="max-w-2xl mx-auto mb-11 md:mb-16 text-justify sm:text-center text-base md:text-lg leading-relaxed tracking-wide animate-slideUp opacity-90 font-light px-6 md:px-4">
            Experience the fusion of traditional craftsmanship and contemporary
            design. Our collection of premium leather goods is coming soon,
            embodying timeless elegance and unparalleled quality.
          </p>

          <div className="mx-auto max-w-2xl px-4">
            <div className="p-4 md:p-8 rounded-xl backdrop-blur-sm">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 placeholder:text-black px-4 md:px-6 py-3 bg-white/90 text-black rounded-md border border-[var(--accent)]/20 focus:outline-none focus:border-[var(--accent)] font-[family-name:var(--font-poppins)] text-sm md:text-base"
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap text-sm md:text-base"
                  >
                    Notify Me
                  </button>
                </form>
              ) : (
                <div className="text-[var(--accent)] font-medium py-3 animate-fadeIn luxury-text-gradient text-sm md:text-base">
                  Thank you! We&apos;ll keep you updated.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl"></div>
      </main>
    </div>
  );
}
