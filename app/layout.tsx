import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coming Soon - Belarg | Premium Leather Craftsmanship",
  description:
    "Discover the artistry of premium leather goods at Belarg. Join us on our journey as we prepare to unveil a collection that embodies timeless elegance and superior craftsmanship.",
  keywords:
    "leather goods, premium leather, handcrafted leather, luxury accessories, Belarg, coming soon",
  openGraph: {
    title: "Coming Soon - Belarg | Premium Leather Craftsmanship",
    description:
      "Discover the artistry of premium leather goods at Belarg. Join us on our journey as we prepare to unveil a collection that embodies timeless elegance and superior craftsmanship.",
    type: "website",
    locale: "en_US",
    siteName: "Belarg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon - Belarg | Premium Leather Craftsmanship",
    description:
      "Discover the artistry of premium leather goods at Belarg. Join us on our journey as we prepare to unveil a collection that embodies timeless elegance and superior craftsmanship.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${poppins.variable} font-sans bg-[var(--background)] text-[var(--foreground)]`}
        suppressHydrationWarning // Add this attribute to suppress hydration warnings
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
