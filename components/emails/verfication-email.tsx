import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface VerificationEmailProps {
  userEmail: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  userEmail,
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Verify your email address to complete your account setup
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome! Please confirm your email to get started
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                Hi there,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                Thanks for signing up! To complete your account setup and start
                using our platform, please verify your email address by clicking
                the button below.
              </Text>
              <Text className="text-[14px] text-gray-600 m-0 mb-[24px]">
                Email: <strong>{userEmail}</strong>
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[6px] text-[16px] font-semibold no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0 mb-[8px]">
                If the button doesn &apos;t work, copy and paste this link into
                your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all m-0">
                {verificationUrl}
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="bg-gray-50 p-[16px] rounded-[6px] mb-[32px]">
              <Text className="text-[14px] text-gray-700 m-0 mb-[8px]">
                <strong>Security Note:</strong>
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0">
                This verification link will expire in 24 hours for your
                security. If you didn &apos;t create an account with us, please
                ignore this email.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                Best regards,
                <br />
                The Team
              </Text>
              <Text className="text-[12px] text-gray-400 m-0 mb-[8px]">
                123 Business Street, Suite 100
                <br />
                Business City, BC 12345
              </Text>
              <Text className="text-[12px] text-gray-400 m-0">
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
