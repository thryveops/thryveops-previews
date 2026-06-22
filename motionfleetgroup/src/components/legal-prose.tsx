import type { ReactNode } from "react";

/**
 * Styled long-form text container for legal pages (dark surface).
 * Scoped typographic styles so we don't pull in a prose plugin.
 */
export function LegalProse({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        "max-w-3xl text-silver leading-relaxed " +
        "[&_h2]:mt-10 [&_h2]:text-h3 [&_h2]:font-bold [&_h2]:text-white " +
        "[&_h2:first-child]:mt-0 " +
        "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 " +
        "[&_li]:marker:text-red [&_a]:font-semibold [&_a]:text-white [&_a]:underline [&_a]:decoration-red " +
        "[&_strong]:text-white"
      }
    >
      {children}
    </div>
  );
}
