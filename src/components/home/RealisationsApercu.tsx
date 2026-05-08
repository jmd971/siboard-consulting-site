import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { CLIENTS } from "@/lib/constants";

export function RealisationsApercu() {
  const featured = CLIENTS.filter((c) => c.featured).slice(0, 4);

  return (
    <section className="border-t border-border/60 bg-surface/30">
      <div className="container-page py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Réalisations
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Des secteurs différents, un même fil rouge : un digital qui rapporte.
            </h2>
          </div>
          <Link
            href="/realisations"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Toutes les réalisations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {featured.map((client) => (
            <li key={client.slug}>
              <article className="group flex h-full items-start gap-5 rounded-2xl border border-border/60 bg-background/60 p-5 transition-colors hover:border-primary/30 hover:bg-surface/60 sm:p-6">
                <div
                  aria-hidden
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-sm font-semibold text-foreground/80 ring-1 ring-border"
                >
                  {client.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-semibold text-foreground">{client.name}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {client.location}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{client.sector}</p>
                  <p className="mt-3 text-pretty text-sm font-medium text-foreground">
                    {client.result}
                  </p>
                  <p className="mt-1 text-pretty text-sm text-muted-foreground">
                    {client.detail}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
