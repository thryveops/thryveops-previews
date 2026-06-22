import type { ReactNode } from "react";

/** Section wrapper: picks a surface theme and applies the content shell. */
export function Section({
  children,
  surface = "dark",
  className = "",
  shell = true,
  id,
}: {
  children: ReactNode;
  surface?: "dark" | "light" | "none";
  className?: string;
  shell?: boolean;
  id?: string;
}) {
  const surfaceClass =
    surface === "dark" ? "surface-dark" : surface === "light" ? "surface-light" : "";
  return (
    <section id={id} className={`${surfaceClass} ${className}`}>
      {shell ? <div className="shell py-16 sm:py-20 lg:py-24">{children}</div> : children}
    </section>
  );
}

/** Small caps kicker label with the chrome rule. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow flex items-center gap-3 text-red ${className}`}>
      <span className="inline-block h-[2px] w-7 bg-red" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Section heading block: eyebrow + title + optional lede, left-aligned. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="text-h2 font-extrabold text-balance">{title}</h2>
      {lede && <p className="mt-4 text-lg leading-relaxed opacity-80">{lede}</p>}
    </div>
  );
}
