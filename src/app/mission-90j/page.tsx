import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Crosshair,
  Globe2,
  Megaphone,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CTABanner } from "@/components/shared/CTABanner";
import { CLIENTS, CTA_PRIMARY, MISSION_90J_DELIVERABLES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mission Croissance 90J — 10 RDV B2B garantis — Siboard",
  description:
    "Mission commerciale done for you : LinkedIn, prospection, page web, tableau de bord. 10 RDV qualifiés en 90 jours ou prolongation gratuite.",
  alternates: { canonical: "/mission-90j" },
  openGraph: {
    title: "Mission Croissance 90J — 10 RDV B2B garantis — Siboard",
    description:
      "10 RDV qualifiés en 90 jours, done for you, garantie résultat. Exclusivité sectorielle contractualisée.",
    url: "/mission-90j",
    type: "website",
  },
};

const DELIVERABLE_ICONS = [Globe2, Megaphone, Crosshair, BarChart3, Users] as const;

const PRICING_INCLUS = [
  "Audit stratégique de votre offre B2B",
  "Brief web + pilotage du prestataire qui livre la page produit",
  "LinkedIn management : optimisation profil + 1 post / semaine",
  "Prospection ciblée : 40 messages / semaine (DRH, RSE, Achats…)",
  "Réactivation de votre base clients existante",
  "Tableau de bord commercial partagé en temps réel",
  "Garantie résultat : 10 RDV qualifiés ou prolongation gratuite",
  "Exclusivité sectorielle contractualisée pendant la mission",
] as const;

export default function Mission90JPage() {
  return (
    <>
      <PageHero />
      <MecaniqueSection />
      <DeliverablesSection />
      <GarantieSection />
      <PricingSection />
      <CTABanner
        eyebrow="Mission Croissance 90J"
        title="On regarde votre offre. On vous dit si la Mission 90J est adaptée."
        description="Un appel de 30 minutes, sans pitch. Si on n'est pas le bon partenaire pour votre cas, on vous le dit franchement."
        ctaLabel="Réserver l'appel de 30 min"
        note="Mission réservée aux opérateurs avec offre B2B identifiée — Île-de-France et DOM."
      />
    </>
  );
}

function PageHero() {
  const bateauAlize = CLIENTS.find((c) => c.slug === "bateau-alize");

  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
      />
      <div className="container-page relative pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-xs font-normal text-primary"
          >
            Mission Croissance · 90 jours · Done for you
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Vos premiers clients B2B,{" "}
            <span className="bg-gradient-to-br from-primary via-amber-200 to-primary bg-clip-text text-transparent">
              signés en 90 jours.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vous avez une offre puissante mais pas le temps ni les compétences
            pour la commercialiser. On identifie votre produit phare, on
            construit toute la mécanique commerciale autour, on l&apos;exécute.
            Sans prospecter vous-même, sans gérer les outils.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CTA_PRIMARY.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-7 text-base font-medium hover:bg-primary/90",
              )}
            >
              Réserver un appel de 30 min
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="#pricing"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-7 text-base font-medium",
              )}
            >
              Voir le pricing
            </Link>
          </div>

          {bateauAlize && (
            <div className="mx-auto mt-12 flex max-w-2xl items-center gap-4 rounded-2xl border border-primary/20 bg-surface/50 p-5 text-left sm:gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-sm font-semibold text-primary ring-1 ring-primary/30">
                BA
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Mission en cours · Cas Mistinguett
                </p>
                <p className="mt-1 truncate text-sm font-medium text-foreground sm:text-base">
                  Bateau Alizé — offre Green Séminaire B2B activée sur 90 jours.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function MecaniqueSection() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            La logique
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            On commence par votre produit le plus fort. Pas par tout votre
            catalogue.
          </h2>
          <p className="mt-5 text-pretty text-muted-foreground">
            Chaque offre que vous portez n&apos;a pas le même potentiel
            commercial. On identifie celle dont le différenciateur est le plus
            puissant, et on construit toute la mécanique autour.
          </p>
          <p className="mt-3 text-pretty text-muted-foreground">
            Site dédié, narratif, prospection, suivi : un seul produit, mais
            servi à fond. C&apos;est ce qui fait la différence entre un effort
            commercial qui s&apos;essouffle et une machine qui sort des
            rendez-vous.
          </p>
        </div>

        <div className="md:col-span-7">
          <ol className="space-y-3">
            {[
              {
                title: "Identification du produit phare",
                description:
                  "Audit de votre catalogue, choix de l'offre avec le différenciateur le plus net pour la cible B2B visée.",
              },
              {
                title: "Construction de la mécanique commerciale",
                description:
                  "Page produit dédiée, narratif, séquences LinkedIn, ciblage prospects, tableau de bord. Tout est posé avant le jour 1.",
              },
              {
                title: "Exécution sur 90 jours, votre nom devant",
                description:
                  "On envoie les messages, on relance, on qualifie. Vous récupérez des RDV chauds, vous closez. C'est tout.",
              },
            ].map((step, i) => (
              <li key={step.title}>
                <Card className="border-border/60 bg-surface/60">
                  <CardContent className="flex items-start gap-5 p-6">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-medium text-primary ring-1 ring-primary/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-1.5">
                      <p className="text-base font-semibold tracking-tight">
                        {step.title}
                      </p>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  return (
    <section className="border-y border-border/40 bg-surface/30">
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Ce qu&apos;on fait pour vous
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Cinq leviers activés en parallèle. Vous ne touchez à rien.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Pendant 90 jours, on opère votre développement commercial B2B.
            Chaque levier alimente les suivants.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MISSION_90J_DELIVERABLES.map((d, i) => {
            const Icon = DELIVERABLE_ICONS[i] ?? Sparkles;
            return (
              <Card
                key={d.title}
                className="h-full border-border/60 bg-background/60 transition-colors hover:border-primary/30"
              >
                <CardContent className="flex h-full flex-col gap-4 p-6 sm:p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold tracking-tight">
                      {d.title}
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {d.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GarantieSection() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-surface to-surface-elevated">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
          />
          <CardContent className="relative flex h-full flex-col gap-5 p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Garantie résultat
              </p>
              <h3 className="text-pretty text-2xl font-semibold leading-tight tracking-tight">
                10 RDV qualifiés en 90 jours.
                <br />
                Ou on continue, sans facturer.
              </h3>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Si à la fin des 3 mois la barre n&apos;est pas atteinte, on
              prolonge la mission jusqu&apos;à ce qu&apos;elle le soit — sans
              honoraires supplémentaires. Le risque est de notre côté.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-surface/60">
          <CardContent className="flex h-full flex-col gap-5 p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20">
              <Lock className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-200">
                Exclusivité sectorielle
              </p>
              <h3 className="text-pretty text-2xl font-semibold leading-tight tracking-tight">
                Un seul opérateur par secteur, à la fois.
              </h3>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Pendant la mission, on n&apos;accompagne pas votre concurrent
              direct. C&apos;est contractualisé. Votre offre ne se retrouve pas
              en miroir d&apos;une autre la semaine d&apos;après.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 border-y border-border/40 bg-surface/30"
    >
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Pricing transparent
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Pas de devis sur 4 pages. Le prix est public.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Une base mensuelle fixe, plus une part performance si la machine
            tourne. Tout est aligné sur le résultat.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-5">
          {/* Prix + Garantie — bloc unifié accentué */}
          <Card className="overflow-hidden border-amber-500/30 bg-gradient-to-br from-surface to-surface-elevated ring-1 ring-amber-500/15">
            <CardContent className="grid gap-0 p-0 sm:grid-cols-2">
              <div className="border-b border-amber-500/15 p-7 sm:border-b-0 sm:border-r sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Base mensuelle
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    1 500 €
                  </span>
                  <span className="text-sm text-muted-foreground">HT / mois</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  × 3 mois — soit 4 500 € HT au total.
                </p>
                <Separator className="my-5 bg-border/50" />
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
                    <p className="text-sm font-medium text-foreground">Performance</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">80 € HT</span> par
                    RDV qualifié tracé.
                  </p>
                </div>
                <p className="mt-5 text-xs text-muted-foreground">
                  TVA 8,5 % pour les opérateurs en DOM.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 p-7 sm:p-8">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-200">
                    Garantie résultat
                  </p>
                  <p className="mt-2 text-pretty text-xl font-semibold leading-tight tracking-tight text-foreground">
                    10 RDV qualifiés en 90 jours ou on continue sans vous
                    facturer.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Le risque est de notre côté — pas du vôtre.
                </p>
                <div className="rounded-lg border border-border/60 bg-background/40 px-3.5 py-2.5 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Exclusivité sectorielle
                  </span>{" "}
                  — un seul concurrent accompagné à la fois, contractualisé.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Inclusions */}
          <Card className="border-border/60 bg-background/60">
            <CardContent className="p-7 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Tout est inclus
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {PRICING_INCLUS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground">
            Engagement minimum 3 mois · Reconductible mensuellement après le
            terme · Sortie sans pénalité après les 90 jours
          </p>
        </div>
      </div>
    </section>
  );
}

function CasClientSection() {
  const bateauAlize = CLIENTS.find((c) => c.slug === "bateau-alize");
  if (!bateauAlize) return null;

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Cas en cours
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Ce que ça donne sur le terrain.
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <Card className="overflow-hidden border-primary/30 bg-surface ring-1 ring-primary/10">
          <CardContent className="grid gap-0 p-0 md:grid-cols-12">
            <div className="border-b border-border/60 bg-background/40 p-8 sm:p-10 md:col-span-5 md:border-b-0 md:border-r">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/15 text-base font-semibold text-primary ring-1 ring-primary/30">
                  {bateauAlize.initials}
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-tight">
                    {bateauAlize.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {bateauAlize.location}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
                {bateauAlize.sector}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-primary/5 text-xs font-normal text-primary"
                >
                  Mission Mistinguett
                </Badge>
                <Badge
                  variant="outline"
                  className="border-border/60 bg-background/60 text-xs font-normal text-muted-foreground"
                >
                  Audit + Mission 90J
                </Badge>
              </div>
            </div>

            <div className="p-8 sm:p-10 md:col-span-7">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Le défi
              </p>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
                Cabaret flottant historique de Paris 12e, présent sur le marché
                événementiel BtoC mais avec un produit B2B sous-exploité : la
                <span className="font-medium text-foreground">
                  {" "}
                  privatisation Green Séminaire
                </span>{" "}
                pour DRH et services RSE. Aucune mécanique de prospection
                ciblée en place.
              </p>

              <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
                La mission
              </p>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
                Activation complète de l&apos;offre Green Séminaire B2B sur 90
                jours : positionnement, page produit dédiée, prospection LinkedIn
                ciblée DRH/RSE, suivi pipeline en direct avec l&apos;équipe.
              </p>

              <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
                Le résultat
              </p>
              <p className="mt-2 text-pretty text-base font-medium leading-snug text-foreground">
                {bateauAlize.result}
              </p>

              <Link
                href="/realisations"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Voir tous les cas clients
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 text-center text-xs text-muted-foreground">
        <Briefcase className="h-4 w-4 shrink-0 text-primary" aria-hidden />
        <span>
          Mission ouverte aux opérateurs B2B avec une offre identifiable et un
          ticket moyen ≥ 3 000 € HT — événementiel, services pros, formation,
          conseil.
        </span>
      </p>

    </section>
  );
}
