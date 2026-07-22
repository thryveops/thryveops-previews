"use client";

import { useState } from "react";

const ACCENT  = "#E56B8C";
const ACCENT2 = "#1F6E6B";
const RULE    = "#F3DCE3";
const INK     = "#27222B";

// prices representative — confirm with owner
type Flavor = { name: string; desc: string; price: string; tag?: string };

const boards: { label: string; note: string; flavors: Flavor[] }[] = [
  {
    label: "Classics",
    note: "The everyday board — small-batch and rotating.",
    flavors: [
      { name: "Purple Haze",          desc: "The house legend — ube-purple, sweet, and always photographed first.", price: "$4.75", tag: "Fan favorite" },
      { name: "Cookie Monster",       desc: "Blue vanilla loaded with chunks of our home-baked chocolate chip cookies.", price: "$4.75" },
      { name: "Strawberry Shortcake", desc: "Strawberry cream swirled with shortcake crumble.", price: "$4.75" },
      { name: "Cookies & Cream",      desc: "The classic, done properly — extra cookie, never skimpy.", price: "$4.75" },
    ],
  },
  {
    label: "Latin Flavors",
    note: "Sabores de casa — the flavors the sea maids grew up on.",
    flavors: [
      { name: "Coquito",        desc: "Puerto Rican coconut-rum holiday cream, minus the rum, all the nostalgia.", price: "$5.25", tag: "House pride" },
      { name: "Mango",          desc: "Bright, tropical, and unapologetically fruity.", price: "$5.25" },
      { name: "Guava y Queso",  desc: "Sweet guava ribboned through cream-cheese ice cream.", price: "$5.25" },
      { name: "Cafe con Leche", desc: "Sweet, milky Puerto Rican coffee in scoop form.", price: "$5.25" },
    ],
  },
  {
    label: "Vegan Scoops",
    note: "Almond-milk based, rotating weekly. Sugar and waffle cones are vegan too.",
    flavors: [
      { name: "Vegan Mint Chip",       desc: "Cool mint with dark chocolate flecks, fully plant-based.", price: "$5.50" },
      { name: "Vegan Cookies & Cream", desc: "The classic, no dairy required.", price: "$5.50", tag: "Rotating" },
      { name: "Vegan Vanilla Bean",    desc: "Clean, simple, and the base for any loaded vegan cone.", price: "$5.50" },
    ],
  },
  {
    label: "Pup Treats",
    note: "For the good dogs waiting outside.",
    flavors: [
      { name: "Pup Cup",         desc: "Dog-safe ice cream with a biscuit on top. Tail wagging guaranteed.", price: "$3.50", tag: "Very good dogs" },
      { name: "Frozen Pup Bone", desc: "A frozen peanut-butter treat for the ride home.", price: "$4" },
    ],
  },
];

export default function FlavorTabs() {
  const [active, setActive] = useState(0);
  const board = boards[active];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {boards.map((b, i) => (
          <button
            key={b.label}
            type="button"
            onClick={() => setActive(i)}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition"
            style={
              i === active
                ? { background: ACCENT, color: "#FFFFFF" }
                : { background: "#FFFFFF", color: INK, border: `1.5px solid ${RULE}` }
            }
          >
            {b.label}
          </button>
        ))}
      </div>

      <p className="text-center text-sm italic mb-8" style={{ color: ACCENT2 }}>
        {board.note}
      </p>

      {/* Flavor list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        {board.flavors.map((f) => (
          <div key={f.name} className="flex items-baseline justify-between gap-4 border-b pb-4" style={{ borderColor: RULE }}>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-display text-lg font-semibold" style={{ color: INK }}>{f.name}</h4>
                {f.tag ? (
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
                    style={{ background: "#FCECF1", color: ACCENT }}
                  >
                    {f.tag}
                  </span>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#6B5F6E" }}>{f.desc}</p>
            </div>
            <span className="font-semibold shrink-0" style={{ color: ACCENT }}>{f.price}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-xs mt-8" style={{ color: "#9A8D9E" }}>
        Board rotates weekly — follow @seamaidscreamery for this weekend&rsquo;s flavors.
      </p>
    </div>
  );
}
