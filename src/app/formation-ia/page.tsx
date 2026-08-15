import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { buttonVariants } from "@/components/ui/button";
import { FORMATION_IA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Formation IA pour vos équipes — une journée en Guadeloupe | Siboard",
  description:
    "L’intelligence artificielle au quotidien pour vos salariés : une journée en présentiel, 8 participants maximum, dans vos locaux en Guadeloupe. Cas d’usage réels et cartographie de vos tâches automatisables.",
  alternates: { canonical: "/formation-ia" },
  openGraph: {
    title: "Formation IA pour vos équipes — une journée en Guadeloupe",
    description:
      "Vos salariés repartent avec des usages concrets, et vous avec la liste chiffrée de ce qui peut être automatisé.",
    url: "/formation-ia",
    type: "website",
  },
};

export default function FormationPage() {
  return (
    <>
      <Hero />
      <Cadre />
      <Programme />
      <Acquis />
      <Prix />
      <Suite />
      <CTABanner
        eyebrow="Formation IA"
        title="On cale une date et on prépare la journée avec vos équipes."
        description="Un questionnaire de recueil des besoins est envoyé en amont, au dirigeant et aux participants. La journée est construite sur vos métiers, pas sur un support générique."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="container-page pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          Formation
        </p>
        <p className="text-[11px] text-muted-foreground">Une journée, en présentiel</p>
      </div>

      <h1 className="mt-12 max-w-3xl text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]">
        {FORMATION_IA.titre}
      </h1>
      <p className="prose-report mt-7 max-w-2xl text-pretty text-muted-foreground">
        Vos salariés entendent parler d’intelligence artificielle tous les jours et ne savent pas
        quoi en faire lundi matin. Cette journée règle ça. Pas de théorie, pas de démonstration
        spectaculaire : leurs vraies tâches, leurs vrais outils, et ce qu’ils peuvent gagner dès la
        semaine suivante.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/etat-des-lieux#demander"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 w-full rounded-sm px-6 text-base font-semibold sm:w-auto",
          )}
        >
          Demander une date
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </Link>
        <Link
          href="#prix"
          className="group inline-flex h-12 min-h-11 items-center justify-center gap-1.5 rounded-sm border border-rule-strong px-6 text-base font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Voir le prix
        </Link>
      </div>
    </section>
  );
}

function Cadre() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-12 sm:py-14">
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
          {FORMATION_IA.cadre.map((c, i) => (
            <div
              key={c.label}
              className={cn(
                "border-t border-rule py-6 lg:border-t-0",
                i > 0 && "sm:border-l sm:border-l-rule sm:pl-7",
                i === 2 && "lg:border-l lg:pl-7",
              )}
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {c.label}
              </dt>
              <dd className="mt-2 text-pretty text-lg font-semibold leading-snug text-foreground">
                {c.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Programme() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          Le programme
        </p>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Le matin on apprend, l’après-midi on cartographie.
        </h2>
      </div>

      <div className="mt-12 grid gap-x-14 gap-y-12 md:grid-cols-2">
        {FORMATION_IA.programme.map((demi, i) => (
          <div key={demi.moment} className="border-t-2 border-rule-strong pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                {demi.moment}
              </p>
              <p className="figure text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            <h3 className="mt-4 text-pretty text-2xl font-extrabold leading-snug tracking-tight">
              {demi.titre}
            </h3>
            <ol className="mt-6">
              {demi.points.map((p) => (
                <li
                  key={p}
                  className="border-t border-rule py-3.5 text-pretty text-[15px] leading-snug text-foreground/90 last:border-b"
                >
                  {p}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

function Acquis() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-x-14 gap-y-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              En sortant de la journée
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ce que vos équipes savent faire.
            </h2>
            <p className="prose-report mt-5 text-pretty text-muted-foreground">
              Et ce que vous, dirigeant, avez entre les mains : la liste des tâches que votre
              entreprise refait à la main, classées et chiffrées en heures.
            </p>
          </div>
          <ol className="md:col-span-7">
            {FORMATION_IA.acquis.map((a, i) => (
              <li key={a} className="flex gap-5 border-t border-rule py-4 last:border-b">
                <span className="figure shrink-0 text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-pretty text-[15px] leading-snug text-foreground/90">{a}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Prix() {
  return (
    <section id="prix" className="container-page scroll-mt-20 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          Le prix est public
        </p>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Une journée, huit personnes, dans vos locaux.
        </h2>
      </div>

      <ol className="mt-10">
        {FORMATION_IA.tarifs.map((t, i) => (
          <li
            key={t.label}
            className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-rule py-6 last:border-b-2 last:border-b-rule-strong"
          >
            <div className="flex items-baseline gap-5">
              <span className="figure shrink-0 text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-pretty text-lg leading-snug text-foreground">{t.label}</p>
                {t.note ? (
                  <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
                ) : null}
              </div>
            </div>
            <p className="figure shrink-0 text-3xl font-semibold text-accent-strong sm:text-4xl">
              {t.prix}
            </p>
          </li>
        ))}
      </ol>

      <p className="prose-report mt-8 max-w-2xl text-pretty text-sm text-muted-foreground">
        Prix hors taxes, TVA DOM 8,5 %. Siboard n’est pas organisme de formation certifié Qualiopi :
        la prestation se règle en direct et n’entre pas dans un circuit de prise en charge OPCO.
        C’est dit d’emblée pour que personne ne perde de temps.
      </p>
    </section>
  );
}

function Suite() {
  return (
    <section className="border-t border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-x-14 gap-y-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Ce qui vient après, si vous le voulez
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              La cartographie de l’après-midi est déjà la moitié du travail.
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="prose-report text-pretty text-muted-foreground">
              L’atelier produit la liste de vos tâches répétitives, classées et chiffrées en heures.
              C’est exactement la matière que L’État des lieux reprend pour la relier à vos euros et
              désigner ce qu’il faut réparer en premier.
            </p>
            <p className="prose-report mt-4 text-pretty text-muted-foreground">
              Rien ne vous y oblige. La cartographie vous appartient, elle est utilisable telle
              quelle, y compris par quelqu’un d’autre que nous.
            </p>
            <Link
              href="/etat-des-lieux"
              className="group mt-6 inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
            >
              Voir L’État des lieux
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
