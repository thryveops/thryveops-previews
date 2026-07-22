"use client";

import { useState } from "react";

// ─── 3-step mobile-detail quote wizard ────────────────────────────────────────
// Step 1: vehicle type → Step 2: package + add-ons → Step 3: contact + area.
// Concept preview only — the final confirmation clearly states no request is sent.

const ACCENT = "#3B82F6";
const INK = "#1C2526";

const vehicleTypes = [
  { id: "sedan", label: "Sedan / Coupe", note: "Standard size" },
  { id: "suv", label: "SUV / Truck", note: "Two rows" },
  { id: "large", label: "Large SUV / Van", note: "Three rows" },
  { id: "boat-rv", label: "Boat / RV", note: "Quoted by length" },
];

const packages = [
  { id: "express", label: "Express Wash", price: "from $69" },
  { id: "interior", label: "Full Interior Detail", price: "from $159" },
  { id: "full", label: "Interior + Exterior Full Detail", price: "from $249" },
  { id: "ceramic", label: "Ceramic Coating", price: "from $599" },
];

const addOns = [
  { id: "pet-hair", label: "Pet hair removal" },
  { id: "engine", label: "Engine bay detail" },
  { id: "headlights", label: "Headlight restoration" },
  { id: "odor", label: "Odor treatment" },
];

const areas = ["Tampa", "Westshore", "South Tampa", "Other nearby"];

export default function QuoteFlow() {
  const [step, setStep] = useState(1);
  const [vehicle, setVehicle] = useState("");
  const [pkg, setPkg] = useState("");
  const [extras, setExtras] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [done, setDone] = useState(false);

  const toggleExtra = (id: string) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const vehicleLabel = vehicleTypes.find((v) => v.id === vehicle)?.label ?? "";
  const pkgChoice = packages.find((p) => p.id === pkg);

  if (done) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-10 text-center" style={{ color: INK }}>
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white"
          style={{ background: ACCENT }}
        >
          ✓
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
          Quote request ready
        </h3>
        <p className="text-gray-600 mb-2">
          {vehicleLabel} &middot; {pkgChoice?.label}
          {extras.length > 0 && (
            <> &middot; {extras.length} add-on{extras.length > 1 ? "s" : ""}</>
          )}
          {area && <> &middot; {area}</>}
        </p>
        <p className="text-gray-600 mb-6">
          On the live site, Jimmy would text {name || "you"} back with a confirmed price and
          the next available slot.
        </p>
        <div
          className="rounded-lg px-4 py-3 text-sm font-medium mb-6"
          style={{ background: "#E4EEFC", color: "#1D4ED8" }}
        >
          This is a concept preview — no request was sent.
        </div>
        <button
          type="button"
          onClick={() => {
            setStep(1);
            setVehicle("");
            setPkg("");
            setExtras([]);
            setName("");
            setPhone("");
            setArea("");
            setDone(false);
          }}
          className="text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
          style={{ color: ACCENT }}
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10" style={{ color: INK }}>
      {/* progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{
                background: step >= s ? ACCENT : "#E5E9EF",
                color: step >= s ? "#fff" : "#9AA5B1",
              }}
            >
              {s}
            </span>
            <span className="hidden sm:block text-xs font-medium text-gray-500">
              {s === 1 ? "Vehicle" : s === 2 ? "Package" : "Contact"}
            </span>
            {s < 3 && <span className="flex-1 h-px bg-gray-200" />}
          </div>
        ))}
      </div>

      {/* step 1 — vehicle type */}
      {step === 1 && (
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold mb-5">
            What are we detailing?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {vehicleTypes.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVehicle(v.id)}
                className="rounded-xl border-2 p-4 text-left transition"
                style={{
                  borderColor: vehicle === v.id ? ACCENT : "#E5E9EF",
                  background: vehicle === v.id ? "#F0F6FF" : "#fff",
                }}
              >
                <span className="block font-semibold">{v.label}</span>
                <span className="block text-sm text-gray-500">{v.note}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={!vehicle}
            onClick={() => setStep(2)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white transition hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: ACCENT }}
          >
            Next: Pick a package
          </button>
        </div>
      )}

      {/* step 2 — package + add-ons */}
      {step === 2 && (
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold mb-5">
            Choose your detail
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {packages.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPkg(p.id)}
                className="rounded-xl border-2 p-4 text-left transition"
                style={{
                  borderColor: pkg === p.id ? ACCENT : "#E5E9EF",
                  background: pkg === p.id ? "#F0F6FF" : "#fff",
                }}
              >
                <span className="block font-semibold">{p.label}</span>
                <span className="block text-sm" style={{ color: ACCENT }}>{p.price}</span>
              </button>
            ))}
          </div>
          <p className="text-sm font-semibold mb-3 text-gray-600">Add-ons (optional)</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {addOns.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => toggleExtra(a.id)}
                className="px-4 py-2 rounded-full text-sm font-medium border-2 transition"
                style={{
                  borderColor: extras.includes(a.id) ? ACCENT : "#E5E9EF",
                  background: extras.includes(a.id) ? "#F0F6FF" : "#fff",
                  color: extras.includes(a.id) ? "#1D4ED8" : INK,
                }}
              >
                {extras.includes(a.id) ? "✓ " : "+ "}{a.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-8 py-3.5 rounded-full font-semibold border-2 transition hover:bg-gray-50"
              style={{ borderColor: "#E5E9EF", color: INK }}
            >
              Back
            </button>
            <button
              type="button"
              disabled={!pkg}
              onClick={() => setStep(3)}
              className="px-8 py-3.5 rounded-full font-semibold text-white transition hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: ACCENT }}
            >
              Next: Where are you?
            </button>
          </div>
        </div>
      )}

      {/* step 3 — contact + service area */}
      {step === 3 && (
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold mb-5">
            Where should Jimmy roll up?
          </h3>
          <p className="text-sm font-semibold mb-3 text-gray-600">Service area</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {areas.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setArea(a)}
                className="px-4 py-2 rounded-full text-sm font-medium border-2 transition"
                style={{
                  borderColor: area === a ? ACCENT : "#E5E9EF",
                  background: area === a ? "#F0F6FF" : "#fff",
                  color: area === a ? "#1D4ED8" : INK,
                }}
              >
                {a}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <label className="block">
              <span className="block text-sm font-semibold mb-1.5 text-gray-600">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
                className="w-full rounded-xl border-2 px-4 py-3 outline-none transition focus:border-blue-500"
                style={{ borderColor: "#E5E9EF" }}
              />
            </label>
            <label className="block">
              <span className="block text-sm font-semibold mb-1.5 text-gray-600">Phone</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(813) 555-0123"
                className="w-full rounded-xl border-2 px-4 py-3 outline-none transition focus:border-blue-500"
                style={{ borderColor: "#E5E9EF" }}
              />
            </label>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-8 py-3.5 rounded-full font-semibold border-2 transition hover:bg-gray-50"
              style={{ borderColor: "#E5E9EF", color: INK }}
            >
              Back
            </button>
            <button
              type="button"
              disabled={!area || !name || !phone}
              onClick={() => setDone(true)}
              className="px-8 py-3.5 rounded-full font-semibold text-white transition hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: ACCENT }}
            >
              Get My Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
