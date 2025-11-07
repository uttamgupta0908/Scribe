import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";

import VerificationEmail from "@/components/emails/verfication-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, requess) => {
      try {
        await resend.emails.send({
          from: "Scribe <scribe@cridev.com>",
          to: [user.email],
          subject: "Veriify yourr email address",
          react: VerificationEmail({
            userEmail: user.email,
            verificationUrl: url,
          }),
        });
      } catch (error) {
        console.log("Unexpected ERROR", error);
      }
    },
    sendOnSignUp: true,
  },
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [nextCookies()],
});
