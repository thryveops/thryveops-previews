import Image from "next/image";
import Link from "next/link";

// ─── PROSPECT DATA ────────────────────────────────────────────────────────────
// Fonts (Fraunces + Inter) and Vercel Analytics loaded globally via layout.tsx.
// Use className="font-display" for display headings — no imports needed here.

// Business identity
const BUSINESS_NAME = "Tropik Detailing Tampa";
const TAGLINE = "Premium Mobile Auto & Marine Detailing";
const NEIGHBORHOOD = "SoHo / Hyde Park";
const YEAR_FOUNDED = "2022";

// Brand palette — deep ocean teal + near-black with blue undertone
const PAPER   = "#F8FAFB";   // page background — cool off-white
const INK     = "#0F1923";   // body text — near-black with blue undertone
const ACCENT  = "#0D6E8A";   // primary brand — deep ocean teal
const ACCENT2 = "#00C9A7";   // secondary — bright tropical teal/mint
const DARK    = "#0C1A24";   // dark sections
const DARK2   = "#152535";   // alternate dark
const RULE    = "#DDE4EA";   // borders / dividers

// Contact & links
const PHONE_FORMATTED  = "(267) 984-0397";
const PHONE_RAW        = "2679840397";
const EMAIL            = "hello@tropikdetailingtampa.com";
const ADDRESS_LINE_1   = "1909 W North A St";
const ADDRESS_LINE_2   = "Tampa, FL 33606";
const DIRECTIONS_URL   = "https://www.google.com/maps/search/1909+W+North+A+St+Tampa+FL+33606";
const INSTAGRAM_HANDLE = "tropikdetailing";
const TIKTOK_HANDLE    = "tropik_detailing";
const FACEBOOK_URL     = "https://www.facebook.com/100095555467616";
const AVG_RATING       = "5.0";
const REVIEW_COUNT     = "61";

// ─── PAGE METADATA ────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE}`,
  description:
    "Tampa Bay's premium mobile auto and marine detailing service — ceramic coating, paint correction, and full detail packages. 5.0 ★ on Google. We come to you.",
};

// ─── SERVICES ────────────────────────────────────────────────────────────────
const services = [
  {
    name: "Complete Premium Detail",
    badge: "Most Popular",
    badgeStyle: "mint" as const,
    desc: "Full exterior wash, clay bar decontamination, hand wax, engine bay, wheel cleaning, door jambs + full interior: upholstery shampoo, carpet vacuum, plastics, windows, air freshen.",
    tags: ["3–5 hrs", "Sedans · SUVs · Trucks"],
    price: "$249+",
    priceNote: "Starting from",
    cta: "Book Now",
  },
  {
    name: "Exterior Detail Package",
    badge: null,
    badgeStyle: null,
    desc: "Exterior hand wash, clay bar decontamination, hand wax, engine bay detail, wheel and wheel well cleaning, door jambs, window polish.",
    tags: ["2–3 hrs", "All vehicle types"],
    price: "$149+",
    priceNote: "Starting from",
    cta: "Book Now",
  },
  {
    name: "Interior Detail Package",
    badge: null,
    badgeStyle: null,
    desc: "Full interior vacuum, upholstery and carpet shampoo, floor mat deep clean, door jambs, all plastic and leather surfaces, interior windows, pet hair removal, air freshen.",
    tags: ["2–3 hrs", "Includes pet hair removal"],
    price: "$129+",
    priceNote: "Starting from",
    cta: "Book Now",
  },
  {
    name: "Standard Wash & Vacuum",
    badge: null,
    badgeStyle: null,
    desc: "Complete exterior hand wash, wax application, interior vacuum, door jambs, wheel well cleaning, air freshen. The perfect maintenance detail between deeper sessions.",
    tags: ["1–2 hrs", "Maintenance detail"],
    price: "$79+",
    priceNote: "Starting from",
    cta: "Book Now",
  },
  {
    name: "Ceramic Coating & Paint Correction",
    badge: "Premium",
    badgeStyle: "teal" as const,
    desc: "2-step paint correction removes swirls, oxidation, and light scratches. Professional ceramic coating provides 2–5 years of hydrophobic protection. Custom quote based on vehicle condition and coating package.",
    tags: ["Full-day service", "Free assessment included"],
    price: "$599+",
    priceNote: "Custom quote",
    cta: "Get Quote",
  },
  {
    name: "Marine Detailing",
    badge: "Tampa Bay Specialty",
    badgeStyle: "mint" as const,
    desc: "Hull oxidation removal and wax, interior upholstery and carpet cleaning, metal and chrome polish, canvas and vinyl conditioning, salt decontamination treatment. We come to your marina or driveway.",
    tags: ["Half–full day", "Boats · Center consoles · Pontoons"],
    price: "$299+",
    priceNote: "Custom marine quote",
    cta: "Get Marine Quote",
  },
];

// ─── GALLERY ─────────────────────────────────────────────────────────────────
const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    label: "Ceramic Coating",
    caption: "BMW 5 Series — paint correction + 3-year ceramic",
  },
  {
    src: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    label: "Interior Detail",
    caption: "Range Rover — full interior shampoo + leather conditioning",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    label: "Exterior Detail",
    caption: "Tesla Model S — clay bar + hand wax + wheel polish",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    label: "Premium Detail",
    caption: "Porsche Cayenne — complete premium detail + engine bay",
  },
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
    label: "Paint Correction",
    caption: "2-step correction — swirl removal + gloss restoration",
  },
  {
    src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    label: "Marine Detail",
    caption: "28' center console — hull oxidation removal + full interior",
  },
];

// ─── REVIEWS ─────────────────────────────────────────────────────────────────
const reviews = [
  {
    text: "Absolutely incredible work. My Range Rover looks better than the day I bought it. The ceramic coating is flawless — you can see the depth in the paint. Worth every penny and then some.",
    author: "Michael T., Hyde Park",
  },
  {
    text: "These guys came to my office in South Tampa and had my Tesla looking like it just rolled off the lot. Super professional, on time, and they actually care about the details. Won't use anyone else.",
    author: "Sarah K., South Tampa",
  },
  {
    text: "I had them do my boat before a trip to Boca Grande — hull, interior, the works. Looked brand new. I didn't know mobile detailing this thorough even existed. Booked them again for next month already.",
    author: "James R., Tampa Bay",
  },
];

// ─── INSTAGRAM GRID ───────────────────────────────────────────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80",
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=400&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── STICKY NAV ── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b shadow-sm"
        style={{ background: "rgba(255,255,255,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-tight" style={{ color: ACCENT }}>
              TROPIK
            </span>
            <span className="font-display text-2xl font-bold tracking-tight" style={{ color: INK }}>
              DETAILING
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#services" className="text-gray-700 hover:opacity-70 transition">Services</a>
            <a href="#marine" className="text-gray-700 hover:opacity-70 transition">Marine</a>
            <a href="#gallery" className="text-gray-700 hover:opacity-70 transition">Our Work</a>
            <a href="#reviews" className="text-gray-700 hover:opacity-70 transition">Reviews</a>
            <a href="#visit" className="text-gray-700 hover:opacity-70 transition">Visit</a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href={`tel:${PHONE_RAW}`}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden"
        style={{ background: DARK }}
      >
        <Image
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1800&q=85"
          alt="Premium car detailing Tampa Bay"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(12,26,36,0.85) 0%, rgba(13,110,138,0.35) 50%, rgba(12,26,36,0.75) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-8"
            style={{
              background: "rgba(0,201,167,0.15)",
              border: "1px solid rgba(0,201,167,0.4)",
              color: ACCENT2,
            }}
          >
            ★ {AVG_RATING} &middot; {REVIEW_COUNT} Reviews &middot; {NEIGHBORHOOD}, Tampa
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
            <span className="text-white">TROPIK</span>
            <br />
            <span style={{ color: ACCENT2 }}>DETAILING</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Tampa Bay&rsquo;s premium mobile auto &amp; marine detailing service. Ceramic coating,
            paint correction, and full detail packages — we come to you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-8 py-4 rounded-full font-semibold text-base text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book a Detail
            </a>
            <a
              href="#services"
              className="border border-white/40 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition"
            >
              See All Services
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-xl mx-auto">
            {[
              { value: "5.0", sub: "Google Rating" },
              { value: "61+", sub: "Verified Reviews" },
              { value: "Mobile", sub: "We Come to You", accent: true },
            ].map((s) => (
              <div
                key={s.sub}
                className="rounded-xl p-4 text-center"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <div
                  className="font-display text-3xl font-bold"
                  style={{ color: s.accent ? ACCENT2 : "white" }}
                >
                  {s.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          <span className="tracking-widest uppercase text-xs">Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
        </div>
      </section>

      {/* ── VALUE PROP STRIP ── */}
      <section style={{ background: DARK2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            {
              icon: "🛡️",
              title: "Ceramic & Paint Protection",
              desc: "Professional-grade ceramic coatings and multi-step paint corrections that last years, not weeks.",
            },
            {
              icon: "🚗",
              title: "We Come to Your Door",
              desc: "Fully mobile service across all of Tampa Bay. Your driveway, your office, your schedule.",
            },
            {
              icon: "⛵",
              title: "Auto & Marine Specialist",
              desc: "One of the only mobile detailers in Tampa Bay that handles both luxury vehicles and watercraft.",
            },
          ].map((v) => (
            <div key={v.title} className="px-8 py-10 text-center">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES & PRICING ── */}
      <section id="services" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p
              className="text-sm tracking-[0.25em] uppercase font-semibold mb-3"
              style={{ color: ACCENT2 }}
            >
              Services &amp; Pricing
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: INK }}>
              Every detail. Every surface.
            </h2>
            <p className="text-base text-gray-500 mt-4 max-w-xl">
              Pricing shown is starting from — final quote depends on vehicle size and condition.
              New clients save 15% off their first service.
            </p>
          </div>

          {/* Service rows */}
          <div className="space-y-3">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-200 hover:shadow-md"
                style={
                  svc.name === "Marine Detailing"
                    ? { borderTop: `3px solid ${ACCENT2}` }
                    : svc.badgeStyle === "teal"
                    ? { borderTop: `3px solid ${ACCENT}` }
                    : {}
                }
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg" style={{ color: INK }}>
                      {svc.name}
                    </h3>
                    {svc.badge && (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-semibold text-white"
                        style={{
                          background: svc.badgeStyle === "mint" ? ACCENT2 : ACCENT,
                          color: svc.badgeStyle === "teal" ? "white" : "white",
                        }}
                      >
                        {svc.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <div className="font-display text-3xl font-bold" style={{ color: ACCENT }}>
                      {svc.price}
                    </div>
                    <div className="text-xs text-gray-400">{svc.priceNote}</div>
                  </div>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-white whitespace-nowrap transition hover:brightness-110"
                    style={{ background: ACCENT }}
                  >
                    {svc.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            First-time clients receive <strong>15% off</strong> all services including paint corrections
            and ceramic coatings.
          </p>
        </div>
      </section>

      {/* ── MARINE DETAILING (dedicated section) ── */}
      <section
        id="marine"
        className="py-20 md:py-32 px-5 md:px-8 overflow-hidden"
        style={{ background: DARK }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p
              className="text-sm tracking-[0.25em] uppercase font-semibold mb-4"
              style={{ color: ACCENT2 }}
            >
              Also on the Water
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Marine Detailing for Tampa Bay
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
              Saltwater is brutal on gelcoat, upholstery, and metal fittings. Tropik&rsquo;s marine
              detailing service covers everything from hull oxidation removal and wax to interior
              deep-clean, canvas conditioning, and metal polish — keeping your boat looking and
              performing like new.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              We come to your marina or your driveway. One of the few mobile operators in Tampa Bay
              offering dedicated marine detail packages — no drop-off, no scheduling around shop hours.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Hull oxidation removal & wax",
                "Interior upholstery & carpet cleaning",
                "Metal & chrome polish",
                "Canvas & vinyl conditioning",
                "Salt decontamination treatment",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <span style={{ color: ACCENT2 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-block px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Get a Marine Quote →
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=900&q=80"
              alt="Marine detailing — Tampa Bay boat cleaning"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(12,26,36,0.6) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white font-medium"
                style={{
                  background: "rgba(0,201,167,0.2)",
                  border: "1px solid rgba(0,201,167,0.4)",
                }}
              >
                ⛵ Serving Tampa Bay marinas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER GALLERY ── */}
      <section id="gallery" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm tracking-[0.25em] uppercase font-semibold mb-3"
              style={{ color: ACCENT2 }}
            >
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: INK }}>
              Before &amp; After
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              Real results from real Tampa Bay vehicles. Every image is an actual Tropik Detailing
              job — no stock photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.caption}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(12,26,36,0.9) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="text-xs font-semibold tracking-wider uppercase mb-1"
                    style={{ color: ACCENT2 }}
                  >
                    {item.label}
                  </span>
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="inline-block px-8 py-3 rounded-full font-semibold border-2 transition hover:text-white hover:brightness-90"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              See More on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT / STORY ── */}
      <section id="about" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p
              className="text-sm tracking-[0.25em] uppercase font-semibold mb-4"
              style={{ color: ACCENT2 }}
            >
              The Story
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: INK }}
            >
              Built on detail.
              <br />
              Trusted by Tampa.
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-5">
              Tropik Detailing Tampa was built for one reason: to give Tampa Bay vehicle owners
              access to genuinely professional mobile detailing without having to leave their car
              somewhere and hope for the best. We specialize in ceramic coating, paint correction,
              and deep detail work that protects your investment — whether it&rsquo;s a daily driver,
              a weekend show car, or a boat on the bay.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We serve SoHo, Hyde Park, South Tampa, and all of Tampa Bay. Every job is done with
              professional-grade products and a standard that shows up in the work. That&rsquo;s why
              we have {REVIEW_COUNT} five-star reviews and counting.
            </p>
            <div
              className="flex items-center gap-4 p-4 rounded-xl border"
              style={{ borderColor: RULE }}
            >
              <div className="font-display text-4xl font-bold" style={{ color: ACCENT }}>
                ★ 5.0
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: INK }}>
                  {REVIEW_COUNT} Google reviews
                </div>
                <div className="text-xs text-gray-400 mt-0.5">Every single one five stars</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=900&q=80"
              alt="Professional car detailing in Tampa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section
        id="reviews"
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ background: DARK }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.25em] uppercase font-semibold mb-3"
              style={{ color: ACCENT2 }}
            >
              What Tampa Says
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              Based on {REVIEW_COUNT} verified reviews — every one of them five stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-7 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-sm tracking-widest mb-4" style={{ color: "#FBBF24" }}>
                  ★★★★★
                </p>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  — {r.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/Tropik+Detailing+Tampa"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── VISIT + QUOTE FORM ── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left: contact info */}
          <div>
            <p
              className="text-sm tracking-[0.25em] uppercase font-semibold mb-4"
              style={{ color: ACCENT2 }}
            >
              Book &amp; Contact
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight"
              style={{ color: INK }}
            >
              Ready to get started?
            </h2>

            <div className="space-y-7 text-base">
              <div>
                <h4 className="font-semibold mb-1.5" style={{ color: INK }}>Location</h4>
                <p className="text-gray-600">
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                  <br />
                  <span className="text-sm text-gray-400">
                    {NEIGHBORHOOD} · Fully mobile — we come to you
                  </span>
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1.5" style={{ color: INK }}>Service Hours</h4>
                <table className="text-sm text-gray-600 w-full max-w-xs">
                  <tbody>
                    <tr>
                      <td className="pr-6 py-1 font-medium">Monday – Friday</td>
                      <td>8:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-1 font-medium">Saturday</td>
                      <td>8:00 AM – 5:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-1 font-medium">Sunday</td>
                      <td>By appointment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 className="font-semibold mb-1.5" style={{ color: INK }}>Reach Us</h4>
                <p className="text-gray-600">
                  <a href={`tel:${PHONE_RAW}`} className="hover:opacity-70 transition" style={{ color: INK }}>
                    {PHONE_FORMATTED}
                  </a>
                  <br />
                  <a href={`mailto:${EMAIL}`} className="hover:opacity-70 transition" style={{ color: INK }}>
                    {EMAIL}
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Call to Book
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold border-2 transition hover:text-white hover:brightness-90"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right: Request a Quote form (replaces Google Form) */}
          <div className="rounded-2xl p-8 shadow-lg" style={{ background: DARK }}>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Request a Quote
            </h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Tell us your vehicle type and what you&rsquo;re looking for. We&rsquo;ll get back to
              you within a few hours with pricing and availability.
            </p>

            <form className="space-y-4">
              <div>
                <label
                  className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(813) 000-0000"
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Service
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <option value="">Select a service…</option>
                  <option>Complete Premium Detail</option>
                  <option>Exterior Detail Package</option>
                  <option>Interior Detail Package</option>
                  <option>Standard Wash &amp; Vacuum</option>
                  <option>Ceramic Coating</option>
                  <option>2-Step Paint Correction</option>
                  <option>Marine Detailing</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-xs font-medium mb-1.5 uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Vehicle / Notes
                </label>
                <textarea
                  placeholder="Year, make, model + anything else we should know"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none resize-none"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full font-semibold text-base text-white transition hover:brightness-110"
                style={{ background: ACCENT }}
              >
                Send Request
              </button>
            </form>

            <p
              className="text-center text-xs mt-5"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Or call us directly:{" "}
              <a
                href={`tel:${PHONE_RAW}`}
                className="hover:text-white transition"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {PHONE_FORMATTED}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA STRIP ── */}
      <section
        className="py-20 px-5 md:px-8 text-center relative overflow-hidden"
        style={{ background: ACCENT }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Your vehicle deserves better.
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Premium mobile detailing in {NEIGHBORHOOD} and all of Tampa Bay.
            Book today — we come to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white px-8 py-4 rounded-full font-semibold text-base transition hover:bg-white/90"
              style={{ color: ACCENT }}
            >
              Call {PHONE_FORMATTED}
            </a>
            <a
              href="#services"
              className="border border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition"
            >
              View Services
            </a>
          </div>
          <p className="text-sm mt-6" style={{ color: "rgba(255,255,255,0.6)" }}>
            First-time clients: 15% off all services including ceramic coating
          </p>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ── */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-display text-2xl font-bold" style={{ color: INK }}>
                @{INSTAGRAM_HANDLE}
              </p>
              <p className="text-sm text-gray-400 mt-0.5">
                Before &amp; afters, process videos, and Tampa Bay cars
              </p>
            </div>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-sm font-semibold hover:underline"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `rgba(13,110,138,0.55)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-14 px-5 md:px-8 text-sm"
        style={{ background: DARK, color: "rgba(255,255,255,0.55)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display text-2xl font-bold tracking-tight" style={{ color: ACCENT2 }}>
                TROPIK
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                DETAILING
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Tampa Bay&rsquo;s premium mobile auto and marine detailing service.
              ★ {AVG_RATING} &middot; {REVIEW_COUNT} Google reviews.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={`https://www.tiktok.com/@${TIKTOK_HANDLE}`}
                className="hover:text-white transition-colors"
              >
                TikTok
              </a>
              <a href={FACEBOOK_URL} className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["#services", "Complete Premium Detail"],
                ["#services", "Exterior Detail"],
                ["#services", "Interior Detail"],
                ["#marine", "Marine Detailing"],
                ["#services", "Ceramic Coating"],
                ["#services", "Paint Correction"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <address className="not-italic space-y-2 text-sm">
              <p>
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
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
            </address>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Tropik Detailing Tampa. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            Mockup by{" "}
            <Link href="/" className="hover:text-white/50 transition-colors">
              Thryve Operations
            </Link>
          </p>
        </div>
      </footer>

    </div>
  );
}
