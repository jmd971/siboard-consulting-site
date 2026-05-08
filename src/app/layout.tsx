import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";

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

/** Syne 800 — utilisé uniquement pour le logo SIBOARD */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: "800",
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
  icons: {
    icon: [
      { url: "/logos/siboard-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logos/siboard-favicon.svg",
    apple: "/logos/siboard-favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Siboard Consulting",
  url: "https://www.siboard-consulting.fr",
  email: "contact@siboard-consulting.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 rue Vatable",
    addressLocality: "Pointe-à-Pitre",
    postalCode: "97110",
    addressCountry: "FR",
  },
  areaServed: ["Guadeloupe", "Île-de-France", "Martinique", "Guyane"],
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Jean-Marc Dolmare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Skip link — WCAG 2.4.1 Bypass Blocks */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
