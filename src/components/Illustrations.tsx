import type { CSSProperties } from "react";

// Hand-drawn MBA / finance / operations illustrations. Colours come from the theme tokens,
// motion from the .ill-* classes in styles.css (disabled for prefers-reduced-motion).

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Gear({ cx, cy, r, teeth = 8, fill, className }: { cx: number; cy: number; r: number; teeth?: number; fill: string; className?: string }) {
  return (
    <g className={className}>
      {Array.from({ length: teeth }, (_, i) => (
        <rect
          key={i}
          x={cx - r * 0.2}
          y={cy - r * 1.3}
          width={r * 0.4}
          height={r * 0.6}
          rx={r * 0.08}
          fill={fill}
          transform={`rotate(${(i * 360) / teeth} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <circle cx={cx} cy={cy} r={r * 0.42} fill="var(--card)" />
    </g>
  );
}

/** About scene: financial report clipboard, interlocking operations gears and a calculator. */
export function FinanceOpsIllustration() {
  return (
    <svg viewBox="0 0 320 270" className="h-auto w-full" role="img" aria-label="Finance report, operations gears and calculator">
      <defs>
        <linearGradient id="ops-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary-glow)" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="135" r="125" fill="url(#ops-g)" opacity=".08" />

      {/* Report clipboard */}
      <rect x="28" y="34" width="156" height="206" rx="18" fill="var(--card)" stroke="var(--border)" />
      <rect x="76" y="22" width="60" height="24" rx="10" fill="url(#ops-g)" />
      <text x="48" y="78" fontSize="13" fontWeight="700" fill="var(--foreground)">Financial Report</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="56" cy={104 + i * 28} r="9" fill="url(#ops-g)" opacity=".18" />
          <path className="ill-check" style={d(400 + i * 200)} pathLength={1} d={`M51 ${104 + i * 28}l4 4 7-8`} fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="74" y={100 + i * 28} width={[82, 64, 74][i]} height="8" rx="4" fill="var(--border)" />
        </g>
      ))}
      <polyline className="ill-line-reveal" pathLength={1} points="48,214 78,198 104,206 130,184 162,172" fill="none" stroke="url(#ops-g)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Operations gears */}
      <Gear cx={238} cy={78} r={30} teeth={10} fill="url(#ops-g)" className="ill-spin" />
      <Gear cx={282} cy={132} r={18} teeth={8} fill="var(--foreground)" className="ill-spin-rev" />

      {/* Calculator */}
      <g transform="translate(206 160)">
        <g className="ill-float">
          <rect width="92" height="96" rx="14" fill="url(#ops-g)" />
          <rect x="10" y="10" width="72" height="22" rx="6" fill="#fff" opacity=".9" />
          <text x="76" y="26" fontSize="12" fontWeight="700" textAnchor="end" fill="var(--primary)">₹ 1,250</text>
          {[0, 1, 2].map((c) =>
            [0, 1].map((r) => <rect key={`${c}${r}`} x={12 + c * 24} y={44 + r * 24} width="18" height="16" rx="5" fill="#fff" opacity=".35" />),
          )}
        </g>
      </g>
    </svg>
  );
}

/** Decorative rising chart used behind the closing banner. */
export function GrowthLines() {
  return (
    <svg viewBox="0 0 600 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <polyline className="ill-line-reveal" pathLength={1} points="0,180 80,160 160,170 240,120 320,130 400,80 480,90 600,20" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="3" />
      <polyline className="ill-line-reveal" style={d(300)} pathLength={1} points="0,195 100,185 200,150 300,160 400,115 500,100 600,60" fill="none" stroke="#fff" strokeOpacity=".2" strokeWidth="2" />
    </svg>
  );
}
