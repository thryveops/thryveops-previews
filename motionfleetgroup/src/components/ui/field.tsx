import type { ReactNode } from "react";

export type Tone = "dark" | "light";

const fieldBase =
  "w-full rounded-sm border px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors " +
  "focus:border-red focus:ring-2 focus:ring-red/30 placeholder:opacity-60";

const toneInput: Record<Tone, string> = {
  dark: "border-ink-700 bg-ink-800 text-white placeholder:text-silver-dim",
  light: "border-hairline bg-white text-gray-700 placeholder:text-gray-500",
};

const toneLabel: Record<Tone, string> = {
  dark: "text-silver",
  light: "text-gray-700",
};

export function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  tone = "dark",
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className={`mb-1.5 block font-display text-sm font-semibold ${toneLabel[tone]}`}
      >
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p className={`mt-1 text-xs ${tone === "dark" ? "text-silver-dim" : "text-gray-500"}`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="mt-1 text-xs font-medium text-red" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function Input({
  tone = "dark",
  invalid,
  className = "",
  ...props
}: React.ComponentProps<"input"> & { tone?: Tone; invalid?: boolean }) {
  return (
    <input
      className={`${fieldBase} ${toneInput[tone]} ${invalid ? "border-red" : ""} ${className}`}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

export function Textarea({
  tone = "dark",
  invalid,
  className = "",
  ...props
}: React.ComponentProps<"textarea"> & { tone?: Tone; invalid?: boolean }) {
  return (
    <textarea
      className={`${fieldBase} min-h-28 resize-y ${toneInput[tone]} ${invalid ? "border-red" : ""} ${className}`}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

export function Select({
  tone = "dark",
  invalid,
  className = "",
  children,
  ...props
}: React.ComponentProps<"select"> & { tone?: Tone; invalid?: boolean }) {
  return (
    <select
      className={`${fieldBase} appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10 ${toneInput[tone]} ${invalid ? "border-red" : ""} ${className}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23c7c7c7' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
      }}
      aria-invalid={invalid || undefined}
      {...props}
    >
      {children}
    </select>
  );
}
