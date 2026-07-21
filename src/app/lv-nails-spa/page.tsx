import Image from "next/image";
import Link from "next/link";

// ─── LV NAILS & SPA — Tampa, FL ───────────────────────────────────────────────
// Concept mockup by Thryve Operations. Track B prospect — no real website.
// Fonts (Fraunces + Inter) are loaded globally via layout.tsx.
// Fresh, clean, modern-affordable neighborhood salon feel — spa teal + crisp white.

// Business identity
const BUSINESS_NAME = "LV Nails & Spa";
const TAGLINE = "Fresh nails, friendly faces";
const NEIGHBORHOOD = "W Hillsborough Ave, Tampa";

// Brand palette — fresh spa teal, deliberately distinct from rose/editorial looks
const PAPER = "#F7FBF9"; // page background — fresh off-white with a mint cast
const INK = "#12312B"; // deep spa green — body text + dark sections
const ACCENT = "#0E9384"; // fresh teal — primary brand color
const ACCENT2 = "#0B4F47"; // deep teal — secondary
const RULE = "#D8E9E3"; // soft mint border

// Contact & links
const PHONE_FORMATTED = "(813) 999-1115";
const PHONE_RAW = "8139991115";
const ADDRESS_LINE_1 = "2513 W Hillsborough Ave";
const ADDRESS_LINE_2 = "Tampa, FL 33614";
const BOOKING_URL = `tel:${PHONE_RAW}`; // call-to-book — no online booking platform yet
const DIRECTIONS_URL =
  "https://maps.google.com/?q=LV+Nails+%26+Spa+2513+W+Hillsborough+Ave+Tampa+FL+33614";
const INSTAGRAM_HANDLE = "lv.nailsandspa";
const FACEBOOK_HANDLE = "LVNailsSpa.Tampa";
const AVG_RATING = "4.9";
const REVIEW_COUNT = "132";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — Nail Salon on W Hillsborough Ave, Tampa`,
  description:
    "LV Nails & Spa is Tampa's 4.9-star neighborhood nail salon on W Hillsborough Ave. Manicures, spa pedicures, gel, dip powder, acrylics and nail art. Call (813) 999-1115.",
};

// ─── SERVICES ──────────────────────────────────────────────────────────────────
const services = [
  {
    name: "Classic Manicure",
    desc: "Shape, cuticle care, hand massage and a flawless polish finish. In and out on your lunch break.",
    duration: "30 min",
    price: "$25",
  },
  {
    name: "Gel Manicure",
    desc: "Chip-resistant gel color cured to a glassy shine that holds up for two-plus weeks.",
    duration: "45 min",
    price: "$40",
  },
  {
    name: "Deluxe Spa Pedicure",
    desc: "Warm soak, sugar scrub, hot towels and an extended massage in a cushioned spa chair.",
    duration: "50 min",
    price: "$50",
  },
  {
    name: "Dip Powder Set",
    desc: "Lightweight, durable color that lasts three to four weeks — no UV light needed.",
    duration: "60 min",
    price: "$50",
  },
  {
    name: "Full Set Acrylics",
    desc: "Sculpted length in the shape you want — coffin, almond, square — finished in gel.",
    duration: "75 min",
    price: "$55+",
  },
  {
    name: "Nail Art & Waxing",
    desc: "Hand-painted accent nails, chrome, French tips — plus quick brow and lip waxing.",
    duration: "15+ min",
    price: "$10+",
  },
];

// ─── SPECIALTIES — what the salon is known for (staff names are not public) ────
const specialties = [
  {
    title: "Gel & Dip Specialists",
    desc: "Dip sets that still look fresh a month later — gentle prep, precise shaping and a glassy gel finish.",
    img: "https://images.unsplash.com/photo-1680540555907-c99c665a20b7?w=600&q=80",
    alt: "Pink french gel manicure",
  },
  {
    title: "Nail Art Studio",
    desc: "Chrome, French tips, hand-painted designs — bring a photo from Instagram and they will match it.",
    img: "https://images.unsplash.com/photo-1736434518489-0eb84070017f?w=600&q=80",
    alt: "Chrome almond nails against a floral backdrop",
  },
  {
    title: "Pedicure Lounge",
    desc: "Cushioned spa chairs, warm soaks, hot towels and the foot massage the reviews keep raving about.",
    img: "https://images.unsplash.com/photo-1707725238063-0c54fb6963d1?w=600&q=80",
    alt: "Fresh red pedicure",
  },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
// {/* composite reviews — replace with real GMB quotes before live deployment */}
const reviews = [
  {
    text: "Got a dip powder set three weeks ago and it still looks like day one. They took walk-ins on a Saturday and I barely waited.",
    author: "Maria G. · Google review",
  },
  {
    text: "The deluxe pedicure is worth every penny — hot towels, long massage, zero rushing. Cleanest salon I have found on Hillsborough.",
    author: "Danielle R. · Google review",
  },
  {
    text: "I showed a photo of chrome French tips and they nailed it exactly. Sweet staff, fair prices, my new regular spot.",
    author: "Ashley T. · Google review",
  },
];

// ─── INSTAGRAM GRID — verified nail-specific Unsplash IDs ──────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1612887390768-fb02affea7a6?w=400&q=80",
  "https://images.unsplash.com/photo-1762373349045-c2decd4ec3f3?w=400&q=80",
  "https://images.unsplash.com/photo-1772322586634-9867476143b9?w=400&q=80",
  "https://images.unsplash.com/photo-1772322586702-73125782bd99?w=400&q=80",
  "https://images.unsplash.com/photo-1748163432725-454f46f68340?w=400&q=80",
  "https://images.unsplash.com/photo-1696342003838-4a8f9f36588c?w=400&q=80",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
// SERVER COMPONENT — no "use client", no event handlers. Tailwind hover: only.
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(247,251,249,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT2 }}>
            LV <span style={{ color: ACCENT }}>Nails &amp; Spa</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#team" className="hover:opacity-60 transition-opacity">Specialties</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Call to Book
            </a>
          </div>
          <a
            href={BOOKING_URL}
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
          src="https://images.unsplash.com/photo-1652990337162-fa84a588d843?w=1800&q=80"
          alt="Fresh white french manicure at LV Nails & Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,79,71,0.35) 0%, rgba(18,49,43,0.55) 50%, rgba(18,49,43,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/75">
            {NEIGHBORHOOD} &middot; Walk-ins Welcome
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Nails done right.{" "}
            <span className="italic font-normal" style={{ color: "#7FD9CD" }}>No fuss, no wait.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Tampa&rsquo;s friendly neighborhood nail salon — spotless, affordable, and rated 4.9 stars by the people next door.
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
              Get Directions
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/75">
            <span className="tracking-wider" style={{ color: "#7FD9CD" }}>★★★★★</span>
            <span>{AVG_RATING} &middot; {REVIEW_COUNT} Google reviews</span>
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
              Simple menu, honest prices
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              No surprises at checkout. Call ahead or walk right in.
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
        </div>
      </section>

      {/* ── SPECIALTIES ───────────────────────────────────────────────────── */}
      <section id="team" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              What We Do Best
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              The house specialties
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Three things the neighborhood keeps coming back for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {specialties.map((item) => (
              <article key={item.title} className="text-center">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-5 bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                <a
                  href={BOOKING_URL}
                  className="text-sm font-semibold hover:underline transition-opacity hover:opacity-70"
                  style={{ color: ACCENT2 }}
                >
                  Call to book →
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
              The neighborhood spot on Hillsborough Ave
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              LV Nails &amp; Spa is the kind of place where the tech remembers your usual color. A small
              team, a spotless salon, and 132 Google reviews averaging 4.9 stars — earned one set of
              nails at a time.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              No memberships, no upsells, no two-week waitlist. Call ahead or walk in Monday through
              Saturday and leave with nails you cannot stop looking at.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1754799670410-b282791342c3?w=900&q=80"
              alt="Hand-painted nail art from LV Nails & Spa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#7FD9CD" }}>
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
                <p className="mb-3 tracking-wider" style={{ color: "#7FD9CD" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
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
              Find us
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
                    <tr><td className="pr-8 py-0.5">Mon — Sat</td><td>9:30 AM – 7:00 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Sunday</td><td>Closed</td></tr>
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
                  <a
                    href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: INK }}
                  >
                    @{INSTAGRAM_HANDLE}
                  </a>
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

          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/lv-nails-spa/salon-interior.jpg"
              alt="Clean, fresh manicure — the LV Nails standard"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
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
                  alt=""
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
