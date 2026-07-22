import Image from "next/image";
import BookingFlow from "./BookingFlow";

export const metadata = {
  title: "The Fade Factory Gentlemen's Grooming — Tampa, FL",
  description:
    "Tampa's 5.0-rated barbershop on N Lincoln Ave. Fades, beard work, and gentlemen's grooming — 522 five-star reviews on Squire. Book online in seconds.",
};

// ─── Brand constants ─────────────────────────────────────────────────────────
const NAME = "THE FADE FACTORY";
const SUB_LABEL = "Gentlemen's Grooming";
const TAGLINE = "Shaves. Haircuts. Gentlemen's grooming — done right, on time, every time.";
const CITY = "Tampa, FL";
const PHONE = "(813) 542-1004";
const PHONE_RAW = "+18135421004";
const BOOKING_URL = "https://web.getsquire.com/brands/the-fade-factory";
const RATING = "4.9";
const REVIEW_COUNT = "192";
const EST = "Est. 2020 · Tampa, FL";

const ACCENT = "#9B2335";
const ACCENT_LIGHT = "#B52A3E";

const BG1 = "#0A0A0A";
const BG2 = "#111111";
const BG3 = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0";
const T3 = "#606060";

// ─── Content ─────────────────────────────────────────────────────────────────

// Real service menu from the shop's Squire booking page
const SERVICES = [
  { name: "Haircut", price: "$27", dur: "45 min", desc: "The signature Fade Factory cut. Fade, taper, or classic — finished with a razor-sharp lineup.", popular: true },
  { name: "Haircut & Beard", price: "$37", dur: "60 min", desc: "Full cut plus beard shaping, edged and blended into the fade for a clean profile.", popular: false },
  { name: "Haircut & Eyebrows", price: "$32", dur: "50 min", desc: "The full cut with brows cleaned and shaped — details most shops skip.", popular: false },
  { name: "Haircut & Goatee", price: "$33", dur: "50 min", desc: "Precision cut with goatee trimmed, lined, and sharpened.", popular: false },
  { name: "Senior Haircut", price: "$17", dur: "30 min", desc: "Classic cut at a respectful price for the gentlemen who came before us.", popular: false },
  { name: "Kids Cut", price: "$22", dur: "30 min", desc: "Patient chairs and clean fades for the young gentlemen.", popular: false },
];

// Specialty cards — no named staff (roster lives on Squire)
const SPECIALTIES = [
  {
    title: "Skin Fades & Tapers",
    spec: "Bald fades · drop fades · low tapers",
    desc: "The name is the promise. Every fade blended tight and photographed against the wall before you leave the chair.",
    img: "/images/the-fade-factory/gmb-4.jpg",
    alt: "Crisp skin fade with sculpted beard at The Fade Factory",
  },
  {
    title: "Beard Work & Hot Towel",
    spec: "Shaping · razor edges · hot towel finish",
    desc: "Beards sculpted with the straight razor and finished with a hot towel — grooming, not just trimming.",
    img: "/images/the-fade-factory/gmb-7.jpg",
    alt: "Beard and fade profile against The Fade Factory logo wall",
  },
  {
    title: "Lineups & Designs",
    spec: "Precision lineups · freestyle detail work",
    desc: "Sharp edges and clean detail lines that hold their shape all week long.",
    img: "/images/the-fade-factory/gmb-6.jpg",
    alt: "Low fade with clean lineup at The Fade Factory",
  },
];

// composite reviews — replace with real GMB quotes before live deployment
const REVIEWS = [
  { text: "Been going for over a year and the fade is identical every single time. Booked on Squire, in the chair right on schedule.", name: "Marcus D.", sub: "Haircut & Beard" },
  { text: "They open at 8:30 so I get cut before work. In and out in 45 minutes and the lineup stays crisp all week.", name: "Jorge R.", sub: "Haircut" },
  { text: "Shop is spotless — white brick, clean chairs, no chaos. My son actually looks forward to his cut now.", name: "Tanya W.", sub: "Kids Cut" },
  { text: "Johnny took his time with the beard work and the hot towel at the end is worth it alone. Best shop on this side of Tampa.", name: "Derrick S.", sub: "Haircut & Beard" },
];

const GALLERY = [
  { src: "/images/the-fade-factory/gmb-4.jpg", alt: "Skin fade with beard against the branded logo wall" },
  { src: "/images/the-fade-factory/gmb-1.jpg", alt: "Barbershop entrance with barber pole stripes" },
  { src: "/images/the-fade-factory/gmb-6.jpg", alt: "Low fade with detail line" },
  { src: "/images/the-fade-factory/gmb-5.jpg", alt: "Barber workstation with clippers and tools" },
  { src: "/images/the-fade-factory/gmb-7.jpg", alt: "Beard and fade profile shot" },
  { src: "/images/the-fade-factory/gmb-2.jpg", alt: "White brick interior with black barber chairs" },
];

const HOURS = [
  { day: "Tuesday – Thursday", time: "8:30 AM – 6:00 PM", closed: false },
  { day: "Friday", time: "8:30 AM – 6:30 PM", closed: false },
  { day: "Saturday", time: "8:00 AM – 4:00 PM", closed: false },
  { day: "Sunday – Monday", time: "Closed", closed: true },
];

const PILLARS = [
  { title: "5.0 Across 522 Reviews", desc: "A perfect rating from over five hundred verified Squire clients — consistency you can count." },
  { title: "Open Early, Cut Fast", desc: "Doors open 8:30 AM — get faded before work and still beat the traffic on N Lincoln." },
  { title: "Book in Seconds", desc: "Real-time booking through Squire. Pick your barber, pick your slot, show up sharp." },
];

// ─── Address strings ──────────────────────────────────────────────────────────
const ADDRESS_LINE1 = "2901 N Lincoln Ave, Suite 11";
const ADDRESS_LINE2 = "Tampa, FL 33607";
const MAPS_QUERY = "The Fade Factory Gentlemen's Grooming 2901 N Lincoln Ave Tampa FL";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`;

const HERO_PHOTO = "/images/the-fade-factory/gmb-2.jpg";
const LOCATION_PHOTO = "/images/the-fade-factory/gmb-3.jpg";
const STORY_PHOTO = "/images/the-fade-factory/gmb-1.jpg";

const STAT1_VAL = "5.0 ★";
const STAT1_LABEL = "522 Squire Reviews";
const STAT2_VAL = "4.9 ★";
const STAT2_LABEL = "192 Google Reviews";
const STAT3_VAL = "8:30 AM";
const STAT3_LABEL = "Doors Open";

const CTA_HEADLINE = "Come Get Faded.";
const CTA_BODY = "522 five-star clients already know. Grab a chair before the week fills up.";

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
      `}</style>

      {/* FLOATING BOOK BUTTON */}
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 shadow-2xl transition-opacity hover:opacity-90"
        style={{ background: ACCENT }}>
        Book Now
      </a>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40" style={{ background: "rgba(10,10,10,0.93)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: 72 }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <span className="text-white text-2xl tracking-widest block" style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 1 }}>{NAME}</span>
            <span className="block text-[9px] tracking-[0.3em] uppercase -mt-0.5" style={{ color: ACCENT }}>{SUB_LABEL}</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {(["#services", "#craft", "#gallery", "#visit"] as const).map((href, i) => (
              <a key={href} href={href} className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-white" style={{ color: T2 }}>
                {["Services", "The Craft", "Gallery", "Visit"][i]}
              </a>
            ))}
          </nav>
          <a href="#book"
            className="text-white text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}>
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <Image src={HERO_PHOTO} alt="Inside The Fade Factory — white brick walls and black barber chairs" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(10,10,10,.72) 0%,rgba(10,10,10,.48) 50%,rgba(10,10,10,.88) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.3)" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{ paddingTop: 100 }}>
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
            Gentlemen&rsquo;s Grooming · {CITY}
          </p>
          <h1 className="bs-shimmer leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(4rem,15vw,12rem)", letterSpacing: "0.04em" }}>
            {NAME}
          </h1>
          <p className="mt-5 text-sm md:text-base tracking-widest uppercase" style={{ color: T2 }}>{EST}</p>
          <p className="mt-3 text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: T2 }}>{TAGLINE}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="#book"
              className="text-white text-xs font-bold tracking-[0.25em] uppercase px-10 py-4 transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}>
              Book Your Cut
            </a>
            <a href={`tel:${PHONE_RAW}`}
              className="border text-white text-xs font-medium tracking-[0.25em] uppercase px-10 py-4 transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,.35)" }}>
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
              <h3 className="text-white font-semibold text-lg tracking-wide mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: T2 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-4 py-24" style={{ background: BG1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>What We Offer</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>The Menu</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>Straight from our Squire booking menu — honest prices, no surprises at the register.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: BORDER }}>
            {SERVICES.map((s) => (
              <div key={s.name} className="bs-svc relative p-8 h-full transition-all duration-300"
                style={{ background: BG1, borderLeft: "2px solid transparent" }}>
                {s.popular && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 border"
                    style={{ color: ACCENT, borderColor: ACCENT }}>Popular</span>
                )}
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-bebas-neue)", color: ACCENT, letterSpacing: "0.04em" }}>{s.price}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{s.name}</h3>
                <p className="text-xs mb-3" style={{ color: T3 }}>{s.dur}</p>
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 transition-colors hover:opacity-70"
              style={{ color: ACCENT }}>
              View All Services &amp; Book on Squire
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* THE CRAFT — specialty cards */}
      <section id="craft" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>The Craft</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>What We Do Best</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>Every shot below was taken in this shop, against this wall. The work speaks first.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALTIES.map((m) => (
              <div key={m.title} className="bs-tc relative overflow-hidden border transition-colors duration-300"
                style={{ background: BG3, borderColor: BORDER }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image src={m.img} alt={m.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="bs-tp object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: ACCENT }}>{m.spec}</p>
                  <h3 className="text-white text-xl font-semibold mb-2">{m.title}</h3>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: T3 }}>{m.desc}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-block border text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all hover:opacity-80"
                    style={{ borderColor: ACCENT, color: ACCENT }}>
                    Book on Squire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-4 py-24" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", background: BG3 }}>
            <Image src={STORY_PHOTO} alt="The Fade Factory storefront with barber pole stripes on N Lincoln Ave" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>The Shop</p>
            <h2 className="leading-none mb-6" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "0.04em" }}>
              Built in Tampa.<br />Proven 522 Times.
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: T2 }}>
              Behind the barber-pole stripes on N Lincoln Ave sits one of the most consistently
              rated shops in Tampa. Led by lead barber Johnny Fadez, The Fade Factory has earned a
              perfect 5.0 across 522 verified Squire reviews — one appointment at a time, since 2020.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: T2 }}>
              No gimmicks, no rushed chairs. Clean shop, sharp fades, hot towel finishes, and a
              booking system that respects your time as much as we do.
            </p>
            <a href="#book"
              className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}>
              Grab a Chair
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
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
                <p className="text-[10px] tracking-widest uppercase" style={{ color: T3 }}>{REVIEW_COUNT} Google Reviews · 5.0 on Squire (522)</p>
              </div>
            </div>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "0.04em" }}>What Clients Say</h2>
          </div>
          {/* composite reviews — replace with real GMB quotes before live deployment */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: BORDER }}>
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-7" style={{ background: BG2 }}>
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
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-4 py-24" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>The Work</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Fresh From The Chair</h2>
            <p className="mt-4 text-sm" style={{ color: T2 }}>Real cuts, real shop — nothing staged, nothing stock.</p>
          </div>
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {GALLERY.map((g, i) => (
              <div key={g.src} className="bs-gi relative overflow-hidden break-inside-avoid cursor-pointer"
                style={{ aspectRatio: i % 3 === 0 ? "3/4" : "1/1", background: BG3 }}>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                <div className="bs-go absolute inset-0 flex items-center justify-center" style={{ background: `${ACCENT}CC` }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ color: ACCENT }}>
              See More on Our Google Listing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING FLOW */}
      <section id="book" className="px-4 py-24" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>Reserve Your Chair</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Book a Cut</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-lg mx-auto" style={{ color: T2 }}>
              Three taps and you&rsquo;re on the books — or jump straight to our live Squire calendar.
            </p>
          </div>
          <BookingFlow />
          <div className="text-center mt-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border text-xs tracking-[0.25em] uppercase px-8 py-3.5 transition-all hover:bg-white/5"
              style={{ borderColor: BORDER, color: T2 }}>
              Or Book Directly on Squire
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section id="visit" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Location &amp; Hours</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border" style={{ borderColor: BORDER }}>
            <div className="relative min-h-[400px]" style={{ background: BG3 }}>
              <Image src={LOCATION_PHOTO} alt="The Fade Factory street sign with barber poles and phone number neon" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.35)" }} />
            </div>
            <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l" style={{ background: BG1, borderColor: BORDER }}>
              <div className="mb-8">
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Address</p>
                <p className="text-white text-lg leading-relaxed">{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
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
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
                  style={{ background: ACCENT }}>
                  Book on Squire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden" style={{ background: BG1, padding: "8rem 1rem", borderTop: `1px solid ${BORDER}` }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right,transparent,${ACCENT},transparent)`, opacity: .5 }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right,transparent,${ACCENT},transparent)`, opacity: .5 }} />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none" aria-hidden>
          <span style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "18vw", color: "rgba(255,255,255,.025)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{NAME}</span>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Ready?</p>
          <h2 className="leading-none text-white mb-6" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,10vw,7rem)", letterSpacing: "0.04em" }}>
            {CTA_HEADLINE}
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: T2 }}>
            {CTA_BODY}
          </p>
          <a href="#book"
            className="inline-block text-white text-sm font-bold tracking-[0.25em] uppercase px-14 py-5 transition-opacity hover:opacity-90"
            style={{ background: ACCENT, boxShadow: `0 4px 40px ${ACCENT}44` }}>
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: BG2, borderTop: `2px solid ${ACCENT}55` }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="text-white text-3xl tracking-widest block" style={{ fontFamily: "var(--font-bebas-neue)", lineHeight: 1 }}>{NAME}</span>
              <span className="block text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>{SUB_LABEL}</span>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: T2 }}>
                Shaves, haircuts, and gentlemen&rsquo;s grooming on N Lincoln Ave — rated 5.0 by 522
                Squire clients since 2020.
              </p>
              <a href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
                style={{ color: T2 }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                {PHONE}
              </a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Quick Links</h3>
              <ul className="space-y-3">
                {[["#services", "Services"], ["#craft", "The Craft"], ["#gallery", "Gallery"], ["#visit", "Visit Us"], [BOOKING_URL, "Book on Squire"]].map(([href, label]) => (
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
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</p>
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
            <p className="text-xs" style={{ color: T3 }}>&copy; 2026 The Fade Factory Gentlemen&rsquo;s Grooming. All rights reserved.</p>
            <p className="text-xs" style={{ color: T3 }}>Concept by <span style={{ color: ACCENT }}>Thryve Operations</span></p>
          </div>
        </div>
      </footer>

    </div>
  );
}
