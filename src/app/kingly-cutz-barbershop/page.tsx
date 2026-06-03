export const metadata = {
  title: "Kingly Cutz Barbershop — Where Kings Get Their Crowns | Tampa, FL",
  description: "Tampa's highest-rated barbershop. Precision fades, signature beard grooming & hot towel shaves. Two locations on Busch Blvd & Armenia Ave. 5.0 stars · 588 reviews. Book online via Booksy.",
};

// ─── Brand constants ──────────────────────────────────────────────────────────
const NAME          = "KINGLY CUTZ";
const TAGLINE       = "Precision fades · Signature beard grooming · Hot towel shaves · Executive styling — crafted by Tampa's most trusted barber.";
const CITY          = "Tampa, FL";
const PHONE         = "(813) 468-4061";
const PHONE_RAW     = "8134684061";
const BOOKING_URL   = "https://booksy.com/en-us/798530_kingly-cutz_barber-shop_15761_tampa";
const BOOKING_URL_ARMENIA = "https://booksy.com/en-us/60112_king-the-barber_barber-shop_15761_tampa";
const IG_HANDLE     = "@olazabelking";
const IG_URL        = "https://www.instagram.com/olazabelking/";
const RATING        = "5.0";
const REVIEW_COUNT  = "588";
const EST           = "Est. 2014 · North Tampa";

// Gold accent — dark text #0A0A0A on any gold background (per template rule)
const ACCENT        = "#C9A96E";
const ACCENT_LIGHT  = "#E2C07E";

const BG1   = "#0A0A0A";
const BG2   = "#111111";
const BG3   = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2    = "#A0A0A0";
const T3    = "#606060";

// ─── Content ─────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    name: "King's Cut — No Beard",
    price: "$59.99",
    dur: "45 min",
    desc: "A precision haircut tailored to your face shape — faded, tapered, or textured. King's signature approach, every time.",
    popular: false,
  },
  {
    name: "Signature Cut & Beard",
    price: "$69.99",
    dur: "50 min",
    desc: "The full treatment — precision cut followed by beard shaping, lining, and hot towel finish. The standard for the man who wants it all.",
    popular: true,
  },
  {
    name: "Young King Cut",
    price: "$39.99",
    dur: "30 min",
    desc: "Ages 12 & under. The same craft, calibrated for your young man. Patient, precise, and always clean.",
    popular: false,
  },
  {
    name: "Executive Reset",
    price: "$62.99",
    dur: "50 min",
    desc: "A refined cut and beard combo built for the professional who can't afford to look anything less than sharp.",
    popular: false,
  },
  {
    name: "King's Deluxe Experience",
    price: "$139.99",
    dur: "90 min",
    desc: "The full royal treatment — signature cut, beard grooming, hot towel service, and finishing with premium product. Reserved for the man who invests in himself.",
    popular: false,
  },
  {
    name: "Precision Waxing",
    price: "$44.99",
    dur: "20 min",
    desc: "Clean brow and facial waxing to sharpen every detail. Available at the Armenia Ave flagship location.",
    popular: false,
  },
];

const TEAM = [
  {
    name: "Sandy \"King\" Olazabal",
    role: "Owner & Master Barber",
    spec: "Precision Fades · Beard Grooming · 10+ yrs",
    bio: "Tampa native with a decade behind the chair and a 5.0-star track record to show for it. The philosophy: every man deserves to leave looking and feeling like royalty.",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
  },
  {
    name: "Kingly Cutz — Armenia",
    role: "Senior Barber",
    spec: "Skin Fades · Taper · Beard Design",
    bio: "Holding down the Armenia Ave flagship with the same standard King built on Busch Blvd. Two locations, one bar — no client leaves the chair anything less than sharp.",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  },
  {
    name: "Book Your Barber",
    role: "Both Locations",
    spec: "Busch Blvd · Armenia Ave",
    bio: "Select your preferred location and barber online. First-time clients receive 10% off. Slots fill fast — book ahead.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
];

const REVIEWS = [
  {
    text: "Best fade in Tampa!!! King makes you feel like a valuable client. The attention to detail, precision, professionalism and customer service were top-notch.",
    name: "Verified Reviewer",
    sub: "Google Review",
  },
  {
    text: "The shop is super clean, professional, and has a really positive energy. King listens to exactly what you want and delivers every single time.",
    name: "Alicia G.",
    sub: "Tampa · Regular",
  },
  {
    text: "Hot towel experience, dressed like a true gentleman, and the cut was immaculate. This is the luxury barbershop Tampa has been waiting for.",
    name: "Verified Reviewer",
    sub: "Google Review",
  },
  {
    text: "Brought my son for the Young King Cut and King was patient, precise, and made him feel like a pro. We're not going anywhere else.",
    name: "Verified Reviewer",
    sub: "Young King Cut",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=80",
  "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?w=700&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80",
];

// Two-location hours (Busch Blvd differs on Saturday — closes at 5 PM)
const HOURS_BUSCH = [
  { day: "Mon – Fri", time: "9:00 AM – 6:00 PM", closed: false },
  { day: "Saturday",  time: "9:00 AM – 5:00 PM", closed: false },
  { day: "Sunday",    time: "Closed",              closed: true  },
];

const HOURS_ARMENIA = [
  { day: "Mon – Fri", time: "9:00 AM – 6:00 PM", closed: false },
  { day: "Saturday",  time: "9:00 AM – 6:00 PM", closed: false },
  { day: "Sunday",    time: "Closed",              closed: true  },
];

const PILLARS = [
  {
    title: "Precision Craft",
    desc: "Every line drawn with intention. Fades built from the skin up. No guessing, no rushing.",
  },
  {
    title: "Royal Treatment",
    desc: "Hot towel finishes. Premium product. An experience that makes you look forward to the chair.",
  },
  {
    title: "Book Online",
    desc: "Reserve your slot any time on Booksy. 10% off your first cut — no code needed, no catch.",
  },
];

// ─── Address — primary (Busch Blvd) for single-address fallback ───────────────
const ADDRESS_LINE1   = "1041 W Busch Blvd";
const ADDRESS_LINE2   = "Tampa, FL 33612";

// ─── Hero & location photos ───────────────────────────────────────────────────
const HERO_PHOTO     = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80";
const LOCATION_PHOTO = "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80";

// ─── Stats bar ────────────────────────────────────────────────────────────────
const STAT1_VAL   = "5.0 ★";
const STAT1_LABEL = "588 Google Reviews";
const STAT2_VAL   = "2";
const STAT2_LABEL = "Tampa Locations";
const STAT3_VAL   = "10+";
const STAT3_LABEL = "Years of Craft";

// ─── Final CTA ────────────────────────────────────────────────────────────────
const CTA_HEADLINE = "Book Your Royal Treatment";
const CTA_BODY     = "Two locations. One standard. Tampa's highest-rated barbershop — now yours to book online.";

// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div style={{ background: BG1, color: "#fff", fontFamily: "var(--font-inter)" }}>
      <style>{`
        @keyframes bs-shimmer { from { background-position: -200% center; } to { background-position: 200% center; } }
        .bs-shimmer {
          background: linear-gradient(90deg, ${ACCENT}, ${ACCENT_LIGHT}, #fff, ${ACCENT_LIGHT}, ${ACCENT});
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: bs-shimmer 4s linear infinite;
        }
        .bs-svc:hover  { background-color: ${BG2}; border-left-color: ${ACCENT} !important; }
        .bs-tc:hover   { border-color: ${ACCENT} !important; }
        .bs-tp         { filter: grayscale(100%); transition: filter .5s, transform .5s; }
        .bs-tc:hover .bs-tp { filter: grayscale(0); transform: scale(1.04); }
        .bs-go         { opacity: 0; transition: opacity .3s; }
        .bs-gi:hover .bs-go { opacity: 1; }
        .bs-gi img     { transition: transform .5s; }
        .bs-gi:hover img { transform: scale(1.08); }
        .loc-card { border: 1px solid ${BORDER}; transition: border-color .3s; }
        .loc-card:hover { border-color: ${ACCENT}; }
        .hours-row { display: flex; justify-content: space-between; padding: 0.45rem 0; border-bottom: 1px solid ${BORDER}; }
        .hours-row:last-child { border-bottom: none; }
      `}</style>

      {/* FLOATING BOOK BUTTON */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 shadow-2xl transition-opacity hover:opacity-90"
        style={{ background: ACCENT, color: "#0A0A0A" }}
      >
        Book Now
      </a>

      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-40"
        style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: 72 }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <span
              className="text-white text-2xl tracking-widest block"
              style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 1 }}
            >
              {NAME}
            </span>
            <span className="block text-[9px] tracking-[0.3em] uppercase -mt-0.5" style={{ color: ACCENT }}>
              Barbershop · Tampa FL
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {(["#services", "#team", "#gallery", "#visit"] as const).map((href, i) => (
              <a
                key={href}
                href={href}
                className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-white"
                style={{ color: T2 }}
              >
                {["Services", "Team", "Gallery", "Visit"][i]}
              </a>
            ))}
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
            style={{ background: ACCENT, color: "#0A0A0A" }}
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="absolute inset-0">
          <img
            src={HERO_PHOTO}
            alt="Kingly Cutz barbershop interior"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom,rgba(10,10,10,.65) 0%,rgba(10,10,10,.5) 50%,rgba(10,10,10,.9) 100%)",
            }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.25)" }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{ paddingTop: 100 }}>
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
            North Tampa · Est. 2014
          </p>
          <h1
            className="bs-shimmer leading-none"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(4rem,14vw,10rem)",
              letterSpacing: "0.04em",
            }}
          >
            Where Kings<br />Get Their Crowns
          </h1>
          <p className="mt-5 text-sm md:text-base tracking-widest uppercase" style={{ color: T2 }}>
            {EST}
          </p>
          <p
            className="mt-3 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: T2 }}
          >
            {TAGLINE}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.25em] uppercase px-10 py-4 transition-opacity hover:opacity-90"
              style={{ background: ACCENT, color: "#0A0A0A" }}
            >
              Book Your Cut
            </a>
            <a
              href="#team"
              className="border text-white text-xs font-medium tracking-[0.25em] uppercase px-10 py-4 transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,.35)" }}
            >
              Meet The Team
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-14 flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT, letterSpacing: "0.04em", fontSize: "2rem" }}
              >
                {STAT1_VAL}
              </div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>
                {STAT1_LABEL}
              </div>
            </div>
            <div style={{ width: 1, height: 32, background: BORDER }} />
            <div className="text-center">
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT, letterSpacing: "0.04em", fontSize: "2rem" }}
              >
                {STAT2_VAL}
              </div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>
                {STAT2_LABEL}
              </div>
            </div>
            <div style={{ width: 1, height: 32, background: BORDER }} />
            <div className="text-center">
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT, letterSpacing: "0.04em", fontSize: "2rem" }}
              >
                {STAT3_VAL}
              </div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>
                {STAT3_LABEL}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-12"
            style={{ background: `linear-gradient(to bottom,${ACCENT},transparent)` }}
          />
          <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: T3 }}>
            Scroll
          </p>
        </div>
      </section>

      {/* VALUE PROP */}
      <section style={{ background: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="flex flex-col items-center text-center px-8 py-12"
              style={{ borderRight: i < 2 ? `1px solid ${BORDER}` : undefined }}
            >
              <h3
                className="font-semibold text-lg tracking-wide mb-3"
                style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT, fontSize: "1.3rem", letterSpacing: "0.04em" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: T2 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-4 py-24" style={{ background: BG1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>
              The Menu
            </p>
            <h2
              className="leading-none text-white"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(3rem,8vw,6rem)",
                letterSpacing: "0.04em",
              }}
            >
              Services &amp; Pricing
            </h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>
              10% off your first visit · Online booking available via Booksy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: BORDER }}>
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="bs-svc relative p-8 h-full transition-all duration-300"
                style={{ background: BG1, borderLeft: "2px solid transparent" }}
              >
                {s.popular && (
                  <span
                    className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase px-2 py-0.5"
                    style={{ color: "#0A0A0A", background: ACCENT, fontWeight: 700 }}
                  >
                    Most Popular
                  </span>
                )}
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT, letterSpacing: "0.04em" }}
                >
                  {s.price}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{s.name}</h3>
                <p className="text-xs mb-3" style={{ color: T3 }}>
                  {s.dur}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 transition-colors hover:opacity-70"
              style={{ color: ACCENT }}
            >
              View All Services &amp; Book Online
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>
              The Craftsmen
            </p>
            <h2
              className="leading-none text-white"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(3rem,8vw,6rem)",
                letterSpacing: "0.04em",
              }}
            >
              Meet the Barbers
            </h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>
              Skilled hands. Sharp eyes. Zero compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="bs-tc relative overflow-hidden border transition-colors duration-300"
                style={{ background: BG3, borderColor: BORDER }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    className="bs-tp object-cover w-full h-full"
                    style={{ objectPosition: "top" }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: ACCENT }}>
                    {m.role}
                  </p>
                  <h3 className="text-white text-xl font-semibold mb-1">{m.name}</h3>
                  <p className="text-sm mb-2" style={{ color: T2 }}>
                    {m.spec}
                  </p>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: T3 }}>
                    {m.bio}
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all hover:opacity-80"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-4 py-24" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-white text-2xl font-bold">{RATING}</span>
                  <span style={{ color: ACCENT }}>★★★★★</span>
                </div>
                <p className="text-[10px] tracking-widest uppercase" style={{ color: T3 }}>
                  {REVIEW_COUNT} Google Reviews
                </p>
              </div>
            </div>
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>
              What Tampa Says
            </p>
            <h2
              className="leading-none text-white"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(2.5rem,6vw,5rem)",
                letterSpacing: "0.04em",
              }}
            >
              5.0 Stars · 588 Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: BORDER }}>
            {REVIEWS.map((r, idx) => (
              <div key={idx} className="p-7" style={{ background: BG1 }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: ACCENT }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: T2 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-white text-sm font-medium">{r.name}</p>
                <p className="text-xs mt-0.5" style={{ color: T3 }}>
                  {r.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>
              The Work
            </p>
            <h2
              className="leading-none text-white"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(3rem,8vw,6rem)",
                letterSpacing: "0.04em",
              }}
            >
              Fresh From The Chair
            </h2>
            <p className="mt-4 text-sm" style={{ color: T2 }}>
              Every cut tells a story. This is our portfolio.
            </p>
          </div>

          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className="bs-gi relative overflow-hidden break-inside-avoid cursor-pointer"
                style={{ aspectRatio: "1/1", background: BG3 }}
              >
                <img
                  src={src}
                  alt={`Kingly Cutz cut ${i + 1}`}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: i < 2 ? "center" : "top" }}
                />
                <div
                  className="bs-go absolute inset-0 flex items-center justify-center"
                  style={{ background: `${ACCENT}CC` }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#0A0A0A" }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ color: ACCENT }}
            >
              Follow {IG_HANDLE} on Instagram
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── TWO-LOCATION VISIT SECTION — #1 AUDIT FIX ───────────── */}
      <section id="visit" className="px-4 py-24" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>
              Find Us
            </p>
            <h2
              className="leading-none text-white"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(3rem,8vw,6rem)",
                letterSpacing: "0.04em",
              }}
            >
              Two Tampa Locations
            </h2>
            <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: T2 }}>
              Serving North Tampa and the Armenia Ave corridor. Both locations running at 5.0 stars — same King's standard, your closest shop.
            </p>
          </div>

          {/* Location cards — side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: BORDER }}>

            {/* LOCATION 1: BUSCH BLVD */}
            <div className="loc-card p-8 lg:p-12" style={{ background: BG2 }}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] tracking-[0.2em] uppercase px-3 py-1 border font-semibold"
                  style={{ color: ACCENT, borderColor: ACCENT }}
                >
                  Busch Blvd
                </span>
              </div>
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.8rem", letterSpacing: "0.04em" }}
              >
                1041 W Busch Blvd
              </h3>
              <p className="text-sm mb-8" style={{ color: T2 }}>
                Tampa, FL 33612
              </p>

              <div className="mb-6">
                <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: T3 }}>
                  Hours
                </p>
                <div>
                  {HOURS_BUSCH.map((h) => (
                    <div key={h.day} className="hours-row">
                      <span className="text-sm" style={{ color: T2 }}>
                        {h.day}
                      </span>
                      <span className="text-sm" style={{ color: h.closed ? T3 : "#fff" }}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-2" style={{ color: T3 }}>
                  Phone
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: ACCENT }}
                >
                  {PHONE}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
                  style={{ background: ACCENT, color: "#0A0A0A" }}
                >
                  Book Here
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1041+W+Busch+Blvd+Tampa+FL+33612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 border transition-all hover:opacity-80"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* LOCATION 2: ARMENIA AVE */}
            <div className="loc-card p-8 lg:p-12" style={{ background: BG2 }}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] tracking-[0.2em] uppercase px-3 py-1 border font-semibold"
                  style={{ color: ACCENT, borderColor: ACCENT }}
                >
                  Armenia Ave · Flagship
                </span>
              </div>
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.8rem", letterSpacing: "0.04em" }}
              >
                3208 N Armenia Ave
              </h3>
              <p className="text-sm mb-8" style={{ color: T2 }}>
                Tampa, FL 33607
              </p>

              <div className="mb-6">
                <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: T3 }}>
                  Hours
                </p>
                <div>
                  {HOURS_ARMENIA.map((h) => (
                    <div key={h.day} className="hours-row">
                      <span className="text-sm" style={{ color: T2 }}>
                        {h.day}
                      </span>
                      <span className="text-sm" style={{ color: h.closed ? T3 : "#fff" }}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-2" style={{ color: T3 }}>
                  Phone
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: ACCENT }}
                >
                  {PHONE}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL_ARMENIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
                  style={{ background: ACCENT, color: "#0A0A0A" }}
                >
                  Book Here
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=3208+N+Armenia+Ave+Tampa+FL+33607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 border transition-all hover:opacity-80"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Location photo strip */}
          <div className="relative mt-px overflow-hidden" style={{ height: 280 }}>
            <img
              src={LOCATION_PHOTO}
              alt="Kingly Cutz barbershop interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.45)" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                className="text-white text-center"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(1.5rem,4vw,3rem)", letterSpacing: "0.08em" }}
              >
                One Standard. Two Locations. Zero Compromises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: BG2, padding: "8rem 1rem", borderTop: `1px solid ${BORDER}` }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right,transparent,${ACCENT},transparent)`, opacity: 0.5 }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right,transparent,${ACCENT},transparent)`, opacity: 0.5 }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
          aria-hidden
        >
          <span
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "18vw",
              color: `${ACCENT}07`,
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
          >
            KING
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
            Ready When You Are
          </p>
          <h2
            className="bs-shimmer leading-none mb-6"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(3rem,10vw,7rem)",
              letterSpacing: "0.04em",
            }}
          >
            {CTA_HEADLINE}
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: T2 }}>
            {CTA_BODY}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold tracking-[0.25em] uppercase px-10 py-5 transition-opacity hover:opacity-90"
              style={{ background: ACCENT, color: "#0A0A0A", boxShadow: `0 4px 40px ${ACCENT}44` }}
            >
              Book Online — Busch Blvd
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="border text-sm font-bold tracking-[0.25em] uppercase px-10 py-5 transition-all hover:opacity-80"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: BG1, borderTop: `2px solid ${ACCENT}55` }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <span
                className="text-white text-3xl tracking-widest block"
                style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 1 }}
              >
                {NAME}
              </span>
              <span
                className="block text-[9px] tracking-[0.3em] uppercase mb-4"
                style={{ color: ACCENT }}
              >
                Barbershop · Tampa FL
              </span>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: T2 }}>
                Where Kings Get Their Crowns. Two locations. One standard of excellence.
              </p>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
                style={{ color: T2 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                {IG_HANDLE}
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  ["#services", "Services & Pricing"],
                  ["#team", "Meet the Barbers"],
                  ["#gallery", "Gallery"],
                  ["#visit", "Two Locations"],
                  [BOOKING_URL, "Book Now"],
                ].map(([href, label]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: T2 }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Busch Blvd */}
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
                Busch Blvd Location
              </h3>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>
                  {ADDRESS_LINE1}
                  <br />
                  {ADDRESS_LINE2}
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="block text-sm hover:text-white transition-colors"
                  style={{ color: T2 }}
                >
                  {PHONE}
                </a>
                <div className="pt-2 space-y-1.5">
                  {HOURS_BUSCH.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-xs"
                      style={{ color: h.closed ? T3 : T2 }}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Armenia Ave */}
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
                Armenia Ave · Flagship
              </h3>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>
                  3208 N Armenia Ave
                  <br />
                  Tampa, FL 33607
                </p>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="block text-sm hover:text-white transition-colors"
                  style={{ color: T2 }}
                >
                  {PHONE}
                </a>
                <div className="pt-2 space-y-1.5">
                  {HOURS_ARMENIA.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-xs"
                      style={{ color: h.closed ? T3 : T2 }}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderColor: BORDER }}
          >
            <p className="text-xs" style={{ color: T3 }}>
              &copy; 2026 {NAME}. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: T3 }}>
              Concept by{" "}
              <a
                href="https://thryveops.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: ACCENT }}
              >
                Thryve Operations
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
