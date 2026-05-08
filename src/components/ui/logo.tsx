/**
 * Composants logo Siboard Consulting — SVG inline
 *
 * SiboardLogo     : logo complet (SIBOARD + barre amber + CONSULTING)
 * SiboardLogomark : icône seule (carré "S" avec soulignement amber)
 *
 * La font Syne 800 est chargée via next/font/google dans layout.tsx
 * et exposée via la variable CSS --font-syne. L'SVG inline hérite
 * du contexte CSS du document — rendu typographique garanti.
 */

interface LogoProps {
  className?: string;
}

/** Logo complet — à utiliser dans Navbar et Footer */
export function SiboardLogo({ className }: LogoProps) {
  return (
    <svg
      width="140"
      height="32"
      viewBox="0 0 280 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Siboard Consulting"
      role="img"
      className={className}
      style={{ overflow: "visible" }}
    >
      {/* "SIBOARD" — Syne 800, couleur héritée (currentColor) */}
      <text
        x="0"
        y="38"
        fontFamily="var(--font-syne), 'Syne', sans-serif"
        fontWeight="800"
        fontSize="36"
        fill="currentColor"
        letterSpacing="-1.5"
      >
        SIBOARD
      </text>

      {/* Barre amber signature */}
      <rect x="1" y="46" width="178" height="2.5" rx="1.25" fill="#D4A853" />

      {/* "CONSULTING" — espacé, atténué */}
      <text
        x="2"
        y="62"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontWeight="400"
        fontSize="12"
        fill="currentColor"
        opacity="0.55"
        letterSpacing="3"
      >
        CONSULTING
      </text>
    </svg>
  );
}

/** Icône seule — favicon / usage compact */
export function SiboardLogomark({ className }: LogoProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* Fond carré arrondi sombre */}
      <rect width="64" height="64" rx="14" fill="#0D0F12" />
      {/* "S" centré */}
      <text
        x="32"
        y="40"
        fontFamily="var(--font-syne), 'Syne', sans-serif"
        fontWeight="800"
        fontSize="30"
        fill="#FFFFFF"
        textAnchor="middle"
        letterSpacing="-1"
      >
        S
      </text>
      {/* Barre amber */}
      <rect x="14" y="47" width="36" height="3" rx="1.5" fill="#D4A853" />
    </svg>
  );
}
