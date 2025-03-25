import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Font,
  Button,
  Hr,
  Img
} from "@react-email/components";
import * as React from "react";

// Remove this import
// import Image from "next/image";

interface DiscountEmailProps {
  userName?: string;
  discountCode?: string;
  discountAmount?: number;
}

const socialMediaButtons = [
  {
    href: "https://belarg.com/",
    iconSrc:
      "https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621186/BELARG/Social%20Icons/sci9xunpbleuoyeibast.png",
    alt: "Website",
  },
  {
    href: "https://instagram.com/belargluxury",
    iconSrc:
      "https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621191/BELARG/Social%20Icons/cclfxi5nsewmzvsqxejr.png",
    alt: "Instagram",
  },
  {
    href: "https://facebook.com/belargluxury",
    iconSrc:
      "https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621191/BELARG/Social%20Icons/cumkpo5wkpu6yshfpklx.png",
    alt: "Facebook",
  },
];

export const DiscountEmail = ({ 
  userName, 
  discountCode = "BELARG-DISCOUNT",
  discountAmount = 50
}: DiscountEmailProps) => {
  // Ensure userName is properly handled
  const displayName = userName && userName.trim() !== '' ? userName : 'Valued Customer';
  
  return (
    <Html>
      <Font
        fontFamily="Cinzel"
        fallbackFontFamily="serif"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap",
          format: "woff2",
        }}
        fontWeight={700}
        fontStyle="normal"
      />
      <Font
        fontFamily="poppins"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Head>
        <title>Your Exclusive Belarg Discount</title>
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Preview>
        Your Exclusive {discountAmount.toString()}% Discount Code for
        Belarg&apos;s Premium Leather Collection
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Replace Image with img */}
          <Img
            src="https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742620981/BELARG/ky1qk0gdwik3u9vcv9hc.png"
            width="180"
            height="180"
            alt="Belarg Logo"
            style={logo}
          />
          <Heading
            style={{
              fontSize: "36px",
              textTransform: "uppercase" as const,
              lineHeight: "1.3",
              color: "#1A1A1A",
              fontFamily: "Cinzel",
              textAlign: "center" as const,
              margin: "0 0 24px",
            }}
          >
            Your Exclusive Discount
          </Heading>
          <Text style={subheading}>Premium Leather Collection</Text>

          <Container style={contentContainer}>
            <Text style={paragraph}>Dear {displayName},</Text>
            <Text style={paragraph}>
              Thank you for your interest in Belarg&apos;s premium leather
              collection. We&apos;re excited to offer you an exclusive discount
              on your first purchase when we launch.
            </Text>

            {/* Discount code display */}
            <Container style={discountContainer}>
              <Text style={discountLabel}>
                Your {discountAmount}% Discount Code:
              </Text>
              <Text style={discountCodestyle}>{discountCode}</Text>
              <Text style={discountNote}>
                Save this code to use when our store launches
              </Text>
            </Container>

            <Text style={paragraph}>
              As a valued member of our community, you&apos;ll also enjoy:
            </Text>
            <Container style={benefitsContainer}>
              <Text style={benefitItem}>• Early access to new collections</Text>
              <Text style={benefitItem}>• Special member-only offers</Text>
              <Text style={benefitItem}>
                • Craftsmanship insights and stories
              </Text>
            </Container>
          </Container>

          <Container style={ctaContainer}>
            <Button href="https://belarg.com" style={ctaButton}>
              Visit Our Website
            </Button>
          </Container>

          <Hr style={divider} />

          <Container style={contactContainer}>
            <Text style={contactText}>
              {/* Replace Image with img */}
              <Img
                src="https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621186/BELARG/Social%20Icons/ggxee7gtuddfz526phjj.png"
                width="32"
                height="28"
                alt="Phone"
                style={iconStyle}
              />
              +971 50 884 6907
            </Text>
            <Text style={contactText}>
              {/* Replace Image with img */}
              <Img
                src="https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621186/BELARG/Social%20Icons/zndqiu0rrivavzrtdgba.png"
                width="32"
                height="28"
                alt="Email"
                style={iconStyle}
              />
              Info@belarg.com
            </Text>
          </Container>

          <Container style={socialContainer}>
            {socialMediaButtons.map((button, index) => (
              <a key={index} href={button.href} style={socialLink}>
                {/* Replace Image with img */}
                <Img
                  src={button.iconSrc}
                  width="28"
                  height="30"
                  alt={button.alt}
                  style={iconStyle}
                />
              </a>
            ))}
          </Container>

          <Text style={footer}>
            © 2025 Belarg. All rights reserved.
            <br />
            <span style={footerLink}>Privacy Policy</span> •{" "}
            <span style={footerLink}>Terms of Service</span>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#F5F1E9", // --cream-white
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "580px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto 32px",
  display: "block",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#8B4513", // --saddle-brown
  margin: "0 0 16px",
  textAlign: "center" as const,
};

const discountContainer = {
  margin: "24px auto",
  padding: "24px",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  border: "1px solid #D4C3A3",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
};

const discountLabel = {
  fontSize: "14px",
  color: "#8B4513",
  margin: "0 0 8px",
};

const discountCodestyle = {
  fontSize: "28px",
  fontFamily: "monospace",
  fontWeight: "bold",
  letterSpacing: "2px",
  color: "#1A1A1A",
  margin: "8px 0",
  padding: "8px 16px",
  backgroundColor: "#F5F1E9",
  borderRadius: "4px",
  display: "inline-block",
};

const discountNote = {
  fontSize: "12px",
  color: "#8B4513",
  margin: "8px 0 0",
  fontStyle: "italic",
};

const ctaContainer = {
  margin: "32px auto",
};

const ctaButton = {
  backgroundColor: "#8B4513",
  color: "#FFFFFF",
  padding: "12px 24px",
  borderRadius: "4px",
  fontWeight: "500",
  fontSize: "16px",
  textDecoration: "none",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const contactContainer = {
  margin: "24px auto",
  padding: "0 20px",
};

const contactText = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#8B4513",
  margin: "8px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const socialContainer = {
  margin: "24px auto",
  display: "flex",
  justifyContent: "center",
  gap: "16px",
};

const socialLink = {
  textDecoration: "none",
  color: "#8B4513",
};

const iconStyle = {
  marginRight: "8px",
  verticalAlign: "middle",
};

const subheading = {
  fontSize: "18px",
  color: "#8B4513",
  fontFamily: "Cinzel",
  margin: "0 0 32px",
  fontWeight: "400",
};

const contentContainer = {
  padding: "0 24px",
  maxWidth: "480px",
  margin: "0 auto",
};

const benefitsContainer = {
  textAlign: "left" as const,
  margin: "16px auto 32px",
  padding: "16px 32px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backgroundimg: "url('https://res.cloudinary.com/dfy7w8ecf/img/upload/v1742622326/BELARG/Leather%20Textures/g2ldicy3pvudnen9vxpb.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
};

const benefitItem = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#FFFFFF",
  margin: "8px 0",
};

const divider = {
  borderTop: "1px solid #D4C3A3",
  margin: "32px auto",
  width: "80%",
};

const footer = {
  fontSize: "12px",
  color: "#666666",
  margin: "32px 0 0",
  lineHeight: "20px",
};

const footerLink = {
  color: "#8B4513",
  textDecoration: "underline",
  cursor: "pointer",
};

export default DiscountEmail;