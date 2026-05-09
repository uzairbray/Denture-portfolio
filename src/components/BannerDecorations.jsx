// Dental-themed SVG decorations for banners.
// Tooth positions on DentalArchSVG / ArchQuarterSVG are sampled at t-parameter
// intervals along: M 68 560 C 68 310 105 68 260 68 C 415 68 452 310 452 560

// Full maxillary arch — occlusal (top-down) view.
// Used as the large hero background decoration.
export function DentalArchSVG({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="da-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="white" stopOpacity="1" />
          <stop offset="80%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="da-mask">
          <rect width="520" height="560" fill="url(#da-fade)" />
        </mask>
      </defs>

      <g mask="url(#da-mask)">
        {/* Outermost guide — dashed */}
        <path
          d="M 30 560 C 30 295 68 22 260 22 C 452 22 490 295 490 560"
          stroke="currentColor" strokeWidth="0.55" strokeDasharray="5 14" fill="none"
        />
        {/* Main arch */}
        <path
          d="M 68 560 C 68 310 105 68 260 68 C 415 68 452 310 452 560"
          stroke="currentColor" strokeWidth="1.8" fill="none"
        />
        {/* Inner arch */}
        <path
          d="M 115 560 C 115 318 148 115 260 115 C 372 115 405 318 405 560"
          stroke="currentColor" strokeWidth="0.7" fill="none"
        />

        {/* Dental midline */}
        <line x1="260" y1="10" x2="260" y2="560"
          stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 14" />

        {/* Left quadrant tooth markers — UL1 through UL8 */}
        <circle cx="217" cy="75"  r="4.2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="181" cy="95"  r="3.8" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="150" cy="127" r="4.0" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="127" cy="169" r="3.8" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="106" cy="220" r="3.8" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="91"  cy="279" r="4.2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="80"  cy="344" r="4.0" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="74"  cy="413" r="3.5" stroke="currentColor" strokeWidth="0.9" fill="none" />

        {/* Midline central incisor */}
        <circle cx="260" cy="68" r="4.2" stroke="currentColor" strokeWidth="1.2" fill="none" />

        {/* Right quadrant tooth markers — UR1 through UR8 */}
        <circle cx="303" cy="75"  r="4.2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="339" cy="95"  r="3.8" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="370" cy="127" r="4.0" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="393" cy="169" r="3.8" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="414" cy="220" r="3.8" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="429" cy="279" r="4.2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="440" cy="344" r="4.0" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="446" cy="413" r="3.5" stroke="currentColor" strokeWidth="0.9" fill="none" />

        {/* Measurement scale — right edge */}
        {[0, 70, 140, 210, 280, 350, 420].map((offset, i) => (
          <line key={i}
            x1={i % 2 === 0 ? 490 : 496} y1={offset + 28}
            x2="508"                       y2={offset + 28}
            stroke="currentColor"
            strokeWidth={i % 2 === 0 ? 0.8 : 0.5}
          />
        ))}

        {/* Corner registration crosshairs */}
        <line x1="10"  y1="18" x2="44"  y2="18" stroke="currentColor" strokeWidth="0.9" />
        <line x1="27"  y1="2"  x2="27"  y2="36" stroke="currentColor" strokeWidth="0.9" />
        <line x1="476" y1="18" x2="510" y2="18" stroke="currentColor" strokeWidth="0.9" />
        <line x1="493" y1="2"  x2="493" y2="36" stroke="currentColor" strokeWidth="0.9" />

        {/* Technical label */}
        <text
          x="260" y="14" textAnchor="middle"
          fontSize="6.5" fill="currentColor" letterSpacing="3" fontFamily="monospace"
        >
          MAXILLARY · OCCLUSAL
        </text>
      </g>
    </svg>
  )
}

// Right arch quadrant — from dental midline outward to third molar.
// Derived by scaling the right half of the full arch to a 298×220 viewBox.
// Used as the PageHeader right-side watermark; fades from left (transparent) to right.
export function ArchQuarterSVG({ className = '' }) {
  return (
    <svg
      viewBox="0 0 298 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aq-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="white" stopOpacity="0" />
          <stop offset="35%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="aq-mask">
          <rect width="298" height="220" fill="url(#aq-fade)" />
        </mask>
      </defs>

      <g mask="url(#aq-mask)">
        {/* Outer guide — dashed */}
        <path
          d="M 0 -8 C 244 -8 298 112 298 220"
          stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 12" fill="none"
        />
        {/* Main arch */}
        <path
          d="M 0 0 C 238 0 295 108 295 220"
          stroke="currentColor" strokeWidth="1.8" fill="none"
        />
        {/* Inner arch */}
        <path
          d="M 0 21 C 172 21 222 110 222 220"
          stroke="currentColor" strokeWidth="0.7" fill="none"
        />

        {/* Tooth markers — UR1 through UR7 */}
        <circle cx="66"  cy="3"   r="3.5" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="121" cy="12"  r="3.2" stroke="currentColor" strokeWidth="0.9" fill="none" />
        <circle cx="169" cy="24"  r="3.5" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="206" cy="41"  r="3.2" stroke="currentColor" strokeWidth="0.9" fill="none" />
        <circle cx="237" cy="61"  r="3.5" stroke="currentColor" strokeWidth="1.0" fill="none" />
        <circle cx="260" cy="85"  r="3.2" stroke="currentColor" strokeWidth="0.9" fill="none" />
        <circle cx="277" cy="110" r="3.5" stroke="currentColor" strokeWidth="1.0" fill="none" />

        {/* Midline indicator — left edge */}
        <line x1="1" y1="0" x2="1" y2="220"
          stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 10" />
      </g>
    </svg>
  )
}

// Molar — occlusal (top-down) view. Crown outline + four cusp areas + central fissure.
// More site-specific than a generic geometric accent.
export function MolarOcclusal({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      {/* Crown outline */}
      <rect x="10" y="10" width="80" height="80" rx="24"
        stroke="currentColor" strokeWidth="1.8" fill="none" />
      {/* Four cusp areas */}
      <rect x="14" y="14" width="32" height="32" rx="12"
        stroke="currentColor" strokeWidth="1.0" fill="none" opacity="0.7" />
      <rect x="54" y="14" width="32" height="32" rx="12"
        stroke="currentColor" strokeWidth="1.0" fill="none" opacity="0.7" />
      <rect x="14" y="54" width="32" height="32" rx="12"
        stroke="currentColor" strokeWidth="1.0" fill="none" opacity="0.7" />
      <rect x="54" y="54" width="32" height="32" rx="12"
        stroke="currentColor" strokeWidth="1.0" fill="none" opacity="0.7" />
      {/* Central fissure cross */}
      <line x1="50" y1="14" x2="50" y2="86"
        stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <line x1="14" y1="50" x2="86" y2="50"
        stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      {/* Central pit */}
      <circle cx="50" cy="50" r="5"
        stroke="currentColor" strokeWidth="1.0" fill="none" opacity="0.85" />
    </svg>
  )
}

// Ruler-style measurement ticks along the left edge — calibration/technical drawing feel.
export function RulerEdge({ className = '' }) {
  return (
    <svg
      viewBox="0 0 20 800"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      {Array.from({ length: 16 }, (_, i) => {
        const y = i * 52 + 20
        const isMajor = i % 4 === 0
        return (
          <line
            key={i}
            x1={isMajor ? 6 : 12}
            y1={y}
            x2="20"
            y2={y}
            stroke="currentColor"
            strokeWidth={isMajor ? 0.9 : 0.55}
          />
        )
      })}
    </svg>
  )
}

// Gradient rule — horizontal decorative separator.
export function DecorativeLine({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 4"
      className={`w-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="dl-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopOpacity="1" />
          <stop offset="60%"  stopOpacity="0.5" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="2" x2="200" y2="2" stroke="url(#dl-grad)" strokeWidth="1.5" />
    </svg>
  )
}
