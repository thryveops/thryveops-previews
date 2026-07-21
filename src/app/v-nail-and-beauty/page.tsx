import Image from "next/image";
import Link from "next/link";

// ─── V NAIL AND BEAUTY — Westshore, Tampa, FL ────────────────────────────────
// Flagship mockup — Thryve Operations concept preview.
// Fonts (Fraunces "font-display" + Inter) load globally via layout.tsx.
// Server component: no "use client", no event handlers, Tailwind hover: only.

// Business identity
const BUSINESS_NAME = "V Nail and Beauty";
const TAGLINE = "Nail Studio in Westshore, Tampa";

// Brand palette — feminine-modern editorial: cream paper, espresso ink,
// rosewood accent (salon/beauty palette per Thryve design guide).
const PAPER = "#FBF7F4"; // warm cream page background
const CREAM = "#F5EBE0"; // alternate section background
const INK = "#2B211E"; // espresso body text + dark sections
const ACCENT = "#C47A6D"; // rosewood — eyebrows, stars, accents
const ACCENT_DEEP = "#A85D50"; // deeper rosewood — CTA button backgrounds
const RULE = "#EAD9D2"; // blush-tinted hairline dividers

// Contact — real data from Google listing
const PHONE_FORMATTED = "(813) 282-9730";
const PHONE_RAW = "8132829730";
const ADDRESS_LINE_1 = "4227 W Kennedy Blvd Ste A";
const ADDRESS_LINE_2 = "Tampa, FL 33609";
const DIRECTIONS_URL =
  "https://maps.google.com/?q=V+Nail+and+Beauty+4227+W+Kennedy+Blvd+Ste+A+Tampa+FL+33609";
const INSTAGRAM_HANDLE = "vnailstampa";
const AVG_RATING = "4.9";
const REVIEW_COUNT = "2,137";

// ─── PAGE METADATA ───────────────────────────────────────────────────────────
export const metadata = {
  title: "V Nail and Beauty — Nail Studio in Westshore, Tampa",
  description:
    "Tampa's most-reviewed nail studio. Gel manicures, dip powder, custom nail art, and spa pedicures on W Kennedy Blvd in Westshore. Rated 4.9 stars across 2,137 Google reviews. Call (813) 282-9730 to book.",
};

// ─── SERVICES — typical menu for an upscale Tampa nail studio ────────────────
// "from $" ranges — final pricing set with the salon before launch.
const nailServices = [
  {
    name: "Signature Gel Manicure",
    desc: "Meticulous cuticle prep, shaping, and a flawless gel finish that stays glossy for weeks.",
    duration: "45 min",
    price: "from $40",
  },
  {
    name: "Dip Powder Set",
    desc: "Lightweight, chip-resistant color with strength that lasts a full month.",
    duration: "60 min",
    price: "from $50",
  },
  {
    name: "Acrylic Full Set",
    desc: "Sculpted extensions in any length and shape — coffin, almond, stiletto, or square.",
    duration: "75 min",
    price: "from $55",
  },
  {
    name: "Gel-X Extensions",
    desc: "Soft-gel full coverage extensions. Natural feel, no drilling, no damage.",
    duration: "75 min",
    price: "from $60",
  },
  {
    name: "Custom Nail Art",
    desc: "Chrome, French, ombre, hand-painted designs — bring a photo, leave with the real thing.",
    duration: "add-on",
    price: "from $10",
  },
];

const spaServices = [
  {
    name: "Classic Spa Pedicure",
    desc: "Warm soak, callus care, massage, and polish in a full spa chair.",
    duration: "45 min",
    price: "from $40",
  },
  {
    name: "Deluxe Jelly Pedicure",
    desc: "Jelly soak, sugar scrub, hydrating mask, hot towels, and extended massage.",
    duration: "60 min",
    price: "from $60",
  },
  {
    name: "Waxing",
    desc: "Brow, lip, and full-face waxing with gentle, skin-calming finish.",
    duration: "15+ min",
    price: "from $12",
  },
];

// ─── NAIL ART GALLERY — verified nail-specific Unsplash imagery ─────────────
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=700&q=80",
    alt: "Hand-painted abstract nail art in bold color",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1641814250010-9887d86eedfd?w=700&q=80",
    alt: "Nude manicure with gold glitter accent nails",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=700&q=80",
    alt: "Red almond nails with hand-lettered art",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=700&q=80",
    alt: "Mauve manicure editorial",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=700&q=80",
    alt: "Soft pink natural manicure",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=700&q=80",
    alt: "Pink polish application on marble",
    aspect: "aspect-[4/5]",
  },
];

// ─── REVIEWS ─────────────────────────────────────────────────────────────────
// composite reviews — replace with real GMB quotes before live deployment
const reviews = [
  {
    text: "I tried four salons after moving to South Tampa before landing here. My dip set lasts a full month without a single chip - you can tell the techs actually care about prep work, not just speed.",
    author: "Melissa R. · Google review",
  },
  {
    text: "Came in with a Pinterest screenshot of chrome French tips and they matched it exactly. There is a reason this place has over two thousand reviews.",
    author: "Danielle K. · Google review",
  },
  {
    text: "Best pedicure on Kennedy Blvd, hands down. Spotless tools, a fresh liner in the spa chair every time, and they never rush you - even when the place is packed on a Saturday.",
    author: "Ashley T. · Google review",
  },
];

// ─── INSTAGRAM STRIP ────────────────────────────────────────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?w=400&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&q=80",
  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
  "/images/v-nail-and-beauty/signature-set.jpg",
  "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=400&q=80",
];

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>
      {/* ── TOP MICRO-BAR ─────────────────────────────────────────────────── */}
      <div
        className="text-center text-[11px] md:text-xs tracking-[0.15em] uppercase py-2 px-4 text-white"
        style={{ background: INK }}
      >
        Walk-ins welcome &middot; Mon&ndash;Sat 9:30&ndash;7 &middot;{" "}
        <a href={`tel:${PHONE_RAW}`} className="underline underline-offset-2 hover:opacity-70 transition-opacity">
          {PHONE_FORMATTED}
        </a>
      </div>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(251,247,244,0.94)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="leading-none">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight block">
              V Nail <span className="italic font-normal" style={{ color: ACCENT }}>&amp;</span> Beauty
            </span>
            <span className="block text-[9px] tracking-[0.35em] uppercase mt-0.5" style={{ color: ACCENT }}>
              Westshore &middot; Tampa
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#gallery" className="hover:opacity-60 transition-opacity">Gallery</a>
            <a href="#reviews" className="hover:opacity-60 transition-opacity">Reviews</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Visit</a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT_DEEP }}
            >
              Call to Book
            </a>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT_DEEP }}
          >
            Call
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[86vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1800&q=80"
          alt="Editorial manicure close-up at V Nail and Beauty"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(43,33,30,0.38) 0%, rgba(43,33,30,0.52) 55%, rgba(43,33,30,0.84) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase mb-6 text-white/75">
            W Kennedy Blvd &middot; Westshore &middot; Tampa, FL
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Tampa&rsquo;s most-reviewed{" "}
            <span className="italic font-normal" style={{ color: "#E3AB9F" }}>
              nail studio.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            2,137 Google reviews. A 4.9-star average. Gel, dip, extensions, and
            custom art done with the kind of care that keeps Westshore coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT_DEEP }}
            >
              Call {PHONE_FORMATTED} to Book
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              See Services
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="tracking-wider" style={{ color: "#E3AB9F" }}>★★★★★</span>
            <span>
              {AVG_RATING} &middot; {REVIEW_COUNT} Google reviews
            </span>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STAT BAND ────────────────────────────────────────── */}
      <section className="border-b" style={{ background: CREAM, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold" style={{ color: ACCENT_DEEP }}>
              2,137
            </p>
            <p className="text-xs tracking-[0.2em] uppercase mt-2 text-gray-500">Google reviews</p>
          </div>
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold" style={{ color: ACCENT_DEEP }}>
              4.9<span className="text-2xl align-top">★</span>
            </p>
            <p className="text-xs tracking-[0.2em] uppercase mt-2 text-gray-500">Average rating</p>
          </div>
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold" style={{ color: ACCENT_DEEP }}>
              6
            </p>
            <p className="text-xs tracking-[0.2em] uppercase mt-2 text-gray-500">Days a week</p>
          </div>
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold" style={{ color: ACCENT_DEEP }}>
              Westshore
            </p>
            <p className="text-xs tracking-[0.2em] uppercase mt-2 text-gray-500">Tampa, Florida</p>
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
              The menu
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every set starts with proper prep &mdash; that&rsquo;s why they last.
              Call {PHONE_FORMATTED} and we&rsquo;ll have a chair ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {/* Nails column */}
            <div>
              <h3
                className="font-display text-xl italic mb-6 pb-3 border-b"
                style={{ color: ACCENT_DEEP, borderColor: RULE }}
              >
                Nails
              </h3>
              <div>
                {nailServices.map((svc) => (
                  <div key={svc.name} className="py-5 border-b" style={{ borderColor: RULE }}>
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h4 className="font-display text-xl font-semibold">{svc.name}</h4>
                      <span
                        className="font-display text-lg font-semibold whitespace-nowrap"
                        style={{ color: ACCENT_DEEP }}
                      >
                        {svc.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed pr-8">{svc.desc}</p>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-1.5">{svc.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedicures & waxing column */}
            <div>
              <h3
                className="font-display text-xl italic mb-6 pb-3 border-b"
                style={{ color: ACCENT_DEEP, borderColor: RULE }}
              >
                Pedicures &amp; Waxing
              </h3>
              <div>
                {spaServices.map((svc) => (
                  <div key={svc.name} className="py-5 border-b" style={{ borderColor: RULE }}>
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h4 className="font-display text-xl font-semibold">{svc.name}</h4>
                      <span
                        className="font-display text-lg font-semibold whitespace-nowrap"
                        style={{ color: ACCENT_DEEP }}
                      >
                        {svc.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed pr-8">{svc.desc}</p>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-1.5">{svc.duration}</p>
                  </div>
                ))}
              </div>

              {/* In-column CTA card */}
              <div className="mt-10 p-7 rounded-lg" style={{ background: CREAM }}>
                <p className="font-display text-2xl font-semibold mb-2">Not sure what to book?</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Call us and tell us the look you want &mdash; we&rsquo;ll tell you
                  exactly what to ask for and how long to plan.
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT_DEEP }}
                >
                  Call {PHONE_FORMATTED}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NAIL ART GALLERY ──────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Bring a screenshot.<br className="hidden md:block" />{" "}
              <span className="italic font-normal" style={{ color: ACCENT_DEEP }}>
                Leave with the real thing.
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Chrome, French, ombre, hand-painted art &mdash; every set photographed
              here left our chairs.
            </p>
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className={`relative ${img.aspect} overflow-hidden rounded-lg break-inside-avoid`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px] transition-colors hover:bg-gray-50"
              style={{ borderColor: INK, color: INK }}
            >
              See more on Instagram @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section id="reviews" className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Loved by Tampa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">
              Based on {REVIEW_COUNT} reviews &mdash; more than any other nail
              studio in Tampa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: "#E3AB9F" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">&mdash; {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ─────────────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              On Kennedy, in the heart of Westshore
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Find us in the storefront at Kennedy &amp; Cortez &mdash; minutes from
              International Plaza and Westshore Plaza, with easy parking right at
              the door. Come in on a lunch break or make a Saturday of it.
            </p>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Address</h4>
                <p className="text-gray-700">
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Hours</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr>
                      <td className="pr-8 py-0.5">Mon &mdash; Sat</td>
                      <td>9:30 AM &ndash; 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-0.5">Sunday</td>
                      <td className="text-gray-400">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Book by phone</h4>
                <p className="text-gray-700">
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: ACCENT_DEEP }}
                  >
                    {PHONE_FORMATTED}
                  </a>
                  <br />
                  <span className="text-sm text-gray-500">Walk-ins welcome when chairs are open.</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT_DEEP }}
                >
                  Call to Book
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] hover:bg-white transition-colors"
                  style={{ borderColor: INK, color: INK }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-auto rounded-lg overflow-hidden">
            <Image
              src="/images/v-nail-and-beauty/studio-interior.jpg"
              alt="Bright, modern salon interior"
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
              style={{ color: ACCENT_DEEP }}
            >
              Follow on Instagram &rarr;
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

      {/* ── FINAL CTA BAND ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-5 md:px-8 text-center" style={{ background: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Your next set is one call away.
          </h2>
          <p className="text-gray-600 mb-8">
            Open Monday through Saturday, 9:30 to 7. Tell us the look &mdash;
            we&rsquo;ll handle the rest.
          </p>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-block px-10 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
            style={{ background: ACCENT_DEEP }}
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
            <p className="mt-2 text-white/40">
              ★ {AVG_RATING} &middot; {REVIEW_COUNT} Google reviews
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
              <br />
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors">
                {PHONE_FORMATTED}
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME} &middot; Concept mockup by Thryve Operations
          </span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>
    </div>
  );
}
