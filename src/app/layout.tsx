import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import our components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CookieConsent from "../components/common/CookieConsent";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "PTSDToday - Start Healing from PTSD—Today",
  description: "A nonprofit open-source platform providing resources, self-assessment tools, and community support for those dealing with PTSD.",
  keywords: "PTSD, trauma, healing, mental health, resources, therapy, support, self-assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-neutral-50">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
