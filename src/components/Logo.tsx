import { cn } from "@/lib/utils";

// "M" inside a gradient circle — used in the header, footer and as the favicon (public/favicon.svg).
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("h-9 w-9 shrink-0", className)}>
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary-glow)" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#logo-g)" />
      <path d="M19 44V20h4.6L32 32.2 40.4 20H45v24h-5V29.6l-8 11.4-8-11.4V44z" fill="#fff" />
    </svg>
  );
}
