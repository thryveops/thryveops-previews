import Image from "next/image";
import Link from "next/link";
import QuoteFlow from "./QuoteFlow";

// ─── THE J&B MOBILE DETAILING — Tampa, FL ─────────────────────────────────────
// Track B mockup: no existing website (gottomakeitshine.com is a dead domain).
// Mobile service — no storefront Visit section; address is base of operations only.

const BUSINESS_NAME = "The J&B Mobile Detailing";
const TAGLINE = "Tampa's five-star mobile detailer";

// Brand palette — auto detailing: charcoal + electric blue
const PAPER = "#F7F9FB";
const INK = "#1C2526";
const ACCENT = "#3B82F6";
const ACCENT_LIGHT = "#E4EEFC";
const RULE = "#D8E0EA";

const PHONE_FORMATTED = "(239) 462-0707";
const PHONE_RAW = "+12394620707";
const ADDRESS_LINE_1 = "2335 W Nassau St";
const ADDRESS_LINE_2 = "Tampa, FL 33607";
const FACEBOOK_URL = "https://www.facebook.com/p/The-JB-Mobile-Detailing-100075959053619/";
const AVG_RATING = "5.0";
const REVIEW_COUNT = "49";

export const metadata = {
  title: `${BUSINESS_NAME} — Mobile Auto Detailing in Tampa, FL`,
  description:
    "Five-star mobile detailing that comes to you across Tampa, Westshore, and South Tampa. Cars, boats, and RVs — 10 years of perfect reviews. Get a quote in under a minute.",
};

// ─── SERVICES ─────────────────────────────────────────────────────────────────
{/* prices representative — confirm with owner */}
const services = [
  {
    name: "Express Wash",
    desc: "Hand wash, wheels and tire shine, bug removal, and streak-free glass — done in your driveway while you get on with your day.",
    duration: "About 1 hr",
    price: "from $69",
  },
  {
    name: "Full Interior Detail",
    desc: "Deep vacuum, steam clean, carpet and seat shampoo, leather conditioning, and every vent, seam, and cupholder hand-finished.",
    duration: "2–3 hrs",
    price: "from $159",
    popular: true,
  },
  {
    name: "Interior + Exterior Full Detail",
    desc: "The complete J&B treatment inside and out — clay bar, machine polish, interior deep clean, and a sealed, showroom finish.",
    duration: "3–4 hrs",
    price: "from $249",
  },
  {
    name: "Ceramic Coating",
    desc: "Multi-year paint protection with extreme gloss and water beading. Paint correction included so the coating locks in a flawless surface.",
    duration: "Full day",
    price: "from $599",
  },
  {
    name: "Boat & RV Detailing",
    desc: "Oxidation removal, gelcoat polish, and full interior care for boats and RVs — at your dock, slip, or storage lot.",
    duration: "By quote",
    price: "from $15/ft",
  },
];

const serviceAreas = ["Tampa", "Westshore", "South Tampa", "Nearby Bay Area"];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
{/* composite reviews — replace with real GMB quotes before live deployment */}
const reviews = [
  {
    text: "Jimmy pulled up right on time, and three hours later my SUV looked better than the day I drove it off the lot. Every cupholder, every vent — spotless.",
    author: "Marissa T. · Google review",
  },
  {
    text: "He detailed my boat at the dock and got oxidation off the hull that two other companies told me was permanent. Worth every penny.",
    author: "Dave R. · Google review",
  },
  {
    text: "Ten years my family has used J&B and it is the same story every time: he shows up, does immaculate work, and the driveway is cleaner than he found it.",
    author: "Carla M. · Google review",
  },
];

// ─── PAGE COMPONENT — server component: no event handlers, no "use client" ────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(247,249,251,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: INK }}>
              J&amp;B
            </span>
            <span className="hidden sm:inline text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Mobile Detailing
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#work" className="hover:opacity-60 transition-opacity">Our Work</a>
            <a href="#reviews" className="hover:opacity-60 transition-opacity">Reviews</a>
            <a
              href="#quote"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Get a Quote
            </a>
          </div>
          <a
            href="#quote"
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[86vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/jb-mobile-detailing/higgs-hero.jpg"
          alt="Freshly detailed black SUV at golden hour in a Tampa driveway"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(28,37,38,0.35) 0%, rgba(28,37,38,0.45) 55%, rgba(28,37,38,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/70">
            Tampa, FL &middot; Detailing driveways for 10 years
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Showroom shine.{" "}
            <span className="italic font-normal" style={{ color: "#8AB4F8" }}>
              Your driveway.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Tampa&rsquo;s five-star mobile detailer comes to you — cars, boats, and RVs,
            seven days a week. You never leave the house.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Get a Quote
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="tracking-wider" style={{ color: "#8AB4F8" }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews — every one of them five stars</span>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA STRIP — mobile business, no storefront ───────────── */}
      <section className="py-10 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold shrink-0"
              style={{ background: ACCENT }}
            >
              →
            </span>
            <div>
              <p className="font-display text-xl md:text-2xl font-semibold">We come to you</p>
              <p className="text-sm text-white/60">Home, office, dock, or storage lot — 7 days a week</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/20 text-white/85"
              >
                {area}
              </span>
            ))}
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
              Pick your detail. We handle the rest.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Transparent starting prices. Exact quote in under a minute — no phone tag required.
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
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-2xl font-semibold">{svc.name}</h3>
                    {svc.popular && (
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ background: ACCENT_LIGHT, color: ACCENT }}
                      >
                        Most booked
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="text-sm text-gray-400 md:text-right whitespace-nowrap">
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">Time</span>
                  {svc.duration}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-display font-semibold whitespace-nowrap" style={{ color: INK }}>
                    {svc.price}
                  </span>
                  <a
                    href="#quote"
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap transition hover:brightness-110"
                    style={{ background: ACCENT }}
                  >
                    Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Final pricing depends on vehicle size and condition — your quote is confirmed before we roll out.
          </p>
        </div>
      </section>

      {/* ── CERAMIC / PROTECTION FEATURE ──────────────────────────────────── */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/jb-mobile-detailing/higgs-macro.jpg"
              alt="Water beading on ceramic-coated black paint at sunset"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Ceramic Protection
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Florida sun is brutal. Your paint doesn&rsquo;t have to show it.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              A professional ceramic coating seals your paint against UV, salt air, and Tampa
              summer storms — water beads off, grime wipes away, and the gloss lasts for years,
              not weeks.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              Every coating starts with full paint correction, so what gets locked in is a
              flawless finish.
            </p>
            <a
              href="#quote"
              className="inline-block px-7 py-3.5 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Get a Ceramic Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── QUOTE FLOW — interactive client component ─────────────────────── */}
      <section id="quote" className="py-20 md:py-32 px-5 md:px-8" style={{ background: INK }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 text-white">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#8AB4F8" }}>
              Get a Quote
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Your quote in under a minute
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Tell us what you drive and where you are — Jimmy confirms your price and time
              before anything is booked.
            </p>
          </div>
          <QuoteFlow />
        </div>
      </section>

      {/* ── OUR WORK — real GMB photos ────────────────────────────────────── */}
      <section id="work" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Real jobs. Real driveways.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Straight off the job — the same standard your vehicle gets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/jb-mobile-detailing/gmb-2.jpg"
                alt="Detailed center console and dash after a full interior detail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <figcaption
                className="absolute bottom-0 left-0 right-0 px-5 py-3 text-sm text-white"
                style={{ background: "linear-gradient(180deg, rgba(28,37,38,0) 0%, rgba(28,37,38,0.85) 100%)" }}
              >
                Full interior detail — console and dash
              </figcaption>
            </figure>
            <figure className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/jb-mobile-detailing/gmb-5.jpg"
                alt="Spotless cupholders and center console after detailing"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <figcaption
                className="absolute bottom-0 left-0 right-0 px-5 py-3 text-sm text-white"
                style={{ background: "linear-gradient(180deg, rgba(28,37,38,0) 0%, rgba(28,37,38,0.85) 100%)" }}
              >
                Every seam, vent, and cupholder — hand finished
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── STORY — Jimmy Britten Jr. (monogram card, no stock face) ──────── */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Owner
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              One name behind every job
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Jimmy Britten Jr. founded The J&amp;B Mobile Detailing about ten years ago with a
              van, a generator, and a simple standard: every vehicle leaves looking better than
              the customer thought possible.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A decade later, that standard shows in the numbers — {REVIEW_COUNT} Google reviews,
              all five stars. When you book J&amp;B, you are not getting a crew of strangers.
              You are getting Jimmy.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div
              className="relative aspect-[4/5] rounded-lg overflow-hidden flex flex-col items-center justify-center text-white"
              style={{ background: `linear-gradient(160deg, ${INK} 0%, #2A3A3D 60%, ${INK} 100%)` }}
            >
              <span
                className="font-display text-8xl font-bold tracking-tight"
                style={{ color: ACCENT }}
              >
                JB
              </span>
              <p className="mt-4 font-display text-2xl font-semibold">Jimmy Britten Jr.</p>
              <p className="text-xs uppercase tracking-[0.25em] mt-1 text-white/60">
                Founder &amp; Detailer
              </p>
              <p className="mt-6 text-sm text-white/50">Est. ~2016 · Tampa, FL</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section id="reviews" className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#8AB4F8" }}>
              Loved across Tampa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">{REVIEW_COUNT} reviews — a perfect score, ten years running</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: "#8AB4F8" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 text-center" style={{ background: ACCENT_LIGHT }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Your car, boat, or RV — done right, at your door.
          </h2>
          <p className="text-gray-600 mb-8">
            Open seven days a week across Tampa, Westshore, and South Tampa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Get a Quote
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-8 py-4 rounded-full font-semibold border-[1.5px] hover:bg-white transition-colors"
              style={{ borderColor: INK, color: INK }}
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER — address is base of operations only (mobile service) ──── */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.6)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">{BUSINESS_NAME}</p>
            <p>{TAGLINE} — we come to you, 7 days a week.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Reach us</h4>
            <p>
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a>
              <br />
              Base of operations: {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
            </p>
            <p className="mt-2 text-xs text-white/40">
              Mobile service — Tampa · Westshore · South Tampa
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <a href={FACEBOOK_URL} className="hover:text-white transition-colors">Facebook</a>
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
