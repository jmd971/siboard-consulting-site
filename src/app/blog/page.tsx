import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Le carnet — formation IA et automatisation en entreprise | Siboard",
  description:
    "Ce qu’on apprend en installant des systèmes chez des TPE et des PME : formation IA en intra, adoption par les équipes, tri des tâches automatisables.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Le carnet — Siboard Consulting",
    description:
      "Des notes de terrain sur la formation IA en entreprise et le tri des tâches automatisables.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="container-page pb-12 pt-12 sm:pb-14 sm:pt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Le carnet
          </p>
          <p className="text-[11px] text-muted-foreground">Notes de terrain</p>
        </div>

        <h1 className="mt-12 max-w-3xl text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
          Ce qu’on apprend en installant des systèmes chez les autres.
        </h1>
        <p className="prose-report mt-7 max-w-2xl text-pretty text-muted-foreground">
          Pas de veille, pas d’actualité. Ce qu’on observe réellement dans des entreprises de
          Guadeloupe et d’Île-de-France quand il s’agit de former des équipes et de trier ce qui
          peut être automatisé.
        </p>
      </section>

      <section className="container-page pb-16 sm:pb-20">
        <ol>
          {ARTICLES.map((a, i) => (
            <li key={a.slug} className="border-t border-rule last:border-b-2 last:border-b-rule-strong">
              <article className="grid gap-x-10 gap-y-3 py-9 md:grid-cols-12">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="figure text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{a.dateLisible}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{a.lecture} de lecture</p>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <h2 className="text-balance text-2xl font-extrabold leading-snug tracking-tight">
                    <Link
                      href={`/blog/${a.slug}`}
                      className="underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
                    >
                      {a.titre}
                    </Link>
                  </h2>
                  <p className="prose-report mt-3 text-pretty text-muted-foreground">{a.chapo}</p>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group mt-4 inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
                  >
                    Lire
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <CTABanner
        eyebrow="Le carnet"
        title="Ces notes viennent de missions réelles."
        description="Si l’une d’elles décrit votre situation, le premier échange sert justement à le vérifier."
      />
    </>
  );
}
