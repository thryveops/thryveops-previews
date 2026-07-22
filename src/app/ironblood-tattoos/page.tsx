import Image from "next/image";
import Link from "next/link";
import ConsultFlow from "./ConsultFlow";
import Faq from "./Faq";

// ─── IRONBLOOD TATTOOS — Editorial Ink concept mockup by Thryve Operations ────
// Gallery-editorial system matched to the approved Tampa Tattoo Co. standard:
// restrained type scale, uniform grids, centered section composition, generous
// whitespace. Accent: blood crimson (#8B0000) with antique gold as secondary
// trim. Contrast rule: crimson is too dark for small text on near-black, so
// small accent text (indexes, stars, labels) uses gold; crimson-filled buttons
// always use white text. All imagery is local — GMB work shots are the
// prospect's own; hero/studio scenes are generated editorial imagery (no real
// people depicted). Artist cards are monogram tiles: no stock faces on real
// names.

const BUSINESS_NAME = "Ironblood Tattoos";
const TAGLINE = "Your skin. Our art.";

// Palette — blood crimson + gold trim on near-black
const BG = "#0A0A0A";
const BG2 = "#0E0E0E";
const CARD = "#141414";
const BORDER = "#242424";
const T2 = "#A3A3A3";
const ACCENT = "#8B0000";
const GOLD = "#C9A84C";
const LIGHT = "#F5EDED";

const BEBAS = { fontFamily: "var(--font-bebas-neue)" } as const;

const PHONE_FORMATTED = "(813) 815-0089";
const PHONE_HREF = "tel:+18138150089";
const EMAIL = "ironbloodtattoos@gmail.com";
const ADDRESS_LINE_1 = "1034 W Hillsborough Ave";
const ADDRESS_LINE_2 = "Tampa, FL 33603";
const DIRECTIONS_URL = "https://www.google.com/maps/search/1034+W+Hillsborough+Ave+Tampa+FL+33603";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Ironblood%20Tattoos%2C%201034%20W%20Hillsborough%20Ave%2C%20Tampa%2C%20FL%2033603&z=15&output=embed";
const INSTAGRAM_HANDLE = "ironblood.tattoos";
const INSTAGRAM_URL = "https://www.instagram.com/ironblood.tattoos/";
const FACEBOOK_URL = "https://www.facebook.com/Ironbloodtatt00s/";
const AVG_RATING = "4.9";
const REVIEW_COUNT = "487";

export const metadata = {
  title: `${BUSINESS_NAME} — Custom Tattoos & Piercings in North Tampa`,
  description:
    "Ironblood Tattoos — anime, watercolor, realism, and new school tattoos on W Hillsborough Ave, North Tampa. Book with Oscar, Tai, or Maya. 4.9 stars, 487 Google reviews — call (813) 815-0089.",
};

// Services — real offerings, prices, and deposits from the shop
const services = [
  {
    name: "Custom Tattoo",
    desc: "Original artwork designed around your idea — anime, watercolor, realism, horror, new school. Consultation included for complex pieces.",
    price: "From $150",
    deposit: "$100 deposit",
    popular: true,
  },
  {
    name: "Art Commission",
    desc: "Custom digital artwork delivered before your appointment. Five-day creation window; deposit applies to final cost.",
    price: "Custom quote",
    deposit: "$300 deposit",
    popular: false,
  },
  {
    name: "Piercing",
    desc: "Ear, nose, and body. Minors 16–18 require notarized parental consent per Florida law. Walk-ins welcome.",
    price: "Call for pricing",
    deposit: "Walk-ins welcome",
    popular: false,
  },
  {
    name: "Tattoo Removal",
    desc: "Laser removal with documented before/after progress. Multiple sessions typically required depending on ink density and age.",
    price: "Consultation",
    deposit: "By appointment",
    popular: false,
  },
];

// Gallery — the shop's own GMB work shots, uniform tiles
const portfolio = [
  {
    src: "/images/ironblood-tattoos/gmb-9.jpg",
    alt: "Calcifer flame character tattoo on an arm",
    label: "Anime & Watercolor",
    sub: "Calcifer, arm piece",
  },
  {
    src: "/images/ironblood-tattoos/gmb-1.jpg",
    alt: "Color realism chest piece of a face with a crown of thorns",
    label: "Color Realism",
    sub: "Crown of thorns, chest",
  },
  {
    src: "/images/ironblood-tattoos/gmb-3.jpg",
    alt: "Cover-up progression triptych with a broken clock and spiral staircase",
    label: "Cover-Up",
    sub: "Broken clock rework",
  },
  {
    src: "/images/ironblood-tattoos/gmb-4.jpg",
    alt: "Black and grey bearded face tattoo on a thigh",
    label: "Black & Grey",
    sub: "Bearded portrait, thigh",
  },
];

// Artists — all real, from the shop's own roster. Monogram tiles only:
// no stock photography on real people.
const artists = [
  {
    initial: "OS",
    name: "Oscar Soriano",
    specialty: "Anime · Watercolor · Realism · Horror",
    avail: "Booked 3–4 wks",
    bio: "Owner and lead artist, 14 years in — trained alongside Teresa Sharpe and Stefano Alcantara. Tampa's go-to for anime, pop-culture portraits, and intricate watercolor work.",
  },
  {
    initial: "T",
    name: "Tai",
    specialty: "New School · Pokémon · Manga · Colorwork",
    avail: "",
    bio: "A hairstyling background gives Tai a bold sense of color and composition — Pokémon and manga-inspired pieces that stay saturated over time.",
  },
  {
    initial: "M",
    name: "Maya",
    specialty: "Portfolio on Instagram",
    avail: "",
    bio: "The newest member of the Ironblood family. Follow @ironblood.tattoos to see where her portfolio is headed.",
  },
];

// composite reviews — replace with real GMB quotes before live deployment
const pressQuote = {
  text: "I drove 45 minutes for Oscar's anime work and I'd do it again. Clean lines, insane color, and he actually listened to what I wanted.",
  author: "Priya L.",
  source: "Google review",
};

const reviews = [
  {
    text: "Oscar and Tai are hands down the best people to spend an entire day with. The work speaks for itself but honestly the vibe in the shop makes the whole experience. My anime sleeve came out better than I imagined.",
    author: "Marcus T.",
  },
  {
    text: "Very friendly and true artists. The shop is clean and professional. Oscar's line work is amazing and his personality makes you want to come back. Five stars isn't enough honestly.",
    author: "Dani R.",
  },
];

const igPhotos = [
  { src: "/images/ironblood-tattoos/gmb-5.jpg", alt: "Beetlejuice cartoon tattoo" },
  { src: "/images/ironblood-tattoos/gmb-7.jpg", alt: "Raichu and Pichu color Pokémon piece" },
  { src: "/images/ironblood-tattoos/gmb-8.jpg", alt: "Stitch cover-up progression triptych" },
  { src: "/images/ironblood-tattoos/gmb-9.jpg", alt: "Calcifer flame character arm piece" },
  { src: "/images/ironblood-tattoos/gmb-10.jpg", alt: "Fine-line surreal Dali-inspired forearm piece" },
  { src: "/images/ironblood-tattoos/gmb-1.jpg", alt: "Color realism crown of thorns chest piece" },
];

const faqItems = [
  {
    q: "How do deposits work?",
    a: "A $100 deposit secures a tattoo appointment and a $300 deposit secures an art commission — both apply toward your final cost. Deposits are placed via Cash App once your booking is confirmed. The shop takes cash, Cash App, and Venmo.",
  },
  {
    q: "How old do I have to be?",
    a: "Tattoos are 18+ with a valid government-issued photo ID. Piercings for minors aged 16–18 require notarized parental consent per Florida law.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Yes — Monday through Saturday, 1:30 to 9 PM, for piercings, small flash, and availability checks. Larger custom pieces should be booked ahead; Oscar typically books 3–4 weeks out.",
  },
  {
    q: "How much will my tattoo cost?",
    a: `Custom tattoos start at $150 and are quoted from size, placement, and detail. Call ${PHONE_FORMATTED} or DM @${INSTAGRAM_HANDLE} with your reference for an honest quote.`,
  },
  {
    q: "How should I prepare for my session?",
    a: "Eat a full meal beforehand, stay hydrated, and skip alcohol for 24 hours before your appointment. Wear clothing that gives easy access to the placement area, and bring your reference material.",
  },
  {
    q: "What should I expect from laser removal?",
    a: "Removal is a process, not a one-visit fix — multiple sessions are typically required depending on ink density and age. It starts with a consultation, and progress is documented session to session.",
  },
];

// Shared section header — small centered index + modest tracked uppercase title
function SectionHeader({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: GOLD }}>
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
              IRONBLOOD TATTOOS
            </span>
            <span className="block text-[8px] tracking-[0.4em] uppercase mt-1" style={{ color: GOLD }}>
              Est. 2013 — Tampa
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
              className="px-5 py-2 text-[10px] font-bold tracking-[0.25em] uppercase transition hover:brightness-125"
              style={{ background: ACCENT, color: "#FFFFFF" }}
            >
              Book
            </a>
          </div>
          <a
            href={PHONE_HREF}
            className="md:hidden px-4 py-2 text-[10px] font-bold tracking-[0.25em] uppercase"
            style={{ background: ACCENT, color: "#FFFFFF" }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO — full-bleed photo, shop title, address, two CTAs, air ───── */}
      <header id="top" className="relative h-svh min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ironblood-tattoos/editorial-hero.jpg"
          alt="Tattoo artist working on a large ornate back piece under deep crimson light"
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
          <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-7" style={{ color: GOLD }}>
            Custom Tattoos — Est. 2013
          </p>
          <h1 className="text-5xl md:text-7xl leading-none text-white" style={BEBAS}>
            Ironblood Tattoos
          </h1>
          <p className="mt-6 text-[11px] md:text-xs tracking-[0.4em] uppercase text-white/75">
            {ADDRESS_LINE_1} — Tampa, Florida
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase transition hover:brightness-125"
              style={{ background: ACCENT, color: "#FFFFFF" }}
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              className="px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10 text-white"
              style={{ borderColor: "rgba(245,237,237,0.4)" }}
            >
              See the Work
            </a>
          </div>
          <p className="mt-10 text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,237,237,0.6)" }}>
            <span style={{ color: GOLD }}>★★★★★</span>{`  ${AVG_RATING} — ${REVIEW_COUNT} Google reviews  ·  Walk-ins Mon–Sat`}
          </p>
        </div>
      </header>

      {/* ── 01 — THE WORK — uniform gallery grid ──────────────────────────── */}
      <section id="work" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            index="01"
            title="The Work"
            sub="Every piece below came out of this shop. Hundreds more on Instagram."
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
                  <span className="block text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: GOLD }}>
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
              href={INSTAGRAM_URL}
              className="inline-block px-7 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/5"
              style={{ borderColor: BORDER, color: LIGHT }}
            >
              View Full Gallery — @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* ── 02 — THE ARTISTS — uniform monogram roster cards ──────────────── */}
      <section id="artists" className="py-20 md:py-28 px-5 md:px-8 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="02"
            title="The Artists"
            sub="At Ironblood you book a person, not a slot. Find the artist whose style matches your vision, then book direct."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {artists.map((artist) => (
              <div key={artist.name} className="border p-7 text-center flex flex-col items-center" style={{ background: CARD, borderColor: BORDER }}>
                <div
                  className="w-16 h-16 flex items-center justify-center border mb-5"
                  style={{ borderColor: GOLD }}
                >
                  <span className="text-2xl leading-none" style={{ ...BEBAS, color: GOLD }}>
                    {artist.initial}
                  </span>
                </div>
                <h3 className="text-xl tracking-[0.1em] text-white mb-2" style={BEBAS}>
                  {artist.name}
                </h3>
                <p className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
                  {artist.specialty}
                </p>
                {artist.avail && (
                  <p className="text-[8px] font-bold tracking-[0.25em] uppercase border px-2 py-1 mb-4" style={{ color: GOLD, borderColor: GOLD }}>
                    {artist.avail}
                  </p>
                )}
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
            sub="Deposits apply toward your final cost. Cash, Cash App, and Venmo accepted — deposits placed via Cash App on confirmation."
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
                        style={{ background: ACCENT, color: "#FFFFFF" }}
                      >
                        Most Requested
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed max-w-md" style={{ color: T2 }}>
                    {svc.desc}
                  </p>
                </div>
                <span className="text-right shrink-0">
                  <span className="block text-[10px] tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                    {svc.price}
                  </span>
                  <span className="block mt-1 text-[9px] tracking-[0.2em] uppercase" style={{ color: T2 }}>
                    {svc.deposit}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={PHONE_HREF}
              className="inline-block px-7 py-3 text-[11px] font-bold tracking-[0.25em] uppercase transition hover:brightness-125"
              style={{ background: ACCENT, color: "#FFFFFF" }}
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
          src="/images/ironblood-tattoos/editorial-studio.jpg"
          alt="Dark tattoo studio interior with a crimson LED strip, framed art, and a tattoo chair"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.88)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-8" style={{ color: GOLD }}>
            Word Around Tampa
          </p>
          <blockquote className="font-display italic text-xl md:text-2xl leading-relaxed text-white mb-6">
            &ldquo;{pressQuote.text}&rdquo;
          </blockquote>
          <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: T2 }}>
            {pressQuote.author} — {pressQuote.source}
          </p>
          <p className="mt-8 text-[10px] tracking-[0.25em] uppercase" style={{ color: GOLD }}>
            ★★★★★ {AVG_RATING} — {REVIEW_COUNT} Google reviews
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {reviews.map((review) => (
              <blockquote key={review.author} className="p-6 border" style={{ background: "rgba(20,20,20,0.85)", borderColor: BORDER }}>
                <p className="mb-3 text-[10px] tracking-[0.2em]" style={{ color: GOLD }}>★★★★★</p>
                <p className="leading-relaxed mb-4 text-xs" style={{ color: "rgba(245,237,237,0.9)" }}>
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
                { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, cta: "Email" },
                { label: "Walk in", value: `${ADDRESS_LINE_1} — Mon–Sat, 1:30–9 PM`, href: DIRECTIONS_URL, cta: "Directions" },
              ].map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-[#161616]"
                  style={{ background: CARD }}
                >
                  <div>
                    <span className="block text-[9px] tracking-[0.35em] uppercase mb-1" style={{ color: GOLD }}>
                      {ch.label}
                    </span>
                    <span className="block text-sm break-all" style={{ color: LIGHT }}>{ch.value}</span>
                  </div>
                  <span className="text-[9px] tracking-[0.3em] uppercase underline underline-offset-4 shrink-0" style={{ color: T2 }}>
                    {ch.cta}
                  </span>
                </a>
              ))}
            </div>

            <Faq items={faqItems} accent={GOLD} />
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
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: GOLD }}>Address</h4>
                <p className="text-base text-white">{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</p>
                <p className="text-xs mt-1" style={{ color: T2 }}>North Tampa — near Seminole Heights.</p>
              </div>
              <div>
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: GOLD }}>Hours</h4>
                <table className="text-sm w-full max-w-xs" style={{ color: T2 }}>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: BORDER }}>
                      <td className="py-2">Mon — Sat</td>
                      <td className="text-right text-white">1:30 PM – 9 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="text-right text-white">Appointment only</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[10px] tracking-[0.25em] uppercase mt-3" style={{ color: GOLD }}>
                  Walk-ins welcome, Mon–Sat
                </p>
              </div>
              <div>
                <h4 className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: GOLD }}>Contact</h4>
                <p className="text-sm">
                  <a href={PHONE_HREF} className="hover:opacity-70 transition-opacity" style={{ color: LIGHT }}>
                    {PHONE_FORMATTED}
                  </a>
                </p>
                <p className="text-sm mt-1">
                  <a href={`mailto:${EMAIL}`} className="hover:opacity-70 transition-opacity" style={{ color: LIGHT }}>
                    {EMAIL}
                  </a>
                </p>
                <p className="text-xs mt-2" style={{ color: T2 }}>Cash · Cash App · Venmo</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={PHONE_HREF}
                  className="px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase transition hover:brightness-125"
                  style={{ background: ACCENT, color: "#FFFFFF" }}
                >
                  Book a Consultation
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border transition hover:bg-white/10"
                  style={{ borderColor: "rgba(245,237,237,0.35)", color: LIGHT }}
                >
                  Directions
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: BORDER }}>
              <iframe
                src={MAP_EMBED_URL}
                title="Map — Ironblood Tattoos, 1034 W Hillsborough Ave, Tampa, FL 33603"
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
              href={INSTAGRAM_URL}
              className="text-[9px] tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
              style={{ color: GOLD }}
            >
              Follow →
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
            <p className="text-xs">{TAGLINE} — Custom tattoos & piercings in North Tampa since 2013.</p>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Visit</h4>
            <p className="text-xs leading-relaxed">
              {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />
              <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a><br />
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
            </p>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Follow</h4>
            <div className="flex gap-4 text-[10px] tracking-[0.2em] uppercase">
              <a href={INSTAGRAM_URL} className="hover:text-white transition-colors">Instagram</a>
              <a href={FACEBOOK_URL} className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-10 pt-6 border-t text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          style={{ borderColor: BORDER, color: "rgba(245,237,237,0.4)" }}
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
