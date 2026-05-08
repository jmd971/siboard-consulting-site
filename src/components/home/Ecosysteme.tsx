import { ArrowUpRight } from "lucide-react";

import { ECOSYSTEME } from "@/lib/constants";

export function Ecosysteme() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Notre écosystème
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Au-delà du consulting — des plateformes que nous avons construites.
        </h2>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {ECOSYSTEME.map((venture) => (
          <li key={venture.name}>
            <a
              href={venture.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-surface/40 p-7 transition-colors hover:border-primary/30 hover:bg-surface/60"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  {venture.name}
                </p>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden
                />
              </div>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {venture.description}
              </p>
              <p className="text-xs italic text-muted-foreground/60">
                {venture.note}
              </p>
              <p className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs text-primary/80">
                {venture.domain}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
