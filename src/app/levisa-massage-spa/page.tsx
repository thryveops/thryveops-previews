import Image from "next/image";
import Link from "next/link";

// ─── LeVisa Massage Spa & Wellness — Tampa, FL ────────────────────────────────
// Track B concept: what levisamassage.com SHOULD be — a real marketing site in
// front of their (real) WellnessLiving booking flow, instead of a bare
// login-walled widget. Fonts (Fraunces + Inter) load globally via layout.tsx.

// Business identity
const BUSINESS_NAME = "LeVisa Massage Spa & Wellness";
const TAGLINE = "Massage, Facials & Wellness in Tampa";
const NEIGHBORHOOD = "Town 'N Country · Tampa, FL";

// Brand palette — serene, warm wellness: eucalyptus sage + warm ivory
const PAPER = "#FAF9F4"; // warm ivory page background
const INK = "#22302A"; // deep green-charcoal — body text + dark sections
const ACCENT = "#54705A"; // eucalyptus sage — primary
const ACCENT2 = "#2E4034"; // deep forest — prices, links
const RULE = "#E2E0D2"; // sage-tinted divider

// Contact & links
const PHONE_FORMATTED = "(813) 440-3281";
const PHONE_RAW = "8134403281";
const EMAIL = "levisamassage@gmail.com";
const ADDRESS_LINE_1 = "3104 W Waters Ave Ste 105";
const ADDRESS_LINE_2 = "Tampa, FL 33614";
const BOOKING_URL =
  "https://www.wellnessliving.com/explore/locations/physiotherapy/us-fl-tampa/levisamassagespawellness/";
const DIRECTIONS_URL = "https://maps.google.com/?cid=17583455156257939974";
const INSTAGRAM_HANDLE = "levisa_massage_spa";
const FACEBOOK_HANDLE = "LeVisaMassage";
const AVG_RATING = "4.9";
const REVIEW_COUNT = "772";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE}`,
  description:
    "Latina-owned massage spa on W Waters Ave in Tampa. Swedish, deep tissue, hot stone, couples massage and customized facials — rated 4.9 stars across 772 Google reviews. Book online in minutes.",
};

// ─── SERVICES — real menu from their WellnessLiving / Booksy listings ─────────
// Prices shown as "from" ranges — final pricing confirmed at booking.
const services = [
  {
    name: "Swedish Massage",
    desc: "Classic full-body relaxation with light-to-medium pressure — the reset button for stress and tension.",
    duration: "60 min",
    price: "from $80",
  },
  {
    name: "Deep Tissue / Neuromuscular",
    desc: "Focused, therapeutic pressure that works into chronic knots, posture pain, and overworked muscles.",
    duration: "60 min",
    price: "from $95",
  },
  {
    name: "Hot Stone Massage",
    desc: "Warm basalt stones melt tension deeper than hands alone — our most-requested seasonal favorite.",
    duration: "75 min",
    price: "from $110",
  },
  {
    name: "Signature Couples Massage",
    desc: "Side-by-side Swedish massage in a shared room — anniversaries, date nights, or just because.",
    duration: "60 / 90 min",
    price: "from $170",
  },
  {
    name: "Prenatal Massage",
    desc: "Gentle, safe relief for moms-to-be — positioned comfortably and tailored to every trimester.",
    duration: "60 min",
    price: "from $90",
  },
  {
    name: "LeVisa Customized Facial",
    desc: "A skin consult plus cleanse, exfoliation, mask, and massage — built around your skin, not a script.",
    duration: "60 min",
    price: "from $95",
  },
  {
    name: "Four Hands Massage",
    desc: "Two therapists working in mirrored rhythm — twice the coverage, complete surrender.",
    duration: "60 min",
    price: "from $160",
  },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
// composite reviews — replace with real GMB quotes before live deployment
const reviews = [
  {
    text: "I came in with a shoulder I could barely lift and walked out feeling like a new person. The deep tissue work here is the real thing — they actually listen to where it hurts.",
    author: "Marisol R. · Google review",
  },
  {
    text: "The hot stone massage was heaven. The room was quiet, warm, and smelled amazing — you forget you are a few minutes off Waters Ave. Booking online took two minutes.",
    author: "James T. · Google review",
  },
  {
    text: "My husband and I did the couples massage for our anniversary and it was perfect. Dunia and her team make you feel like family from the moment you walk in.",
    author: "Carolina M. · Google review",
  },
];

// ─── GALLERY — treatment rooms, hands-on work, spa details ────────────────────
const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&q=80",
    alt: "Hot stone massage on a client's back",
  },
  {
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=80",
    alt: "Relaxing facial massage treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=900&q=80",
    alt: "Warm, serene spa relaxation room",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80",
    alt: "Customized facial mask application",
  },
  {
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80",
    alt: "Basalt stones placed along the spine",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80",
    alt: "Massage oils prepared before a session",
  },
];

// ─── INSTAGRAM GRID — verified via scripts/check-mockup-images.sh ─────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1611073615452-4889cb93422e?w=400&q=80",
  "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?w=400&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80",
  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
// SERVER COMPONENT — no "use client", no event handlers. Tailwind hover: only.
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(250,249,244,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT2 }}>
            LeVisa <span className="font-normal italic" style={{ color: ACCENT }}>Massage Spa</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#story" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#gallery" className="hover:opacity-60 transition-opacity">Gallery</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book Online
            </a>
          </div>
          <a
            href={BOOKING_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[82vh] min-h-[560px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1800&q=80"
          alt="Relaxation massage with warm oils at LeVisa Massage Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(34,48,42,0.35) 0%, rgba(34,48,42,0.50) 50%, rgba(34,48,42,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/70">
            {NEIGHBORHOOD}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Leave the stress{" "}
            <span className="italic font-normal" style={{ color: "#A9C0A6" }}>at the door.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Therapeutic massage, hot stone, couples sessions, and customized facials —
            from one of Tampa&rsquo;s highest-rated massage studios.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book Online
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/80">
            <span className="tracking-wider" style={{ color: "#D8C58B" }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews</span>
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
              Choose your hour of calm
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Transparent starting prices. Book online in under a minute — no phone tag, no login wall.
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
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">Duration</span>
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
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Starting prices shown — final pricing confirmed when you book through WellnessLiving.
          </p>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Latina-owned. Tampa-loved.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              LeVisa Massage Spa &amp; Wellness is led by founder and president Dunia Alvarez,
              who built this Town &rsquo;N Country studio on a simple idea: real therapeutic
              work, delivered with warmth, in rooms designed to slow you down.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              That idea shows in the numbers — a 4.9-star rating across {REVIEW_COUNT} Google
              reviews, earned one session at a time. Whether you need serious deep tissue
              relief or a quiet hour with hot stones, you&rsquo;ll be treated like family.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=900&q=80"
              alt="Aromatherapy candles and towels in a LeVisa treatment room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Space
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Step inside
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Quiet rooms, warm stones, steady hands — a few minutes off Waters Ave.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#A9C0A6" }}>
              Loved by locals
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">Based on {REVIEW_COUNT} reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: "#D8C58B" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={DIRECTIONS_URL}
              className="text-sm font-medium underline underline-offset-4 text-white/70 hover:text-white transition-colors"
            >
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── VISIT ─────────────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Find us on Waters Ave
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Address</h4>
                <p className="text-gray-700">{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Hours</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr><td className="pr-8 py-0.5">Mon — Sat</td><td>9 AM – 6 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Sunday</td><td>10 AM – 2 PM</td></tr>
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
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={BOOKING_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Book Online
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
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80"
              alt="Fresh towels and spa essentials at LeVisa Massage Spa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 border-t" style={{ background: PAPER, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@{INSTAGRAM_HANDLE}</p>
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
                  alt="LeVisa Massage Spa Instagram photo"
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
              <a href={`https://facebook.com/${FACEBOOK_HANDLE}`} className="hover:text-white transition-colors">Facebook</a>
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
