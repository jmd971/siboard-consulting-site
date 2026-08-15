// src/lib/schemas.ts
// Schemas JSON-LD globaux — à importer dans app/layout.tsx

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Siboard Consulting",
  url: "https://www.siboard-consulting.fr",
  logo: "https://www.siboard-consulting.fr/logo.svg",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Jean-Marc Dolmare",
    // Ne pas ajouter de diplome ici : decision du dirigeant, aucune
    // mention de formation initiale sur le site ni dans les donnees
    // structurees.
    jobTitle: "Fondateur, ingénieur réseaux et télécommunications",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@siboard-consulting.fr",
    contactType: "customer service",
    availableLanguage: "French",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 rue Vatable",
    addressLocality: "Pointe-à-Pitre",
    postalCode: "97110",
    addressCountry: "FR",
    addressRegion: "Guadeloupe",
  },
  areaServed: [
    { "@type": "Place", name: "Guadeloupe" },
    { "@type": "Place", name: "Martinique" },
    { "@type": "Place", name: "Guyane" },
    { "@type": "Place", name: "Île-de-France" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/siboard-consulting",
  ],
  description:
    "Siboard Consulting accompagne les TPE/PME en Guadeloupe et Île-de-France : audit digital, automatisation sur mesure, agents IA et missions de croissance commerciale B2B.",
  knowsAbout: [
    "Automatisation digitale",
    "Agents IA conversationnels",
    "GoHighLevel",
    "Voiceflow",
    "Make.com",
    "Croissance commerciale B2B",
    "Audit digital",
  ],
};

// Usage dans app/layout.tsx :
//
// import { organizationSchema } from '@/lib/schemas';
//
// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
