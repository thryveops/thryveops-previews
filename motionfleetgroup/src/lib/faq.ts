import type { QA } from "@/components/accordion";

/**
 * Shared FAQ content — drives both the FAQ page and the FAQPage JSON-LD.
 * Brand voice: plain-spoken, transparent. Items needing a factual sign-off
 * are marked TODO(client) and kept conservative.
 */
export const faqs: QA[] = [
  {
    q: "Do you offer financing if my credit isn't perfect?",
    a: "Yes. We welcome all credit types — excellent, fair, rebuilding, and first-time buyers. We work with a network of lender and credit-union partners to find a loan that fits, so a few bumps in your credit history don't automatically rule you out.",
  },
  {
    q: "Are you a Buy-Here-Pay-Here dealer?",
    a: "No. We do not offer in-house or Buy-Here-Pay-Here financing. Your loan comes from established banks and credit unions, which generally means more competitive rates and terms than a typical BHPH lot.",
  },
  {
    q: "Where are you located?",
    a: "We serve Clearwater, Largo, and the greater Tampa Bay area. Our permanent location is being finished now, so we're currently helping shoppers by appointment. Reach out and we'll arrange a time that works.",
  },
  {
    q: "Do you have vehicles available right now?",
    a: "We're stocking our inventory as we prepare to open. If you tell us what you're looking for, we'll reach out the moment a match arrives — and we can often source a specific vehicle for you.",
  },
  {
    q: "Can I trade in my current vehicle?",
    a: "Absolutely. Trade-ins are welcome, and we'll give you a fair, no-obligation estimate. The value can be applied directly toward your next vehicle, and we can help with your remaining loan payoff if you have one.",
  },
  {
    q: "How do I get pre-approved?",
    a: "Fill out our short pre-approval form — it takes about a minute and doesn't obligate you to anything. We'll follow up with your options by phone, text, or email.",
  },
  {
    q: "What should I bring to get approved?",
    a: "Typically a valid driver's license, proof of income, and proof of residence. Requirements can vary by lender, so we'll let you know exactly what's needed for your situation. TODO(client): confirm standard document checklist.",
  },
  {
    q: "Is my personal information safe?",
    a: "Yes. We only use the details you share to help with your inquiry, and we never sell your information. See our Privacy Policy for the specifics.",
  },
];
