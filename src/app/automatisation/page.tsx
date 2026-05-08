import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Calendar,
  ClipboardCheck,
  Compass,
  MapPin,
  MessageSquareHeart,
  RefreshCw,
  Star,
  TimerReset,
  TrendingDown,
  UserX,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { BRIQUES_AUTOMATISATION, CLIENTS, CTA_PRIMARY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Accompagnement Automatisation — Siboard Consulting",
  description:
    "RDV automatisés, collecte d'avis Google, réactivation clients, agent IA. Pour les TPE/PME en Guadeloupe et Île-de-France qui perdent des leads ou du temps.",
  alternates: { canonical: "/automatisation" },
  openGraph: {
    title: "Accompagnement Automatisation — Siboard Consulting",
    description:
      "Quatre briques concrètes pour colmater les fuites de votre activité. Sur mesure, jamais en package imposé.",
    url: "/automatisation",
    type: "website",
  },
};

const PROBLEMES = [
  {
    icon: UserX,
    title: "Vos prospects passent à côté",
    description:
      "Ils appellent, ils écrivent — et personne ne répond à temps. Le lead part chez le concurrent qui décroche en premier.",
  },
  {
    icon: Calendar,
    title: "Vos RDV se vident tout seuls",
    description:
      "Pris dans la précipitation, oubliés trois jours plus tard. 20 à 30 % de no-shows, ça plombe une semaine entière.",
  },
  {
    icon: Star,
    title: "Vos clients ne laissent pas d'avis",
    description:
      "Ils sont contents, vous le savez. Mais Google ne le sait pas. Et c'est Google qui décide qui appelle qui demain.",
  },
  {
    icon: TimerReset,
    title: "Votre temps part dans la plomberie",
    description:
      "Relances, copier-coller, devis manuels, factures à la main. Une heure par jour qui devrait servir à autre chose.",
  },
] as const;

const METHODE = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Audit",
    description:
      "On regarde votre activité en vrai — pas une grille générique. On identifie où l'argent fuit et ce qui peut être réparé en priorité.",
    duree: "1 à 2 semaines",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Déploiement",
    description:
      "On construit les briques qui comptent pour vous. Vous validez chaque étape. On installe, on connecte, on teste avec vos cas réels.",
    duree: "2 à 6 semaines",
  },
  {
    step: "03",
    icon: Compass,
    title: "Autonomie",
    description:
      "Vous pilotez vous-même. On reste joignables, mais l'objectif c'est que vous n'ayez plus besoin de nous au quotidien.",
    duree: "Passation + suivi",
  },
] as const;

const BRIQUE_ICONS = [Calendar, Star, RefreshCw, Bot] as const;

const CAS_SLUGS = ["odyssee-by-bea", "dfp-france", "fast-computer-company"] as const;

export default function AutomatisationPage() {
  return (
    <>
      <PageHero />
      <Problemes />
      <Methode />
      <Briques />
      <CasClients />
      <CTABanner
        eyebrow="Audit gratuit"
        title="On regarde où votre activité fuit. On vous dit comment colmater."
        description="Diagnostic honnête sous 24h. Sans engagement, sans pitch commercial — juste les faits et les priorités."
      />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
      />
      <div className="container-page relative pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-xs font-normal text-primary"
          >
            Accompagnement · Automatisation
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Votre activité tourne.
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-br from-primary via-amber-200 to-primary bg-clip-text text-transparent">
              Vos prospects, eux, partent.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Chaque RDV non confirmé, chaque avis jamais demandé, chaque relance
            oubliée — c&apos;est du chiffre d&apos;affaires qui passe à côté. On
            installe les briques qui colmatent les fuites, sur GoHighLevel et n8n,
            en moins de 6 semaines.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CTA_PRIMARY.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-7 text-base font-medium hover:bg-primary/90",
              )}
            >
              {CTA_PRIMARY.label}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="#cas-clients"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-7 text-base font-medium",
              )}
            >
              Voir les cas clients
            </Link>
          </div>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Guadeloupe &amp; Île-de-France
            </span>
            <span aria-hidden className="text-border">·</span>
            <span>Solutions sur mesure, jamais de package imposé</span>
            <span aria-hidden className="text-border">·</span>
            <span>500 — 3 000 € selon brique</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Problemes() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Le constat
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Quatre fuites silencieuses qui coûtent cher.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          On les voit chez 9 TPE sur 10 dès le premier audit. Ce ne sont pas des
          problèmes d&apos;effort — ce sont des problèmes de mécanique.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {PROBLEMES.map((p) => {
          const Icon = p.icon;
          return (
            <Card
              key={p.title}
              className="border-border/60 bg-surface/60 transition-colors hover:border-primary/30"
            >
              <CardContent className="flex gap-5 p-6 sm:p-7">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-destructive/10 text-destructive ring-1 ring-destructive/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-border/60 bg-surface/40 p-5 text-sm text-muted-foreground">
        <TrendingDown className="h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p className="text-pretty">
          Une seule de ces fuites colmatée représente en moyenne{" "}
          <span className="font-medium text-foreground">
            +15 % de chiffre d&apos;affaires sur 6 mois
          </span>{" "}
          chez nos clients TPE.
        </p>
      </div>
    </section>
  );
}

function Methode() {
  return (
    <section className="border-y border-border/40 bg-surface/30">
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            La méthode
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Trois étapes. Pas de magie. Pas de jargon.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            On part de votre process, pas d&apos;un outil. On diagnostique avant
            de prescrire. On vous laisse autonome — pas dépendant.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {METHODE.map((m) => {
            const Icon = m.icon;
            return (
              <li key={m.step} className="relative">
                <Card className="h-full border-border/60 bg-background/60">
                  <CardContent className="flex h-full flex-col gap-4 p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-medium tracking-widest text-primary">
                        {m.step}
                      </span>
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {m.title}
                      </h3>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {m.description}
                      </p>
                    </div>
                    <p className="mt-auto pt-2 text-xs uppercase tracking-wider text-muted-foreground">
                      {m.duree}
                    </p>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Briques() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Les briques
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Quatre modules concrets. Vous prenez ce qui compte pour vous.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Chaque brique se déploie en 1 à 3 semaines. Aucune n&apos;est
          obligatoire — on installe celle dont l&apos;impact est le plus rapide
          dans votre cas.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BRIQUES_AUTOMATISATION.map((b, i) => {
          const Icon = BRIQUE_ICONS[i] ?? MessageSquareHeart;
          return (
            <Card
              key={b.title}
              className="group h-full border-border/60 bg-surface/60 transition-all hover:border-primary/30 hover:bg-surface"
            >
              <CardContent className="flex h-full flex-col gap-5 p-6 sm:p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Stack maîtrisé :{" "}
        <span className="font-medium text-foreground">GoHighLevel</span> ·{" "}
        <span className="font-medium text-foreground">Voiceflow</span> ·{" "}
        <span className="font-medium text-foreground">n8n / Make</span> ·{" "}
        <span className="font-medium text-foreground">Supabase</span>
      </p>
    </section>
  );
}

function CasClients() {
  const cas = CAS_SLUGS.map((slug) => CLIENTS.find((c) => c.slug === slug)!).filter(
    Boolean,
  );

  return (
    <section
      id="cas-clients"
      className="border-y border-border/40 bg-surface/30 scroll-mt-20"
    >
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Cas clients
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Trois activités. Trois contextes. Trois résultats mesurables.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Boutique mode, films vitrages, magasin informatique — la même
            méthode, des leviers différents selon le terrain.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cas.map((c) => (
            <Card
              key={c.slug}
              className="group h-full overflow-hidden border-border/60 bg-background/60 transition-colors hover:border-primary/30"
            >
              <CardContent className="flex h-full flex-col gap-5 p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                    {c.initials}
                  </div>
                  <div>
                    <p className="text-base font-semibold tracking-tight">
                      {c.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {c.location}
                    </p>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.sector}
                </p>
                <p className="text-pretty text-base font-medium leading-snug text-foreground">
                  {c.result}
                </p>
                <p className="mt-auto text-pretty text-sm leading-relaxed text-muted-foreground">
                  {c.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/realisations"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Voir tous les clients accompagnés
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
