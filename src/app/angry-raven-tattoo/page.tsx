import Image from "next/image";
import Link from "next/link";
import ConsultFlow from "./ConsultFlow";

// ─── ANGRY RAVEN TATTOO — concept mockup by Thryve Operations ─────────────────
// Dark studio aesthetic: near-black base, rust-orange accent pulled from the
// shop's red-orange-on-black storefront sign. All photos are the shop's own
// GMB photos under /images/angry-raven-tattoo/.

const BUSINESS_NAME = "Angry Raven Tattoo";
const TAGLINE = "Custom tattoos in Tampa, FL";

// Palette
const BG1 = "#0A0A0A"; // page base
const BG2 = "#111111"; // alt sections
const BG3 = "#141414"; // cards
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0"; // secondary text
const ACCENT = "#C7502E"; // rust / burnt orange from the storefront sign
const ACCENT_LIGHT = "#F8E9E2";

// Contact
const PHONE_FORMATTED = "(941) 539-7513";
const PHONE_TEL = "tel:+19415397513";
const ADDRESS_LINE_1 = "1816 W Waters Ave";
const ADDRESS_LINE_2 = "Tampa, FL 33604";
const DIRECTIONS_URL = "https://maps.google.com/?q=Angry+Raven+Tattoo+1816+W+Waters+Ave+Tampa+FL+33604";
const IG_SHOP = "angry_raven_tattoo";
const IG_NASH = "nash_desantis_tattoo";
const AVG_RATING = "5.0";
const REVIEW_COUNT = "299";

export const metadata = {
  title: "Angry Raven Tattoo — Custom Tattoos in Tampa, FL",
  description:
    "Custom tattoos, walk-ins, cover-ups, fine line, black & grey, and color realism by Nash De Santis. 5.0 stars across 299 Google reviews. 1816 W Waters Ave, Tampa. Military and first-responder discounts.",
};

const services = [
  {
    name: "Custom Tattoos",
    desc: "One-of-one pieces designed with you from scratch — Nash draws every custom piece himself.",
    price: "Consult for quote",
  },
  {
    name: "Walk-Ins",
    desc: "Open until 10 PM six nights a week. Come by with an idea and leave with ink the same day.",
    price: "$100 shop minimum",
  },
  {
    name: "Cover-Ups",
    desc: "Old ink, bad ink, someone's name — reworked into a piece you actually want to show off.",
    price: "Consult for quote",
  },
  {
    name: "Fine Line",
    desc: "Delicate single-needle work — script, florals, and minimal pieces with clean healed results.",
    price: "Consult for quote",
  },
  {
    name: "Black & Grey",
    desc: "Smooth shading, statues, portraits, and ornamental work built to age well.",
    price: "Consult for quote",
  },
  {
    name: "Color Realism",
    desc: "Saturated, layered color — koi, florals, and full-color pieces that stay vivid.",
    price: "Consult for quote",
  },
];

const gallery = [
  {
    src: "/images/angry-raven-tattoo/gmb-2.jpg",
    alt: "Nordic runic ornamental shoulder piece",
    label: "Nordic / Blackwork",
  },
  {
    src: "/images/angry-raven-tattoo/gmb-4.jpg",
    alt: "Black and grey warrior woman thigh piece",
    label: "Black & Grey Realism",
  },
  {
    src: "/images/angry-raven-tattoo/gmb-8.jpg",
    alt: "Color koi and cherry blossom rib piece",
    label: "Color",
  },
  {
    src: "/images/angry-raven-tattoo/gmb-3.jpg",
    alt: "Script lettering forearm tattoo with doves",
    label: "Script & Lettering",
  },
  {
    src: "/images/angry-raven-tattoo/gmb-7.jpg",
    alt: "Realistic shark teeth arm tattoo",
    label: "Realism",
  },
];

// composite reviews — replace with real GMB quotes before live deployment
const reviews = [
  {
    text: "Nash is amazing and exceeded my expectations! He is very talented and explained every step and made me feel comfortable while getting a tattoo. He went above and beyond!",
    author: "Google review",
  },
  {
    text: "Walked in on a Tuesday night with a rough idea and walked out with a piece better than what I had pictured. The shop is spotless and the whole vibe is welcoming.",
    author: "Google review",
  },
  {
    text: "Got my cover-up done here after two other shops said it could not be saved. You would never know there was anything underneath it. Worth every penny.",
    author: "Google review",
  },
];

export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: BG1, color: "#FFFFFF" }}>
      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(10,10,10,0.92)", borderColor: BORDER }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="leading-tight">
            <span className="font-display block text-lg md:text-xl font-bold tracking-tight text-white">
              ANGRY RAVEN
            </span>
            <span className="block text-[10px] tracking-[0.35em] uppercase" style={{ color: ACCENT }}>
              Tattoo · Tampa
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#work" className="hover:opacity-60 transition-opacity">The Work</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#artist" className="hover:opacity-60 transition-opacity">The Artist</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={PHONE_TEL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book a Consultation
            </a>
          </div>
          <a
            href={PHONE_TEL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO — the actual storefront ────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <Image
          src="/images/angry-raven-tattoo/gmb-1.jpg"
          alt="Angry Raven Tattoo storefront on W Waters Ave, Tampa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.92) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 pt-40">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase mb-4" style={{ color: ACCENT_LIGHT }}>
            1816 W Waters Ave &middot; Tampa, FL
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.0] mb-6 max-w-3xl">
            Ink worth the story.{" "}
            <span className="italic font-normal" style={{ color: ACCENT }}>
              Walk in angry, leave happy.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
            Custom tattoos, cover-ups, and walk-ins by Nash De Santis — the shop behind a perfect
            5.0 across {REVIEW_COUNT} Google reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_TEL}
              className="px-8 py-4 rounded-full font-semibold text-white text-center transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              className="px-8 py-4 rounded-full font-semibold text-center border border-white/30 text-white hover:bg-white/10 transition"
            >
              See the Work
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span>
              <span className="tracking-wider" style={{ color: ACCENT }}>★★★★★</span>{" "}
              {AVG_RATING} · {REVIEW_COUNT} Google reviews
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>Open til 10 PM Mon–Sat</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span style={{ color: ACCENT_LIGHT }}>Military &amp; first-responder discounts</span>
          </div>
        </div>
      </section>

      {/* ── ONE PLACE TO BOOK ───────────────────────────────────────────────── */}
      <section className="py-14 px-5 md:px-8 border-y" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="font-display text-2xl font-bold mb-2" style={{ color: ACCENT }}>
              One place to book
            </p>
            <p className="text-sm leading-relaxed" style={{ color: T2 }}>
              No more hunting across Booksy, Vagaro, and Fresha. One call, one consultation, one
              chair with your name on it.
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold mb-2 text-white">Walk-ins welcome</p>
            <p className="text-sm leading-relaxed" style={{ color: T2 }}>
              $100 shop minimum, open until 10 PM six nights a week. Evening ink after work is kind
              of our thing.
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold mb-2 text-white">Serving those who serve</p>
            <p className="text-sm leading-relaxed" style={{ color: T2 }}>
              Military and first-responder discounts, every day — just show your ID at the desk.
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY / THE WORK ──────────────────────────────────────────────── */}
      <section id="work" className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
                The Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Healed, photographed, real.
              </h2>
            </div>
            <a
              href={`https://instagram.com/${IG_NASH}`}
              className="hidden md:block text-sm font-semibold hover:underline"
              style={{ color: ACCENT }}
            >
              More on Instagram →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="relative row-span-2 aspect-[9/16] md:aspect-auto overflow-hidden rounded-lg group">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(10,10,10,0.75)", color: ACCENT_LIGHT }}
              >
                {gallery[0].label}
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(10,10,10,0.75)", color: ACCENT_LIGHT }}
              >
                {gallery[1].label}
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src={gallery[2].src}
                alt={gallery[2].alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(10,10,10,0.75)", color: ACCENT_LIGHT }}
              >
                {gallery[2].label}
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src={gallery[3].src}
                alt={gallery[3].alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(10,10,10,0.75)", color: ACCENT_LIGHT }}
              >
                {gallery[3].label}
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src={gallery[4].src}
                alt={gallery[4].alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(10,10,10,0.75)", color: ACCENT_LIGHT }}
              >
                {gallery[4].label}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What we do</h2>
            <p className="max-w-xl mx-auto" style={{ color: T2 }}>
              Every piece starts with a conversation. $100 shop minimum on walk-ins — custom work
              is quoted at your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-lg overflow-hidden" style={{ background: BORDER }}>
            {services.map((svc) => (
              <div
                key={svc.name}
                className="p-7 transition-colors duration-200 hover:bg-[#191919] border-l-2 border-transparent hover:border-l-[#C7502E]"
                style={{ background: BG3 }}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-2xl font-semibold text-white">{svc.name}</h3>
                  <span
                    className="text-sm font-semibold whitespace-nowrap"
                    style={{ color: ACCENT }}
                  >
                    {svc.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULT FLOW (interactive client component) ─────────────────────── */}
      <section id="consult" className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Start Your Piece
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Tell us what you&rsquo;re thinking
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: T2 }}>
              Three quick questions and Nash takes it from there. Prefer to talk?{" "}
              <a href={PHONE_TEL} className="font-semibold hover:underline" style={{ color: ACCENT }}>
                Call {PHONE_FORMATTED}
              </a>
              .
            </p>
          </div>
          <ConsultFlow />
        </div>
      </section>

      {/* ── THE ARTIST ──────────────────────────────────────────────────────── */}
      <section id="artist" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/images/angry-raven-tattoo/gmb-5.jpg"
              alt="Inside Angry Raven Tattoo — dark walls, red doors, working stations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.8) 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
              <span
                className="w-16 h-16 rounded-full flex items-center justify-center font-display text-2xl font-bold shrink-0"
                style={{ background: ACCENT, color: "#FFFFFF" }}
              >
                ND
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-white leading-tight">
                  Nash De Santis
                </p>
                <p className="text-xs uppercase tracking-[0.25em]" style={{ color: ACCENT_LIGHT }}>
                  Owner &amp; Lead Artist
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Artist
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              One shop. One standard.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "#D4D4D4" }}>
              Angry Raven is Nash&rsquo;s shop from the sign on the roof to the needle in his hand.
              From Nordic blackwork to color realism, every piece that leaves the chair carries the
              same obsession — reviewers talk about him staying open late until the design is right.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#D4D4D4" }}>
              That is how a single-artist shop on W Waters Ave ends up with 299 Google reviews and
              not a single one below five stars.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_TEL}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                style={{ background: ACCENT }}
              >
                Book with Nash
              </a>
              <a
                href={`https://instagram.com/${IG_NASH}`}
                className="px-6 py-3 rounded-full text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition"
              >
                @{IG_NASH}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Reviews
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p style={{ color: T2 }}>
              {REVIEW_COUNT} reviews. Not one below five stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <blockquote
                key={i}
                className="p-7 rounded-lg"
                style={{ background: BG3, border: `1px solid ${BORDER}` }}
              >
                <p className="mb-3 tracking-wider" style={{ color: ACCENT }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4 text-sm">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-xs" style={{ color: T2 }}>— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ───────────────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Find the raven
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-white">Address</h4>
                <p style={{ color: T2 }}>
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white">Hours</h4>
                <table className="text-sm" style={{ color: T2 }}>
                  <tbody>
                    <tr>
                      <td className="pr-8 py-0.5">Mon — Sat</td>
                      <td>11 AM – 10 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-0.5">Sunday</td>
                      <td>12 PM – 8 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white">Call or text</h4>
                <a
                  href={PHONE_TEL}
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  {PHONE_FORMATTED}
                </a>
              </div>
              <p className="text-sm" style={{ color: ACCENT_LIGHT }}>
                Military &amp; first responders — mention it at the desk for your discount.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={PHONE_TEL}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Book a Consultation
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/angry-raven-tattoo/gmb-6.jpg"
              alt="Angry Raven Tattoo reception desk with raven emblem"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM BAND ──────────────────────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8 border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
            Follow the work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Fresh ink, every week
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://instagram.com/${IG_NASH}`}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              @{IG_NASH}
            </a>
            <a
              href={`https://instagram.com/${IG_SHOP}`}
              className="px-6 py-3 rounded-full text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition"
            >
              @{IG_SHOP}
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        className="py-12 px-5 md:px-8 text-sm border-t"
        style={{ background: BG1, color: T2, borderColor: BORDER }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-1">ANGRY RAVEN TATTOO</p>
            <p>{TAGLINE}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
              <br />
              <a href={PHONE_TEL} className="hover:text-white transition-colors">
                {PHONE_FORMATTED}
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${IG_NASH}`} className="hover:text-white transition-colors">
                @{IG_NASH}
              </a>
              <a href={`https://instagram.com/${IG_SHOP}`} className="hover:text-white transition-colors">
                @{IG_SHOP}
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2" style={{ borderColor: BORDER, color: "#6B6B6B" }}>
          <span>&copy; {new Date().getFullYear()} {BUSINESS_NAME} &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>
    </div>
  );
}
