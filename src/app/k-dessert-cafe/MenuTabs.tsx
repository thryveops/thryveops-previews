"use client";

import { useState } from "react";
import Image from "next/image";

// Menu tab switch for K Dessert Cafe — Bingsoo vs Drinks.
// All photos are the prospect's own GMB / Instagram shots.
// prices representative — confirm with owner

const ACCENT = "#D96A85";
const INK = "#2A2024";
const RULE = "#F0E1E5";

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  img: string;
};

const bingsoo: MenuItem[] = [
  {
    name: "Deluxe Korean Bingsoo",
    price: "$15.95",
    desc: "The house signature: milk snow loaded with sweet red bean, fresh strawberry, banana, watermelon, mochi and a scoop of ice cream.",
    img: "/images/k-dessert-cafe/ig-5.jpg",
  },
  {
    name: "Mango Bingsoo",
    price: "$13.95",
    desc: "Snow-fine milk ice crowned with ripe mango, mango puree, mochi and shredded coconut.",
    img: "/images/k-dessert-cafe/gmb-4.jpg",
  },
  {
    name: "Strawberry-Banana Bingsoo",
    price: "$13.95",
    desc: "Fresh strawberries and banana over milk snow with whipped cream, marshmallows and a caramel drizzle.",
    img: "/images/k-dessert-cafe/gmb-3.jpg",
  },
];

const drinks: MenuItem[] = [
  {
    name: "Brown Sugar Boba",
    price: "$6.25",
    desc: "Creamy milk tea streaked with house brown sugar syrup over warm, chewy tapioca pearls.",
    img: "/images/k-dessert-cafe/gmb-5.jpg",
  },
  {
    name: "Fresh Fruit Tea",
    price: "$5.95",
    desc: "Sparkling teas built on real fruit — strawberry, mango, lychee or grapefruit, made to order.",
    img: "/images/k-dessert-cafe/gmb-2.jpg",
  },
  {
    name: "Fruit Smoothies",
    price: "$6.75",
    desc: "Real-fruit smoothies blended thick — try mango or strawberry with chewy boba added.",
    img: "/images/k-dessert-cafe/gmb-7.jpg",
  },
];

const tabs = [
  { label: "Bingsoo", items: bingsoo },
  { label: "Drinks", items: drinks },
];

export default function MenuTabs() {
  const [active, setActive] = useState(0);
  const items = tabs[active].items;

  return (
    <div>
      {/* Tab switch */}
      <div className="flex justify-center mb-12">
        <div
          className="inline-flex rounded-full border p-1"
          style={{ borderColor: RULE, background: "#FFFFFF" }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActive(i)}
              className="px-8 py-2.5 rounded-full text-sm font-semibold transition"
              style={
                active === i
                  ? { background: ACCENT, color: "#FFFFFF" }
                  : { background: "transparent", color: INK }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <article key={item.name} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: INK }}>
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="flex justify-between items-baseline mb-2 gap-3">
              <h3 className="font-display text-2xl font-semibold" style={{ color: INK }}>
                {item.name}
              </h3>
              <span className="font-semibold whitespace-nowrap" style={{ color: ACCENT }}>
                {item.price}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#6B5A60" }}>
              {item.desc}
            </p>
          </article>
        ))}
      </div>

      <p className="text-center text-xs mt-10" style={{ color: "#A08A91" }}>
        Menu preview — visit us in store for the full menu and seasonal specials.
      </p>
    </div>
  );
}
