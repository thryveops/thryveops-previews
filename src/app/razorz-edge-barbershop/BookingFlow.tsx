"use client";

import { useState } from "react";

const ACCENT = "#4A90A4";
const BG2 = "#111111";
const BG3 = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0";
const T3 = "#606060";

const SERVICES = [
  { name: "Signature Cut", price: "$35", dur: "45 min" },
  { name: "Skin Fade", price: "$40", dur: "45 min" },
  { name: "Beard Sculpt", price: "$20", dur: "25 min" },
  { name: "Cut + Beard", price: "$50", dur: "60 min" },
  { name: "Kids Cut (12 & Under)", price: "$30", dur: "30 min" },
];

const DAYS = [
  { day: "Tuesday", hours: "10 AM - 5 PM", slots: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"] },
  { day: "Wednesday", hours: "10 AM - 6 PM", slots: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:00 PM"] },
  { day: "Thursday", hours: "10 AM - 6 PM", slots: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:00 PM"] },
  { day: "Friday", hours: "10 AM - 6 PM", slots: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:00 PM"] },
  { day: "Saturday", hours: "9 AM - 4 PM", slots: ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM"] },
];

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const chosenService = SERVICES.find((s) => s.name === service);
  const chosenDay = DAYS.find((d) => d.day === day);

  const stepLabels = ["Service", "Day & Time", "Your Info"];

  return (
    <div className="max-w-3xl mx-auto border" style={{ background: BG2, borderColor: BORDER }}>
      {/* Step indicator */}
      <div className="flex border-b" style={{ borderColor: BORDER }}>
        {stepLabels.map((label, i) => (
          <div key={label} className="flex-1 py-4 text-center text-[10px] tracking-[0.2em] uppercase"
            style={{
              color: step === i ? "#fff" : step > i ? ACCENT : T3,
              borderBottom: step === i ? `2px solid ${ACCENT}` : "2px solid transparent",
            }}>
            <span className="font-bold mr-1.5" style={{ color: step >= i ? ACCENT : T3 }}>{i + 1}</span>
            {label}
          </div>
        ))}
      </div>

      <div className="p-6 md:p-10">
        {/* STEP 1 — SERVICE */}
        {step === 0 && (
          <div>
            <h3 className="text-white text-2xl mb-6" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.05em" }}>
              Pick Your Service
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <button key={s.name} type="button"
                  onClick={() => { setService(s.name); setStep(1); }}
                  className="text-left p-4 border transition-colors"
                  style={{
                    background: service === s.name ? BG3 : "transparent",
                    borderColor: service === s.name ? ACCENT : BORDER,
                  }}>
                  <div className="flex justify-between items-baseline">
                    <span className="text-white text-sm font-semibold">{s.name}</span>
                    <span className="text-sm font-bold" style={{ color: ACCENT }}>{s.price}</span>
                  </div>
                  <span className="text-xs" style={{ color: T3 }}>{s.dur}</span>
                </button>
              ))}
            </div>
            <p className="mt-5 text-xs" style={{ color: T3 }}>
              Seniors, active military, veterans &amp; first responders: $5 off any service. Mention it at the chair.
            </p>
          </div>
        )}

        {/* STEP 2 — DAY & TIME */}
        {step === 1 && (
          <div>
            <h3 className="text-white text-2xl mb-2" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.05em" }}>
              Pick a Day &amp; Time
            </h3>
            <p className="text-xs mb-6" style={{ color: T2 }}>
              {chosenService ? `${chosenService.name} - ${chosenService.price} - ${chosenService.dur}` : ""}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {DAYS.map((d) => (
                <button key={d.day} type="button"
                  onClick={() => { setDay(d.day); setTime(null); }}
                  className="px-4 py-2.5 border text-xs tracking-[0.15em] uppercase transition-colors"
                  style={{
                    background: day === d.day ? ACCENT : "transparent",
                    borderColor: day === d.day ? ACCENT : BORDER,
                    color: day === d.day ? "#fff" : T2,
                  }}>
                  {d.day}
                </button>
              ))}
            </div>
            {chosenDay && (
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: T3 }}>
                  {chosenDay.day} - Open {chosenDay.hours}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chosenDay.slots.map((t) => (
                    <button key={t} type="button"
                      onClick={() => setTime(t)}
                      className="px-4 py-2.5 border text-xs transition-colors"
                      style={{
                        background: time === t ? ACCENT : BG3,
                        borderColor: time === t ? ACCENT : BORDER,
                        color: time === t ? "#fff" : T2,
                      }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-between mt-8">
              <button type="button" onClick={() => setStep(0)}
                className="text-xs tracking-[0.2em] uppercase hover:text-white transition-colors" style={{ color: T3 }}>
                &larr; Back
              </button>
              <button type="button" disabled={!day || !time}
                onClick={() => setStep(2)}
                className="text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ background: ACCENT }}>
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — CONTACT */}
        {step === 2 && (
          <div>
            <h3 className="text-white text-2xl mb-2" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.05em" }}>
              Almost Done
            </h3>
            <p className="text-xs mb-6" style={{ color: T2 }}>
              {chosenService?.name} - {day} at {time}
            </p>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: T3 }}>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 text-sm text-white border outline-none focus:border-white transition-colors"
                  style={{ background: BG3, borderColor: BORDER }} />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: T3 }}>Phone</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="(813) 555-0100"
                  className="w-full px-4 py-3 text-sm text-white border outline-none focus:border-white transition-colors"
                  style={{ background: BG3, borderColor: BORDER }} />
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button type="button" onClick={() => setStep(1)}
                className="text-xs tracking-[0.2em] uppercase hover:text-white transition-colors" style={{ color: T3 }}>
                &larr; Back
              </button>
              <button type="button" disabled={!name.trim() || !phone.trim()}
                onClick={() => setStep(3)}
                className="text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ background: ACCENT }}>
                Request Appointment
              </button>
            </div>
          </div>
        )}

        {/* CONFIRMATION */}
        {step === 3 && (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}` }}>
              <svg className="w-7 h-7" fill="none" stroke={ACCENT} viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-white text-3xl mb-3" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.05em" }}>
              You&rsquo;re On The Books, {name.split(" ")[0]}
            </h3>
            <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: T2 }}>
              {chosenService?.name} - {day} at {time}. On the live site this request would land straight in the shop&rsquo;s Booksy calendar.
            </p>
            <div className="mt-8 inline-block px-5 py-3 border text-[11px] tracking-[0.15em] uppercase" style={{ borderColor: BORDER, color: T3 }}>
              Concept preview — no request was sent
            </div>
            <div className="mt-8">
              <button type="button"
                onClick={() => { setStep(0); setService(null); setDay(null); setTime(null); setName(""); setPhone(""); }}
                className="text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70" style={{ color: ACCENT }}>
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
