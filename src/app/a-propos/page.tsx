import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { buttonVariants } from "@/components/ui/button";
import { CTA_PRIMARY, PORTEFEUILLE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Jean-Marc Dolmare, fondateur",
  description:
    "Jean-Marc Dolmare, ingénieur réseaux et télécommunications, 25 ans de digitalisation et de pilotage de systèmes d’information.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos — Jean-Marc Dolmare, Siboard Consulting",
    description:
      "Le modèle Siboard, le socle et les cinq systèmes construits en interne, les plateformes co-éditées et le stack maîtrisé.",
    url: "/a-propos",
    type: "website",
  },
};

const REPERES = [
  { label: "Métier", value: "Ingénieur réseaux et télécommunications" },
  {
    label: "Expérience",
    value:
      "25 ans de digitalisation et de pilotage de systèmes d’information, dont 21 chez Orange Caraïbe comme responsable SI, digital et plateformes de services",
  },
  {
    label: "Aujourd’hui",
    value: `Siboard Consulting depuis 2020. ${PORTEFEUILLE.etablissements} établissements accompagnés sur ${PORTEFEUILLE.secteurs} secteurs et ${PORTEFEUILLE.territoires} territoires`,
  },
  {
    label: "Édite",
    value:
      "AdamBoards, TransmiExpert et SecureXia, trois logiciels métier en production, plus une application de rédaction de marchés publics pour un établissement hospitalier",
  },
  { label: "Bases", value: "Pointe-à-Pitre en Guadeloupe, et Île-de-France" },
  { label: "Société", value: "Siboard Consulting, SIRET 89080598900013, fondée en 2020" },
] as const;

const PRINCIPES = [
  {
    title: "On part du process, pas de l’outil.",
    body: "Avant de prescrire quoi que ce soit, on regarde comment votre activité tourne aujourd’hui. C’est ce qui fait la différence entre une migration ratée et un déploiement qui colle.",
  },
  {
    title: "On diagnostique avant de prescrire.",
    body: "Aucune offre commerciale au premier appel. On commence par un état des lieux écrit et chiffré, y compris quand il conclut que vous n’avez pas besoin de nous.",
  },
  {
    title: "On reste joignables après la livraison.",
    body: "L’objectif est votre autonomie, pas votre dépendance. Mais on ne disparaît pas le jour où la facture est réglée.",
  },
] as const;

const SYSTEMES = [
  { name: "L’Accueil", role: "Qualification et prise de rendez-vous" },
  { name: "Le Bureau", role: "Documents et back-office" },
  { name: "Le Fil", role: "Relance jusqu’à la signature" },
  { name: "Le Retour", role: "Réactivation des clients dormants" },
  { name: "Le Point", role: "Vos chiffres là où vous travaillez" },
] as const;

const PLATEFORMES = [
  {
    name: "AdamBoards",
    sector: "Pilotage de TPE et PME",
    description:
      "Les chiffres, l’analyse des ventes, les rapports de préconisation et les campagnes marketing qui les exécutent.",
  },
  {
    name: "TransmiExpert",
    sector: "Patrimoine et expertise immobilière",
    description:
      "Livret patrimonial numérique pour les familles, et application d’accompagnement à l’expertise immobilière.",
  },
  {
    name: "SecureXia",
    sector: "Conformité incendie des ERP",
    description:
      "Audits et mise en conformité incendie pour les établissements recevant du public en Guadeloupe.",
  },
] as const;

const PARTENAIRES = [
  {
    name: "Cador Consulting",
    domain: "cador-gp.com",
    href: "https://www.cador-gp.com",
    description:
      "Conseil en gestion et stratégie pour dirigeants de TPE et PME. Réseau de prescription en Guadeloupe.",
  },
  {
    name: "Digital Pro Conseil",
    domain: "digitalproconseil.fr",
    href: "https://digitalproconseil.fr",
    description:
      "Conseil digital et accompagnement à la transformation numérique des organisations.",
  },
] as const;

const STACK = [
  { label: "GoHighLevel", role: "CRM, automatisations, SMS, agenda" },
  { label: "Voiceflow", role: "Agents conversationnels" },
  { label: "n8n et Make", role: "Orchestration multi-outils" },
  { label: "Supabase", role: "Base de données et authentification" },
  { label: "Stripe", role: "Paiements et abonnements" },
  { label: "Next.js", role: "Sites et applications web" },
  { label: "Vercel", role: "Hébergement et déploiement" },
] as const;

export default function AProposPage() {
  return (
    <>
      <Hero />
      <Modele />
      <Systemes />
      <Plateformes />
      <Partenaires />
      <Stack />
      <CTABanner
        eyebrow="Premier échange"
        title="On regarde votre activité ensemble. Honnêtement."
        description="Le premier échange est gratuit et sans engagement, réponse sous 24 h. Si Siboard n'est pas le bon partenaire pour votre cas, on vous le dit."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="container-page pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          À propos
        </p>
        <p className="text-[11px] text-muted-foreground">Le fondateur et la maison</p>
      </div>

      <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
            Jean-Marc Dolmare
          </h1>
          <p className="mt-4 text-pretty text-xl font-semibold leading-snug text-accent-strong sm:text-2xl">
            Ingénieur réseaux et télécommunications. Vingt-cinq ans à digitaliser et à piloter des
            systèmes d&apos;information.
          </p>
          <p className="prose-report mt-6 max-w-xl text-pretty text-muted-foreground">
            Vingt et un ans chez Orange Caraïbe, comme responsable des systèmes d&apos;information,
            du digital et des plateformes de services. Assez longtemps pour savoir ce qu&apos;un
            process coûte quand il n&apos;est pas tenu, et pour avoir vu échouer les projets qui
            partent de l&apos;outil.
          </p>
          <p className="prose-report mt-4 max-w-xl text-pretty text-muted-foreground">
            Siboard Consulting depuis 2020, entre la Guadeloupe et l&apos;Île-de-France. Aujourd&apos;hui{" "}
            {PORTEFEUILLE.etablissements} établissements accompagnés, trois logiciels métier édités,
            et une application de rédaction de marchés publics livrée à un établissement hospitalier.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={CTA_PRIMARY.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full rounded-sm px-6 text-base font-semibold sm:w-auto",
              )}
            >
              Échanger 30 minutes
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
            <Link
              href="/realisations"
              className="group inline-flex h-12 min-h-11 items-center justify-center gap-1.5 rounded-sm border border-rule-strong px-6 text-base font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Voir les réalisations
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <Image
            src="/images/fondateur.png"
            alt="Jean-Marc Dolmare, fondateur de Siboard Consulting"
            width={440}
            height={440}
            className="w-full max-w-[18rem] border border-rule object-cover"
            priority
          />
          <dl className="mt-8">
            {REPERES.map((r) => (
              <div key={r.label} className="border-t border-rule py-3.5 last:border-b">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {r.label}
                </dt>
                <dd className="mt-1.5 text-pretty text-[15px] leading-snug text-foreground/90">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Modele() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Le modèle Siboard
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Trois principes simples. On s&apos;y tient à chaque mission.
          </h2>
        </div>

        <ol className="mt-12 grid md:grid-cols-3">
          {PRINCIPES.map((p, i) => (
            <li
              key={p.title}
              className={cn(
                "border-t border-rule py-7 md:pr-8",
                i > 0 && "md:border-l md:border-l-rule md:pl-8",
              )}
            >
              <span className="figure text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-pretty text-lg font-bold leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="prose-report mt-3 text-pretty text-[15px] text-muted-foreground">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Systemes() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-x-14 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Ce qu&apos;on installe
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Cinq systèmes construits en interne.
          </h2>
          <p className="prose-report mt-5 text-pretty text-muted-foreground">
            Chacun est né d&apos;un cas client réel et tourne aujourd&apos;hui chez au moins un
            opérateur. On ne les vend pas au catalogue : on installe celui que l&apos;état des lieux
            a désigné.
          </p>
          <Link
            href="/solutions"
            className="group mt-6 inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
          >
            Voir le détail et les prix
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ol className="md:col-span-7">
          {SYSTEMES.map((s, i) => (
            <li
              key={s.name}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-rule py-4 last:border-b"
            >
              <div className="flex items-baseline gap-4">
                <span className="figure text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-bold tracking-tight">{s.name}</p>
              </div>
              <p className="text-sm text-muted-foreground">{s.role}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Plateformes() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Nos plateformes
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Trois logiciels métier co-construits avec un expert de leur secteur.
          </h2>
        </div>

        <ol className="mt-12 grid md:grid-cols-3">
          {PLATEFORMES.map((v, i) => (
            <li
              key={v.name}
              className={cn(
                "border-t border-rule py-7 md:pr-8",
                i > 0 && "md:border-l md:border-l-rule md:pl-8",
              )}
            >
              <h3 className="text-lg font-bold tracking-tight">{v.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.sector}</p>
              <p className="prose-report mt-4 text-pretty text-[15px] text-muted-foreground">
                {v.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="border-t-2 border-rule-strong pt-8">
          <Link
            href="/ventures"
            className="group inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
          >
            Comment naissent ces plateformes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Partenaires() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-x-14 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Notre réseau
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Deux structures avec qui nous travaillons en confiance.
          </h2>
        </div>

        <ol className="md:col-span-7">
          {PARTENAIRES.map((p) => (
            <li key={p.name} className="border-t border-rule py-6 last:border-b">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-bold tracking-tight">{p.name}</h3>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
                >
                  {p.domain}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <p className="prose-report mt-2 text-pretty text-[15px] text-muted-foreground">
                {p.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="border-t border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-x-14 gap-y-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Stack maîtrisé
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sept outils. Pas trente.
            </h2>
            <p className="prose-report mt-5 text-pretty text-muted-foreground">
              On a fait le tri. Ces outils-là, on les connaît à fond : interfaces, limites,
              contournements, coûts cachés. C&apos;est ce qui permet de livrer vite et sans
              surprise.
            </p>
          </div>

          <ul className="md:col-span-7">
            {STACK.map((s) => (
              <li
                key={s.label}
                className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-rule py-3.5 last:border-b"
              >
                <p className="text-base font-semibold text-foreground">{s.label}</p>
                <p className="text-sm text-muted-foreground">{s.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
