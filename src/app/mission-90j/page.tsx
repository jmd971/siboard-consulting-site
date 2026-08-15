import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqMission90J, faqMission90JSchema } from "@/components/faq/FaqMission90J";
import { buttonVariants } from "@/components/ui/button";
import { CTA_PRIMARY, MISSION_90J_DELIVERABLES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mission Croissance 90J — 10 RDV B2B garantis — Siboard",
  description:
    "Mission commerciale done for you : LinkedIn, prospection, page web, tableau de bord. 10 rendez-vous qualifiés en 90 jours ou prolongation gratuite.",
  alternates: { canonical: "/mission-90j" },
  openGraph: {
    title: "Mission Croissance 90J — 10 RDV B2B garantis — Siboard",
    description:
      "On identifie votre produit phare, on construit la mécanique commerciale et on l’exécute pendant 90 jours.",
    url: "/mission-90j",
    type: "website",
  },
};

const ETAPES = [
  {
    title: "Identification du produit phare",
    body: "Audit de votre catalogue et choix de l’offre dont le différenciateur est le plus net pour la cible visée. Une seule, celle qui porte.",
  },
  {
    title: "Construction de la mécanique",
    body: "Page produit dédiée, narratif, séquences LinkedIn, ciblage des prospects, tableau de bord. Tout est posé avant le premier jour.",
  },
  {
    title: "Exécution sur 90 jours, votre nom devant",
    body: "Nous envoyons les messages, nous relançons, nous qualifions. Vous récupérez des rendez-vous chauds et vous concluez.",
  },
] as const;

const JALONS = [
  { j: "J1", label: "Cadrage et accès" },
  { j: "J30", label: "Premiers rendez-vous" },
  { j: "J60", label: "Accélération" },
  { j: "J90", label: "Bilan et suite" },
] as const;

export default function Mission90JPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMission90JSchema) }}
      />
      <Hero />
      <Mecanique />
      <Livrables />
      <Engagements />
      <Prix />
      <Faq />
      <CTABanner
        eyebrow="Mission Croissance 90J"
        title="On regarde votre offre, et on vous dit si la mission est adaptée."
        description="Un appel de 30 minutes, sans argumentaire. Si nous ne sommes pas le bon partenaire pour votre cas, nous vous le disons franchement."
        ctaLabel="Réserver l’appel de 30 min"
        note="Mission réservée aux opérateurs ayant une offre B2B identifiée, en Île-de-France et dans les DOM."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="container-page pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          Mission Croissance 90J
        </p>
        <p className="text-[11px] text-muted-foreground">Done for you, 90 jours</p>
      </div>

      <h1 className="mt-12 max-w-3xl text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]">
        Vos premiers clients B2B, signés en 90 jours.
      </h1>
      <p className="prose-report mt-7 max-w-2xl text-pretty text-muted-foreground">
        Vous avez une offre solide mais ni le temps ni les compétences pour la commercialiser.
        Nous identifions votre produit phare, nous construisons toute la mécanique commerciale
        autour, et nous l’exécutons. Sans que vous prospectiez, sans que vous gériez les outils.
      </p>

      <ol className="mt-10 grid grid-cols-2 border-t border-rule-strong sm:grid-cols-4">
        {JALONS.map((jalon, i) => (
          <li
            key={jalon.j}
            className={cn("py-4", i > 0 && "border-l border-rule pl-4", i === 2 && "sm:pl-4")}
          >
            <p className="figure text-lg font-semibold text-foreground">{jalon.j}</p>
            <p className="mt-1 text-pretty text-xs leading-snug text-muted-foreground">
              {jalon.label}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-6 border-t border-rule pt-4 text-sm text-muted-foreground">
        Deux missions simultanées au maximum, et un seul opérateur par secteur à la fois.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href={CTA_PRIMARY.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 w-full rounded-sm px-6 text-base font-semibold sm:w-auto",
          )}
        >
          Réserver un appel de 30 min
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

function Mecanique() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            La mécanique
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            On commence par votre produit le plus fort.
          </h2>
        </div>

        <ol className="mt-12 grid md:grid-cols-3">
          {ETAPES.map((etape, i) => (
            <li
              key={etape.title}
              className={cn(
                "border-t border-rule py-7 md:pr-8",
                i > 0 && "md:border-l md:border-l-rule md:pl-8",
              )}
            >
              <span className="figure text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold tracking-tight">{etape.title}</h3>
              <p className="prose-report mt-3 text-pretty text-[15px] text-muted-foreground">
                {etape.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Livrables() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h2 className="max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
        Ce que nous faisons, chaque semaine, à votre place.
      </h2>

      <ol className="mt-12">
        {MISSION_90J_DELIVERABLES.map((d, i) => (
          <li key={d.title} className="border-t border-rule last:border-b">
            <div className="grid gap-x-10 gap-y-2 py-6 md:grid-cols-12">
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="figure text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold tracking-tight">{d.title}</h3>
              </div>
              <p className="prose-report text-pretty text-[15px] text-muted-foreground md:col-span-8">
                {d.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Engagements() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
          <div className="border-t-2 border-rule-strong pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Garantie de résultat
            </p>
            <div className="mt-5 flex items-baseline gap-4">
              <p className="figure text-5xl font-semibold text-accent-strong">10</p>
              <p className="text-pretty text-lg font-semibold leading-snug text-foreground">
                rendez-vous qualifiés en 90 jours
              </p>
            </div>
            <p className="prose-report mt-5 text-pretty text-muted-foreground">
              Si la barre n’est pas atteinte au bout des trois mois, nous prolongeons la mission
              jusqu’à ce qu’elle le soit, sans honoraires supplémentaires. Le risque est de notre
              côté.
            </p>
          </div>

          <div className="border-t-2 border-rule-strong pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Exclusivité sectorielle
            </p>
            <p className="mt-5 text-pretty text-lg font-semibold leading-snug text-foreground">
              Un seul opérateur par secteur, à la fois.
            </p>
            <p className="prose-report mt-5 text-pretty text-muted-foreground">
              Pendant la mission, nous n’accompagnons pas votre concurrent direct. C’est
              contractualisé. Votre offre ne se retrouve pas en miroir d’une autre la semaine
              suivante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Prix() {
  const lignes = [
    { label: "Base mensuelle, sur trois mois", prix: "1 500 €", note: "HT par mois" },
    { label: "Par rendez-vous qualifié tracé", prix: "80 €", note: "HT, facturés en fin de mois" },
  ];

  return (
    <section id="prix" className="container-page scroll-mt-20 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          Le prix est public
        </p>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Une base fixe, puis une part liée au résultat.
        </h2>
      </div>

      <ol className="mt-10">
        {lignes.map((l, i) => (
          <li
            key={l.label}
            className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-rule py-6 last:border-b-2 last:border-b-rule-strong"
          >
            <div className="flex items-baseline gap-5">
              <span className="figure shrink-0 text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-pretty text-lg leading-snug text-foreground">{l.label}</p>
            </div>
            <p className="flex shrink-0 items-baseline gap-2">
              <span className="figure text-3xl font-semibold text-accent-strong sm:text-4xl">
                {l.prix}
              </span>
              <span className="text-sm text-muted-foreground">{l.note}</span>
            </p>
          </li>
        ))}
      </ol>

      <p className="prose-report mt-8 max-w-2xl text-pretty text-sm text-muted-foreground">
        Soit 4 500 € hors taxes au minimum sur les trois mois. Chaque rendez-vous facturé est
        tracé et vous est présenté en liste. Tous les contenus créés restent votre propriété à
        l’issue du contrat.
      </p>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <h2 className="max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Questions fréquentes
        </h2>
        <div className="mt-10">
          <FaqAccordion items={faqMission90J} />
        </div>
      </div>
    </section>
  );
}
