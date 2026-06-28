/**
 * Illustrations SVG Siboard Consulting
 * Style: flat moderne, palette identité v4
 * violet #5C4EFF · corail #FF5C35 · encre #12122A · lavande #F7F6FF
 */

/** Illustration Hero — dashboard + automation flottants */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* ── Fond : grille de points ── */}
      <g fill="#5C4EFF" opacity="0.08">
        {[0,1,2,3,4,5,6,7,8].map((col) =>
          [0,1,2,3,4,5,6].map((row) => (
            <circle key={`${col}-${row}`} cx={40 + col * 50} cy={20 + row * 56} r="2.5" />
          ))
        )}
      </g>

      {/* ── Arc orbital décoratif (écho du logo) ── */}
      <path
        d="M 420 320 A 130 130 0 1 1 360 80"
        fill="none"
        stroke="#5C4EFF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.12"
      />

      {/* ── Carte principale : dashboard leads ── */}
      <g transform="translate(60, 60)">
        <rect x="4" y="6" width="240" height="170" rx="18" fill="#12122A" opacity="0.07" />
        <rect width="240" height="170" rx="18" fill="white" />
        <rect width="240" height="6" rx="3" fill="#5C4EFF" />
        <text x="18" y="32" fontFamily="Figtree, sans-serif" fontWeight="600" fontSize="11" fill="#12122A" opacity="0.5" letterSpacing="0.5">LEADS CE MOIS</text>
        <text x="18" y="62" fontFamily="Figtree, sans-serif" fontWeight="900" fontSize="36" fill="#12122A" letterSpacing="-1.5">+47%</text>
        <rect x="18" y="70" width="52" height="3" rx="1.5" fill="#FF5C35" opacity="0.7" />
        <rect x="18" y="125" width="22" height="28" rx="5" fill="#5C4EFF" opacity="0.2" />
        <rect x="50" y="110" width="22" height="43" rx="5" fill="#5C4EFF" opacity="0.35" />
        <rect x="82" y="95" width="22" height="58" rx="5" fill="#5C4EFF" opacity="0.55" />
        <rect x="114" y="78" width="22" height="75" rx="5" fill="#5C4EFF" opacity="0.75" />
        <rect x="146" y="55" width="22" height="98" rx="5" fill="#5C4EFF" />
        <rect x="178" y="40" width="22" height="113" rx="5" fill="#FF5C35" />
        <text x="21" y="163" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.3">Jan</text>
        <text x="53" y="163" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.3">Fév</text>
        <text x="85" y="163" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.3">Mar</text>
        <text x="117" y="163" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.3">Avr</text>
        <text x="149" y="163" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.3">Mai</text>
        <text x="181" y="163" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.3">Juin</text>
      </g>

      {/* ── Carte flottante : 10 RDV garantis ── */}
      <g transform="translate(310, 50)">
        <rect x="3" y="4" width="140" height="72" rx="14" fill="#12122A" opacity="0.08" />
        <rect width="140" height="72" rx="14" fill="white" />
        <rect width="140" height="4" rx="2" fill="#FF5C35" />
        <circle cx="22" cy="32" r="12" fill="#FF5C35" opacity="0.15" />
        <text x="22" y="37" fontFamily="Figtree, sans-serif" fontWeight="900" fontSize="14" fill="#FF5C35" textAnchor="middle">✓</text>
        <text x="42" y="28" fontFamily="Figtree, sans-serif" fontWeight="800" fontSize="15" fill="#12122A" letterSpacing="-0.5">10 RDV</text>
        <text x="42" y="42" fontFamily="Figtree, sans-serif" fontWeight="400" fontSize="10" fill="#12122A" opacity="0.45">qualifiés garantis</text>
        <rect x="14" y="54" width="50" height="5" rx="2.5" fill="#FF5C35" opacity="0.25" />
        <rect x="68" y="54" width="60" height="5" rx="2.5" fill="#5C4EFF" opacity="0.15" />
      </g>

      {/* ── Carte flottante : agent actif ── */}
      <g transform="translate(310, 148)">
        <rect x="3" y="4" width="140" height="80" rx="14" fill="#12122A" opacity="0.08" />
        <rect width="140" height="80" rx="14" fill="white" />
        <rect width="140" height="4" rx="2" fill="#5C4EFF" />
        <circle cx="22" cy="36" r="13" fill="#EEF0FF" />
        <path d="M 15 36 A 7 7 0 1 1 29 36" fill="none" stroke="#5C4EFF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="22" cy="36" r="3" fill="#5C4EFF" />
        <circle cx="32" cy="26" r="4" fill="#12122A" />
        <circle cx="32" cy="26" r="2" fill="#F7F6FF" />
        <text x="44" y="30" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="11" fill="#12122A">Agent actif</text>
        <text x="44" y="44" fontFamily="Figtree, sans-serif" fontSize="9" fill="#12122A" opacity="0.4">Répond 24h/24</text>
        <rect x="14" y="60" width="80" height="4" rx="2" fill="#5C4EFF" opacity="0.15" />
        <rect x="14" y="68" width="55" height="4" rx="2" fill="#5C4EFF" opacity="0.1" />
      </g>

      {/* ── Badge notification ── */}
      <g transform="translate(285, 245)">
        <rect x="2" y="3" width="170" height="46" rx="23" fill="#12122A" opacity="0.06" />
        <rect width="170" height="46" rx="23" fill="#5C4EFF" />
        <circle cx="23" cy="23" r="13" fill="white" opacity="0.2" />
        <text x="23" y="28" fontFamily="Figtree, sans-serif" fontWeight="900" fontSize="13" fill="white" textAnchor="middle">🔔</text>
        <text x="46" y="19" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="11" fill="white">Nouveau lead reçu</text>
        <text x="46" y="33" fontFamily="Figtree, sans-serif" fontWeight="400" fontSize="9" fill="white" opacity="0.65">Relance automatique dans 2 min</text>
      </g>

      {/* ── Carte calendrier ── */}
      <g transform="translate(60, 265)">
        <rect x="3" y="4" width="190" height="100" rx="14" fill="#12122A" opacity="0.07" />
        <rect width="190" height="100" rx="14" fill="white" />
        <rect width="190" height="4" rx="2" fill="#5C4EFF" />
        <text x="14" y="26" fontFamily="Figtree, sans-serif" fontWeight="600" fontSize="10" fill="#12122A" opacity="0.4" letterSpacing="0.5">AGENDA CETTE SEMAINE</text>
        {["L","M","M","J","V"].map((d, i) => (
          <g key={i} transform={`translate(${14 + i * 34}, 34)`}>
            <text x="12" y="12" fontFamily="Figtree, sans-serif" fontSize="9" fill="#12122A" opacity="0.35" textAnchor="middle">{d}</text>
            <rect
              y="18"
              width="24"
              height="28"
              rx="6"
              fill={i === 1 || i === 3 ? "#5C4EFF" : i === 4 ? "#FF5C35" : "#F7F6FF"}
              opacity={i === 1 || i === 3 ? 1 : 0.8}
            />
            {(i === 1 || i === 3) && (
              <text x="12" y="36" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="10" fill="white" textAnchor="middle">✓</text>
            )}
            {i === 4 && (
              <text x="12" y="36" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="10" fill="white" textAnchor="middle">+1</text>
            )}
          </g>
        ))}
        <text x="14" y="90" fontFamily="Figtree, sans-serif" fontWeight="500" fontSize="10" fill="#5C4EFF">2 RDV automatisés cette semaine</text>
      </g>

      {/* ── Petits cercles décoratifs ── */}
      <circle cx="46" cy="380" r="8" fill="#FF5C35" opacity="0.3" />
      <circle cx="460" cy="30" r="12" fill="#5C4EFF" opacity="0.12" />
      <circle cx="450" cy="380" r="6" fill="#5C4EFF" opacity="0.2" />
    </svg>
  );
}

/** Illustration mini — Automatisation (pour carte offre) */
export function AutomatisationIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 140"
      width="100%"
      height="140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Étape 1 */}
      <rect x="0" y="30" width="72" height="72" rx="14" fill="#EEF0FF" />
      <text x="36" y="58" fontFamily="Figtree, sans-serif" fontSize="22" textAnchor="middle">📩</text>
      <text x="36" y="82" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="9" fill="#5C4EFF" textAnchor="middle">Lead entrant</text>
      {/* Flèche */}
      <line x1="76" y1="66" x2="104" y2="66" stroke="#5C4EFF" strokeWidth="2" strokeDasharray="4 3" />
      <polygon points="104,61 114,66 104,71" fill="#5C4EFF" />
      {/* Étape 2 */}
      <rect x="116" y="30" width="72" height="72" rx="14" fill="#5C4EFF" />
      <text x="152" y="58" fontFamily="Figtree, sans-serif" fontSize="22" textAnchor="middle">⚡</text>
      <text x="152" y="76" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="9" fill="white" textAnchor="middle">Agent IA</text>
      <text x="152" y="88" fontFamily="Figtree, sans-serif" fontWeight="400" fontSize="8" fill="white" opacity="0.7" textAnchor="middle">répond en 2 min</text>
      {/* Flèche */}
      <line x1="192" y1="66" x2="220" y2="66" stroke="#FF5C35" strokeWidth="2" strokeDasharray="4 3" />
      <polygon points="220,61 230,66 220,71" fill="#FF5C35" />
      {/* Étape 3 */}
      <rect x="232" y="30" width="82" height="72" rx="14" fill="#FFF0EB" />
      <text x="273" y="58" fontFamily="Figtree, sans-serif" fontSize="22" textAnchor="middle">📅</text>
      <text x="273" y="76" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="9" fill="#FF5C35" textAnchor="middle">RDV posé</text>
      <text x="273" y="88" fontFamily="Figtree, sans-serif" fontWeight="400" fontSize="8" fill="#FF5C35" opacity="0.7" textAnchor="middle">automatiquement</text>
      {/* Label bas */}
      <text x="160" y="130" fontFamily="Figtree, sans-serif" fontWeight="500" fontSize="10" fill="#12122A" opacity="0.35" textAnchor="middle">Sans intervention humaine</text>
    </svg>
  );
}

/** Illustration mini — Mission 90J (pour carte offre) */
export function Mission90JIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 140"
      width="100%"
      height="140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Timeline 90 jours */}
      <line x1="20" y1="70" x2="300" y2="70" stroke="#EEF0FF" strokeWidth="3" strokeLinecap="round" />
      {/* Segments */}
      <line x1="20" y1="70" x2="115" y2="70" stroke="#5C4EFF" strokeWidth="3" strokeLinecap="round" />
      <line x1="115" y1="70" x2="210" y2="70" stroke="#5C4EFF" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      {/* Points */}
      <circle cx="20" cy="70" r="7" fill="#5C4EFF" />
      <circle cx="115" cy="70" r="7" fill="#5C4EFF" />
      <circle cx="210" cy="70" r="7" fill="#5C4EFF" opacity="0.4" />
      <circle cx="300" cy="70" r="9" fill="#FF5C35" />
      <text x="300" y="75" fontFamily="Figtree, sans-serif" fontWeight="900" fontSize="9" fill="white" textAnchor="middle">✓</text>
      {/* Labels */}
      <text x="20" y="50" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="9" fill="#5C4EFF" textAnchor="middle">J1</text>
      <text x="20" y="92" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.45" textAnchor="middle">Kick-off</text>
      <text x="115" y="50" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="9" fill="#5C4EFF" textAnchor="middle">J30</text>
      <text x="115" y="92" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.45" textAnchor="middle">1ers RDV</text>
      <text x="210" y="50" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="9" fill="#5C4EFF" textAnchor="middle">J60</text>
      <text x="210" y="92" fontFamily="Figtree, sans-serif" fontSize="8" fill="#12122A" opacity="0.45" textAnchor="middle">Accélération</text>
      <text x="300" y="50" fontFamily="Figtree, sans-serif" fontWeight="800" fontSize="10" fill="#FF5C35" textAnchor="middle">J90</text>
      <text x="300" y="92" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="8" fill="#FF5C35" textAnchor="middle">10 RDV</text>
      {/* Badge garantie */}
      <rect x="90" y="108" width="140" height="24" rx="12" fill="#5C4EFF" />
      <text x="160" y="124" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="10" fill="white" textAnchor="middle">Garantis ou prolongation gratuite</text>
    </svg>
  );
}
