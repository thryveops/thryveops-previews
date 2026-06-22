import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { LegalProse } from "@/components/legal-prose";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the ${brand.legalName} website.`,
  alternates: { canonical: "/terms" },
};

// TODO(client): Have this reviewed by an attorney before launch.
const EFFECTIVE = "TODO(client): effective date";

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" lede={`Effective date: ${EFFECTIVE}`} />
      <Section surface="dark">
        <LegalProse>
          <p>
            Welcome to the {brand.legalName} website. By using this site, you
            agree to these Terms of Use. If you don&apos;t agree, please don&apos;t
            use the site.
          </p>

          <h2>Informational purposes</h2>
          <p>
            The content on this site — including vehicle information, pricing,
            payment estimates, and availability — is provided for general
            informational purposes and may change at any time without notice. It
            does not constitute an offer, a financing commitment, or a guarantee
            of terms.
          </p>

          <h2>Payment estimates &amp; financing</h2>
          <p>
            Any payment calculator or estimate on this site is for planning only.
            Actual financing terms depend on credit approval and the terms offered
            by third-party lenders and credit unions. {brand.displayName} does not
            provide in-house or Buy-Here-Pay-Here financing.
          </p>

          <h2>Forms and submissions</h2>
          <p>
            When you submit a form, you confirm the information you provide is
            accurate and that we may contact you about your request by phone,
            text, or email. Your use of forms is also governed by our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The {brand.displayName} name, logo, and site content are the property
            of {brand.legalName} and may not be used without permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            The site is provided &ldquo;as is.&rdquo; To the fullest extent
            permitted by law, {brand.legalName} is not liable for any damages
            arising from your use of the site or reliance on its content.
            {/* TODO(client): attorney to confirm liability, warranty, and governing-law language. */}
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact{" "}
            <a href={brand.emailHref}>{brand.email}</a> or {brand.phone}.
          </p>
        </LegalProse>
      </Section>
    </>
  );
}
