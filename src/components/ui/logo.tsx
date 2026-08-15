/**
 * Composants logo Siboard Consulting
 *
 * SiboardLogo     : symbole orbital + wordmark SIBOARD consulting
 * SiboardLogomark : icône seule (orbite + centre)
 *
 * Identite v5 2026, registre rapport : Archivo 800, encre #19120E,
 * un seul point de couleur, le noeud en vermillon #CC2C05.
 * Le vermillon est reserve au signal ; il ne sert nulle part ailleurs
 * dans le logo.
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
        stroke="#19120E"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Nœud terminal corail */}
      <circle cx="68" cy="18" r="8" fill="#CC2C05" />
      {/* Centre solide */}
      <circle cx="50" cy="50" r="12" fill="#19120E" />
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
          className="text-[17px] font-extrabold tracking-[-0.04em] text-foreground"
          style={{ fontFamily: "var(--font-archivo), sans-serif" }}
        >
          SIBOARD
        </span>
        <span
          className="text-[9px] font-normal tracking-[0.18em] text-muted-foreground mt-[1px]"
          style={{ fontFamily: "var(--font-archivo), sans-serif" }}
        >
          consulting
        </span>
      </div>
    </div>
  );
}
