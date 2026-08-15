import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

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
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="container-page relative py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {ETAT_DES_LIEUX.eyebrow} — {ETAT_DES_LIEUX.name}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
          {ETAT_DES_LIEUX.title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {ETAT_DES_LIEUX.intro}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#demander"
            className={cn(buttonVariants({ size: "lg" }), "h-12 w-full px-6 text-base sm:w-auto")}
          >
            {"Demander un état des lieux"}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href="/solutions"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 w-full px-6 text-base sm:w-auto",
            )}
          >
            {"Voir ce qu’on installe ensuite"}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Principe() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {ETAT_DES_LIEUX.chercheTitle}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {
                "Un cabinet de conseil analyse, puis vous laisse avec un rapport que personne n’exécute. Une agence installe des outils sans avoir jamais regardé comment vous travaillez. Nous faisons les deux gestes, et c’est la même personne qui signe le constat et qui construit la réponse."
              }
            </p>
          </div>
          <ul className="grid gap-4 md:col-span-7 sm:grid-cols-3">
            {ETAT_DES_LIEUX.cherche.map((item, i) => (
              <li
                key={item}
                className="rounded-2xl border border-border/60 bg-background/60 p-6"
              >
                <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-lg font-medium leading-snug text-foreground">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CeQuOnRegarde() {
  return (
    <section className="container-page py-20 sm:py-24">
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {ETAT_DES_LIEUX.regardeTitle}
      </h2>
      <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
        {ETAT_DES_LIEUX.regarde.map((item) => (
          <li key={item} className="flex items-start gap-3 bg-background/60 p-6">
            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span className="text-pretty text-base leading-relaxed text-foreground/90">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-sm text-muted-foreground">{ETAT_DES_LIEUX.delai}</p>
    </section>
  );
}

function Livrable() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {ETAT_DES_LIEUX.livrableTitle}
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {ETAT_DES_LIEUX.livrable}
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {ETAT_DES_LIEUX.livrablePrecision}
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-6">
              <p className="text-sm font-medium text-primary">{"Le document vous appartient"}</p>
              <p className="mt-3 text-pretty text-base leading-relaxed text-foreground/85">
                {ETAT_DES_LIEUX.propriete}
              </p>
            </div>
            <div className="mt-4 rounded-2xl border border-border/60 bg-background/60 p-6">
              <p className="text-sm font-medium text-foreground">{"Notre engagement"}</p>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
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
    <section className="container-page py-20 sm:py-24">
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{"Combien"}</h2>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {ETAT_DES_LIEUX.tarifs.map((t) => (
          <li
            key={t.perimetre}
            className="flex flex-col rounded-2xl border border-border/60 bg-surface/50 p-7"
          >
            <p className="text-base text-muted-foreground">{t.perimetre}</p>
            <p className="mt-auto pt-6 text-3xl font-semibold tracking-tight text-primary">
              {t.prix}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted-foreground">
        {"Prix hors taxes. TVA DOM 8,5 %. Le diagnostic n’est pas déduit d’une éventuelle installation : c’est une prestation à part entière, dont le livrable reste votre propriété."}
      </p>
    </section>
  );
}

function Formulaire() {
  return (
    <section id="demander" className="border-t border-border/60 bg-surface/30 scroll-mt-20">
      <div className="container-page py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {"Premier échange"}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {"On vous répond sous 24h."}
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              {"Le premier échange est gratuit et sans engagement. Il sert à cadrer le périmètre et à vérifier que l’état des lieux vous sera utile. Si ce n’est pas le cas, on vous le dit."}
            </p>
            <ul className="mt-10 space-y-5 text-sm">
              {[
                {
                  title: "Réponse sous 24h",
                  description: "Un message WhatsApp ou email pour fixer le créneau d’échange.",
                },
                {
                  title: "Cadrage de 30 minutes",
                  description:
                    "On regarde votre situation, vos chiffres, vos blocages. Sans script.",
                },
                {
                  title: "Proposition écrite",
                  description:
                    "Le périmètre exact de l’état des lieux, son prix et sa date de restitution.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs text-primary"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 rounded-xl border border-border/60 bg-background/60 p-4 text-xs text-muted-foreground">
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
