import Image from "next/image";

export const metadata = {
  title: "House of Barbers — Columbia, MD",
  description: "Centre Park's premier barbershop. House of Barbers — precision cuts and elite service in Columbia, MD. Book your appointment online.",
};

// ─── Brand constants ──────────────────────────────────────────────────────────
const NAME         = "HOUSE OF BARBERS";
const TAGLINE      = "Centre Park's destination for precision cuts and elite service.";
const CITY         = "Columbia, MD";
const PHONE        = "(410) 730-4247";
const PHONE_RAW    = "4107304247";
const BOOKING_URL  = "https://booksy.com";
const IG_HANDLE    = "@houseofbarbers_columbia";
const IG_URL       = "https://instagram.com/houseofbarbers_columbia";
const RATING       = "4.7";
const REVIEW_COUNT = "123";
const EST          = "Centre Park's Premier Shop";

// Accent — steel blue; swap this single constant to re-theme for a different shop
const ACCENT       = "#4A90A4";
const ACCENT_LIGHT = "#5BA5BA";
const BG1          = "#0A0A0A";
const BG2          = "#111111";
const BG3          = "#1A1A1A";
const BORDER       = "#2A2A2A";
const T2           = "#A0A0A0";
const T3           = "#606060";

const SERVICES = [
  { name: "Signature Cut",   price: "$35", dur: "35 min", desc: "Our flagship cut — consultation, precision scissor or clipper work, finished to the detail.", popular: false },
  { name: "Fade",            price: "$38", dur: "40 min", desc: "Skin fade, low fade, or taper — seamlessly blended and edge-perfect.",                        popular: true  },
  { name: "Beard Sculpt",    price: "$22", dur: "25 min", desc: "Full beard shaping, trim, and straight razor edge for a sculpted finish.",                    popular: false },
  { name: "Kids Cut",        price: "$24", dur: "30 min", desc: "Relaxed, no-rush cuts for kids under 12. Patient barbers, clean results.",                    popular: false },
  { name: "Cut + Beard",     price: "$52", dur: "55 min", desc: "Complete transformation — haircut with beard sculpt and hot towel razor finish.",             popular: false },
  { name: "Deluxe Shave",    price: "$35", dur: "35 min", desc: "Traditional hot towel straight razor shave with pre- and post-shave treatment.",              popular: false },
];

const TEAM = [
  { name: "Marcus", role: "Head Barber",   spec: "Signature cuts, fades & tapers · 14+ yrs",     bio: "Marcus built the House reputation cut by cut. His eye for shape and clean execution is why clients keep coming back and sending their friends.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Devon",  role: "Senior Barber", spec: "Skin fades, beard sculpting & razor detail",   bio: "Devon's fades are seamless and his beard work is sharp. Precision-focused with a calm chair presence that puts first-timers at ease.",              img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
  { name: "Tyrell", role: "Barber",        spec: "Full menu, natural hair & afro-textured styles", bio: "Tyrell rounds out the chair with strong technical range and an expertise in natural and afro-textured hair that sets the shop apart.",             img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
];

const REVIEWS = [
  { text: "House of Barbers is the real deal. Marcus gave me the cleanest fade I've had in years. Premium service without the attitude — just results.", name: "Darnell K.", sub: "Fade" },
  { text: "Devon's beard sculpting is on another level. Came in with a mess and left looking like I had a professional photoshoot. Highly recommend.", name: "Simeon P.", sub: "Beard Sculpt" },
  { text: "Brought my son for the first time. Tyrell was great with him, patient and precise. He left with the best haircut of his life at eight years old.", name: "Cheryl M.", sub: "Kids Cut" },
  { text: "Been a regular for two years. The quality never dips. Marcus and Devon both cut at a high level and the shop is always clean and professional.", name: "Raymond A.", sub: "Regular" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&q=80",
  "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=700&q=80",
];

const HOURS = [
  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM", closed: false },
  { day: "Sunday",            time: "10:00 AM – 4:00 PM", closed: false },
];

const PILLARS = [
  { title: "Elite Precision",    desc: "Every cut is treated as a signature service — no shortcuts, no rush, just craft." },
  { title: "4.7 Stars · 123",   desc: "123 five-star reviews built on consistency, skill, and a premium shop experience." },
  { title: "Premium Experience", desc: "Clean shop, seasoned barbers, and a chair that feels like an appointment — not a wait." },
];

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
            <span className="block text-[9px] tracking-[0.3em] uppercase -mt-0.5" style={{ color: ACCENT }}>Barbershop</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {(["#services","#team","#gallery","#visit"] as const).map((href, i) => (
              <a key={href} href={href} className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-white" style={{ color: T2 }}>
                {["Services","Team","Gallery","Visit"][i]}
              </a>
            ))}
          </nav>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            className="text-white text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}>
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <Image fill sizes="100vw" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1920&q=80" alt="House of Barbers" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(10,10,10,.72) 0%,rgba(10,10,10,.48) 50%,rgba(10,10,10,.88) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.3)" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{ paddingTop: 100 }}>
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
            Premier Barbershop · {CITY}
          </p>
          <h1 className="bs-shimmer leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,13vw,9rem)", letterSpacing: "0.04em" }}>
            {NAME}
          </h1>
          <p className="mt-5 text-sm md:text-base tracking-widest uppercase" style={{ color: T2 }}>{EST}</p>
          <p className="mt-3 text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: T2 }}>{TAGLINE}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="text-white text-xs font-bold tracking-[0.25em] uppercase px-10 py-4 transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}>
              Book Your Cut
            </a>
            <a href="#team"
              className="border text-white text-xs font-medium tracking-[0.25em] uppercase px-10 py-4 transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,.35)" }}>
              Meet The Team
            </a>
          </div>
          <div className="mt-14 flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{RATING} ★</div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>{REVIEW_COUNT} Reviews</div>
            </div>
            <div style={{ width: 1, height: 32, background: BORDER }} />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">7 Days</div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>A Week</div>
            </div>
            <div style={{ width: 1, height: 32, background: BORDER }} />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Howard Co.</div>
              <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: T3 }}>Maryland</div>
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
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>Premium services, deliberate pricing. Everything you need to leave looking exactly right.</p>
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
              View All Services &amp; Book Online
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>The Craft</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>The Barbers</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>Three barbers. One standard: elite work every time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="bs-tc relative overflow-hidden border transition-colors duration-300"
                style={{ background: BG3, borderColor: BORDER }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image fill sizes="(max-width:768px) 100vw, 33vw" src={m.img} alt={m.name} className="bs-tp object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: ACCENT }}>{m.role}</p>
                  <h3 className="text-white text-xl font-semibold mb-1">{m.name}</h3>
                  <p className="text-sm mb-2" style={{ color: T2 }}>{m.spec}</p>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: T3 }}>{m.bio}</p>
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
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.77c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-white text-2xl font-bold">{RATING}</span>
                  <span style={{ color: ACCENT }}>★★★★★</span>
                </div>
                <p className="text-[10px] tracking-widest uppercase" style={{ color: T3 }}>{REVIEW_COUNT} Google Reviews</p>
              </div>
            </div>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "0.04em" }}>What Clients Say</h2>
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
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>The Work</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Fresh From The Chair</h2>
            <p className="mt-4 text-sm" style={{ color: T2 }}>Every cut in this gallery is a standard we hold every time.</p>
          </div>
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="bs-gi relative overflow-hidden break-inside-avoid cursor-pointer"
                style={{ aspectRatio: "1/1", background: BG3 }}>
                <Image fill sizes="(max-width:768px) 50vw, 33vw" src={src} alt={`Cut ${i + 1}`} className="object-cover" />
                <div className="bs-go absolute inset-0 flex items-center justify-center" style={{ background: `${ACCENT}CC` }}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
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
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Location &amp; Hours</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border" style={{ borderColor: BORDER }}>
            <div className="relative min-h-[400px]" style={{ background: BG3 }}>
              <Image fill sizes="(max-width:1024px) 100vw, 50vw" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80" alt="House of Barbers interior" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.35)" }} />
            </div>
            <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l" style={{ background: BG2, borderColor: BORDER }}>
              <div className="mb-8">
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Address</p>
                <p className="text-white text-lg leading-relaxed">8885 Centre Park Dr #D<br />Columbia, MD 21045</p>
                <a href="https://maps.google.com/?q=House+of+Barbers+Columbia+MD" target="_blank" rel="noopener noreferrer"
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
                  Book an Appointment
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
          <span style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "8vw", color: "rgba(255,255,255,.025)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>HOUSE OF BARBERS</span>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Ready?</p>
          <h2 className="leading-none text-white mb-6" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,10vw,7rem)", letterSpacing: "0.04em" }}>
            Step Into The House.
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: T2 }}>
            Elite cuts. Seven days a week. No compromises.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
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
              <span className="block text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>Barbershop</span>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: T2 }}>Centre Park&apos;s premier barbershop. Precision cuts, elite service, seven days a week.</p>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
                style={{ color: T2 }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                {IG_HANDLE}
              </a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Quick Links</h3>
              <ul className="space-y-3">
                {[["#services","Services"],["#team","Team"],["#gallery","Gallery"],["#visit","Visit Us"],[BOOKING_URL,"Book Now"]].map(([href,label]) => (
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
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>8885 Centre Park Dr #D<br />Columbia, MD 21045</p>
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
            <p className="text-xs" style={{ color: T3 }}>&copy; 2026 House of Barbers. All rights reserved.</p>
            <p className="text-xs" style={{ color: T3 }}>Concept by <span style={{ color: ACCENT }}>Thryve Operations</span></p>
          </div>
        </div>
      </footer>

    </div>
  );
}
