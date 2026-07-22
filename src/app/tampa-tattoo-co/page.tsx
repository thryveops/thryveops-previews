import Image from "next/image";
import Link from "next/link";
import ConsultFlow from "./ConsultFlow";
import Faq from "./Faq";

// ─── TAMPA TATTOO CO. — Editorial Ink concept mockup by Thryve Operations ─────
// Dark gallery system modeled on high-end NYC studio sites: near-black base,
// oversized letterspaced display type, museum-label gallery, location-pride
// hero. Accent: antique gold from the shop's gold-crest storefront mural.
// Work photos are the prospect's own GMB shots; hero/studio/detail scenes are
// generated editorial imagery (no real people depicted).

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
    desc: "One-of-one designs drawn for you. Bring a reference, an idea, or just a feeling — Ness and the team build the piece from scratch.",
    price: "Consult for quote",
    popular: true,
  },
  {
    name: "Black & Grey Realism",
    desc: "Smooth-shaded realism — full sleeves, ships, roses, and fine detail work that holds up for decades.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Color Work",
    desc: "Saturated, painterly color pieces — florals, animals, and bold statement work built to stay vivid.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Portraits",
    desc: "Photorealistic portraits of the people who matter — side-by-side accurate to the reference photo.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Cover-Ups & Reworks",
    desc: "Old ink, new chapter. Honest assessment of what a cover-up can do, then a design that actually hides it.",
    price: "Consult for quote",
    popular: false,
  },
  {
    name: "Walk-Ins",
    desc: "No appointment needed — it's painted on the window. First come, first served, 7 days a week.",
    price: "Just show up",
    popular: false,
  },
];

// Gallery — the shop's own GMB work shots, museum-label captions
const portfolio = [
  {
    src: "/images/tampa-tattoo-co/gmb-2.jpg",
    alt: "Black and grey realism ship sleeve on a forearm",
    label: "Black & Grey Realism",
    sub: "Full-rigged ship — forearm sleeve",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-3.jpg",
    alt: "Color panda and cherry blossom shoulder tattoo",
    label: "Color Work",
    sub: "Panda & cherry blossoms — shoulder",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-8.jpg",
    alt: "Photorealistic portrait hand tattoo next to the reference photo",
    label: "Portraits",
    sub: "Photoreal portrait — matched to reference",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-4.jpg",
    alt: "Black and grey rose tattoo on a wrist",
    label: "Fine Detail",
    sub: "Black & grey rose — wrist",
    ratio: "aspect-[4/5]",
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
    text: "Walked in on a Sunday with a rough idea and walked out with a rose piece on my wrist that looks like a photograph. They took the time to get it right before the needle ever touched skin.",
    author: "Marcus D.",
  },
  {
    text: "Ness has been tattooing me since the Inkwolves days. The shop feels like an art gallery and the black and grey work speaks for itself. My whole sleeve was done here.",
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

// ─── PAGE — server component: no "use client", no event handlers ──────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: BG, color: LIGHT }}>

      {/* ── NAV — minimal editorial ───────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(10,10,10,0.9)", borderColor: BORDER }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="leading-none">
            <span className="block text-xl md:text-2xl tracking-[0.08em] text-white" style={BEBAS}>
              TAMPA TATTOO CO.
            </span>
            <span className="block text-[9px] tracking-[0.4em] uppercase mt-0.5" style={{ color: ACCENT }}>
              Est. 2015 — Howard Ave
            </span>
          </a>
          <div className="hidden md:flex items-center gap-9 text-[11px] font-medium tracking-[0.25em] uppercase">
            <a href="#work" className="hover:opacity-60 transition-opacity">The Work</a>
            <a href="#artist" className="hover:opacity-60 transition-opacity">The Artist</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#faq" className="hover:opacity-60 transition-opacity">FAQ</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={PHONE_HREF}
              className="px-6 py-2.5 text-[11px] font-bold tracking-[0.25em] uppercase transition hover:brightness-110"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book
            </a>
          </div>
          <a
            href={PHONE_HREF}
            className="md:hidden px-5 py-2.5 text-[11px] font-bold tracking-[0.25em] uppercase"
            style={{ background: ACCENT, color: "#0A0A0A" }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO — location-pride, full-bleed artist-at-work ──────────────── */}
      <header id="top" className="relative h-svh min-h-[640px] flex items-center justify-center overflow-hidden">
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
          style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.95) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto pt-16">
          <p className="text-[11px] md:text-xs tracking-[0.5em] uppercase mb-6" style={{ color: ACCENT }}>
            Tampa Tattoo Co. — Custom Tattoos — Est. 2015
          </p>
          <h1
            className="text-[17vw] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.9] text-white"
            style={BEBAS}
          >
            1012 N Howard Ave
          </h1>
          <p className="mt-5 text-sm md:text-base tracking-[0.45em] uppercase text-white/80">
            Tampa, Florida — Walk-Ins Welcome, 7 Days
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="px-10 py-4 text-xs font-bold tracking-[0.3em] uppercase transition hover:brightness-110"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              className="px-10 py-4 text-xs font-bold tracking-[0.3em] uppercase border transition hover:bg-white/10 text-white"
              style={{ borderColor: "rgba(245,238,220,0.4)" }}
            >
              See the Work
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(245,238,220,0.65)" }}>
            <span style={{ color: ACCENT }}>★★★★★</span>
            <span>{AVG_RATING} — {REVIEW_COUNT} Google reviews</span>
          </div>
        </div>
        <a
          href="#work"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.5em] uppercase hover:opacity-60 transition-opacity"
          style={{ color: "rgba(245,238,220,0.55)" }}
        >
          Scroll
        </a>
      </header>

      {/* ── 01 — THE WORK — museum-label gallery ──────────────────────────── */}
      <section id="work" className="py-24 md:py-36 px-5 md:px-10" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14 border-b pb-6" style={{ borderColor: BORDER }}>
            <div>
              <p className="text-[11px] tracking-[0.5em] uppercase mb-3" style={{ color: ACCENT }}>01</p>
              <h2 className="text-6xl md:text-8xl leading-[0.9] text-white" style={BEBAS}>The Work</h2>
            </div>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="hidden md:block text-[11px] tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
              style={{ color: T2 }}
            >
              1,300+ more on @{INSTAGRAM_HANDLE} →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {portfolio.map((piece, i) => (
              <figure key={piece.src} className={i % 2 === 1 ? "sm:mt-16" : ""}>
                <div className={`group relative ${piece.ratio} overflow-hidden`} style={{ background: CARD }}>
                  <Image
                    src={piece.src}
                    alt={piece.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                {/* museum placard */}
                <figcaption className="mt-4 flex items-baseline justify-between border-b pb-3" style={{ borderColor: BORDER }}>
                  <div>
                    <span className="block text-[11px] tracking-[0.3em] uppercase mb-1" style={{ color: ACCENT }}>
                      {piece.label}
                    </span>
                    <span className="block text-sm" style={{ color: T2 }}>{piece.sub}</span>
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase shrink-0" style={{ color: "rgba(245,238,220,0.3)" }}>
                    TTC — {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 text-center md:hidden">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ color: ACCENT }}
            >
              1,300+ more on @{INSTAGRAM_HANDLE} →
            </a>
          </div>
        </div>
      </section>

      {/* ── 02 — THE ARTIST — editorial feature, monogram (no stock faces) ── */}
      <section id="artist" className="py-24 md:py-36 px-5 md:px-10 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-3" style={{ color: ACCENT }}>02</p>
          <h2 className="text-6xl md:text-8xl leading-[0.9] text-white mb-16" style={BEBAS}>The Artist</h2>

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)] gap-12 md:gap-20 items-center">
            <div
              className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 w-full flex flex-col items-center justify-center border"
              style={{ background: CARD, borderColor: ACCENT }}
            >
              <span className="text-[10rem] leading-none" style={{ ...BEBAS, color: ACCENT }}>N</span>
              <span className="mt-4 text-[10px] tracking-[0.5em] uppercase" style={{ color: T2 }}>
                Est. 2015 — Howard Ave
              </span>
              <span
                className="absolute bottom-0 inset-x-0 py-3 text-center text-[10px] font-bold tracking-[0.4em] uppercase"
                style={{ background: ACCENT, color: "#0A0A0A" }}
              >
                Owner — Tattoo Artist
              </span>
            </div>

            <div>
              <h3 className="text-5xl md:text-6xl text-white mb-6" style={BEBAS}>Ness</h3>
              {/* Bang Bang-style personal quote */}
              <p className="font-display italic text-2xl md:text-3xl leading-snug mb-8" style={{ color: LIGHT }}>
                &ldquo;Every piece gets treated like it&rsquo;ll be worn for sixty years — because it will.&rdquo;
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: T2 }}>
                Nearly two decades in the craft — eight years at Inkwolves before taking over this corner of
                Howard Ave in 2015 and rebuilding it into Tampa Tattoo Co.: framed art on every wall, the
                gold-crest mural on the glass, and a chair that&rsquo;s open when you are.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T2 }}>
                Realism, color, portraits, cover-ups — if you can describe it, Ness has probably already
                tattooed it.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Black & Grey Realism", "Color", "Portraits", "Cover-Ups"].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 text-[10px] tracking-[0.25em] uppercase border"
                    style={{ borderColor: BORDER, color: T2 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={PHONE_HREF}
                className="inline-block px-10 py-4 text-xs font-bold tracking-[0.3em] uppercase transition hover:brightness-110"
                style={{ background: ACCENT, color: "#0A0A0A" }}
              >
                Book with Ness
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — SERVICES — editorial index list ──────────────────────────── */}
      <section id="services" className="py-24 md:py-36 px-5 md:px-10 border-t" style={{ background: BG, borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-3" style={{ color: ACCENT }}>03</p>
          <h2 className="text-6xl md:text-8xl leading-[0.9] text-white mb-6" style={BEBAS}>Services</h2>
          <p className="max-w-xl mb-16" style={{ color: T2 }}>
            Every custom piece starts with a free consult — sit down, talk through the idea, get an honest
            quote. No pressure, no deposit to talk.
          </p>

          <div className="border-t" style={{ borderColor: BORDER }}>
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="group grid grid-cols-[auto,1fr,auto] items-baseline gap-5 md:gap-10 py-7 md:py-8 border-b transition-colors hover:bg-[#111111]"
                style={{ borderColor: BORDER }}
              >
                <span className="text-sm tracking-[0.2em]" style={{ color: "rgba(245,238,220,0.3)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-3xl md:text-4xl text-white group-hover:opacity-90" style={BEBAS}>
                      {svc.name}
                    </h3>
                    {svc.popular && (
                      <span
                        className="text-[9px] font-bold tracking-[0.3em] uppercase px-2.5 py-1"
                        style={{ background: ACCENT, color: "#0A0A0A" }}
                      >
                        Most Requested
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed max-w-2xl" style={{ color: T2 }}>{svc.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: ACCENT }}>
                    {svc.price}
                  </span>
                  <a
                    href={PHONE_HREF}
                    className="text-[10px] tracking-[0.3em] uppercase underline underline-offset-4 hover:opacity-60 transition-opacity"
                    style={{ color: LIGHT }}
                  >
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS-QUOTE BAND — full-bleed studio scene + oversized quote ──── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="relative py-28 md:py-44 px-5 md:px-10 overflow-hidden">
        <Image
          src="/images/tampa-tattoo-co/editorial-studio.jpg"
          alt="Gallery-style tattoo studio interior with gold-framed art under warm light"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.86)" }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-10" style={{ color: ACCENT }}>
            Word Around Tampa
          </p>
          <blockquote className="font-display italic text-3xl md:text-5xl leading-tight text-white mb-8">
            &ldquo;{pressQuote.text}&rdquo;
          </blockquote>
          <p className="text-[11px] tracking-[0.35em] uppercase" style={{ color: T2 }}>
            {pressQuote.author} — {pressQuote.source}
          </p>
          <p className="mt-10 text-xs tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
            ★★★★★ {AVG_RATING} — {REVIEW_COUNT} Google reviews
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {reviews.map((review) => (
              <blockquote key={review.author} className="p-7 border" style={{ background: "rgba(20,20,20,0.85)", borderColor: BORDER }}>
                <p className="mb-3 text-sm tracking-[0.2em]" style={{ color: ACCENT }}>★★★★★</p>
                <p className="leading-relaxed mb-4 text-sm" style={{ color: "rgba(245,238,220,0.9)" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="text-[11px] tracking-[0.25em] uppercase" style={{ color: T2 }}>
                  {review.author} — Google review
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 — START YOUR PIECE — interactive consult flow ──────────────── */}
      <section className="py-24 md:py-36 px-5 md:px-10 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,2fr),minmax(0,3fr)] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-[0.5em] uppercase mb-3" style={{ color: ACCENT }}>04</p>
            <h2 className="text-6xl md:text-7xl leading-[0.9] text-white mb-6" style={BEBAS}>
              Start Your Piece
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: T2 }}>
              Three quick steps — style, placement, and how to reach you. Or skip it all and just call{" "}
              <a href={PHONE_HREF} className="underline underline-offset-4" style={{ color: ACCENT }}>
                {PHONE_FORMATTED}
              </a>.
            </p>
            <div className="relative aspect-square hidden lg:block overflow-hidden">
              <Image
                src="/images/tampa-tattoo-co/editorial-detail.jpg"
                alt="Macro detail of a tattoo machine and ink caps on a dark workstation"
                fill
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <ConsultFlow />
        </div>
      </section>

      {/* ── 05 — FAQ + BOOKING CHANNELS ───────────────────────────────────── */}
      <section id="faq" className="py-24 md:py-36 px-5 md:px-10 border-t" style={{ background: BG, borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-3" style={{ color: ACCENT }}>05</p>
          <h2 className="text-6xl md:text-8xl leading-[0.9] text-white mb-16" style={BEBAS}>
            Good to Know
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr),minmax(0,3fr)] gap-12 lg:gap-20 items-start">
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
                  className="flex items-center justify-between gap-4 p-6 transition-colors hover:bg-[#161616]"
                  style={{ background: CARD }}
                >
                  <div>
                    <span className="block text-[10px] tracking-[0.35em] uppercase mb-1.5" style={{ color: ACCENT }}>
                      {ch.label}
                    </span>
                    <span className="block text-sm" style={{ color: LIGHT }}>{ch.value}</span>
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase underline underline-offset-4 shrink-0" style={{ color: T2 }}>
                    {ch.cta}
                  </span>
                </a>
              ))}
            </div>

            <Faq items={faqItems} accent={ACCENT} />
          </div>
        </div>
      </section>

      {/* ── 06 — VISIT ────────────────────────────────────────────────────── */}
      <section id="visit" className="py-24 md:py-36 px-5 md:px-10 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-[11px] tracking-[0.5em] uppercase mb-3" style={{ color: ACCENT }}>06</p>
            <h2 className="text-6xl md:text-8xl leading-[0.9] text-white mb-10" style={BEBAS}>Visit</h2>

            <div className="space-y-8 text-base">
              <div>
                <h4 className="text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: ACCENT }}>Address</h4>
                <p className="text-xl text-white" style={BEBAS}>{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</p>
                <p className="text-sm mt-1" style={{ color: T2 }}>Look for the gold crest on the glass.</p>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: ACCENT }}>Hours</h4>
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
                <p className="text-[11px] tracking-[0.25em] uppercase mt-3" style={{ color: ACCENT }}>
                  Walk-ins welcome, every day
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={PHONE_HREF}
                  className="px-8 py-3.5 text-[11px] font-bold tracking-[0.3em] uppercase transition hover:brightness-110"
                  style={{ background: ACCENT, color: "#0A0A0A" }}
                >
                  Book a Consultation
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-8 py-3.5 text-[11px] font-bold tracking-[0.3em] uppercase border transition hover:bg-white/10"
                  style={{ borderColor: "rgba(245,238,220,0.35)", color: LIGHT }}
                >
                  Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden border" style={{ borderColor: BORDER }}>
            <Image
              src="/images/tampa-tattoo-co/gmb-6.jpg"
              alt="Tampa Tattoo Co. storefront window with ornate gold-framed mural art"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 p-5"
              style={{ background: "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 100%)" }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/85">
                The gold crest — {ADDRESS_LINE_1}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-14 px-5 md:px-10 border-t" style={{ background: BG, borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-7">
            <p className="text-2xl text-white" style={BEBAS}>@{INSTAGRAM_HANDLE}</p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-[10px] tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
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
      <footer className="py-14 px-5 md:px-10 text-sm border-t" style={{ background: BG2, borderColor: BORDER, color: T2 }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-2xl mb-2 text-white" style={BEBAS}>{BUSINESS_NAME}</p>
            <p className="text-sm">{TAGLINE}</p>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: ACCENT }}>Visit</h4>
            <p>
              {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />
              <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: ACCENT }}>Follow</h4>
            <div className="flex gap-5 text-[11px] tracking-[0.2em] uppercase">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href={`https://www.tiktok.com/@${TIKTOK_HANDLE}`} className="hover:text-white transition-colors">TikTok</a>
              <a href={`https://facebook.com/${FACEBOOK_HANDLE}`} className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div
          className="max-w-7xl mx-auto mt-12 pt-6 border-t text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2"
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
