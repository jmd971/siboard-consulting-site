import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { buttonVariants } from "@/components/ui/button";
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
    <section className="container-page pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          {"Étape 2"}
        </p>
        <p className="text-[11px] text-muted-foreground">{"Ce que nous construisons"}</p>
      </div>

      <h1 className="mt-12 max-w-3xl text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]">
        {"L’état des lieux dit quoi réparer. Voici avec quoi."}
      </h1>
      <p className="prose-report mt-7 max-w-2xl text-pretty text-muted-foreground">
        {"Ces cinq systèmes ne sont pas un catalogue dans lequel on choisit. Ce sont des prescriptions. On installe celui qui répond à ce que le diagnostic a trouvé, et rien d’autre."}
      </p>
      <div className="mt-9">
        <Link
          href="/etat-des-lieux"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 w-full rounded-sm px-6 text-base font-semibold sm:w-auto",
          )}
        >
          {"Commencer par l’état des lieux"}
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Socle() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              {"La fondation"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              {SOCLE.name}
            </h2>
            <p className="prose-report mt-5 text-pretty text-muted-foreground">{SOCLE.intro}</p>
            <p className="prose-report mt-4 text-pretty text-foreground/85">{SOCLE.benefice}</p>

            <div className="mt-8 flex items-baseline gap-4 border-t-2 border-rule-strong pt-5">
              <span className="figure text-3xl font-semibold text-accent-strong">{SOCLE.prix}</span>
              <span className="figure text-base text-muted-foreground">{SOCLE.mensuel}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{SOCLE.note}</p>
          </div>

          <ul className="md:col-span-6 md:pt-10">
            {SOCLE.contenu.map((item) => (
              <li
                key={item}
                className="border-t border-rule py-3.5 text-base text-foreground/90 last:border-b"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Systemes() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          {"Les cinq systèmes"}
        </p>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {"Chacun règle un problème précis. Aucun ne se vend sans raison."}
        </h2>
      </div>

      <ol className="mt-14">
        {MODULES.map((m, i) => (
          <li key={m.slug} id={m.slug} className="scroll-mt-24 border-t border-rule">
            <article className="grid gap-x-10 gap-y-6 py-10 md:grid-cols-12 sm:py-12">
              {/* Colonne gauche : repère, nom, prix */}
              <header className="md:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="figure text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight">{m.name}</h3>
                    <p className="mt-1.5 text-pretty text-base leading-snug text-muted-foreground">
                      {m.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 md:ml-[calc(1rem+2ch)]">
                  <p className="figure text-2xl font-semibold text-accent-strong">{m.prix}</p>
                  <p className="figure mt-0.5 text-sm text-muted-foreground">{m.mensuel}</p>
                  {m.prixOption ? (
                    <p className="mt-2 max-w-[26ch] text-pretty text-xs leading-snug text-muted-foreground">
                      {m.prixOption}
                    </p>
                  ) : null}
                </div>
              </header>

              {/* Colonne droite : prescription, mise en œuvre, preuve */}
              <div className="md:col-span-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                  {"On le prescrit quand"}
                </p>
                <p className="prose-report mt-3 text-pretty text-foreground/90">
                  {m.prescription}
                </p>

                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                  {"Ce qu’on installe"}
                </p>
                <p className="prose-report mt-3 text-pretty text-muted-foreground">{m.installe}</p>

                {m.preuve ? (
                  <div className="mt-7 border-l border-rule-strong pl-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {"Déjà fait"}
                    </p>
                    <p className="prose-report mt-2 text-pretty text-sm text-foreground/80">
                      {m.preuve}
                    </p>
                  </div>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ol>
      <div className="border-t-2 border-rule-strong" />
    </section>
  );
}

function Formule() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-12 sm:py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              {"La formule complète"}
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
              {FORMULE_COMPLETE.title}
            </h2>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className="figure text-4xl font-semibold text-accent-strong">
              {FORMULE_COMPLETE.prix}
            </p>
            <p className="figure mt-1 text-base text-muted-foreground">
              {"puis "}
              {FORMULE_COMPLETE.mensuel}
            </p>
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
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            {"Quand rien de tout cela ne suffit"}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {LOGICIEL_METIER.name}
          </h2>
          <p className="prose-report mt-5 text-pretty text-muted-foreground">
            {LOGICIEL_METIER.intro}
          </p>
          <p className="prose-report mt-4 text-pretty text-foreground/85">
            {LOGICIEL_METIER.preuve}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t-2 border-rule-strong pt-5">
            <span className="figure text-3xl font-semibold text-accent-strong">
              {LOGICIEL_METIER.prix}
            </span>
            <Link
              href="/ventures"
              className="group inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
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
