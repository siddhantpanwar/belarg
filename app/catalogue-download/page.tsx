import Image from "next/image";
import Link from "next/link";
import Leather1 from "../../public/Leather_Textures/L1.jpg";
import BelargLogo from "../../public/Brand_Logos/Belarg_Mark.svg";
import BelargPDFCover from "../../public/catalogues/Belarg-PC-Cover.svg";
import CatalogueForm from "@/components/lead-magnets/catalogues-lead/CatalogueForm";
export default function CataloguesLead() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${Leather1.src})`,
          backgroundBlendMode: "overlay",
          opacity: 0.45,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/30 to-[var(--background)]/90" />

      <main className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Logo */}
          <div className="mb-8 relative w-32 h-32 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--gold)]/20 to-[var(--accent)]/20 rounded-full blur-lg animate-pulse" />
            <Link href="/">
              <Image
                src={BelargLogo}
                alt="Belarg Logo"
                className="relative z-10 w-full h-full"
                priority
              />
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-medium text-[var(--foreground)]">
            Exclusive Product Catalogue
          </h1>

          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Get an exclusive preview of our premium leather collection before
            our official launch. Enter your details below to download our
            product catalogue.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {/* Catalogue preview */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[1/1.414] bg-[var(--card)]/80 rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 z-10">
                  <Image
                    src={BelargPDFCover}
                    alt="Belarg Catalogue Cover"
                    fill
                    className="object-cover opacity-85 "
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center text-white backdrop-blur-2xl w-full py-4">
                    <h3 className="text-2xl font-light  mb-2">Belarg</h3>
                    <p className="text-sm mb-4">Premium Leather Collection</p>
                    <div className="w-16 h-1 bg-[var(--gold)] mx-auto"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-[var(--foreground)]/70 ">
                PDF • 4.2 MB
              </div>
            </div>

            {/* Form */}
            <div className="flex-1">
              <CatalogueForm />
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-[var(--accent)] hover:text-[var(--gold)] transition-colors"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">
                ←
              </span>
              <span>Return to home</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}