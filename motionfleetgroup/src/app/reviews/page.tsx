import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { StarIcon } from "@/components/icons";
import { ctas } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Customer reviews for Motion Fleet Group, serving Clearwater, Largo, and greater Tampa Bay, FL.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our customers say."
        lede="We're a new dealership building our reputation the right way — one honest deal at a time. As reviews come in from Tampa Bay buyers, you'll see them here."
      />

      <Section surface="dark">
        {/* Google Reviews embed placeholder */}
        <div className="mx-auto max-w-2xl rounded-lg border border-ink-700 bg-ink-800 p-10 text-center">
          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-6 w-6 text-silver-dim/40" />
            ))}
          </div>
          <h2 className="mt-5 text-h3 font-bold text-white">
            Reviews are on the way
          </h2>
          <p className="mt-3 leading-relaxed text-silver">
            Once our Google Business Profile is live, verified customer reviews
            will appear right here. Bought from us already? We&apos;d be grateful
            for your honest feedback.
            {/* TODO(client): embed Google Reviews widget once Google Business
                Profile exists (Open Q #4). Drop the embed in place of this card. */}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href={ctas.contact.href}>Share your experience</ButtonLink>
            <ButtonLink href={ctas.preApproved.href} variant="outline">
              {ctas.preApproved.label}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
