import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PagePulse Pro — Website Speed & SEO Analyser for Chrome",
  description:
    "Free Chrome extension. Real Core Web Vitals + 14-point SEO audit + AI-powered fix guide. No sign-up. No API key. Works on any webpage.",
  keywords: [
    "PageSpeed Insights",
    "Core Web Vitals",
    "SEO audit",
    "Chrome extension",
    "website speed",
    "LCP CLS FID",
  ],
  authors: [{ name: "Sayak Biswas" }],
  openGraph: {
    title: "PagePulse Pro — Speed & SEO Analyser",
    description:
      "Audit any webpage in seconds. Real Google PageSpeed data + 14-point SEO checklist + AI fix guide. Free Chrome extension.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PagePulse Pro — Speed & SEO Analyser",
    description:
      "Free Chrome extension. Real Core Web Vitals + SEO audit + AI fixes. No sign-up required.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
