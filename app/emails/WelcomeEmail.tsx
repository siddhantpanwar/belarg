import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Font,
} from "@react-email/components";
import * as React from "react";


interface WelcomeEmailProps {
  userEmail?: string;
  userName?: string;  // Add userName parameter back
}


const socialMediaButtons = [
  {
    href: "https://belarg.com/",
    iconSrc:
      "https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621186/BELARG/Social%20Icons/sci9xunpbleuoyeibast.png",
    alt: "Website", // Fixed alt text
  },
  {
    href: "https://instagram.com/belargluxury", // Updated Instagram link
    iconSrc:
      "https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621191/BELARG/Social%20Icons/cclfxi5nsewmzvsqxejr.png",
    alt: "Instagram",
  },
  {
    href: "https://facebook.com/belargluxury", // Updated Facebook link
    iconSrc:
      "https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621191/BELARG/Social%20Icons/cumkpo5wkpu6yshfpklx.png",
    alt: "Facebook",
  },
];

export const WelcomeEmail = ({ userEmail, userName }: WelcomeEmailProps) => {
  // Add console log for debugging
  console.log('WelcomeEmail received:', { userEmail, userName });
  
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
        <title>Welcome to Belarg Luxury</title>
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Preview>Welcome to Belarg - Premium Leather Craftsmanship</Preview>
      <Body style={main}>
        <Container style={container}>
          <img
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
            Welcome to Belarg
          </Heading>
          <Text style={subheading}>Premium Leather Craftsmanship</Text>

          <Container style={contentContainer}>
            <Text style={paragraph}>Dear {displayName},</Text>
            <Text style={paragraph}>
              Thank you for joining the Belarg family. We&apos;re delighted to
              welcome you to our world of premium leather craftsmanship, where
              tradition meets contemporary elegance.
            </Text>
            <Text style={paragraph}>
              As a subscriber, you&apos;ll enjoy exclusive benefits:
            </Text>
            <Container style={benefitsContainer}>
              <Text style={benefitItem}>• Early access to new collections</Text>
              <Text style={benefitItem}>• Special member-only offers</Text>
              <Text style={benefitItem}>
                • Craftsmanship insights and stories
              </Text>
            </Container>
          </Container>

          <Container style={divider} />

          <Container style={contactContainer}>
            <Text style={contactText}>
              <img
                src="https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742621186/BELARG/Social%20Icons/ggxee7gtuddfz526phjj.png"
                width="32"
                height="28"
                alt="Phone"
                style={iconStyle}
              />
              +971 50 884 6907
            </Text>
            <Text style={contactText}>
              <img
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
                <img
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

export default WelcomeEmail;

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
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
  backgroundImage: "url('https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742622326/BELARG/Leather%20Textures/g2ldicy3pvudnen9vxpb.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
};

const benefitItem = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#FFFFFF", // Changed to white for better contrast
  margin: "8px 0",
  // textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Added text shadow for better readability
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
