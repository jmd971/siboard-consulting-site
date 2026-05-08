import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE } from "@/lib/constants";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Siboard Consulting — Automatisation & IA pour TPE/PME Guadeloupe et IDF",
    template: `%s · ${SITE.name}`,
  },
  description:
    "Audit digital, automatisation sur mesure et agents IA pour les TPE/PME en Guadeloupe et Île-de-France. On comprend votre process avant de construire votre solution.",
  keywords: [
    "automatisation",
    "audit digital",
    "Guadeloupe",
    "TPE PME",
    "agent IA",
    "prise de RDV",
    "Siboard",
    "Jean-Marc Dolmare",
  ],
  authors: [{ name: "Jean-Marc Dolmare" }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Audit, automatisation, croissance`,
    description:
      "On comprend votre process avant de construire votre solution. Audit gratuit, automatisation sur mesure et Mission Croissance 90J.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Audit, automatisation, croissance`,
    description:
      "On comprend votre process avant de construire votre solution.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
