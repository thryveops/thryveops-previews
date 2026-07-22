import Image from "next/image";
import Link from "next/link";
import ConsultFlow from "./ConsultFlow";

// ─── TAMPA TATTOO CO. — concept mockup by Thryve Operations ───────────────────
// Dark near-black base + antique gold accent (matches the ornate gold-frame
// storefront mural). All photos are the prospect's own GMB photos.

const BUSINESS_NAME   = "Tampa Tattoo Co.";
const TAGLINE         = "Custom tattoos on Howard Ave since 2015";

// Palette — antique gold on near-black. Dark text on gold backgrounds.
const BG      = "#0A0A0A";   // page base
const BG2     = "#111111";   // alternate sections
const CARD    = "#161616";   // card backgrounds
const BORDER  = "#262626";   // dividers
const T2      = "#A3A3A3";   // secondary text
const ACCENT  = "#C9A84C";   // antique gold
const LIGHT   = "#F5EEDC";   // parchment light

const PHONE_FORMATTED  = "(813) 644-5959";
const PHONE_HREF       = "tel:+18136445959";
const ADDRESS_LINE_1   = "1012 N Howard Ave";
const ADDRESS_LINE_2   = "Tampa, FL 33607";
const FRESHA_URL       = "https://www.fresha.com/lvp/tampa-tattoo-co-north-howard-avenue-tampa-6NqV8P";
const DIRECTIONS_URL   = "https://maps.google.com/?q=Tampa+Tattoo+Co,+1012+N+Howard+Ave,+Tampa,+FL+33607";
const INSTAGRAM_HANDLE = "tampatattooco";
const TIKTOK_HANDLE    = "tampatattooco";
const FACEBOOK_HANDLE  = "ttc813";
const AVG_RATING       = "4.7";
const REVIEW_COUNT     = "201";

export const metadata = {
  title: `${BUSINESS_NAME} — Custom Tattoos in Tampa, Walk-Ins Welcome`,
  description:
    "Award-winning custom tattoo studio on N Howard Ave, Tampa. Black & grey realism, color work, portraits, and cover-ups. Walk-ins welcome 7 days a week — call (813) 644-5959 to book a consultation.",
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

// Portfolio — the shop's own GMB photos
const portfolio = [
  {
    src: "/images/tampa-tattoo-co/gmb-2.jpg",
    alt: "Black and grey realism ship sleeve on a forearm",
    label: "Black & Grey Realism",
    sub: "Full-rigged ship, forearm sleeve",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-3.jpg",
    alt: "Color panda and cherry blossom shoulder tattoo",
    label: "Color Work",
    sub: "Panda & cherry blossoms, shoulder",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-8.jpg",
    alt: "Photorealistic portrait hand tattoo next to the reference photo",
    label: "Portraits",
    sub: "Photoreal portrait, matched to reference",
  },
  {
    src: "/images/tampa-tattoo-co/gmb-4.jpg",
    alt: "Black and grey rose tattoo on a wrist",
    label: "Fine Detail",
    sub: "Black & grey rose, wrist",
  },
];

// composite reviews — replace with real GMB quotes before live deployment
const reviews = [
  {
    text: "Walked in on a Sunday with a rough idea and walked out with a rose piece on my wrist that looks like a photograph. They took the time to get it right before the needle ever touched skin.",
    author: "Marcus D. · Google review",
  },
  {
    text: "Ness has been tattooing me since the Inkwolves days. The shop feels like an art gallery and the black and grey work speaks for itself. My whole sleeve was done here.",
    author: "Priscilla R. · Google review",
  },
  {
    text: "Got a portrait of my dad done and my family could not believe it wasn't a photo. Clean shop, fair quote at the consult, zero attitude. This is the spot in Tampa.",
    author: "J. Alvarez · Google review",
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

// ─── PAGE — server component: no "use client", no event handlers ──────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: BG, color: LIGHT }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(10,10,10,0.92)", borderColor: BORDER }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT }}>
            {BUSINESS_NAME}
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: LIGHT }}>
            <a href="#work" className="hover:opacity-60 transition-opacity">The Work</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#shop" className="hover:opacity-60 transition-opacity">The Shop</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={PHONE_HREF}
              className="px-5 py-2 rounded-full text-sm font-semibold transition hover:brightness-110"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book a Consultation
            </a>
          </div>
          <a
            href={PHONE_HREF}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: ACCENT, color: "#0A0A0A" }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO — the shop's own storefront mural ────────────────────────── */}
      <section className="relative h-[86vh] min-h-[580px] flex items-end overflow-hidden">
        <Image
          src="/images/tampa-tattoo-co/gmb-6.jpg"
          alt="Tampa Tattoo Co. storefront window with ornate gold-framed mural art"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.92) 100%)" }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>
            Tampa &middot; N Howard Ave &middot; Est. 2015
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-5 leading-[1.02] text-white max-w-3xl">
            Custom ink.{" "}
            <span className="italic font-normal" style={{ color: ACCENT }}>Walk-ins welcome.</span>
          </h1>
          <p className="text-lg md:text-xl mb-9 max-w-xl leading-relaxed" style={{ color: "rgba(245,238,220,0.85)" }}>
            Black &amp; grey realism, color work, portraits, and cover-ups — from a shop that&rsquo;s been part of Tampa&rsquo;s tattoo story for over a decade. Open 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_HREF}
              className="px-8 py-4 rounded-full font-semibold text-center transition hover:brightness-110"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              className="px-8 py-4 rounded-full font-semibold text-center border transition hover:bg-white/10"
              style={{ borderColor: "rgba(245,238,220,0.4)", color: LIGHT }}
            >
              See the Work
            </a>
          </div>
          <div className="mt-9 flex items-center gap-2 text-sm" style={{ color: "rgba(245,238,220,0.7)" }}>
            <span className="tracking-wider" style={{ color: ACCENT }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews</span>
            <span className="hidden sm:inline" style={{ color: "rgba(245,238,220,0.35)" }}>·</span>
            <span className="hidden sm:inline">Walk-ins welcome — it&rsquo;s on the window</span>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO — real work, full-bleed grid ────────────────────────── */}
      <section id="work" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              Ink that speaks for itself
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: T2 }}>
              Every piece below came out of this shop. Over 1,300 more on{" "}
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: ACCENT }}
              >
                @{INSTAGRAM_HANDLE}
              </a>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {portfolio.map((piece) => (
              <figure
                key={piece.src}
                className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-lg border"
                style={{ borderColor: BORDER, background: CARD }}
              >
                <Image
                  src={piece.src}
                  alt={piece.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-5"
                  style={{ background: "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.88) 100%)" }}
                >
                  <figcaption>
                    <span className="block text-xs tracking-[0.25em] uppercase mb-1" style={{ color: ACCENT }}>
                      {piece.label}
                    </span>
                    <span className="block text-sm text-white/85">{piece.sub}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              What we do
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: T2 }}>
              Every custom piece starts with a free consult — sit down, talk through the idea, get an honest quote. No pressure, no deposit to talk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="relative p-6 rounded-lg border transition-colors duration-200 hover:border-[#C9A84C]"
                style={{ background: CARD, borderColor: BORDER }}
              >
                {svc.popular && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: ACCENT, color: "#0A0A0A" }}
                  >
                    Most requested
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold mb-2 text-white">{svc.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: T2 }}>
                  {svc.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: ACCENT }}>
                    {svc.price}
                  </span>
                  <a
                    href={PHONE_HREF}
                    className="text-sm font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: LIGHT }}
                  >
                    Book a consult →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULT FLOW — interactive wizard (client component) ──────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Start Your Piece
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              Plan your consultation
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: T2 }}>
              Three quick steps — style, placement, and how to reach you. Or skip it all and just call{" "}
              <a href={PHONE_HREF} className="underline underline-offset-4" style={{ color: ACCENT }}>
                {PHONE_FORMATTED}
              </a>.
            </p>
          </div>
          <ConsultFlow />
        </div>
      </section>

      {/* ── THE SHOP / STORY ──────────────────────────────────────────────── */}
      <section id="shop" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border" style={{ borderColor: BORDER }}>
            <Image
              src="/images/tampa-tattoo-co/gmb-7.jpg"
              alt="Tampa Tattoo Co. gallery-style interior with framed art"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Shop
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Part gallery,<br />part tattoo shop
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "rgba(245,238,220,0.8)" }}>
              This corner of Howard Ave has been inking Tampa for a long time. In 2015, after eight years tattooing at Inkwolves, Ness took over the shop and rebuilt it into Tampa Tattoo Co. — framed art on every wall, the gold-crest mural on the glass, and a chair that&rsquo;s open when you are.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(245,238,220,0.8)" }}>
              Walk in with a photo, a sketch, or nothing but an idea. The consult is free, the quote is honest, and the work is built to last.
            </p>
          </div>
        </div>
      </section>

      {/* ── OWNER — monogram card (no stock faces on real names) ──────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 md:gap-14 items-center">
          <div
            className="w-48 h-60 md:w-56 md:h-72 mx-auto rounded-lg border flex flex-col items-center justify-center"
            style={{ background: CARD, borderColor: ACCENT }}
          >
            <span className="font-display text-7xl md:text-8xl font-bold" style={{ color: ACCENT }}>
              N
            </span>
            <span className="mt-3 text-xs tracking-[0.3em] uppercase" style={{ color: T2 }}>
              Est. 2015
            </span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Artist
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 text-white">Ness</h2>
            <p className="text-sm uppercase tracking-wider mb-5" style={{ color: ACCENT }}>
              Owner &middot; Tattoo Artist
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: "rgba(245,238,220,0.8)" }}>
              Nearly two decades in the craft — eight years at Inkwolves before taking over this shop in 2015. Realism, color, portraits, cover-ups: if you can describe it, Ness has probably already tattooed it.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block px-7 py-3.5 rounded-full font-semibold transition hover:brightness-110"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book with Ness
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Word Around Tampa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 text-white">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p style={{ color: T2 }}>Based on {REVIEW_COUNT} reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border" style={{ background: CARD, borderColor: BORDER }}>
                <p className="mb-3 tracking-wider" style={{ color: ACCENT }}>★★★★★</p>
                <p className="leading-relaxed mb-4" style={{ color: "rgba(245,238,220,0.9)" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="text-sm" style={{ color: T2 }}>— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ─────────────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-28 px-5 md:px-8" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Find the gold crest
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-white">Address</h4>
                <p style={{ color: T2 }}>{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white">Hours</h4>
                <table className="text-sm" style={{ color: T2 }}>
                  <tbody>
                    <tr><td className="pr-8 py-0.5">Mon — Sat</td><td>9 AM – 10 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Sunday</td><td>11 AM – 7 PM</td></tr>
                  </tbody>
                </table>
                <p className="text-sm mt-2" style={{ color: ACCENT }}>Walk-ins welcome, every day.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white">Reach us</h4>
                <p style={{ color: T2 }}>
                  <a href={PHONE_HREF} className="hover:opacity-70 transition-opacity" style={{ color: LIGHT }}>
                    {PHONE_FORMATTED}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={PHONE_HREF}
                  className="px-6 py-3 rounded-full text-sm font-semibold transition hover:brightness-110"
                  style={{ background: ACCENT, color: "#0A0A0A" }}
                >
                  Book a Consultation
                </a>
                <a
                  href={FRESHA_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold border transition hover:bg-white/10"
                  style={{ borderColor: "rgba(245,238,220,0.35)", color: LIGHT }}
                >
                  Book Online
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold border transition hover:bg-white/10"
                  style={{ borderColor: "rgba(245,238,220,0.35)", color: LIGHT }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden border" style={{ borderColor: BORDER }}>
            <Image
              src="/images/tampa-tattoo-co/gmb-1.jpg"
              alt="Artist tattooing a client at Tampa Tattoo Co."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 p-5"
              style={{ background: "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 100%)" }}
            >
              <p className="text-sm text-white/85">Chairs open until 10 PM, six nights a week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 border-t" style={{ background: BG2, borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold text-white">@{INSTAGRAM_HANDLE}</p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-sm font-medium hover:underline transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              12.6k followers — Follow →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded">
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
      <footer className="py-12 px-5 md:px-8 text-sm border-t" style={{ background: BG, borderColor: BORDER, color: T2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold mb-2" style={{ color: ACCENT }}>{BUSINESS_NAME}</p>
            <p>{TAGLINE}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>
              {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />
              <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href={`https://www.tiktok.com/@${TIKTOK_HANDLE}`} className="hover:text-white transition-colors">TikTok</a>
              <a href={`https://facebook.com/${FACEBOOK_HANDLE}`} className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2" style={{ borderColor: BORDER, color: "rgba(245,238,220,0.4)" }}>
          <span>&copy; {new Date().getFullYear()} {BUSINESS_NAME} &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
