import type { Metadata } from "next";
import "./globals.css";
import "./mobile-overrides.css";
import "./redesign.css";
import "./cinematic.css";
import { MotionSettings } from "../components/motion-settings";

export const metadata: Metadata = {
  title: "Zitters — AI-powered growth for modern businesses",
  description:
    "Get found, convert more customers and automate growth with Zitters AI, omnichannel engagement, local presence and industry products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body><MotionSettings>{children}</MotionSettings></body>
    </html>
  );
}
