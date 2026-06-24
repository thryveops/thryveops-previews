import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { SpeedLines } from "@/components/speed-lines";
import { brand, ctas } from "@/lib/brand";
import {
  CheckIcon,
  ArrowIcon,
  ShieldIcon,
  TagIcon,
  HandshakeIcon,
  CarIcon,
  MapPinIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const trustPoints = [
  "All credit types welcome",
  "Not Buy-Here-Pay-Here",
  "Local & independent",
];

const whyBuy = [
  {
    icon: ShieldIcon,
    title: "No-pressure, ever",
    body: "We answer questions straight and let you decide on your timeline. No tricks, no payment-packing, no surprises at the table.",
  },
  {
    icon: TagIcon,
    title: "Transparent pricing",
    body: "Clear prices and a clear breakdown. You'll know what a vehicle costs and why before you ever sign anything.",
  },
  {
    icon: HandshakeIcon,
    title: "Financing for every story",
    body: "Good credit, rebuilding, or first-time buyer — we work with lender and credit-union partners to find a path that fits.",
  },
  {
    icon: CarIcon,
    title: "Buy • Sell • Trade",
    body: "Shopping, selling outright, or trading in — handle it all in one place with people who make it simple.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="surface-dark relative overflow-hidden">
        {/* Background motifs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 78% 8%, rgba(224,30,38,0.20), transparent 55%)," +
              "radial-gradient(80% 70% at 12% 100%, rgba(199,199,199,0.06), transparent 60%)",
          }}
        />
        <ArcGraphic className="pointer-events-none absolute -right-24 -top-16 h-[460px] w-[460px] opacity-[0.13] sm:opacity-20" />
        <SpeedLines
          tone="mixed"
          className="pointer-events-none absolute -left-10 bottom-16 h-40 w-[420px] opacity-25"
        />

        <div className="shell relative grid items-center gap-12 pb-20 pt-10 sm:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <Eyebrow className="reveal">Clearwater · Largo · Tampa Bay</Eyebrow>
            <h1
              className="reveal mt-6 font-display text-[length:var(--text-display)] font-black leading-[0.95] tracking-tight text-white"
              style={{ animationDelay: "60ms" }}
            >
              Your next car,
              <br />
              without the <span className="chrome-text">runaround</span>
              <span className="text-red">.</span>
            </h1>
            <p
              className="reveal mt-6 max-w-xl text-lg leading-relaxed text-silver"
              style={{ animationDelay: "140ms" }}
            >
              Motion Fleet Group is an independent Tampa Bay dealership built on
              straight answers, fair prices, and financing for every credit
              story. Buy, sell, or trade — the simple way.
            </p>

            <div
              className="reveal mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <ButtonLink href={ctas.preApproved.href} size="lg">
                {ctas.preApproved.label}
                <ArrowIcon className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={ctas.inventory.href} variant="chrome" size="lg">
                {ctas.inventory.label}
              </ButtonLink>
              <ButtonLink href={ctas.trade.href} variant="outline" size="lg">
                {ctas.trade.label}
              </ButtonLink>
            </div>

            <ul
              className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3"
              style={{ animationDelay: "300ms" }}
            >
              {trustPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-silver">
                  <CheckIcon className="h-4 w-4 text-red" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Spec-sheet style card — the "engineered confidence" motif */}
          <div className="lg:col-span-5">
            <div
              className="reveal rounded-lg border border-ink-700 bg-ink-800/80 p-7 backdrop-blur-sm"
              style={{ animationDelay: "360ms" }}
            >
              <p className="eyebrow text-silver-dim">How it works</p>
              <ol className="mt-5 space-y-5">
                {[
                  ["01", "Get pre-approved", "Fill out one short form. All credit considered, no impact to browse."],
                  ["02", "Find the right vehicle", "Tell us your budget and needs — we help you match the car to it."],
                  ["03", "Drive it home", "Simple paperwork, fair terms, and a team that picks up the phone."],
                ].map(([num, title, body]) => (
                  <li key={num} className="flex gap-4">
                    <span className="tabular font-display text-xl font-black text-red">
                      {num}
                    </span>
                    <div>
                      <p className="font-display font-bold text-white">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-silver">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="hairline my-6" />
              <p className="text-sm text-silver">
                Questions first?{" "}
                <a href={brand.phoneHref} className="font-bold text-white hover:text-red">
                  Call {brand.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── TRUST / WHY BUY ─────────────────── */}
      <Section surface="dark" className="border-t border-ink-700">
        <SectionHeading
          eyebrow="Why buy from Motion Fleet Group"
          title="Used-car buying that actually feels straightforward."
          lede="Buying a used car shouldn't feel like a fight. We built MFG around the things shoppers tell us they wish every dealer did."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-700 bg-ink-700 sm:grid-cols-2">
          {whyBuy.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-ink-800 p-7 transition-colors hover:bg-ink-700/70">
              <Icon className="h-7 w-7 text-red" />
              <h3 className="mt-4 text-h3 font-bold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-silver">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────── THREE PATHS ─────────────────── */}
      <Section surface="dark" className="border-t border-ink-700">
        <SectionHeading eyebrow="Buy · Sell · Trade" title="Three ways to do business with us." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Featured: Inventory */}
          <Link
            href={ctas.inventory.href}
            className="group relative flex min-h-[16rem] flex-col justify-between overflow-hidden rounded-lg border border-ink-700 bg-gradient-to-br from-ink-800 to-ink p-8 lg:row-span-2 lg:min-h-[34rem]"
          >
            <SpeedLines
              tone="red"
              className="pointer-events-none absolute -right-6 top-8 h-28 w-72 opacity-20 transition-opacity group-hover:opacity-40"
            />
            <div>
              <span className="eyebrow text-red">Browse</span>
              <h3 className="mt-3 max-w-sm text-h2 font-extrabold text-white">
                Inventory, arriving soon
              </h3>
              <p className="mt-3 max-w-md text-silver">
                Our lot is being stocked right now. Tell us what you&apos;re
                after and we&apos;ll alert you the moment the right vehicle
                lands — or start a pre-approval so you&apos;re ready to move.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-display font-bold text-white">
              See the inventory page
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Trade */}
          <Link
            href={ctas.trade.href}
            className="group flex flex-col justify-between overflow-hidden rounded-lg border border-ink-700 bg-ink-800 p-8 transition-colors hover:border-silver/40"
          >
            <div>
              <span className="eyebrow text-silver-dim">Sell / Trade</span>
              <h3 className="mt-3 text-h3 font-bold text-white">Value your trade</h3>
              <p className="mt-2 text-silver">
                Roll your current car&apos;s value into your next one. Send a few
                details and we&apos;ll get you a fair number.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-display font-bold text-white">
              Start a trade request
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Finance */}
          <Link
            href={ctas.preApproved.href}
            className="group flex flex-col justify-between overflow-hidden rounded-lg border border-ink-700 bg-ink-800 p-8 transition-colors hover:border-silver/40"
          >
            <div>
              <span className="eyebrow text-silver-dim">Finance</span>
              <h3 className="mt-3 text-h3 font-bold text-white">Get pre-approved</h3>
              <p className="mt-2 text-silver">
                All credit welcome. Run the payment calculator and send a
                pre-approval — no Buy-Here-Pay-Here, just real lender partners.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-display font-bold text-white">
              Start pre-approval
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Section>

      {/* ─────────────────── LOCATION / SERVICE AREA ─────────────────── */}
      <Section surface="dark" className="border-t border-ink-700">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow className="mb-4">Tampa Bay, Florida</Eyebrow>
            <h2 className="text-h2 font-extrabold text-white">
              Proudly local. Opening soon in the Clearwater &amp; Largo area.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-silver">
              We&apos;re putting the finishing touches on our home base in greater
              Tampa Bay. In the meantime we&apos;re helping local shoppers by
              appointment — reach out and we&apos;ll take care of you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={ctas.contact.href}>Get in touch</ButtonLink>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 font-display font-bold text-white hover:text-red"
              >
                {brand.phone}
              </a>
            </div>
          </div>
          {/* Map placeholder — swaps to embedded Google Map once address is set */}
          <div className="relative flex min-h-[18rem] items-center justify-center overflow-hidden rounded-lg border border-ink-700 bg-ink-800">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-silver) 1px, transparent 1px), linear-gradient(90deg, var(--color-silver) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative text-center">
              <MapPinIcon className="mx-auto h-9 w-9 text-red" />
              <p className="mt-3 font-display font-bold text-white">
                {brand.serviceArea.slice(0, 2).join(" · ")}
              </p>
              <p className="mt-1 text-sm text-silver">
                Map &amp; directions coming once our address is live.
                {/* TODO(client): embed Google Map when address confirmed */}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────────────── SEO INTRO COPY ─────────────────── */}
      <Section surface="dark" className="border-t border-ink-700">
        <div className="max-w-3xl">
          <h2 className="text-h3 font-bold text-white">
            Used cars in Clearwater, Largo &amp; greater Tampa Bay
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-silver">
            <p>
              Motion Fleet Group LLC is an independent used-car dealer serving
              Clearwater, Largo, and the surrounding Tampa Bay area. Whether
              you&apos;re a first-time buyer, shopping for the family, or simply
              after a dependable car that fits your budget, our goal is the
              same: make the process simple, honest, and pressure-free.
            </p>
            <p>
              We welcome <strong className="text-white">all credit types</strong>{" "}
              and work with trusted lender and credit-union partners to find
              financing that works for you — we are not a Buy-Here-Pay-Here lot
              and don&apos;t do in-house financing. Looking for{" "}
              <strong className="text-white">bad-credit car loans in Clearwater</strong>{" "}
              or a fair trade-in value in Tampa Bay? Start with a quick
              pre-approval or a trade request and we&apos;ll take it from there.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

/** Large speedometer arc graphic used as a hero backdrop. */
function ArcGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <path
        d="M30 170 A 80 80 0 0 1 170 170"
        stroke="var(--color-red)"
        strokeWidth="6"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="70 100"
      />
      <path
        d="M30 170 A 80 80 0 0 1 170 170"
        stroke="var(--color-silver)"
        strokeWidth="6"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="24 100"
        strokeDashoffset={-74}
      />
    </svg>
  );
}
