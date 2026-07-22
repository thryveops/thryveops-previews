"use client";

import { useState } from "react";

const ACCENT = "#9B2335";
const BG2 = "#111111";
const BG3 = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0";
const T3 = "#606060";

const SQUIRE_URL = "https://web.getsquire.com/brands/the-fade-factory";

const SERVICES = [
  { name: "Haircut", price: "$27", dur: "45 min" },
  { name: "Haircut & Beard", price: "$37", dur: "60 min" },
  { name: "Haircut & Eyebrows", price: "$32", dur: "50 min" },
  { name: "Haircut & Goatee", price: "$33", dur: "50 min" },
  { name: "Senior Haircut", price: "$17", dur: "30 min" },
  { name: "Kids Cut", price: "$22", dur: "30 min" },
];

const TIMES = ["8:30 AM", "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:15 PM"];

function nextOpenDays(count: number): string[] {
  const days: string[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (days.length < count) {
    const dow = d.getDay(); // 0 Sun, 1 Mon — closed
    if (dow !== 0 && dow !== 1) {
      days.push(
        d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
      );
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const days = nextOpenDays(5);
  const chosen = SERVICES.find((s) => s.name === service);

  const reset = () => {
    setStep(0);
    setService(null);
    setDay(null);
    setTime(null);
    setName("");
    setPhone("");
  };

  const stepLabels = ["Service", "Day & Time", "Your Info"];

  return (
    <div className="border" style={{ background: BG2, borderColor: BORDER }}>
      {/* progress */}
      <div className="flex" style={{ borderBottom: `1px solid ${BORDER}` }}>
        {stepLabels.map((label, i) => (
          <div
            key={label}
            className="flex-1 py-4 text-center text-[10px] tracking-[0.2em] uppercase"
            style={{
              color: step === i ? "#fff" : step > i ? ACCENT : T3,
              borderBottom: step === i ? `2px solid ${ACCENT}` : "2px solid transparent",
            }}
          >
            {i + 1}. {label}
          </div>
        ))}
      </div>

      <div className="p-6 md:p-10">
        {step === 0 && (
          <div>
            <p className="text-sm mb-6" style={{ color: T2 }}>
              Pick your service — real menu, real prices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => {
                    setService(s.name);
                    setStep(1);
                  }}
                  className="flex items-center justify-between p-4 border text-left transition-colors"
                  style={{
                    background: BG3,
                    borderColor: service === s.name ? ACCENT : BORDER,
                  }}
                >
                  <span>
                    <span className="block text-white text-sm font-semibold">{s.name}</span>
                    <span className="block text-xs mt-0.5" style={{ color: T3 }}>
                      {s.dur}
                    </span>
                  </span>
                  <span className="text-lg font-bold" style={{ color: ACCENT }}>
                    {s.price}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <p className="text-sm mb-6" style={{ color: T2 }}>
              {chosen ? chosen.name + " · " + chosen.price : ""} — choose a day and time.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {days.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDay(d)}
                  className="px-4 py-2.5 border text-xs tracking-wide transition-colors"
                  style={{
                    background: day === d ? ACCENT : BG3,
                    borderColor: day === d ? ACCENT : BORDER,
                    color: "#fff",
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {TIMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className="px-4 py-2.5 border text-xs tracking-wide transition-colors"
                  style={{
                    background: time === t ? ACCENT : BG3,
                    borderColor: time === t ? ACCENT : BORDER,
                    color: "#fff",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="border text-xs tracking-[0.2em] uppercase px-6 py-3"
                style={{ borderColor: BORDER, color: T2 }}
              >
                Back
              </button>
              <button
                type="button"
                disabled={!day || !time}
                onClick={() => setStep(2)}
                className="text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 transition-opacity disabled:opacity-40"
                style={{ background: ACCENT }}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(3);
            }}
          >
            <p className="text-sm mb-6" style={{ color: T2 }}>
              {chosen ? chosen.name : ""} · {day} · {time}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <label className="block">
                <span className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: T3 }}>
                  Name
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 text-sm text-white outline-none border"
                  style={{ background: BG3, borderColor: BORDER }}
                />
              </label>
              <label className="block">
                <span className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: T3 }}>
                  Phone
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="(813) 555-0100"
                  className="w-full px-4 py-3 text-sm text-white outline-none border"
                  style={{ background: BG3, borderColor: BORDER }}
                />
              </label>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border text-xs tracking-[0.2em] uppercase px-6 py-3"
                style={{ borderColor: BORDER, color: T2 }}
              >
                Back
              </button>
              <button
                type="submit"
                className="text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 transition-opacity hover:opacity-90"
                style={{ background: ACCENT }}
              >
                Request Appointment
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-6">
            <div
              className="mx-auto mb-6 flex items-center justify-center rounded-full"
              style={{ width: 56, height: 56, background: ACCENT }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-white text-2xl mb-2" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.04em" }}>
              You&rsquo;re on the books{name ? ", " + name.split(" ")[0] : ""}
            </h3>
            <p className="text-sm mb-1" style={{ color: T2 }}>
              {chosen ? chosen.name + " · " + (chosen ? chosen.price : "") : ""} · {day} at {time}
            </p>
            <p
              className="inline-block mt-5 mb-6 px-4 py-2 text-[11px] tracking-wide border"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              Concept preview — no request was sent
            </p>
            <p className="text-xs max-w-md mx-auto leading-relaxed mb-8" style={{ color: T3 }}>
              On the live site, this flow hands off directly to The Fade Factory&rsquo;s existing
              Squire booking system — same calendar, same barbers, nothing to migrate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SQUIRE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 transition-opacity hover:opacity-90"
                style={{ background: ACCENT }}
              >
                Book For Real on Squire
              </a>
              <button
                type="button"
                onClick={reset}
                className="border text-xs tracking-[0.2em] uppercase px-8 py-3.5"
                style={{ borderColor: BORDER, color: T2 }}
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
