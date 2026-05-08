export const SITE = {
  name: "Siboard Consulting",
  shortName: "Siboard",
  tagline: "Votre activité mérite un digital qui travaille pour vous.",
  email: "contact@siboard-consulting.fr",
  phone: "+590 690 00 00 00",
  address: "73 rue Vatable, 97110 Pointe-à-Pitre, Guadeloupe",
  siret: "89080598900013",
  vat: "FR79890805989",
  url: "https://www.siboard-consulting.fr",
} as const;

export const NAV_LINKS = [
  { href: "/automatisation", label: "Automatisation" },
  { href: "/mission-90j", label: "Mission 90J" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
] as const;

export const CTA_PRIMARY = {
  href: "/audit-gratuit",
  label: "Audit gratuit",
} as const;

export const AUDIT_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_AUDIT_WEBHOOK_URL ??
  "https://link.siboard-consulting.fr/webhook/audit-gratuit";

export type Client = {
  slug: string;
  name: string;
  initials: string;
  sector: string;
  location: string;
  result: string;
  detail: string;
  featured?: boolean;
};

export const CLIENTS: Client[] = [
  {
    slug: "odyssee-by-bea",
    name: "Odyssée by Béa",
    initials: "OB",
    sector: "Boutique mode · Showroom privé",
    location: "Guadeloupe",
    result: "Zéro présence digitale → 3ème position Google Maps",
    detail: "Création complète : site, prise de RDV, paiement en ligne.",
    featured: true,
  },
  {
    slug: "sacodif",
    name: "Sacodif",
    initials: "SC",
    sector: "Expert-comptable",
    location: "Créteil, Île-de-France",
    result: "3ème page Google → 3ème position « expert comptable Créteil »",
    detail: "Repositionnement SEO ciblé sur la requête métier prioritaire.",
    featured: true,
  },
  {
    slug: "dfp-france",
    name: "DFP France",
    initials: "DFP",
    sector: "Films techniques vitrages",
    location: "Île-de-France",
    result: "Site + agenda en ligne opérationnel sous 30 jours",
    detail: "Délais de pose remplis automatiquement, zéro saisie manuelle.",
    featured: true,
  },
  {
    slug: "bateau-alize",
    name: "Bateau Alizé",
    initials: "BA",
    sector: "Cabaret flottant · Événementiel B2B",
    location: "Paris 12e",
    result: "Mission Mistinguett 90J — offre Green Séminaire activée",
    detail: "Audit + Mission Croissance 90J done for you.",
    featured: true,
  },
  {
    slug: "axecime",
    name: "Axecime",
    initials: "AX",
    sector: "Courtage financier",
    location: "Guadeloupe",
    result: "Visibilité locale renforcée sur Google",
    detail: "SEO + Google Business Profile optimisés.",
  },
  {
    slug: "fast-computer-company",
    name: "Fast Computer Company",
    initials: "FCC",
    sector: "Magasin informatique",
    location: "Baie-Mahault, Guadeloupe",
    result: "Présence digitale structurée",
    detail: "Accompagnement digital sur l'ensemble des canaux locaux.",
  },
];

export const PROOF_STATS = [
  {
    label: "Odyssée by Béa",
    value: "3ème",
    detail: "position Google Maps · Guadeloupe",
  },
  {
    label: "Sacodif",
    value: "Page 3 → P1",
    detail: "« expert comptable Créteil »",
  },
  {
    label: "DFP France",
    value: "30 jours",
    detail: "site + agenda en ligne livrés",
  },
] as const;

export const BRIQUES_AUTOMATISATION = [
  {
    title: "Prise de RDV automatisée",
    description:
      "Confirmations, rappels et anti no-show. Votre agenda se remplit pendant que vous travaillez.",
  },
  {
    title: "Collecte d'avis Google",
    description:
      "Chaque client satisfait reçoit la bonne demande au bon moment. Votre réputation locale grandit toute seule.",
  },
  {
    title: "Réactivation clients inactifs",
    description:
      "Vos anciens clients reviennent grâce à des séquences SMS et WhatsApp personnalisées.",
  },
  {
    title: "Agent IA conversationnel",
    description:
      "Un assistant qui répond, qualifie et oriente vos prospects 24h/24, dans votre ton de marque.",
  },
] as const;

export const MISSION_90J_DELIVERABLES = [
  {
    title: "Brief web + pilotage prestataire",
    description: "Une page dédiée à votre produit phare, conçue pour convertir.",
  },
  {
    title: "LinkedIn management",
    description: "Optimisation de votre page + 1 post par semaine rédigé et validé.",
  },
  {
    title: "Prospection LinkedIn ciblée",
    description: "40 messages par semaine adressés à vos décideurs (DRH, RSE, Achats…).",
  },
  {
    title: "Tableau de bord commercial",
    description: "Pipeline partagé en temps réel, vous voyez chaque RDV qualifié arriver.",
  },
  {
    title: "Réactivation base clients",
    description: "Campagne dédiée pour rouvrir des conversations endormies depuis des mois.",
  },
] as const;

export const ECOSYSTEME = [
  {
    name: "AdamBoards",
    description: "Accompagnement financier pour dirigeants de TPE/PME",
    domain: "adamboards.fr",
    href: "https://adamboards.fr",
  },
  {
    name: "TransmiExpert",
    description: "Transmission d'entreprise — diagnostic et accompagnement",
    domain: "transmiexpert.fr",
    href: "https://www.transmiexpert.fr",
  },
  {
    name: "SecureXia",
    description: "Conformité incendie ERP — service managé Guadeloupe",
    domain: "securexia.fr",
    href: "https://securexia.fr",
  },
] as const;

export const SECTEURS = [
  "Commerce / Retail",
  "Services",
  "Restauration",
  "Artisanat",
  "Événementiel",
  "Autre",
] as const;

export const LOCALISATIONS = [
  "Guadeloupe",
  "Île-de-France",
  "Martinique",
  "Guyane",
  "Autre",
] as const;

export const PROBLEMES = [
  "Je perds des prospects / leads",
  "Mes RDV ont trop de no-shows",
  "Mes clients ne laissent pas d'avis",
  "Je veux automatiser des tâches répétitives",
  "J'ai un produit B2B à développer",
  "Autre",
] as const;
