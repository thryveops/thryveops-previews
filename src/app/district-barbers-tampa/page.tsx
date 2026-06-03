export const metadata = {
  title: "District Barbers of Tampa — Hyde Park's Premier Barbershop",
  description:
    "South Tampa's upscale veteran-owned barbershop in the heart of Hyde Park. Precision fades, tapers, hot towel shaves, and beard work. 5.0 ★ on Google. Book on Booksy.",
};

// ─── Brand constants ──────────────────────────────────────────────────────────
const NAME         = "DISTRICT BARBERS";
const TAGLINE      = "South Tampa's upscale barbershop — where precision craft meets a laid-back Hyde Park vibe.";
const CITY         = "Tampa, FL";
const PHONE        = "(813) 251-9010";
const PHONE_RAW    = "8132519010";
const BOOKING_URL  = "https://booksy.com/en-us/819248_district-barbers-of-tampa_barber-shop_15761_tampa";
const IG_HANDLE    = "@districtbarbers.tampa";
const IG_URL       = "https://www.instagram.com/districtbarbers.tampa/";
const RATING       = "5.0";
const REVIEW_COUNT = "249";
const EST          = "Veteran Owned · 10+ Years · Hyde Park";

// Gold accent — upscale Hyde Park positioning. Dark text on gold backgrounds.
const ACCENT       = "#C9A96E";
const ACCENT_LIGHT = "#E2C07E";

const BG1   = "#0A0A0A";
const BG2   = "#111111";
const BG3   = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2    = "#A0A0A0";
const T3    = "#606060";

// ─── Services — 7 real services from Booksy ──────────────────────────────────
const SERVICES = [
  { name: "Haircut",            price: "$40",  dur: "35 min", desc: "Precision cut tailored to your style — fades, tapers, classic, modern. Every line dialed in before you leave the chair.", popular: false },
  { name: "Haircut & Beard",    price: "$50",  dur: "30 min", desc: "Full cut plus precision beard shaping and edge-up. The complete refresh — one appointment, head-to-toe sharp.", popular: true  },
  { name: "Hot Towel Shave",    price: "$40",  dur: "45 min", desc: "Traditional straight razor shave with hot towel prep and post-shave treatment. The District experience, start to finish.", popular: false },
  { name: "Beard Trim & Edge",  price: "$20",  dur: "30 min", desc: "Shape, trim, and edge-up your beard for a clean, defined look. Perfect between cuts or as a standalone service.", popular: false },
  { name: "Edge Up",            price: "$20",  dur: "20 min", desc: "Hairline, sideburns, and neckline cleaned up. The quickest way to look put-together between full cuts.", popular: false },
  { name: "Kids Haircut",       price: "$30+", dur: "30 min", desc: "Patient, skilled cuts for the little ones. Child-friendly environment — we'll make sure they leave looking fresh.", popular: false },
  { name: "Senior Haircut",     price: "$30",  dur: "35 min", desc: "Respectful, quality cuts for guests 65 and up. Same precision craft, same attention — discounted rate.", popular: false },
];

// ─── Team ─────────────────────────────────────────────────────────────────────
const TEAM = [
  {
    name: "Sway",
    role: "Master Barber · Owner",
    spec: "Skin fades · Tapers · Precision edge-ups · 10+ yrs",
    bio: "U.S. veteran and Hyde Park native who brought military discipline into the chair. The creative force behind the #DistrictLook — 10+ years building client relationships one fade at a time.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "District Barbers",
    role: "Walk-Ins Welcome",
    spec: "Tue – Sat · Open 9 AM",
    bio: "No appointment? No problem. Walk in Tuesday through Saturday from 9am. Whether it's your first visit or your hundredth, we'll get you right — guaranteed.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
];

// ─── Reviews ─────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    text: "Sway is incredibly talented — best fade I've had in Tampa. He took his time, asked the right questions, and delivered exactly what I was picturing. Clean shop, great energy. I won't go anywhere else.",
    name: "Marcus T.",
    sub: "Hyde Park · Regular",
  },
  {
    text: "I've been going to District Barbers for two years. Walk-in friendly, never a long wait, and the hot towel shave is an experience. It's the kind of place where you actually look forward to getting a haircut.",
    name: "James R.",
    sub: "South Tampa · Hot Towel Shave",
  },
  {
    text: "Took my son here for the first time and he was nervous. The barber was so patient — explained what he was doing, made him feel comfortable. Best kids' haircut he's ever had. We're regulars now.",
    name: "Danielle M.",
    sub: "Tampa Bay · Kids Haircut",
  },
  {
    text: "As a veteran myself, I love supporting this shop. The precision is unmatched — skin fade is clean every single time. This is the #DistrictLook. You'll understand when you see it.",
    name: "Darnell K.",
    sub: "Tampa · Haircut & Beard",
  },
];

// ─── Gallery — 6 verified Unsplash barbershop photos ─────────────────────────
const GALLERY = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",  // barber at work
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80",  // skin fade
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=80",  // precision cut
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=80",  // tools/scissors
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&q=80",  // fade closeup
  "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=700&q=80",  // clean taper
];

// ─── Hours ────────────────────────────────────────────────────────────────────
const HOURS = [
  { day: "Monday",          time: "10:00 AM – 5:00 PM", closed: false },
  { day: "Tue – Sat",       time: "9:00 AM – 6:00 PM",  closed: false },
  { day: "Sunday",          time: "Closed",              closed: true  },
];

// ─── Value pillars ────────────────────────────────────────────────────────────
const PILLARS = [
  { title: "Precision Craft",    desc: "Fades, tapers, edge-ups, and beard sculpting done with surgical attention to detail — understanding what you want is 75% of the cut." },
  { title: "Veteran Owned",      desc: "Serving the Hyde Park community with the same discipline and precision that the military demands — every single chair, every single visit." },
  { title: "Walk-Ins Welcome",   desc: "Open Tue–Sat from 9am. Book ahead on Booksy or walk in — no appointment necessary, always a great cut." },
];

// ─── Address ──────────────────────────────────────────────────────────────────
const ADDRESS_LINE1 = "1947 W Cass St";
const ADDRESS_LINE2 = "Tampa, FL 33606";
const MAPS_QUERY    = "District Barbers of Tampa 1947 W Cass St Tampa FL";

// ─── Photos ───────────────────────────────────────────────────────────────────
const HERO_PHOTO     = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80";
const LOCATION_PHOTO = "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80";

// ─── Hero stats ───────────────────────────────────────────────────────────────
const STAT1_VAL   = "5.0 ★";
const STAT1_LABEL = "249 Google Reviews";
const STAT2_VAL   = "10+";
const STAT2_LABEL = "Years of Precision";
const STAT3_VAL   = "Hyde Park";
const STAT3_LABEL = "South Tampa";

// ─── Final CTA ────────────────────────────────────────────────────────────────
const CTA_HEADLINE = "Book Your Chair Today";
const CTA_BODY     = "Walk-ins welcome Tue–Sat from 9am. Book ahead on Booksy or call us at (813) 251-9010 — Hyde Park's most trusted barbers, with 249 five-star reviews to prove it.";

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
          animation: bs-shimmer 5s linear infinite;
        }
        .bs-svc:hover  { background-color: ${BG2}; border-left-color: ${ACCENT} !important; }
        .bs-tc:hover   { border-color: ${ACCENT} !important; }
        .bs-tp         { filter: grayscale(100%); transition: filter .5s, transform .5s; }
        .bs-tc:hover .bs-tp { filter: grayscale(0); transform: scale(1.04); }
        .bs-go         { opacity: 0; transition: opacity .3s; }
        .bs-gi:hover .bs-go { opacity: 1; }
        .bs-gi img     { transition: transform .5s; }
        .bs-gi:hover img { transform: scale(1.08); }
      `}</style>

      {/* FLOATING BOOK BUTTON */}
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 shadow-2xl transition-opacity hover:opacity-90"
        style={{ background: ACCENT, color: "#0A0A0A" }}>
        Book Now
      </a>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40" style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: 72 }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <span className="text-white text-2xl tracking-widest block" style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 1 }}>{NAME}</span>
            <span className="block text-[9px] tracking-[0.3em] uppercase -mt-0.5" style={{ color: ACCENT }}>OF TAMPA · VETERAN OWNED</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {(["#services","#team","#gallery","#visit"] as const).map((href, i) => (
              <a key={href} href={href} className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-white" style={{ color: T2 }}>
                {["Services","Our Barbers","Gallery","Visit"][i]}
              </a>
            ))}
          </nav>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
            style={{ background: ACCENT, color: "#0A0A0A" }}>
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <img src={HERO_PHOTO} alt="District Barbers of Tampa interior" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(10,10,10,.55) 0%,rgba(10,10,10,.4) 50%,rgba(10,10,10,.92) 100%)" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{ paddingTop: 100 }}>
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
            Hyde Park · W Cass St · Veteran Owned · Tampa, FL
          </p>
          <h1 className="bs-shimmer leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(4.5rem,16vw,11rem)", letterSpacing: "0.04em" }}>
            The District<br />Look
          </h1>
          <p className="mt-4 text-sm md:text-base tracking-widest uppercase" style={{ color: ACCENT }}>{EST}</p>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: T2 }}>{TAGLINE}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.25em] uppercase px-10 py-4 transition-opacity hover:opacity-90"
              style={{ background: ACCENT, color: "#0A0A0A" }}>
              Book Your Cut
            </a>
            <a href={`tel:${PHONE_RAW}`}
              className="border text-white text-xs font-medium tracking-[0.25em] uppercase px-10 py-4 transition-all hover:bg-white/10"
              style={{ borderColor: `${ACCENT}88` }}>
              Call {PHONE}
            </a>
          </div>
          <div className="mt-14 flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{STAT1_VAL}</div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>{STAT1_LABEL}</div>
            </div>
            <div style={{ width: 1, height: 32, background: BORDER }} />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{STAT2_VAL}</div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>{STAT2_LABEL}</div>
            </div>
            <div style={{ width: 1, height: 32, background: BORDER }} />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{STAT3_VAL}</div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>{STAT3_LABEL}</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12" style={{ background: `linear-gradient(to bottom,${ACCENT},transparent)` }} />
          <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: T3 }}>Scroll</p>
        </div>
      </section>

      {/* VALUE PROP */}
      <section style={{ background: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="flex flex-col items-center text-center px-8 py-12"
              style={{ borderRight: i < 2 ? `1px solid ${BORDER}` : undefined }}>
              <h3 className="text-white font-semibold text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.06em", fontSize: "1.25rem", color: ACCENT }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: T2 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-4 py-24" style={{ background: BG1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>Services &amp; Pricing</p>
            <h2 className="leading-none text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>What We Do</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>
              Real prices, transparent menu — straight from Booksy. Every service backed by 10+ years of precision training.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: BORDER }}>
            {SERVICES.map((s) => (
              <div key={s.name} className="bs-svc relative p-8 h-full transition-all duration-300"
                style={{ background: BG1, borderLeft: "2px solid transparent" }}>
                {s.popular && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase px-2 py-0.5"
                    style={{ background: ACCENT, color: "#0A0A0A", fontWeight: 700 }}>Popular</span>
                )}
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT, letterSpacing: "0.04em" }}>{s.price}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{s.name}</h3>
                <p className="text-xs mb-3" style={{ color: T3 }}>{s.dur}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: T2 }}>{s.desc}</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-block border text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all hover:opacity-80"
                  style={{ borderColor: ACCENT, color: ACCENT }}>
                  Book
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 transition-colors hover:opacity-70"
              style={{ color: ACCENT }}>
              View Full Menu &amp; Book Online
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>Our Barbers</p>
            <h2 className="leading-none text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Book Your Barber</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>Skilled hands. Sharp eyes. Zero compromises. Book with a specific barber or walk in — we'll take care of you either way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TEAM.map((m) => (
              <div key={m.name} className="bs-tc relative overflow-hidden border transition-colors duration-300"
                style={{ background: BG3, borderColor: BORDER }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img src={m.img} alt={m.name} className="bs-tp object-cover w-full h-full" />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: ACCENT }}>{m.role}</p>
                  <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.5rem", letterSpacing: "0.05em" }}>{m.name}</h3>
                  <p className="text-sm mb-2" style={{ color: T2 }}>{m.spec}</p>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: T3 }}>{m.bio}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-block border text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all hover:opacity-80"
                    style={{ borderColor: ACCENT, color: ACCENT }}>
                    {m.name === "Sway" ? "Book with Sway" : `Call ${PHONE}`}
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
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-white text-2xl font-bold">{RATING}</span>
                  <span style={{ color: ACCENT }}>★★★★★</span>
                </div>
                <p className="text-[10px] tracking-widest uppercase" style={{ color: T3 }}>{REVIEW_COUNT} Google Reviews · Hyde Park, Tampa</p>
              </div>
            </div>
            <h2 className="leading-none text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "0.04em" }}>What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: BORDER }}>
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-7" style={{ background: BG1 }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: ACCENT }}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: T2 }}>&ldquo;{r.text}&rdquo;</p>
                <p className="text-white text-sm font-medium">{r.name}</p>
                <p className="text-xs mt-0.5" style={{ color: T3 }}>{r.sub}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://www.google.com/maps/search/District+Barbers+of+Tampa"
              target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ color: ACCENT }}>
              Read All {REVIEW_COUNT} Reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>The Work</p>
            <h2 className="leading-none text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>#DistrictLook</h2>
            <p className="mt-4 text-sm" style={{ color: T2 }}>Every cut tells a story. This is our portfolio — what we do every day in Hyde Park.</p>
          </div>
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="bs-gi relative overflow-hidden break-inside-avoid cursor-pointer"
                style={{ background: BG3 }}>
                <img src={src} alt={`District Barbers cut ${i + 1}`} className="object-cover w-full h-full block" />
                <div className="bs-go absolute inset-0 flex items-center justify-center" style={{ background: `${ACCENT}CC` }}>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#0A0A0A" }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ color: ACCENT }}>
              Follow {IG_HANDLE} on Instagram
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section id="visit" className="px-4 py-24" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="leading-none text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Location &amp; Hours</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border" style={{ borderColor: BORDER }}>
            <div className="relative min-h-[400px]" style={{ background: BG3 }}>
              <img src={LOCATION_PHOTO} alt="District Barbers of Tampa interior" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.3)" }} />
            </div>
            <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l" style={{ background: BG2, borderColor: BORDER }}>
              <div className="mb-8">
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Address</p>
                <p className="text-white text-lg leading-relaxed">{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</p>
                <p className="text-sm mt-1" style={{ color: T3 }}>Hyde Park · South Tampa · Parking Available</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                  style={{ color: ACCENT }}>
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
              </div>
              <div className="mb-8">
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Hours</p>
                <div className="space-y-2">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: T2 }}>{h.day}</span>
                      <span className="text-sm" style={{ color: h.closed ? T3 : "#fff" }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Contact</p>
                <a href={`tel:${PHONE_RAW}`} className="block text-sm hover:text-white transition-colors mb-4" style={{ color: T2 }}>{PHONE}</a>
                <div className="flex gap-3 flex-wrap">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
                    style={{ background: ACCENT, color: "#0A0A0A" }}>
                    Book an Appointment
                  </a>
                  <a href={`tel:${PHONE_RAW}`}
                    className="inline-block border text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all hover:opacity-80"
                    style={{ borderColor: ACCENT, color: ACCENT }}>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden" style={{ background: BG2, padding: "8rem 1rem", borderTop: `1px solid ${BORDER}` }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right,transparent,${ACCENT},transparent)`, opacity: .6 }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right,transparent,${ACCENT},transparent)`, opacity: .6 }} />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none" aria-hidden>
          <span style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "18vw", color: `${ACCENT}08`, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>DISTRICT</span>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Ready for the District Look?</p>
          <h2 className="leading-none text-white mb-6" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,10vw,7rem)", letterSpacing: "0.04em" }}>
            {CTA_HEADLINE}
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: T2 }}>
            {CTA_BODY}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block text-sm font-bold tracking-[0.25em] uppercase px-14 py-5 transition-opacity hover:opacity-90"
              style={{ background: ACCENT, color: "#0A0A0A", boxShadow: `0 4px 40px ${ACCENT}44` }}>
              Book on Booksy
            </a>
            <a href={`tel:${PHONE_RAW}`}
              className="inline-block border text-sm font-bold tracking-[0.25em] uppercase px-14 py-5 transition-all hover:bg-white/5"
              style={{ borderColor: `${ACCENT}88`, color: ACCENT }}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: BG1, borderTop: `2px solid ${ACCENT}44` }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <span className="text-white text-3xl tracking-widest block" style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 1 }}>{NAME}</span>
              <span className="block text-[9px] tracking-[0.3em] uppercase mb-4 mt-0.5" style={{ color: ACCENT }}>OF TAMPA · VETERAN OWNED · EST. 10+ YEARS</span>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: T2 }}>
                Creating unique experiences with every customer. Hyde Park's home for precision barbering — where the #DistrictLook is earned, not given.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
                  style={{ color: T2 }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  {IG_HANDLE}
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Quick Links</h3>
              <ul className="space-y-3">
                {[["#services","Services & Pricing"],["#team","Our Barbers"],["#gallery","Gallery"],["#visit","Visit Us"],[BOOKING_URL,"Book on Booksy"]].map(([href,label]) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm hover:text-white transition-colors" style={{ color: T2 }}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Find Us</h3>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>{ADDRESS_LINE1}<br />{ADDRESS_LINE2}<br /><span style={{ color: T3 }}>Hyde Park · South Tampa</span></p>
                <a href={`tel:${PHONE_RAW}`} className="block text-sm hover:text-white transition-colors" style={{ color: T2 }}>{PHONE}</a>
                <div className="pt-2 space-y-1.5">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-xs" style={{ color: h.closed ? T3 : T2 }}>
                      <span>{h.day}</span><span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: BORDER }}>
            <p className="text-xs" style={{ color: T3 }}>&copy; 2026 {NAME} OF TAMPA. All rights reserved.</p>
            <p className="text-xs" style={{ color: T3 }}>Concept by <span style={{ color: ACCENT }}>Thryve Operations</span> · thryveops.com</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
