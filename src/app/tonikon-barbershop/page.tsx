import Image from "next/image";
import BookingFlow from "./BookingFlow";

export const metadata = {
  title: "Tonikon Barbershop — Tampa, FL",
  description:
    "Tonikon Barbershop in Tampa, FL. Rated 5.0 across 185 Google reviews. Classic cuts, skin fades, and beard work — open 7 days, late until 10 PM Thu-Sat. Book your chair.",
};

// ─── Brand constants ─────────────────────────────────────────────────────────
const NAME = "TONIKON";
const TAGLINE = "Precision cuts under the chandelier. A perfect 5.0 — 185 clients deep.";
const CITY = "Tampa, FL";
const PHONE = "(786) 252-8476";
const PHONE_RAW = "+17862528476";
const BOOK_ANCHOR = "#book";
const BOOKSY_URL = "https://booksy.com/en-us/1691225_tonikon-barbershop_barber-shop_15761_tampa";
const IG_HANDLE = "@tonikonbarbershop_tampa";
const IG_URL = "https://instagram.com/tonikonbarbershop_tampa";
const RATING = "5.0";
const REVIEW_COUNT = "185";
const EST = "Est. 2025 · Town N Country";

// Gold accent — dark text on gold backgrounds (readability exception)
const ACCENT = "#C9A96E";
const ACCENT_LIGHT = "#E2C07E";

const BG1 = "#0A0A0A";
const BG2 = "#111111";
const BG3 = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0";
const T3 = "#606060";

const IMG = "/images/tonikon-barbershop";

// ─── Content ─────────────────────────────────────────────────────────────────

const SERVICES = [
  { name: "Classic Cut", price: "$35", dur: "40 min", desc: "Scissor and clipper work shaped to your head, finished with a crisp lineup.", popular: false },
  { name: "Skin Fade", price: "$40", dur: "45 min", desc: "Blurred to the skin — low, mid, or high. The cut this shop is known for.", popular: true },
  { name: "Beard Sculpt & Lineup", price: "$25", dur: "25 min", desc: "Razor-sharp edges, shaped density, hot lather on the neckline.", popular: false },
  { name: "Cut + Beard Combo", price: "$55", dur: "60 min", desc: "The full reset — fade plus full beard work in one seat.", popular: false },
  { name: "Kids Cut", price: "$30", dur: "30 min", desc: "Patient chairs for young clients. Parents in our reviews say it best.", popular: false },
  { name: "Hot Towel Shave", price: "$35", dur: "35 min", desc: "Old-school straight-razor shave with hot towels and balm.", popular: false },
];

const SPECIALTIES = [
  { title: "Skin Fades", es: "Fades a piel", desc: "Low, mid, high, burst — blurred clean with no hard lines left behind." },
  { title: "Beard Work", es: "Trabajo de barba", desc: "Sculpted, lined, and hot-towel finished. Beards leave sharper than they arrived." },
  { title: "Classic & Modern", es: "Clasico y moderno", desc: "Pompadours to textured crops — cortes clasicos y modernos, every era done right." },
  { title: "Kids Welcome", es: "Ninos bienvenidos", desc: "Patient barbers and a calm shop — the reviews call us one of the most kid-friendly chairs in Tampa." },
];

// composite reviews — replace with real GMB quotes before live deployment
const REVIEWS = [
  { text: "Best barbershop in Tampa, no debate. My fade was blurred perfect and the shop itself looks incredible — chandelier, gold chairs, the whole setup.", name: "Marcos R.", sub: "Skin Fade" },
  { text: "Took my son for his first real haircut and they were so patient with him. He left smiling and asking when we can come back.", name: "Danielle P.", sub: "Kids Cut" },
  { text: "Me atendieron en espanol, sali con el corte exacto que pedi. Se nota que cuidan cada detalle del lugar.", name: "Yusniel G.", sub: "Cut + Beard" },
  { text: "They are open late which saves me — booked a 8:30 PM chair after work on a Friday and still got a no-rush, detailed cut.", name: "Trey W.", sub: "Regular" },
];

const GALLERY = [
  { src: `${IMG}/ig-1.jpg`, alt: "Pompadour skin fade with sculpted beard at Tonikon Barbershop" },
  { src: `${IMG}/ig-3.jpg`, alt: "Low taper fade with textured top, fresh from the chair" },
  { src: `${IMG}/detail-1.jpg`, alt: "Gold shears and tools at a Tonikon station" },
];

const HOURS = [
  { day: "Mon – Wed", time: "9:00 AM – 7:00 PM", closed: false },
  { day: "Thu – Sat", time: "9:00 AM – 10:00 PM", closed: false },
  { day: "Sunday", time: "9:00 AM – 6:00 PM", closed: false },
];

const PILLARS = [
  { title: "A Perfect 5.0 — 185 Reviews", desc: "Not one complaint across 185 Google reviews. The rarest number in the business." },
  { title: "Open Late, Open Sunday", desc: "Seven days a week, until 10 PM Thursday through Saturday. Your schedule fits here." },
  { title: "English & Espanol", desc: "Both languages, every chair — cortes clasicos y modernos for all of Town N Country." },
];

const ADDRESS_LINE1 = "5915 Memorial Hwy, Suite 109";
const ADDRESS_LINE2 = "Tampa, FL 33615";
const MAPS_QUERY = "Tonikon Barbershop 5915 Memorial Hwy Tampa FL";

const STAT1_VAL = "5.0 ★";
const STAT1_LABEL = "185 Reviews";
const STAT2_VAL = "7";
const STAT2_LABEL = "Days a Week";
const STAT3_VAL = "10 PM";
const STAT3_LABEL = "Open Late Thu–Sat";

const CTA_HEADLINE = "Your Chair Is Waiting.";
const CTA_BODY = "Reserva tu silla. Walk in fresh, walk out sharp — under the chandelier.";

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
      <a href={BOOK_ANCHOR}
        className="fixed bottom-6 right-6 z-50 text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 shadow-2xl transition-opacity hover:opacity-90"
        style={{ background: ACCENT, color: "#0A0A0A" }}>
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
            {(["#services", "#shop", "#gallery", "#visit"] as const).map((href, i) => (
              <a key={href} href={href} className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-white" style={{ color: T2 }}>
                {["Services", "The Shop", "Gallery", "Visit"][i]}
              </a>
            ))}
          </nav>
          <a href={BOOK_ANCHOR}
            className="text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
            style={{ background: ACCENT, color: "#0A0A0A" }}>
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <Image src={`${IMG}/gmb-1.jpg`} alt="Inside Tonikon Barbershop — gold-crest chairs and chandelier" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(10,10,10,.72) 0%,rgba(10,10,10,.48) 50%,rgba(10,10,10,.88) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.3)" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{ paddingTop: 100 }}>
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: ACCENT }}>
            Precision Barbershop · {CITY}
          </p>
          <h1 className="bs-shimmer leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(5rem,18vw,13rem)", letterSpacing: "0.04em" }}>
            {NAME}
          </h1>
          <p className="mt-5 text-sm md:text-base tracking-widest uppercase" style={{ color: T2 }}>{EST}</p>
          <p className="mt-3 text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: T2 }}>{TAGLINE}</p>
          <p className="mt-2 text-sm italic" style={{ color: ACCENT }}>Cortes cl&aacute;sicos y modernos — hablamos espa&ntilde;ol.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={BOOK_ANCHOR}
              className="text-xs font-bold tracking-[0.25em] uppercase px-10 py-4 transition-opacity hover:opacity-90"
              style={{ background: ACCENT, color: "#0A0A0A" }}>
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
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>Honest prices, posted up front. Every service ends with a lineup you can feel.</p>
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
            <a href={BOOK_ANCHOR}
              className="text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2 transition-colors hover:opacity-70"
              style={{ color: ACCENT }}>
              Pick a Service &amp; Book Below
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* THE SHOP — culture + specialties (no public staff roster; specialty cards instead) */}
      <section id="shop" className="px-4 py-24" style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>The Craft</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Inside Tonikon</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>
              Tonikon is Tony&rsquo;s shop — his name, his standard, in every chair. Blue walls, gold crests, and a bar
              that never drops: 185 reviews, five stars, zero exceptions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="bs-tc relative overflow-hidden border transition-colors duration-300" style={{ background: BG3, borderColor: BORDER, minHeight: 420 }}>
              <Image src={`${IMG}/gmb-4.jpg`} alt="Fresh cuts and good energy inside Tonikon Barbershop" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6" style={{ background: "linear-gradient(to top,rgba(10,10,10,.85),transparent)" }}>
                <p className="text-xs tracking-[0.25em] uppercase" style={{ color: ACCENT }}>Shop Life</p>
                <p className="text-white text-lg font-semibold mt-1">Every cut leaves the chair smiling.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: BORDER }}>
              {SPECIALTIES.map((sp) => (
                <div key={sp.title} className="p-7 flex flex-col justify-center" style={{ background: BG3 }}>
                  <p className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>{sp.es}</p>
                  <h3 className="text-white font-semibold text-lg mb-2">{sp.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: T2 }}>{sp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <a href={BOOK_ANCHOR}
              className="inline-block border text-xs tracking-[0.2em] uppercase px-8 py-3 transition-all hover:opacity-80"
              style={{ borderColor: ACCENT, color: ACCENT }}>
              Book a Chair
            </a>
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
                <p className="text-[10px] tracking-widest uppercase" style={{ color: T3 }}>{REVIEW_COUNT} Google Reviews</p>
              </div>
            </div>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "0.04em" }}>What Clients Say</h2>
          </div>
          {/* composite reviews — replace with real GMB quotes before live deployment */}
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
            <p className="mt-4 text-sm" style={{ color: T2 }}>Real cuts, real clients — straight off our Instagram.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {GALLERY.map((g, i) => (
              <div key={g.src} className="bs-gi relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: i === 2 ? "3/4" : "3/4", background: BG3 }}>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="bs-go absolute inset-0 flex items-center justify-center" style={{ background: `${ACCENT}CC` }}>
                  <svg className="w-8 h-8" style={{ color: "#0A0A0A" }} fill="currentColor" viewBox="0 0 24 24">
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

      {/* BOOKING */}
      <section id="book" className="px-4 py-24" style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: ACCENT }}>Reserve Your Chair · Reserva Tu Silla</p>
            <h2 className="leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.04em" }}>Book Your Cut</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: T2 }}>
              Pick a service, a barber, and a time — done in under a minute. Prefer the phone?
              {" "}<a href={`tel:${PHONE_RAW}`} className="underline transition-colors hover:text-white" style={{ color: ACCENT }}>Call {PHONE}</a>.
            </p>
          </div>
          <BookingFlow />
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
              <Image src={`${IMG}/gmb-3.jpg`} alt="Tonikon Barbershop entrance — Suite 109, 5915 Memorial Hwy" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.25)" }} />
            </div>
            <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l" style={{ background: BG2, borderColor: BORDER }}>
              <div className="mb-8">
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Address</p>
                <p className="text-white text-lg leading-relaxed">{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                  style={{ color: ACCENT }}>
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
              </div>
              <div className="mb-8">
                <p className="text-xs tracking-[0.25em] uppercase font-medium mb-3" style={{ color: ACCENT }}>Hours — Open 7 Days</p>
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
                <a href={BOOK_ANCHOR}
                  className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
                  style={{ background: ACCENT, color: "#0A0A0A" }}>
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
          <a href={BOOK_ANCHOR}
            className="inline-block text-sm font-bold tracking-[0.25em] uppercase px-14 py-5 transition-opacity hover:opacity-90"
            style={{ background: ACCENT, color: "#0A0A0A", boxShadow: `0 4px 40px ${ACCENT}44` }}>
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
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: T2 }}>
                Tampa&rsquo;s five-star barbershop in Town N Country. Classic and modern cuts, seven days a week —
                English y espa&ntilde;ol.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
                  style={{ color: T2 }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  {IG_HANDLE}
                </a>
                <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-[0.15em] uppercase hover:opacity-80 transition-opacity" style={{ color: T2 }}>
                  Also on Booksy
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium mb-6" style={{ color: ACCENT }}>Quick Links</h3>
              <ul className="space-y-3">
                {[["#services", "Services"], ["#shop", "The Shop"], ["#gallery", "Gallery"], ["#visit", "Visit Us"], [BOOK_ANCHOR, "Book Now"]].map(([href, label]) => (
                  <li key={label}>
                    <a href={href} className="text-sm hover:text-white transition-colors" style={{ color: T2 }}>{label}</a>
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
            <p className="text-xs" style={{ color: T3 }}>&copy; 2026 Tonikon Barbershop. All rights reserved.</p>
            <p className="text-xs" style={{ color: T3 }}>Concept by <span style={{ color: ACCENT }}>Thryve Operations</span></p>
          </div>
        </div>
      </footer>

    </div>
  );
}
