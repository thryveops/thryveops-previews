import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { LegalProse } from "@/components/legal-prose";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${brand.legalName}.`,
  alternates: { canonical: "/privacy" },
};

// TODO(client): Have this reviewed by an attorney before launch. This is a
// reasonable starting template, not legal advice.
const EFFECTIVE = "TODO(client): effective date";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lede={`Effective date: ${EFFECTIVE}`} />
      <Section surface="dark">
        <LegalProse>
          <p>
            {brand.legalName} (&ldquo;Motion Fleet Group,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
            policy explains what information we collect through our website, how
            we use it, and the choices you have.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect the information you choose to provide through our forms —
            such as your name, phone number, email address, vehicle of interest,
            trade-in details, and any message you send. We may also collect basic
            technical information automatically, such as your device type and
            general usage data, to help our site work and improve.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your inquiries, pre-approval requests, and trade-in requests.</li>
            <li>To contact you by phone, text message, or email about your request.</li>
            <li>To connect you with lender or credit-union partners when you ask us to pursue financing.</li>
            <li>To operate, maintain, and improve our website and services.</li>
          </ul>

          <h2>How we share your information</h2>
          <p>
            We do <strong>not</strong> sell your personal information. We share it
            only as needed to serve your request — for example, with financing
            partners you ask us to work with, or with service providers who help
            us run our business — and as required by law.
          </p>

          <h2>Text messaging</h2>
          <p>
            If you provide your mobile number, you consent to receive calls and
            text messages from us about your inquiry. Message and data rates may
            apply. You can opt out of texts at any time by replying STOP.
            {/* TODO(client): confirm SMS consent language with your SMS provider's requirements. */}
          </p>

          <h2>Your choices</h2>
          <p>
            You may request that we update or delete your information, or ask us
            to stop contacting you, by emailing{" "}
            <a href={brand.emailHref}>{brand.email}</a> or calling{" "}
            <a href={brand.phoneHref}>{brand.phone}</a>.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href={brand.emailHref}>{brand.email}</a> or {brand.phone}.
          </p>
        </LegalProse>
      </Section>
    </>
  );
}
