// src/lib/schemas.ts
// Schemas JSON-LD globaux — à importer dans app/layout.tsx

/* LocalBusiness en plus d'Organization : c'est ce schema-la que Google
   croise avec la fiche Google Business Profile pour le referencement
   local. Adresse et zone desservie doivent rester identiques a la fiche. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.siboard-consulting.fr/#localbusiness",
  name: "Siboard Consulting",
  url: "https://www.siboard-consulting.fr",
  email: "contact@siboard-consulting.fr",
  image: "https://www.siboard-consulting.fr/opengraph-image.png",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 rue Vatable",
    addressLocality: "Pointe-à-Pitre",
    postalCode: "97110",
    addressRegion: "Guadeloupe",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 16.237964, longitude: -61.5315605 },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Guadeloupe" },
    { "@type": "AdministrativeArea", name: "Martinique" },
    { "@type": "AdministrativeArea", name: "Guyane" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
  ],
  knowsAbout: [
    "diagnostic de process",
    "automatisation d'entreprise",
    "formation à l'intelligence artificielle",
    "référencement local",
    "logiciel métier sur mesure",
  ],
} as const;

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
