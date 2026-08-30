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
  telephone: "+33756971329",
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
  /* siboard-logo-light : arc, disque et texte tous en #19120E, donc
     lisible sur le fond blanc que Google utilise pour afficher un logo.
     Ne pas remettre siboard-logo-dark : son texte est en #F9F6F2 et
     disparait sur fond clair. */
  logo: "https://www.siboard-consulting.fr/logos/siboard-logo-light.svg",
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
    telephone: "+33756971329",
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
    "Siboard Consulting analyse comment une entreprise travaille réellement, chiffre ce qu'elle perd, puis construit les systèmes qui le corrigent. Diagnostic de process, systèmes d'accueil et de traitement documentaire, logiciel métier sur mesure et formation à l'intelligence artificielle, pour les TPE, PME et collectivités de Guadeloupe et d'Île-de-France.",
  /* L'ordre compte : le diagnostic vient en tete parce que c'est le
     produit d'entree et la valeur ajoutee revendiquee. « Audit digital »
     a ete retire, cette offre n'existe plus. Les outils restent en fin
     de liste : knowsAbout est une declaration de competences, pas un
     titre ni une accroche, la regle 3 ne s'y applique donc pas. */
  knowsAbout: [
    "Diagnostic de process",
    "Chiffrage des pertes d'exploitation",
    "Automatisation des process metier",
    "Logiciel metier sur mesure",
    "Formation a l'intelligence artificielle en entreprise",
    "Agents conversationnels et vocaux",
    "Croissance commerciale B2B",
    "GoHighLevel",
    "Voiceflow",
    "Make.com",
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
