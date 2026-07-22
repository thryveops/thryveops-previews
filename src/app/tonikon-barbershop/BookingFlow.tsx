"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Palette (mirrors page.tsx) ──────────────────────────────────────────────
const ACCENT = "#C9A96E";
const BG3 = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0";
const T3 = "#606060";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  name: string;
  es: string;
  price: string;
  dur: string;
}

const SERVICES: Service[] = [
  { id: "classic", name: "Classic Cut", es: "Corte clasico", price: "$35", dur: "40 min" },
  { id: "fade", name: "Skin Fade", es: "Fade a piel", price: "$40", dur: "45 min" },
  { id: "beard", name: "Beard Sculpt & Lineup", es: "Barba y linea", price: "$25", dur: "25 min" },
  { id: "combo", name: "Cut + Beard Combo", es: "Corte y barba", price: "$55", dur: "60 min" },
  { id: "kids", name: "Kids Cut", es: "Corte de nino", price: "$30", dur: "30 min" },
  { id: "shave", name: "Hot Towel Shave", es: "Afeitado clasico", price: "$35", dur: "35 min" },
];

const BARBERS = [
  { id: "tony", name: "Tony", note: "Owner & founder" },
  { id: "any", name: "First Available", note: "Fastest opening" },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Mon-Wed 9-7 · Thu-Sat 9-10 · Sun 9-6
function timesFor(dow: number): string[] {
  const base = ["9:00 AM", "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];
  if (dow >= 4 && dow <= 6) return [...base, "7:00 PM", "8:30 PM"]; // Thu-Sat open late
  if (dow === 0) return base.slice(0, 6); // Sunday closes 6
  return base; // Mon-Wed
}

function nextDays(count: number) {
  const out: { iso: string; dow: number; dowLabel: string; day: number; month: string; late: boolean }[] = [];
  const today = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push({
      iso: d.toISOString().slice(0, 10),
      dow: d.getDay(),
      dowLabel: DAYS[d.getDay()],
      day: d.getDate(),
      month: MONTHS[d.getMonth()],
      late: d.getDay() >= 4 && d.getDay() <= 6,
    });
  }
  return out;
}

// ─── Component ───────────────────────────────────────────────────────────────

type Step = 0 | 1 | 2 | 3 | 4;

const STEP_LABELS = ["Service", "Barber", "Day & Time", "Your Info"];

export default function BookingFlow() {
  const [step, setStep] = useState<Step>(0);
  const [service, setService] = useState<Service | null>(null);
  const [barber, setBarber] = useState<(typeof BARBERS)[number] | null>(null);
  const [date, setDate] = useState<{ iso: string; label: string; dow: number } | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const days = useMemo(() => nextDays(14), []);
  const times = date ? timesFor(date.dow) : [];

  return (
    <div className="overflow-hidden border" style={{ background: BG3, borderColor: BORDER }}>
      {/* Progress */}
      {step < 4 && (
        <div className="flex items-center border-b px-5 sm:px-8 pt-6 pb-5" style={{ borderColor: BORDER }}>
          {STEP_LABELS.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex items-center gap-2">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold"
                  style={
                    i < step
                      ? { background: ACCENT, color: "#0A0A0A" }
                      : i === step
                        ? { border: `1px solid ${ACCENT}`, color: ACCENT }
                        : { border: `1px solid ${BORDER}`, color: T3 }
                  }
                >
                  {i < step ? "✓" : i + 1}
                </span>
                <span
                  className="hidden text-[11px] tracking-[0.15em] uppercase sm:block"
                  style={{ color: i === step ? "#fff" : T3 }}
                >
                  {label}
                </span>
              </div>
              {i < STEP_LABELS.length - 1 && <div className="mx-3 h-px w-5 sm:w-8" style={{ background: BORDER }} />}
            </div>
          ))}
        </div>
      )}

      <div className="p-5 sm:p-8">
        <AnimatePresence mode="wait">
          {/* Step 0 — Service */}
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
              <h3 className="text-white text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.04em" }}>
                Pick Your Service
              </h3>
              <p className="mt-1 text-sm" style={{ color: T2 }}>
                Elige tu servicio — honest prices, no surprises.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setService(s);
                      setStep(1);
                    }}
                    className="flex items-center justify-between gap-4 border p-4 text-left transition-colors duration-200 hover:border-[#C9A96E]"
                    style={{ borderColor: BORDER, background: "#141414" }}
                  >
                    <span>
                      <span className="block text-white text-sm font-semibold">{s.name}</span>
                      <span className="mt-0.5 block text-xs" style={{ color: T3 }}>
                        {s.es} · {s.dur}
                      </span>
                    </span>
                    <span className="text-xl" style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT }}>
                      {s.price}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1 — Barber */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
              <h3 className="text-white text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.04em" }}>
                Choose Your Barber
              </h3>
              <p className="mt-1 text-sm" style={{ color: T2 }}>
                Every chair holds the same standard.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {BARBERS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => {
                      setBarber(b);
                      setStep(2);
                    }}
                    className="border p-6 text-left transition-colors duration-200 hover:border-[#C9A96E]"
                    style={{ borderColor: BORDER, background: "#141414" }}
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold"
                      style={{ background: "#0A0A0A", border: `1px solid ${ACCENT}`, color: ACCENT }}
                    >
                      {b.name.charAt(0)}
                    </span>
                    <span className="mt-4 block text-white text-lg font-semibold">{b.name}</span>
                    <span className="mt-0.5 block text-xs tracking-[0.15em] uppercase" style={{ color: ACCENT }}>
                      {b.note}
                    </span>
                  </button>
                ))}
              </div>
              <BackRow onBack={() => setStep(0)} />
            </motion.div>
          )}

          {/* Step 2 — Day & time */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
              <h3 className="text-white text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.04em" }}>
                Day &amp; Time
              </h3>
              <p className="mt-1 text-sm" style={{ color: T2 }}>
                Gold dot = open late until 10 PM.
              </p>
              <div className="mt-5 flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "thin" }}>
                {days.map((d) => (
                  <button
                    key={d.iso}
                    type="button"
                    onClick={() => {
                      setDate({ iso: d.iso, label: `${d.dowLabel}, ${d.month} ${d.day}`, dow: d.dow });
                      setTime(null);
                    }}
                    className="relative flex min-w-[62px] flex-col items-center border px-3 py-3 transition-colors duration-200"
                    style={
                      date?.iso === d.iso
                        ? { borderColor: ACCENT, background: "rgba(201,169,110,0.1)" }
                        : { borderColor: BORDER, background: "#141414" }
                    }
                  >
                    <span className="text-[10px] uppercase tracking-wider" style={{ color: T3 }}>{d.dowLabel}</span>
                    <span className="mt-1 text-xl text-white" style={{ fontFamily: "var(--font-bebas-neue)" }}>{d.day}</span>
                    <span className="text-[10px]" style={{ color: T3 }}>{d.month}</span>
                    {d.late && <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />}
                  </button>
                ))}
              </div>
              {date && (
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em]" style={{ color: T3 }}>Available times · {date.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className="border px-4 py-2 text-sm transition-colors duration-200"
                        style={
                          time === t
                            ? { borderColor: ACCENT, color: ACCENT, background: "rgba(201,169,110,0.1)" }
                            : { borderColor: BORDER, color: T2 }
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <NavRow onBack={() => setStep(1)} onNext={() => setStep(3)} nextDisabled={!date || !time} />
            </motion.div>
          )}

          {/* Step 3 — Contact */}
          {step === 3 && service && barber && date && (
            <motion.div key="s3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
              <h3 className="text-white text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.04em" }}>
                Almost Done
              </h3>
              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_260px]">
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.2em]" style={{ color: T3 }}>Name / Nombre</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="mt-2 w-full border bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A96E]"
                      style={{ borderColor: BORDER }}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.2em]" style={{ color: T3 }}>Phone / Telefono</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(813) 555-0123"
                      className="mt-2 w-full border bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A96E]"
                      style={{ borderColor: BORDER }}
                    />
                  </label>
                  <p className="text-xs leading-relaxed" style={{ color: T3 }}>
                    We confirm by text. Walk-ins welcome when chairs are open.
                  </p>
                </div>
                <div className="h-fit border p-5" style={{ borderColor: "rgba(201,169,110,0.4)", background: "rgba(201,169,110,0.05)" }}>
                  <p className="text-lg text-white" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.04em" }}>{service.name}</p>
                  <div className="mt-3 space-y-2 text-sm" style={{ color: T2 }}>
                    <div className="flex justify-between"><span style={{ color: T3 }}>Barber</span><span>{barber.name}</span></div>
                    <div className="flex justify-between"><span style={{ color: T3 }}>When</span><span>{date.label} · {time}</span></div>
                    <div className="flex justify-between"><span style={{ color: T3 }}>Length</span><span>{service.dur}</span></div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between border-t pt-3" style={{ borderColor: BORDER }}>
                    <span className="text-sm" style={{ color: T2 }}>Total</span>
                    <span className="text-2xl" style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT }}>{service.price}</span>
                  </div>
                </div>
              </div>
              <NavRow onBack={() => setStep(2)} onNext={() => setStep(4)} nextLabel="Request Appointment" nextDisabled={!name || !phone} />
            </motion.div>
          )}

          {/* Step 4 — Confirmation */}
          {step === 4 && service && barber && date && (
            <motion.div key="s4" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} className="py-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl"
                style={{ background: ACCENT, color: "#0A0A0A" }}
              >
                ✂
              </motion.div>
              <h3 className="mt-6 text-3xl text-white" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.04em" }}>
                You&rsquo;re on the books{name ? `, ${name.split(" ")[0]}` : ""}.
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: T2 }}>
                {service.name} with {barber.name} · {date.label} at {time}. A text confirmation
                would arrive at {phone || "your number"} within minutes.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
                Concept preview — no request was sent
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep(0);
                  setService(null);
                  setBarber(null);
                  setDate(null);
                  setTime(null);
                  setName("");
                  setPhone("");
                }}
                className="mt-7 border px-6 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                style={{ borderColor: BORDER, color: T2 }}
              >
                Start Over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Small pieces ────────────────────────────────────────────────────────────

function BackRow({ onBack }: { onBack: () => void }) {
  return (
    <div className="mt-8">
      <button type="button" onClick={onBack} className="text-sm transition-colors hover:text-white" style={{ color: T3 }}>
        ← Back
      </button>
    </div>
  );
}

function NavRow({
  onBack,
  onNext,
  nextLabel = "Continue",
  nextDisabled = false,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
}) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button type="button" onClick={onBack} className="text-sm transition-colors hover:text-white" style={{ color: T3 }}>
        ← Back
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
        style={{ background: ACCENT, color: "#0A0A0A" }}
      >
        {nextLabel}
      </button>
    </div>
  );
}
