/**
 * Speed-lines motif — the tapered horizontal slashes from the MFG logo.
 * Reused as a recurring brand accent across sections. Decorative only.
 */
export function SpeedLines({
  className = "",
  tone = "red",
}: {
  className?: string;
  tone?: "red" | "silver" | "mixed";
}) {
  const a = tone === "silver" ? "var(--color-silver)" : "var(--color-red)";
  const b =
    tone === "mixed"
      ? "var(--color-silver)"
      : tone === "silver"
        ? "var(--color-silver-dim)"
        : "var(--color-red)";
  return (
    <svg
      viewBox="0 0 120 60"
      aria-hidden="true"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <polygon points="0,8 84,8 96,12 0,12" fill={a} opacity="0.95" />
      <polygon points="14,20 100,20 112,24 14,24" fill={b} opacity="0.8" />
      <polygon points="4,32 92,32 104,36 4,36" fill={a} opacity="0.6" />
      <polygon points="22,44 108,44 120,48 22,48" fill={b} opacity="0.45" />
    </svg>
  );
}
