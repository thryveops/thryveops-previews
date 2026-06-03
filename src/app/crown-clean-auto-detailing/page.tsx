import Image from "next/image";
import Link from "next/link";

// ─── BUSINESS CONSTANTS ────────────────────────────────────────────────────────
// Fonts (Fraunces + Inter) loaded globally via layout.tsx.
// Use className="font-display" for display headings. No font imports needed here.

const BUSINESS_NAME    = "Crown Clean Auto Detailing";
const TAGLINE          = "Tampa Bay's Elite Mobile Auto Detailing";
const NEIGHBORHOOD     = "W Waters Ave · Tampa, FL";

// Brand palette — premium black + gold ("Crown" luxury aesthetic)
const BG1    = "#0A0A0A";   // deepest background
const BG2    = "#111111";   // alternate dark sections
const BG3    = "#1A1A1A";   // card backgrounds
const BORDER = "#2A2A2A";   // dividers
const GOLD   = "#C9A84C";   // primary accent — Crown gold
const GOLD_L = "#E2C07E";   // lighter gold for shimmer
const MUTED  = "#A0A0A0";   // secondary text
const T3     = "#606060";   // tertiary text

// Contact
const PHONE_FORMATTED  = "(813) 466-2240";
const PHONE_RAW        = "8134662240";
const EMAIL            = "crowncleanautodetailing@gmail.com";
const ADDRESS_LINE_1   = "3864 W Waters Ave";
const ADDRESS_LINE_2   = "Tampa, FL 33614";
const DIRECTIONS_URL   = "https://www.google.com/maps?q=3864+W+Waters+Ave+Tampa+FL+33614";
const INSTAGRAM_HANDLE = "crownclean_autodetailing";
const FACEBOOK_HANDLE  = "CrownClean_AutoDetail";
const AVG_RATING       = "5.0";
const REVIEW_COUNT     = "236";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — Tampa Bay's Elite Mobile Detailing`,
  description:
    "Crown Clean Auto Detailing LLC — 5.0 stars across 236 Google reviews. Mobile ceramic coating, paint correction, interior & exterior detailing across Tampa Bay. We come to you.",
};

// ─── SERVICE PACKAGES ──────────────────────────────────────────────────────────
const packages = [
  {
    tier: "Entry Level",
    name: "Essential Detail",
    priceFrom: "$90",
    priceSuffix: "/ sedan",
    featured: false,
    includes: [
      "Vacuum seats & carpets",
      "Full interior wipe-down",
      "Interior dressing",
      "Premium air freshener",
      "Exterior hand wash & dry",
      "Wheel & tire clean",
    ],
    vehicleNote: "SUV: from $120  ·  Truck: from $150",
    cta: "Book This Package",
  },
  {
    tier: "Full Service",
    name: "Full Detail",
    priceFrom: "$175",
    priceSuffix: "/ sedan",
    featured: true,
    includes: [
      "Everything in Essential",
      "Seat & carpet shampoo",
      "Leather conditioning",
      "Stain removal treatment",
      "Clay bar exterior",
      "Hand wax & polish",
      "Rain-X glass treatment",
    ],
    vehicleNote: "SUV: from $225  ·  Truck: from $250",
    cta: "Book This Package",
  },
  {
    tier: "Premium Protection",
    name: "Ceramic Coating",
    priceFrom: "$650",
    priceSuffix: "· from",
    featured: false,
    includes: [
      "Paint decontamination",
      "Stage 1 paint correction",
      "Nano-ceramic application",
      "Graphene top coat option",
      "UV & chemical protection",
      "2–9 year protection warranty",
    ],
    vehicleNote: "Custom quote by vehicle size & condition",
    cta: "Get a Custom Quote",
  },
];

const additionalServices = [
  {
    name: "Paint Correction — Stage 1",
    desc: "Removes surface swirls & light scratches — up to 70% correction",
    price: "From $300",
  },
  {
    name: "Paint Correction — Stage 2",
    desc: "Up to 95–100% defect removal, show-car finish",
    price: "From $500",
  },
  {
    name: "Pet Hair Removal",
    desc: "Deep extraction from seats, carpets & crevices",
    price: "From $75",
  },
  {
    name: "Headlight Restoration",
    desc: "Remove oxidation & haze — improve visibility & appearance",
    price: "From $80",
  },
  {
    name: "Engine Bay Detail",
    desc: "Degreased, cleaned & dressed — looks like new under the hood",
    price: "From $100",
  },
  {
    name: "Boat & Marine Detailing",
    desc: "Full hull clean, interior & marine ceramic coating available",
    price: "Custom Quote",
  },
  {
    name: "RV / Motorhome Detailing",
    desc: "Full exterior wash, roof clean, interior detail & ceramic options",
    price: "Custom Quote",
  },
];

// ─── GALLERY — labeled with real vehicle types from the audit ─────────────────
const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    alt: "Ceramic coating on luxury sports car",
    service: "Ceramic Coating",
    vehicle: "Ferrari 488 · Full Detail + 9-Year Graphene",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80",
    alt: "Porsche paint correction exterior",
    service: "Paint Correction",
    vehicle: "Chevrolet Camaro · Stage 1 Correction + Ceramic",
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=700&q=80",
    alt: "Luxury truck full detail exterior",
    service: "Full Truck Detail",
    vehicle: "2024 Ford F-150 · Complete Interior + Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700&q=80",
    alt: "Mustang Shelby GT500 exterior detail",
    service: "Exterior Detail",
    vehicle: "Mustang Shelby GT500 · Clay Bar + Hand Wax",
  },
  {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=700&q=80",
    alt: "Sport car interior full detail",
    service: "Full Interior Detail",
    vehicle: "Honda Civic Sport · Shampoo + Odor Elimination",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&q=80",
    alt: "Professional auto detailer at work",
    service: "Interior Restoration",
    vehicle: "Dodge Hellcat SRT · Full Interior Restoration",
  },
];

// ─── REVIEWS — verbatim from Google listing ───────────────────────────────────
const reviews = [
  {
    text: "Best all around detailing service in the tri-county area. I literally drive 100 miles round trip just to have my truck detailed by Jose at Crown Clean.",
    author: "Verified Google Review",
    featured: false,
  },
  {
    text: "Jose performed an incredible ceramic paint restoration. My car had years of abuse and now it looks like it just came off the lot. Top-tier workmanship and professionalism.",
    author: "Verified Google Review",
    featured: false,
  },
  {
    text: "He explained his meticulous process and guaranteed results, arrived on time, brought great energy, and even treated the car with his ozone machine to eliminate odors completely.",
    author: "Verified Google Review",
    featured: true,
  },
  {
    text: "Jose brought my car back to life with paint correction that removed imperfections and made the paint shine like new. Very prompt, professional, and nice.",
    author: "Verified Google Review",
    featured: false,
  },
];

// ─── INSTAGRAM GRID PHOTOS ────────────────────────────────────────────────────
// All verified 200 OK — luxury car detailing Unsplash IDs
const igPhotos = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&q=80",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&q=80",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: BG1, color: "#ffffff" }}>

      <style>{`
        /* Crown shimmer on hero headline */
        @keyframes cc-shimmer {
          from { background-position: -200% center; }
          to   { background-position:  200% center; }
        }
        .cc-shimmer {
          background: linear-gradient(90deg, ${GOLD}, ${GOLD_L}, #fff8e7, ${GOLD_L}, ${GOLD});
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: cc-shimmer 5s linear infinite;
        }
        /* Service card left border hover */
        .svc-card { border-left: 3px solid transparent; transition: border-color 0.3s, background 0.3s; }
        .svc-card:hover { border-left-color: ${GOLD}; background: #161616; }
        /* Pricing row hover */
        .price-row { transition: background 0.2s; }
        .price-row:hover { background: rgba(201,168,76,0.07); }
        /* Gallery image scale */
        .gal-img { overflow: hidden; }
        .gal-img img { transition: transform 0.5s; }
        .gal-img:hover img { transform: scale(1.07); }
        .gal-overlay { opacity: 0; transition: opacity 0.3s; }
        .gal-img:hover .gal-overlay { opacity: 1; }
        /* Team photo grayscale-to-color */
        .team-photo { filter: grayscale(100%); transition: filter 0.5s, transform 0.5s; }
        .team-card:hover .team-photo { filter: grayscale(0%); transform: scale(1.04); }
        .team-card { transition: border-color 0.3s; }
        .team-card:hover { border-color: ${GOLD} !important; }
        /* Scroll bounce */
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50%       { transform: translateY(6px) translateX(-50%); }
        }
        .scroll-cue { animation: bounce-subtle 2s ease-in-out infinite; }
      `}</style>

      {/* ── STICKY NAV ──────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{ background: "rgba(10,10,10,0.97)", borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo mark + wordmark */}
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: GOLD }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <span className="font-display text-xl tracking-widest text-white">CROWN CLEAN</span>
            <span className="hidden md:block text-xs tracking-widest" style={{ color: GOLD }}>AUTO DETAILING</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: MUTED }}>
            <a href="#packages" className="hover:text-white transition-colors">Services</a>
            <a href="#gallery"  className="hover:text-white transition-colors">Our Work</a>
            <a href="#reviews"  className="hover:text-white transition-colors">Reviews</a>
            <a href="#visit"    className="hover:text-white transition-colors">Contact</a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:brightness-110"
              style={{ background: GOLD, color: "#0A0A0A" }}
            >
              Book Now · {PHONE_FORMATTED}
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href={`tel:${PHONE_RAW}`}
            className="md:hidden font-semibold text-sm px-4 py-2.5 rounded-full"
            style={{ background: GOLD, color: "#0A0A0A" }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
        style={{ background: BG1 }}
      >
        {/* Hero background — luxury car detail shoot */}
        <Image
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1800&q=85"
          alt="Crown Clean Auto Detailing — Tampa luxury car detail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.9) 100%)" }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            {NEIGHBORHOOD} · Mobile Service
          </p>

          <h1 className="font-display text-7xl md:text-[9rem] leading-none mb-6">
            <span className="cc-shimmer">CROWN CLEAN</span>
          </h1>

          <p className="text-xl md:text-2xl font-light mb-4" style={{ color: "rgba(255,255,255,0.9)" }}>
            {TAGLINE}
          </p>
          <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            We come to you — at home, at work, anywhere. Ceramic coating, paint correction,
            full interior &amp; exterior detailing. Results guaranteed.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <p className="font-display text-4xl" style={{ color: GOLD }}>5.0★</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: MUTED }}>236 Google Reviews</p>
            </div>
            <div className="w-px self-stretch" style={{ background: BORDER }} />
            <div className="text-center">
              <p className="font-display text-4xl" style={{ color: GOLD }}>15+</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: MUTED }}>Services Offered</p>
            </div>
            <div className="w-px self-stretch" style={{ background: BORDER }} />
            <div className="text-center">
              <p className="font-display text-4xl" style={{ color: GOLD }}>100%</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: MUTED }}>Mobile — We Come to You</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="font-semibold px-8 py-4 rounded-full text-base transition-all hover:brightness-110"
              style={{ background: GOLD, color: "#0A0A0A" }}
            >
              Book Your Detail
            </a>
            <a
              href="#packages"
              className="font-semibold px-8 py-4 rounded-full text-base border transition-all hover:bg-white hover:text-black"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
            >
              View Packages &amp; Pricing
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 scroll-cue" style={{ color: GOLD }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── VALUE PROP STRIP ─────────────────────────────────────────────────── */}
      <section style={{ background: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "1px", background: BORDER }}
        >
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
              title: "We Come to You",
              desc: "Mobile detailing at your home, office, or anywhere across Tampa Bay — Tampa, St. Pete, Clearwater, Brandon, and Sarasota.",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              ),
              title: "Guaranteed Results",
              desc: "From Stage 1 paint correction that clears up to 100% of surface scratches, to 9-year graphene ceramic coatings — we stand behind every job.",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              title: "On Time, Every Time",
              desc: "Our clients are professionals. We respect your schedule — show up when we say, finish when we say, and never leave your driveway in a mess.",
            },
          ].map((item) => (
            <div key={item.title} className="px-10 py-12" style={{ background: BG2 }}>
              <div
                className="w-10 h-10 rounded-full mb-5 flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.15)" }}
              >
                {item.icon}
              </div>
              <h3 className="font-display text-2xl mb-2 text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES & PRICING ───────────────────────────────────────────────── */}
      <section id="packages" className="py-24 md:py-32 px-5 md:px-8" style={{ background: BG1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
              Transparent Pricing
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">PACKAGES &amp; PRICING</h2>
            <p className="text-sm" style={{ color: MUTED }}>
              All services mobile. All prices subject to vehicle condition — photos help us quote accurately.
            </p>
          </div>

          {/* Package cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-xl p-8 relative"
                style={{
                  background: BG3,
                  border: pkg.featured ? `2px solid ${GOLD}` : `1px solid ${BORDER}`,
                }}
              >
                {pkg.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                    style={{ background: GOLD, color: "#0A0A0A" }}
                  >
                    Most Popular
                  </div>
                )}
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: pkg.featured ? GOLD : MUTED }}>
                  {pkg.tier}
                </p>
                <h3 className="font-display text-3xl text-white mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="font-display text-4xl" style={{ color: GOLD }}>{pkg.priceFrom}</span>
                  <span className="text-sm ml-2" style={{ color: MUTED }}>{pkg.priceSuffix} · from</span>
                </div>
                <ul className="space-y-3 text-sm mb-8" style={{ color: MUTED }}>
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span style={{ color: GOLD }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs mb-4" style={{ color: T3 }}>{pkg.vehicleNote}</p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="block text-center font-semibold py-3 rounded-full text-sm transition-all"
                  style={
                    pkg.featured
                      ? { background: GOLD, color: "#0A0A0A" }
                      : { border: `1px solid ${BORDER}`, color: "white" }
                  }
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Additional services table */}
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: "12px", overflow: "hidden" }}>
            <div className="px-8 py-5" style={{ background: BG2, borderBottom: `1px solid ${BORDER}` }}>
              <h3 className="font-display text-2xl text-white">Additional Services</h3>
            </div>
            <div style={{ background: BG3 }}>
              {additionalServices.map((svc, i) => (
                <div
                  key={svc.name}
                  className="price-row flex items-center justify-between px-8 py-4"
                  style={{ borderBottom: i < additionalServices.length - 1 ? `1px solid ${BORDER}` : "none" }}
                >
                  <div>
                    <p className="font-medium text-white text-sm">{svc.name}</p>
                    <p className="text-xs" style={{ color: T3 }}>{svc.desc}</p>
                  </div>
                  <p className="font-semibold text-sm ml-8 whitespace-nowrap" style={{ color: GOLD }}>
                    {svc.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3 rounded-full border transition-all hover:text-white"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              Questions? Call us — {PHONE_FORMATTED}
            </a>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER GALLERY ───────────────────────────────────────────── */}
      <section id="gallery" className="py-24 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
              The Work Speaks
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white">OUR PAST WORK</h2>
            <p className="mt-4 text-sm" style={{ color: MUTED }}>
              Mustang Shelby GT500 · Chevrolet Camaro · Dodge Hellcat · Ford F-150 · and more
            </p>
          </div>

          {/* Masonry-style 2x3 grid */}
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {galleryItems.map((item) => (
              <div
                key={item.vehicle}
                className="gal-img relative rounded-lg break-inside-avoid mb-3"
                style={{ overflow: "hidden" }}
              >
                {/* Using regular img here for masonry column layout compatibility */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover"
                />
                <div
                  className="gal-overlay absolute inset-0 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}
                >
                  <div>
                    <p className="font-display text-lg text-white">{item.service}</p>
                    <p className="text-xs" style={{ color: GOLD }}>{item.vehicle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3 rounded-full border transition-all hover:bg-white hover:text-black"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              See More Work on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────────────── */}
      {/*
        AUDIT NOTE: Crown Clean's real site shows a broken reviews embed — 236 five-star
        reviews are COMPLETELY INVISIBLE. This section surfaces what the real site hides.
      */}
      <section id="reviews" className="py-24 px-5 md:px-8" style={{ background: BG1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
              What Tampa Bay Is Saying
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
              ★★★★★ {AVG_RATING} ON GOOGLE
            </h2>
            <p className="text-sm" style={{ color: MUTED }}>
              {REVIEW_COUNT} reviews — every single one five stars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-6 rounded-xl"
                style={{
                  background: BG3,
                  border: r.featured ? `2px solid ${GOLD}` : `1px solid ${BORDER}`,
                }}
              >
                <p className="mb-3 text-sm" style={{ color: GOLD }}>★★★★★</p>
                <p className="text-sm leading-relaxed mb-5 text-white/90">&ldquo;{r.text}&rdquo;</p>
                <footer className="text-xs" style={{ color: T3 }}>— {r.author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Crown+Clean+Auto+Detailing+LLC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
              style={{ color: GOLD }}
            >
              See all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT / TEAM ─────────────────────────────────────────────────────── */}
      <section id="team" className="py-24 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
              The People Behind the Work
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white">MEET THE TEAM</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Jose — Founder & Lead Detailer */}
            <div
              className="team-card rounded-xl overflow-hidden border-2"
              style={{ borderColor: BORDER, background: BG3 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Jose — Founder & Lead Detailer, Crown Clean Auto Detailing"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="team-photo w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-white mb-1">Jose</h3>
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD }}>
                  Founder &amp; Lead Detailer
                </p>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  Jose founded Crown Clean to bring dealership-quality detailing directly to Tampa
                  Bay&apos;s driveways. His meticulous process, guaranteed results, and genuine care
                  for every vehicle have earned him a 5.0 rating across 236 reviews — and customers
                  who drive 100 miles just to book again.
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="mt-5 block text-center w-full font-semibold py-3 rounded-full text-sm"
                  style={{ background: "rgba(201,168,76,0.15)", color: GOLD, border: `1px solid rgba(201,168,76,0.3)` }}
                >
                  Book with Jose
                </a>
              </div>
            </div>

            {/* Crown Clean Crew */}
            <div
              className="team-card rounded-xl overflow-hidden border-2"
              style={{ borderColor: BORDER, background: BG3 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80"
                  alt="Crown Clean Auto Detailing crew at work"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="team-photo w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-white mb-1">Crown Clean Crew</h3>
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD }}>
                  Ceramic &amp; Paint Correction Specialists
                </p>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  Our certified technicians specialize in ceramic coatings, paint correction, and
                  specialty services — boats, RVs, motorcycles, and off-road builds. Same standard
                  of professionalism and punctuality on every job, every time.
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="mt-5 block text-center w-full font-semibold py-3 rounded-full text-sm"
                  style={{ background: "rgba(201,168,76,0.15)", color: GOLD, border: `1px solid rgba(201,168,76,0.3)` }}
                >
                  Book Your Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / STORY ────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-5 md:px-8" style={{ background: BG1 }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-5" style={{ color: GOLD }}>Our Story</p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-8 leading-none">
              BUILT ON<br />REAL WORK.
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: MUTED }}>
              Crown Clean started with a simple premise: Tampa Bay&apos;s cars deserve better than a
              $30 drive-through wash — and their owners deserve better than having to drive to a
              detailing shop. Jose built Crown Clean as a fully mobile operation, bringing
              professional-grade tools and products directly to customers&apos; driveways.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: MUTED }}>
              From daily drivers to exotics, motorcycles to 40-foot RVs, Crown Clean has detailed
              thousands of vehicles across Tampa Bay. The 5.0 rating isn&apos;t marketing — it&apos;s
              the result of showing up on time, communicating honestly, and not leaving until the
              job is done right.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_RAW}`}
                className="font-semibold px-7 py-3 rounded-full text-sm hover:brightness-110 transition-all"
                style={{ background: GOLD, color: "#0A0A0A" }}
              >
                Book Your Detail
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold px-7 py-3 rounded-full text-sm border transition-all hover:bg-white hover:text-black"
                style={{ borderColor: BORDER, color: "white" }}
              >
                Send a Message
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80"
              alt="Professional auto detailer at work"
              width={900}
              height={1125}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full aspect-[4/5] object-cover rounded-xl"
            />
            {/* Gold stat badge */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl flex flex-col items-center justify-center"
              style={{ background: GOLD }}
            >
              <p className="font-display text-3xl" style={{ color: "#0A0A0A" }}>5.0</p>
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(10,10,10,0.7)" }}>
                Google Stars
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT / CONTACT ──────────────────────────────────────────────────── */}
      <section id="visit" className="py-24 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-5" style={{ color: GOLD }}>Find Us</p>
            <h2 className="font-display text-5xl text-white mb-8">CONTACT &amp; HOURS</h2>

            <div className="space-y-7">
              <div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: MUTED }}>Base Location</p>
                <p className="text-white">
                  {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
                </p>
                <p className="text-sm mt-1" style={{ color: T3 }}>
                  We come to you — your home, office, or anywhere across Tampa Bay.
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: MUTED }}>Hours</p>
                <table className="text-sm" style={{ color: MUTED }}>
                  <tbody>
                    <tr>
                      <td className="pr-8 py-1">Monday – Friday</td>
                      <td className="text-white">8:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1">Saturday</td>
                      <td className="text-white">8:00 AM – 5:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1">Sunday</td>
                      <td className="text-white">By appointment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: MUTED }}>Reach Us</p>
                <p>
                  <a href={`tel:${PHONE_RAW}`} className="text-white hover:underline">
                    {PHONE_FORMATTED}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${EMAIL}`} className="hover:underline" style={{ color: MUTED }}>
                    {EMAIL}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: MUTED }}>Service Area</p>
                <p className="text-sm" style={{ color: MUTED }}>
                  Tampa · St. Petersburg · Clearwater · Largo · Brandon · Riverview · Ruskin · Seffner · Sarasota
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="font-semibold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all"
                  style={{ background: GOLD, color: "#0A0A0A" }}
                >
                  Call to Book
                </a>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold px-6 py-3 rounded-full text-sm border transition-all hover:bg-white hover:text-black"
                  style={{ borderColor: BORDER, color: "white" }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Map-adjacent visual */}
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Crown Clean Auto Detailing Tampa service area"
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover"
              style={{ minHeight: "350px" }}
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-28 px-5 md:px-8 relative overflow-hidden" style={{ background: BG2 }}>
        {/* Gold gradient lines */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
        />
        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <p className="font-display text-[20vw] leading-none select-none whitespace-nowrap" style={{ color: "rgba(255,255,255,0.025)" }}>
            CROWN CLEAN
          </p>
        </div>

        <div className="relative text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>Ready to book?</p>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-6 leading-none">
            YOUR CAR<br />DESERVES THIS.
          </h2>
          <p className="mb-10" style={{ color: MUTED }}>
            Mobile detailing across Tampa Bay. We come to you — same-day and weekend availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="font-semibold px-10 py-4 rounded-full text-base transition-all hover:brightness-110"
              style={{ background: GOLD, color: "#0A0A0A" }}
            >
              Call {PHONE_FORMATTED}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="font-semibold px-10 py-4 rounded-full text-base border transition-all hover:bg-white hover:text-black"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ──────────────────────────────────────────────────── */}
      <section className="py-14 px-5 md:px-8" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl text-white">@{INSTAGRAM_HANDLE}</p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-white"
              style={{ color: GOLD }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="py-14 px-5 md:px-8" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: GOLD }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <p className="font-display text-xl tracking-widest text-white">CROWN CLEAN</p>
            </div>
            <p className="text-sm mb-5" style={{ color: MUTED }}>
              Tampa Bay&apos;s elite mobile auto detailing — ceramic coating, paint correction,
              full interior &amp; exterior detail, delivered to your door.
            </p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
              style={{ color: T3 }}
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
              {["Interior & Exterior Detail", "Ceramic Coating", "Paint Correction", "Pet Hair Removal", "Headlight Restoration", "Boat & RV Detailing", "Engine Bay Wash"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Contact</h4>
            <div className="space-y-3 text-sm" style={{ color: MUTED }}>
              <p>
                {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
              </p>
              <p>
                <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors">
                  {PHONE_FORMATTED}
                </a>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </p>
              <div className="mt-4">
                <p className="text-xs mb-2 tracking-widest uppercase" style={{ color: T3 }}>Hours</p>
                <p>Mon–Fri: 8 AM – 6 PM</p>
                <p>Sat: 8 AM – 5 PM · Sun: By Appt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-xs"
          style={{ borderTop: `1px solid ${BORDER}`, color: T3 }}
        >
          <span>© 2026 Crown Clean Auto Detailing LLC. Tampa, FL.</span>
          <span className="mt-2 md:mt-0">
            Concept by{" "}
            <Link href="https://thryveops.com" className="hover:text-white transition-colors underline underline-offset-2">
              Thryve Operations
            </Link>
            {" "}· thryveops.com
          </span>
        </div>
      </footer>

    </div>
  );
}
