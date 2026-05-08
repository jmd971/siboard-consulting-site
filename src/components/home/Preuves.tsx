import { TrendingUp } from "lucide-react";

import { PROOF_STATS } from "@/lib/constants";

export function Preuves() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="container-page py-14 sm:py-16">
        <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <TrendingUp className="h-3.5 w-3.5 text-primary" />
          Résultats clients récents
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-3">
          {PROOF_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 bg-background/60 p-7 text-center"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
