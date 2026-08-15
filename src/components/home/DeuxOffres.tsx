import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AutomatisationIllustration, Mission90JIllustration } from "@/components/home/Illustrations";

const OFFERS = [
  {
    badge: "Pour les TPE et PME qui perdent des leads ou du temps",
    illustration: AutomatisationIllustration,
    title: "L’État des lieux, puis les systèmes",
    description:
      "On commence toujours par regarder comment vous travaillez vraiment, de la première demande d’un client jusqu’à la facture encaissée. On chiffre ce que vous perdez avec vos chiffres à vous. Ensuite seulement, on installe ce que le constat a désigné.",
    bullets: [
      "Le diagnostic écrit, chiffré en euros et en heures, à partir de vos données",
      "Cinq systèmes prescrits selon ce qu’on trouve, jamais choisis dans un catalogue",
      "Le logiciel sur mesure quand aucun outil du marché ne convient",
    ],
    cta: { href: "/etat-des-lieux", label: "Commencer par l’état des lieux" },
    featured: true,
  },
  {
    badge: "Pour les pros avec une offre B2B à activer",
    illustration: Mission90JIllustration,
    title: "Mission Croissance 90J",
    description:
      "Vous avez une offre puissante mais pas le temps ni les compétences pour la commercialiser en B2B. On identifie votre produit phare, on construit la mécanique commerciale complète et on l’exécute. Done for you.",
    bullets: [
      "Brief web + LinkedIn + prospection ciblée",
      "Tableau de bord commercial partagé en temps réel",
      "10 RDV qualifiés en 90 jours ou prolongation gratuite",
    ],
    guarantee: "10 RDV garantis ou on continue gratuitement.",
    cta: { href: "/mission-90j", label: "Voir la Mission 90J" },
    featured: false,
  },
] as const;

export function DeuxOffres() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          01 — Deux chemins, un objectif
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Faire entrer plus de clients, sans dépendre de la chance.
        </h2>
        <p className="mt-4 text-pretty text-base text-muted-foreground">
          Un cabinet analyse et vous laisse un rapport. Une agence installe sans avoir regardé.
          Nous faisons les deux gestes, et c&apos;est la même personne qui signe le constat et qui
          construit la réponse.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {OFFERS.map((offer) => {
          const Illustration = offer.illustration;
          return (
            <Card
              key={offer.title}
              className={
                offer.featured
                  ? "relative overflow-hidden border-primary/30 bg-surface ring-1 ring-primary/10"
                  : "relative overflow-hidden border-border/60 bg-surface/60"
              }
            >
              <CardContent className="relative flex h-full flex-col gap-6 p-7 sm:p-8">
                <div className="rounded-xl bg-background/60 p-2">
                  <Illustration className="w-full" />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <Badge
                    variant="outline"
                    className="border-border/60 bg-background/60 text-xs font-normal text-muted-foreground"
                  >
                    {offer.badge}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">{offer.title}</h3>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-base">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span className="text-foreground/90">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {"guarantee" in offer && offer.guarantee ? (
                  <div className="rounded-lg border border-primary/30 bg-primary/[0.08] px-4 py-2.5 text-sm font-medium text-primary">
                    {offer.guarantee}
                  </div>
                ) : null}

                <div className="mt-auto pt-2">
                  <Link
                    href={offer.cta.href}
                    className="group inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {offer.cta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
