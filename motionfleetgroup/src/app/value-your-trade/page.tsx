import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/ui/section";
import { LeadForm, type LeadFormField } from "@/components/lead-form";
import { CheckIcon } from "@/components/icons";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Value Your Trade — Get a Fair Offer",
  description:
    "Trade in your car at Motion Fleet Group in Clearwater & Largo, FL. Send your vehicle details and get a fair, no-obligation trade-in estimate from our team.",
  alternates: { canonical: "/value-your-trade" },
};

const tradeFields: LeadFormField[] = [
  { name: "name", label: "Full name", required: true, placeholder: "Jordan Smith" },
  { name: "phone", label: "Mobile phone", type: "tel", required: true, placeholder: "(727) 555-0123" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "year", label: "Year", placeholder: "2018" },
  { name: "make", label: "Make", placeholder: "Toyota" },
  { name: "model", label: "Model", placeholder: "Camry" },
  { name: "trim", label: "Trim (optional)", placeholder: "SE" },
  { name: "mileage", label: "Mileage", placeholder: "e.g. 74,000" },
  {
    name: "condition",
    label: "Overall condition",
    type: "select",
    placeholder: "Choose one",
    options: [
      { value: "Excellent", label: "Excellent — like new" },
      { value: "Good", label: "Good — minor wear" },
      { value: "Fair", label: "Fair — visible wear / needs work" },
      { value: "Rough", label: "Rough — mechanical issues" },
    ],
  },
  { name: "vin", label: "VIN (optional)", placeholder: "Helps us give a sharper number" },
  { name: "payoff", label: "Loan payoff, if any (optional)", placeholder: "$0" },
  {
    name: "message",
    label: "Anything else about the vehicle?",
    type: "textarea",
    placeholder: "Recent service, accidents, extra features, photos you can send…",
  },
];

const whatYouGet = [
  "A fair, no-obligation estimate from real people",
  "Credit toward your next vehicle from us",
  "Help with your remaining loan payoff, if you have one",
  "Zero pressure to buy anything",
];

export default function ValueYourTradePage() {
  return (
    <>
      <PageHero
        eyebrow="Sell · Trade"
        title={
          <>
            What&apos;s your car <span className="chrome-text">worth</span>?
          </>
        }
        lede="Trade it in and roll the value straight into your next vehicle. Send us a few details below and our team will follow up with a fair number — no obligation."
      />

      <Section surface="dark">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div className="rounded-lg border border-ink-700 bg-ink-800/60 p-6 sm:p-8">
            <h2 className="text-h3 font-bold text-white">Tell us about your trade</h2>
            <p className="mt-2 text-silver">
              The more you share, the sharper our estimate. Only name and a way
              to reach you are required.
            </p>
            <div className="mt-6">
              <LeadForm
                type="trade-in"
                fields={tradeFields}
                submitLabel="Get My Trade Estimate"
                successTitle="Got it — we're on it"
              />
            </div>
          </div>

          {/* Side rail */}
          <div>
            <Eyebrow className="mb-4">What you get</Eyebrow>
            <ul className="space-y-3">
              {whatYouGet.map((t) => (
                <li key={t} className="flex items-start gap-3 text-silver">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-red" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-ink-700 bg-ink-800 p-6">
              <p className="font-display font-bold text-white">Want it even faster?</p>
              <p className="mt-2 text-sm leading-relaxed text-silver">
                We can add an instant online valuation tool (KBB / Black Book)
                so shoppers see a number in seconds. Ask us about turning it on.
                {/* TODO(client): Open Q #11 — enable embedded instant valuation
                    (KBB/Black Book/TradePending) vs. request form for v1. */}
              </p>
              <a
                href={brand.phoneHref}
                className="mt-4 inline-flex font-display font-bold text-white hover:text-red"
              >
                Call {brand.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
