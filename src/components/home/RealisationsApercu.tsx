import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CLIENTS } from "@/lib/constants";
import { EnTete, Monte } from "@/components/home/Mouvement";
import { cn } from "@/lib/utils";

export function RealisationsApercu() {
  const featured = CLIENTS.filter((c) => c.featured).slice(0, 4);

  return (
    <section className="container-page py-16 sm:py-20">
      <EnTete>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          04 — Réalisations
        </p>
        <Link
          href="/realisations"
          className="group -my-3.5 inline-flex min-h-11 items-center gap-1.5 text-[11px] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Toutes les réalisations
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </EnTete>

      <Monte className="mt-12 max-w-2xl">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Des secteurs différents, un même fil rouge.
        </h2>
      </Monte>

      <ol className="mt-12">
        {featured.map((client, i) => (
          <li key={client.slug} className="border-t border-rule">
            <Monte>
            <article className="group/ligne grid gap-x-10 gap-y-4 py-8 md:grid-cols-12">
              <header className="md:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="figure text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight transition-transform duration-300 group-hover/ligne:translate-x-1.5">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{client.location}</p>
                  </div>
                </div>
              </header>

              <div className="md:col-span-8 md:pl-0">
                <p className="text-pretty text-lg font-semibold leading-snug text-foreground">
                  {client.result}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{client.sector}</p>
                <p className="prose-report mt-3 text-pretty text-[15px] text-muted-foreground">
                  {client.detail}
                </p>
                {client.href ? (
                  <a
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm",
                      "text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline",
                    )}
                  >
                    Voir le site
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                ) : null}
              </div>
            </article>
            </Monte>
          </li>
        ))}
      </ol>
      <div className="border-t-2 border-rule-strong" />
    </section>
  );
}
