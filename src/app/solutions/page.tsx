import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FORMULE_COMPLETE,
  LOGICIEL_METIER,
  MODULES,
  SOCLE,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solutions — le Socle Siboard et les cinq systèmes | Siboard Consulting",
  description:
    "Une fondation commune, cinq systèmes prescrits après diagnostic : L’Accueil, Le Bureau, Le Fil, Le Retour, Le Point. Prix affichés. Guadeloupe et Île-de-France.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions — le Socle Siboard et les cinq systèmes",
    description:
      "On ne vend pas un catalogue. On installe ce que l’état des lieux a mis au jour.",
    url: "/solutions",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Hero />
      <Socle />
      <Systemes />
      <Formule />
      <LogicielMetier />
      <CTABanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="container-page relative py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {"Étape 2 — Ce que nous construisons"}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
          {"L’état des lieux dit quoi réparer. Voici avec quoi."}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {"Ces cinq systèmes ne sont pas un catalogue dans lequel on choisit. Ce sont des prescriptions. On installe celui qui répond à ce que le diagnostic a trouvé, et rien d’autre."}
        </p>
        <div className="mt-10">
          <Link
            href="/etat-des-lieux"
            className={cn(buttonVariants({ size: "lg" }), "h-12 w-full px-6 text-base sm:w-auto")}
          >
            {"Commencer par l’état des lieux"}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Socle() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {"La fondation"}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {SOCLE.name}
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {SOCLE.intro}
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/85">
              {SOCLE.benefice}
            </p>
            <div className="mt-8 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border border-primary/25 bg-primary/[0.06] px-5 py-4">
              <span className="text-2xl font-semibold tracking-tight text-primary">
                {SOCLE.prix}
              </span>
              <span className="text-base text-primary/80">{SOCLE.mensuel}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{SOCLE.note}</p>
          </div>
          <div className="md:col-span-6">
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
              {SOCLE.contenu.map((item) => (
                <li key={item} className="bg-background/60 px-6 py-4 text-base text-foreground/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Systemes() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {"Les cinq systèmes"}
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {"Chacun règle un problème précis. Aucun ne se vend sans raison."}
        </h2>
      </div>

      <div className="mt-14 space-y-5">
        {MODULES.map((m, i) => (
          <article
            key={m.slug}
            id={m.slug}
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-border/60 bg-surface/50"
          >
            <div className="grid gap-8 p-7 sm:p-9 md:grid-cols-12">
              <header className="md:col-span-4">
                <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{m.name}</h3>
                <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
                  {m.subtitle}
                </p>
                <div className="mt-6 rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-3">
                  <p className="text-xl font-semibold tracking-tight text-primary">{m.prix}</p>
                  <p className="text-sm text-primary/80">{m.mensuel}</p>
                  {m.prixOption ? (
                    <p className="mt-2 border-t border-primary/15 pt-2 text-xs text-muted-foreground">
                      {m.prixOption}
                    </p>
                  ) : null}
                </div>
              </header>

              <div className="space-y-6 md:col-span-8">
                <div>
                  <Badge
                    variant="outline"
                    className="border-accent/40 bg-accent/[0.07] text-xs font-normal text-accent-strong"
                  >
                    {"On le prescrit quand"}
                  </Badge>
                  <p className="mt-3 text-pretty text-base leading-relaxed text-foreground/90">
                    {m.prescription}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{"Ce qu’on installe"}</p>
                  <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
                    {m.installe}
                  </p>
                </div>
                {m.preuve ? (
                  <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/70">
                      {"Déjà fait"}
                    </p>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/80">
                      {m.preuve}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Formule() {
  return (
    <section className="container-page pb-4">
      <div className="rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {"La formule complète"}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {FORMULE_COMPLETE.title}
            </h2>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {FORMULE_COMPLETE.prix}
            </p>
            <p className="mt-1 text-base text-primary/80">{"puis "}{FORMULE_COMPLETE.mensuel}</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          {"Tous les prix sont hors taxes. TVA DOM 8,5 %."}
        </p>
      </div>
    </section>
  );
}

function LogicielMetier() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {"Quand rien de tout cela ne suffit"}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {LOGICIEL_METIER.name}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {LOGICIEL_METIER.intro}
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/85">
            {LOGICIEL_METIER.preuve}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-2xl font-semibold tracking-tight text-primary">
              {LOGICIEL_METIER.prix}
            </span>
            <Link
              href="/ventures"
              className="group inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-primary transition-colors hover:text-primary/80"
            >
              {"Voir les plateformes que nous éditons"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
