"use client";

import { useState } from "react";

// ─── Consultation request wizard — concept preview, no backend ────────────────
// Client component: interactivity lives here, never in page.tsx.
// Editorial Ink styling: squared corners, letterspaced uppercase buttons.

const ACCENT = "#C0392B";
const CARD = "#161616";
const BORDER = "#262626";
const LIGHT = "#F5EEEE";
const T2 = "#A3A3A3";

const STYLES = [
  "Fine-line",
  "Black & Grey",
  "Color / Neo-traditional",
  "Blackwork",
  "Script / Lettering",
  "Walk-in Flash",
  "Piercing (with Belle)",
  "Not sure yet",
];

const PLACEMENTS = ["Arm / Forearm", "Hand", "Leg", "Chest / Back", "Ribs / Torso", "Other"];

const SIZES = ["Small (2-4 in)", "Medium (4-8 in)", "Large / Half sleeve", "Full sleeve / Back piece"];

const BUDGETS = ["Under $150", "$150 - $300", "$300 - $600", "$600+", "Talk it through at the consult"];

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2.5 text-xs font-bold tracking-[0.25em] uppercase transition-colors border"
      style={{
        background: selected ? ACCENT : "#0A0A0A",
        borderColor: selected ? ACCENT : BORDER,
        color: selected ? "#FFFFFF" : T2,
      }}
    >
      {label}
    </button>
  );
}

export default function ConsultFlow() {
  const [step, setStep] = useState(0);
  const [style, setStyle] = useState("");
  const [placement, setPlacement] = useState("");
  const [size, setSize] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);

  const canNext = step === 0 ? style !== "" && placement !== "" : step === 1 ? size !== "" && budget !== "" : name.trim() !== "" && phone.trim() !== "";

  const stepLabels = ["Style & Placement", "Size & Budget", "Your Details"];

  if (done) {
    return (
      <div
        className="border p-8 md:p-12 text-center"
        style={{ background: CARD, borderColor: ACCENT }}
      >
        <p
          className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 mb-6"
          style={{ background: ACCENT, color: "#FFFFFF" }}
        >
          Concept preview — no request was sent
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          Request received, {name.split(" ")[0]}
        </h3>
        <p className="mx-auto max-w-md leading-relaxed" style={{ color: T2 }}>
          {style} &middot; {placement} &middot; {size} &middot; {budget}. The shop would call you back at{" "}
          {phone} to set up your consultation with Tony, Belle, or Colt.
        </p>
        {notes && (
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: T2 }}>
            Notes: {notes}
          </p>
        )}
        <p
          className="mx-auto mt-6 max-w-md border px-4 py-3 text-sm"
          style={{ borderColor: BORDER, color: T2 }}
        >
          This page is a design mockup by Thryve Operations — nothing was submitted and no one was
          contacted. Call (813) 248-3004 or walk in to book for real.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+18132483004"
            className="px-8 py-3.5 text-xs font-bold tracking-[0.25em] uppercase transition hover:brightness-110"
            style={{ background: ACCENT, color: "#FFFFFF" }}
          >
            Call the real shop: (813) 248-3004
          </a>
          <button
            type="button"
            onClick={() => {
              setDone(false);
              setStep(0);
              setStyle("");
              setPlacement("");
              setSize("");
              setBudget("");
              setName("");
              setPhone("");
              setNotes("");
            }}
            className="px-8 py-3.5 text-xs font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
            style={{ borderColor: "rgba(245,238,238,0.35)", color: LIGHT }}
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border p-6 md:p-10" style={{ background: CARD, borderColor: BORDER }}>
      {/* progress */}
      <div className="mb-8 flex items-center gap-3">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <div
              className="h-1 transition-colors"
              style={{ background: i <= step ? ACCENT : BORDER }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ color: i === step ? "#FFFFFF" : T2 }}
            >
              {i + 1}. {label}
            </span>
          </div>
        ))}
      </div>

      {step === 0 && (
        <div>
          <h3 className="font-display text-2xl font-bold text-white mb-1">What are you thinking?</h3>
          <p className="text-sm mb-6" style={{ color: T2 }}>
            Pick a style — or let the artists steer you at the consult.
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {STYLES.map((s) => (
              <Chip key={s} label={s} selected={style === s} onClick={() => setStyle(s)} />
            ))}
          </div>
          <p className="text-xs uppercase tracking-wider mb-3" style={{ color: T2 }}>
            Placement
          </p>
          <div className="flex flex-wrap gap-2">
            {PLACEMENTS.map((p) => (
              <Chip key={p} label={p} selected={placement === p} onClick={() => setPlacement(p)} />
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="font-display text-2xl font-bold text-white mb-1">Size and budget</h3>
          <p className="text-sm mb-6" style={{ color: T2 }}>
            Rough is fine — final quotes always happen in person.
          </p>
          <p className="text-xs uppercase tracking-wider mb-3" style={{ color: T2 }}>
            Approximate size
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <Chip key={s} label={s} selected={size === s} onClick={() => setSize(s)} />
            ))}
          </div>
          <p className="text-xs uppercase tracking-wider mb-3" style={{ color: T2 }}>
            Budget range
          </p>
          <div className="flex flex-wrap gap-2">
            {BUDGETS.map((b) => (
              <Chip key={b} label={b} selected={budget === b} onClick={() => setBudget(b)} />
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-display text-2xl font-bold text-white mb-1">How do we reach you?</h3>
          <p className="text-sm mb-6" style={{ color: T2 }}>
            The shop calls back to lock in your consultation time.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="border px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#C0392B] transition-colors"
              style={{ background: "#0A0A0A", borderColor: BORDER }}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="border px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#C0392B] transition-colors"
              style={{ background: "#0A0A0A", borderColor: BORDER }}
            />
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anything else — reference images you have, cover-up, first tattoo, etc. (optional)"
            rows={3}
            className="mt-4 w-full border px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#C0392B] transition-colors"
            style={{ background: "#0A0A0A", borderColor: BORDER }}
          />
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="px-6 py-3 text-xs font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
            style={{ borderColor: BORDER, color: LIGHT }}
          >
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          disabled={!canNext}
          onClick={() => (step === 2 ? setDone(true) : setStep(step + 1))}
          className="px-7 py-3 text-xs font-bold tracking-[0.25em] uppercase transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          style={{ background: ACCENT, color: "#FFFFFF" }}
        >
          {step === 2 ? "Preview my request" : "Next"}
        </button>
      </div>
    </div>
  );
}
