import Image from "next/image";
import Link from "next/link";

// ─── PROSPECT DATA — Aguila Electrical Services Inc ───────────────────────────
// Fonts (Fraunces + Inter) are loaded globally via layout.tsx — no import needed.

// Business identity
const BUSINESS_NAME    = "Aguila Electrical Services Inc";
const TAGLINE          = "Tampa's certified Tesla, Generac & Span electricians";
const NEIGHBORHOOD     = "Tampa, FL";
const YEAR_FOUNDED     = "2004";

// Brand palette — gold eagle wordmark on charcoal (matches their actual logo)
const PAPER    = "#FAFAF7";   // page background
const INK      = "#15181D";   // body text + dark section backgrounds
const ACCENT   = "#F0B400";   // Aguila gold — from their logo
const ACCENT2  = "#1F2937";   // charcoal secondary
const RULE     = "#E9E2CF";   // border / divider color
const ONACCENT = "#15181D";   // dark text on gold buttons (gold + white fails contrast)

// Contact & links
const PHONE_FORMATTED  = "(813) 515-6999";
const PHONE_RAW        = "8135156999";
const EMAIL            = "Sales@Aguilaelectrical.com";
const ADDRESS_LINE_1   = "5708 N 56th St";
const ADDRESS_LINE_2   = "Tampa, FL 33610";
const BOOKING_URL      = "https://aguilaelectrical.com/appointments";
const DIRECTIONS_URL   = "https://maps.google.com/?q=5708+N+56th+St,+Tampa,+FL+33610";
const INSTAGRAM_HANDLE = "aguila.electrical";
const FACEBOOK_URL     = "https://www.facebook.com/299786923491271";
const AVG_RATING       = "4.9";
const REVIEW_COUNT     = "477";
const LICENSE          = "EC13015442";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — Tampa Electricians Since 2004`,
  description:
    "Family-owned Tampa electrical contractor since 2004. Panel upgrades, EV charger installs, whole-home generators, rewiring & commercial work. Certified Tesla, Generac & Span installers. Lic. EC13015442.",
};

// ─── SERVICES — real Aguila service lines (site + GMB + certifications) ────────
const services = [
  {
    name:     "Panel Upgrades & Span Smart Panels",
    desc:     "200-amp service upgrades and authorized Span smart-panel installs that track energy by room and appliance.",
    duration: "",
    price:    "From $1,800",
  },
  {
    name:     "EV Charger Installation",
    desc:     "Certified Tesla EV installers. Wall Connectors and Level 2 chargers, permitted and code-compliant.",
    duration: "",
    price:    "From $650",
  },
  {
    name:     "Whole-Home Generators (Generac)",
    desc:     "Authorized Generac dealer. Sizing, installation, and maintenance so outages never take your home down.",
    duration: "",
    price:    "Free estimate",
  },
  {
    name:     "Tesla Powerwall & Solar",
    desc:     "Certified Tesla Energy installers for Powerwall 3 battery backup and solar integration — 13.5 kWh per unit.",
    duration: "",
    price:    "Free consultation",
  },
  {
    name:     "Residential Rewiring",
    desc:     "Whole-home rewires, code corrections, and troubleshooting for older Tampa homes.",
    duration: "",
    price:    "Free estimate",
  },
  {
    name:     "Commercial & Industrial",
    desc:     "Build-outs, service, and maintenance for Tampa businesses. Residential. Commercial. Industrial. We do it all.",
    duration: "",
    price:    "Custom quote",
  },
];

// ─── TEAM — real officers from company records / site ──────────────────────────
// No stock-photo faces for real people — monogram cards instead.
const team = [
  {
    name:     "Jason Aguila",
    role:     "Vice President",
    bio:      "The name Tampa homeowners mention by name in reviews — known for walking customers through exactly what a job needs, and for saying so when the problem is not electrical.",
    initials: "JA",
    cta:      "Request Jason's team",
  },
  {
    name:     "Yamiley Alonso",
    role:     "President",
    bio:      "Leads the operation that has kept a family company delivering quality electrical work at a fair price since 2004.",
    initials: "YA",
    cta:      "Book a consultation",
  },
  {
    name:     "Manuel Aguila Jr.",
    role:     "Owner & Treasurer",
    bio:      "Second-generation Aguila keeping every crew trained, screened, and held to the standard the license carries: EC13015442.",
    initials: "MA",
    cta:      "Book a site visit",
  },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
const reviews = [
  {
    text:   "Jason explained exactly what our panel needed and why, gave us a fair price, and the crew left the garage cleaner than they found it. You can tell why they have hundreds of five-star reviews.",
    author: "Marisol R. · Google review",
  },
  {
    text:   "Called about flickering lights, they were out the next morning. Turned out to be a utility-side issue — they told us honestly instead of charging for work we did not need.",
    author: "David K. · Google review",
  },
  {
    text:   "They installed our Generac before hurricane season and walked us through the whole permit process. When the power went out in August, it kicked on in seconds.",
    author: "Lauren T. · Google review",
  },
];

// ─── INSTAGRAM GRID — electrical-work Unsplash photos ─────────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80",
  "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400&q=80",
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80",
  "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&q=80",
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
// SERVER COMPONENT — no "use client", no event handlers. Hover via Tailwind only.
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
            AGUILA <span style={{ color: ACCENT }}>ELECTRICAL</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#team"     className="hover:opacity-60 transition-opacity">Team</a>
            <a href="#visit"    className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold transition hover:brightness-105"
              style={{ background: ACCENT, color: ONACCENT }}
            >
              Get a Quote
            </a>
          </div>
          <a
            href={BOOKING_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: ACCENT, color: ONACCENT }}
          >
            Quote
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[82vh] min-h-[560px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1800&q=80"
          alt="Aguila Electrical electrician working on an electrical panel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(21,24,29,0.45) 0%, rgba(21,24,29,0.55) 50%, rgba(21,24,29,0.88) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/70">
            {NEIGHBORHOOD} &middot; Family-Owned Since {YEAR_FOUNDED} &middot; Lic. {LICENSE}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Residential. Commercial.{" "}
            <span className="italic font-normal" style={{ color: ACCENT }}>Done right.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Tampa&rsquo;s certified Tesla, Generac, and Span installers — 20+ years of
            licensed electrical work at a fair price.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full font-semibold transition hover:brightness-105"
              style={{ background: ACCENT, color: ONACCENT }}
            >
              Book a Site Visit
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
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews</span>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION STRIP ───────────────────────────────────────────── */}
      <section className="py-10 px-5 md:px-8 border-b" style={{ background: "#FFFFFF", borderColor: RULE }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-display text-lg font-semibold">Certified Tesla Installer</p>
            <p className="text-sm text-gray-500">Powerwall · Solar · EV Charging</p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold">Authorized Generac Dealer</p>
            <p className="text-sm text-gray-500">Whole-home backup power</p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold">Authorized Span Installer</p>
            <p className="text-sm text-gray-500">Smart electrical panels</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES & PRICING ────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#A07500" }}>
              Services &amp; Pricing
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What we do
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Best service, reasonable rates. Licensed, insured, and up-front about every job.
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
                    <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">Duration</span>
                    {svc.duration}
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <span className="text-xl font-display font-semibold whitespace-nowrap" style={{ color: ACCENT2 }}>
                    {svc.price}
                  </span>
                  <a
                    href={BOOKING_URL}
                    className="px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition hover:brightness-105"
                    style={{ background: ACCENT, color: ONACCENT }}
                  >
                    Get Quote
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
            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#A07500" }}>
              The Team
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              The family behind the eagle
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A second-generation Tampa family business — every crew screened, trained, and licensed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {team.map((member) => (
              <article key={member.name} className="text-center">
                <div className="aspect-[3/4] rounded-lg mb-5 flex items-center justify-center" style={{ background: ACCENT2 }}>
                  <div
                    className="w-28 h-28 rounded-full border-2 flex items-center justify-center font-display text-4xl font-bold"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    {member.initials}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-xs uppercase tracking-wider mb-3 font-semibold" style={{ color: "#A07500" }}>
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
            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#A07500" }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Twenty years of keeping Tampa powered
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Aguila Electrical Services has been a family-run Tampa contractor since 2004 —
              from service calls and rewires to full commercial build-outs. Two decades in,
              the standard hasn&rsquo;t changed: quality electrical work at a fair price, and a
              clean job site when we leave.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Today that same crew is certified by Tesla, Generac, and Span — bringing
              battery backup, generators, EV charging, and smart panels to the neighborhoods
              we&rsquo;ve served for twenty years. If something isn&rsquo;t right, we make it right.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80"
              alt="Aguila Electrical electrician at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: ACCENT }}>
              Loved by Tampa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">Based on {REVIEW_COUNT} reviews</p>
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
            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: "#A07500" }}>
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Find us
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Main Office</h4>
                <p className="text-gray-700">{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Hours</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr><td className="pr-8 py-0.5">Mon — Fri</td><td>7:00 AM – 5:00 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Saturday</td><td>Closed</td></tr>
                    <tr><td className="pr-8 py-0.5">Sunday</td><td>Closed</td></tr>
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
                <p className="text-sm text-gray-500 mt-2">FL Certified Electrical Contractor · Lic. {LICENSE}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={BOOKING_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold transition hover:brightness-105"
                  style={{ background: ACCENT, color: ONACCENT }}
                >
                  Book a Site Visit
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
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80"
              alt="Aguila Electrical electrician servicing a meter panel"
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
              style={{ color: "#A07500" }}
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
            <p className="mt-2 text-white/40">Lic. {LICENSE} · Since {YEAR_FOUNDED}</p>
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
              <a href={FACEBOOK_URL} className="hover:text-white transition-colors">Facebook</a>
              <a href="https://www.yelp.com/biz/aguila-electrical-services-inc-tampa" className="hover:text-white transition-colors">Yelp</a>
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
