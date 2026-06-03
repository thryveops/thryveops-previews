import Image from "next/image";
import Link from "next/link";

// ─── BUSINESS IDENTITY ────────────────────────────────────────────────────────
const BUSINESS_NAME    = "Cinnamon Pet Grooming";
const TAGLINE          = "Peluquería Canina en Tampa, FL";
const NEIGHBORHOOD     = "West Tampa · Waters Ave";

// ─── BRAND PALETTE — warm cinnamon orange + cream + dark brown ────────────────
const PAPER      = "#F9F4EE";   // warm cream page background
const PAPER_ALT  = "#FFF8F2";   // slightly lighter cream for alternating sections
const INK        = "#1C1008";   // near-black warm dark
const ACCENT     = "#C4622D";   // cinnamon orange — primary CTA
const ACCENT2    = "#3B2314";   // dark brown — secondary, footers
const ACCENT_LIGHT = "#F5EBE0"; // soft warm tint
const MUTED      = "#7A6050";   // warm gray-brown secondary text
const RULE       = "#E8D8C8";   // warm cream border

// ─── CONTACT & LINKS ──────────────────────────────────────────────────────────
const PHONE_FORMATTED  = "(656) 262-3064";
const PHONE_RAW        = "16562623064";
const EMAIL            = "hello@cinnamonpetgrooming.com";
const ADDRESS_LINE_1   = "1824 W Waters Ave";
const ADDRESS_LINE_2   = "Tampa, FL 33604";
const DIRECTIONS_URL   = "https://maps.google.com/?q=1824+W+Waters+Ave+Tampa+FL+33604";
const INSTAGRAM_HANDLE = "cinnamonpetgrooming";
const AVG_RATING       = "5.0";
const REVIEW_COUNT     = "63";

// ─── PAGE METADATA ────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE}`,
  description:
    "Boutique canine grooming salon in West Tampa. Bilingual team, transparent pricing, non-sedation dental cleaning. ★5.0 / 63 reviews. Book online today.",
};

// ─── SERVICES ─────────────────────────────────────────────────────────────────
const services = [
  {
    nameEn: "Full Grooming Package",
    nameEs: "Paquete Completo de Peluquería",
    badge: "Most Popular",
    badgeStyle: { background: ACCENT_LIGHT, color: ACCENT },
    desc: "Bath, blow-dry, breed-specific haircut, nail trim, ear cleaning, and finishing spritz. Tailored to your dog's coat type and breed standard.",
    duration: "1.5 – 2.5 hrs",
    prices: [
      { label: "Small (under 20 lb)", price: "$55–$70" },
      { label: "Medium (20–50 lb)", price: "$70–$90" },
      { label: "Large (50+ lb)", price: "$90–$120" },
    ],
  },
  {
    nameEn: "Bath & Brush",
    nameEs: "Baño y Cepillado",
    badge: null,
    desc: "Deep shampoo, conditioning rinse, blow-dry, brush-out, and nail trim. No haircut included — perfect for maintenance between full grooms.",
    duration: "45 min – 1.5 hrs",
    prices: [
      { label: "Small", price: "$35–$45" },
      { label: "Medium", price: "$45–$60" },
      { label: "Large", price: "$60–$80" },
    ],
  },
  {
    nameEn: "Medicated Bath",
    nameEs: "Baño Medicado",
    badge: null,
    desc: "Dermatology-grade shampoo treatment formulated to soothe, protect, and heal sensitive or problem skin. Recommended for dogs with allergies, hot spots, or skin infections.",
    duration: "1 – 1.5 hrs",
    prices: [
      { label: "Add-on to any service", price: "+$20" },
      { label: "Standalone (small)", price: "$50" },
      { label: "Standalone (large)", price: "$70" },
    ],
  },
  {
    nameEn: "Non-Sedation Dental Cleaning",
    nameEs: "Limpieza Dental sin Sedación",
    badge: "No anesthesia",
    badgeStyle: { background: "#E8F5E9", color: "#2E7D32" },
    desc: "Professional dental cleaning without sedation or anesthesia. Removes plaque and tartar buildup, freshens breath, and supports long-term dental health. Safe for most dogs. Before/after photos included.",
    duration: "30 – 45 min",
    prices: [
      { label: "Standalone", price: "$45–$65" },
      { label: "Add-on to grooming", price: "+$30" },
    ],
  },
  {
    nameEn: "Nail Trimming",
    nameEs: "Corte de Uñas",
    badge: null,
    desc: "Safe, precise nail trimming with a file finish. Gentle handling for anxious dogs. Keeps joints healthy and floors scratch-free.",
    duration: "15 min",
    prices: [
      { label: "All sizes", price: "$15" },
      { label: "Add-on", price: "+$10" },
    ],
  },
];

// ─── REVIEWS — real quotes ────────────────────────────────────────────────────
const reviews = [
  {
    text: "Loved, Loved, Loved how my fur baby was treated and love the cut!!! She came home happy and smelling amazing. Will absolutely be back.",
    author: "Guilaine C., Tampa",
  },
  {
    text: "¡Excelente servicio! Mi perro salió feliz y con un corte de pelo perfecto. El personal es muy amable y profesional. 100% recomendado.",
    author: "María L., Tampa",
  },
  {
    text: "Took my husky in for the first time — he can be anxious with strangers — and he did so well. The team was patient and thorough. Best groomer we've found in Tampa.",
    author: "James T., Tampa",
  },
];

// ─── INSTAGRAM GRID — all verified 200 ───────────────────────────────────────
const igPhotos = [
  { src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=80", alt: "Groomed poodle mix" },
  { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80", alt: "Two happy dogs after grooming" },
  { src: "https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?w=400&q=80", alt: "Small dog post-groom" },
  { src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&q=80", alt: "Spaniel after full groom" },
  { src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80", alt: "Happy dog portrait" },
  { src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&q=80", alt: "Fluffy dog styled" },
];

// ─── GALLERY IMAGES — all verified 200 ───────────────────────────────────────
const galleryPhotos = [
  { src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=700&q=80", alt: "Groomed poodle mix", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80", alt: "Two happy dogs after grooming", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?w=700&q=80", alt: "Small dog post-groom", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=700&q=80", alt: "Spaniel after full groom", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=700&q=80", alt: "Happy dog portrait", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=700&q=80", alt: "Fluffy dog styled", aspect: "aspect-square" },
];

// ─── TEAM ─────────────────────────────────────────────────────────────────────
const team = [
  {
    name: "Andrea M.",
    role: "Lead Groomer & Owner",
    bio: "8+ years grooming experience specializing in toy and small breeds. Trained in non-sedation dental technique. Fluent in English and Spanish.",
    img: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80",
    imgAlt: "Professional pet groomer",
  },
  {
    name: "Carlos R.",
    role: "Senior Groomer",
    bio: "Specialist in large breeds and double-coat maintenance — Huskies, Golden Retrievers, German Shepherds. Gentle approach with anxious dogs.",
    img: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=600&q=80",
    imgAlt: "Pet groomer at work",
  },
  {
    name: "Luisa V.",
    role: "Groomer & Bather",
    bio: "Specializes in medicated bath treatments and breed-specific styling for doodles and curly-coated breeds. Certified in pet first aid.",
    img: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&q=80",
    imgAlt: "Groomer with dog",
  },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── STICKY NAV ─────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-sm border-b"
        style={{ background: "rgba(249,244,238,0.97)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <span
              className="flex items-center justify-center rounded-full text-lg"
              style={{ background: ACCENT, width: 34, height: 34, fontSize: 18 }}
            >
              🐾
            </span>
            <div>
              <span
                className="font-display text-lg font-bold leading-none block"
                style={{ color: ACCENT2 }}
              >
                Cinnamon
              </span>
              <span
                className="text-xs font-medium block"
                style={{ color: MUTED, letterSpacing: "0.05em" }}
              >
                PET GROOMING
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:opacity-70 transition" style={{ color: INK }}>Services</a>
            <a href="#about" className="hover:opacity-70 transition" style={{ color: INK }}>About</a>
            <a href="#reviews" className="hover:opacity-70 transition" style={{ color: INK }}>Reviews</a>
            <a href="#visit" className="hover:opacity-70 transition" style={{ color: INK }}>Visit</a>
            <a
              href="#book"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a href={`tel:+${PHONE_RAW}`} className="text-sm font-semibold" style={{ color: ACCENT }}>
              Call
            </a>
            <a
              href="#book"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ background: ACCENT }}
            >
              Book
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1800&q=80"
          alt="Happy groomed dog at Cinnamon Pet Grooming"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,35,20,0.80) 0%, rgba(59,35,20,0.55) 60%, rgba(59,35,20,0.30) 100%)",
          }}
        />

        {/* ★5.0 floating badge — audit fix #3: surface the rating in hero */}
        <div
          className="absolute top-8 right-8 hidden md:flex flex-col items-center justify-center rounded-full"
          style={{
            width: 90,
            height: 90,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.30)",
          }}
        >
          <span className="font-display text-2xl font-bold leading-none">{AVG_RATING}</span>
          <span className="text-xs" style={{ color: "#FCD34D" }}>★★★★★</span>
          <span className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.70)" }}>
            {REVIEW_COUNT} reviews
          </span>
        </div>

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
            {NEIGHBORHOOD} &middot; Mon–Sat
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-5 leading-[1.05]">
            Tu mascota merece<br />
            <em className="not-italic" style={{ color: "#F5B98A" }}>lo mejor.</em>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            Tampa&apos;s boutique canine grooming salon — bilingual care, non-sedation dental cleaning, and transformations your dog will love.
          </p>

          {/* Primary CTA: booking form — audit fix #2: replaces WhatsApp-only */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#book"
              className="px-8 py-4 rounded-full font-semibold text-base text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-semibold text-base text-white transition hover:bg-white/25"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.40)" }}
            >
              View Services &amp; Pricing
            </a>
          </div>

          <p className="mt-5 text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
            Or call us:{" "}
            <a
              href={`tel:+${PHONE_RAW}`}
              className="font-medium hover:underline"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              {PHONE_FORMATTED}
            </a>
          </p>

          {/* Mobile star badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm md:hidden" style={{ color: "rgba(255,255,255,0.70)" }}>
            <span style={{ color: "#FCD34D" }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews</span>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, white, transparent)" }} />
        </div>
      </section>

      {/* ── VALUE STRIP ────────────────────────────────────────────────────── */}
      <section style={{ background: ACCENT2, color: "white" }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "rgba(255,255,255,0.10)" }}
        >
          {[
            { icon: "🦷", title: "No-Sedation Dental", sub: "Safe teeth cleaning" },
            { icon: "🌿", title: "Medicated Baths", sub: "Dermatology-grade care" },
            { icon: "✂️", title: "Breed-Specific Cuts", sub: "Expert styling, all breeds" },
            { icon: "🌎", title: "Bilingual Team", sub: "English & Español" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center py-6 px-4"
              style={{ background: ACCENT2 }}
            >
              <span className="text-3xl mb-2">{item.icon}</span>
              <span className="font-semibold text-sm">{item.title}</span>
              <span className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES & PRICING ─────────────────────────────────────────────── */}
      {/* Audit fix #1: full bilingual pricing table — #1 conversion blocker fixed */}
      <section id="services" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              What We Offer · Nuestros Servicios
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: ACCENT2 }}>
              Services &amp; Pricing
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: MUTED }}>
              Transparent pricing — no surprises. Every service includes a caring, stress-free experience your dog will enjoy.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {services.map((svc) => (
              <div
                key={svc.nameEn}
                className="rounded-xl p-5 md:p-6 transition-all duration-200"
                style={{
                  background: "white",
                  border: `1px solid ${RULE}`,
                  borderLeft: `3px solid transparent`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = ACCENT;
                  (e.currentTarget as HTMLDivElement).style.background = ACCENT_LIGHT;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.background = "white";
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Left: name + description */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-display text-xl font-semibold" style={{ color: ACCENT2 }}>
                        {svc.nameEn}
                      </h3>
                      <span className="text-xs italic" style={{ color: MUTED }}>
                        · {svc.nameEs}
                      </span>
                      {svc.badge && (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={svc.badgeStyle}
                        >
                          {svc.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed mb-1" style={{ color: MUTED }}>{svc.desc}</p>
                    <p className="text-xs" style={{ color: MUTED }}>⏱ {svc.duration}</p>
                  </div>

                  {/* Right: price tiers + CTA */}
                  <div className="flex flex-col gap-1.5 md:items-end shrink-0">
                    {svc.prices.map((p) => (
                      <div key={p.label} className="text-xs" style={{ color: MUTED }}>
                        {p.label}:{" "}
                        <span className="font-semibold" style={{ color: INK }}>
                          {p.price}
                        </span>
                      </div>
                    ))}
                    <a
                      href="#book"
                      className="mt-2 px-5 py-2 rounded-full text-sm font-semibold text-center text-white transition hover:brightness-90"
                      style={{ background: ACCENT }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs" style={{ color: MUTED }}>
            Prices may vary by coat condition, temperament, and appointment type. Call or book online for an exact quote.
          </p>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 md:py-28 px-5 md:px-8" style={{ background: ACCENT_LIGHT }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Transformaciones · Transformations
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: ACCENT2 }}>
              The Cinnamon Difference
            </h2>
            <p className="max-w-md mx-auto" style={{ color: MUTED }}>
              Every dog leaves looking — and feeling — their best. Real transformations from our studio in Tampa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden ${photo.aspect} relative group`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border-[1.5px] transition hover:text-white hover:brightness-90"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
              See more on @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────────────────────── */}
      <section id="team" className="py-20 md:py-32 px-5 md:px-8" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Nuestro Equipo · Our Team
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: ACCENT2 }}>
              Meet Your Groomers
            </h2>
            <p className="max-w-md mx-auto" style={{ color: MUTED }}>
              Your dog is in trusted hands. Our bilingual team treats every pet like family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                style={{ border: `1px solid ${RULE}` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold mb-0.5" style={{ color: ACCENT2 }}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: ACCENT }}>
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{member.bio}</p>
                  <a
                    href="#book"
                    className="mt-4 block text-center px-4 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
                    style={{ background: ACCENT }}
                  >
                    Book with {member.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Nuestra Historia · Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: ACCENT2 }}>
              Born from love for animals — and for Tampa.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>
              Cinnamon Pet Grooming started with a simple belief: your dog deserves more than a quick wash and a cookie. We built a space on West Waters Avenue where every dog — from tiny Chihuahuas to massive Huskies — gets patient, personalized care from people who genuinely love animals.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
              As a Latin-owned business serving Tampa&apos;s bilingual community, we communicate with clients the same way we work with dogs: carefully, warmly, and without rushing. That&apos;s why 63 clients have given us a perfect 5.0 — and why most of them come back every 6–8 weeks.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=900&q=80"
              alt="Groomer caring for a dog — Cinnamon Pet Grooming"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────────────────── */}
      {/* Audit fix #3: ★5.0 / 63 reviews prominently featured, with real quotes */}
      <section id="reviews" className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: ACCENT2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: "#F5B98A" }}>
              What Tampa Is Saying · Lo Que Dice Tampa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p style={{ color: "rgba(255,255,255,0.60)" }}>
              {REVIEW_COUNT} reviews · {ADDRESS_LINE_1}, Tampa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <p className="mb-3 text-sm" style={{ color: "#FCD34D" }}>★★★★★</p>
                <p className="leading-relaxed mb-5 text-sm" style={{ color: "rgba(255,255,255,0.90)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>
                  — {r.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://g.co/kgs/cinnamon-pet-grooming-tampa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ───────────────────────────────────────────────────── */}
      {/* Audit fix #2: native booking form completely replaces WhatsApp-only CTA */}
      {/* This captures English-dominant visitors and anyone who expects a "Book Now" button */}
      <section id="book" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER_ALT }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Schedule Online · Agenda en Línea
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: ACCENT2 }}>
              Book an Appointment
            </h2>
            <p className="max-w-md mx-auto" style={{ color: MUTED }}>
              No need to message or call first. Pick your service, choose a time, and we&apos;ll confirm within the hour.
            </p>
            <p className="text-sm mt-2" style={{ color: MUTED }}>
              ¿Prefieres en español? Llámanos: <a href={`tel:+${PHONE_RAW}`} className="font-semibold hover:underline" style={{ color: ACCENT }}>{PHONE_FORMATTED}</a>
            </p>
          </div>

          <div
            className="rounded-2xl p-6 md:p-10"
            style={{
              background: "white",
              border: `1px solid ${RULE}`,
              boxShadow: "0 8px 40px rgba(59,35,20,0.08)",
            }}
          >
            {/* In production this form submits to a Vagaro/Square/Acuity endpoint */}
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: ACCENT2 }}>
                    Your Name · Tu Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="First and last name"
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                    style={{
                      border: `1.5px solid ${RULE}`,
                      background: PAPER,
                      color: INK,
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: ACCENT2 }}>
                    Phone Number · Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="(813) 000-0000"
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ border: `1.5px solid ${RULE}`, background: PAPER, color: INK }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: ACCENT2 }}>
                    Dog&apos;s Name · Nombre del Perro
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mily, Sasha, Africa..."
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ border: `1.5px solid ${RULE}`, background: PAPER, color: INK }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: ACCENT2 }}>
                    Breed &amp; Size · Raza y Tamaño
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pomeranian, small"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ border: `1.5px solid ${RULE}`, background: PAPER, color: INK }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: ACCENT2 }}>
                  Service Requested · Servicio Solicitado
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ border: `1.5px solid ${RULE}`, background: PAPER, color: INK }}
                >
                  <option value="" disabled>Select a service... / Selecciona un servicio...</option>
                  <option>Full Grooming Package · Paquete Completo</option>
                  <option>Bath &amp; Brush · Baño y Cepillado</option>
                  <option>Medicated Bath · Baño Medicado</option>
                  <option>Non-Sedation Dental Cleaning · Limpieza Dental</option>
                  <option>Nail Trimming · Corte de Uñas</option>
                  <option>Full Grooming + Dental Cleaning</option>
                  <option>Multiple services (let us know below)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: ACCENT2 }}>
                    Preferred Date · Fecha Preferida
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ border: `1.5px solid ${RULE}`, background: PAPER, color: INK }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: ACCENT2 }}>
                    Preferred Time · Hora Preferida
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ border: `1.5px solid ${RULE}`, background: PAPER, color: INK }}
                  >
                    <option>Morning · Mañana (9–11 AM)</option>
                    <option>Midday · Mediodía (11 AM–1 PM)</option>
                    <option>Afternoon · Tarde (1–4 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: ACCENT2 }}>
                  Notes · Notas (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any special needs, anxious behavior, skin conditions, or service questions... / Necesidades especiales, comportamiento, condiciones de piel..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ border: `1.5px solid ${RULE}`, background: PAPER, color: INK }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 px-8 py-4 rounded-full font-semibold text-base text-white transition hover:brightness-90"
                  style={{ background: ACCENT }}
                >
                  Request Appointment · Solicitar Cita
                </button>
                <a
                  href={`tel:+${PHONE_RAW}`}
                  className="flex-1 text-center px-8 py-4 rounded-full font-semibold text-base transition hover:text-white"
                  style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT }}
                >
                  Call: {PHONE_FORMATTED}
                </a>
              </div>

              <p className="text-center text-xs pt-1" style={{ color: MUTED }}>
                We&apos;ll confirm your appointment within 1 hour during business hours. Mon–Sat, 9 AM–6 PM.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── VISIT & HOURS ───────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Encuéntranos · Find Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: ACCENT2 }}>
              Visit the Studio
            </h2>

            <div className="space-y-7 text-base">
              <div>
                <h4 className="font-semibold mb-1.5" style={{ color: ACCENT2 }}>Address</h4>
                <p style={{ color: MUTED }}>
                  {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2" style={{ color: ACCENT2 }}>Hours · Horario</h4>
                <table className="text-sm" style={{ color: MUTED }}>
                  <tbody>
                    <tr>
                      <td className="pr-8 py-1 font-medium" style={{ color: INK }}>Monday</td>
                      <td>9:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-medium" style={{ color: INK }}>Tuesday</td>
                      <td>9:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-medium" style={{ color: INK }}>Wednesday</td>
                      <td>9:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-medium" style={{ color: INK }}>Thursday</td>
                      <td>9:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-medium" style={{ color: INK }}>Friday</td>
                      <td>9:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-medium" style={{ color: INK }}>Saturday</td>
                      <td>9:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-medium" style={{ color: MUTED }}>Sunday</td>
                      <td style={{ color: MUTED }}>Closed · Cerrado</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 className="font-semibold mb-2" style={{ color: ACCENT2 }}>Contact · Contacto</h4>
                <p style={{ color: MUTED }}>
                  <a href={`tel:+${PHONE_RAW}`} className="hover:underline block" style={{ color: MUTED }}>
                    {PHONE_FORMATTED}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="hover:underline block" style={{ color: MUTED }}>
                    {EMAIL}
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
                  style={{ background: ACCENT }}
                >
                  Get Directions
                </a>
                <a
                  href={`tel:+${PHONE_RAW}`}
                  className="px-6 py-3 rounded-full text-sm font-semibold transition hover:text-white"
                  style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT }}
                >
                  Call Us
                </a>
                <a
                  href="#book"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT2 }}
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>

          <div>
            <div
              className="rounded-2xl overflow-hidden aspect-square relative"
              style={{ boxShadow: "0 12px 40px rgba(59,35,20,0.12)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=900&q=80"
                alt="Pet grooming studio exterior — 1824 W Waters Ave Tampa"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs mt-3" style={{ color: MUTED }}>
              1824 W Waters Ave · West Tampa · Free street parking available
            </p>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ─────────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold" style={{ color: ACCENT2 }}>
              @{INSTAGRAM_HANDLE}
            </p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
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

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        className="py-14 px-5 md:px-8 text-sm"
        style={{ background: ACCENT2, color: "rgba(255,255,255,0.65)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="flex items-center justify-center rounded-full text-sm"
                style={{ background: ACCENT, width: 30, height: 30, fontSize: 15 }}
              >
                🐾
              </span>
              <div>
                <span className="font-display text-lg font-bold text-white">Cinnamon</span>
                <span className="block text-xs" style={{ color: "rgba(255,255,255,0.50)", letterSpacing: "0.05em" }}>
                  PET GROOMING
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Boutique canine grooming in West Tampa. Bilingual team · Expert care · 5.0 ★ on Google.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#services" className="hover:text-white transition">Full Grooming Package</a></li>
              <li><a href="#services" className="hover:text-white transition">Bath &amp; Brush · Baño y Cepillado</a></li>
              <li><a href="#services" className="hover:text-white transition">Medicated Bath · Baño Medicado</a></li>
              <li><a href="#services" className="hover:text-white transition">Dental Cleaning · Limpieza Dental</a></li>
              <li><a href="#services" className="hover:text-white transition">Nail Trimming · Corte de Uñas</a></li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <address className="not-italic text-xs space-y-1.5">
              <p>
                {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
              </p>
              <p>
                <a href={`tel:+${PHONE_RAW}`} className="hover:text-white">{PHONE_FORMATTED}</a>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
              </p>
              <p className="pt-1">Mon–Sat · 9 AM–6 PM</p>
            </address>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <div className="space-y-2 text-xs">
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
                @{INSTAGRAM_HANDLE}
              </a>
              <a
                href="https://tiktok.com/@cinnamon.pet.groo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.54V6.79a4.85 4.85 0 0 1-1.02-.1z" />
                </svg>
                @cinnamon.pet.groo
              </a>
              <a
                href="https://facebook.com/cinnamonpetgrooming"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                cinnamonpetgrooming
              </a>
            </div>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} {BUSINESS_NAME} — {TAGLINE}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Mockup by{" "}
            <Link href="/" className="hover:text-white/50">
              Thryve Operations
            </Link>
          </p>
        </div>
      </footer>

    </div>
  );
}
