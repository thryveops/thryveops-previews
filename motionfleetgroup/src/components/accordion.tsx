"use client";

import { useState } from "react";
import { PlusMinusIcon } from "./icons";

export interface QA {
  q: string;
  a: string;
}

/** Accessible FAQ accordion. Animates open height via grid-template-rows. */
export function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-700 border-y border-ink-700">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span
                  className={`font-display text-lg font-bold transition-colors ${
                    isOpen ? "text-white" : "text-silver"
                  }`}
                >
                  {item.q}
                </span>
                <PlusMinusIcon
                  open={isOpen}
                  className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? "text-red" : "text-silver-dim"}`}
                />
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-2xl pb-6 leading-relaxed text-silver">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
