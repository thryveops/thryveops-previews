import Image from "next/image";
import Link from "next/link";
import ConsultFlow from "./ConsultFlow";
import Faq from "./Faq";
import { Reveal, HeroMedia, Marquee, ParallaxBand } from "./Motion";

// ─── ANGRY RAVEN TATTOO — Editorial Ink concept mockup by Thryve Operations ───
// Gallery-editorial system modeled on the approved Tampa Tattoo Co. build:
// restrained type scale, uniform grids, centered section composition, generous
// whitespace. Accent: rust orange from the shop's red-orange-on-black
// storefront sign. Work photos are the prospect's own GMB shots; hero/studio
// scenes are generated editorial imagery (no real people depicted). Filler
// artist entries are concept placeholders for layout demonstration.

const BUSINESS_NAME = "Angry Raven Tattoo";
const TAGLINE = "Custom tattoos on W Waters Ave, Tampa";

// Palette — rust orange on near-black
const BG = "#0A0A0A";
const BG2 = "#0E0E0E";
const CARD = "#141414";
const BORDER = "#242424";
const T2 = "#A3A3A3";
const ACCENT = "#C7502E";
const LIGHT = "#F8EDE7";

const BEBAS = { fontFamily: "var(--font-bebas-neue)" } as const;

const PHONE_FORMATTED = "(941) 539-7513";
const PHONE_HREF = "tel:+19415397513";
const ADDRESS_LINE_1 = "1816 W Waters Ave";
const ADDRESS_LINE_2 = "Tampa, FL 33604";
const DIRECTIONS_URL = "https://maps.google.com/?q=Angry+Raven+Tattoo+1816+W+Waters+Ave+Tampa+FL+33604";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Angry%20Raven%20Tattoo%2C%201816%20W%20Waters%20Ave%2C%20Tampa%2C%20FL%2033604&z=15&output=embed";
const IG_SHOP = "angry_raven_tattoo";
const IG_NASH = "nash_desantis_tattoo";
const AVG_RATING = "5.0";
const REVIEW_COUNT = "299";

export const metadata = {
  title: `${BUSINESS_NAME} — Custom Tattoos in Tampa, Walk-Ins Until 10 PM`,
  description:
    "Custom tattoos, walk-ins, cover-ups, fine line, black & grey, and color realism by Nash De Santis. 5.0 stars across 299 Google reviews. 1816 W Waters Ave, Tampa. Military and first-responder discounts.",
};

// Services — real offerings from the shop, $100 walk-in shop minimum
const services = [
  {
    name: "Custom Tattoos",
    desc: "One-of-one pieces designed with you from scratch — Nash draws every custom piece himself.",
    price: "Consult for quote",
    popular: true,
  },
  {
    name: "Walk-Ins",
    desc: "Open until 10 PM six nights a week. Come by with an idea and leave with ink the same day.",
    price: "$100 shop minimum",
    popular: false,
  },
  {
    name: "Cover-Ups",
    desc: "Old ink, bad ink, someone's name — reworked into a piece you actually want to show off.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Fine Line",
    desc: "Delicate single-needle work — script, florals, and minimal pieces with clean healed results.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Black & Grey",
    desc: "Smooth shading, statues, portraits, and ornamental work built to age well.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Color Realism",
    desc: "Saturated, layered color — koi, florals, and full-color pieces that stay vivid.",
    price: "Consult for quote",
    popular: false,
  },
];

// Gallery — the shop's own GMB work shots, uniform tiles
const portfolio = [
  {
    src: "/images/angry-raven-tattoo/gmb-2.jpg",
    alt: "Nordic runic ornamental shoulder piece",
    label: "Nordic / Blackwork",
    sub: "Runic ornamental, shoulder",
  },
  {
    src: "/images/angry-raven-tattoo/gmb-4.jpg",
    alt: "Black and grey warrior woman thigh piece",
    label: "Black & Grey Realism",
    sub: "Warrior woman, thigh",
  },
  {
    src: "/images/angry-raven-tattoo/gmb-8.jpg",
    alt: "Color koi and cherry blossom rib piece",
    label: "Color",
    sub: "Koi & cherry blossoms, ribs",
  },
  {
    src: "/images/angry-raven-tattoo/gmb-3.jpg",
    alt: "Script lettering forearm tattoo with doves",
    label: "Script & Lettering",
    sub: "Script with doves, forearm",
  },
];

// Artists — Nash is real; the other two entries are concept placeholders
// (filler names for layout demonstration, per client direction).
const artists = [
  {
    initial: "N",
    name: "Nash De Santis",
    specialty: "Nordic / Blackwork · Realism · Cover-Ups",
    bio: "Owner. Angry Raven is Nash's shop from the sign on the roof to the needle in his hand — he draws every custom piece himself, from Nordic blackwork to color realism.",
  },
  {
    initial: "S",
    name: "Sofia Marsh",
    specialty: "Color · Neo-Traditional",
    bio: "Bold, saturated color work — koi, florals, and statement pieces with clean healed results.",
  },
  {
    initial: "D",
    name: "Dante Cole",
    specialty: "Fine Line · Script",
    bio: "Delicate single-needle work — lettering, dates, and minimal pieces that heal crisp.",
  },
];

// composite reviews — replace with real GMB quotes before live deployment
const pressQuote = {
  text: "Nash is amazing and exceeded my expectations! He is very talented and explained every step and made me feel comfortable while getting a tattoo. He went above and beyond!",
  author: "Google review",
  source: "5.0 stars",
};

const reviews = [
  {
    text: "Walked in on a Tuesday night with a rough idea and walked out with a piece better than what I had pictured. The shop is spotless and the whole vibe is welcoming.",
    author: "Google review",
  },
  {
    text: "Got my cover-up done here after two other shops said it could not be saved. You would never know there was anything underneath it. Worth every penny.",
    author: "Google review",
  },
];

const igPhotos = [
  { src: "/images/angry-raven-tattoo/gmb-2.jpg", alt: "Nordic runic ornamental shoulder piece" },
  { src: "/images/angry-raven-tattoo/gmb-4.jpg", alt: "Black and grey warrior woman thigh piece" },
  { src: "/images/angry-raven-tattoo/gmb-8.jpg", alt: "Color koi and cherry blossom rib piece" },
  { src: "/images/angry-raven-tattoo/gmb-3.jpg", alt: "Script lettering forearm tattoo with doves" },
  { src: "/images/angry-raven-tattoo/gmb-7.jpg", alt: "Realistic shark teeth arm tattoo" },
  { src: "/images/angry-raven-tattoo/gmb-5.jpg", alt: "Inside Angry Raven Tattoo — dark walls, red doors, working stations" },
];

const faqItems = [
  {
    q: "Do you take walk-ins?",
    a: "Yes — the shop is open until 10 PM Monday through Saturday and Sundays 12 to 8, so walk-ins work even after a full day. First come, first served; larger custom pieces are better booked as a consultation so there's time to design them properly.",
  },
  {
    q: "How much will my tattoo cost?",
    a: "Custom work is quoted at your consultation based on size, placement, and detail — sit down with Nash, talk through the idea, get an honest number.",
  },
  {
    q: "What's the shop minimum?",
    a: "$100 — that's the starting price for walk-ins and small pieces, no matter how simple the design.",
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
    q: "Do you offer any discounts?",
    a: "Military and first-responder discounts, every day — just show your ID at the desk.",
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
              ANGRY RAVEN
            </span>
            <span className="block text-[8px] tracking-[0.4em] uppercase mt-1" style={{ color: ACCENT }}>
              Tattoo — Tampa
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

      {/* ── HERO — parallax media, shop title, bleeds into The Work ───────── */}
      <header id="top" className="relative h-[112svh] min-h-[700px] overflow-hidden">
        <HeroMedia
          still="/images/angry-raven-tattoo/editorial-hero.jpg"
          alt="Silhouetted tattoo artist inking a client's shoulder under rust-orange light"
        />
        {/* hero image is dark/silhouetted — lighter top gradient stop than usual */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.3) 38%, rgba(10,10,10,0.8) 74%, #0A0A0A 100%)" }}
        />
        <div className="relative z-10 h-svh flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl mx-auto pt-14">
          <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-7" style={{ color: ACCENT }}>
            Custom Tattoos — Tampa, FL
          </p>
          <h1 className="text-5xl md:text-7xl leading-none text-white" style={BEBAS}>
            Angry Raven Tattoo
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
              style={{ borderColor: "rgba(248,237,231,0.4)" }}
            >
              See the Work
            </a>
          </div>
          <p className="mt-10 text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(248,237,231,0.6)" }}>
            <span style={{ color: ACCENT }}>★★★★★</span>{`  ${AVG_RATING} — ${REVIEW_COUNT} Google reviews  ·  Walk-ins until 10 PM`}
          </p>
        </div>
        </div>
      </header>

      {/* ── 01 — THE WORK — bleeds up over the hero tail ──────────────────── */}
      <section id="work" className="relative z-10 -mt-[16svh] scroll-mt-24 pb-20 md:pb-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader
              index="01"
              title="The Work"
              sub="Every piece below came out of this shop. Fresh ink every week on Instagram."
            />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {portfolio.map((piece, i) => (
              <Reveal key={piece.src} delay={i * 0.08}>
              <figure>
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
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`https://instagram.com/${IG_SHOP}`}
              className="inline-block px-7 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/5"
              style={{ borderColor: BORDER, color: LIGHT }}
            >
              View Full Gallery — @{IG_SHOP}
            </a>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL MARQUEE ─────────────────────────────────────────────── */}
      <Marquee
        items={["Walk-Ins Welcome", "Custom Tattoos", "Nordic & Blackwork", "Cover-Ups", "Military & First-Responder Discounts", "1816 W Waters Ave"]}
        accent={ACCENT}
        border={BORDER}
        color={T2}
      />

      {/* ── 02 — THE ARTISTS — uniform roster cards ───────────────────────── */}
      <section id="artists" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionHeader
              index="02"
              title="The Artists"
              sub="Every piece starts with a conversation. Book with the artist whose work speaks to you."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {artists.map((artist, i) => (
              <Reveal key={artist.name} delay={i * 0.1} className="h-full">
              <div className="border p-7 text-center flex flex-col items-center h-full" style={{ background: CARD, borderColor: BORDER }}>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 — SERVICES — tight price-list rows ─────────────────────────── */}
      <section id="services" className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG, borderColor: BORDER }}>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionHeader
              index="03"
              title="Services"
              sub="Walk-ins start at the $100 shop minimum — custom work is quoted at your consultation. Talk through the idea, get an honest number."
            />
          </Reveal>

          <Reveal>
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
          </Reveal>

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
          src="/images/angry-raven-tattoo/editorial-studio.jpg"
          alt="Dark studio wall with framed raven artwork under rust-orange glow"
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
              <blockquote key={review.text} className="p-6 border" style={{ background: "rgba(20,20,20,0.85)", borderColor: BORDER }}>
                <p className="mb-3 text-[10px] tracking-[0.2em]" style={{ color: ACCENT }}>★★★★★</p>
                <p className="leading-relaxed mb-4 text-xs" style={{ color: "rgba(248,237,231,0.9)" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="text-[9px] tracking-[0.25em] uppercase" style={{ color: T2 }}>
                  {review.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 — START YOUR PIECE — wizard only, no imagery ───────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <SectionHeader
              index="04"
              title="Start Your Piece"
              sub="Three quick steps — style, size and placement, and how to reach you. Or skip it all and just call the shop."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ConsultFlow />
          </Reveal>
        </div>
      </section>

      {/* ── 05 — FAQ + BOOKING CHANNELS ───────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG, borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionHeader index="05" title="Good to Know" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr),minmax(0,3fr)] gap-10 lg:gap-16 items-start">
            {/* booking channels */}
            <div className="space-y-px" style={{ background: BORDER }}>
              {[
                { label: "Call the shop", value: PHONE_FORMATTED, href: PHONE_HREF, cta: "Call" },
                { label: "Instagram DM", value: `@${IG_SHOP}`, href: `https://instagram.com/${IG_SHOP}`, cta: "DM" },
                { label: "Walk in", value: `${ADDRESS_LINE_1} — until 10 PM, Mon-Sat`, href: DIRECTIONS_URL, cta: "Directions" },
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

      {/* ── PARALLAX DIVIDER — ink macro at depth ─────────────────────────── */}
      <ParallaxBand
        src="/images/angry-raven-tattoo/editorial-detail.jpg"
        alt="Macro of tattoo ink bottles and needle cartridges in amber light"
      >
        <p className="text-[11px] tracking-[0.5em] uppercase text-white/85">W Waters Ave — Tampa, FL</p>
      </ParallaxBand>

      {/* ── 06 — VISIT — details + real embedded map ──────────────────────── */}
      <section id="visit" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader index="06" title="Visit" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="space-y-8">
              <div>
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: ACCENT }}>Address</h4>
                <p className="text-base text-white">{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</p>
                <p className="text-xs mt-1" style={{ color: T2 }}>Look for the raven on the sign.</p>
              </div>
              <div>
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: ACCENT }}>Hours</h4>
                <table className="text-sm w-full max-w-xs" style={{ color: T2 }}>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: BORDER }}>
                      <td className="py-2">Mon — Sat</td>
                      <td className="text-right text-white">11 AM – 10 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="text-right text-white">12 PM – 8 PM</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[10px] tracking-[0.25em] uppercase mt-3" style={{ color: ACCENT }}>
                  Military & first-responder discounts — show ID
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
                  style={{ borderColor: "rgba(248,237,231,0.35)", color: LIGHT }}
                >
                  Directions
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: BORDER }}>
              <iframe
                src={MAP_EMBED_URL}
                title="Map — Angry Raven Tattoo, 1816 W Waters Ave, Tampa, FL 33604"
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
            <p className="text-lg tracking-[0.1em] text-white" style={BEBAS}>@{IG_SHOP}</p>
            <a
              href={`https://instagram.com/${IG_SHOP}`}
              className="text-[9px] tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
              style={{ color: ACCENT }}
            >
              Fresh ink, every week — Follow →
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
              <a href={`https://instagram.com/${IG_SHOP}`} className="hover:text-white transition-colors">@{IG_SHOP}</a>
              <a href={`https://instagram.com/${IG_NASH}`} className="hover:text-white transition-colors">@{IG_NASH}</a>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-10 pt-6 border-t text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          style={{ borderColor: BORDER, color: "rgba(248,237,231,0.4)" }}
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
