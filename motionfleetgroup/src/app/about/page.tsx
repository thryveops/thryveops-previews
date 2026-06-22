import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { SpeedLines } from "@/components/speed-lines";
import { ShieldIcon, HandshakeIcon, TagIcon, MapPinIcon } from "@/components/icons";
import { brand, ctas } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About / Why Buy From Us",
  description:
    "Motion Fleet Group is an independent, local used-car dealership in the Tampa Bay area built on transparency, fair pricing, and no-pressure service.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: HandshakeIcon,
    title: "Straight talk",
    body: "We explain every number and never push. You'll always know where you stand — and you'll never feel rushed into a decision.",
  },
  {
    icon: TagIcon,
    title: "Fair pricing",
    body: "We price our vehicles to be competitive and honest, and we show you the breakdown. No mystery fees revealed at the signing table.",
  },
  {
    icon: ShieldIcon,
    title: "Real accountability",
    body: "We stand behind the cars we sell and the people we serve. Our reputation in Tampa Bay is the whole business — we treat it that way.",
  },
  {
    icon: MapPinIcon,
    title: "Local & independent",
    body: "We're not a faceless chain. We're your neighbors, and we're building something we want this community to be proud of.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Motion Fleet Group"
        title={
          <>
            A used-car dealership built the way it{" "}
            <span className="chrome-text">should be</span>.
          </>
        }
        lede="Motion Fleet Group LLC is an independent dealership serving Clearwater, Largo, and greater Tampa Bay — founded on a simple idea: buying a used car should feel honest, clear, and pressure-free."
      >
        <ButtonLink href={ctas.contact.href}>Get in touch</ButtonLink>
      </PageHero>

      {/* Story */}
      <Section surface="dark">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow className="mb-4">Our story</Eyebrow>
            <h2 className="text-h2 font-extrabold text-white">
              Why we started Motion Fleet Group
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-silver">
              <p>
                Too many people walk away from buying a used car feeling like
                they got worked over — confused by the numbers, pressured into a
                payment, surprised by fees. We thought it should be the opposite.
              </p>
              <p>
                Motion Fleet Group was created to be the dealership we&apos;d want
                to buy from: clear pricing, honest answers, and financing options
                for every kind of buyer — backed by real lender partners, not
                high-cost in-house loans.
              </p>
              <p>
                We&apos;re local, independent, and here for the long haul in Tampa
                Bay. When you buy from us, you&apos;re buying from neighbors who
                want to see you down the road again.
                {/* TODO(client): personalize with Andrew's background / founding year if desired */}
              </p>
            </div>
          </div>

          {/* Brand statement panel */}
          <div className="relative overflow-hidden rounded-lg border border-ink-700 bg-gradient-to-br from-ink-800 to-ink p-8 sm:p-10">
            <SpeedLines
              tone="red"
              className="pointer-events-none absolute -right-4 top-8 h-28 w-72 opacity-20"
            />
            <p className="eyebrow text-red">{brand.tagline}</p>
            <p className="mt-5 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              &ldquo;We want the easiest, most honest car-buying experience in
              Tampa Bay — and we&apos;re building everything around that.&rdquo;
            </p>
            <p className="mt-6 text-sm text-silver">
              — {brand.owner}, {brand.legalName}
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section surface="dark" className="border-t border-ink-700">
        <SectionHeading
          eyebrow="What we stand for"
          title="The principles behind every deal."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-700 bg-ink-700 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-ink-800 p-7">
              <Icon className="h-7 w-7 text-red" />
              <h3 className="mt-4 text-h3 font-bold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-silver">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section surface="dark" className="border-t border-ink-700">
        <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-ink-700 bg-ink-800 p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-h2 font-extrabold text-white">
              Let&apos;s find your next car.
            </h2>
            <p className="mt-2 max-w-lg text-silver">
              Start a pre-approval, value your trade, or just ask us a question.
              All credit welcome, zero pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={ctas.preApproved.href}>{ctas.preApproved.label}</ButtonLink>
            <ButtonLink href={ctas.trade.href} variant="outline">
              {ctas.trade.label}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
