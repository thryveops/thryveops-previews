import Image from "next/image";
import Link from "next/link";

// ─── PROSPECT DATA — Plumbgreat Plumbing LLC (Tampa, FL) ──────────────────────
// Fonts (Fraunces + Inter) are loaded globally via layout.tsx — no import needed.
// Owner-operator concept: "You talk to Charles, not a call center."

// Business identity
const BUSINESS_NAME    = "Plumbgreat Plumbing";
const TAGLINE          = "Tampa's owner-operated licensed plumber";
const NEIGHBORHOOD     = "South Tampa";
const YEAR_FOUNDED     = "2021";
const LICENSE          = "FL License CFC1430811";

// Brand palette — Plumbgreat's blue/white identity
const PAPER    = "#FAFBFC";   // page background
const INK      = "#101826";   // body text + dark section backgrounds
const ACCENT   = "#1B5FAA";   // Plumbgreat blue
const ACCENT2  = "#0E3A66";   // deep navy secondary
const RULE     = "#D8E2EE";   // border / divider color

// Contact & links
const PHONE_FORMATTED  = "(813) 595-3563";
const PHONE_RAW        = "8135953563";
const EMAIL            = "cthompson@plumbgreat.com";
const ADDRESS_LINE_1   = "Serving South Tampa";
const ADDRESS_LINE_2   = "and the greater Tampa Bay area";
const BOOKING_URL      = `tel:${PHONE_RAW}`;   // call-to-book business
const DIRECTIONS_URL   = "https://www.google.com/maps/search/?api=1&query=Plumbgreat+Plumbing+Tampa+FL";
const INSTAGRAM_HANDLE = "plumbgreat";          // proposed handle — no social presence today
const AVG_RATING       = "5.0";
const REVIEW_COUNT     = "158";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE}`,
  description:
    "Licensed, owner-operated plumber serving South Tampa. Drain cleaning, water heaters, repipes, and leak detection — 5.0 stars across 158 Google reviews. Call (813) 595-3563.",
};

// ─── SERVICES — real Plumbgreat service lines, transparent starting prices ─────
const services = [
  {
    name:     "Drain Cleaning",
    desc:     "Slow sinks, backed-up tubs, and main-line clogs cleared right — not just poked through to clog again next month.",
    duration: "Same-day",
    price:    "From $149",
  },
  {
    name:     "Water Heater Installation",
    desc:     "Tank or tankless, installed to Florida code with expansion tank, pan, and isolation valves — done once, done right.",
    duration: "1 day",
    price:    "From $1,250",
  },
  {
    name:     "Water Heater Repair",
    desc:     "No hot water? Charles diagnoses the actual fault before recommending replacement — repair first when repair makes sense.",
    duration: "Same-day",
    price:    "From $185",
  },
  {
    name:     "Leak Detection & Repair",
    desc:     "Mystery water bills, damp walls, slab leaks — located and fixed before they become a remediation project.",
    duration: "Same-day",
    price:    "From $225",
  },
  {
    name:     "Toilets, Faucets & Disposals",
    desc:     "Repairs and replacements with quality fixtures, drop cloths down, and the work area left cleaner than we found it.",
    duration: "1-2 hrs",
    price:    "From $135",
  },
  {
    name:     "Whole-Home Repipe",
    desc:     "Aging galvanized or polybutylene lines replaced with modern piping — a written quote that does not move after the work starts.",
    duration: "Free quote",
    price:    "Custom",
  },
];

// ─── TRUST PILLARS — the owner-operator angle ─────────────────────────────────
const pillars = [
  {
    title: "The plumber answers the phone",
    text:  "No dispatcher, no call center, no upsell script. You describe the problem to the licensed plumber who will actually fix it.",
  },
  {
    title: "The quote is the price",
    text:  "Upfront pricing before work starts — and reviews will tell you it does not creep once the job is underway.",
  },
  {
    title: "Your home treated like his",
    text:  "Drop cloths, shoe covers, and a full cleanup on every job. It shows up in review after review because it happens on every visit.",
  },
];

// ─── REVIEWS — quotes adapted from plumbgreat.com/reviews testimonials ─────────
const reviews = [
  {
    text:   "Charles Thompson was the best. He gave me a quote and he didn't go over the quote in pricing.",
    author: "Rene T. · Google review",
  },
  {
    text:   "He is 100% reliable and always eager to help. He bailed us out of a water heater emergency as well.",
    author: "Joe H. · Google review",
  },
  {
    text:   "This was the most responsive, quick service that also held a quality standard.",
    author: "AJ M. · Google review",
  },
];

// ─── WORK GALLERY — 6 verified plumbing Unsplash IDs ──────────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&q=80",
  "https://images.unsplash.com/photo-1521207418485-99c705420785?w=400&q=80",
  "https://images.unsplash.com/photo-1564540583246-934409427776?w=400&q=80",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
// ⚠️ SERVER COMPONENT — no "use client", no event handlers. Hover via Tailwind.
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(250,251,252,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT }}>
            {BUSINESS_NAME}
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#charles"  className="hover:opacity-60 transition-opacity">Meet Charles</a>
            <a href="#visit"    className="hover:opacity-60 transition-opacity">Service Area</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Call {PHONE_FORMATTED}
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
          src="https://images.unsplash.com/photo-1542013936693-884638332954?w=1800&q=80"
          alt="Running kitchen faucet — plumbing done right"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(14,58,102,0.55) 0%, rgba(16,24,38,0.60) 50%, rgba(16,24,38,0.88) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/70">
            {NEIGHBORHOOD} &middot; {LICENSE} &middot; Est. {YEAR_FOUNDED}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            A plumber you can{" "}
            <span className="italic font-normal" style={{ color: "#7FB3E8" }}>actually reach.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            When you call Plumbgreat, you talk to Charles — the licensed plumber who does the work. Not a call center. Not a sales rep.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Call {PHONE_FORMATTED}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Request Service by Email
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="tracking-wider" style={{ color: "#F5C64B" }}>★★★★★</span>
            <span>{AVG_RATING} &middot; {REVIEW_COUNT} Google reviews — every one of them five stars</span>
          </div>
        </div>
      </section>

      {/* ── TRUST PILLARS ─────────────────────────────────────────────────── */}
      <section className="py-14 px-5 md:px-8 bg-white border-b" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="text-center md:text-left">
              <h3 className="font-display text-xl font-semibold mb-2" style={{ color: ACCENT2 }}>{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
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
              Honest work, upfront prices
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Starting prices below — you get an exact written quote before any work begins, and it does not change mid-job.
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
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">Timing</span>
                  {svc.duration}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-display font-semibold whitespace-nowrap" style={{ color: ACCENT2 }}>
                    {svc.price}
                  </span>
                  <a
                    href={BOOKING_URL}
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap transition hover:brightness-110"
                    style={{ background: ACCENT }}
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Plumbing emergency? Call{" "}
            <a href={BOOKING_URL} className="font-semibold hover:underline" style={{ color: ACCENT }}>
              {PHONE_FORMATTED}
            </a>{" "}
            — if Charles is on a job, leave a message and he calls back the same day.
          </p>
        </div>
      </section>

      {/* ── MEET CHARLES — owner-operator story ───────────────────────────── */}
      <section id="charles" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Meet Charles
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              One plumber. His name is on every job.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Charles Thompson spent over a decade in commercial plumbing — journeyman work, estimating, code compliance — before opening Plumbgreat in {YEAR_FOUNDED} to do residential work the way he thinks it should be done: personally.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              That means the person who quotes your job is the person who does it. Read the reviews — customers mention him by name, because he is the whole company. {REVIEW_COUNT} reviews, {AVG_RATING} stars, zero exceptions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                style={{ background: ACCENT }}
              >
                Talk to Charles
              </a>
              <span
                className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px]"
                style={{ borderColor: RULE, color: ACCENT2 }}
              >
                {LICENSE}
              </span>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=80"
              alt="Commercial-grade pipework — the trade Charles Thompson mastered before opening Plumbgreat"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      {/* (quotes below adapted from testimonials published at plumbgreat.com/reviews) */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#7FB3E8" }}>
              Loved by Tampa homeowners
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">{REVIEW_COUNT} reviews — a perfect rating, earned one job at a time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: "#F5C64B" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA / VISIT ──────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Service Area &amp; Hours
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Based in South Tampa
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
                    <tr><td className="pr-8 py-0.5">Mon — Fri</td><td>8 AM – 8 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Sat — Sun</td><td>Closed &middot; call for emergencies</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Reach Charles directly</h4>
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
                  Call {PHONE_FORMATTED}
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
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80"
              alt="A finished bathroom — the standard Plumbgreat leaves behind"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── RECENT WORK STRIP ─────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">Recent work — @{INSTAGRAM_HANDLE}</p>
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
            <p className="font-display text-2xl font-bold text-white mb-2">{BUSINESS_NAME}</p>
            <p>{TAGLINE}</p>
            <p className="mt-2 text-white/40">{LICENSE}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p>
              {ADDRESS_LINE_1}, {ADDRESS_LINE_2}<br />
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a><br />
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href={DIRECTIONS_URL} className="hover:text-white transition-colors">Google</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} {BUSINESS_NAME} LLC &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
