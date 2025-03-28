import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import Script from "next/script";

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
    "leather goods, premium leather, handcrafted leather, luxury accessories, Belarg, coming soon, leather craftsmanship, luxury leather, artisan leather, sustainable leather, designer leather goods",
  authors: [{ name: "Belarg" }],
  creator: "Belarg",
  publisher: "Belarg",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://belarg.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Coming Soon - Belarg | Premium Leather Craftsmanship",
    description:
      "Discover the artistry of premium leather goods at Belarg. Join us on our journey as we prepare to unveil a collection that embodies timeless elegance and superior craftsmanship.",
    type: "website",
    locale: "en_US",
    siteName: "Belarg",
    images: [
      {
        url: "https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742620981/BELARG/ky1qk0gdwik3u9vcv9hc.png",
        width: 1200,
        height: 630,
        alt: "Belarg Premium Leather Goods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon - Belarg | Premium Leather Craftsmanship",
    description:
      "Discover the artistry of premium leather goods at Belarg. Join us on our journey as we prepare to unveil a collection that embodies timeless elegance and superior craftsmanship.",
    images: [
      "https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742620981/BELARG/ky1qk0gdwik3u9vcv9hc.png",
    ],
    creator: "@belarg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Belarg",
              "url": "https://belarg.com",
              "logo": "https://belarg.com/Brand_Logos/Belarg_Mark.svg",
              "description": "Premium leather goods crafted with timeless elegance and superior craftsmanship.",
              "sameAs": [
                "https://facebook.com/belarg",
                "https://instagram.com/belarg",
                "https://twitter.com/belarg"
              ]
            })
          }}
        />
        
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1173373927498949');
            fbq('track', 'PageView');
          `}
        </Script>
       
        {/* End Meta Pixel Code */}
      </head>
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
