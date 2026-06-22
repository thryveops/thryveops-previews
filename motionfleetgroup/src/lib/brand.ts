/**
 * Motion Fleet Group — central business configuration.
 *
 * Single source of truth for every business fact on the site. Edit values
 * here and they update everywhere (header, footer, contact, JSON-LD schema,
 * form notifications). Fields marked PENDING are placeholders the client
 * still needs to confirm — see CLAUDE.md §13 Open Questions.
 */

export const brand = {
  legalName: "Motion Fleet Group LLC",
  displayName: "Motion Fleet Group",
  shortName: "MFG",
  tagline: "Buy • Sell • Trade",
  type: "Independent Used-Car Dealership",

  // Contact
  phone: "727-519-6068",
  phoneHref: "tel:+17275196068",
  email: "andrewr@motionfleetgroup.com",
  emailHref: "mailto:andrewr@motionfleetgroup.com",

  // Web
  domain: "motionfleetgroup.com",
  // Preview deployment URL (Multi-Zone path on the agency previews domain).
  // At real launch, change to "https://www.motionfleetgroup.com".
  url: "https://preview.thryveops.com/motionfleetgroup",

  owner: "Andrew Restrepo",

  // Market / service area (used until a street address is confirmed)
  serviceArea: ["Clearwater", "Largo", "Pinellas County", "Greater Tampa Bay"],
  region: "Tampa Bay, FL",
  state: "FL",

  /**
   * Physical address — PENDING (property under construction).
   * When confirmed, fill these and flip `addressConfirmed` to true; the
   * Contact page, footer, Google Map, and JSON-LD schema all read from here.
   */
  address: {
    confirmed: false,
    street: "", // TODO(client): street address once build-out is done
    city: "Clearwater",
    state: "FL",
    zip: "", // TODO(client)
  },

  /**
   * Business hours — PENDING. Until provided we present an
   * "opening soon / by appointment" message. Each entry: [day, hours].
   */
  hoursConfirmed: false,
  appointmentMessage: "Now serving the Tampa Bay area by appointment — full showroom hours coming soon.",
  hours: [
    // TODO(client): real hours, e.g. { day: "Mon–Fri", value: "9:00 AM – 7:00 PM" }
  ] as { day: string; value: string }[],

  // Social — handles PENDING (CLAUDE.md Open Q #5)
  social: {
    facebook: "", // TODO(client)
    instagram: "", // TODO(client)
    google: "", // TODO(client): Google Business Profile URL
  },

  // Financing positioning (CLAUDE.md §4, §9)
  financing: {
    allCredit: true,
    buyHerePayHere: false, // explicitly NOT BHPH / not in-house
    note: "Financing through lender partners and credit unions — all credit types welcome.",
  },
} as const;

/** Primary site CTAs, reused across header, hero, and section blocks. */
export const ctas = {
  preApproved: { label: "Get Pre-Approved", href: "/financing" },
  inventory: { label: "Browse Inventory", href: "/inventory" },
  trade: { label: "Value Your Trade", href: "/value-your-trade" },
  contact: { label: "Contact Us", href: "/contact" },
} as const;

/** Top-level navigation. */
export const nav = [
  { label: "Inventory", href: "/inventory" },
  { label: "Financing", href: "/financing" },
  { label: "Trade-In", href: "/value-your-trade" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavItem = (typeof nav)[number];
