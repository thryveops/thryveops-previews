import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "chrome" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-bold tracking-tight " +
  "rounded-sm transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red " +
  "disabled:opacity-50 disabled:pointer-events-none select-none";

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-6 py-3",
  lg: "text-base px-7 py-3.5",
};

const variants: Record<Variant, string> = {
  // Primary brand CTA — the only thing that should be loud red.
  primary:
    "bg-red text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(224,30,38,0.6)] " +
    "hover:bg-red-dark hover:-translate-y-0.5 active:translate-y-0",
  // Outline — adapts to surface via currentColor.
  outline:
    "border border-silver/40 text-current hover:border-current hover:bg-white/5",
  // Chrome — silver fill for secondary emphasis on dark.
  chrome:
    "bg-silver text-ink hover:bg-white hover:-translate-y-0.5 active:translate-y-0",
  // Ghost — quiet text link with an animated underline.
  ghost:
    "text-current px-0 py-0 underline-offset-4 hover:underline decoration-red decoration-2",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: CommonProps & ComponentProps<"button">) {
  const cls = `${base} ${variant !== "ghost" ? sizes[size] : ""} ${variants[variant]} ${className}`;
  return <button className={cls} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...props
}: CommonProps & ComponentProps<typeof Link>) {
  const cls = `${base} ${variant !== "ghost" ? sizes[size] : ""} ${variants[variant]} ${className}`;
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}
