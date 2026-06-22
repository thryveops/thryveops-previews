"use client";

import { useMemo, useState } from "react";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const TERMS = [36, 48, 60, 72, 84];

function calcMonthly(principal: number, apr: number, months: number) {
  if (principal <= 0) return 0;
  const r = apr / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

/** Labeled slider + numeric readout, used for each money input. */
function MoneyRow({
  label,
  value,
  set,
  min,
  max,
  step,
  suffix,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="font-display text-sm font-semibold text-silver">{label}</label>
        <span className="tabular font-display text-base font-bold text-white">
          {suffix ? `${value}${suffix}` : fmt(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mfg-range mt-3 w-full"
        aria-label={label}
      />
    </div>
  );
}

export function PaymentCalculator() {
  const [price, setPrice] = useState(22000);
  const [down, setDown] = useState(2000);
  const [trade, setTrade] = useState(0);
  const [apr, setApr] = useState(8.9);
  const [term, setTerm] = useState(72);

  const { monthly, principal, totalInterest } = useMemo(() => {
    const p = Math.max(0, price - down - trade);
    const m = calcMonthly(p, apr, term);
    return { monthly: m, principal: p, totalInterest: m * term - p };
  }, [price, down, trade, apr, term]);

  return (
    <div className="grid gap-8 rounded-lg border border-ink-700 bg-ink-800 p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr]">
      {/* Controls */}
      <div className="space-y-6">
        <MoneyRow label="Vehicle price" value={price} set={setPrice} min={3000} max={80000} step={500} />
        <MoneyRow label="Down payment" value={down} set={setDown} min={0} max={20000} step={250} />
        <MoneyRow label="Trade-in value" value={trade} set={setTrade} min={0} max={30000} step={250} />
        <MoneyRow label="Estimated APR" value={apr} set={setApr} min={0} max={24} step={0.1} suffix="%" />

        <div>
          <label className="font-display text-sm font-semibold text-silver">Term</label>
          <div className="mt-3 flex flex-wrap gap-2">
            {TERMS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTerm(t)}
                aria-pressed={term === t}
                className={`tabular rounded-sm border px-3.5 py-2 font-display text-sm font-bold transition-colors ${
                  term === t
                    ? "border-red bg-red text-white"
                    : "border-ink-700 text-silver hover:border-silver/50"
                }`}
              >
                {t} mo
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col justify-between rounded-md bg-gradient-to-br from-ink to-ink-800 p-6">
        <div>
          <p className="eyebrow text-silver-dim">Estimated payment</p>
          <p className="tabular mt-3 font-display text-5xl font-black leading-none text-white">
            {fmt(monthly)}
            <span className="text-lg font-bold text-silver">/mo</span>
          </p>
          <dl className="mt-6 space-y-2.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-silver">Amount financed</dt>
              <dd className="tabular font-semibold text-white">{fmt(principal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-silver">Est. total interest</dt>
              <dd className="tabular font-semibold text-white">{fmt(Math.max(0, totalInterest))}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-silver">Term</dt>
              <dd className="tabular font-semibold text-white">{term} months</dd>
            </div>
          </dl>
        </div>
        <p className="mt-6 text-[0.7rem] leading-relaxed text-silver-dim">
          Estimate only — not a financing offer or a guarantee of terms. Your
          actual rate depends on credit approval and lender terms.
        </p>
      </div>
    </div>
  );
}
