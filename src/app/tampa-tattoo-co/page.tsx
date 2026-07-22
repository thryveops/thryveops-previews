import Image from "next/image";
import Link from "next/link";
import ConsultFlow from "./ConsultFlow";
import Faq from "./Faq";

// ─── TAMPA TATTOO CO. — Editorial Ink concept mockup by Thryve Operations ─────
// Gallery-editorial system modeled on Bang Bang NYC: restrained type scale,
// uniform grids, centered section composition, generous whitespace. Accent:
// antique gold from the shop's gold-crest storefront mural. Work photos are
// the prospect's own GMB shots; hero/studio scenes are generated editorial
// imagery (no real people depicted). Filler artist entries are concept
// placeholders for layout demonstration.

const BUSINESS_NAME = "Tampa Tattoo Co.";
const TAGLINE = "Custom tattoos on Howard Ave since 2015";

// Palette — antique gold on near-black
const BG = "#0A0A0A";
const BG2 = "#0E0E0E";
const CARD = "#141414";
const BORDER = "#242424";
const T2 = "#A3A3A3";
const ACCENT = "#C9A84C";
const LIGHT = "#F5EEDC";

const BEBAS = { fontFamily: "var(--font-bebas-neue)" } as const;

const PHONE_FORMATTED = "(813) 644-5959";
const PHONE_HREF = "tel:+18136445959";
const ADDRESS_LINE_1 = "1012 N Howard Ave";
const ADDRESS_LINE_2 = "Tampa, FL 33607";
const FRESHA_URL = "https://www.fresha.com/lvp/tampa-tattoo-co-north-howard-avenue-tampa-6NqV8P";
const DIRECTIONS_URL = "https://maps.google.com/?q=Tampa+Tattoo+Co,+1012+N+Howard+Ave,+Tampa,+FL+33607";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Tampa%20Tattoo%20Co%2C%201012%20N%20Howard%20Ave%2C%20Tampa%2C%20FL%2033607&z=15&output=embed";
const INSTAGRAM_HANDLE = "tampatattooco";
const TIKTOK_HANDLE = "tampatattooco";
const FACEBOOK_HANDLE = "ttc813";
const AVG_RATING = "4.7";
const REVIEW_COUNT = "201";

export const metadata = {
  title: `${BUSINESS_NAME} — Custom Tattoos in Tampa, Walk-Ins Welcome`,
  description:
    "Custom tattoo studio on N Howard Ave, Tampa. Black & grey realism, color work, portraits, and cover-ups. Walk-ins welcome 7 days a week — call (813) 644-5959 to book a consultation.",
};

// Services — consult-for-quote pricing, real offerings from GMB + socials
const services = [
  {
    name: "Custom Tattoos",
    desc: "One-of-one designs drawn for you — bring a reference, an idea, or just a feeling.",
    price: "Consult for quote",
    popular: true,
  },
  {
    name: "Black & Grey Realism",
    desc: "Smooth-shaded realism — sleeves, ships, roses, and fine detail built to last.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Color Work",
    desc: "Saturated, painterly color pieces that stay vivid for decades.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Portraits",
    desc: "Photorealistic portraits, side-by-side accurate to the reference photo.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Cover-Ups & Reworks",
    desc: "Honest assessment of what a cover-up can do, then a design that hides it.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Walk-Ins",
    desc: "No appointment needed — first come, first served, 7 days a week.",
    price: "Just show up",
    popular: false,
  },
];

// Gallery — the shop's own GMB work shots, uniform tiles
const portfolio = [
  {
    src: "/images/tampa-tattoo-co/gmb-2.jpg",
    alt: "Black and grey realism ship sleeve on a forearm",
    label: "Black & Grey Realism",
    sub: "Full-rigged ship, forearm",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-3.jpg",
    alt: "Color panda and cherry blossom shoulder tattoo",
    label: "Color Work",
    sub: "Panda & cherry blossoms",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-8.jpg",
    alt: "Photorealistic portrait hand tattoo next to the reference photo",
    label: "Portraits",
    sub: "Matched to reference",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-4.jpg",
    alt: "Black and grey rose tattoo on a wrist",
    label: "Fine Detail",
    sub: "Black & grey rose, wrist",
  },
];

// Artists — Ness is real; the other two entries are concept placeholders
// (filler names for layout demonstration, per client direction).
const artists = [
  {
    initial: "N",
    name: "Ness",
    specialty: "Realism · Portraits · Cover-Ups",
    bio: "Owner. Nearly two decades in the craft — eight years at Inkwolves before rebuilding this corner of Howard Ave into Tampa Tattoo Co.",
  },
  {
    initial: "R",
    name: "Rico Vega",
    specialty: "Color · Neo-Traditional",
    bio: "Bold, saturated color work — florals, animals, and statement pieces with clean healed results.",
  },
  {
    initial: "A",
    name: "Ava Lane",
    specialty: "Fine Line · Script",
    bio: "Delicate single-needle work — lettering, florals, and minimal pieces that heal crisp.",
  },
];

// composite reviews — replace with real GMB quotes before live deployment
const pressQuote = {
  text: "Got a portrait of my dad done and my family could not believe it wasn't a photo. This is the spot in Tampa.",
  author: "J. Alvarez",
  source: "Google review",
};

const reviews = [
  {
    text: "Walked in on a Sunday with a rough idea and walked out with a rose piece that looks like a photograph. They took the time to get it right before the needle ever touched skin.",
    author: "Marcus D.",
  },
  {
    text: "The shop feels like an art gallery and the black and grey work speaks for itself. My whole sleeve was done here.",
    author: "Priscilla R.",
  },
];

const igPhotos = [
  { src: "/images/tampa-tattoo-co/gmb-2.jpg", alt: "Black and grey ship sleeve" },
  { src: "/images/tampa-tattoo-co/gmb-3.jpg", alt: "Color panda shoulder piece" },
  { src: "/images/tampa-tattoo-co/gmb-1.jpg", alt: "Tattoo session in progress" },
  { src: "/images/tampa-tattoo-co/gmb-4.jpg", alt: "Black and grey rose on wrist" },
  { src: "/images/tampa-tattoo-co/gmb-7.jpg", alt: "Gallery-style shop interior" },
  { src: "/images/tampa-tattoo-co/gmb-8.jpg", alt: "Photoreal portrait hand tattoo" },
];

const faqItems = [
  {
    q: "Do you take walk-ins?",
    a: "Yes — it's painted on the window. Walk-ins are first come, first served, 7 days a week. For larger custom pieces, book a consultation so there's time to design it properly.",
  },
  {
    q: "How much will my tattoo cost?",
    a: "Every piece is quoted at the consult based on size, placement, and detail. The consultation is free and the quote is honest — no pressure, no deposit just to talk.",
  },
  {
    q: "How do I book?",
    a: `Call ${PHONE_FORMATTED}, book online, or walk in at ${ADDRESS_LINE_1}. Bring reference photos or just the idea — the design work starts from there.`,
  },
  {
    q: "How old do I have to be?",
    a: "18 or older with a valid government-issued photo ID — Florida law, no exceptions.",
  },
  {
    q: "How should I prepare for my session?",
    a: "Eat a full meal beforehand, stay hydrated, and skip alcohol for 24 hours before your appointment. Wear clothing that gives easy access to the placement area.",
  },
  {
    q: "Do you do cover-ups?",
    a: "Yes — cover-ups and reworks are one of the shop's specialties. Bring a clear photo of the existing piece to your consult for an honest assessment of what's possible.",
  },
];

// Shared section header — small centered index + modest tracked uppercase title
function SectionHeader({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: ACCENT }}>
        {index}
      </p>
      <h2 className="text-3xl md:text-4xl tracking-[0.12em] text-white" style={BEBAS}>
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-sm leading-relaxed max-w-md mx-auto" style={{ color: T2 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── PAGE — server component: no "use client", no event handlers ──────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: BG, color: LIGHT }}>

      {/* ── NAV — minimal editorial ───────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(10,10,10,0.9)", borderColor: BORDER }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="leading-none">
            <span className="block text-lg tracking-[0.1em] text-white" style={BEBAS}>
              TAMPA TATTOO CO.
            </span>
            <span className="block text-[8px] tracking-[0.4em] uppercase mt-1" style={{ color: ACCENT }}>
              Est. 2015 — Howard Ave
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-medium tracking-[0.25em] uppercase">
            <a href="#work" className="hover:opacity-60 transition-opacity">The Work</a>
            <a href="#artists" className="hover:opacity-60 transition-opacity">Artists</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#faq" className="hover:opacity-60 transition-opacity">FAQ</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={PHONE_HREF}
              className="px-5 py-2 text-[10px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book
            </a>
          </div>
          <a
            href={PHONE_HREF}
            className="md:hidden px-4 py-2 text-[10px] font-bold tracking-[0.25em] uppercase"
            style={{ background: ACCENT, color: "#0A0A0A" }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO — full-bleed photo, shop title, address, two CTAs, air ───── */}
      <header id="top" className="relative h-svh min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/tampa-tattoo-co/editorial-hero.jpg"
          alt="Tattoo artist at work in a dark gallery-style studio with gold-framed art"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.3) 45%, rgba(10,10,10,0.9) 100%)" }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-14">
          <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-7" style={{ color: ACCENT }}>
            Custom Tattoos — Est. 2015
          </p>
          <h1 className="text-5xl md:text-7xl leading-none text-white" style={BEBAS}>
            Tampa Tattoo Co.
          </h1>
          <p className="mt-6 text-[11px] md:text-xs tracking-[0.4em] uppercase text-white/75">
            {ADDRESS_LINE_1} — Tampa, Florida
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              className="px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10 text-white"
              style={{ borderColor: "rgba(245,238,220,0.4)" }}
            >
              See the Work
            </a>
          </div>
          <p className="mt-10 text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,238,220,0.6)" }}>
            <span style={{ color: ACCENT }}>★★★★★</span>{`  ${AVG_RATING} — ${REVIEW_COUNT} Google reviews  ·  Walk-ins 7 days`}
          </p>
        </div>
      </header>

      {/* ── 01 — THE WORK — uniform gallery grid ──────────────────────────── */}
      <section id="work" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            index="01"
            title="The Work"
            sub="Every piece below came out of this shop. Over 1,300 more on Instagram."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {portfolio.map((piece) => (
              <figure key={piece.src}>
                <div className="group relative aspect-[4/5] overflow-hidden" style={{ background: CARD }}>
                  <Image
                    src={piece.src}
                    alt={piece.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 text-center">
                  <span className="block text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: ACCENT }}>
                    {piece.label}
                  </span>
                  <span className="block text-xs" style={{ color: T2 }}>
                    {piece.sub}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="inline-block px-7 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/5"
              style={{ borderColor: BORDER, color: LIGHT }}
            >
              View Full Gallery — @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* ── 02 — THE ARTISTS — uniform roster cards ───────────────────────── */}
      <section id="artists" className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="02"
            title="The Artists"
            sub="Every piece starts with a conversation. Book with the artist whose work speaks to you."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {artists.map((artist) => (
              <div key={artist.name} className="border p-7 text-center flex flex-col items-center" style={{ background: CARD, borderColor: BORDER }}>
                <div
                  className="w-16 h-16 flex items-center justify-center border mb-5"
                  style={{ borderColor: ACCENT }}
                >
                  <span className="text-2xl leading-none" style={{ ...BEBAS, color: ACCENT }}>
                    {artist.initial}
                  </span>
                </div>
                <h3 className="text-xl tracking-[0.1em] text-white mb-2" style={BEBAS}>
                  {artist.name}
                </h3>
                <p className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>
                  {artist.specialty}
                </p>
                <p className="text-xs leading-relaxed mb-6 flex-1" style={{ color: T2 }}>
                  {artist.bio}
                </p>
                <a
                  href={PHONE_HREF}
                  className="text-[10px] font-bold tracking-[0.25em] uppercase underline underline-offset-4 hover:opacity-60 transition-opacity"
                  style={{ color: LIGHT }}
                >
                  Book with {artist.name.split(" ")[0]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 — SERVICES — tight price-list rows ─────────────────────────── */}
      <section id="services" className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG, borderColor: BORDER }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            index="03"
            title="Services"
            sub="Every custom piece starts with a free consult — talk through the idea, get an honest quote. No pressure, no deposit to talk."
          />

          <div className="border-t" style={{ borderColor: BORDER }}>
            {services.map((svc) => (
              <div
                key={svc.name}
                className="flex items-baseline justify-between gap-6 py-5 border-b transition-colors hover:bg-[#101010]"
                style={{ borderColor: BORDER }}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg tracking-[0.08em] text-white" style={BEBAS}>
                      {svc.name}
                    </h3>
                    {svc.popular && (
                      <span
                        className="text-[8px] font-bold tracking-[0.25em] uppercase px-2 py-0.5"
                        style={{ background: ACCENT, color: "#0A0A0A" }}
                      >
                        Most Requested
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed max-w-md" style={{ color: T2 }}>
                    {svc.desc}
                  </p>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-right shrink-0" style={{ color: ACCENT }}>
                  {svc.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={PHONE_HREF}
              className="inline-block px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── PRESS-QUOTE BAND ──────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="relative py-20 md:py-32 px-5 md:px-8 overflow-hidden">
        <Image
          src="/images/tampa-tattoo-co/editorial-studio.jpg"
          alt="Gallery-style tattoo studio interior with gold-framed art under warm light"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.88)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-8" style={{ color: ACCENT }}>
            Word Around Tampa
          </p>
          <blockquote className="font-display italic text-xl md:text-2xl leading-relaxed text-white mb-6">
            &ldquo;{pressQuote.text}&rdquo;
          </blockquote>
          <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: T2 }}>
            {pressQuote.author} — {pressQuote.source}
          </p>
          <p className="mt-8 text-[10px] tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
            ★★★★★ {AVG_RATING} — {REVIEW_COUNT} Google reviews
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {reviews.map((review) => (
              <blockquote key={review.author} className="p-6 border" style={{ background: "rgba(20,20,20,0.85)", borderColor: BORDER }}>
                <p className="mb-3 text-[10px] tracking-[0.2em]" style={{ color: ACCENT }}>★★★★★</p>
                <p className="leading-relaxed mb-4 text-xs" style={{ color: "rgba(245,238,220,0.9)" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="text-[9px] tracking-[0.25em] uppercase" style={{ color: T2 }}>
                  {review.author} — Google review
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 — START YOUR PIECE — wizard only, no imagery ───────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            index="04"
            title="Start Your Piece"
            sub="Three quick steps — style, placement, and how to reach you. Or skip it all and just call the shop."
          />
          <ConsultFlow />
        </div>
      </section>

      {/* ── 05 — FAQ + BOOKING CHANNELS ───────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG, borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader index="05" title="Good to Know" />

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr),minmax(0,3fr)] gap-10 lg:gap-16 items-start">
            {/* booking channels */}
            <div className="space-y-px" style={{ background: BORDER }}>
              {[
                { label: "Call the shop", value: PHONE_FORMATTED, href: PHONE_HREF, cta: "Call" },
                { label: "Book online", value: "Fresha — pick your slot", href: FRESHA_URL, cta: "Book" },
                { label: "Walk in", value: `${ADDRESS_LINE_1} — 7 days a week`, href: DIRECTIONS_URL, cta: "Directions" },
              ].map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-[#161616]"
                  style={{ background: CARD }}
                >
                  <div>
                    <span className="block text-[9px] tracking-[0.35em] uppercase mb-1" style={{ color: ACCENT }}>
                      {ch.label}
                    </span>
                    <span className="block text-sm" style={{ color: LIGHT }}>{ch.value}</span>
                  </div>
                  <span className="text-[9px] tracking-[0.3em] uppercase underline underline-offset-4 shrink-0" style={{ color: T2 }}>
                    {ch.cta}
                  </span>
                </a>
              ))}
            </div>

            <Faq items={faqItems} accent={ACCENT} />
          </div>
        </div>
      </section>

      {/* ── 06 — VISIT — details + real embedded map ──────────────────────── */}
      <section id="visit" className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader index="06" title="Visit" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="space-y-8">
              <div>
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: ACCENT }}>Address</h4>
                <p className="text-base text-white">{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</p>
                <p className="text-xs mt-1" style={{ color: T2 }}>Look for the gold crest on the glass.</p>
              </div>
              <div>
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: ACCENT }}>Hours</h4>
                <table className="text-sm w-full max-w-xs" style={{ color: T2 }}>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: BORDER }}>
                      <td className="py-2">Mon — Sat</td>
                      <td className="text-right text-white">9 AM – 10 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="text-right text-white">11 AM – 7 PM</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[10px] tracking-[0.25em] uppercase mt-3" style={{ color: ACCENT }}>
                  Walk-ins welcome, every day
                </p>
              </div>
              <div>
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: ACCENT }}>Contact</h4>
                <p className="text-sm">
                  <a href={PHONE_HREF} className="hover:opacity-70 transition-opacity" style={{ color: LIGHT }}>
                    {PHONE_FORMATTED}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={PHONE_HREF}
                  className="px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110"
                  style={{ background: ACCENT, color: "#0A0A0A" }}
                >
                  Book a Consultation
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
                  style={{ borderColor: "rgba(245,238,220,0.35)", color: LIGHT }}
                >
                  Directions
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: BORDER }}>
              <iframe
                src={MAP_EMBED_URL}
                title="Map — Tampa Tattoo Co., 1012 N Howard Ave, Tampa, FL 33607"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 border-t" style={{ background: BG, borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-lg tracking-[0.1em] text-white" style={BEBAS}>@{INSTAGRAM_HANDLE}</p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-[9px] tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
              style={{ color: ACCENT }}
            >
              12.6k followers — Follow →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {igPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
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
      <footer className="py-12 px-5 md:px-8 text-sm border-t" style={{ background: BG2, borderColor: BORDER, color: T2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-lg tracking-[0.1em] mb-2 text-white" style={BEBAS}>{BUSINESS_NAME}</p>
            <p className="text-xs">{TAGLINE}</p>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: ACCENT }}>Visit</h4>
            <p className="text-xs leading-relaxed">
              {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />
              <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: ACCENT }}>Follow</h4>
            <div className="flex gap-4 text-[10px] tracking-[0.2em] uppercase">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href={`https://www.tiktok.com/@${TIKTOK_HANDLE}`} className="hover:text-white transition-colors">TikTok</a>
              <a href={`https://facebook.com/${FACEBOOK_HANDLE}`} className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-10 pt-6 border-t text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          style={{ borderColor: BORDER, color: "rgba(245,238,220,0.4)" }}
        >
          <span>&copy; {new Date().getFullYear()} {BUSINESS_NAME} &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
