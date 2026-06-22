import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { PaymentCalculator } from "@/components/payment-calculator";
import { LeadForm, type LeadFormField } from "@/components/lead-form";
import { CheckIcon, ShieldIcon, HandshakeIcon, TagIcon } from "@/components/icons";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Financing & Get Pre-Approved — All Credit Welcome",
  description:
    "Get pre-approved for a used-car loan in Clearwater & Largo, FL. All credit types welcome through trusted lender and credit-union partners. Estimate your monthly payment.",
  alternates: { canonical: "/financing" },
};

const steps = [
  ["Tell us about you", "A short, no-obligation form — name, contact, and a few basics. No login, no hassle."],
  ["We match you to a lender", "We shop your application across our lender and credit-union partners to find a fit."],
  ["Review your options", "We walk you through real terms in plain English so you can choose with confidence."],
];

const points = [
  { icon: HandshakeIcon, title: "All credit welcome", body: "Excellent, fair, rebuilding, or first-time — everyone gets a real shot at approval." },
  { icon: ShieldIcon, title: "No Buy-Here-Pay-Here", body: "We're not an in-house lender. Your loan comes from established banks and credit unions." },
  { icon: TagIcon, title: "Straight terms", body: "No payment-packing or surprise add-ons. You see the numbers before you commit." },
];

const preApprovalFields: LeadFormField[] = [
  { name: "name", label: "Full name", required: true, placeholder: "Jordan Smith" },
  { name: "phone", label: "Mobile phone", type: "tel", required: true, placeholder: "(727) 555-0123" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  {
    name: "creditBand",
    label: "How's your credit?",
    type: "select",
    placeholder: "Choose one",
    options: [
      { value: "Excellent (720+)", label: "Excellent (720+)" },
      { value: "Good (660–719)", label: "Good (660–719)" },
      { value: "Fair (600–659)", label: "Fair (600–659)" },
      { value: "Rebuilding (<600)", label: "Rebuilding (below 600)" },
      { value: "First-time buyer", label: "First-time buyer / no credit" },
      { value: "Not sure", label: "Not sure" },
    ],
  },
  {
    name: "budget",
    label: "Target monthly payment",
    type: "select",
    placeholder: "Optional",
    options: [
      { value: "Under $300", label: "Under $300" },
      { value: "$300–$450", label: "$300–$450" },
      { value: "$450–$600", label: "$450–$600" },
      { value: "$600+", label: "$600+" },
    ],
  },
  {
    name: "vehicle",
    label: "Vehicle you're interested in",
    full: true,
    placeholder: "Make/model, or 'still deciding'",
  },
  {
    name: "message",
    label: "Anything else we should know?",
    type: "textarea",
    placeholder: "Trade-in, timeline, must-haves…",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing · Get Pre-Approved"
        title={
          <>
            Financing for every credit story — <span className="chrome-text">no pressure</span>.
          </>
        }
        lede="Whether your credit is excellent or you're rebuilding, we work with lender and credit-union partners to find a payment that fits your life. Start with a quick, no-obligation pre-approval."
      />

      {/* How pre-approval works */}
      <Section surface="dark">
        <SectionHeading
          eyebrow="How it works"
          title="Three simple steps to driving away."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map(([title, body], i) => (
            <li
              key={title}
              className="rounded-lg border border-ink-700 bg-ink-800 p-7"
            >
              <span className="tabular font-display text-3xl font-black text-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-h3 font-bold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-silver">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-3">
              <Icon className="h-6 w-6 shrink-0 text-red" />
              <div>
                <p className="font-display font-bold text-white">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-silver">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Payment calculator */}
      <Section surface="dark" id="calculator" className="border-t border-ink-700">
        <SectionHeading
          eyebrow="Payment calculator"
          title="Estimate your monthly payment."
          lede="Slide to your numbers for a ballpark monthly payment. It's an estimate to help you plan — not a financing offer."
        />
        <div className="mt-10">
          <PaymentCalculator />
        </div>
      </Section>

      {/* Pre-approval form */}
      <Section surface="dark" id="apply" className="border-t border-ink-700">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow className="mb-4">Get pre-approved</Eyebrow>
            <h2 className="text-h2 font-extrabold text-white">
              Start your pre-approval
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-silver">
              Fill out the form and we&apos;ll reach out with your options. It
              only takes a minute, and it won&apos;t lock you into anything.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "No obligation, no commitment",
                "We never sell your information",
                "Real human follow-up by phone, text, or email",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-silver">
                  <CheckIcon className="h-4 w-4 text-red" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-silver-dim">
              Prefer to talk it through?{" "}
              <a href={brand.phoneHref} className="font-bold text-white hover:text-red">
                Call {brand.phone}
              </a>
              {/* TODO(client): confirm pre-approval flow — simple lead form (current),
                  soft-pull pre-qual, or full secure credit application (CLAUDE.md Open Q #2). */}
            </p>
          </div>

          <div className="rounded-lg border border-ink-700 bg-ink-800/60 p-6 sm:p-8">
            <LeadForm
              type="pre-approval"
              fields={preApprovalFields}
              submitLabel="Request Pre-Approval"
              successTitle="You're all set"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
