import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const OFFRES = [
  {
    badge: "Pour les TPE et PME qui perdent des leads ou du temps",
    title: "L’État des lieux, puis les systèmes",
    description:
      "On commence toujours par regarder comment vous travaillez vraiment, de la première demande d’un client jusqu’à la facture encaissée. On chiffre ce que vous perdez avec vos chiffres à vous. Ensuite seulement, on installe ce que le constat a désigné.",
    points: [
      "Le diagnostic écrit, chiffré en euros et en heures, à partir de vos données",
      "Cinq systèmes prescrits selon ce qu’on trouve, jamais choisis dans un catalogue",
      "Le logiciel sur mesure quand aucun outil du marché ne convient",
    ],
    cta: { href: "/etat-des-lieux", label: "Commencer par l’état des lieux" },
  },
  {
    badge: "Pour les pros avec une offre B2B à activer",
    title: "Mission Croissance 90J",
    description:
      "Vous avez une offre puissante mais pas le temps ni les compétences pour la commercialiser en B2B. On identifie votre produit phare, on construit la mécanique commerciale complète et on l’exécute.",
    points: [
      "Brief web, LinkedIn et prospection ciblée",
      "Tableau de bord commercial partagé en temps réel",
      "Deux réunions par mois et un compte rendu écrit",
    ],
    cta: { href: "/mission-90j", label: "Voir la Mission 90J" },
  },
] as const;

const JALONS = [
  { j: "J1", label: "Cadrage" },
  { j: "J30", label: "Premiers RDV" },
  { j: "J60", label: "Accélération" },
  { j: "J90", label: "Bilan" },
] as const;

/* Le calendrier de la Mission 90J : une vraie donnée, rendue comme une
   échelle de rapport et non comme un schéma décoratif. */
function Calendrier() {
  return (
    <div className="mt-8">
      <ol className="grid grid-cols-4 border-t border-rule-strong">
        {JALONS.map((jalon, i) => (
          <li
            key={jalon.j}
            className={cn("pt-3", i > 0 && "border-l border-rule pl-3")}
          >
            <p className="figure text-sm font-semibold text-foreground">{jalon.j}</p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{jalon.label}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-rule pt-4">
        <p className="max-w-[24ch] text-pretty text-sm leading-snug text-foreground">
          Rendez-vous qualifiés garantis, ou nous continuons sans facturer
        </p>
        <p className="figure shrink-0 text-3xl font-semibold text-accent-strong">10</p>
      </div>
    </div>
  );
}

export function DeuxOffres() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          01 — Deux chemins
        </p>
        <p className="text-[11px] text-muted-foreground">Un seul objectif</p>
      </div>

      <div className="mt-12 max-w-2xl">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Faire entrer plus de clients, sans dépendre de la chance.
        </h2>
        <p className="prose-report mt-5 text-pretty text-muted-foreground">
          Un cabinet analyse et vous laisse un rapport. Une agence installe sans avoir regardé.
          Nous faisons les deux gestes, et c&apos;est la même personne qui signe le constat et qui
          construit la réponse.
        </p>
      </div>

      <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
        {OFFRES.map((offre, i) => (
          <article
            key={offre.title}
            className={cn(
              "border-t-2 border-rule-strong pt-8",
              i > 0 && "md:border-l md:border-l-rule md:pl-12",
            )}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {offre.badge}
            </p>
            <h3 className="mt-4 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
              {offre.title}
            </h3>
            <p className="prose-report mt-5 text-pretty text-muted-foreground">
              {offre.description}
            </p>

            <ul className="mt-8">
              {offre.points.map((point) => (
                <li
                  key={point}
                  className="border-t border-rule py-3.5 text-pretty text-[15px] leading-snug text-foreground/90 last:border-b"
                >
                  {point}
                </li>
              ))}
            </ul>

            {i === 1 ? <Calendrier /> : null}

            <div className="mt-8">
              <Link
                href={offre.cta.href}
                className="group inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
              >
                {offre.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
