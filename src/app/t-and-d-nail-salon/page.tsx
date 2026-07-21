import Image from "next/image";
import Link from "next/link";

// ─── PROSPECT DATA — T and D Nail Salon, South Tampa ──────────────────────────
// Track B mockup: zero web presence — this page IS the pitch.
// Fonts (Fraunces + Inter) are loaded globally via layout.tsx.

// Business identity
const BUSINESS_NAME = "T and D Nail Salon";
const TAGLINE       = "South Tampa's word-of-mouth nail salon";
const NEIGHBORHOOD  = "South Tampa · Gandy Blvd";

// Brand palette — warm rose-brown + cream: neighborhood salon, not med-spa.
const PAPER   = "#FBF7F4";   // warm cream page background
const INK     = "#2E2420";   // warm near-black for text + dark sections
const ACCENT  = "#C47A6D";   // rose-brown — warm, feminine, unfussy
const ACCENT2 = "#6E3B35";   // deep rosewood — prices + emphasis
const RULE    = "#EAD9D3";   // blush border / divider
const CREAM   = "#F5EBE0";   // soft cream panel background

// Contact & links — booking is phone or walk-in; there is no online booking yet.
const PHONE_FORMATTED = "(813) 831-0700";
const PHONE_RAW       = "8138310700";
const ADDRESS_LINE_1  = "4707 W Gandy Blvd";
const ADDRESS_LINE_2  = "Tampa, FL 33611";
const DIRECTIONS_URL  = "https://maps.google.com/?q=T+and+D+Nail+Salon+4707+W+Gandy+Blvd+Tampa+FL+33611";
const AVG_RATING      = "4.9";
const REVIEW_COUNT    = "590";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — Nails Done Right in South Tampa`,
  description:
    "T and D Nail Salon on Gandy Blvd — manicures, pedicures, dip powder, and acrylics from the South Tampa salon locals have trusted for years. Rated 4.9 stars across 590 Google reviews. Call (813) 831-0700 or walk in.",
};

// ─── SERVICES — typical menu for this salon category; confirm pricing with Linda
const services = [
  {
    name:     "Classic Manicure",
    desc:     "Shape, cuticle care, hand massage, and a flawless polish — the everyday tune-up regulars swear by.",
    duration: "30 min",
    price:    "$22",
  },
  {
    name:     "Gel Manicure",
    desc:     "Chip-resistant gel color that stays glossy for weeks. The most-requested service in the salon.",
    duration: "45 min",
    price:    "$40",
  },
  {
    name:     "Spa Pedicure",
    desc:     "Warm soak, exfoliating scrub, callus care, and massage. Kick back — this one is worth the chair time.",
    duration: "45 min",
    price:    "$35",
  },
  {
    name:     "Deluxe Pedicure",
    desc:     "Everything in the spa pedicure plus hot towels, extended massage, and paraffin. The Saturday treat.",
    duration: "60 min",
    price:    "$50",
  },
  {
    name:     "Dip Powder Set",
    desc:     "Lightweight, durable color without the UV lamp — natural-looking strength that lasts.",
    duration: "60 min",
    price:    "$50",
  },
  {
    name:     "Full Set Acrylics",
    desc:     "Custom length and shape, done with the patience it deserves. Ask about designs — they love a challenge.",
    duration: "75 min",
    price:    "$55+",
  },
  {
    name:     "Waxing",
    desc:     "Brows, lip, and face — quick, clean, and gentle. Easy to add on to any appointment.",
    duration: "15 min",
    price:    "$12+",
  },
];

// ─── TEAM — Linda (owner) and Andy are real first names from Google reviews ───
const team = [
  {
    name: "Linda",
    role: "Owner",
    bio:  "Linda has been taking care of South Tampa's hands and feet for years — half the regulars have been coming since their first visit. Ask for her by name.",
    img:  "https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?w=600&q=80",
  },
  {
    name: "Andy",
    role: "Nail Technician",
    bio:  "Precision sets, clean lines, and dip work that lasts. If you like your shape exact, Andy is your guy.",
    img:  "https://images.unsplash.com/photo-1586973762963-9c610b87803d?w=600&q=80",
  },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
// composite reviews — replace with real GMB quotes before live deployment
const reviews = [
  {
    text:   "I've been coming here for six years and have never once been disappointed. Linda remembers my color, my shape, and my kids' names. This place is family.",
    author: "Melissa R. · Google review",
  },
  {
    text:   "Best pedicure on the Gandy corridor, hands down. They never rush you, the massage is actually a massage, and my gel lasts three weeks minimum.",
    author: "Dana K. · Google review",
  },
  {
    text:   "Walked in on a Saturday expecting a wait — they got me in, and Andy did the cleanest dip set I've ever had. Found my new spot.",
    author: "Jasmine T. · Google review",
  },
];

// ─── GALLERY — verified nail-specific Unsplash IDs ────────────────────────────
const galleryPhotos = [
  { src: "https://images.unsplash.com/photo-1643648855057-ceb71f48ace8?w=500&q=80",  alt: "Red nail art with hand-painted lettering" },
  { src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=500&q=80",  alt: "Lavender and glitter gel set" },
  { src: "/images/t-and-d-nail-salon/salon-interior.jpg",  alt: "Inside T and D Nail Salon on Gandy Boulevard" },
  { src: "https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?w=500&q=80",  alt: "Navy and gold ornate nail art" },
  { src: "https://images.unsplash.com/photo-1680540484256-f9192e550aa2?w=500&q=80",  alt: "Fresh pink polish, salon finish" },
  { src: "https://images.unsplash.com/photo-1602585578130-c9076e09330d?w=500&q=80",  alt: "Polish colors to choose from" },
];

// ─── PAGE COMPONENT — server component: no "use client", no event handlers ────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(251,247,244,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT2 }}>
            T <span style={{ color: ACCENT }}>&amp;</span> D Nail Salon
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#team"     className="hover:opacity-60 transition-opacity">Meet Us</a>
            <a href="#gallery"  className="hover:opacity-60 transition-opacity">Gallery</a>
            <a href="#visit"    className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Call
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[82vh] min-h-[560px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1693776529070-2cdea397595b?w=1800&q=80"
          alt="Nail technician at work at T and D Nail Salon"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(46,36,32,0.35) 0%, rgba(46,36,32,0.50) 50%, rgba(46,36,32,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/70">
            {NEIGHBORHOOD}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            The salon your neighbors{" "}
            <span className="italic font-normal" style={{ color: ACCENT }}>keep coming back to.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Manicures, pedicures, dip, and acrylics — done carefully, priced fairly,
            by people who remember your name. No app, no fuss. Just call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Call {PHONE_FORMATTED}
            </a>
            <a
              href={DIRECTIONS_URL}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Walk-ins Welcome — Directions
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/80">
            <span className="tracking-wider" style={{ color: "#F0C9BE" }}>★★★★★</span>
            <span>{AVG_RATING} stars · {REVIEW_COUNT} Google reviews</span>
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
              Everything your hands &amp; feet deserve
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Honest prices, no surprises. Call ahead or walk right in.
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
                  <span className="text-2xl font-display font-semibold" style={{ color: ACCENT2 }}>
                    {svc.price}
                  </span>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap transition hover:brightness-110"
                    style={{ background: ACCENT }}
                  >
                    Call to Book
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Pricing shown is representative — call {PHONE_FORMATTED} for current prices and add-ons.
          </p>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section id="team" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Meet Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Ask for Linda. Or Andy. They remember you.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Regulars do not book a salon — they book their person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {team.map((member) => (
              <article key={member.name} className="text-center">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-5" style={{ background: CREAM }}>
                  <Image
                    src={member.img}
                    alt={`Nail work by ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: ACCENT }}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="text-sm font-semibold hover:underline transition-opacity hover:opacity-70"
                  style={{ color: ACCENT2 }}
                >
                  Call &amp; ask for {member.name} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              590 five-star reviews. Zero advertising.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              T and D has never needed a billboard. This little storefront on Gandy Blvd
              filled up the old-fashioned way — one neighbor telling another. Some clients
              have been sitting in the same chair for a decade.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Linda and the team keep it simple: take your time, do it right, and treat
              everyone who walks in like a regular — because sooner or later, they are.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1572814601679-4ef8f7b5ebd1?w=900&q=80"
              alt="Fresh gel set from T and D Nail Salon"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Fresh Sets
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Straight from the chair
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From clean everyday color to full custom art — bring a photo, they will match it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-square overflow-hidden rounded-lg">
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
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Loved by South Tampa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">Based on {REVIEW_COUNT} reviews — and counting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: "#F0C9BE" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ─────────────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Right on Gandy, easy parking
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Address</h4>
                <p className="text-gray-700">{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Reach us</h4>
                <p className="text-gray-700">
                  <a href={`tel:${PHONE_RAW}`} className="font-semibold hover:opacity-70 transition-opacity" style={{ color: ACCENT2 }}>
                    {PHONE_FORMATTED}
                  </a>
                  <br />
                  Appointments by phone · walk-ins always welcome
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Call to Book
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

          <div className="rounded-lg p-8 md:p-10" style={{ background: CREAM }}>
            <h4 className="font-display text-2xl font-semibold mb-6">Hours</h4>
            <table className="w-full text-sm text-gray-700">
              <tbody>
                <tr className="border-b" style={{ borderColor: RULE }}>
                  <td className="py-2.5 pr-8 font-medium">Monday</td><td className="py-2.5">9:30 AM – 7:00 PM</td>
                </tr>
                <tr className="border-b" style={{ borderColor: RULE }}>
                  <td className="py-2.5 pr-8 font-medium">Tuesday</td>
                  <td className="py-2.5 font-semibold" style={{ color: ACCENT2 }}>Closed</td>
                </tr>
                <tr className="border-b" style={{ borderColor: RULE }}>
                  <td className="py-2.5 pr-8 font-medium">Wednesday</td><td className="py-2.5">9:30 AM – 7:00 PM</td>
                </tr>
                <tr className="border-b" style={{ borderColor: RULE }}>
                  <td className="py-2.5 pr-8 font-medium">Thursday</td><td className="py-2.5">9:30 AM – 7:00 PM</td>
                </tr>
                <tr className="border-b" style={{ borderColor: RULE }}>
                  <td className="py-2.5 pr-8 font-medium">Friday</td><td className="py-2.5">9:30 AM – 7:00 PM</td>
                </tr>
                <tr className="border-b" style={{ borderColor: RULE }}>
                  <td className="py-2.5 pr-8 font-medium">Saturday</td><td className="py-2.5">9:00 AM – 6:00 PM</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-8 font-medium">Sunday</td>
                  <td className="py-2.5 font-semibold" style={{ color: ACCENT2 }}>Closed</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-6">
              Heads up: closed Tuesdays &amp; Sundays — everybody needs a rest day.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-5 md:px-8 text-center" style={{ background: ACCENT }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Your next set is one call away
          </h2>
          <p className="text-white/85 mb-8">
            Call ahead to grab your favorite chair — or just come on by.
          </p>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-block px-10 py-4 rounded-full font-semibold bg-white transition hover:opacity-90"
            style={{ color: ACCENT2 }}
          >
            Call {PHONE_FORMATTED}
          </a>
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
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>
              Mon &amp; Wed–Fri: 9:30 AM – 7 PM<br />
              Sat: 9 AM – 6 PM<br />
              Tue &amp; Sun: Closed
            </p>
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
