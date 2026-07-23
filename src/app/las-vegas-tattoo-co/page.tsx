import Image from "next/image";
import Link from "next/link";
import ConsultFlow from "./ConsultFlow";
import Faq from "./Faq";
import { Reveal, HeroMedia, Marquee, ParallaxBand } from "@/components/motion";

// ─── DOC DOG'S LAS VEGAS TATTOO CO. — Editorial Ink concept mockup ────────────
// Concept mockup by Thryve Operations. Gallery-editorial system matched to the
// client-approved Tampa Tattoo Co. standard: restrained type scale, uniform
// grids, centered section composition, generous whitespace. Accent: neon
// crimson from the shop's red-neon-on-black storefront. Work photos are the
// prospect's own GMB shots; hero/studio scenes are generated editorial imagery
// (no real people depicted).

const BUSINESS_NAME = "Las Vegas Tattoo Co.";
const FULL_NAME = "Doc Dog's Las Vegas Tattoo Co.";
const TAGLINE = "Tattoo & piercing in Ybor City since 2003. Family owned. Walk-ins welcome.";

// Palette — neon crimson on near-black
const BG = "#0A0A0A";
const BG2 = "#0E0E0E";
const CARD = "#141414";
const BORDER = "#242424";
const T2 = "#A3A3A3";
const ACCENT = "#C0392B";
const LIGHT = "#F5EEEE";

const BEBAS = { fontFamily: "var(--font-bebas-neue)" } as const;

const PHONE_FORMATTED = "(813) 248-3004";
const PHONE_HREF = "tel:+18132483004";
const ADDRESS_LINE_1 = "1829 E 7th Ave";
const ADDRESS_LINE_2 = "Ybor City, Tampa, FL 33605";
const DIRECTIONS_URL = "https://maps.google.com/?q=Las+Vegas+Tattoo+Co+1829+E+7th+Ave+Tampa+FL+33605";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Las%20Vegas%20Tattoo%20Co%2C%201829%20E%207th%20Ave%2C%20Tampa%2C%20FL%2033605&z=15&output=embed";
const INSTAGRAM_HANDLE = "lasvegastattoocoybor";
const FACEBOOK_HANDLE = "LasVegasTattooCo";
const AVG_RATING = "4.7";
const REVIEW_COUNT = "435";

export const metadata = {
  title: "Doc Dog's Las Vegas Tattoo Co. — Tattoo & Piercing in Ybor City, Tampa",
  description:
    'Family-run tattoo and piercing shop on 7th Ave in Ybor City since 2003. Founder Tony "Doc Dog" Baker opened the first Las Vegas tattoo parlor in 1977 — and once tattooed Cher. Walk-ins welcome.',
};

// Services — consult-for-quote, no invented prices. Carried verbatim.
const services = [
  {
    name: "Custom Tattoos",
    desc: "Bring your idea or reference images — the artists draw it up and quote it in person. Every custom piece starts with a free consultation.",
    price: "Consult for quote",
    popular: true,
  },
  {
    name: "Walk-in Flash",
    desc: "Classic flash off the wall, done same-day. First come, first served — the Ybor way since 2003.",
    price: "Ask in shop",
    popular: false,
  },
  {
    name: "Fine-line & Script",
    desc: "Delicate single-needle florals, lettering, and minimal pieces that heal clean.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Black & Grey",
    desc: "Smooth shading and realism — portraits, wildlife, and large-scale work built over sessions.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Color & Neo-traditional",
    desc: "Bold, saturated color work that holds up for decades. Doc Dog has been proving it since 1977.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Piercings by Belle",
    desc: "Gentle, patient, and repeatedly review-praised by first-timers. Quality jewelry in the case, sterile technique every time.",
    price: "Priced by piercing + jewelry",
    popular: false,
  },
];

// Gallery — the shop's own GMB work shots, uniform tiles
const portfolio = [
  {
    src: "/images/las-vegas-tattoo-co/gmb-3.jpg",
    alt: "Fine-line butterfly and sunflower forearm tattoo",
    label: "Fine-line & Script",
    sub: "Butterfly & sunflower, forearm",
  },
  {
    src: "/images/las-vegas-tattoo-co/gmb-4.jpg",
    alt: "Black and grey shark leg tattoo",
    label: "Black & Grey",
    sub: "Shark, leg",
  },
  {
    src: "/images/las-vegas-tattoo-co/gmb-7.jpg",
    alt: "Neo-traditional color tattoo of a woman with devil hand",
    label: "Color & Neo-traditional",
    sub: "Woman & devil hand",
  },
  {
    src: "/images/las-vegas-tattoo-co/gmb-8.jpg",
    alt: "We The People script biceps tattoo",
    label: "Script & Lettering",
    sub: "We The People, biceps",
  },
];

// The real family — no public face photos exist, so monogram cards, never stock
// or generated faces.
const artists = [
  {
    initial: "TB",
    name: 'Tony "Doc Dog" Baker',
    specialty: "Founder & Artist",
    bio: "Tattooing for six decades. Opened the first Las Vegas tattoo parlor in 1977, tattooed Cher, and has run this shop on 7th Ave since 2003.",
  },
  {
    initial: "B",
    name: "Belle",
    specialty: "Piercer",
    bio: "The calm hands behind every piercing in the shop. First-timers ask for her by name — the reviews will tell you why.",
  },
  {
    initial: "C",
    name: "Colt",
    specialty: "Artist",
    bio: "Second-generation ink. Raised in the shop, carrying the family craft into its next era with a modern range of styles.",
  },
];

// composite reviews — replace with real GMB quotes before live deployment
const pressQuote = {
  text: "Drama-free, friendly shop with endless quality. You can tell the second you walk in that these people have been doing this forever.",
  author: "Google review",
  source: "Ybor City",
};

const reviews = [
  {
    text: "Belle did my first piercing and was so sweet and comforting the whole time. Soft hands, clean setup, zero stress.",
    author: "Google review",
  },
  {
    text: "The whole staff is personable, professional, and inviting. A real family shop in the middle of Ybor — not a tourist trap.",
    author: "Google review",
  },
];

const igPhotos = [
  { src: "/images/las-vegas-tattoo-co/gmb-3.jpg", alt: "Fine-line butterfly and sunflower forearm tattoo" },
  { src: "/images/las-vegas-tattoo-co/gmb-4.jpg", alt: "Black and grey shark leg tattoo" },
  { src: "/images/las-vegas-tattoo-co/gmb-6.jpg", alt: "Blackwork dove hand tattoo" },
  { src: "/images/las-vegas-tattoo-co/gmb-7.jpg", alt: "Neo-traditional color tattoo of a woman with devil hand" },
  { src: "/images/las-vegas-tattoo-co/gmb-8.jpg", alt: "We The People script biceps tattoo" },
  { src: "/images/las-vegas-tattoo-co/gmb-2.jpg", alt: "Piercing jewelry display case at Las Vegas Tattoo Co." },
];

const faqItems = [
  {
    q: "Do you take walk-ins?",
    a: "Yes — flash off the wall is done same-day, first come, first served, the Ybor way since 2003. For larger custom pieces, come in for a free consultation so there's time to design it properly.",
  },
  {
    q: "How much will my tattoo cost?",
    a: "Every piece is quoted in person at the consult based on size, placement, and detail. Bring your idea or reference images and get a straight answer — no games.",
  },
  {
    q: "How do piercings work?",
    a: "Belle handles every piercing in the shop — gentle, patient, and repeatedly review-praised by first-timers. Piercings are priced per piercing, with jewelry from the case priced separately.",
  },
  {
    q: "How old do I have to be?",
    a: "18 or older with a valid government-issued photo ID for tattoos — Florida law, no exceptions. For piercings, call the shop about minor piercing consent requirements.",
  },
  {
    q: "How should I prepare for my session?",
    a: "Eat a full meal beforehand, stay hydrated, and skip alcohol for 24 hours before your appointment. Wear clothing that gives easy access to the placement area.",
  },
  {
    q: "What's the story behind the name?",
    a: 'The name is history, not geography. In 1977, Tony "Doc Dog" Baker opened the very first tattoo parlor in Las Vegas — and once tattooed Cher. Since October 2003, home has been 1829 E 7th Ave in Ybor City, with the whole family working the shop.',
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
              LAS VEGAS TATTOO CO.
            </span>
            <span className="block text-[8px] tracking-[0.4em] uppercase mt-1" style={{ color: ACCENT }}>
              Ybor City — Est. 1977
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
              className="px-5 py-2 text-[10px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110 text-white"
              style={{ background: ACCENT }}
            >
              Book
            </a>
          </div>
          <a
            href={PHONE_HREF}
            className="md:hidden px-4 py-2 text-[10px] font-bold tracking-[0.25em] uppercase text-white"
            style={{ background: ACCENT }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO — parallax media, shop title, bleeds into The Work ───────── */}
      <header id="top" className="relative h-[112svh] min-h-[700px] overflow-hidden">
        <HeroMedia
          still="/images/las-vegas-tattoo-co/editorial-hero.jpg"
          alt="Tattoo artist working on a client's arm under red neon light with vintage flash sheets on the wall"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.3) 38%, rgba(10,10,10,0.8) 74%, #0A0A0A 100%)" }}
        />
        <div className="relative z-10 h-svh flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl mx-auto pt-14">
          <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-7" style={{ color: ACCENT }}>
            Tattoo &amp; Piercing — Family-Run Since 2003
          </p>
          <h1 className="text-5xl md:text-7xl leading-none text-white" style={BEBAS}>
            Las Vegas Tattoo Co.
          </h1>
          <p className="mt-6 text-[11px] md:text-xs tracking-[0.4em] uppercase text-white/75">
            {ADDRESS_LINE_1} — Ybor City, Tampa
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110 text-white"
              style={{ background: ACCENT }}
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              className="px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10 text-white"
              style={{ borderColor: "rgba(245,238,238,0.4)" }}
            >
              See the Work
            </a>
          </div>
          <p className="mt-10 text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,238,238,0.6)" }}>
            <span style={{ color: ACCENT }}>★★★★★</span>{`  ${AVG_RATING} — ${REVIEW_COUNT} Google reviews  ·  Walk-ins welcome`}
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
              sub="Every piece below came out of this shop. Fresh work posted on Instagram."
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
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="inline-block px-7 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/5"
              style={{ borderColor: BORDER, color: LIGHT }}
            >
              View Full Gallery — @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL MARQUEE ─────────────────────────────────────────────── */}
      <Marquee
        items={["Walk-Ins Welcome", "Tattoo & Piercing", "American Traditional", "Family-Run Since 2003", "Doc Dog — Since 1977", "1829 E 7th Ave — Ybor City"]}
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
              sub="Three chairs, one family — the people whose name is on the door, not a franchise."
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
                  Book with {artist.name.split(" ")[0].replace(/"/g, "")}
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
              sub="Every piece is quoted in person — bring your idea, get a straight answer. Custom work starts with a free consultation."
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
                        className="text-[8px] font-bold tracking-[0.25em] uppercase px-2 py-0.5 text-white"
                        style={{ background: ACCENT }}
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
              className="inline-block px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110 text-white"
              style={{ background: ACCENT }}
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
          src="/images/las-vegas-tattoo-co/editorial-studio.jpg"
          alt="Old-school tattoo parlor wall covered in American traditional flash sheets under red neon glow"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.88)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-8" style={{ color: ACCENT }}>
            Word Around Ybor
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
                <p className="leading-relaxed mb-4 text-xs" style={{ color: "rgba(245,238,238,0.9)" }}>
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
              sub="Three quick steps — style, size, and how to reach you. Or skip it all and just call the shop, or walk in off 7th Ave."
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
                { label: "Walk in", value: `${ADDRESS_LINE_1} — closed Tuesdays`, href: DIRECTIONS_URL, cta: "Directions" },
                { label: "Instagram", value: `@${INSTAGRAM_HANDLE}`, href: `https://instagram.com/${INSTAGRAM_HANDLE}`, cta: "Follow" },
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

      {/* ── PARALLAX DIVIDER — machine detail at depth ────────────────────── */}
      <ParallaxBand
        src="/images/las-vegas-tattoo-co/editorial-detail.jpg"
        alt="Vintage brass coil tattoo machine on worn leather in red light"
      >
        <p className="text-[11px] tracking-[0.5em] uppercase text-white/85">7th Ave — Ybor City, Tampa</p>
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
                <p className="text-xs mt-1" style={{ color: T2 }}>On 7th Ave, under the red neon.</p>
              </div>
              <div>
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: ACCENT }}>Hours</h4>
                <table className="text-sm w-full max-w-xs" style={{ color: T2 }}>
                  <tbody>
                    {[
                      { day: "Monday", time: "12 PM – 8 PM" },
                      { day: "Tuesday", time: "Closed" },
                      { day: "Wednesday", time: "12 PM – 9 PM" },
                      { day: "Thursday", time: "12 PM – 9 PM" },
                      { day: "Friday", time: "12 PM – 10 PM" },
                      { day: "Saturday", time: "12 PM – 10 PM" },
                      { day: "Sunday", time: "12 PM – 9 PM" },
                    ].map((h, i) => (
                      <tr key={h.day} className={i < 6 ? "border-b" : ""} style={{ borderColor: BORDER }}>
                        <td className="py-2">{h.day}</td>
                        <td
                          className="text-right"
                          style={h.time === "Closed" ? { color: ACCENT } : { color: "#FFFFFF" }}
                        >
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] tracking-[0.25em] uppercase mt-3" style={{ color: ACCENT }}>
                  Walk-ins welcome — flash &amp; most piercings
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
                  className="px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110 text-white"
                  style={{ background: ACCENT }}
                >
                  Book a Consultation
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
                  style={{ borderColor: "rgba(245,238,238,0.35)", color: LIGHT }}
                >
                  Directions
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: BORDER }}>
              <iframe
                src={MAP_EMBED_URL}
                title="Map — Las Vegas Tattoo Co., 1829 E 7th Ave, Tampa, FL 33605"
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
              Fresh work posted — Follow →
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
            <p className="text-lg tracking-[0.1em] mb-2 text-white" style={BEBAS}>{FULL_NAME}</p>
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
              <a href={`https://facebook.com/${FACEBOOK_HANDLE}`} className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-10 pt-6 border-t text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          style={{ borderColor: BORDER, color: "rgba(245,238,238,0.4)" }}
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
