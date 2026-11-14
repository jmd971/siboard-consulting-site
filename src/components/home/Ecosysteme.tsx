import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { ECOSYSTEME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Ecosysteme() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            03 — Nos plateformes
          </p>
          <p className="text-[11px] text-muted-foreground">Trois produits en production</p>
        </div>

        <div className="mt-12 max-w-2xl">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Nous n&apos;installons pas seulement des outils. Nous en éditons.
          </h2>
          <p className="prose-report mt-5 text-pretty text-muted-foreground">
            Trois logiciels métier, chacun co-édité avec un professionnel de son secteur. C&apos;est
            ce qui nous permet de construire le vôtre quand aucun outil du marché ne convient.
          </p>
        </div>

        <ol className="mt-12 grid md:grid-cols-3">
          {ECOSYSTEME.map((v, i) => (
            <li
              key={v.name}
              className={cn(
                "border-t border-rule py-7 md:pr-7",
                i > 0 && "md:border-l md:border-l-rule md:pl-7",
              )}
            >
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ouvrir ${v.domain}`}
                className="mb-6 block overflow-hidden rounded-lg border border-rule bg-surface-elevated shadow-[0_22px_44px_-30px_rgba(25,18,14,0.55)] transition-shadow hover:shadow-[0_22px_44px_-24px_rgba(25,18,14,0.6)]"
              >
                <span className="flex items-center gap-1.5 border-b border-rule bg-background px-3 py-2">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-rule" />
                  <span aria-hidden className="h-2 w-2 rounded-full bg-rule" />
                  <span aria-hidden className="h-2 w-2 rounded-full bg-rule" />
                  <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">
                    {v.domain}
                  </span>
                </span>
                <Image
                  src={v.image}
                  alt={v.imageAlt}
                  width={1047}
                  height={609}
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="block h-auto w-full"
                />
              </a>
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold tracking-tight">{v.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.partenaire}</p>
              <p className="prose-report mt-4 text-pretty text-[15px] text-muted-foreground">
                {v.description}
              </p>
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
              >
                {v.domain}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ol>

        <p className="pb-6 text-xs text-muted-foreground">
          Écrans de démonstration, sans données de clients.
        </p>

        <div className="border-t-2 border-rule-strong pt-8">
          <Link
            href="/ventures"
            className="group inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
          >
            Comment naissent ces plateformes, et ce que ça change pour vous
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
