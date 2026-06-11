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
  { href: "/solutions", label: "Solutions" },
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
  href?: string;
  featured?: boolean;
};

export const CLIENTS: Client[] = [
  {
    slug: "odyssee-by-bea",
    name: "Odyssée by Béa",
    initials: "OB",
    sector: "Boutique mode & accessoires, showroom privé",
    location: "Baie-Mahault, Guadeloupe",
    result: "Zéro présence digitale → 1ère position Google",
    detail:
      "Création complète de A à Z : site web + Google Business Profile + prise de RDV en ligne + lien de paiement Stripe + stratégie avis Google (QR code + relances ×2).",
    href: "https://odysseebybea.fr",
    featured: true,
  },
  {
    slug: "sacodif",
    name: "Sacodif",
    initials: "SC",
    sector: "Expert-comptable",
    location: "Créteil, Île-de-France",
    result: "3ème page Google → 3ème position « expert comptable Créteil »",
    detail: "Repositionnement SEO — refonte du contenu et de la structure du site.",
    href: "https://sacodif.fr",
    featured: true,
  },
  {
    slug: "evolutia-formation",
    name: "Évolutia Formation",
    initials: "EF",
    sector: "Formation sur mesure concours territoriaux",
    location: "Guadeloupe",
    result: "1ère position Google · « formations concours publiques Guadeloupe »",
    detail:
      "Environnement digital complet : site web + SEO ciblé + chatbot de qualification des candidats + gestion de rendez-vous automatisée.",
    href: "https://evolutiaformation.fr",
    featured: true,
  },
  {
    slug: "dfp-france",
    name: "DFP France",
    initials: "DFP",
    sector: "Films techniques pour vitrages (solaire, sécurité, anti-graffiti)",
    location: "Île-de-France",
    result: "Agenda en ligne opérationnel, flux de RDV automatisé",
    detail: "Création complète de A à Z : site web + système de prise de rendez-vous intégré.",
    href: "https://www.dfpfrance.fr",
    featured: true,
  },
  {
    slug: "axecime",
    name: "Axecime",
    initials: "AX",
    sector: "Courtage financier (prêts immobiliers, assurance)",
    location: "Les Abymes, Guadeloupe",
    result: "Processus de collecte de dossiers entièrement automatisé, zéro relance manuelle",
    detail:
      "Application métier sur mesure : gestion et automatisation des données clients, workflow de récupération des dossiers incomplets, relances automatiques + SEO + Google Business Profile.",
    href: "https://axecime.com",
    featured: true,
  },
  {
    slug: "fast-computer-company",
    name: "Fast Computer Company",
    initials: "FCC",
    sector: "Magasin informatique & réparation",
    location: "Baie-Mahault, Guadeloupe",
    result: "Présence digitale complète, acquisition et support client automatisés 24h/24",
    detail:
      "Création complète de A à Z : site web + Google Business Profile + chatbot support et acquisition client + automatisation des prises de RDV.",
    href: "https://fcc-gp.com",
    featured: true,
  },
  {
    slug: "bateau-alize",
    name: "Bateau Alizé",
    initials: "BA",
    sector: "Cabaret flottant · Événementiel B2B",
    location: "Paris 12e",
    result: "Mission Mistinguett 90J — offre Green Séminaire B2B activée",
    detail: "Audit stratégique + Mission Croissance 90J done for you.",
    featured: false,
  },
];

export const PROOF_STATS = [
  {
    label: "Odyssée by Béa",
    value: "1ère",
    detail: "position Google · « boutique de femme Guadeloupe »",
  },
  {
    label: "Évolutia Formation",
    value: "1ère",
    detail: "position Google · « formations concours publiques Guadeloupe »",
  },
  {
    label: "Sacodif",
    value: "Page 3 → P1",
    detail: "« expert comptable Créteil » · Île-de-France",
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
    description:
      "Accompagnement financier mensuel pour dirigeants de TPE/PME — méthode structurée, suivi personnalisé.",
    note: "Plateforme et application construites par Siboard.",
    domain: "adamboards.fr",
    href: "https://adamboards.fr",
  },
  {
    name: "TransmiExpert",
    description:
      "Diagnostic et accompagnement pour céder ou reprendre une entreprise dans les meilleures conditions.",
    note: "Site web et outil de diagnostic digital construits par Siboard.",
    domain: "transmiexpert.fr",
    href: "https://www.transmiexpert.fr",
  },
  {
    name: "SecureXia",
    description:
      "Service managé de mise en conformité incendie pour les ERP en Guadeloupe — visite terrain + plateforme de suivi.",
    note: "Plateforme client et système de documentation construits par Siboard.",
    domain: "securexia.fr",
    href: "https://securexia.fr",
  },
] as const;

export const SOLUTIONS_BRIQUES_AUTO = [
  {
    title: "Agenda rempli automatiquement",
    description:
      "Confirmations, rappels et anti no-show. Votre planning se remplit pendant que vous travaillez.",
  },
  {
    title: "Collecte d'avis Google",
    description:
      "QR code en point de vente, email post-prestation automatique, relances J+3 et J+7. Votre réputation locale grandit sans y penser.",
  },
  {
    title: "Réactivation clients inactifs",
    description:
      "Vos anciens clients reviennent grâce à des séquences personnalisées par WhatsApp et SMS.",
  },
  {
    title: "Synchronisation multi-outils",
    description:
      "Vos données circulent entre vos applications sans double saisie ni intervention manuelle.",
  },
  {
    title: "Automatisation back-office",
    description:
      "Devis relancés automatiquement à J+2 et J+5, suivi des impayés avec relances graduées, planning d'équipe sans fichier Excel qui plante, rapport d'activité hebdomadaire envoyé au dirigeant sans saisie manuelle. Votre administratif tourne pendant que vous produisez.",
  },
] as const;

export const SOLUTIONS_BRIQUES_IA = [
  {
    title: "Agent conversationnel 24h/24",
    description:
      "Il répond à vos prospects, qualifie leurs besoins et les oriente — même quand vous dormez.",
  },
  {
    title: "Agent vocal qui décroche à votre place",
    description:
      "Filtre les appels entrants, prend les RDV et transmet les demandes urgentes. Aucune intervention humaine.",
  },
  {
    title: "Assistant métier sur mesure",
    description:
      "Chiffrages et études de prix pré-remplis à partir de vos anciens devis, rédaction de rapports d'intervention, synthèse de documents, réponse aux appels d'offres. Entraîné sur votre contexte et vos documents — pas un chatbot générique.",
  },
  {
    title: "Intégrations avancées sur mesure",
    description:
      "Connexions API, bases de données, outils métier — on bâtit ce que les solutions génériques ne peuvent pas faire.",
  },
] as const;

export const SECTEURS = [
  "Commerce / Retail",
  "Services",
  "Restauration",
  "Artisanat",
  "BTP",
  "Événementiel",
  "Santé / Bien-être",
  "Immobilier / Courtage",
  "Autre",
] as const;

export const PROBLEMES = [
  "Je perds des prospects / leads",
  "Trop de no-shows sur mes RDV",
  "Mes clients ne laissent pas d'avis",
  "Je veux automatiser des tâches répétitives",
  "J'ai une offre B2B à développer",
  "Je veux créer ou refaire mon site web",
  "Autre",
] as const;
