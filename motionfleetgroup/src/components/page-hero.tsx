import type { ReactNode } from "react";
import { Eyebrow } from "./ui/section";
import { SpeedLines } from "./speed-lines";

/** Consistent dark hero for interior pages. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="surface-dark relative overflow-hidden border-b border-ink-700">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 85% -10%, rgba(224,30,38,0.16), transparent 55%)",
        }}
      />
      <SpeedLines
        tone="mixed"
        className="pointer-events-none absolute -left-8 bottom-6 h-28 w-80 opacity-20"
      />
      <div className="shell relative py-16 sm:py-20 lg:py-24">
        <Eyebrow className="reveal">{eyebrow}</Eyebrow>
        <h1
          className="reveal mt-5 max-w-3xl font-display text-[length:var(--text-h1)] font-black leading-[0.98] tracking-tight text-white text-balance"
          style={{ animationDelay: "60ms" }}
        >
          {title}
        </h1>
        {lede && (
          <p
            className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-silver"
            style={{ animationDelay: "120ms" }}
          >
            {lede}
          </p>
        )}
        {children && (
          <div className="reveal mt-8" style={{ animationDelay: "180ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
