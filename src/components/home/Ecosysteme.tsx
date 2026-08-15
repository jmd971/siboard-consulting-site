import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { ECOSYSTEME } from "@/lib/constants";

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

function AdamBoardsMockup() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-primary/20 bg-[#F7F6FF]">
      <div className="flex items-center gap-1.5 border-b border-primary/10 bg-white/60 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-border" />
        <div className="h-2 w-2 rounded-full bg-border" />
        <div className="h-2 w-2 rounded-full bg-border" />
        <div className="ml-2 h-2 w-20 rounded bg-border/60" />
      </div>
      <div className="p-3">
        <div className="mb-2 flex items-end gap-1.5">
          <div className="h-10 w-4 rounded bg-primary/20" />
          <div className="h-14 w-4 rounded bg-primary/40" />
          <div className="h-8 w-4 rounded bg-primary/25" />
          <div className="h-16 w-4 rounded bg-primary/60" />
          <div className="h-20 w-4 rounded bg-primary" />
          <div className="h-24 w-4 rounded bg-accent" />
        </div>
        <div className="flex gap-2">
          <div className="h-2 w-12 rounded bg-primary/20" />
          <div className="h-2 w-8 rounded bg-accent/30" />
        </div>
      </div>
    </div>
  );
}

function TransmiExpertMockup() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-accent/20 bg-[#FFF8F6]">
      <div className="border-b border-accent/10 bg-white/60 px-3 py-2">
        <div className="h-2 w-16 rounded bg-accent/30" />
      </div>
      <div className="space-y-2 p-3">
        {[70, 45, 85, 55].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent/40" />
            <div className="h-2 flex-1 rounded bg-border/40" />
            <div className="h-2 rounded bg-accent/60" style={{ width: `${w * 0.6}px`, maxWidth: "60%" }} />
          </div>
        ))}
        <div className="mt-3 h-6 w-full rounded-lg bg-accent/15 flex items-center justify-center">
          <div className="h-2 w-16 rounded bg-accent/50" />
        </div>
      </div>
    </div>
  );
}

function SecureXiaMockup() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border/40 bg-[#F7F6FF]">
      <div className="border-b border-border/30 bg-white/60 px-3 py-2">
        <div className="h-2 w-14 rounded bg-foreground/20" />
      </div>
      <div className="space-y-2 p-3">
        {["Sortie de secours", "Extincteurs", "Détecteurs", "Affichage réglementaire"].map((item, i) => (
          <div key={item} className="flex items-center gap-2">
            <div className={`h-4 w-4 shrink-0 rounded flex items-center justify-center ${i < 3 ? "bg-primary" : "bg-border/30"}`}>
              {i < 3 && (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4 L3 5.5 L6.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="h-2 flex-1 rounded bg-foreground/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

const VENTURE_ICONS: Record<string, () => React.JSX.Element> = {
  AdamBoards: AdamBoardsIcon,
  TransmiExpert: TransmiExpertIcon,
  SecureXia: SecureXiaIcon,
};

const VENTURE_MOCKUPS: Record<string, () => React.JSX.Element> = {
  AdamBoards: AdamBoardsMockup,
  TransmiExpert: TransmiExpertMockup,
  SecureXia: SecureXiaMockup,
};

export function Ecosysteme() {
  return (
    <section className="container-page pt-20 sm:pt-28 pb-4">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          04 — Nos plateformes
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Nous n&apos;installons pas seulement des outils. Nous en éditons.
        </h2>
        <p className="mt-4 text-pretty text-base text-muted-foreground">
          Trois logiciels métier en production, chacun co-édité avec un professionnel de son
          secteur. C&apos;est ce qui nous permet de construire le vôtre quand aucun outil du marché
          ne convient.
        </p>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {ECOSYSTEME.map((venture) => {
          const Icon = VENTURE_ICONS[venture.name];
          const Mockup = VENTURE_MOCKUPS[venture.name];
          return (
            <li key={venture.name}>
              <a
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-surface/40 p-6 transition-colors hover:border-primary/30 hover:bg-surface/60 cursor-pointer"
              >
                {Mockup && (
                  <div className="w-full">
                    <Mockup />
                  </div>
                )}

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
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  {venture.description}
                </p>
                <p className="text-sm italic text-muted-foreground/60">{venture.note}</p>
                <p className="mt-auto inline-flex items-center gap-1.5 font-mono text-sm text-primary/80">
                  {venture.domain}
                </p>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 text-center">
        <Link
          href="/ventures"
          className="group inline-flex items-center gap-1.5 text-base font-medium text-primary transition-colors hover:text-primary/80"
        >
          Comment naissent ces plateformes, et ce que ça change pour vous
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
