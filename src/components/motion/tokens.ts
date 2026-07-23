// ─── Motion tokens — the Thryve house style ──────────────────────────────────
// Every value here is lifted verbatim from the Editorial Ink motion set that
// shipped on the four tattoo previews. Change a value here and every build
// using @/components/motion follows. Never hardcode a duration or easing in a
// page file.

/** Signature ease-out. Cubic bezier, gentle overshoot-free settle. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  /** Scroll-entrance reveal. Keep 0.6–0.8. Never exceed 1.0. */
  enter: 0.8,
  /** Ken Burns drift on a still hero. Slow enough to read as ambient. */
  kenBurns: 26,
  /** Marquee ribbon loop. */
  marquee: 38,
} as const;

/** Entrance travel in px. Never exceed 40 — large travel reads as templated. */
export const RISE = 26;

/** Scroll reveals fire once and never replay. */
export const VIEWPORT = { once: true, margin: "-70px" } as const;

/** Hero parallax drift range (scroll start → end). */
export const PARALLAX_HERO: [string, string] = ["0%", "18%"];

/** Full-bleed divider band drift range. */
export const PARALLAX_BAND: [string, string] = ["-12%", "12%"];

/** Ken Burns scale range on a still hero. */
export const KEN_BURNS_SCALE: [number, number] = [1, 1.07];

/** Marquee track travel — 50% because the run is duplicated for the loop. */
export const MARQUEE_X: [string, string] = ["0%", "-50%"];
