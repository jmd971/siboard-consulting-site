import { ArrowUpRight } from "lucide-react";

import { ECOSYSTEME } from "@/lib/constants";

/* ── Icônes SVG sur mesure, palette identité Siboard ── */

function AdamBoardsIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="12" width="4" height="8" rx="1.5" fill="#5C4EFF" opacity="0.4" />
        <rect x="9" y="7" width="4" height="13" rx="1.5" fill="#5C4EFF" opacity="0.7" />
        <rect x="16" y="2" width="4" height="18" rx="1.5" fill="#5C4EFF" />
        <path d="M3 10 L10 5 L16 8" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="8" r="2" fill="#FF5C35" />
      </svg>
    </div>
  );
}

function TransmiExpertIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="11" r="3.5" stroke="#FF5C35" strokeWidth="1.5" />
        <circle cx="17" cy="11" r="3.5" fill="#FF5C35" />
        <path d="M8.5 9.5 L13.5 9.5" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.5 7.5 L13.5 9.5 L11.5 11.5" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 12.5 L13.5 12.5" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    </div>
  );
}

function SecureXiaIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2 L19 5.5 L19 11 C19 15.4 15.4 19.2 11 20 C6.6 19.2 3 15.4 3 11 L3 5.5 Z" stroke="#12122A" strokeWidth="1.5" strokeLinejoin="round" fill="#12122A" fillOpacity="0.06" />
        <path d="M7.5 11 L9.5 13 L14.5 8.5" stroke="#5C4EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const VENTURE_ICONS: Record<string, () => React.JSX.Element> = {
  AdamBoards: AdamBoardsIcon,
  TransmiExpert: TransmiExpertIcon,
  SecureXia: SecureXiaIcon,
};

export function Ecosysteme() {
  return (
    <section className="container-page pt-20 sm:pt-28 pb-4">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Notre écosystème
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Au-delà du consulting — des plateformes que nous avons construites.
        </h2>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {ECOSYSTEME.map((venture) => {
          const Icon = VENTURE_ICONS[venture.name];
          return (
            <li key={venture.name}>
              <a
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-surface/40 p-7 transition-colors hover:border-primary/30 hover:bg-surface/60 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3">
                  {Icon ? <Icon /> : <div className="h-10 w-10" />}
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden
                  />
                </div>
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  {venture.name}
                </p>
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
          );
        })}
      </ul>
    </section>
  );
}
