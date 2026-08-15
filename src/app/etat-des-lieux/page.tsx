import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AuditForm } from "@/app/audit-gratuit/audit-form";
import { buttonVariants } from "@/components/ui/button";
import { ETAT_DES_LIEUX } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "L’État des lieux — diagnostic de process pour TPE et PME | Siboard",
  description:
    "Nous suivons le parcours réel de votre activité et nous chiffrons ce que vous perdez, en euros et en heures, à partir de vos données. Livrable écrit, remis en main propre.",
  alternates: { canonical: "/etat-des-lieux" },
  openGraph: {
    title: "L’État des lieux — diagnostic de process | Siboard Consulting",
    description:
      "Où ça fuit, où ça attend, où l’on ressaisit. Chiffré avec vos chiffres, pas avec des moyennes de marché.",
    url: "/etat-des-lieux",
    type: "website",
  },
};

export default function EtatDesLieuxPage() {
  return (
    <>
      <Hero />
      <Principe />
      <CeQuOnRegarde />
      <Livrable />
      <Tarifs />
      <Formulaire />
    </>
  );
}

function Hero() {
  return (
    <section className="container-page pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          {ETAT_DES_LIEUX.eyebrow} — {ETAT_DES_LIEUX.name}
        </p>
        <p className="text-[11px] text-muted-foreground">{ETAT_DES_LIEUX.delaiCourt}</p>
      </div>

      <h1 className="mt-12 max-w-3xl text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]">
        {ETAT_DES_LIEUX.title}
      </h1>
      <p className="prose-report mt-7 max-w-2xl text-pretty text-muted-foreground">
        {ETAT_DES_LIEUX.intro}
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="#demander"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 w-full rounded-sm px-6 text-base font-semibold sm:w-auto",
          )}
        >
          {"Demander un état des lieux"}
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </Link>
        <Link
          href="/solutions"
          className="group inline-flex h-12 min-h-11 items-center justify-center gap-1.5 rounded-sm border border-rule-strong px-6 text-base font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          {"Voir ce qu’on installe ensuite"}
        </Link>
      </div>
    </section>
  );
}

function Principe() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              {ETAT_DES_LIEUX.chercheTitle}
            </p>
            <p className="prose-report mt-5 text-pretty text-muted-foreground">
              {"Un cabinet de conseil analyse, puis vous laisse avec un rapport que personne n’exécute. Une agence installe des outils sans avoir jamais regardé comment vous travaillez. Nous faisons les deux gestes, et c’est la même personne qui signe le constat et qui construit la réponse."}
            </p>
          </div>

          <ol className="md:col-span-7">
            {ETAT_DES_LIEUX.cherche.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-5 border-t border-rule py-5 last:border-b"
              >
                <span className="figure shrink-0 text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-pretty text-xl font-semibold leading-snug text-foreground">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function CeQuOnRegarde() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h2 className="max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
        {ETAT_DES_LIEUX.regardeTitle}
      </h2>
      <ul className="mt-10 grid sm:grid-cols-2 sm:gap-x-12">
        {ETAT_DES_LIEUX.regarde.map((item) => (
          <li
            key={item}
            className="border-t border-rule py-4 text-pretty text-[15px] leading-snug text-foreground/90"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="prose-report mt-8 max-w-2xl text-pretty text-sm text-muted-foreground">
        {ETAT_DES_LIEUX.delai}
      </p>
    </section>
  );
}

function Livrable() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              {ETAT_DES_LIEUX.livrableTitle}
            </p>
            <p className="prose-report mt-5 text-pretty text-lg text-foreground/90">
              {ETAT_DES_LIEUX.livrable}
            </p>
            <p className="prose-report mt-4 text-pretty text-muted-foreground">
              {ETAT_DES_LIEUX.livrablePrecision}
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="border-t-2 border-rule-strong pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                {"Le document vous appartient"}
              </p>
              <p className="prose-report mt-3 text-pretty text-[15px] text-muted-foreground">
                {ETAT_DES_LIEUX.propriete}
              </p>
            </div>
            <div className="mt-8 border-t border-rule pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                {"Notre engagement"}
              </p>
              <p className="prose-report mt-3 text-pretty text-[15px] text-muted-foreground">
                {ETAT_DES_LIEUX.garantie}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tarifs() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
        {"Combien"}
      </h2>

      <ol className="mt-10">
        {ETAT_DES_LIEUX.tarifs.map((t, i) => (
          <li
            key={t.perimetre}
            className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-rule py-6 last:border-b-2 last:border-b-rule-strong"
          >
            <div className="flex items-baseline gap-5">
              <span className="figure shrink-0 text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-pretty text-lg leading-snug text-foreground">{t.perimetre}</p>
            </div>
            <p className="figure shrink-0 text-3xl font-semibold text-accent-strong sm:text-4xl">
              {t.prix}
            </p>
          </li>
        ))}
      </ol>

      <p className="prose-report mt-8 max-w-2xl text-pretty text-sm text-muted-foreground">
        {"Prix hors taxes, TVA DOM 8,5 %. Le diagnostic n’est pas déduit d’une éventuelle installation : c’est une prestation à part entière, dont le livrable reste votre propriété."}
      </p>
    </section>
  );
}

function Formulaire() {
  const etapes = [
    {
      title: "Réponse sous 24 h",
      description: "Un message WhatsApp ou email pour fixer le créneau d’échange.",
    },
    {
      title: "Cadrage de 30 minutes",
      description: "On regarde votre situation, vos chiffres, vos blocages. Sans script.",
    },
    {
      title: "Proposition écrite",
      description: "Le périmètre exact de l’état des lieux, son prix et sa date de restitution.",
    },
  ];

  return (
    <section id="demander" className="scroll-mt-20 border-t border-rule bg-surface">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <aside className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              {"Premier échange"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              {"On vous répond sous 24 h."}
            </h2>
            <p className="prose-report mt-5 max-w-md text-pretty text-muted-foreground">
              {"Le premier échange est gratuit et sans engagement. Il sert à cadrer le périmètre et à vérifier que l’état des lieux vous sera utile. Si ce n’est pas le cas, on vous le dit."}
            </p>

            <ol className="mt-10">
              {etapes.map((step, i) => (
                <li key={step.title} className="flex gap-5 border-t border-rule py-4 last:border-b">
                  <span className="figure shrink-0 text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{step.title}</p>
                    <p className="mt-1 text-pretty text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-xs text-muted-foreground">
              {"Vos informations servent uniquement à préparer cet échange. Aucun partage commercial, aucune liste revendue. Conformité RGPD."}
            </p>
          </aside>

          <div className="md:col-span-7">
            <AuditForm />
          </div>
        </div>
      </div>
    </section>
  );
}
