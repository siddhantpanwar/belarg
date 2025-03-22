import Image from "next/image";
import BelargLogo from "../public/Brand_Logos/Belarg_Mark.svg";
import Leather1 from "../public/Leather_Textures/L1.jpg";
import SignupForm from "./components/SignupForm";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax leather texture background */}
      <div
        className="absolute inset-0 bg-cover transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${Leather1.src})`,
          backgroundBlendMode: "overlay",
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

          <SignupForm />
        </div>


      </main>
    </div>
  );
}
