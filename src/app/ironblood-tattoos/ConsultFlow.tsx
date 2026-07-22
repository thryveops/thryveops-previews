"use client";

import { useState } from "react";

// ─── CONSULT FLOW — 3-step consultation wizard (concept preview only) ─────────
// Client component: interactivity lives here, never in page.tsx.
// Contrast rule: #8B0000 is dark — accent-filled controls always use white
// text, and selected-state small text on dark backgrounds uses gold, never
// crimson.

const ACCENT = "#8B0000";
const GOLD   = "#C9A84C";
const CARD   = "#161616";
const BORDER = "#262626";
const LIGHT  = "#F5EEDC";
const T2     = "#A3A3A3";

const STYLES = [
  { id: "anime", label: "Anime & Pop Culture", hint: "Dragon Ball to Zelda — Oscar's specialty" },
  { id: "watercolor", label: "Watercolor", hint: "Painterly color built to hold over time" },
  { id: "realism", label: "Realism", hint: "Photographic detail, fourteen years deep" },
  { id: "horror", label: "Horror", hint: "Dark, cinematic pieces" },
  { id: "newschool", label: "New School / Color", hint: "Bold saturated color — Tai's lane" },
  { id: "coverup", label: "Cover-Up", hint: "New chapter over old ink" },
  { id: "unsure", label: "Not Sure Yet", hint: "Bring the idea, we design it" },
];

const PLACEMENTS = ["Arm / Sleeve", "Hand / Wrist", "Shoulder / Chest", "Back", "Leg", "Somewhere else"];
const SIZES = ["Small (palm or less)", "Medium (half sleeve)", "Large (full sleeve / panel)"];

export default function ConsultFlow() {
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState("");
  const [placement, setPlacement] = useState("");
  const [size, setSize] = useState("");
  const [idea, setIdea] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const styleLabel = STYLES.find((s) => s.id === style)?.label ?? "";

  if (done) {
    return (
      <div
        className="border p-8 md:p-10 text-center"
        style={{ background: CARD, borderColor: ACCENT }}
      >
        <p
          className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 mb-6 text-white"
          style={{ background: ACCENT }}
        >
          Concept preview — no request was sent
        </p>
        <h3 className="font-display text-3xl font-bold mb-4 text-white">
          This is what your consult request would look like
        </h3>
        <div
          className="max-w-md mx-auto text-left border p-5 mb-6 text-sm space-y-2"
          style={{ borderColor: BORDER, color: LIGHT }}
        >
          <p><span style={{ color: T2 }}>Style:</span> {styleLabel}</p>
          <p><span style={{ color: T2 }}>Placement:</span> {placement} &middot; {size}</p>
          {idea && <p><span style={{ color: T2 }}>The idea:</span> {idea}</p>}
          <p><span style={{ color: T2 }}>Contact:</span> {name} &middot; {phone}</p>
        </div>
        <p className="text-sm leading-relaxed max-w-md mx-auto mb-7" style={{ color: T2 }}>
          This page is a design mockup by Thryve Operations — nothing was submitted and no one was
          contacted. On the real site, this request would land directly with the shop.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+18138150089"
            className="px-8 py-3.5 text-xs font-bold tracking-[0.25em] uppercase text-white transition hover:brightness-125"
            style={{ background: ACCENT }}
          >
            Call the real shop: (813) 815-0089
          </a>
          <button
            type="button"
            onClick={() => {
              setDone(false);
              setStep(1);
            }}
            className="px-8 py-3.5 text-xs font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
            style={{ borderColor: "rgba(245,238,220,0.35)", color: LIGHT }}
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border p-6 md:p-9" style={{ background: CARD, borderColor: BORDER }}>
      {/* progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex-1 flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
              style={
                step >= n
                  ? { background: ACCENT, color: "#FFFFFF" }
                  : { background: "#0A0A0A", color: T2, border: `1px solid ${BORDER}` }
              }
            >
              {n}
            </span>
            <span className="hidden sm:block text-xs uppercase tracking-wider" style={{ color: step >= n ? LIGHT : T2 }}>
              {n === 1 ? "Style" : n === 2 ? "Placement" : "Contact"}
            </span>
            {n < 3 && <span className="flex-1 h-px" style={{ background: BORDER }} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <h3 className="font-display text-2xl font-semibold mb-5 text-white">What kind of piece?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {STYLES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStyle(s.id)}
                className="text-left p-4 border transition-colors"
                style={
                  style === s.id
                    ? { borderColor: ACCENT, background: "#0A0A0A" }
                    : { borderColor: BORDER, background: "#0A0A0A" }
                }
              >
                <span className="block font-semibold mb-0.5" style={{ color: style === s.id ? GOLD : LIGHT }}>
                  {s.label}
                </span>
                <span className="block text-xs" style={{ color: T2 }}>{s.hint}</span>
              </button>
            ))}
          </div>
          <div className="mt-7 flex justify-end">
            <button
              type="button"
              disabled={!style}
              onClick={() => setStep(2)}
              className="px-7 py-3 text-xs font-bold tracking-[0.25em] uppercase text-white transition hover:brightness-125 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: ACCENT }}
            >
              Next: Placement
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-display text-2xl font-semibold mb-5 text-white">Where, and how big?</h3>
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: T2 }}>Placement</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {PLACEMENTS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlacement(p)}
                className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium border transition-colors"
                style={
                  placement === p
                    ? { borderColor: ACCENT, color: "#FFFFFF", background: ACCENT }
                    : { borderColor: BORDER, color: LIGHT, background: "#0A0A0A" }
                }
              >
                {p}
              </button>
            ))}
          </div>
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: T2 }}>Size</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium border transition-colors"
                style={
                  size === s
                    ? { borderColor: ACCENT, color: "#FFFFFF", background: ACCENT }
                    : { borderColor: BORDER, color: LIGHT, background: "#0A0A0A" }
                }
              >
                {s}
              </button>
            ))}
          </div>
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: T2 }}>The idea (optional)</p>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            rows={3}
            placeholder="An anime sleeve like the Calcifer piece on your Instagram, a cover-up of an old tribal..."
            className="w-full border p-3.5 text-sm outline-none focus:border-[#8B0000] transition-colors"
            style={{ background: "#0A0A0A", borderColor: BORDER, color: LIGHT }}
          />
          <div className="mt-7 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-3 text-xs font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
              style={{ borderColor: BORDER, color: LIGHT }}
            >
              Back
            </button>
            <button
              type="button"
              disabled={!placement || !size}
              onClick={() => setStep(3)}
              className="px-7 py-3 text-xs font-bold tracking-[0.25em] uppercase text-white transition hover:brightness-125 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: ACCENT }}
            >
              Next: Contact
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="font-display text-2xl font-semibold mb-2 text-white">How do we reach you?</h3>
          <p className="text-sm mb-6" style={{ color: T2 }}>
            {styleLabel} &middot; {placement} &middot; {size}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: T2 }}>
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border p-3.5 text-sm outline-none focus:border-[#8B0000] transition-colors"
                style={{ background: "#0A0A0A", borderColor: BORDER, color: LIGHT }}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: T2 }}>
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(813) 555-0123"
                className="w-full border p-3.5 text-sm outline-none focus:border-[#8B0000] transition-colors"
                style={{ background: "#0A0A0A", borderColor: BORDER, color: LIGHT }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-6 py-3 text-xs font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
              style={{ borderColor: BORDER, color: LIGHT }}
            >
              Back
            </button>
            <button
              type="button"
              disabled={!name.trim() || !phone.trim()}
              onClick={() => setDone(true)}
              className="px-7 py-3 text-xs font-bold tracking-[0.25em] uppercase text-white transition hover:brightness-125 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: ACCENT }}
            >
              Preview my request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
