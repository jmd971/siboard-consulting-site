import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { CLIENTS, PORTEFEUILLE, SECTEURS_ACCOMPAGNES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Réalisations, Guadeloupe et Île-de-France",
  description:
    "Les projets réalisés par Siboard en Guadeloupe, aux Antilles-Guyane et en Île-de-France : site, référencement local, automatisation.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations — Clients Siboard Consulting Guadeloupe et IDF",
    description:
      "Des secteurs différents, une seule méthode. Les sites sont en ligne, le travail est vérifiable.",
    url: "/realisations",
    type: "website",
  },
};

// Bateau Alizé n'a pas encore de lien public à montrer.
const AFFICHES = CLIENTS.filter((c) => c.slug !== "bateau-alize");

export default function RealisationsPage() {
  return (
    <>
      <Hero />
      <Secteurs />
      <Clients />
      <CTABanner
        eyebrow="Votre cas, ensuite"
        title="On peut regarder ensemble ce qui bloque votre activité."
        description="Premier échange gratuit, réponse sous 24 h, sans engagement. On vous dit franchement si on est le bon partenaire pour votre cas."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="container-page pb-12 pt-12 sm:pb-14 sm:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          Réalisations
        </p>
        <p className="text-[11px] text-muted-foreground">2020 à 2026</p>
      </div>

      <h1 className="mt-12 max-w-3xl text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]">
        Des secteurs différents. Une seule méthode.
      </h1>
      <p className="prose-report mt-7 max-w-2xl text-pretty text-muted-foreground">
        Chaque mission part du même principe : comprendre le process avant de proposer
        l&apos;outil. Les sites sont en ligne et le travail est vérifiable, lien par lien.
      </p>
    </section>
  );
}

function Secteurs() {
  const chiffres = [
    { v: String(PORTEFEUILLE.etablissements), l: "établissements accompagnés" },
    { v: String(PORTEFEUILLE.secteurs), l: "secteurs" },
    { v: String(PORTEFEUILLE.territoires), l: "territoires" },
  ];

  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <dl className="md:col-span-4">
            {chiffres.map((c) => (
              <div key={c.l} className="flex items-baseline gap-4 border-t border-rule py-3 last:border-b">
                <dt className="figure w-12 shrink-0 text-2xl font-semibold text-accent-strong">
                  {c.v}
                </dt>
                <dd className="text-sm text-muted-foreground">{c.l}</dd>
              </div>
            ))}
          </dl>

          <div className="md:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              Les secteurs accompagnés
            </p>
            <ul className="mt-4 grid sm:grid-cols-2">
              {SECTEURS_ACCOMPAGNES.map((s) => (
                <li
                  key={s}
                  className="border-t border-rule py-2.5 text-[15px] text-foreground/90"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="container-page py-16 sm:py-20">
      <ol>
        {AFFICHES.map((c, i) => (
          <li key={c.slug} className="border-t border-rule">
            <article className="grid gap-x-10 gap-y-4 py-9 md:grid-cols-12">
              <header className="md:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="figure text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">{c.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{c.location}</p>
                    <p className="mt-2 max-w-[26ch] text-pretty text-sm leading-snug text-muted-foreground">
                      {c.sector}
                    </p>
                  </div>
                </div>
              </header>

              <div className="md:col-span-8">
                <p className="text-pretty text-lg font-semibold leading-snug text-accent-strong">
                  {c.result}
                </p>
                <p className="prose-report mt-3 text-pretty text-[15px] text-muted-foreground">
                  {c.detail}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le site de ${c.name}, nouvelle fenêtre`}
                    className={cn(
                      "group mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm text-foreground",
                      "underline-offset-4 transition-colors hover:text-accent-strong hover:underline",
                    )}
                  >
                    Voir le site
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ol>
      <div className="border-t-2 border-rule-strong" />

      <p className="prose-report mt-8 max-w-2xl text-pretty text-sm text-muted-foreground">
        D&apos;autres missions sont en cours, certaines sous accord de confidentialité. Elles sont
        présentables lors d&apos;un premier échange.
      </p>
    </section>
  );
}
