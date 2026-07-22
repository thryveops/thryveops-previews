"use client";

import { useState } from "react";

const ACCENT = "#C7502E";
const ACCENT_LIGHT = "#F8E9E2";
const BG_CARD = "#141414";
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0";

const STYLES = [
  { name: "Nordic / Blackwork", desc: "Runes, knotwork, ornamental" },
  { name: "Fine Line", desc: "Delicate single-needle work" },
  { name: "Script & Lettering", desc: "Names, dates, custom script" },
  { name: "Black & Grey Realism", desc: "Portraits, statues, smoke" },
  { name: "Color", desc: "Koi, florals, bold saturated work" },
  { name: "Cover-Up", desc: "Rework or bury an old piece" },
];

const SIZES = ["Small (2-4 in)", "Medium (4-8 in)", "Large (8 in+)", "Half sleeve or bigger"];

const PLACEMENTS = ["Arm", "Forearm", "Shoulder", "Leg / Thigh", "Ribs / Torso", "Back", "Hand / Neck", "Not sure yet"];

export default function ConsultFlow() {
  const [step, setStep] = useState(0);
  const [style, setStyle] = useState("");
  const [size, setSize] = useState("");
  const [placement, setPlacement] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [idea, setIdea] = useState("");

  const steps = ["Style", "Size & Placement", "Your Info"];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 md:gap-4 mb-10">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: step >= i ? ACCENT : BG_CARD,
                  color: step >= i ? "#fff" : T2,
                  border: `1px solid ${step >= i ? ACCENT : BORDER}`,
                }}
              >
                {step > i ? "✓" : i + 1}
              </span>
              <span
                className="hidden sm:block text-xs uppercase tracking-wider"
                style={{ color: step >= i ? "#fff" : T2 }}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className="w-6 md:w-10 h-px" style={{ background: BORDER }} />
            )}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-2">
            What style are you thinking?
          </h3>
          <p className="text-center text-sm mb-8" style={{ color: T2 }}>
            Nash works across all of these — pick the closest fit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {STYLES.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => {
                  setStyle(s.name);
                  setStep(1);
                }}
                className="text-left p-5 rounded-lg transition-colors duration-150"
                style={{
                  background: style === s.name ? ACCENT : BG_CARD,
                  border: `1px solid ${style === s.name ? ACCENT : BORDER}`,
                }}
              >
                <span className="block font-semibold text-white mb-1">{s.name}</span>
                <span className="block text-xs" style={{ color: style === s.name ? ACCENT_LIGHT : T2 }}>
                  {s.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How big, and where?
          </h3>
          <p className="text-center text-sm mb-8" style={{ color: T2 }}>
            Rough answers are fine — this just helps plan the session.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
            Size
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className="px-4 py-2 rounded-full text-sm transition-colors duration-150"
                style={{
                  background: size === s ? ACCENT : BG_CARD,
                  color: size === s ? "#fff" : T2,
                  border: `1px solid ${size === s ? ACCENT : BORDER}`,
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
            Placement
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {PLACEMENTS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlacement(p)}
                className="px-4 py-2 rounded-full text-sm transition-colors duration-150"
                style={{
                  background: placement === p ? ACCENT : BG_CARD,
                  color: placement === p ? "#fff" : T2,
                  border: `1px solid ${placement === p ? ACCENT : BORDER}`,
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="px-6 py-3 rounded-full text-sm font-semibold"
              style={{ color: T2, border: `1px solid ${BORDER}` }}
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!size || !placement}
              className="px-8 py-3 rounded-full text-sm font-semibold text-white transition disabled:opacity-40"
              style={{ background: ACCENT }}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Where should Nash reach you?
          </h3>
          <p className="text-center text-sm mb-8" style={{ color: T2 }}>
            {style} · {size} · {placement}
          </p>
          <div className="space-y-4 mb-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-5 py-4 rounded-lg text-white placeholder:text-neutral-500 outline-none focus:ring-1"
              style={{ background: BG_CARD, border: `1px solid ${BORDER}` }}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="w-full px-5 py-4 rounded-lg text-white placeholder:text-neutral-500 outline-none focus:ring-1"
              style={{ background: BG_CARD, border: `1px solid ${BORDER}` }}
            />
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Tell us about your idea (optional)"
              rows={3}
              className="w-full px-5 py-4 rounded-lg text-white placeholder:text-neutral-500 outline-none focus:ring-1 resize-none"
              style={{ background: BG_CARD, border: `1px solid ${BORDER}` }}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-3 rounded-full text-sm font-semibold"
              style={{ color: T2, border: `1px solid ${BORDER}` }}
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!name || !phone}
              className="px-8 py-3 rounded-full text-sm font-semibold text-white transition disabled:opacity-40"
              style={{ background: ACCENT }}
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div
          className="text-center p-10 rounded-lg"
          style={{ background: BG_CARD, border: `1px solid ${BORDER}` }}
        >
          <span
            className="inline-flex w-14 h-14 rounded-full items-center justify-center text-2xl mb-5"
            style={{ background: ACCENT }}
          >
            ✓
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Got it, {name.split(" ")[0]}.
          </h3>
          <p className="text-sm leading-relaxed mb-6 max-w-md mx-auto" style={{ color: T2 }}>
            On the live site, this request — {style.toLowerCase()}, {size.toLowerCase()},{" "}
            {placement.toLowerCase()} — would go straight to the shop, and Nash would text you back
            to talk through the piece and set a time.
          </p>
          <p
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ background: "#0A0A0A", color: ACCENT, border: `1px solid ${ACCENT}` }}
          >
            Concept preview — no request was sent
          </p>
          <div>
            <button
              type="button"
              onClick={() => {
                setStep(0);
                setStyle("");
                setSize("");
                setPlacement("");
                setName("");
                setPhone("");
                setIdea("");
              }}
              className="text-sm font-semibold hover:underline"
              style={{ color: ACCENT }}
            >
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
