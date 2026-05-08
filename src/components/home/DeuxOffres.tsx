import Link from "next/link";
import { ArrowRight, CalendarCheck, Rocket } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const OFFERS = [
  {
    badge: "Pour les TPE qui perdent des leads",
    icon: CalendarCheck,
    title: "Accompagnement Automatisation",
    description:
      "Vous avez une activité qui tourne, mais des prospects qui passent à côté, des RDV oubliés et des tâches répétitives qui mangent votre temps. On déploie les briques manquantes — RDV, avis, réactivation, agent IA — sur GoHighLevel et n8n.",
    bullets: [
      "Audit digital de votre situation actuelle",
      "Déploiement des automatisations qui comptent",
      "Formation et passation, vous restez autonome",
    ],
    cta: { href: "/automatisation", label: "Voir l'offre Automatisation" },
    featured: false,
  },
  {
    badge: "Pour les pros avec offre B2B à activer",
    icon: Rocket,
    title: "Mission Croissance 90J",
    description:
      "Vous avez une offre puissante mais pas le temps ni les compétences pour la commercialiser en B2B. On identifie votre produit phare, on construit la mécanique commerciale complète et on l'exécute pendant 90 jours. Done for you, garantie résultat.",
    bullets: [
      "Brief web + LinkedIn + prospection ciblée",
      "Tableau de bord commercial partagé",
      "10 RDV qualifiés en 90 jours ou prolongation gratuite",
    ],
    cta: { href: "/mission-90j", label: "Voir la Mission 90J" },
    featured: true,
  },
] as const;

export function DeuxOffres() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Deux chemins, un objectif
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Faire entrer plus de clients, sans dépendre de la chance.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Choisissez l&apos;approche adaptée à votre situation. Si vous hésitez,
          commencez par l&apos;audit gratuit — on vous oriente sans engagement.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {OFFERS.map((offer) => {
          const Icon = offer.icon;
          return (
            <Card
              key={offer.title}
              className={
                offer.featured
                  ? "relative overflow-hidden border-primary/30 bg-surface ring-1 ring-primary/10"
                  : "relative overflow-hidden border-border/60 bg-surface/60"
              }
            >
              {offer.featured && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
                />
              )}
              <CardContent className="relative flex h-full flex-col gap-6 p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-border/60 bg-background/60 text-xs font-normal text-muted-foreground"
                  >
                    {offer.badge}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {offer.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span className="text-foreground/90">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Link
                    href={offer.cta.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
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
