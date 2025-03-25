import Image from "next/image";
import BelargLogo from "../../public/Brand_Logos/Belarg_Mark.svg";
import Leather1 from "../../public/Leather_Textures/L1.jpg";
import DiscountClaim from "../components/DiscountClaim";


export default function DiscountCampaign() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Leather texture background */}
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
          {/* Logo with animation */}
          <div className="mb-8 md:mb-12 relative w-40 h-40 md:w-48 md:h-48 mx-auto transform hover:scale-105 transition-transform duration-500">
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
            Exclusive Launch Offer
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-justify sm:text-center text-base md:text-lg leading-relaxed tracking-wide animate-slideUp opacity-90 font-light px-6 md:px-4">
            Be among the first to experience Belarg&apos;s premium leather collection. 
            Sign up now to receive an exclusive 50-60% discount code valid for your first purchase when we launch.
          </p>
          
          {/* Discount countdown and limited spots section */}
          <div className="mb-8 p-4 sm:p-6 bg-[var(--accent-foreground)]/5 rounded-lg backdrop-blur-sm border border-[var(--gold)]/10">
            <p className="text-[var(--gold)] font-medium mb-3 sm:mb-4 text-sm sm:text-base">Limited-time offer — Reserve your discount now</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-center">
              <div className="bg-[var(--accent)]/10 px-3 sm:px-6 py-2 sm:py-3 rounded flex-1 max-w-[80px] sm:max-w-none">
                <span className="block text-xl sm:text-3xl font-bold">14</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider">Days</span>
              </div>
              <div className="bg-[var(--accent)]/10 px-3 sm:px-6 py-2 sm:py-3 rounded flex-1 max-w-[80px] sm:max-w-none">
                <span className="block text-xl sm:text-3xl font-bold">08</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider">Hours</span>
              </div>
              <div className="bg-[var(--accent)]/10 px-3 sm:px-6 py-2 sm:py-3 rounded flex-1 max-w-[80px] sm:max-w-none">
                <span className="block text-xl sm:text-3xl font-bold">32</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider">Minutes</span>
              </div>
            </div>
          </div>

          {/* Discount claim form */}
          <DiscountClaim campaignSource="exclusive-launch" />
          
          {/* Additional information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-lg font-medium text-[var(--gold)] mb-2">Premium Quality</h3>
              <p className="text-sm opacity-80">Handcrafted leather goods made with the finest materials and traditional techniques</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-[var(--gold)] mb-2">Exclusive Design</h3>
              <p className="text-sm opacity-80">Unique pieces that blend timeless elegance with contemporary aesthetics</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-[var(--gold)] mb-2">Limited Edition</h3>
              <p className="text-sm opacity-80">Be among the first to own our inaugural collection of luxury leather goods</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}