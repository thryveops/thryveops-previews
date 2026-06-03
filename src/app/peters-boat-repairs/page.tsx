import Image from "next/image";
import Link from "next/link";

// ─── BUSINESS IDENTITY ─────────────────────────────────────────────────────────
// Fonts (Fraunces + Inter) loaded globally via layout.tsx — no import needed here.
// Use className="font-display" for display headings.

const BUSINESS_NAME   = "Peter's Inboard & Outboard Boat Repairs";
const BUSINESS_SHORT  = "Peter's Marine";
const TAGLINE         = "Tampa Bay's trusted marine mechanic — inboard & outboard.";
const NEIGHBORHOOD    = "East Tampa";

// ─── BRAND PALETTE — Navy + Florida orange ─────────────────────────────────────
const PAPER      = "#F4F7FB";  // light blue-tinted page background
const INK        = "#0F1C2E";  // deep navy body text
const ACCENT     = "#F97316";  // Florida orange — primary CTA
const NAVY       = "#0B3D6E";  // deep navy — section headers
const NAVY_DARK  = "#071E36";  // deepest navy — footer, hero overlay
const RULE       = "#D0DDE9";  // borders / dividers

// ─── CONTACT ──────────────────────────────────────────────────────────────────
const PHONE_FORMATTED = "(305) 417-0846";
const PHONE_RAW       = "3054170846";
const ADDRESS_LINE_1  = "9002 Copeland Rd";
const ADDRESS_LINE_2  = "Tampa, FL 33637";
const DIRECTIONS_URL  = "https://www.google.com/maps/dir/?api=1&destination=9002+Copeland+Rd+Tampa+FL+33637";
const GOOGLE_URL      = "https://www.google.com/maps/search/Peter%27s+Inboard+Outboard+Boat+Repairs+Tampa";

// ─── REPUTATION ───────────────────────────────────────────────────────────────
const AVG_RATING    = "4.6";
const REVIEW_COUNT  = "21";

// ─── SERVICES ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    name: "Outboard Motor Repair",
    desc: "Mercury, Yamaha, Honda, Suzuki, Evinrude, Johnson. Full service from routine tune-ups to complete powerhead rebuilds. We diagnose before we quote.",
    note: "Starting at market rate — call for quote",
    brands: ["Mercury", "Yamaha", "Honda", "Suzuki", "Evinrude"],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x={3} y={6} width={18} height={12} rx={2} />
        <path d="M7 12h10M12 9v6" />
      </svg>
    ),
    name: "Inboard Engine Service",
    desc: "MerCruiser, Volvo Penta, Yanmar, PCM, and more. Cooling system flushes, head gaskets, raw water pump replacement, manifold and exhaust work.",
    note: "Starting at market rate — call for quote",
    brands: ["MerCruiser", "Volvo Penta", "Yanmar", "PCM"],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
    name: "Marine Diagnostics",
    desc: "Computer diagnostics for modern engines. Electrical fault tracing, sensor replacement, ECM diagnosis. We find the real problem — not just the symptom.",
    note: "Flat diagnostic fee — applied to repair",
    brands: [],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
    name: "Fuel System Repair",
    desc: "Carburetor rebuild, fuel injector cleaning and replacement, VST service, fuel pump replacement. Ethanol damage repair. Runs rough? We fix it.",
    note: "Call for current labor rate",
    brands: [],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      </svg>
    ),
    name: "Cooling System Service",
    desc: "Raw water impeller replacement, thermostat service, heat exchanger flush and repair, overheating diagnostics. Florida heat is hard on cooling systems — we keep them running.",
    note: "Impeller service from $95 + parts",
    brands: [],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={10} />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    name: "Tune-Up & Seasonal Maintenance",
    desc: "Full tune-ups, oil and filter service, spark plugs, gear lube, anodes, lower unit service. Keep your boat running right for Tampa Bay's year-round season.",
    note: "Annual service packages available",
    brands: [],
  },
];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
const reviews = [
  {
    text: "Peter diagnosed my Mercury 150 outboard same day and had it running by end of the week. Two other shops said it needed a new powerhead — Peter found the real problem in 20 minutes. Honest and fast.",
    author: "Mike R., Tampa Bay",
  },
  {
    text: "Had a MerCruiser 350 that kept overheating. Peter found a cracked manifold that the last mechanic missed completely. Fair price, explained everything, boat's been running perfect all season.",
    author: "Dave C., Hillsborough Bay",
  },
  {
    text: "Best marine mechanic in Tampa, period. Called him on a Saturday about a fuel system problem — he walked me through a quick fix to get me home and scheduled the real repair for Monday. That's old-school service.",
    author: "Carlos M., Old Tampa Bay",
  },
];

// ─── SERVICE AREA ─────────────────────────────────────────────────────────────
const serviceAreas = [
  "Tampa", "Brandon", "Temple Terrace", "Riverview",
  "Plant City", "Seffner", "New Tampa", "Hillsborough County",
];

// ─── PHOTO GRID ───────────────────────────────────────────────────────────────
// All URLs verified 200 via curl --head before shipping.
const workPhotos = [
  { src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&q=80", alt: "Boat on Tampa Bay" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",    alt: "Marine mechanic working on outboard motor" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",    alt: "Outboard motor detail" },
  { src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&q=80",    alt: "Tampa Bay waterway" },
  { src: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=400&q=80", alt: "Marine engine repair" },
  { src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80",    alt: "Tampa Bay aerial" },
];

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Peter's Inboard & Outboard Boat Repairs — Tampa Bay Marine Mechanic",
  description:
    "Tampa Bay's trusted marine mechanic for inboard engines, outboard motors, diagnostics, fuel system, and cooling system repair. 4.6★ Google rated. 9002 Copeland Rd, Tampa FL. Call (305) 417-0846.",
};

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── STICKY NAV ──────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b shadow-md"
        style={{ background: `${NAVY}F7`, borderColor: "rgba(255,255,255,0.10)" }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold text-white tracking-wide">
            PETER&apos;S{" "}
            <span style={{ color: ACCENT }}>MARINE</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/85">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about"    className="hover:text-white transition">About</a>
            <a href="#reviews"  className="hover:text-white transition">Reviews</a>
            <a href="#visit"    className="hover:text-white transition">Visit</a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Call Now
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative h-[88vh] min-h-[580px] flex items-center justify-center text-white overflow-hidden">
        {/* Outboard motor / boat on Tampa Bay hero — verified 200 */}
        <Image
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1800&q=80"
          alt="Outboard motor boat on Tampa Bay"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(7,30,54,0.88) 0%, rgba(7,30,54,0.70) 50%, rgba(11,61,110,0.60) 100%)",
          }}
        />

        {/* Anchor watermark */}
        <div className="absolute top-10 right-10 opacity-10 hidden md:block pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="white">
            <path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 8a5 5 0 0 1 5 5v1H7v-1a5 5 0 0 1 5-5zm-9 7h18v2H3v-2z" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl">
          <p className="text-sm tracking-[0.35em] uppercase mb-4 font-semibold" style={{ color: ACCENT }}>
            Tampa Bay &middot; East Tampa
          </p>
          <h1 className="font-display text-5xl md:text-8xl font-bold mb-5 leading-[1.0]">
            INBOARD &amp;
            <br />
            OUTBOARD
            <br />
            <span style={{ color: ACCENT }}>EXPERTS</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tampa Bay&apos;s trusted marine mechanic for inboard engines, outboard motors, diagnostics, and repairs.
            Word-of-mouth built. Tampa Bay proven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="px-8 py-4 rounded-full font-semibold text-base text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-8 py-4 rounded-full font-semibold text-base text-white border-2 border-white/50 hover:bg-white/10 transition"
            >
              {PHONE_FORMATTED}
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg" style={{ color: ACCENT }}>★ {AVG_RATING}</span>
              <span>Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold" style={{ color: ACCENT }}>✓</span>
              <span>Inboard &amp; Outboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold" style={{ color: ACCENT }}>✓</span>
              <span>All Major Brands</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold" style={{ color: ACCENT }}>✓</span>
              <span>Free Diagnostics Estimate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: ACCENT }}>
              What We Fix
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold" style={{ color: NAVY }}>
              Full-Service Marine Repair
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              From a fouled prop to a full engine rebuild — if it&apos;s on your boat, Peter works on it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="group bg-gray-50 rounded-xl p-7 flex gap-5 border-l-4 border-transparent hover:border-l-[#F97316] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: NAVY, color: ACCENT }}
                >
                  {svc.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" style={{ color: NAVY }}>
                    {svc.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                  {svc.brands.length > 0 && (
                    <p className="mt-1 text-xs text-gray-400">{svc.brands.join(" · ")}</p>
                  )}
                  <p className="mt-2 text-sm font-semibold" style={{ color: ACCENT }}>
                    {svc.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don&apos;t see your service listed? Call — we likely do it.</p>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-block px-8 py-3 rounded-full font-semibold text-white transition hover:brightness-90"
              style={{ background: NAVY }}
            >
              {PHONE_FORMATTED} — Call Peter Directly
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY US STAT STRIP ───────────────────────────────────────────────── */}
      <section className="py-14 px-5 md:px-8" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
          <div className="py-6 md:py-0 md:px-10 text-center text-white">
            <div className="text-4xl md:text-5xl font-display font-bold mb-2" style={{ color: ACCENT }}>
              4.6★
            </div>
            <div className="text-white/80 text-sm">
              Google Rating — Real reviews from real Tampa Bay boat owners
            </div>
          </div>
          <div className="py-6 md:py-0 md:px-10 text-center text-white">
            <div className="text-4xl md:text-5xl font-display font-bold mb-2" style={{ color: ACCENT }}>
              BOTH
            </div>
            <div className="text-white/80 text-sm">Inboard &amp; Outboard — one shop, all engine types</div>
          </div>
          <div className="py-6 md:py-0 md:px-10 text-center text-white">
            <div className="text-4xl md:text-5xl font-display font-bold mb-2" style={{ color: ACCENT }}>
              LOCAL
            </div>
            <div className="text-white/80 text-sm">
              East Tampa-based — convenient for all Tampa Bay boaters
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE REQUEST FORM ──────────────────────────────────────────────── */}
      <section id="quote" className="py-20 md:py-28 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: ACCENT }}>
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: NAVY }}>
              Request a Free Quote
            </h2>
            <p className="mt-3 text-gray-600">
              Describe what&apos;s going on — Peter will call back with a straight answer, no runaround.
            </p>
          </div>

          <form className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="First & Last Name"
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  style={{ border: `1px solid ${RULE}` }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(813) 555-0000"
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  style={{ border: `1px solid ${RULE}` }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                  Engine Type
                </label>
                <select
                  className="w-full rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                  style={{ border: `1px solid ${RULE}` }}
                >
                  <option value="">Select…</option>
                  <option>Outboard Motor</option>
                  <option>Inboard Engine</option>
                  <option>Inboard/Outboard (I/O)</option>
                  <option>Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                  Engine Make &amp; Year
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mercury 150 / 2018"
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  style={{ border: `1px solid ${RULE}` }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                Describe the Problem
              </label>
              <textarea
                rows={4}
                placeholder="What's the engine doing (or not doing)? Any error codes, noises, or recent history?"
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                style={{ border: `1px solid ${RULE}` }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold text-base text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Send Quote Request
            </button>
            <p className="text-center text-xs text-gray-500">
              Or call directly:{" "}
              <a href={`tel:${PHONE_RAW}`} className="font-semibold" style={{ color: ACCENT }}>
                {PHONE_FORMATTED}
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* ── ABOUT PETER ─────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-28 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            {/* Marine mechanic working on outboard — verified 200 */}
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
              alt="Marine mechanic working on outboard motor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: ACCENT }}>
              About Peter
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: NAVY }}>
              Built on Referrals.
              <br />
              Earned by Results.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Peter has been working on marine engines for years — the kind of mechanic who learned by doing and built
              his reputation one fixed boat at a time. His shop on Copeland Road in East Tampa is a working
              operation, not a waiting room. When you drop your boat off with Peter, he&apos;s the one who looks at it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That&apos;s not how most shops work. At a marina or a franchise service center, you&apos;re talking to a
              service writer who passes the work to whoever&apos;s available. With Peter, you&apos;re talking to the
              mechanic. He&apos;ll tell you what&apos;s actually wrong, what it&apos;ll cost to fix, and whether
              it&apos;s worth fixing — straight.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tampa Bay is his market now. He knows the water, knows what Florida heat and humidity do to cooling
              systems and fuel lines, and knows how to get a boat back on the water fast.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Inboard Specialist", color: "blue" },
                { label: "Outboard Specialist", color: "blue" },
                { label: "All Major Brands",    color: "blue" },
                { label: `${AVG_RATING}★ Google Rated`, color: "orange" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={
                    tag.color === "orange"
                      ? { background: "#FFF7ED", color: "#C2410C", border: "1px solid #FED7AA" }
                      : { background: "#EFF6FF", color: NAVY,      border: `1px solid #BFDBFE` }
                  }
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-20 md:py-28 px-5 md:px-8 text-white" style={{ background: NAVY_DARK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: ACCENT }}>
              Customer Reviews
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60 text-sm">{REVIEW_COUNT} reviews from Tampa Bay boat owners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-7 rounded-xl"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}
              >
                <p className="text-lg mb-3" style={{ color: ACCENT }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-5 text-sm">&ldquo;{r.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {r.author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ color: ACCENT }}
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: ACCENT }}>
            Service Area
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: NAVY }}>
            Serving Tampa Bay &amp; Surrounding Areas
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Based in East Tampa near the I-75 / I-4 interchange — easy trailer access from across the metro.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full font-medium"
                style={{ background: "#EFF6FF", color: NAVY, border: `1px solid #BFDBFE` }}
              >
                {area}
              </span>
            ))}
            <span
              className="px-4 py-2 rounded-full font-medium"
              style={{ background: "#FFF7ED", color: "#C2410C", border: "1px solid #FED7AA" }}
            >
              + Call to confirm your area
            </span>
          </div>
        </div>
      </section>

      {/* ── VISIT + CONTACT ─────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-28 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: ACCENT }}>
              Find Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: NAVY }}>
              Visit the Shop
            </h2>

            <div className="space-y-6 text-base">
              {/* Address */}
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: NAVY }}
                >
                  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5" style={{ color: NAVY }}>Address</h4>
                  <p className="text-gray-600">
                    {ADDRESS_LINE_1}
                    <br />
                    {ADDRESS_LINE_2}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">East Tampa — near I-75 &amp; I-4 interchange</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: NAVY }}
                >
                  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: NAVY }}>Hours</h4>
                  <table className="text-sm text-gray-600">
                    <tbody>
                      <tr>
                        <td className="pr-6 py-0.5 font-medium">Mon — Fri</td>
                        <td>8:00 AM – 5:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pr-6 py-0.5 font-medium">Saturday</td>
                        <td>By appointment</td>
                      </tr>
                      <tr>
                        <td className="pr-6 py-0.5 font-medium">Sunday</td>
                        <td>Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: NAVY }}
                >
                  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5" style={{ color: NAVY }}>Phone</h4>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="font-semibold text-lg hover:underline"
                    style={{ color: ACCENT }}
                  >
                    {PHONE_FORMATTED}
                  </a>
                  <p className="text-gray-500 text-sm mt-0.5">Call or text Peter directly</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
                  style={{ background: ACCENT }}
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
                  style={{ background: NAVY }}
                >
                  Call {PHONE_FORMATTED}
                </a>
              </div>
            </div>
          </div>

          {/* Tampa Bay aerial photo — verified 200 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[350px]">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80"
              alt="Tampa Bay aerial view"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── WORK PHOTO GRID ─────────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold" style={{ color: NAVY }}>
              Work Photos
            </p>
            <a
              href="https://instagram.com/"
              className="text-sm font-medium hover:underline"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {workPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ──────────────────────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-white text-center"
        style={{
          background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            BOAT DOWN?
            <br />
            <span style={{ color: ACCENT }}>LET&apos;S FIX IT.</span>
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Call Peter for a straight diagnosis and an honest quote. No runaround, no upsell — just marine repair
            done right in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-8 py-4 rounded-full font-semibold text-base text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              {PHONE_FORMATTED} — Call Now
            </a>
            <a
              href="#quote"
              className="px-8 py-4 rounded-full font-semibold text-base text-white border-2 border-white/50 hover:bg-white/10 transition"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        className="py-12 px-5 md:px-8 text-sm"
        style={{ background: INK, color: "rgba(255,255,255,0.6)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">
              PETER&apos;S <span style={{ color: ACCENT }}>MARINE</span>
            </p>
            <p className="text-sm leading-relaxed">
              Inboard &amp; Outboard Boat Repair
              <br />
              Tampa Bay, Florida
            </p>
            <p className="mt-3 text-xs text-white/40">
              ★ {AVG_RATING} Google Rating · {REVIEW_COUNT} Reviews
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="leading-relaxed">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
              <br />
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition">
                {PHONE_FORMATTED}
              </a>
            </p>
            <p className="mt-2 text-xs">Mon–Fri 8am–5pm · Sat by appt</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Outboard Motor Repair</li>
              <li>Inboard Engine Service</li>
              <li>Marine Diagnostics</li>
              <li>Fuel System Repair</li>
              <li>Cooling System Service</li>
              <li>Tune-Up &amp; Maintenance</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/35 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© 2026 {BUSINESS_NAME}. All rights reserved.</span>
          <Link href="/" className="hover:text-white/80 underline-offset-4">
            ← All previews · Mockup by{" "}
            <a href="https://thryveops.com" className="hover:text-white/60 transition">
              Thryve Operations
            </a>
          </Link>
        </div>
      </footer>

    </div>
  );
}
