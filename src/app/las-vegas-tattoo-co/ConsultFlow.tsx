"use client";

import { useState } from "react";

// ─── Consultation request wizard — concept preview, no backend ────────────────
// Client component: interactivity lives here, never in page.tsx.

const ACCENT = "#C0392B";
const CARD = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0";

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
      className="px-4 py-2.5 rounded-full text-sm font-medium transition-colors border"
      style={{
        background: selected ? ACCENT : "transparent",
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
        className="rounded-2xl border p-8 md:p-12 text-center"
        style={{ background: CARD, borderColor: BORDER }}
      >
        <div
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
          style={{ background: "rgba(192,57,43,0.15)", color: ACCENT }}
        >
          ✓
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          Request received, {name.split(" ")[0]}
        </h3>
        <p className="mx-auto max-w-md leading-relaxed" style={{ color: T2 }}>
          {style} &middot; {placement} &middot; {size} &middot; {budget}. The shop would call you back at{" "}
          {phone} to set up your consultation with Tony, Belle, or Colt.
        </p>
        <p
          className="mx-auto mt-6 max-w-md rounded-lg border px-4 py-3 text-sm"
          style={{ borderColor: ACCENT, color: ACCENT }}
        >
          This is a concept preview — no request was sent. Call (813) 248-3004 or walk in to book for
          real.
        </p>
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
          className="mt-6 text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: T2 }}
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border p-6 md:p-10" style={{ background: CARD, borderColor: BORDER }}>
      {/* progress */}
      <div className="mb-8 flex items-center gap-3">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <div
              className="h-1 rounded-full transition-colors"
              style={{ background: i <= step ? ACCENT : BORDER }}
            />
            <span
              className="text-[11px] uppercase tracking-wider"
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
              className="rounded-lg border bg-transparent px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none"
              style={{ borderColor: BORDER }}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="rounded-lg border bg-transparent px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none"
              style={{ borderColor: BORDER }}
            />
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anything else — reference images you have, cover-up, first tattoo, etc. (optional)"
            rows={3}
            className="mt-4 w-full rounded-lg border bg-transparent px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none"
            style={{ borderColor: BORDER }}
          />
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: T2 }}
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          disabled={!canNext}
          onClick={() => (step === 2 ? setDone(true) : setStep(step + 1))}
          className="rounded-full px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          style={{ background: ACCENT }}
        >
          {step === 2 ? "Request Consultation" : "Next →"}
        </button>
      </div>
    </div>
  );
}
