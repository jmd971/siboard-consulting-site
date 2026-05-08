import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { CLIENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Réalisations — Siboard Consulting",
  description:
    "Six clients accompagnés en Guadeloupe et Île-de-France : commerce, services, événementiel, courtage, expertise comptable. Le détail de chaque mission et de son résultat.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations — Siboard Consulting",
    description:
      "Cas clients TPE/PME accompagnés par Siboard : automatisation, missions de croissance, repositionnement digital.",
    url: "/realisations",
    type: "website",
  },
};

const SECTOR_BADGES = [
  { label: "Commerce / Retail", count: 1 },
  { label: "Services pros", count: 2 },
  { label: "Artisanat / Industrie", count: 1 },
  { label: "Événementiel B2B", count: 1 },
  { label: "Informatique", count: 1 },
] as const;

export default function RealisationsPage() {
  const featured = CLIENTS.filter((c) => c.featured);
  const others = CLIENTS.filter((c) => !c.featured);

  return (
    <>
      <PageHero />
      <FeaturedGrid clients={featured} />
      {others.length > 0 && <OthersGrid clients={others} />}
      <CTABanner
        eyebrow="Votre cas, ensuite"
        title="On peut vous lister la liste, ou regarder ensemble votre activité."
        description="Audit gratuit, 24h, sans engagement. On vous dit franchement si on est le bon partenaire — ou non."
      />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div className="container-page relative pt-20 pb-14 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-xs font-normal text-primary"
          >
            Réalisations · 2020 — 2026
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.5rem]">
            Six activités. Six contextes.{" "}
            <span className="bg-gradient-to-br from-primary via-amber-200 to-primary bg-clip-text text-transparent">
              Une seule méthode.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Chaque mission part du même principe : comprendre le process avant
            de proposer l&apos;outil. Les résultats parlent d&apos;eux-mêmes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {SECTOR_BADGES.map((s) => (
              <Badge
                key={s.label}
                variant="outline"
                className="border-border/60 bg-surface/60 text-xs font-normal text-muted-foreground"
              >
                {s.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGrid({ clients }: { clients: typeof CLIENTS }) {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Cas mis en avant
          </p>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Les missions où le résultat est le plus net.
          </h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {clients.map((c, i) => (
          <Card
            key={c.slug}
            className="group relative overflow-hidden border-border/60 bg-surface/60 transition-colors hover:border-primary/30"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-150"
            />
            <CardContent className="relative flex h-full flex-col gap-5 p-7 sm:p-8">
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

              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {c.sector}
              </p>

              <p className="text-pretty text-lg font-medium leading-snug text-foreground">
                {c.result}
              </p>

              <p className="mt-auto text-pretty text-sm leading-relaxed text-muted-foreground">
                {c.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function OthersGrid({ clients }: { clients: typeof CLIENTS }) {
  return (
    <section className="border-t border-border/40 bg-surface/30">
      <div className="container-page py-16 sm:py-20">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Également accompagnés
          </p>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Présence digitale renforcée, terrain à terrain.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {clients.map((c) => (
            <Card
              key={c.slug}
              className="border-border/60 bg-background/60 transition-colors hover:border-primary/30"
            >
              <CardContent className="flex items-start gap-5 p-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                  {c.initials}
                </div>
                <div className="min-w-0 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-base font-semibold tracking-tight">
                      {c.name}
                    </p>
                    <span aria-hidden className="text-muted-foreground/40">
                      ·
                    </span>
                    <p className="truncate text-xs text-muted-foreground">
                      {c.location}
                    </p>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.sector}
                  </p>
                  <p className="text-pretty text-sm leading-relaxed text-foreground/90">
                    {c.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-12 flex items-center justify-center gap-3 text-center text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span>
            D&apos;autres missions sont en cours, certaines sous accord de
            confidentialité — disponibles sur demande lors d&apos;un appel.
          </span>
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/audit-gratuit"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Discuter de votre cas
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
