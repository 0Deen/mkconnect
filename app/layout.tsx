import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { LanguagePopup } from "@/components/LanguagePopup";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileTabBar } from "@/components/MobileTabBar";
import { FloatingActions } from "@/components/FloatingActions";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MK Connection Limited — Connecting talents to international opportunities",
  icons: { icon: "/mk/logo-blue.jpeg" },
  description:
    "MK Connection Limited helps Kenyans access safe and genuine international opportunities across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} font-body antialiased`}>
        <LanguageProvider>
          <LanguagePopup />
          <Navbar />
          <main className="pb-24 lg:pb-0">{children}</main>
          <Footer />
          <MobileTabBar />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
