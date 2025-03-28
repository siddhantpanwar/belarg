import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface CatalogueEmailProps {
  userName: string;
  userEmail: string;
  catalogueUrl: string;
}

export default function CatalogueEmail({
  userName = "Valued Customer",
  catalogueUrl,
}: CatalogueEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your Belarg Product Catalogue is Ready to Download</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://res.cloudinary.com/dfy7w8ecf/image/upload/v1742620981/BELARG/ky1qk0gdwik3u9vcv9hc.png"
            width="80"
            height="80"
            alt="Belarg"
            style={logo}
          />
          <Heading style={heading}>Your Exclusive Catalogue</Heading>

          <Section style={section}>
            <Text style={text}>Hello {userName},</Text>
            <Text style={text}>
              Thank you for your interest in Belarg&apos;s premium leather
              collection. We&apos;re excited to share our exclusive product
              catalogue with you.
            </Text>

            <Button style={button} href={catalogueUrl}>
              Download Your Catalogue
            </Button>

            <Text style={text}>
              If the button above doesn&apos;t work, you can copy and paste this
              link into your browser:
            </Text>
            <Text style={link}>
              <Link href={catalogueUrl} style={linkText}>
                {catalogueUrl}
              </Link>
            </Text>
          </Section>

          <Section style={section}>
            <Text style={text}>
              We hope you enjoy exploring our premium leather collection. Stay
              tuned for our upcoming launch!
            </Text>
            <Text style={text}>
              If you have any questions, feel free to reply to this email.
            </Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={footer}>© 2024 Belarg. All rights reserved.</Text>
            <Text style={footer}>
              You&apos;re receiving this email because you requested our product
              catalogue.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f5f1e9",
  fontFamily: '"Poppins", "Helvetica", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto 20px",
  display: "block",
};

const heading = {
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "30px 0",
  color: "#8B4513",
};

const section = {
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  margin: "20px 0",
};

const text = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#1A1A1A",
};

const button = {
  backgroundColor: "#C6A55C",
  borderRadius: "4px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 20px",
  margin: "30px auto",
  width: "240px",
};

const link = {
  margin: "20px 0",
  textAlign: "center" as const,
};

const linkText = {
  color: "#C6A55C",
  textDecoration: "underline",
  fontSize: "14px",
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "30px 0",
};

const footer = {
  fontSize: "12px",
  color: "#666666",
  textAlign: "center" as const,
  margin: "8px 0",
};