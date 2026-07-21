import Image from "next/image";
import Link from "next/link";

// ─── PROSPECT DATA — MasterCut Lawn Service (South Tampa, FL) ─────────────────
// Track B greenfield: Facebook page only, no website. Family-owned, 30+ years.
// Fonts (Fraunces + Inter) are loaded globally via layout.tsx — no import needed.

// Business identity
const BUSINESS_NAME = "MasterCut Lawn Service";
const TAGLINE = "30 years of South Tampa lawns";
const NEIGHBORHOOD = "South Tampa";

// Brand palette — trustworthy family-crew greens, not corporate franchise.
const PAPER = "#FAFAF7"; // page background
const INK = "#14231A"; // body text + dark section backgrounds (deep pine)
const ACCENT = "#2F7A3D"; // St. Augustine turf green — fresh-cut, family-trade
const ACCENT2 = "#1B3A24"; // deep hedge green — headings, price accents
const RULE = "#DCE7D8"; // soft green-gray borders

// Contact & links
const PHONE_FORMATTED = "(813) 518-1996";
const PHONE_RAW = "8135181996"; // digits only, for tel: href
const QUOTE_URL = `tel:${PHONE_RAW}`; // call-to-quote business — no booking platform yet
const DIRECTIONS_URL = "https://maps.google.com/?q=MasterCut+Lawn+Service+Tampa+FL";
const INSTAGRAM_HANDLE = "mastercutlawnservice";
const FACEBOOK_HANDLE = "mastercutlawnservice";
const AVG_RATING = "4.9";
const REVIEW_COUNT = "63";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE}`,
  description:
    "Family-owned lawn care in South Tampa for over 30 years. Weekly mowing, edging, hedge trimming, cleanups and mulch — Ballast Point to Westshore. Call (813) 518-1996 for a free quote.",
};

// ─── SERVICES — typical Florida residential lawn-care scope, from-pricing ──────
const services = [
  {
    name: "Weekly Mowing",
    desc: "Full-service cut for fast-growing St. Augustine turf: mow, edge every walkway and bed line, string-trim, and blow clean. Same crew, same day, every week.",
    duration: "Apr – Oct",
    price: "from $45",
  },
  {
    name: "Bi-Weekly Mowing",
    desc: "The winter-season schedule for slower growth months. Same complete mow, edge, trim, and blow-off — every other week.",
    duration: "Nov – Mar",
    price: "from $55",
  },
  {
    name: "Hedge & Shrub Trimming",
    desc: "Viburnum, ixora, podocarpus, and every hedge line in between — shaped clean and hauled away. Keeps the whole property looking as sharp as the lawn.",
    duration: "As needed",
    price: "from $75",
  },
  {
    name: "Palm & Bed Detail",
    desc: "Lower-frond palm trimming, bed weeding, and edging so your palms and planting beds match the lawn — the Florida yard, handled end to end.",
    duration: "As needed",
    price: "from $60",
  },
  {
    name: "Seasonal Cleanup",
    desc: "Overgrown yard, post-storm debris, or a property that got away from you. One visit brings it back to maintainable — then we keep it there.",
    duration: "One-time",
    price: "from $150",
  },
  {
    name: "Mulch Installation",
    desc: "Fresh mulch, delivered and installed with re-cut bed edges. The fastest curb-appeal upgrade a South Tampa yard can get.",
    duration: "Per yard",
    price: "from $65",
  },
];

// ─── SERVICE AREA — South Tampa neighborhoods ─────────────────────────────────
const areas = [
  { name: "Ballast Point", note: "Home base — 33611" },
  { name: "Bayshore Beautiful", note: "Weekly routes on the boulevard" },
  { name: "Palma Ceia", note: "Historic yards, careful edging" },
  { name: "Sunset Park", note: "Big lots, palms and all" },
  { name: "Westshore", note: "Residential streets to the bay" },
];

// ─── WORK GALLERY — lawn-care specific Unsplash photos ────────────────────────
// Run: scripts/check-mockup-images.sh path/to/page.tsx — before every git commit.
const gallery = [
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    alt: "Freshly mowed lawn with mower",
    label: "Weekly cut, Ballast Point",
  },
  {
    src: "https://images.unsplash.com/photo-1647157825867-dde35935639a?w=800&q=80",
    alt: "Bungalow front yard with palms and trimmed hedges",
    label: "Edged and blown clean",
  },
  {
    src: "https://images.unsplash.com/photo-1738193830098-2d92352a1856?w=800&q=80",
    alt: "Front yard with fresh mulch beds and a mowed lawn",
    label: "Full-property maintenance",
  },
  {
    src: "https://images.unsplash.com/photo-1537395799810-9d64ef3d7227?w=800&q=80",
    alt: "Neatly trimmed palm tree",
    label: "Palm trimming, Sunset Park",
  },
  {
    src: "https://images.unsplash.com/photo-1740823434562-e81d21a4f5c2?w=800&q=80",
    alt: "Mulched planting bed with fresh flowers",
    label: "Bed detail and mulch",
  },
  {
    src: "https://images.unsplash.com/photo-1628340981113-fe1949fe5cc0?w=800&q=80",
    alt: "Freshly mowed lawn with crisp stripes",
    label: "Healthy St. Augustine turf",
  },
];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
// {/* composite reviews — replace with real GMB quotes before live deployment */}
const reviews = [
  {
    text: "They have cut our lawn in Ballast Point for six years. Same crew shows up every Thursday, edges along the whole driveway, and the yard has never looked better. You can tell it is a family operation.",
    author: "Karen M. · Google review",
  },
  {
    text: "Our St. Augustine was half dead and the hedges were swallowing the windows. One cleanup visit and a summer of weekly cuts later, neighbors on Bayshore stop to ask who does our yard.",
    author: "Rob T. · Google review",
  },
  {
    text: "Reliable is the word. Thirty years in the business shows — they know exactly when to raise the mower deck in summer and they never scalp the lawn like the last company did.",
    author: "Denise A. · Google review",
  },
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
// ⚠️ SERVER COMPONENT — no "use client". No event handlers. Tailwind hover: only.
// Decorative form: button type="button", no action/onSubmit.
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(250,250,247,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT2 }}>
            MasterCut <span style={{ color: ACCENT }}>Lawn Service</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#area" className="hover:opacity-60 transition-opacity">Service Area</a>
            <a href="#work" className="hover:opacity-60 transition-opacity">Our Work</a>
            <a href="#quote" className="hover:opacity-60 transition-opacity">Free Quote</a>
            <a
              href={QUOTE_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <a
            href={QUOTE_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Call Now
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[82vh] min-h-[560px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1800&q=80"
          alt="Freshly cut green lawn"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(20,35,26,0.35) 0%, rgba(20,35,26,0.55) 50%, rgba(20,35,26,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/70">
            Family-owned &middot; South Tampa
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            30 years of{" "}
            <span className="italic font-normal" style={{ color: "#8FCE9B" }}>South Tampa lawns.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            The same family crew, week after week — mowing, edging, and trimming yards
            from Ballast Point to Westshore since before some of those hedges were planted.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Get a Free Quote
            </a>
            <a
              href={QUOTE_URL}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="tracking-wider" style={{ color: "#8FCE9B" }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews</span>
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ───────────────────────────────────────────────────── */}
      <section className="py-10 px-5 md:px-8 border-b" style={{ borderColor: RULE, background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-display text-3xl font-bold" style={{ color: ACCENT2 }}>30+ yrs</p>
            <p className="text-sm text-gray-500 mt-1">Cutting South Tampa yards</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold" style={{ color: ACCENT2 }}>★ {AVG_RATING}</p>
            <p className="text-sm text-gray-500 mt-1">{REVIEW_COUNT} Google reviews</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold" style={{ color: ACCENT2 }}>Same crew</p>
            <p className="text-sm text-gray-500 mt-1">Family-run, every visit</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES & PRICING ────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Services &amp; Pricing
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Everything a Florida yard needs
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              St. Augustine grass grows year-round here — so do we. Prices vary by lot size;
              every quote is free.
            </p>
          </div>

          <div className="space-y-0 border-t" style={{ borderColor: RULE }}>
            {services.map((svc) => (
              <div
                key={svc.name}
                className="grid grid-cols-1 md:grid-cols-[1fr,auto,auto] gap-4 md:gap-8 py-6 border-b items-center hover:bg-white transition-colors duration-150"
                style={{ borderColor: RULE }}
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-1">{svc.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="text-sm text-gray-400 md:text-right whitespace-nowrap">
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">Schedule</span>
                  {svc.duration}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-display font-semibold whitespace-nowrap" style={{ color: ACCENT2 }}>
                    {svc.price}
                  </span>
                  <a
                    href="#quote"
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap transition hover:brightness-110"
                    style={{ background: ACCENT }}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ──────────────────────────────────────────────────── */}
      <section id="area" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Service Area
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              South Tampa, street by street
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Based in 33611. If your yard is between the bay and the boulevard,
              there is a good chance we already cut a lawn on your block.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {areas.map((area) => (
              <div
                key={area.name}
                className="rounded-lg border p-6 text-center transition-colors hover:bg-[#F2F7F0]"
                style={{ borderColor: RULE }}
              >
                <p className="text-2xl mb-2" style={{ color: ACCENT }}>&#10003;</p>
                <h3 className="font-display text-xl font-semibold mb-1">{area.name}</h3>
                <p className="text-xs text-gray-500">{area.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            Not on the list? Call us — we cover most of South Tampa and nearby.
          </p>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Family-Owned
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Three decades, one standard
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              MasterCut started with one truck, one trailer, and a promise: show up when we
              say we will and leave every yard sharper than we found it. Thirty-plus years
              later, it is still family-run — and some of our first South Tampa customers
              are still on the weekly route.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Florida lawns are their own trade. St. Augustine grass, sandy soil, summer
              growth that never quits — we have spent 30 years learning exactly how to keep
              it green, edged, and healthy year-round.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1734303023491-db8037a21f09?w=900&q=80"
              alt="Lawn crew mowing and detailing a residential yard"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── WORK GALLERY ──────────────────────────────────────────────────── */}
      <section id="work" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Lawns we are proud of
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Clean lines, crisp edges, healthy turf — the kind of work that gets
              noticed from the sidewalk.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((photo) => (
              <figure key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <figcaption
                  className="absolute bottom-0 inset-x-0 px-3 py-2 text-xs font-medium text-white"
                  style={{ background: "linear-gradient(0deg, rgba(20,35,26,0.75) 0%, rgba(20,35,26,0) 100%)" }}
                >
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#8FCE9B" }}>
              Loved by neighbors
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">Based on {REVIEW_COUNT} reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: "#8FCE9B" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE REQUEST ─────────────────────────────────────────────────── */}
      {/* Decorative form — no action, no onSubmit, button type="button". */}
      <section id="quote" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Free Quote
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get your yard on the route
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Tell us about your yard and we will call back with a straight price —
              usually the same day. Prefer to talk? We answer the phone starting at 5 AM.
            </p>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Hours</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr><td className="pr-8 py-0.5">Mon — Fri</td><td>5 AM – 9 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Saturday</td><td>9 AM – 2 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Sunday</td><td>Closed</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Call or text</h4>
                <a href={QUOTE_URL} className="text-lg font-semibold hover:opacity-70 transition-opacity" style={{ color: ACCENT2 }}>
                  {PHONE_FORMATTED}
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={QUOTE_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Call for a Free Quote
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] hover:bg-gray-50 transition-colors"
                  style={{ borderColor: INK, color: INK }}
                >
                  Find Us on Google
                </a>
              </div>
            </div>
          </div>

          <form className="rounded-lg border p-6 md:p-8 space-y-4" style={{ borderColor: RULE, background: PAPER }}>
            <h3 className="font-display text-2xl font-semibold mb-2">Request a quote</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block text-sm">
                <span className="font-medium text-gray-700">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-md border px-3 py-2.5 text-sm bg-white focus:outline-none"
                  style={{ borderColor: RULE }}
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-gray-700">Phone</span>
                <input
                  type="tel"
                  placeholder="(813) 555-0100"
                  className="mt-1 w-full rounded-md border px-3 py-2.5 text-sm bg-white focus:outline-none"
                  style={{ borderColor: RULE }}
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-medium text-gray-700">Street address or neighborhood</span>
              <input
                type="text"
                placeholder="e.g. Ballast Point, 33611"
                className="mt-1 w-full rounded-md border px-3 py-2.5 text-sm bg-white focus:outline-none"
                style={{ borderColor: RULE }}
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-gray-700">What do you need?</span>
              <select
                defaultValue=""
                className="mt-1 w-full rounded-md border px-3 py-2.5 text-sm bg-white text-gray-700 focus:outline-none"
                style={{ borderColor: RULE }}
              >
                <option value="" disabled>Choose a service</option>
                <option>Weekly mowing</option>
                <option>Bi-weekly mowing</option>
                <option>Hedge &amp; shrub trimming</option>
                <option>Seasonal cleanup</option>
                <option>Mulch installation</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="font-medium text-gray-700">Anything we should know?</span>
              <textarea
                rows={3}
                placeholder="Corner lot, big oak out front, gate code, etc."
                className="mt-1 w-full rounded-md border px-3 py-2.5 text-sm bg-white focus:outline-none"
                style={{ borderColor: RULE }}
              />
            </label>
            <button
              type="button"
              className="w-full px-6 py-3.5 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Request My Free Quote
            </button>
            <p className="text-xs text-gray-400 text-center">
              We call back the same business day. No spam, ever.
            </p>
          </form>
        </div>
      </section>

      {/* ── FINAL CTA STRIP ───────────────────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8 text-center text-white" style={{ background: ACCENT2 }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Your neighbors already know us.
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Join the South Tampa yards that get cut right, every week, by the same family crew.
        </p>
        <a
          href={QUOTE_URL}
          className="inline-block px-8 py-4 rounded-full font-semibold transition hover:brightness-110"
          style={{ background: "#8FCE9B", color: ACCENT2 }}
        >
          Call {PHONE_FORMATTED}
        </a>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.6)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">{BUSINESS_NAME}</p>
            <p>{TAGLINE}. Family-owned &amp; operated.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Service Area</h4>
            <p>
              South Tampa, FL 33611<br />
              Ballast Point &middot; Bayshore Beautiful &middot; Palma Ceia<br />
              Sunset Park &middot; Westshore
            </p>
            <p className="mt-2">
              <a href={QUOTE_URL} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href={`https://facebook.com/${FACEBOOK_HANDLE}`} className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} {BUSINESS_NAME} &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
