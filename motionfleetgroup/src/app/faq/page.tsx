import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { Accordion } from "@/components/accordion";
import { ButtonLink } from "@/components/ui/button";
import { faqs } from "@/lib/faq";
import { brand, ctas } from "@/lib/brand";
import { FaqJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "FAQ — Common Questions",
  description:
    "Answers to common questions about financing, trade-ins, credit, and buying a used car from Motion Fleet Group in Clearwater & Largo, FL.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <PageHero
        eyebrow="Questions & answers"
        title="The straight answers, up front."
        lede="Buying a car shouldn't come with a stack of fine print. Here's what people ask us most — and if your question isn't here, just call or text."
      />

      <Section surface="dark">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <Accordion items={faqs} />

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-ink-700 bg-ink-800 p-7">
              <h2 className="text-h3 font-bold text-white">Still have a question?</h2>
              <p className="mt-2 text-silver">
                We&apos;re happy to talk it through — no pressure, no script.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <ButtonLink href={ctas.contact.href}>Contact us</ButtonLink>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-silver/40 px-6 py-3 font-display font-bold text-white hover:border-white"
                >
                  Call {brand.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
