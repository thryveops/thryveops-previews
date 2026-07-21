import Image from "next/image";
import Link from "next/link";

// ─── PROSPECT DATA — Albert & Ellis Landscaping & Tree Service ────────────────
// Fonts (Fraunces + Inter) are loaded globally via layout.tsx — no import needed.

// Business identity
const BUSINESS_NAME    = "Albert & Ellis";
const BUSINESS_FULL    = "Albert & Ellis Landscaping & Tree Service";
const TAGLINE          = "Tree Care & Landscaping Across Tampa Bay";
const NEIGHBORHOOD     = "Tampa Bay, FL";
const YEAR_FOUNDED     = "2013";

// Brand palette — pulled from their live site (Duda CSS vars):
// green rgba(27,115,64) = #1B7340, gold rgba(171,119,31) = #AB771F
const PAPER    = "#FAFAF7";   // page background
const INK      = "#14251B";   // body text + dark section backgrounds
const ACCENT   = "#1B7340";   // their brand green
const ACCENT2  = "#AB771F";   // their brand gold
const RULE     = "#DCE7DE";   // border / divider color

// Contact & links
const PHONE_FORMATTED  = "(813) 215-1436";
const PHONE_RAW        = "8132151436";
const EMAIL            = "info@albertellislandscaping.com";
const ADDRESS_LINE_1   = "Serving 6 counties across Tampa Bay";
const ADDRESS_LINE_2   = "Based in Tampa, FL 33602";
const BOOKING_URL      = `tel:${PHONE_RAW}`;   // call-to-book — free estimates by phone
const DIRECTIONS_URL   = "https://www.google.com/maps/place/Albert+%26+Ellis+Landscaping+%26+Tree+Service/@27.9446387,-82.4577838,15z";
const INSTAGRAM_HANDLE = "albertandellis";
const FACEBOOK_HANDLE  = "AlbertEllisLandscaping";
const AVG_RATING       = "4.9";
const REVIEW_COUNT     = "387";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_FULL} — ${TAGLINE}`,
  description:
    "Family-owned tree removal, trimming, stump grinding, landscape design, sod, and hardscaping serving Hillsborough, Pinellas, Pasco, Hernando, Polk, and Manatee counties. 24/7 emergency storm response. Free estimates: (813) 215-1436.",
};

// ─── SERVICES — real services + honest starting ranges ─────────────────────────
const services = [
  {
    name:     "Tree Removal",
    desc:     "Safe removal of any size tree — tight backyards, over-structure, crane-assisted when needed. Licensed, insured, and cleaned up like we were never there.",
    duration: "",
    price:    "From $450",
    popular:  true,
  },
  {
    name:     "Tree Trimming & Pruning",
    desc:     "Canopy shaping, palm trimming, and structural pruning that keeps oaks and Washingtonias healthy through Florida storm season.",
    duration: "",
    price:    "From $250",
    popular:  false,
  },
  {
    name:     "Stump Grinding",
    desc:     "Full grind below grade so you can replant, re-sod, or build right over it. Debris hauled away.",
    duration: "",
    price:    "From $150",
    popular:  false,
  },
  {
    name:     "24/7 Emergency Storm Response",
    desc:     "Tree on the roof at 2 a.m.? We answer. Rapid-response crews across all six counties, before and after every storm.",
    duration: "24/7",
    price:    "Free assessment",
    popular:  true,
  },
  {
    name:     "Landscape Design & Installation",
    desc:     "Florida-friendly design and full installation — plantings, beds, mulch, and irrigation-ready layouts built for our climate.",
    duration: "",
    price:    "Custom quote",
    popular:  false,
  },
  {
    name:     "Sod Installation",
    desc:     "St. Augustine, Zoysia, and Bahia sod — graded, laid, and rolled for an instant established lawn.",
    duration: "",
    price:    "From $1.85/sq ft",
    popular:  false,
  },
  {
    name:     "Hardscaping & Pavers",
    desc:     "Paver patios, walkways, and retaining walls that turn cleared space into finished outdoor living.",
    duration: "",
    price:    "Custom quote",
    popular:  false,
  },
];

// ─── SERVICE AREA — the 6-county footprint is the location ─────────────────────
const counties = [
  { name: "Hillsborough", note: "Tampa, Brandon, Plant City — our home base" },
  { name: "Pinellas",     note: "St. Petersburg, Clearwater, Largo" },
  { name: "Pasco",        note: "Wesley Chapel, New Port Richey, Hudson" },
  { name: "Hernando",     note: "Spring Hill, Brooksville" },
  { name: "Polk",         note: "Lakeland, Winter Haven" },
  { name: "Manatee",      note: "Bradenton, Palmetto, Parrish" },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
const reviews = [
  {
    text:   "They were at my house 20 minutes after I called about a tree down in a storm. The whole removal was done in six hours.",
    author: "Adam F. · Google review",
  },
  {
    text:   "The crew trimmed our Washingtonia palms perfectly, and theirs was the best quote we received out of four companies.",
    author: "Dee · Google review",
  },
  {
    text:   "Professional, polite, and clearly experienced. They took down two big oaks near the house and left the yard spotless.",
    author: "Reece D. · Google review",
  },
];

// ─── IMAGES — landscaping / tree subjects, verified via check-mockup-images.sh ─
const igPhotos = [
  "https://images.unsplash.com/photo-1781297770540-8c9b5af40b44?w=400&q=80",
  "https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?w=400&q=80",
  "https://images.unsplash.com/photo-1779888793240-898dec4b9c08?w=400&q=80",
  "https://images.unsplash.com/photo-1763914767554-4a1391b16747?w=400&q=80",
  "https://images.unsplash.com/photo-1526392587392-d1627b6c134a?w=400&q=80",
  "https://images.unsplash.com/photo-1458245201577-fc8a130b8829?w=400&q=80",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
// SERVER COMPONENT — no "use client", no event handlers, Tailwind hover: only.
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(250,250,247,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT }}>
            {BUSINESS_NAME}
            <span className="hidden sm:inline text-xs font-sans font-medium tracking-widest uppercase ml-2" style={{ color: ACCENT2 }}>
              Landscaping &amp; Tree Service
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#area"     className="hover:opacity-60 transition-opacity">Service Area</a>
            <a href="#story"    className="hover:opacity-60 transition-opacity">About</a>
            <a href="#visit"    className="hover:opacity-60 transition-opacity">Contact</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Free Estimate
            </a>
          </div>
          <a
            href={BOOKING_URL}
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
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1800&q=80"
          alt="Beautifully landscaped Florida home"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(20,37,27,0.35) 0%, rgba(20,37,27,0.55) 50%, rgba(20,37,27,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/70">
            {NEIGHBORHOOD} &middot; Family-Owned Since {YEAR_FOUNDED}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Trees handled.{" "}
            <span className="italic font-normal" style={{ color: "#7CC79A" }}>Yards transformed.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            From emergency tree removal to full landscape installs — one family-owned crew serving six counties across Tampa Bay, 24 hours a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Get a Free Estimate
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <span className="tracking-wider" style={{ color: ACCENT2 }}>★★★★★</span>
              {AVG_RATING} · {REVIEW_COUNT} Google reviews
            </span>
            <span>BBB A+ Accredited</span>
            <span>Licensed &amp; Insured</span>
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
              Tree work and landscaping, under one roof
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Honest starting prices. Free, no-obligation estimates on every job.
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
                  <h3 className="font-display text-2xl font-semibold mb-1">
                    {svc.name}
                    {svc.popular && (
                      <span
                        className="ml-3 align-middle text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white"
                        style={{ background: ACCENT2 }}
                      >
                        Most Requested
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                </div>
                {svc.duration && (
                  <div className="text-sm text-gray-400 md:text-right whitespace-nowrap">
                    <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">Availability</span>
                    {svc.duration}
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <span className="text-xl md:text-2xl font-display font-semibold whitespace-nowrap" style={{ color: ACCENT }}>
                    {svc.price}
                  </span>
                  <a
                    href={BOOKING_URL}
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

      {/* ── SERVICE AREA — 6-county footprint ─────────────────────────────── */}
      <section id="area" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Service Area
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Six counties. One crew you can trust.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We are a service-area business — our trucks come to you, anywhere in the greater Tampa Bay region.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {counties.map((c) => (
              <div
                key={c.name}
                className="p-6 rounded-lg border transition-colors hover:bg-[#F1F7F2]"
                style={{ borderColor: RULE }}
              >
                <h3 className="font-display text-2xl font-semibold mb-1" style={{ color: ACCENT }}>
                  {c.name} County
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">
            Storm emergency outside these areas? Call us anyway — <a href={`tel:${PHONE_RAW}`} className="font-semibold hover:underline" style={{ color: ACCENT }}>{PHONE_FORMATTED}</a>, 24/7.
          </p>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Family-owned. Storm-tested. 13+ years in Tampa Bay.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Albert &amp; Ellis is a certified minority- and woman-owned business that has spent more than a decade taking care of Tampa Bay yards — from routine palm trimming to the 2 a.m. calls after a hurricane rolls through.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              BBB A+ accredited, fully licensed and insured, and trusted on residential, commercial, and municipal projects across six counties. When we say 24/7, our reviews prove we mean it.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
              alt="Hands planting in a garden bed"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — paraphrased from quotes shown on their current site; replace with verbatim GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#7CC79A" }}>
              Loved across Tampa Bay
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">Based on {REVIEW_COUNT} reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: ACCENT2 }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT / CONTACT ───────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Get your free estimate
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Service Area</h4>
                <p className="text-gray-700">{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Hours</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr><td className="pr-8 py-0.5">Every day</td><td>24 hours</td></tr>
                    <tr><td className="pr-8 py-0.5">Storm emergencies</td><td>Rapid response, 24/7</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Reach us</h4>
                <p className="text-gray-700">
                  <a href={`tel:${PHONE_RAW}`} className="hover:opacity-70 transition-opacity" style={{ color: INK }}>
                    {PHONE_FORMATTED}
                  </a>
                  <br />
                  <a href={`mailto:${EMAIL}`} className="hover:opacity-70 transition-opacity" style={{ color: INK }}>
                    {EMAIL}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={BOOKING_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Call for a Free Estimate
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

          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1717964291724-9fa92f4a6fb8?w=900&q=80"
              alt="Arborist climbing a tall palm for trimming"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@{INSTAGRAM_HANDLE}</p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-sm font-medium hover:underline transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.6)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">{BUSINESS_FULL}</p>
            <p>{TAGLINE} &middot; Licensed &amp; Insured &middot; BBB A+</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p>
              {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href={`https://facebook.com/${FACEBOOK_HANDLE}`}   className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} {BUSINESS_FULL} &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
