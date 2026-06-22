import Link from "next/link";
import { brand } from "@/lib/brand";

/**
 * Brand wordmark, recreated in CSS/SVG so it scales crisply and works on any
 * surface without depending on the raster PNGs (which are busy + black-boxed).
 * Echoes the logo's speedometer arc, speed-lines, and red-MF / chrome-G.
 *
 * When a clean transparent SVG/PNG arrives from the client, this component can
 * be swapped for an <Image>, or kept as the lightweight inline version.
 */
export function Logo({
  tone = "dark",
  showWordmark = true,
  className = "",
}: {
  tone?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
}) {
  const gClass = tone === "dark" ? "chrome-text" : "text-ink";
  const wordTop = tone === "dark" ? "text-white" : "text-ink";
  const wordBottom = tone === "dark" ? "text-silver" : "text-gray-500";

  return (
    <Link
      href="/"
      aria-label={`${brand.displayName} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      {/* MFG mark with speedometer arc */}
      <span className="relative inline-flex flex-col items-center leading-none">
        <svg
          viewBox="0 0 100 22"
          aria-hidden="true"
          className="mb-[2px] h-[10px] w-[64px] overflow-visible"
          fill="none"
        >
          {/* speedometer arc — red sweep into chrome tip */}
          <path
            d="M6 20 A 44 44 0 0 1 94 20"
            stroke="var(--color-red)"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="74 100"
          />
          <path
            d="M6 20 A 44 44 0 0 1 94 20"
            stroke="var(--color-silver)"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="22 100"
            strokeDashoffset={-77}
          />
        </svg>
        <span
          className="font-display text-[1.5rem] font-black italic leading-none tracking-tight"
          style={{ transform: "skewX(-6deg)" }}
        >
          <span className="text-red">MF</span>
          <span className={gClass}>G</span>
        </span>
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[0.72rem] font-extrabold uppercase tracking-[0.28em] ${wordTop}`}
          >
            Motion
          </span>
          <span
            className={`font-display text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${wordBottom}`}
          >
            Fleet Group
          </span>
        </span>
      )}
    </Link>
  );
}
