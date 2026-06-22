import { brand } from "@/lib/brand";
import { faqs } from "@/lib/faq";

/**
 * Renders a JSON-LD <script>. JSON.stringify output is safe inside a script
 * tag for our controlled content (no user input).
 */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Site-wide AutoDealer / LocalBusiness schema. Address + hours are stubbed
 * (property under construction) — fill them in `brand` when confirmed and the
 * conditionally-added fields below light up automatically (CLAUDE.md §11).
 */
export function AutoDealerJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${brand.url}/#dealer`,
    name: brand.legalName,
    url: brand.url,
    telephone: brand.phoneHref.replace("tel:", ""),
    email: brand.email,
    image: `${brand.url}/logos/logo-chrome-dark.png`,
    logo: `${brand.url}/logos/logo-chrome-dark.png`,
    slogan: brand.tagline,
    priceRange: "$$",
    areaServed: brand.serviceArea.map((name) => ({
      "@type": "City",
      name: `${name}, FL`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.address.city,
      addressRegion: brand.address.state,
      addressCountry: "US",
      // TODO(client): add streetAddress + postalCode once confirmed
      ...(brand.address.confirmed
        ? { streetAddress: brand.address.street, postalCode: brand.address.zip }
        : {}),
    },
  };

  // Only advertise hours once they're real.
  if (brand.hoursConfirmed && brand.hours.length > 0) {
    data.openingHoursSpecification = brand.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      description: h.value,
    }));
  }

  const sameAs = Object.values(brand.social).filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;

  return <JsonLd data={data} />;
}

/** FAQPage schema generated from the shared FAQ content. */
export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\s*TODO\(client\):.*$/, "") },
    })),
  };
  return <JsonLd data={data} />;
}
