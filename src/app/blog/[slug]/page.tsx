import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { ARTICLES, ARTICLE_PAR_SLUG } from "@/lib/articles";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLE_PAR_SLUG[slug];
  if (!a) return {};
  return {
    title: `${a.titre} | Siboard Consulting`,
    description: a.description,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      title: a.titre,
      description: a.description,
      url: `/blog/${a.slug}`,
      type: "article",
      publishedTime: a.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = ARTICLE_PAR_SLUG[slug];
  if (!a) notFound();

  const autres = ARTICLES.filter((x) => x.slug !== a.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.titre,
      description: a.description,
      datePublished: a.date,
      dateModified: a.date,
      inLanguage: "fr-FR",
      mainEntityOfPage: `${SITE.url}/blog/${a.slug}`,
      author: { "@type": "Organization", name: SITE.name, url: SITE.url },
      publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.r },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="container-page pb-16 pt-12 sm:pt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground underline-offset-4 hover:underline"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
            Le carnet
          </Link>
          <p className="text-[11px] text-muted-foreground">
            {a.dateLisible} · {a.lecture} de lecture
          </p>
        </div>

        <h1 className="mt-12 max-w-3xl text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
          {a.titre}
        </h1>

        {/* Reponse directe : sert le referencement classique et les moteurs IA */}
        <div className="mt-10 max-w-2xl border-t-2 border-rule-strong pt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            En résumé
          </p>
          <p className="prose-report mt-3 text-pretty text-lg text-foreground">
            {a.reponseDirecte}
          </p>
        </div>

        <div className="mt-14 max-w-2xl">
          {a.sections.map((s, i) => (
            <section key={s.titre} className="border-t border-rule pt-8 pb-2 first:border-t-0 first:pt-0">
              <h2 className="flex gap-5 text-balance text-2xl font-extrabold leading-snug tracking-tight">
                <span className="figure shrink-0 pt-1 text-sm font-normal text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s.titre}</span>
              </h2>
              <div className="mt-5 space-y-4">
                {s.paragraphes.map((p) => (
                  <p key={p} className="prose-report text-pretty text-foreground/90">
                    {p}
                  </p>
                ))}
              </div>
              {s.liste ? (
                <ul className="mt-6">
                  {s.liste.map((item) => (
                    <li
                      key={item}
                      className="border-t border-rule py-3.5 text-pretty text-[15px] leading-snug text-foreground/90 last:border-b"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="h-10" />
            </section>
          ))}
        </div>

        <section className="mt-6 max-w-2xl border-t-2 border-rule-strong pt-8">
          <h2 className="text-2xl font-extrabold tracking-tight">Questions fréquentes</h2>
          <dl className="mt-6">
            {a.faq.map((f) => (
              <div key={f.q} className="border-t border-rule py-5 last:border-b">
                <dt className="text-pretty text-lg font-bold leading-snug">{f.q}</dt>
                <dd className="prose-report mt-3 text-pretty text-muted-foreground">{f.r}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 border-t border-rule pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            À lire ensuite
          </p>
          <ol className="mt-4">
            {autres.map((x) => (
              <li key={x.slug} className="border-t border-rule py-4 last:border-b">
                <Link
                  href={`/blog/${x.slug}`}
                  className="group flex min-h-11 items-baseline justify-between gap-6 underline-offset-4"
                >
                  <span className="text-pretty text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent-strong group-hover:underline">
                    {x.titre}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 self-center text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </article>

      <CTABanner
        eyebrow="Formation IA"
        title="Une journée chez vous, sur vos propres dossiers."
        description="Huit participants maximum, tous services. Le matin on prend en main, l’après-midi on cartographie vos tâches automatisables."
        ctaLabel="Voir la formation"
        ctaHref="/formation-ia"
      />
    </>
  );
}
