import Image from "next/image";
import Link from "next/link";
import BelargLogo from "../public/Brand_Logos/Belarg_Mark.svg";
import Leather1 from "../public/Leather_Textures/L1.jpg";
import SignupForm from "../components/lead-magnets/SignupForm";

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

          <h2 className="heading-xl text-center mb-4 md:mb-6 text-[var(--foreground)] text-2xl md:text-4xl lg:text-5xl px-2">
            Crafting Tomorrow&apos;s Legacy
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-justify sm:text-center text-base md:text-lg leading-relaxed tracking-wide animate-slideUp opacity-90 font-light px-2 md:px-4">
            Experience the fusion of traditional craftsmanship and contemporary
            design. Sign up before our store launches to claim your exclusive
            discount on our premium leather collection.
          </p>

          {/* Campaign Cards Section */}
          <div className="w-full mb-12">
            <h3 className="text-2xl md:text-2xl font-medium mb-8 text-[var(--gold)]">
              Exclusive Offers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Launch Discount Campaign Card */}
              <div className="group relative overflow-hidden rounded-xl border border-[var(--gold)]/20 bg-[var(--card)]/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-[var(--gold)]/10 hover:border-[var(--gold)]/40">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg md:text-xl font-medium text-[var(--foreground)]">
                      Launch Discount
                    </h4>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--gold)]/20 text-[var(--gold)]">
                      Limited Time
                    </span>
                  </div>

                  <p className="text-sm md:text-base mb-6 opacity-80 text-left">
                    Be among the first to experience our premium leather
                    collection with an exclusive 50-60% discount on your first
                    purchase.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-[var(--gold)]">
                      <span className="text-sm">50-60% OFF</span>
                    </div>

                    <Link
                      href="/luxury-discount"
                      className="relative inline-flex items-center px-4 py-2 overflow-hidden text-sm font-medium transition-all bg-[var(--gold)] text-white rounded-md hover:bg-[var(--gold)]/90 group-hover:shadow-md"
                    >
                      <span>Claim Now</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Catalogue Download Card (Previously Early Access) */}
              <div className="group relative overflow-hidden rounded-xl border border-[var(--accent)]/20 bg-[var(--card)]/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent)]/10 hover:border-[var(--accent)]/40">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg md:text-xl font-medium text-[var(--foreground)]">
                      Product Catalogue
                    </h4>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">
                      Exclusive
                    </span>
                  </div>

                  <p className="text-sm md:text-base mb-6 opacity-80 text-left">
                    Get a sneak peek at our upcoming leather collection.
                    Download our exclusive product catalogue to explore our
                    designs before launch.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-[var(--accent)]">
                      <span className="text-sm">PDF Download</span>
                    </div>

                    <Link
                      href="/catalogue-download"
                      className="relative inline-flex items-center px-4 py-2 overflow-hidden text-sm font-medium transition-all bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent)]/90 group-hover:shadow-md"
                    >
                      <span>Get Catalogue</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SignupForm />
        </div>
      </main>
    </div>
  );
}
