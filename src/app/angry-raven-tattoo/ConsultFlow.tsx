"use client";

import { useState } from "react";

// ─── CONSULT FLOW — 3-step consultation wizard (concept preview only) ─────────
// Client component: interactivity lives here, never in page.tsx.

const ACCENT = "#C7502E";
const CARD   = "#161616";
const BORDER = "#262626";
const LIGHT  = "#F8EDE7";
const T2     = "#A3A3A3";

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

  if (step === 3) {
    return (
      <div
        className="border p-8 md:p-10 text-center"
        style={{ background: CARD, borderColor: ACCENT }}
      >
        <p
          className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 mb-6"
          style={{ background: ACCENT, color: "#0A0A0A" }}
        >
          Concept preview — no request was sent
        </p>
        <h3 className="font-display text-3xl font-bold mb-4 text-white">
          Got it, {name.split(" ")[0]}.
        </h3>
        <div
          className="max-w-md mx-auto text-left border p-5 mb-6 text-sm space-y-2"
          style={{ borderColor: BORDER, color: LIGHT }}
        >
          <p><span style={{ color: T2 }}>Style:</span> {style}</p>
          <p><span style={{ color: T2 }}>Size & placement:</span> {size} &middot; {placement}</p>
          {idea && <p><span style={{ color: T2 }}>The idea:</span> {idea}</p>}
          <p><span style={{ color: T2 }}>Contact:</span> {name} &middot; {phone}</p>
        </div>
        <p className="text-sm leading-relaxed max-w-md mx-auto mb-7" style={{ color: T2 }}>
          This page is a design mockup by Thryve Operations — nothing was submitted and no one was
          contacted. On the real site, this request would go straight to the shop, and Nash would
          text you back to talk through the piece and set a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+19415397513"
            className="px-8 py-3.5 text-xs font-bold tracking-[0.25em] uppercase transition hover:brightness-110"
            style={{ background: ACCENT, color: "#0A0A0A" }}
          >
            Call the real shop: (941) 539-7513
          </a>
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
            className="px-8 py-3.5 text-xs font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
            style={{ borderColor: "rgba(248,237,231,0.35)", color: LIGHT }}
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
        {steps.map((label, i) => (
          <div key={label} className="flex-1 flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
              style={
                step >= i
                  ? { background: ACCENT, color: "#0A0A0A" }
                  : { background: "#0A0A0A", color: T2, border: `1px solid ${BORDER}` }
              }
            >
              {i + 1}
            </span>
            <span className="hidden sm:block text-xs uppercase tracking-wider" style={{ color: step >= i ? LIGHT : T2 }}>
              {label}
            </span>
            {i < steps.length - 1 && <span className="flex-1 h-px" style={{ background: BORDER }} />}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div>
          <h3 className="font-display text-2xl font-semibold mb-2 text-white">What style are you thinking?</h3>
          <p className="text-sm mb-6" style={{ color: T2 }}>
            Nash works across all of these — pick the closest fit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {STYLES.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => {
                  setStyle(s.name);
                  setStep(1);
                }}
                className="text-left p-4 border transition-colors"
                style={
                  style === s.name
                    ? { borderColor: ACCENT, background: "#0A0A0A" }
                    : { borderColor: BORDER, background: "#0A0A0A" }
                }
              >
                <span className="block font-semibold mb-0.5" style={{ color: style === s.name ? ACCENT : LIGHT }}>
                  {s.name}
                </span>
                <span className="block text-xs" style={{ color: T2 }}>{s.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="font-display text-2xl font-semibold mb-2 text-white">How big, and where?</h3>
          <p className="text-sm mb-6" style={{ color: T2 }}>
            Rough answers are fine — this just helps plan the session.
          </p>
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
                    ? { borderColor: ACCENT, color: "#0A0A0A", background: ACCENT }
                    : { borderColor: BORDER, color: LIGHT, background: "#0A0A0A" }
                }
              >
                {s}
              </button>
            ))}
          </div>
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
                    ? { borderColor: ACCENT, color: "#0A0A0A", background: ACCENT }
                    : { borderColor: BORDER, color: LIGHT, background: "#0A0A0A" }
                }
              >
                {p}
              </button>
            ))}
          </div>
          <div className="mt-7 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="px-6 py-3 text-xs font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
              style={{ borderColor: BORDER, color: LIGHT }}
            >
              Back
            </button>
            <button
              type="button"
              disabled={!size || !placement}
              onClick={() => setStep(2)}
              className="px-7 py-3 text-xs font-bold tracking-[0.25em] uppercase transition hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Next: Your Info
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-display text-2xl font-semibold mb-2 text-white">Where should Nash reach you?</h3>
          <p className="text-sm mb-6" style={{ color: T2 }}>
            {style} &middot; {size} &middot; {placement}
          </p>
          <div className="space-y-4 mb-7">
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: T2 }}>
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border p-3.5 text-sm outline-none focus:border-[#C7502E] transition-colors"
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
                placeholder="Phone number"
                className="w-full border p-3.5 text-sm outline-none focus:border-[#C7502E] transition-colors"
                style={{ background: "#0A0A0A", borderColor: BORDER, color: LIGHT }}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: T2 }}>
                The idea (optional)
              </label>
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                rows={3}
                placeholder="Tell us about your idea (optional)"
                className="w-full border p-3.5 text-sm outline-none focus:border-[#C7502E] transition-colors resize-none"
                style={{ background: "#0A0A0A", borderColor: BORDER, color: LIGHT }}
              />
            </div>
          </div>
          <div className="flex justify-between">
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
              disabled={!name.trim() || !phone.trim()}
              onClick={() => setStep(3)}
              className="px-7 py-3 text-xs font-bold tracking-[0.25em] uppercase transition hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
