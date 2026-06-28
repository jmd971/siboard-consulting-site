/**
 * Composants logo Siboard Consulting
 *
 * SiboardLogo     : symbole orbital + wordmark SIBOARD consulting
 * SiboardLogomark : icône seule (orbite + centre)
 *
 * Identité v4 2026 — Figtree 900 · violet #5C4EFF · corail #FF5C35
 */

interface LogoProps {
  className?: string;
}

/** Icône seule — favicon / usage compact */
export function SiboardLogomark({ className }: LogoProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* Arc orbital — presque complet, sens horaire */}
      <path
        d="M 82 50 A 32 32 0 1 1 68 18"
        fill="none"
        stroke="#5C4EFF"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Nœud terminal corail */}
      <circle cx="68" cy="18" r="8" fill="#FF5C35" />
      {/* Centre solide */}
      <circle cx="50" cy="50" r="12" fill="#12122A" />
    </svg>
  );
}

/** Logo complet — Navbar et Footer */
export function SiboardLogo({ className }: LogoProps) {
  return (
    <div
      className={`flex items-center gap-2.5 ${className ?? ""}`}
      role="img"
      aria-label="Siboard Consulting"
    >
      <SiboardLogomark />
      <div className="flex flex-col justify-center leading-none">
        <span
          className="text-[17px] font-black tracking-[-0.04em] text-foreground"
          style={{ fontFamily: "var(--font-figtree), sans-serif" }}
        >
          SIBOARD
        </span>
        <span
          className="text-[9px] font-light tracking-[0.18em] text-primary mt-[1px]"
          style={{ fontFamily: "var(--font-figtree), sans-serif" }}
        >
          consulting
        </span>
      </div>
    </div>
  );
}
