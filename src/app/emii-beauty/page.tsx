import Image from "next/image";
import Link from "next/link";

// ─── EMII BEAUTY — Tampa Certified Lash & Brow Artist ─────────────────────────
// Dark luxury rebuild. Bilingual English/Spanish. Solo artist: Emely.

const BUSINESS_NAME    = "Emii Beauty";
const TAGLINE          = "Tampa Brow & Lash Artist";
const BOOKING_URL      = "https://emiibeauty.square.site/";
const DIRECTIONS_URL   = "https://maps.google.com/?q=5848+Langston+Dr+Tampa+FL+33619";
const INSTAGRAM_URL    = "https://instagram.com/emii__.beauty";
const INSTAGRAM_HANDLE = "emii__.beauty";

// Dark luxury palette
const BG1    = "#0A0A0A";   // primary dark — most sections
const BG2    = "#111111";   // alt dark — subtle depth
const BG3    = "#1A1210";   // warm dark — Emely / about
const T1     = "#F5EBE0";   // cream white — primary text
const T2     = "rgba(245,235,224,0.50)";  // muted cream — body copy
const ACCENT = "#C47A6D";   // rose-brown — the ONE accent
const RULE   = "rgba(196,122,109,0.18)";  // rose-gold divider

export const metadata = {
  title: "Emii Beauty — Certified Lash & Brow Artist in Tampa, FL",
  description:
    "Certified lash and brow artist based in Tampa, FL. Classic, hybrid, and volume extensions. Brow tinting, henna, and soft glam. Book online — $25 deposit required.",
};

// ─── SERVICES ─────────────────────────────────────────────────────────────────
type Service = {
  name: string;
  nameEs: string;
  desc: string;
  duration: string;
  price: string;
  popular?: boolean;
};

const lashServices: Service[] = [
  {
    name: "Classic Set", nameEs: "Set Clásico",
    desc: "Individual extensions applied one-to-one for a natural, lengthened look with clean, open-eye definition.",
    duration: "2 hrs", price: "$75", popular: true,
  },
  {
    name: "Hybrid Full Set", nameEs: "Set Híbrido Completo",
    desc: "A curated blend of classic and volume fans for a textured, wispy, multidimensional finish.",
    duration: "2 hrs 30 min", price: "Varies",
  },
  {
    name: "Volumen Full Set", nameEs: "Set de Volumen Completo",
    desc: "Handcrafted volume fans for dramatic, full-body lashes with a feathery, bold finish.",
    duration: "2 hrs 40 min", price: "$90",
  },
  {
    name: "Mega Volumen Full Set", nameEs: "Mega Volumen Completo",
    desc: "Ultra-dense mega volume fans — the most glamorous, dramatic lash set possible.",
    duration: "2 hrs 50 min", price: "$100",
  },
  {
    name: "Wet Set", nameEs: "Set Mojado",
    desc: "Sleek, glossy extensions styled into a fresh, editorial wet-lash look. Bold and striking.",
    duration: "1 hr 30 min", price: "Varies",
  },
  {
    name: "Classic Fill", nameEs: "Relleno Clásico",
    desc: "Maintenance fill to keep your classic set looking full, polished, and photo-ready.",
    duration: "2 hrs", price: "$50",
  },
  {
    name: "Hybrid Fill", nameEs: "Relleno Híbrido",
    desc: "Restore your hybrid set's signature texture, volume, and wispy definition.",
    duration: "2 hrs", price: "$55",
  },
  {
    name: "Bottom Lashes", nameEs: "Pestañas Inferiores",
    desc: "Lower lash extensions for a complete, wide-eyed, doe-like finish.",
    duration: "30 min", price: "$25",
  },
  {
    name: "Remove Lashes", nameEs: "Remoción de Pestañas",
    desc: "Safe, professional removal of existing extensions — no damage, no stress.",
    duration: "35 min", price: "$20",
  },
];

const browServices: Service[] = [
  {
    name: "Henna Brows", nameEs: "Cejas de Henna",
    desc: "Natural henna that stains skin and hair for a fuller, defined shape lasting 4–6 weeks.",
    duration: "30 min", price: "$45", popular: true,
  },
  {
    name: "Brow Stain", nameEs: "Tinte Permanente de Cejas",
    desc: "Bold, makeup-like color lasting up to 10 days on skin and 4–6 weeks on hair.",
    duration: "30 min", price: "$35",
  },
  {
    name: "Brow Tint", nameEs: "Tinte de Cejas",
    desc: "Semi-permanent coloring that darkens and defines your natural brows without daily makeup.",
    duration: "30 min", price: "$20",
  },
];

const addOnServices: Service[] = [
  {
    name: "Spikes Add-On", nameEs: "Picos (Add-on)",
    desc: "For existing Emii Beauty clients only. Wispy, textured spikes that elevate your current set.",
    duration: "30 min", price: "$15",
  },
  {
    name: "Soft Glam & Hairstyle", nameEs: "Maquillaje Suave y Peinado",
    desc: "Natural glam makeup with smooth blending and neutral tones. Perfect for events and photoshoots.",
    duration: "30 min", price: "$80",
  },
];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
/* composite reviews — replace with real GMB quotes before live deployment */
const reviews = [
  {
    text: "Emely completely transformed my lashes. I went for the Mega Volume and honestly could not stop staring in the mirror. The attention to detail is unreal.",
    author: "Maria G.",
    sub: "Mega Volume Client",
  },
  {
    text: "Me hizo un set híbrido y quedé enamorada. She is so gentle, professional, and her studio is spotless. Already booked my fill. Highly recommend!",
    author: "Jasmine R.",
    sub: "Hybrid Set Client",
  },
  {
    text: "I was nervous trying a new lash tech but Emely made me feel completely at ease. My Classic set lasted almost 5 weeks. She genuinely cares about her work.",
    author: "Ashley M.",
    sub: "Classic Set Client",
  },
];

// Gallery — verified 2026-06-09. Replace with real IG content for live deployment.
const igPhotos = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80",
  "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=400&q=80",
  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
];

// ─── SERVICE ROW — dark luxury menu style ─────────────────────────────────────
function ServiceRow({ svc }: { svc: Service }) {
  return (
    <div
      className="svc-row py-8 border-b"
      style={{ borderColor: RULE }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12">

        {/* Left: name + Spanish cue + description */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-3 mb-1">
            <h3
              className="svc-name font-display text-2xl md:text-[1.65rem] font-semibold leading-tight tracking-tight transition-colors duration-300"
              style={{ color: T1 }}
            >
              {svc.name}
            </h3>
            {svc.popular && (
              <span
                className="text-[10px] tracking-[0.2em] uppercase font-bold"
                style={{ color: ACCENT }}
              >
                · Más popular
              </span>
            )}
          </div>
          <p
            className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-3"
            style={{ color: ACCENT }}
          >
            {svc.nameEs}
          </p>
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: T2 }}>
            {svc.desc}
          </p>
        </div>

        {/* Right: duration + price + button */}
        <div className="flex items-end md:items-center gap-6 md:gap-8 md:flex-shrink-0">
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: ACCENT }}>
              Duración
            </p>
            <p className="text-sm" style={{ color: T2 }}>{svc.duration}</p>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="font-display text-2xl font-bold leading-none"
              style={{ color: T1 }}
            >
              {svc.price}
            </span>
            <a
              href={BOOKING_URL}
              className="svc-btn px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase border transition-colors duration-300"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: BG1, color: T1 }}>
      <style>{`
        .svc-row { border-left: 3px solid transparent; padding-left: 1.25rem; transition: border-color .25s ease, background-color .25s ease; }
        .svc-row:hover { border-left-color: ${ACCENT}; background-color: ${BG2}; }
        .svc-row:hover .svc-name { color: ${ACCENT}; }
        .svc-row:hover .svc-btn { background-color: ${ACCENT}; border-color: ${ACCENT}; color: ${BG1} !important; }
      `}</style>

      {/* ── NAV ───────────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(10,10,10,0.92)", borderColor: RULE, backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between">
          <a
            href="#"
            className="font-display text-xl font-bold tracking-widest uppercase"
            style={{ color: T1, letterSpacing: "0.12em" }}
          >
            Emii Beauty
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] uppercase">
            <a href="#servicios" className="hover:opacity-60 transition-opacity" style={{ color: T2 }}>Servicios</a>
            <a href="#about"     className="hover:opacity-60 transition-opacity" style={{ color: T2 }}>Sobre m&iacute;</a>
            <a href="#visit"     className="hover:opacity-60 transition-opacity" style={{ color: T2 }}>Visit</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2.5 border text-xs font-bold tracking-[0.15em] uppercase transition-colors hover:bg-[#C47A6D] hover:border-[#C47A6D] hover:text-[#0A0A0A]"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Reservar
            </a>
          </div>
          <a
            href={BOOKING_URL}
            className="md:hidden px-4 py-2 border text-xs font-bold tracking-wider uppercase hover:bg-[#C47A6D] hover:text-[#0A0A0A] transition-colors"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1800&q=80"
          alt="Emii Beauty Tampa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Heavy dark gradient — bottom-weighted so headline pops */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.92) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-6 font-semibold"
            style={{ color: ACCENT }}
          >
            Tampa, FL &nbsp;&middot;&nbsp; Certified Lash &amp; Brow Artist &nbsp;&middot;&nbsp; Home Studio
          </p>
          {/* Editorial headline — stacked, ragged right */}
          <h1 className="font-display leading-[0.88] mb-8">
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] font-bold" style={{ color: T1 }}>
              Lashes That
            </span>
            <span
              className="block text-[clamp(3.5rem,9vw,7.5rem)] font-bold italic"
              style={{ color: ACCENT }}
            >
              Speak for
            </span>
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] font-bold" style={{ color: T1 }}>
              Themselves.
            </span>
          </h1>
          <p className="text-base font-light tracking-wider mb-10" style={{ color: T2 }}>
            Para ti, hermosa. ✨
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={BOOKING_URL}
              className="px-10 py-4 text-sm font-bold tracking-[0.18em] uppercase text-white transition-opacity hover:opacity-80"
              style={{ background: ACCENT }}
            >
              Reservar / Book Now
            </a>
            <a
              href={INSTAGRAM_URL}
              className="px-10 py-4 border text-sm font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
              style={{ borderColor: "rgba(245,235,224,0.30)", color: T2 }}
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────────────── */}
      <div className="border-y" style={{ background: BG2, borderColor: RULE }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
            style={{ borderColor: RULE }}
          >
            {[
              { en: "Certified Lash Tech",      es: "Técnica Certificada" },
              { en: "Tampa, FL · Home Studio",  es: "Estudio Privado · Tampa" },
              { en: "$25 Deposit Required",      es: "Depósito de $25 Requerido" },
            ].map((item) => (
              <div
                key={item.en}
                className="py-6 md:px-8 text-center"
                style={{ borderColor: RULE }}
              >
                <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: T1 }}>
                  {item.en}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1.5 font-medium" style={{ color: ACCENT }}>
                  {item.es}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LASH SERVICES ─────────────────────────────────────────────────────── */}
      <section id="servicios" className="py-20 md:py-32 px-6 md:px-10" style={{ background: BG1 }}>
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3" style={{ color: ACCENT }}>
                01 &nbsp;&mdash;&nbsp; Pestañas
              </p>
              <h2
                className="font-display text-5xl md:text-6xl font-bold leading-none"
                style={{ color: T1 }}
              >
                Lash Services
              </h2>
            </div>
            <p className="text-sm max-w-xs text-right leading-relaxed" style={{ color: T2 }}>
              Transparent pricing.<br />Reserva online en minutos.
            </p>
          </div>
          {/* Service list */}
          <div className="border-t" style={{ borderColor: RULE }}>
            {lashServices.map((svc) => (
              <ServiceRow key={svc.name} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BROW SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ background: BG2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3" style={{ color: ACCENT }}>
                02 &nbsp;&mdash;&nbsp; Cejas
              </p>
              <h2
                className="font-display text-5xl md:text-6xl font-bold leading-none"
                style={{ color: T1 }}
              >
                Brow Services
              </h2>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: RULE }}>
            {browServices.map((svc) => (
              <ServiceRow key={svc.name} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ background: BG1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3" style={{ color: ACCENT }}>
              03 &nbsp;&mdash;&nbsp; Extras
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-bold leading-none"
              style={{ color: T1 }}
            >
              Add-Ons
            </h2>
          </div>
          <div className="border-t" style={{ borderColor: RULE }}>
            {addOnServices.map((svc) => (
              <ServiceRow key={svc.name} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET EMELY ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-32" style={{ background: BG3 }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Story — left */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-5" style={{ color: ACCENT }}>
                Sobre m&iacute; &nbsp;&mdash;&nbsp; Meet Your Artist
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold mb-7 leading-[1.02]"
                style={{ color: T1 }}
              >
                Hola,<br />soy Emely. ✨
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: T2 }}>
                I&rsquo;m a certified brow and lash artist based in Tampa, FL. Every set I create is tailored to your eye shape, your lifestyle, and the look you&rsquo;ve always envisioned &mdash; from subtle classics to full mega volume.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T2 }}>
                My home studio is private, clean, and designed for you to feel completely at ease. I work with English and Spanish-speaking clients &mdash; porque tu belleza merece la mejor atenci&oacute;n.
              </p>
              <div className="pl-5 mb-9 border-l-2" style={{ borderColor: ACCENT }}>
                <p className="text-sm italic leading-relaxed" style={{ color: ACCENT }}>
                  &ldquo;I&rsquo;m so happy to give you the best services and the best attention.&rdquo;
                </p>
                <p className="text-xs mt-2 tracking-wider" style={{ color: T2 }}>
                  &mdash; Emely, XOXO
                </p>
              </div>
              <a
                href={BOOKING_URL}
                className="inline-block px-10 py-4 text-sm font-bold tracking-[0.18em] uppercase text-white hover:opacity-85 transition-opacity"
                style={{ background: ACCENT }}
              >
                Reservar con Emely &rarr;
              </a>
            </div>

            {/* Photo — right */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=900&q=80"
                alt="Emely — Emii Beauty artist Tampa"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(26,18,16,0.70) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-xl font-bold" style={{ color: T1 }}>Emely</p>
                <p className="text-xs tracking-[0.2em] uppercase mt-0.5" style={{ color: ACCENT }}>
                  Certified Brow &amp; Lash Artist &middot; Tampa, FL
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ background: BG2 }}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-2 mb-5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold tracking-wider" style={{ color: T2 }}>Google Reviews</span>
            </div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4" style={{ color: ACCENT }}>
              Lo que dicen las clientas
            </p>
            <div className="flex justify-center items-baseline gap-4 mb-2">
              <span className="font-display text-7xl font-bold leading-none" style={{ color: T1 }}>5.0</span>
              <div className="flex gap-0.5 pb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: ACCENT }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm" style={{ color: T2 }}>Based on 50+ reviews</p>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="p-8" style={{ background: BG3, border: `1px solid ${RULE}` }}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: ACCENT }}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="font-display text-lg leading-relaxed mb-6" style={{ color: T1 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-sm font-semibold" style={{ color: T2 }}>— {r.author}</p>
                <p className="text-xs mt-0.5" style={{ color: ACCENT }}>{r.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BOOKING CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-10" style={{ background: ACCENT }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-5"
              style={{ color: "rgba(10,10,10,0.55)" }}
            >
              Reserva tu cita &nbsp;&mdash;&nbsp; Book Your Appointment
            </p>
            <h2
              className="font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9]"
              style={{ color: BG1 }}
            >
              Ready for<br />your dream<br />set?
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm max-w-xs md:text-right leading-relaxed" style={{ color: "rgba(10,10,10,0.60)" }}>
              &iquest;Lista para reservar?<br />
              $25 deposit required to confirm.<br />
              Book directly through Square.
            </p>
            <a
              href={BOOKING_URL}
              className="px-10 py-4 text-sm font-bold tracking-[0.18em] uppercase border-2 transition-opacity hover:opacity-80"
              style={{ borderColor: BG1, color: BG1 }}
            >
              Reservar / Book Now &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ───────────────────────────────────────────────────── */}
      <section className="py-14 px-6 md:px-10 border-t" style={{ background: BG1, borderColor: RULE }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p
              className="font-display text-xl font-semibold tracking-wider"
              style={{ color: T1 }}
            >
              @{INSTAGRAM_HANDLE}
            </p>
            <a
              href={INSTAGRAM_URL}
              className="text-xs font-bold tracking-[0.18em] uppercase hover:opacity-60 transition-opacity"
              style={{ color: ACCENT }}
            >
              Follow &rarr;
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover brightness-90 hover:brightness-110 transition-[filter] duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ─────────────────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-28 px-6 md:px-10 border-t" style={{ background: BG2, borderColor: RULE }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-5" style={{ color: ACCENT }}>
              Vis&iacute;tanos &nbsp;&mdash;&nbsp; Visit
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight"
              style={{ color: T1 }}
            >
              Find us<br />in Tampa
            </h2>
            <div className="space-y-7">
              <div className="border-t pt-6" style={{ borderColor: RULE }}>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: ACCENT }}>
                  Direcci&oacute;n / Address
                </p>
                <p className="text-sm leading-relaxed" style={{ color: T2 }}>
                  5848 Langston Dr<br />Tampa, FL 33619<br />
                  <span className="text-xs" style={{ color: "rgba(245,235,224,0.30)" }}>
                    Home-Based Studio &middot; Estudio Privado
                  </span>
                </p>
              </div>
              <div className="border-t pt-6" style={{ borderColor: RULE }}>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-3" style={{ color: ACCENT }}>
                  Horario / Hours
                </p>
                <table className="text-sm w-full max-w-xs" style={{ color: T2 }}>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-2 pr-8">Martes &ndash; Viernes</td>
                      <td className="py-2 text-right" style={{ color: T1 }}>By Appointment</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-2 pr-8">S&aacute;bado</td>
                      <td className="py-2 text-right" style={{ color: T1 }}>By Appointment</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-8">Dom &ndash; Lunes</td>
                      <td className="py-2 text-right">Cerrado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-t pt-6" style={{ borderColor: RULE }}>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: ACCENT }}>
                  Contacto
                </p>
                <a
                  href={INSTAGRAM_URL}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: T2 }}
                >
                  @{INSTAGRAM_HANDLE}
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={BOOKING_URL}
                  className="px-7 py-3 text-xs font-bold tracking-[0.18em] uppercase text-white hover:opacity-80 transition-opacity"
                  style={{ background: ACCENT }}
                >
                  Book Online
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-7 py-3 border text-xs font-bold tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
                  style={{ borderColor: "rgba(245,235,224,0.25)", color: T2 }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Visit photo */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80"
              alt="Emii Beauty Tampa studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover brightness-75"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer className="py-12 px-6 md:px-10 border-t" style={{ background: BG1, borderColor: RULE }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-10">
          <div>
            <p
              className="font-display text-2xl font-bold tracking-widest uppercase mb-2"
              style={{ color: T1 }}
            >
              {BUSINESS_NAME}
            </p>
            <p className="text-xs tracking-[0.15em] uppercase" style={{ color: T2 }}>{TAGLINE}</p>
            <p className="text-xs italic mt-2" style={{ color: ACCENT }}>
              Belleza sin l&iacute;mites &middot; Tampa, FL
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-3" style={{ color: ACCENT }}>
              Vis&iacute;tanos
            </p>
            <p className="text-sm leading-relaxed" style={{ color: T2 }}>
              5848 Langston Dr<br />
              Tampa, FL 33619<br />
              <span className="text-xs" style={{ color: "rgba(245,235,224,0.30)" }}>Home-Based Studio</span>
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-3" style={{ color: ACCENT }}>
              S&iacute;guenos
            </p>
            <a href={INSTAGRAM_URL} className="text-sm block hover:opacity-70 transition-opacity" style={{ color: T2 }}>
              Instagram @{INSTAGRAM_HANDLE}
            </a>
            <a href={BOOKING_URL} className="text-sm block mt-1 hover:opacity-70 transition-opacity" style={{ color: T2 }}>
              Book Online &mdash; Square
            </a>
          </div>
        </div>

        <div className="border-t pt-6 text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2" style={{ borderColor: RULE, color: "rgba(245,235,224,0.20)" }}>
          <span>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME} &middot; Concept mockup by{" "}
            <a href="https://thryveops.com" className="hover:opacity-70 transition-opacity">
              Thryve Operations
            </a>
          </span>
          <Link href="/" className="hover:opacity-70 transition-opacity underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
