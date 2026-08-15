import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Literata } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE } from "@/lib/constants";
import { organizationSchema } from "@/lib/schemas";

import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
    default: "Siboard Consulting — Diagnostic de process et systèmes pour TPE/PME Guadeloupe et IDF",
    template: `%s · ${SITE.name}`,
  },
  description:
    "On analyse comment votre entreprise travaille vraiment, on chiffre ce que vous perdez, puis on construit les systèmes qui le corrigent. Guadeloupe, Antilles-Guyane et Île-de-France.",
  keywords: [
    "automatisation",
    "diagnostic de process",
    "logiciel métier sur mesure",
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
    title: `${SITE.name} — Diagnostic de process, systèmes et croissance`,
    description:
      "On regarde comment vous travaillez vraiment. Ensuite on répare. État des lieux chiffré, systèmes installés, logiciel métier sur mesure.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Diagnostic de process, systèmes et croissance`,
    description:
      "On regarde comment vous travaillez vraiment. Ensuite on répare.",
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
  themeColor: "#F9F6F2",
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
      className={`${archivo.variable} ${literata.variable} ${geistMono.variable} h-full antialiased`}
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
