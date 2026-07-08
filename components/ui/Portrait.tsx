import { cn } from "@/lib/cn";

/**
 * Placeholder portrait — a calm, on-brand SVG stand-in.
 * TODO(client): Replace with a real photograph using next/image
 * (ideally with the .photo-reveal grayscale-to-color treatment).
 */
export function Portrait({
  name,
  className,
  ratio = "aspect-[4/5]",
}: {
  name: string;
  className?: string;
  ratio?: string;
}) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-lg)] border hairline",
        ratio,
        className
      )}
      role="img"
      aria-label={`Portrait placeholder for ${name}`}
    >
      <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`bg-${initials}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b4a36" />
            <stop offset="100%" stopColor="#0d241b" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#bg-${initials})`} />
        {/* meridian arcs */}
        {[120, 180, 240].map((r) => (
          <circle key={r} cx="200" cy="250" r={r} fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        ))}
        <line x1="0" y1="250" x2="400" y2="250" stroke="#d9b95c" strokeOpacity="0.3" />
        {/* simple figure silhouette */}
        <circle cx="200" cy="205" r="62" fill="#ffffff" fillOpacity="0.1" />
        <path
          d="M96 430 C 96 344, 148 300, 200 300 C 252 300, 304 344, 304 430 Z"
          fill="#ffffff"
          fillOpacity="0.1"
        />
        <text
          x="200"
          y="470"
          textAnchor="middle"
          fill="#ffffff"
          fillOpacity="0.55"
          fontSize="20"
          fontFamily="Inter, sans-serif"
          letterSpacing="3"
        >
          {initials.toUpperCase()}
        </text>
      </svg>
      <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white/85 backdrop-blur">
        Photo placeholder
      </span>
    </div>
  );
}
