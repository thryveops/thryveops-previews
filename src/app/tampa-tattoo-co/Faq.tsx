"use client";

import { useState } from "react";

// ─── FAQ — editorial accordion (client component) ─────────────────────────────
// Items and accent are passed from page.tsx so this file is identical across
// Editorial Ink tattoo mockups.

const BORDER = "#242424";
const T2 = "#A3A3A3";
const LIGHT = "#F5EEDC";

type FaqItem = { q: string; a: string };

export default function Faq({ items, accent }: { items: FaqItem[]; accent: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t" style={{ borderColor: BORDER }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b" style={{ borderColor: BORDER }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <span className="flex items-baseline gap-5 min-w-0">
                <span className="text-[11px] tracking-[0.2em] shrink-0" style={{ color: isOpen ? accent : "rgba(245,238,220,0.3)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-base md:text-lg font-medium transition-colors"
                  style={{ color: isOpen ? "#FFFFFF" : LIGHT }}
                >
                  {item.q}
                </span>
              </span>
              <span
                className="text-xl leading-none shrink-0 transition-transform duration-300"
                style={{ color: accent, transform: isOpen ? "rotate(45deg)" : "none" }}
              >
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-9 md:pl-10 pr-8 text-sm leading-relaxed" style={{ color: T2 }}>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
