export const metadata = {
  title: "Cigar City Barbershop — Tampa's Speakeasy Barbers on N Florida Ave",
  description:
    "Cigar City Barbershop delivers precision fades, hot towel shaves, and traditional craft on N Florida Ave in Tampa, FL. Book Nicky, Rosa, or Joseph on Squire.",
};

// ─── Brand constants ──────────────────────────────────────────────────────────
const NAME         = "CIGAR CITY BARBERSHOP";
const NAME_SHORT   = "CIGAR CITY";
const TAGLINE      = "Tampa's speakeasy barbers. Traditional craft, modern atmosphere, N Florida Ave.";
const CITY         = "Tampa, FL";
const PHONE        = "(813) 867-8310";
const PHONE_RAW    = "8138678310";
const BOOKING_URL  = "https://getsquire.com/booking/book/cigar-city-barbershop-tampa";
const IG_HANDLE    = "@cigarcitybarbershop";
const IG_URL       = "https://www.instagram.com/cigarcitybarbershop/";
const RATING       = "4.8";
const REVIEW_COUNT = "252";
const EST          = "Est. Seminole Heights · Tampa's Speakeasy Barbers";

// Gold tobacco accent — dark text (#0A0A0A) on gold backgrounds (gold exception rule)
const ACCENT       = "#C9A84C";
const ACCENT_LIGHT = "#E2C07E";

// Dark luxury palette — leave as-is
const BG1   = "#0A0A0A";
const BG2   = "#111111";
const BG3   = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2    = "#A09080";
const T3    = "#605850";

// ─── Content ─────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    name: "Haircut",
    price: "$38",
    dur: "35 min",
    desc: "Classic cut tailored to your hair type and face shape. Consultation, cut, and finish — done right the first time.",
    popular: false,
    badge: "",
  },
  {
    name: "Haircut + Beard Trim",
    price: "$53",
    dur: "60 min",
    desc: "The full grooming package. Precise haircut followed by a sculpted beard trim — the complete look, start to finish.",
    popular: true,
    badge: "Popular",
  },
  {
    name: "Hot Towel Shave Combo",
    price: "$60",
    dur: "60 min",
    desc: "Haircut paired with a traditional straight razor shave and hot towel treatment. The closest shave you've ever had.",
    popular: false,
    badge: "",
  },
  {
    name: "Beard Trim or Full Shave",
    price: "$30",
    dur: "30 min",
    desc: "Standalone beard sculpting or a clean straight razor shave. Shape, line, and finish — no cut required.",
    popular: false,
    badge: "",
  },
  {
    name: "Line Up with Beard",
    price: "$38",
    dur: "30–40 min",
    desc: "Precision edge work on the hairline plus a shaped beard trim. Clean lines, sharp detail.",
    popular: false,
    badge: "",
  },
  {
    name: "Self Care Session — The Works",
    price: "$100",
    dur: "1 hr 20 min",
    desc: "The complete Cigar City experience. Haircut + beard + hot towel shave + the full ritual. Reserve time for yourself — no rush, no shortcuts.",
    popular: false,
    badge: "Signature",
  },
];

const TEAM = [
  {
    name: "Nicky",
    role: "Master Barber · Owner",
    spec: "Fades · Hot towel shaves · Beard sculpting",
    rating: "5.0 ★ · 180 reviews",
    bio: "Nicky is the reason regulars drive across town. Attentive, meticulous, and precise every single time — his 180 perfect-score reviews on Squire say it better than we can.",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  },
  {
    name: "Rosa",
    role: "Barber · Bilingual",
    spec: "Tapers · Pompadours · Bilingual service (EN/ES)",
    rating: "4.7 ★",
    bio: "Skilled across classic cuts and modern styles. Rosa brings the same Cigar City attention to detail to every chair — and serves Tampa's bilingual community fluently in Spanish.",
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80",
  },
  {
    name: "Joseph R.",
    role: "Barber",
    spec: "Military cuts · Comb overs · Gentlemen's classics",
    rating: "5.0 ★",
    bio: "Built his reputation on clean lines and taking his time. Joseph understands that a great haircut isn't rushed — and his clients notice the difference every visit.",
    img: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=600&q=80",
  },
];

const REVIEWS = [
  {
    text: "Nicky was amazing and very meticulous getting my beard exactly the way I like it. I've tried multiple barbers since relocating to Tampa — this is the one.",
    name: "Google Reviewer",
    sub: "February 2025 · Verified Local",
  },
  {
    text: "Fantastic shop and barbers. Best cut in Tampa at a fair price — and I've been going to barbershops in this city for fifteen years.",
    name: "Google Reviewer",
    sub: "Verified Local",
  },
  {
    text: "Old school hot towel shave and trim — absolutely great. Nicky really takes his time and the atmosphere feels like a proper barbershop is supposed to.",
    name: "Google Reviewer",
    sub: "Hot Towel Shave Combo",
  },
  {
    text: "Walked in not knowing what to expect and left looking sharper than I have in years. Rosa handled my cut perfectly and was super easy to talk to. Will be back.",
    name: "Google Reviewer",
    sub: "First Visit · Haircut",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80",
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=700&q=80",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=700&q=80",
];

const HOURS = [
  { day: "Monday",    time: "Closed",              closed: true  },
  { day: "Tue – Fri", time: "11:00 AM – 7:00 PM",  closed: false },
  { day: "Saturday",  time: "11:00 AM – 5:00 PM",  closed: false },
  { day: "Sunday",    time: "10:00 AM – 5:00 PM",  closed: false },
];

const PILLARS = [
  {
    eyebrow: "Traditional Craft",
    title: "Old School. No Shortcuts.",
    desc: "Straight razor shaves, hot towel rituals, and precision fades the way they're supposed to be done — unhurried, by someone who takes pride in every cut.",
  },
  {
    eyebrow: "Tampa Story",
    title: "Born Here. Built Here.",
    desc: "Started in an office, moved to the back of a bar, grew into a 1,100 sq ft flagship on N Florida Ave — one neighborhood at a time, like Tampa does.",
  },
  {
    eyebrow: "Bilingual Service",
    title: "English & Spanish.",
    desc: "Tampa is a bilingual city. We serve it like one — same precision, same conversation, whatever language you're most comfortable in.",
  },
];

// ─── Address ──────────────────────────────────────────────────────────────────
const ADDRESS_LINE1 = "4626 N Florida Ave";
const ADDRESS_LINE2 = "Tampa, FL 33603";
const MAPS_QUERY    = "Cigar City Barbershop 4626 N Florida Ave Tampa FL";

// ─── Photos ───────────────────────────────────────────────────────────────────
const HERO_PHOTO     = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80";
const STORY_PHOTO    = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80";
const LOCATION_PHOTO = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80";

// ─── Stats bar ────────────────────────────────────────────────────────────────
const STAT1_VAL   = "4.8 ★";
const STAT1_LABEL = "252 Google Reviews";
const STAT2_VAL   = "Top 1%";
const STAT2_LABEL = "2024 Quality Business Award";
const STAT3_VAL   = "1,100 ft²";
const STAT3_LABEL = "Flagship · N Florida Ave";

// ─── CTA ─────────────────────────────────────────────────────────────────────
const CTA_HEADLINE = "The Best Cut In The Room. Every Time.";
const CTA_BODY     = "Book online or walk in Tuesday through Sunday. Same-day appointments available when the chair's open.";

// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div style={{ background: BG1, color: "#fff", fontFamily: "var(--font-inter)" }}>
      <style>{`
        @keyframes bs-shimmer { from { background-position: -200% center; } to { background-position: 200% center; } }
        .bs-shimmer {
          background: linear-gradient(90deg, ${ACCENT}, ${ACCENT_LIGHT}, #fff8e8, ${ACCENT_LIGHT}, ${ACCENT});
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: bs-shimmer 5s linear infinite;
        }
        .bs-svc { border-left: 2px solid transparent; transition: background 0.25s, border-left-color 0.25s; }
        .bs-svc:hover { background-color: ${BG2}; border-left-color: ${ACCENT} !important; }
        .bs-tc { border: 1px solid ${BORDER}; transition: border-color 0.3s; }
        .bs-tc:hover { border-color: ${ACCENT} !important; }
        .bs-tp { filter: grayscale(100%); transition: filter 0.5s, transform 0.5s; }
        .bs-tc:hover .bs-tp { filter: grayscale(0); transform: scale(1.04); }
        .bs-go { opacity: 0; transition: opacity 0.3s; }
        .bs-gi:hover .bs-go { opacity: 1; }
        .bs-gi img { transition: transform 0.5s; }
        .bs-gi:hover img { transform: scale(1.08); }
        .accent-line { height: 1px; background: linear-gradient(90deg, transparent, ${ACCENT}, transparent); }
        @keyframes bounce-slow { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
        .bounce-slow { animation: bounce-slow 2.5s ease-in-out infinite; }
      `}</style>

      {/* FLOATING BOOK BUTTON */}
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 shadow-2xl transition-opacity hover:opacity-90"
        style={{ background: ACCENT, color: "#0A0A0A" }}>
        Book Now
      </a>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40"
        style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: 68 }}>
          <a href="#" style={{ textDecoration: "none", lineHeight: 1 }}>
            <span className="bs-shimmer text-2xl tracking-widest block"
              style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 1 }}>
              Cigar City
            </span>
            <span className="block text-[9px] tracking-[0.3em] uppercase -mt-0.5" style={{ color: T3 }}>
              Barbershop · Tampa, FL
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {(["#services","#team","#story","#visit"] as const).map((href, i) => (
              <a key={href} href={href}
                className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-white"
                style={{ color: T2 }}>
                {["Services","Team","Story","Visit"][i]}
              </a>
            ))}
          </nav>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-[0.2em] uppercase px-5 py-2.5 transition-opacity hover:opacity-90"
            style={{ background: ACCENT, color: "#0A0A0A" }}>
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full flex items-end overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <img src={HERO_PHOTO} alt="Cigar City Barbershop interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,8,4,0.3) 0%, rgba(10,8,4,0.5) 40%, rgba(10,8,4,0.94) 100%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6" style={{ paddingBottom: 0 }}>
          <div style={{ paddingBottom: "5rem" }}>
            <p className="text-[11px] tracking-[0.4em] uppercase font-medium mb-5" style={{ color: ACCENT }}>
              N Florida Ave · Tampa, Florida
            </p>
            <h1 className="bs-shimmer leading-none"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3.5rem,10vw,8rem)", letterSpacing: "0.02em" }}>
              Cigar City<br />Barbershop
            </h1>
            <p className="mt-5 text-base max-w-md leading-relaxed" style={{ color: T2 }}>
              {TAGLINE}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="font-bold text-sm tracking-[0.1em] uppercase px-8 py-4 transition-opacity hover:opacity-90"
                style={{ background: ACCENT, color: "#0A0A0A" }}>
                Book an Appointment
              </a>
              <a href={`tel:${PHONE_RAW}`}
                className="border text-white text-sm font-medium tracking-[0.1em] uppercase px-8 py-4 transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,.35)" }}>
                Call {PHONE}
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3"
            style={{ background: "rgba(201,168,76,0.15)", borderTop: `1px solid rgba(201,168,76,0.3)`, marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
            {[
              [STAT1_VAL, STAT1_LABEL],
              [STAT2_VAL, STAT2_LABEL],
              [STAT3_VAL, STAT3_LABEL],
            ].map(([val, label], i) => (
              <div key={val} className="text-center py-5 px-4"
                style={{ background: "rgba(10,10,10,0.6)", borderRight: i < 2 ? `1px solid rgba(201,168,76,0.2)` : undefined }}>
                <p style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.75rem", color: ACCENT, letterSpacing: "0.05em", lineHeight: 1 }}>
                  {val}
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase mt-1" style={{ color: T3 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="bounce-slow absolute z-10" style={{ bottom: "1.5rem", left: "50%" }}>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect x="1" y="1" width="18" height="26" rx="9" stroke={`${ACCENT}66`} strokeWidth="1.5"/>
            <rect x="9" y="6" width="2" height="6" rx="1" fill={ACCENT}/>
          </svg>
        </div>
      </section>

      {/* VALUE PROP */}
      <section style={{ background: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 1, background: BORDER }}>
          {PILLARS.map((p) => (
            <div key={p.title} className="px-8 py-12" style={{ background: BG2 }}>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>{p.eyebrow}</p>
              <h3 style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.75rem", color: "#fff", letterSpacing: "0.03em", marginBottom: "0.75rem" }}>
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed" style={{ color: T2 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-4 py-24" style={{ background: BG1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.35em] uppercase font-medium mb-3" style={{ color: ACCENT }}>What We Offer</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,4rem)", letterSpacing: "0.04em" }}>
              Services &amp; Pricing
            </h2>
            <div className="accent-line mt-5" style={{ width: "4rem" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: BORDER }}>
            {SERVICES.map((s) => (
              <div key={s.name} className="bs-svc relative p-7 transition-all duration-300"
                style={{ background: BG1 }}>
                {s.badge && (
                  <span className="absolute top-3 right-4 text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 font-bold"
                    style={{
                      background: s.popular ? ACCENT : "rgba(201,168,76,0.12)",
                      color: s.popular ? "#0A0A0A" : ACCENT,
                      border: s.popular ? "none" : `1px solid rgba(201,168,76,0.4)`,
                    }}>
                    {s.badge}
                  </span>
                )}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-[17px] mb-1">{s.name}</h3>
                    <p className="text-xs" style={{ color: T3 }}>{s.dur}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.75rem", color: ACCENT, letterSpacing: "0.05em", flexShrink: 0 }}>
                    {s.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: T2 }}>{s.desc}</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-[0.1em] uppercase font-semibold transition-opacity hover:opacity-70"
                  style={{ color: ACCENT }}>
                  Book →
                </a>
              </div>
            ))}
          </div>

          {/* Additional services note */}
          <div className="mt-px flex flex-wrap items-center justify-between gap-4 px-6 py-5 border-t"
            style={{ background: BG3, borderColor: BORDER }}>
            <p className="text-sm" style={{ color: T2 }}>
              Also: <span className="text-white">Seniors / Kids $30</span> · <span className="text-white">&ldquo;It&apos;s Been a While&rdquo; Cut $45</span> · Walk-ins welcome when available
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ background: ACCENT, color: "#0A0A0A" }}>
              View All &amp; Book
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.35em] uppercase font-medium mb-3" style={{ color: ACCENT }}>The Barbers</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,4rem)", letterSpacing: "0.04em" }}>
              Your Cut, Your Barber
            </h2>
            <div className="accent-line mt-5" style={{ width: "4rem" }} />
            <p className="mt-5 text-[15px] max-w-lg leading-relaxed" style={{ color: T2 }}>
              Clients book a person, not a shop. Every barber at Cigar City has a specialty — find yours and book direct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: BORDER }}>
            {TEAM.map((m) => (
              <div key={m.name} className="bs-tc overflow-hidden" style={{ background: BG1 }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img src={m.img} alt={`${m.name} — Cigar City Barbershop`}
                    className="bs-tp object-cover w-full h-full" />
                  <div className="bs-go absolute inset-0 flex items-end p-5"
                    style={{ background: "rgba(201,168,76,0.15)" }}>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                      className="block w-full text-center text-xs font-bold tracking-[0.15em] uppercase py-3 transition-opacity hover:opacity-90"
                      style={{ background: ACCENT, color: "#0A0A0A" }}>
                      Book {m.name}
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.625rem", color: "#fff", letterSpacing: "0.04em" }}>
                      {m.name}
                    </h3>
                    <span className="text-xs font-semibold" style={{ color: ACCENT }}>{m.rating}</span>
                  </div>
                  <p className="text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: T3 }}>{m.role}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: T2 }}>{m.bio}</p>
                  <p className="text-xs mb-5" style={{ color: T3 }}>{m.spec}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-block border text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all hover:opacity-80"
                    style={{ borderColor: ACCENT, color: ACCENT }}>
                    Book {m.name}
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
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase font-medium mb-3" style={{ color: ACCENT }}>What Tampa Says</p>
              <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,4rem)", letterSpacing: "0.04em" }}>
                4.8 Stars. 252 Reviews.
              </h2>
              <div className="accent-line mt-5" style={{ width: "4rem" }} />
            </div>
            <div className="flex items-center gap-3 pb-1">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm" style={{ color: T2 }}>Verified Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: BORDER }}>
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8" style={{ background: BG1 }}>
                <p className="text-base mb-4 tracking-[0.05em]" style={{ color: ACCENT }}>★★★★★</p>
                <p className="text-[15px] leading-relaxed mb-5 italic" style={{ color: "#F5F0E8" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-xs" style={{ color: T3 }}>— {r.name} · {r.sub}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={`https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}>
              Read All {REVIEW_COUNT} Reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* STORY / ABOUT — speakeasy origin narrative */}
      <section id="story" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo side */}
          <div className="relative">
            <img src={STORY_PHOTO} alt="Barber at work — traditional craft"
              className="w-full object-cover block" style={{ aspectRatio: "4/5" }} />
            {/* Gold corner accents */}
            <div className="absolute pointer-events-none"
              style={{ bottom: "-1rem", right: "-1rem", width: "5rem", height: "5rem", borderRight: `2px solid ${ACCENT}`, borderBottom: `2px solid ${ACCENT}` }} />
            <div className="absolute pointer-events-none"
              style={{ top: "-1rem", left: "-1rem", width: "5rem", height: "5rem", borderLeft: `2px solid ${ACCENT}`, borderTop: `2px solid ${ACCENT}` }} />
          </div>

          {/* Text side */}
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase font-medium mb-3" style={{ color: ACCENT }}>The Tampa Story</p>
            <h2 className="leading-none mb-8"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.25rem,5vw,3.5rem)", letterSpacing: "0.04em" }}>
              From a Bar&apos;s<br />Back Room<br />to N Florida Ave
            </h2>
            <div className="accent-line mb-8" style={{ width: "4rem" }} />
            <p className="text-base leading-relaxed mb-5" style={{ color: T2 }}>
              Cigar City Barbershop didn&apos;t start with a grand opening. It started in an office, then moved to the back room of a bar — which is how Tampa&apos;s best things tend to start. Hidden enough to feel exclusive. Good enough that people found it anyway.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: T2 }}>
              It grew into its own 1,100 sq ft storefront on N Florida Ave, in a corridor that&apos;s becoming one of Tampa&apos;s most interesting streets. We&apos;re bilingual, traditional in our craft, and particular about the work. &ldquo;Cigar City&rdquo; isn&apos;t just a name — it&apos;s a stance.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: T2 }}>
              Walk-ins welcome. Appointments respected. The bar is still part of the spirit.
            </p>
            {/* Address callout — correct address prominently displayed */}
            <div className="p-5 border-l-2" style={{ background: BG3, borderLeftColor: ACCENT }}>
              <p className="text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: ACCENT }}>Our Location</p>
              <p className="text-white text-lg font-semibold">4626 N Florida Ave</p>
              <p className="text-sm mt-0.5" style={{ color: T2 }}>Tampa, FL 33603 · Seminole Heights</p>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
                style={{ color: ACCENT }}>
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-4 py-24" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase font-medium mb-3" style={{ color: ACCENT }}>The Work</p>
              <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,4rem)", letterSpacing: "0.04em" }}>
                Fresh From The Chair
              </h2>
            </div>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase font-semibold transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}>
              {IG_HANDLE} →
            </a>
          </div>

          <div className="columns-2 md:columns-3 gap-px" style={{ columnGap: "1px" }}>
            {GALLERY.map((src, i) => (
              <div key={i} className="bs-gi relative overflow-hidden cursor-pointer mb-px break-inside-avoid"
                style={{ background: BG3 }}>
                <img src={src} alt={`Cigar City Barbershop cut ${i + 1}`}
                  className="object-cover w-full block" style={{ aspectRatio: "1/1" }} />
                <div className="bs-go absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.3)" }}>
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}>
              Follow {IG_HANDLE} on Instagram
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section id="visit" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.35em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,4rem)", letterSpacing: "0.04em" }}>
              N Florida Ave, Tampa
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border" style={{ borderColor: BORDER }}>
            {/* Location photo */}
            <div className="relative min-h-[400px]">
              <img src={LOCATION_PHOTO} alt="Cigar City Barbershop storefront"
                className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.35)" }} />
              <div className="absolute bottom-6 left-6 px-5 py-4 border-l-2"
                style={{ background: "rgba(10,10,10,0.85)", borderLeftColor: ACCENT }}>
                <p style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.25rem", color: "#fff", letterSpacing: "0.05em" }}>
                  N Florida Ave Corridor
                </p>
                <p className="text-xs mt-1" style={{ color: T3 }}>Seminole Heights · Tampa, FL</p>
              </div>
            </div>

            {/* Info panel */}
            <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l" style={{ background: BG2, borderColor: BORDER }}>
              {/* Address — correct, prominent */}
              <div className="mb-8">
                <p className="text-[11px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Address</p>
                <p className="text-white text-lg leading-relaxed font-semibold">
                  {ADDRESS_LINE1}<br />{ADDRESS_LINE2}
                </p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
                  style={{ color: ACCENT }}>
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <p className="text-[11px] tracking-[0.25em] uppercase font-medium mb-4" style={{ color: ACCENT }}>Hours</p>
                <div className="space-y-2 max-w-xs">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: T2 }}>{h.day}</span>
                      <span className="text-sm" style={{ color: h.closed ? T3 : "#fff" }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Phone</p>
                <a href={`tel:${PHONE_RAW}`}
                  className="block text-lg font-medium hover:text-white transition-colors mb-6"
                  style={{ color: T2 }}>
                  {PHONE}
                </a>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-opacity hover:opacity-90"
                  style={{ background: ACCENT, color: "#0A0A0A" }}>
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden text-center"
        style={{ background: BG2, padding: "8rem 1rem", borderTop: `1px solid ${BORDER}` }}>
        <div className="accent-line absolute top-0 left-0 right-0" />
        <div className="accent-line absolute bottom-0 left-0 right-0" />
        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none" aria-hidden>
          <span style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(5rem,15vw,14rem)", color: "rgba(201,168,76,0.04)", whiteSpace: "nowrap", letterSpacing: "-0.02em" }}>
            CIGAR CITY
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-[11px] tracking-[0.4em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
            Tampa&apos;s Speakeasy Barbers
          </p>
          <h2 className="leading-none text-white mb-6"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>
            The Best Cut<br />In The Room.<br />
            <span className="bs-shimmer">Every Time.</span>
          </h2>
          <p className="text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed" style={{ color: T2 }}>
            {CTA_BODY}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="text-sm font-bold tracking-[0.15em] uppercase px-12 py-5 transition-opacity hover:opacity-90"
              style={{ background: ACCENT, color: "#0A0A0A", boxShadow: `0 4px 40px ${ACCENT}44` }}>
              Book an Appointment
            </a>
            <a href={`tel:${PHONE_RAW}`}
              className="border text-white text-sm font-medium tracking-[0.1em] uppercase px-12 py-5 transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,.35)" }}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#050505", borderTop: `2px solid ${ACCENT}55` }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="bs-shimmer text-3xl tracking-widest block"
                style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 1 }}>
                Cigar City
              </span>
              <span className="block text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: T3 }}>
                Barbershop · Tampa, FL
              </span>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: T3 }}>
                Exclusive barbershop with traditional services and modern atmosphere. N Florida Ave&apos;s speakeasy barbers — serving Tampa one precise cut at a time.
              </p>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.15em] uppercase transition-opacity hover:opacity-80"
                style={{ color: T2 }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                {IG_HANDLE}
              </a>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Quick Links</h3>
              <ul className="space-y-3">
                {[
                  ["#services", "Services & Pricing"],
                  ["#team",     "The Barbers"],
                  ["#story",    "Our Story"],
                  ["#visit",    "Visit Us"],
                  [BOOKING_URL, "Book an Appointment"],
                ].map(([href, label]) => (
                  <li key={label}>
                    <a href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: href.startsWith("http") && href !== "#" ? ACCENT : T2 }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Find Us</h3>
              <div className="space-y-4">
                {/* Address prominently shown */}
                <div>
                  <p className="text-white font-semibold">{ADDRESS_LINE1}</p>
                  <p className="text-sm mt-0.5" style={{ color: T2 }}>{ADDRESS_LINE2}</p>
                </div>
                <a href={`tel:${PHONE_RAW}`}
                  className="block text-sm hover:text-white transition-colors"
                  style={{ color: T2 }}>
                  {PHONE}
                </a>
                <div className="pt-2 space-y-1.5">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-xs"
                      style={{ color: h.closed ? T3 : T2 }}>
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderColor: BORDER }}>
            <p className="text-xs" style={{ color: T3 }}>&copy; 2026 Cigar City Barbershop. All rights reserved.</p>
            <p className="text-xs" style={{ color: T3 }}>
              Concept by <span style={{ color: ACCENT }}>Thryve Operations</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
