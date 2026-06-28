import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";

import { CLIENTS } from "@/lib/constants";

const AVATAR_STYLES = [
  "bg-primary text-primary-foreground",
  "bg-accent text-white",
  "bg-foreground text-background",
  "bg-primary/15 text-primary ring-primary/20",
] as const;

const CLIENT_STATS: Record<string, { value: string; label: string; bg: string; text: string }> = {
  "odyssee-by-bea":     { value: "1ère position", label: "Google", bg: "bg-primary/10", text: "text-primary" },
  "sacodif":            { value: "Page 3 → Page 1", label: "Google", bg: "bg-accent/10", text: "text-accent" },
  "evolutia-formation": { value: "1ère position", label: "Google", bg: "bg-primary/10", text: "text-primary" },
  "dfp-france":         { value: "RDV automatisé", label: "100%", bg: "bg-foreground/8", text: "text-foreground" },
};

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
          {featured.map((client, index) => {
            const stat = CLIENT_STATS[client.slug];
            return (
              <li key={client.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/60 transition-colors hover:border-primary/30 hover:bg-surface/60">
                  {/* Stat bar en haut */}
                  {stat && (
                    <div className={`flex items-center gap-2.5 border-b border-border/40 px-5 py-3 ${stat.bg}`}>
                      <TrendingUp className={`h-4 w-4 shrink-0 ${stat.text}`} />
                      <span className={`text-sm font-semibold ${stat.text}`}>{stat.value}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                  )}

                  {/* Contenu */}
                  <div className="flex flex-1 items-start gap-5 p-5 sm:p-6">
                    <div
                      aria-hidden
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-sm font-bold ring-1 ring-border ${AVATAR_STYLES[index % AVATAR_STYLES.length]}`}
                    >
                      {client.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-base font-semibold text-foreground">{client.name}</h3>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {client.location}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{client.sector}</p>
                      <p className="mt-3 text-pretty text-base font-medium text-foreground">
                        {client.result}
                      </p>
                      <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {client.detail}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
