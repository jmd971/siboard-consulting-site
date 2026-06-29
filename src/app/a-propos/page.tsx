import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarCheck,
  ExternalLink,
  GraduationCap,
  Handshake,
  MapPin,
  RefreshCw,
  Star,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { CTA_PRIMARY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "À propos — Jean-Marc Dolmare, Siboard Consulting Guadeloupe",
  description:
    "Fondateur de Siboard Consulting, Jean-Marc Dolmare accompagne les TPE/PME en Guadeloupe et en IDF depuis 2020 : automatisation, IA et transformation digitale.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos — Jean-Marc Dolmare, Siboard Consulting Guadeloupe",
    description:
      "Le modèle Siboard, les produits maison (RDVFlow, AvisFlow, ClientBack, SIA), les ventures partenaires et le stack maîtrisé.",
    url: "/a-propos",
    type: "profile",
  },
};

const PRODUITS = [
  {
    icon: CalendarCheck,
    name: "RDVFlow",
    tagline: "Prise de RDV automatisée",
    description:
      "Confirmations, rappels, anti no-show. Construit sur GoHighLevel, branché à votre stack existant.",
  },
  {
    icon: Star,
    name: "AvisFlow",
    tagline: "Collecte d'avis Google",
    description:
      "Demande envoyée au bon moment, au bon canal — votre note locale grimpe sans effort.",
  },
  {
    icon: RefreshCw,
    name: "ClientBack",
    tagline: "Réactivation clients inactifs",
    description:
      "Séquences SMS et WhatsApp pour rouvrir les conversations endormies. Récupère 10 à 25 % de votre base.",
  },
  {
    icon: Bot,
    name: "SIA",
    tagline: "Assistante IA conversationnelle",
    description:
      "Un chatbot qui répond, qualifie, oriente. Voiceflow + branchement aux outils internes (Calendly, Stripe, CRM).",
  },
] as const;

const VENTURES = [
  {
    name: "AdamBoards",
    sector: "Accompagnement financier TPE/PME",
    description:
      "Pilotage et structuration financière des dirigeants en croissance, par un courtier en financement et un expert-comptable.",
    href: null,
  },
  {
    name: "SecureXia",
    sector: "Conformité incendie ERP · Guadeloupe",
    description:
      "Audits et mise en conformité incendie pour Établissements Recevant du Public en Guadeloupe.",
    href: null,
  },
  {
    name: "TransmiExpert",
    sector: "Transmission d'entreprise",
    description:
      "Accompagnement à la transmission, cession et reprise pour les dirigeants de PME en sortie.",
    href: null,
  },
] as const;

const STACK = [
  { label: "GoHighLevel", role: "CRM / automatisations / SMS / agenda" },
  { label: "Voiceflow", role: "Agents IA conversationnels" },
  { label: "n8n / Make", role: "Orchestration multi-outils" },
  { label: "Supabase", role: "Base de données / auth" },
  { label: "Stripe", role: "Paiements & abonnements" },
  { label: "Next.js", role: "Sites & apps web" },
  { label: "Vercel", role: "Hébergement & déploiement" },
] as const;

export default function AProposPage() {
  return (
    <>
      <PageHero />
      <ModeleSection />
      <ProduitsSection />
      <VenturesSection />
      <PartenairesSection />
      <StackSection />
      <CTABanner
        eyebrow="Premier échange"
        title="On regarde votre activité ensemble. Honnêtement."
        description="Audit gratuit sous 24h. Si Siboard n'est pas le bon partenaire pour votre cas, on vous le dit."
      />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="container-page relative pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-xs font-normal text-primary"
            >
              À propos · Fondateur
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.5rem]">
              Jean-Marc Dolmare.{" "}
              <span className="text-primary">
                Ingénieur d&apos;abord. Pragmatique surtout.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Diplômé de l&apos;EPITA, 25 ans d&apos;expérience dont 21 ans
              chez Orange Caraïbe à piloter des projets de transformation
              digitale. Fondateur de Siboard Consulting depuis 2020. Cinq ans
              à construire des solutions sur mesure entre la Guadeloupe et
              l&apos;Île-de-France — jamais de package générique imposé.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href={CTA_PRIMARY.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-7 text-base font-medium hover:bg-primary/90",
                )}
              >
                Échanger 30 minutes
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="/realisations"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-7 text-base font-medium",
                )}
              >
                Voir les réalisations
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* Photo fondateur */}
            <div className="mb-6 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-md" />
                <Image
                  src="/images/fondateur.png"
                  alt="Jean-Marc Dolmare, fondateur de Siboard Consulting"
                  width={220}
                  height={220}
                  className="relative h-44 w-44 rounded-full object-cover ring-4 ring-background sm:h-52 sm:w-52"
                  priority
                />
              </div>
            </div>

            <Card className="border-border/60 bg-surface/60">
              <CardContent className="space-y-6 p-7 sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Formation
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    <GraduationCap
                      className="h-4 w-4 text-primary"
                      aria-hidden
                    />
                    Ingénieur EPITA — informatique &amp; systèmes
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Parcours
                  </p>
                  <p className="mt-2 text-sm text-foreground/90">
                    21 ans chez Orange Caraïbe — Responsable SI, Digital et
                    Plateformes de Services. Expert transformation digitale,
                    automatisation et IA.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Bases d&apos;intervention
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
                    <li className="inline-flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
                      Pointe-à-Pitre, Guadeloupe (siège)
                    </li>
                    <li className="inline-flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
                      Île-de-France (déplacements réguliers)
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Société
                  </p>
                  <p className="mt-2 text-sm text-foreground/90">
                    Siboard Consulting — SIRET 89080598900013 — fondée en 2020.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModeleSection() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Le modèle Siboard
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Trois principes simples. On s&apos;y tient à chaque mission.
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {[
          {
            title: "On part du process, pas de l'outil.",
            description:
              "Avant de prescrire GoHighLevel ou Voiceflow, on regarde comment votre activité tourne aujourd'hui. C'est ce qui fait la différence entre une migration ratée et un déploiement qui colle.",
          },
          {
            title: "On diagnostique avant de prescrire.",
            description:
              "Aucune offre commerciale au premier appel. On commence par un audit honnête — y compris quand on conclut que vous n'avez pas besoin de nous.",
          },
          {
            title: "On reste joignables après la livraison.",
            description:
              "L'objectif est votre autonomie, pas votre dépendance. Mais on ne disparaît pas le jour où la facture est réglée.",
          },
        ].map((p, i) => (
          <Card key={p.title} className="h-full border-border/60 bg-surface/60">
            <CardContent className="flex h-full flex-col gap-4 p-7">
              <span className="font-mono text-sm tracking-widest text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-pretty text-xl font-semibold leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProduitsSection() {
  return (
    <section className="border-y border-border/40 bg-surface/30">
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Produits maison
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Quatre briques construites en interne. Pas une promesse marketing.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Chaque produit est né d&apos;un cas client réel. Tous tournent
            actuellement chez au moins un opérateur en Guadeloupe ou en
            Île-de-France.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUITS.map((p) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.name}
                className="group h-full border-border/60 bg-background/60 transition-colors hover:border-primary/30"
              >
                <CardContent className="flex h-full flex-col gap-5 p-6 sm:p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold tracking-tight">
                      {p.name}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {p.tagline}
                    </p>
                  </div>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VenturesSection() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Ventures partenaires
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Trois aventures co-construites avec des experts métier.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Quand un client a besoin d&apos;une expertise au-delà du digital, on
          ne sous-traite pas n&apos;importe qui — on s&apos;associe avec ceux
          dans qui on a confiance.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {VENTURES.map((v) => (
          <Card key={v.name} className="h-full border-border/60 bg-surface/60">
            <CardContent className="flex h-full flex-col gap-4 p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20">
                <Handshake className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <p className="text-base font-semibold tracking-tight">
                  {v.name}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {v.sector}
                </p>
              </div>
              <p className="mt-auto text-pretty text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function PartenairesSection() {
  const PARTENAIRES = [
    {
      name: "Cador Consulting",
      domain: "cador-gp.com",
      href: "https://cador-gp.com",
      description:
        "Conseil en gestion et stratégie pour dirigeants de TPE/PME. Réseau de prescription en Guadeloupe.",
    },
    {
      name: "Digital Pro Conseil",
      domain: "digitalproconseil.fr",
      href: "https://digitalproconseil.fr",
      description:
        "Conseil digital et accompagnement à la transformation numérique des organisations.",
    },
  ] as const;

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Réseau de partenaires
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Notre réseau de partenaires.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Deux structures de confiance avec lesquelles on travaille en
          prescription mutuelle en Guadeloupe.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
        {PARTENAIRES.map((p) => (
          <Card key={p.name} className="h-full border-border/60 bg-surface/60">
            <CardContent className="flex h-full flex-col gap-4 p-7">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <Users className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold tracking-tight">
                  {p.name}
                </p>
                <p className="text-xs text-muted-foreground/70">{p.domain}</p>
              </div>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Voir le site
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section className="border-t border-border/40 bg-surface/30">
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Stack maîtrisé
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Sept outils. Pas trente. Et chacun pour une raison précise.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            On a fait le tri. Ces outils-là, on les connaît à fond — interfaces,
            limites, hacks, coûts cachés. C&apos;est ce qui permet de livrer
            vite et sans surprise.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-3 sm:grid-cols-2">
            {STACK.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Building2
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <p className="truncate text-sm font-medium text-foreground">
                    {s.label}
                  </p>
                </div>
                <p className="truncate text-xs text-muted-foreground">
                  {s.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
