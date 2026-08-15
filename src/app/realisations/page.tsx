import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { CLIENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Réalisations — Clients Siboard Consulting Guadeloupe et IDF",
  description:
    "Découvrez les projets réalisés par Siboard : création de site, SEO, automatisation et agents IA pour des entreprises en Guadeloupe et en Île-de-France.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations — Clients Siboard Consulting Guadeloupe et IDF",
    description:
      "Cas clients TPE/PME accompagnés par Siboard : automatisation, missions de croissance, repositionnement digital.",
    url: "/realisations",
    type: "website",
  },
};

const SECTOR_BADGES = [
  "Commerce / Retail",
  "Services pros",
  "Formation professionnelle",
  "Informatique",
  "Courtage financier",
  "Artisanat / Industrie",
] as const;

// Clients à afficher — sans Bateau Alizé (pas encore de lien public)
const DISPLAYED_CLIENTS = CLIENTS.filter((c) => c.slug !== "bateau-alize");

export default function RealisationsPage() {
  return (
    <>
      <PageHero />
      <ClientsGrid />
      <CTABanner
        eyebrow="Votre cas, ensuite"
        title="On peut regarder ensemble ce qui bloque votre activité."
        description="Premier échange gratuit, réponse sous 24h, sans engagement. On vous dit franchement si on est le bon partenaire pour votre cas."
      />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="container-page relative pt-20 pb-14 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-xs font-normal text-primary"
          >
            Réalisations · 2020 — 2026
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.5rem]">
            Des secteurs différents.{" "}
            <span className="text-primary">
              Une seule méthode.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Chaque mission part du même principe : comprendre le process avant
            de proposer l&apos;outil. Les sites sont en ligne — le travail est
            vérifiable.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {SECTOR_BADGES.map((label) => (
              <Badge
                key={label}
                variant="outline"
                className="border-border/60 bg-surface/60 text-xs font-normal text-muted-foreground"
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsGrid() {
  return (
    <section className="container-page py-16 sm:py-20">
      <ul className="grid gap-5 md:grid-cols-2">
        {DISPLAYED_CLIENTS.map((c, i) => (
          <li key={c.slug}>
            <Card className="group relative overflow-hidden border-border/60 bg-surface/60 transition-colors hover:border-primary/30">
              <CardContent className="relative flex h-full flex-col gap-5 p-7 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/15 text-base font-semibold text-primary ring-1 ring-primary/30">
                      {c.initials}
                    </div>
                    <div>
                      <p className="text-lg font-semibold tracking-tight">
                        {c.name}
                      </p>
                      <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" aria-hidden />
                        {c.location}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-xs text-muted-foreground/60"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Secteur */}
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.sector}
                </p>

                {/* Ce qui a été construit */}
                <p className="text-pretty text-sm font-semibold leading-relaxed text-foreground/90">
                  {c.detail}
                </p>

                {/* Résultat — headline */}
                <p className="text-pretty text-lg font-medium leading-snug text-primary">
                  {c.result}
                </p>

                {/* Lien site client */}
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    aria-label={`Voir le site de ${c.name} (nouvelle fenêtre)`}
                  >
                    Voir le site
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : null}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>

      <p className="mt-12 flex items-center justify-center gap-3 text-center text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4 shrink-0 text-primary" aria-hidden />
        <span>
          D&apos;autres missions sont en cours, certaines sous accord de
          confidentialité — disponibles sur demande lors d&apos;un appel.
        </span>
      </p>
    </section>
  );
}
