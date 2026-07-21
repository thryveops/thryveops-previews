import Image from "next/image";
import Link from "next/link";

// ─── STAY DRY ROOFING OF TAMPA BAY — concept mockup by Thryve Operations ──────
// Fonts (Fraunces + Inter) are loaded globally via layout.tsx — no import needed.

// Business identity
const BUSINESS_NAME    = "Stay Dry Roofing";
const TAGLINE          = "Tampa Bay's family roofing company since 1987";
const NEIGHBORHOOD     = "Seminole Heights, Tampa";
const YEAR_FOUNDED     = "1987";

// Brand palette — charcoal navy + Stay Dry amber (#FFB400 from staydryfl.com)
const PAPER    = "#F8F7F3";   // page background
const INK      = "#16212E";   // body text + dark section backgrounds
const ACCENT   = "#FFB400";   // Stay Dry brand amber — dark text on amber buttons
const ACCENT2  = "#1F2937";   // secondary charcoal
const RULE     = "#E6E0D2";   // border / divider color

// Contact & links
const PHONE_FORMATTED  = "(813) 232-9430";
const PHONE_RAW        = "8132329430";
const ADDRESS_LINE_1   = "4700 N Florida Ave";
const ADDRESS_LINE_2   = "Tampa, FL 33603";
const BOOKING_URL      = `tel:${PHONE_RAW}`; // call-to-book — free estimates by phone
const DIRECTIONS_URL   = "https://maps.google.com/?q=4700+N+Florida+Ave,+Tampa,+FL+33603";
const INSTAGRAM_HANDLE = "stay_dry_roofing";
const FACEBOOK_HANDLE  = "StayDryRoofing";
const AVG_RATING       = "4.5";
const REVIEW_COUNT     = "200";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE}`,
  description:
    "GAF Master Elite roofing contractor in Tampa, FL. Founded 1987 by Dennis Flores, led by his son Daniel today. Roof replacement, repair, storm damage restoration, and free inspections across Tampa Bay.",
};

// ─── SERVICES — real Stay Dry service lines from staydryfl.com ────────────────
const services = [
  {
    name:     "Roof Replacement",
    desc:     "Architectural shingle, metal, and flat roof systems — backed by the GAF Golden Pledge warranty covering material defects for up to 50 years.",
    duration: "2–3 days",
    price:    "Free estimate",
  },
  {
    name:     "Roof Repair",
    desc:     "Leaks, lifted or missing shingles, flashing, and fascia — diagnosed honestly. If it is a minor fix, we tell you so.",
    duration: "Same week",
    price:    "Free estimate",
  },
  {
    name:     "Storm Damage Restoration",
    desc:     "Hurricane and wind damage response with full photo documentation to support your insurance claim from inspection to final nail.",
    duration: "Priority dispatch",
    price:    "Insurance assisted",
  },
  {
    name:     "Roof Inspection",
    desc:     "A thorough top-to-deck inspection for new homeowners, real estate closings, and insurance requirements — with a written condition report.",
    duration: "About 60 min",
    price:    "Free",
  },
  {
    name:     "Commercial Roofing",
    desc:     "Flat deck and shingle systems for Tampa Bay businesses — engineered for Florida sun, rain, and wind, with minimal disruption to operations.",
    duration: "Custom scope",
    price:    "Free estimate",
  },
];

// ─── TEAM — two generations of the Flores family + the estimator customers name ─
// No stock-photo faces for real people — monogram cards instead.
const team = [
  {
    name:     "Dennis Flores",
    role:     "Founder · Est. 1987",
    bio:      "A longtime Tampa resident who started Stay Dry in Hillsborough County with a small crew and a simple promise: treat every roof like it is over your own family.",
    initials: "DF",
    cta:      "Read our story",
  },
  {
    name:     "Daniel Flores",
    role:     "Owner & President",
    bio:      "Second-generation roofer with a business administration degree and his own Florida state roofing license. Daniel has led the company since 2019 — and still answers the phone.",
    initials: "DF",
    cta:      "Call Daniel's team",
  },
  {
    name:     "Yoandy",
    role:     "Lead Estimator",
    bio:      "The name that shows up in review after review — punctual, honest, and known for arriving with the company's license and insurance in hand before you even ask.",
    initials: "Y",
    cta:      "Book a free estimate",
  },
];

// ─── REVIEWS — excerpts from Stay Dry's published customer reviews ────────────
const reviews = [
  {
    text:   "The estimator was punctual and professional — the only roofer who came that gave a nice folder with the company's insurance information and business license.",
    author: "Edward H. · Google review",
  },
  {
    text:   "After being left without a solution by another roofer, I called Daniel, and he was right on it. I could not be more impressed with his dedication and promptness.",
    author: "Cesar R. · Google review",
  },
  {
    text:   "During the hurricanes, shingles were torn off the roof in the strong winds. Stay Dry Roofing has been wonderful in working with me to get a new roof on my house.",
    author: "David M. · Google review",
  },
];

// ─── INSTAGRAM GRID — roofing / completed-roof photos ─────────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=400&q=80",
  "https://images.unsplash.com/photo-1503594384566-461fe158e797?w=400&q=80",
  "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=400&q=80",
  "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&q=80",
  "https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=400&q=80",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
// SERVER COMPONENT — no "use client", no event handlers. Tailwind hover: only.
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(248,247,243,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: INK }}>
            Stay Dry <span style={{ color: "#C68B00" }}>Roofing</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#team"     className="hover:opacity-60 transition-opacity">Our Family</a>
            <a href="#story"    className="hover:opacity-60 transition-opacity">Since 1987</a>
            <a href="#visit"    className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-bold transition hover:brightness-105"
              style={{ background: ACCENT, color: INK }}
            >
              Free Estimate
            </a>
          </div>
          <a
            href={BOOKING_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-bold"
            style={{ background: ACCENT, color: INK }}
          >
            Estimate
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[82vh] min-h-[560px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1800&q=80"
          alt="A Florida home under palm trees with a roof built to stay dry"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(22,33,46,0.35) 0%, rgba(22,33,46,0.55) 50%, rgba(22,33,46,0.86) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/70">
            Founded {YEAR_FOUNDED} &middot; Father to Son &middot; {NEIGHBORHOOD}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Two generations.{" "}
            <span className="italic font-normal" style={{ color: ACCENT }}>One promise: you stay dry.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Dennis Flores founded this company in 1987. His son Daniel leads it today — with the GAF
            Master Elite certification fewer than 2% of roofers in America hold.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full font-bold transition hover:brightness-105"
              style={{ background: ACCENT, color: INK }}
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
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="tracking-wider" style={{ color: ACCENT }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT}+ Google reviews · A+ BBB since 1992</span>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────────── */}
      <section className="py-10 px-5 md:px-8 border-b" style={{ background: "#FFFFFF", borderColor: RULE }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-display text-2xl font-bold" style={{ color: "#C68B00" }}>GAF Master Elite</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Top 2% of U.S. roofers</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold" style={{ color: "#C68B00" }}>50-Year</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Golden Pledge warranty</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold" style={{ color: "#C68B00" }}>A+ BBB</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Rated since 1992</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold" style={{ color: "#C68B00" }}>Lic. CCC1330343</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Licensed &amp; insured &middot; Financing available</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#C68B00" }}>
              Residential &amp; Commercial
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Everything over your head
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Free estimates on every job. Financing available — no money down.
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
                {svc.duration && (
                  <div className="text-sm text-gray-400 md:text-right whitespace-nowrap">
                    <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">Timeline</span>
                    {svc.duration}
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <span className="text-lg font-display font-semibold whitespace-nowrap" style={{ color: ACCENT2 }}>
                    {svc.price}
                  </span>
                  <a
                    href={BOOKING_URL}
                    className="px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition hover:brightness-105"
                    style={{ background: ACCENT, color: INK }}
                  >
                    Schedule
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section id="team" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#C68B00" }}>
              A Roofing Family
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              The people on your roof
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Roofing runs in the Flores family — and everyone we work with gets treated like part of it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {team.map((member) => (
              <article key={member.name} className="text-center">
                <div className="aspect-[3/4] rounded-lg mb-5 flex items-center justify-center" style={{ background: INK }}>
                  <div
                    className="w-28 h-28 rounded-full border-2 flex items-center justify-center font-display text-4xl font-bold"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    {member.initials}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#C68B00" }}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                <a
                  href={BOOKING_URL}
                  className="text-sm font-semibold hover:underline transition-opacity hover:opacity-70"
                  style={{ color: ACCENT2 }}
                >
                  {member.cta} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#C68B00" }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              38 years. One family. Thousands of dry Tampa homes.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              In 1987, longtime Tampa resident Dennis Flores started Stay Dry Roofing with a small
              Hillsborough County crew and a belief that a roofer should treat every customer like
              family. Word spread the old-fashioned way — one honest job at a time.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Today his son Daniel carries the license and the standard: GAF Master Elite
              certification, an A+ BBB rating held since 1992, and a storefront on N Florida Avenue
              where you can walk in and shake the owner&rsquo;s hand. No storm-chasers. No shortcuts.
              Just the second generation of a Tampa roofing family doing the work right.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1598228723793-52759bba239c?w=900&q=80"
              alt="A Tampa Bay home protected by a Stay Dry shingle roof"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* review excerpts adapted from Stay Dry's published customer reviews (staydryfl.com) —
          composite-condensed for the mockup; replace with verbatim GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Committed to customer satisfaction
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">Based on {REVIEW_COUNT}+ Google reviews — and 275 more on Birdeye</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: ACCENT }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ─────────────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#C68B00" }}>
              Visit the Shop
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Seminole Heights, Tampa
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Address</h4>
                <p className="text-gray-700">{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Hours</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr><td className="pr-8 py-0.5">Mon — Fri</td><td>9:30 AM – 6:00 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Sat — Sun</td><td>Closed &middot; 24/7 storm response line</td></tr>
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
                  <span className="text-sm text-gray-500">Free estimates &middot; Se habla espa&ntilde;ol</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={BOOKING_URL}
                  className="px-6 py-3 rounded-full text-sm font-bold transition hover:brightness-105"
                  style={{ background: ACCENT, color: INK }}
                >
                  Request a Free Estimate
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] hover:bg-gray-50 transition-colors"
                  style={{ borderColor: INK, color: INK }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=900&q=80"
              alt="A finished residential shingle roof by Stay Dry Roofing"
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
              style={{ color: "#C68B00" }}
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
            <p className="font-display text-2xl font-bold text-white mb-2">{BUSINESS_NAME}</p>
            <p>{TAGLINE}</p>
            <p className="mt-2 text-xs text-white/40">GAF Master Elite &middot; Lic. CCC1330343</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
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
          <span>&copy; {new Date().getFullYear()} Stay Dry Roofing of Tampa Bay Inc. &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
