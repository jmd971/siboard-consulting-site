import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  Mic,
  RefreshCw,
  Shuffle,
  Sparkles,
  Wand2,
  Wrench,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import {
  CLIENTS,
  CTA_PRIMARY,
  SOLUTIONS_BRIQUES_AUTO,
  SOLUTIONS_BRIQUES_IA,
} from "@/lib/constants";
import { faqSolutions, faqSolutionsSchema, howToSchema } from "@/components/faq/FaqSolutions";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA pour entreprises — Siboard Consulting",
  description:
    "Prise de RDV automatisée, collecte d'avis, réactivation clients, chatbot IA et agents vocaux pour TPE/PME en Guadeloupe et en France.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Automatisation & Agents IA — Siboard Consulting",
    description:
      "Deux niveaux de service complémentaires : automatisation des process et agents IA sur mesure pour TPE/PME.",
    url: "/solutions",
    type: "website",
  },
};

const AUTO_ICONS = [CalendarCheck, CheckCircle2, RefreshCw, Shuffle] as const;
const IA_ICONS = [Bot, Mic, Wand2, Wrench] as const;

export default function SolutionsPage() {
  return (
    <>
      {/* Schémas JSON-LD : FAQPage + HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSolutionsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <PageHero />
      <ProblemeSection />
      <AncrageCoutSection />
      <MethodeSection />
      <SolutionsSection />
      <CasClientsSection />
      <FaqSection />
      <CTABanner
        eyebrow="Audit gratuit"
        title="Audit digital offert pour toute entreprise en Guadeloupe et en Île-de-France."
        description="On identifie vos fuites, on priorise, on vous propose un plan concret. Sans engagement."
        note="Réponse sous 24h — Guadeloupe, Martinique, Guyane et Île-de-France."
      />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="container-page relative pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-xs font-normal text-primary"
          >
            Automatisation · Agents IA · Sur mesure
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.25rem]">
            Automatisation et Agents IA{" "}
            <span className="text-primary">
              sur mesure.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Chaque jour, des prospects passent à côté, des RDV s&apos;évaporent,
            des tâches mangent votre temps. On déploie les briques qui font
            tourner votre activité — sans vous faire toucher aux outils.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CTA_PRIMARY.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full px-7 text-base font-medium hover:bg-primary/90 sm:w-auto",
              )}
            >
              Audit gratuit
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="#solutions"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 w-full px-7 text-base font-medium sm:w-auto",
              )}
            >
              Voir les solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemeSection() {
  return (
    <section className="border-b border-border/40 bg-surface/30">
      <div className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Le problème
          </p>
          <blockquote className="mt-5 text-balance text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            &ldquo;Chaque jour, des prospects vous contactent… et
            n&apos;obtiennent pas de réponse. Des clients partent sans laisser
            d&apos;avis. Vos RDV ont des no-shows. Votre temps part dans des
            tâches qui pourraient tourner seules.&rdquo;
          </blockquote>
          <p className="mt-6 text-pretty text-muted-foreground">
            Ce n&apos;est pas un problème de volonté — c&apos;est un problème
            d&apos;outillage. On commence par l&apos;audit pour savoir exactement
            où vous perdez de l&apos;argent ou du temps.
          </p>
        </div>
      </div>
    </section>
  );
}

function AncrageCoutSection() {
  return (
    <div className="border-b border-border/40 bg-amber-500/[0.03]">
      <div className="container-page py-8">
        <blockquote className="mx-auto max-w-2xl rounded-xl border border-amber-500/20 bg-amber-500/5 px-7 py-6 text-center text-sm leading-relaxed italic text-muted-foreground">
          &ldquo;Un no-show par semaine coûte en moyenne{" "}
          <span className="font-semibold not-italic text-foreground">
            2 400 € par an
          </span>{" "}
          à un prestataire à 50 €/h. Un rappel automatique coûte{" "}
          <span className="font-semibold not-italic text-foreground">
            moins qu&apos;un café par jour.
          </span>
          &rdquo;
        </blockquote>
      </div>
    </div>
  );
}

function MethodeSection() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          La méthode
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          On part de votre process. Pas d&apos;un catalogue d&apos;outils.
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {[
          {
            num: "01",
            title: "Audit",
            description:
              "On cartographie vos flux actuels : où entrent les prospects, où se perdent les RDV, où part votre temps. On priorise ce qui rapporte le plus vite.",
          },
          {
            num: "02",
            title: "Déploiement",
            description:
              "On construit les briques manquantes — automatisation ou agents IA — adaptées à votre stack et à votre activité. Pas de package générique.",
          },
          {
            num: "03",
            title: "Autonomie",
            description:
              "On vous forme, on passe la main. Vous pilotez, on reste disponibles. L&apos;objectif est votre indépendance, pas votre dépendance.",
          },
        ].map((step) => (
          <Card key={step.num} className="h-full border-border/60 bg-surface/60">
            <CardContent className="flex h-full flex-col gap-4 p-7">
              <span className="font-mono text-sm tracking-widest text-primary">
                {step.num}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p
                className="text-pretty text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="scroll-mt-20 border-y border-border/40 bg-surface/30"
    >
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Deux niveaux de solution
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Automatisation et Agents IA — complémentaires, pas synonymes.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            L&apos;automatisation structure vos process. Les agents IA vont plus
            loin — ils comprennent, décident et agissent à votre place.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Bloc A — Automatisation */}
          <div className="rounded-2xl border border-border/60 bg-background/60 p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Niveau 1
                </p>
                <h3 className="text-lg font-semibold tracking-tight">
                  Automatisation
                </h3>
              </div>
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Structurer les process répétitifs pour ne plus perdre de leads ni
              de temps. Idéal pour démarrer ou combler des fuites identifiées.
            </p>
            <ul className="mt-6 space-y-4">
              {SOLUTIONS_BRIQUES_AUTO.map((brique, i) => {
                const Icon = AUTO_ICONS[i] ?? Sparkles;
                return (
                  <li key={brique.title} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {brique.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {brique.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bloc B — Agents IA */}
          <div className="rounded-2xl border border-primary/25 bg-surface ring-1 ring-primary/10 p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Niveau 2
                </p>
                <h3 className="text-lg font-semibold tracking-tight">
                  Agents IA
                </h3>
              </div>
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Aller plus loin : des agents qui comprennent, décident et agissent
              à votre place — 24h/24, sans intervention humaine.
            </p>
            <ul className="mt-6 space-y-4">
              {SOLUTIONS_BRIQUES_IA.map((brique, i) => {
                const Icon = IA_ICONS[i] ?? Sparkles;
                return (
                  <li key={brique.title} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {brique.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {brique.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Les deux niveaux sont cumulables — on commence souvent par
          l&apos;automatisation, on ajoute les agents IA quand la base est saine.
        </p>
      </div>
    </section>
  );
}

function CasClientsSection() {
  const clients = CLIENTS.filter((c) =>
    ["odyssee-by-bea", "dfp-france", "fast-computer-company"].includes(c.slug),
  );

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Cas clients
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Ce que ça donne chez des entreprises comme la vôtre.
        </h2>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
        {clients.map((client) => (
          <li key={client.slug}>
            <article className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-6 transition-colors hover:border-primary/30">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-xs font-semibold text-foreground/80 ring-1 ring-border"
                >
                  {client.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {client.name}
                  </p>
                  <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {client.location}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{client.sector}</p>
              <p className="text-pretty text-sm font-medium text-foreground">
                {client.result}
              </p>
              <p className="mt-auto text-pretty text-xs text-muted-foreground">
                {client.detail}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <Link
          href="/realisations"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Toutes les réalisations
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Questions fréquentes
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ce que vous vous demandez sûrement.
          </h2>
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-surface/40 px-6 sm:px-8">
          <FaqAccordion items={faqSolutions} />
        </div>
      </div>
    </section>
  );
}
