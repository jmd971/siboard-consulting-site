import type { Metadata, Viewport } from "next";
import { Figtree, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE } from "@/lib/constants";
import { organizationSchema } from "@/lib/schemas";

import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
  icons: {
    icon: [
      { url: "/logos/siboard-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logos/siboard-favicon.svg",
    apple: "/logos/siboard-favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F6FF",
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
      className={`${figtree.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
