import type { NextConfig } from "next";

/* Redirections des URLs de l'ancien site Wix, hors ligne depuis ~2024.
   Elles renvoient 404 depuis deux ans : Google les a deja desindexees,
   l'enjeu n'est donc pas l'indexation mais le peu de jus que de vieux
   backlinks pointant encore dessus peuvent transmettre. En 308
   permanent, pas en 307 : seul le permanent transmet.
   Chaque ancienne adresse va vers la page la plus proche par le sens,
   jamais toutes vers l'accueil : un groupage massif se lit comme un
   soft 404. */
const ANCIENNES_URLS: Array<[string, string]> = [
  // Pages institutionnelles
  ["/about", "/a-propos"],
  ["/nous-choisir", "/a-propos"],
  ["/contact", "/etat-des-lieux#demander"],
  ["/contacts", "/etat-des-lieux#demander"],
  ["/mentionslegales", "/mentions-legales"],
  ["/legal", "/mentions-legales"],
  ["/privacy", "/politique-confidentialite"],

  // Offres et diagnostics
  ["/nos-offres", "/solutions"],
  ["/services-informatiques", "/solutions"],
  ["/solutions-cloud", "/solutions"],
  ["/booster-pro", "/solutions"],
  ["/starter-funnel", "/solutions"],
  ["/recuperation-des-donnees", "/solutions"],
  ["/audit-guadeloupe", "/etat-des-lieux"],
  ["/calculator", "/etat-des-lieux"],

  // Anciens produits packages -> le systeme qui les remplace
  ["/rdvflow", "/solutions#accueil"],
  ["/avisflow", "/solutions#fil"],
  ["/clientback", "/solutions#retour"],

  // Preuves et pages sectorielles
  ["/case-studies", "/realisations"],
  ["/secteurs", "/realisations"],
  ["/avocats", "/realisations"],
  ["/consultants", "/realisations"],
  ["/courtiers", "/realisations"],
  ["/experts-comptables", "/realisations"],

  // Divers
  ["/guadeloupe", "/"],
  ["/ressources", "/"],
  ["/search", "/"],
  ["/faq", "/mission-90j"],

  // Routes de la version precedente, jusque-la en 307 temporaire
  ["/automatisation", "/solutions"],
  ["/audit-gratuit", "/etat-des-lieux"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /* L'apex et le www repondaient tous deux 200 : duplication sur la
         page la plus importante du site. */
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "siboard-consulting.fr" }],
        destination: "https://www.siboard-consulting.fr/:path*",
        permanent: true,
      },
      ...ANCIENNES_URLS.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    })),
    ];
  },
};

export default nextConfig;
