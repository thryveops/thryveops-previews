import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nautical Marine — Tampa Bay's #1 Outboard Repower & Service Center",
  description:
    "30+ years of marine expertise in North Tampa. Outboard repowers, engine repair, fiberglass, marine electronics, and full boat restoration. 4.9★ on Google.",
};

// ─── Brand constants ────────────────────────────────────────────────────────
const NAVY      = "#0B3D6E";
const NAVY_DARK = "#072A4E";
const NAVY_LIGHT = "#E0EAF4";
const BRASS     = "#C9A84C";
const PAPER     = "#F8F9FC";
const INK       = "#1A1A2E";
const MUTED     = "#6B7280";
const RULE      = "#DDE3EB";

// ─── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke={NAVY} strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    name: "Outboard Repower",
    badge: "Most Popular",
    desc: "Full outboard engine replacement — Suzuki, Mercury, Yamaha, Honda, Tohatsu. We handle the pull, mount, wiring, and water-test. Starting from $4,500 installed.",
    cta: "Get a Repower Quote",
    href: "#quote",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke={NAVY} strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    name: "Engine Repair & Diagnostics",
    badge: null,
    desc: "Inboard, outboard, two-stroke, four-stroke, Mercruiser, and I/O. Factory-trained technicians with 20+ years experience and the latest diagnostic equipment.",
    cta: "Schedule Diagnostic",
    href: "#quote",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke={NAVY} strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    name: "Marine Electronics & Rigging",
    badge: null,
    desc: "Chartplotter install, trolling motor sales and rigging, marine audio, custom dashboards, and full electrical rewiring. Same-day installs available.",
    cta: "Get Electronics Quote",
    href: "#quote",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke={NAVY} strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    name: "Fiberglass & Gelcoat Repair",
    badge: null,
    desc: "Structural fiberglass repairs, gelcoat restoration, custom color matching, striping, and bottom paint. From minor dings to major hull damage.",
    cta: "Get Repair Estimate",
    href: "#quote",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke={NAVY} strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    name: "Marine Upholstery",
    badge: null,
    desc: "Factory-look replacement or full custom upholstery — seats, cushions, and covers. 20+ years of precision marine upholstery work on Tampa Bay boats.",
    cta: "Get Upholstery Quote",
    href: "#quote",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke={NAVY} strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/>
        <path d="M1 17H0V9l3-4h13l3 4v4h1"/>
        <path d="M8 17h8"/>
      </svg>
    ),
    name: "Boat Trailer Repair",
    badge: null,
    desc: "Steel and aluminum welding, wiring, custom rollers and guides, painting, and structural repairs. Free safety inspections with every service visit.",
    cta: "Call to Schedule",
    href: "tel:8138862084",
  },
];

const REVIEWS = [
  {
    quote:
      "These guys conducted a pre-purchase inspection on a boat I was about to buy and discovered that the boat had previously sunk. They literally saved me from a nightmare purchase. Incredibly thorough and honest.",
    author: "Matthew Murriello",
    note: "Google Review · Verified Customer",
  },
  {
    quote:
      "Frankie made buying a new Suzuki smooth and easy — very knowledgeable, helpful, and caring. Got my boat in and installed all my electronics and trolling motor same day. Frank and Frankie is a great duo.",
    author: "Bob G. & Robert R.",
    note: "Google Reviews · Verified Customers",
  },
  {
    quote:
      "In today's world you don't often see the quality put forth like Frank and his crew performed. Customer service like this does not exist at most places. They come highly recommended by other boat owners, and for good reason.",
    author: "Perry Colon & Justin Foster",
    note: "Google Reviews · Verified Customers",
  },
];

const GALLERY_PHOTOS = [
  { id: "1605281317010-fe5ffe798166", alt: "Outboard engine service" },
  { id: "1571019613454-1cb2f99b2d8b", alt: "Boat on Tampa Bay water" },
  { id: "1540946485063-a40da27545f8", alt: "Motorboat on open water" },
  { id: "1501612780327-45045538702b", alt: "Marine electronics installation" },
  { id: "1559827260-dc66d52bef19", alt: "Marine mechanic at work" },
  { id: "1558618666-fcd25c85cd64", alt: "Boat hull fiberglass work" },
];

const BRANDS = ["Suzuki", "Yamaha", "Mercury", "Honda", "Tohatsu", "Mercruiser"];

// ─── Component ──────────────────────────────────────────────────────────────
export default function NauticalMarinePage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)", color: INK, background: PAPER }}>

      {/* CSS for animations and hover effects */}
      <style>{`
        @keyframes wave-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .nm-wave { animation: wave-float 4s ease-in-out infinite; }

        .nm-svc {
          border-left: 4px solid transparent;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .nm-svc:hover {
          border-left-color: ${BRASS};
          box-shadow: 0 8px 32px rgba(11,61,110,0.10);
          transform: translateY(-2px);
        }

        .nm-review {
          border: 1px solid rgba(255,255,255,0.12);
          transition: border-color 0.2s;
        }
        .nm-review:hover { border-color: rgba(201,168,76,0.5); }

        .nm-gallery img { transition: transform 0.5s; }
        .nm-gallery:hover img { transform: scale(1.06); }

        .nm-rope::before,
        .nm-rope::after {
          content: '';
          flex: 1;
          height: 1px;
          background: ${BRASS};
          opacity: 0.5;
        }
      `}</style>

      {/* ── STICKY NAV ──────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 bg-white border-b"
        style={{ borderColor: RULE, boxShadow: `0 1px 0 ${RULE}` }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: NAVY }}
            >
              <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="3"/>
                <line x1="12" y1="22" x2="12" y2="8"/>
                <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-lg leading-none block" style={{ color: NAVY }}>
                Nautical Marine
              </span>
              <span className="text-xs font-medium leading-none" style={{ color: BRASS }}>
                Tampa Bay&apos;s #1 Repower Center
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Reviews", href: "#reviews" },
              { label: "Visit", href: "#visit" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {l.label}
              </Link>
            ))}
            <Link
              href="tel:8138862084"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white"
              style={{ background: NAVY }}
            >
              Call (813) 886-2084
            </Link>
          </div>

          {/* Mobile CTA */}
          <Link
            href="tel:8138862084"
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: NAVY }}
          >
            Call Now
          </Link>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ minHeight: "90vh" }}>
        <Image
          src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1800&q=85"
          alt="Boat on Tampa Bay"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, rgba(7,42,78,0.55) 0%, rgba(7,42,78,0.75) 60%, rgba(7,42,78,0.92) 100%)` }}
        />

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto py-32">
          <p className="text-sm tracking-[0.35em] uppercase mb-5 font-medium" style={{ color: BRASS }}>
            North Tampa &nbsp;·&nbsp; 7211 N 41st St &nbsp;·&nbsp; Est. 30+ Years
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tampa Bay&apos;s Most<br />Trusted Marine Shop
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            Outboard repowers, engine repair, fiberglass, electronics, and full boat restoration — from a team with over 30 years on Tampa Bay.
          </p>
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-yellow-400 text-xl tracking-tight">★★★★★</span>
            <span className="font-semibold">4.9</span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>· 164+ Google reviews</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#quote"
              className="px-10 py-4 rounded-full font-bold text-base"
              style={{ background: BRASS, color: NAVY_DARK }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="#services"
              className="px-10 py-4 rounded-full font-semibold text-base border-2 border-white text-white hover:bg-white"
              style={{ transition: "background 0.2s, color 0.2s" }}
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 nm-wave" style={{ color: "rgba(255,255,255,0.5)" }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────────── */}
      <div style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: "4.9★", label: "164+ Google Reviews" },
              { value: "30+",  label: "Years Serving Tampa Bay" },
              { value: "6",    label: "Engine Brands Serviced" },
              { value: "#1",   label: "Rated Repower Center" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold" style={{ color: BRASS }}>{s.value}</p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="nm-rope flex items-center justify-center gap-3 mb-3">
              <span className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: BRASS }}>What We Do</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight" style={{ color: NAVY }}>
              Full-Service Marine Care
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
              From a quick engine tune-up to a complete outboard repower — one shop, every service your boat needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.name} className="nm-svc bg-white rounded-xl p-7 cursor-default">
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: NAVY_LIGHT }}
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-display text-xl font-bold" style={{ color: NAVY }}>{svc.name}</h3>
                      {svc.badge && (
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: BRASS, color: NAVY_DARK }}
                        >
                          {svc.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <Link href={svc.href} className="text-sm font-semibold" style={{ color: NAVY }}>
                      {svc.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Brands strip */}
          <div className="mt-14 pt-10 border-t" style={{ borderColor: RULE }}>
            <p className="text-center text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-6">
              Brands We Service &amp; Sell
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
              {BRANDS.map((b, i) => (
                <span key={b} className="flex items-center gap-10">
                  <span className="font-display font-bold text-xl" style={{ color: NAVY }}>{b}</span>
                  {i < BRANDS.length - 1 && (
                    <span className="font-bold text-xl text-gray-300">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / STORY ───────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Photo side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=85"
                alt="Marine mechanic working on outboard engine"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-4 md:-right-8 rounded-xl p-5 shadow-xl"
              style={{ background: NAVY }}
            >
              <p className="font-display text-3xl font-bold text-white leading-none">30+</p>
              <p className="text-xs font-medium mt-1" style={{ color: BRASS }}>Years on Tampa Bay</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="nm-rope flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: BRASS }}>Our Story</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: NAVY }}>
              Built on Trust.<br />Proven on the Water.
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              For over 30 years, Nautical Marine has been the shop Tampa Bay boaters call when it matters most — not just for routine service, but for the jobs that require real expertise. Frank and his team have earned a reputation for honest estimates, fast turnarounds, and work that holds up on the water.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              We&apos;re a family-run operation at 7211 N 41st St in North Tampa. Our technicians are factory-trained on Suzuki outboards and carry decades of hands-on experience across every major marine engine brand. When you bring your boat here, you&apos;re not handing it to a chain — you&apos;re handing it to people who know this bay and take pride in what leaves the shop.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#quote"
                className="px-7 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: NAVY }}
              >
                Get a Free Quote
              </Link>
              <Link
                href="tel:8138862084"
                className="px-7 py-3 rounded-full text-sm font-semibold border-2"
                style={{ borderColor: NAVY, color: NAVY }}
              >
                Call (813) 886-2084
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8" style={{ background: NAVY_LIGHT }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-2" style={{ color: BRASS }}>Recent Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>From the Shop Floor</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_PHOTOS.map((p) => (
              <div key={p.id} className="nm-gallery rounded-xl overflow-hidden relative aspect-square">
                <Image
                  src={`https://images.unsplash.com/photo-${p.id}?w=600&q=80`}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="https://instagram.com/_nauticalmarine"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: NAVY }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              See more on Instagram @_nauticalmarine →
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-20 md:py-32 px-5 md:px-8" style={{ background: NAVY_DARK }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-3" style={{ color: BRASS }}>Tampa Bay Speaks</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">★★★★★ 4.9 on Google</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Based on 164+ verified Google reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <blockquote key={r.author} className="nm-review rounded-xl p-7">
                <p className="text-yellow-400 text-lg mb-4">★★★★★</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.9)" }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-semibold text-white text-sm">{r.author}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{r.note}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="https://www.google.com/maps/place/Nautical+Marine+Outboard+Repower+%26+Service+Center+of+Tampa+Bay"
              target="_blank"
              className="inline-block px-8 py-3 rounded-full text-sm font-bold"
              style={{ background: BRASS, color: NAVY_DARK }}
            >
              Read All 164 Reviews on Google →
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ──────────────────────────────────────────────────── */}
      <section id="quote" className="py-20 md:py-28 px-5 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="nm-rope flex items-center justify-center gap-3 mb-3">
              <span className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: BRASS }}>Get Started</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: NAVY }}>Get Your Free Quote</h2>
            <p className="text-gray-500 mt-4">Tell us about your boat — we&apos;ll get back to you within one business day.</p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="Captain John Smith"
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                  style={{ borderColor: RULE }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(813) 555-0000"
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                  style={{ borderColor: RULE }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                <select
                  className="w-full border rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none"
                  style={{ borderColor: RULE }}
                >
                  <option value="">Select a service...</option>
                  <option>Outboard Repower</option>
                  <option>Engine Repair / Diagnostics</option>
                  <option>Marine Electronics Install</option>
                  <option>Fiberglass / Gelcoat Repair</option>
                  <option>Boat Upholstery</option>
                  <option>Trailer Repair</option>
                  <option>Trolling Motor</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Engine Brand (if applicable)</label>
                <select
                  className="w-full border rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none"
                  style={{ borderColor: RULE }}
                >
                  <option value="">Select brand...</option>
                  <option>Suzuki</option>
                  <option>Yamaha</option>
                  <option>Mercury</option>
                  <option>Honda</option>
                  <option>Tohatsu</option>
                  <option>Mercruiser</option>
                  <option>Other</option>
                  <option>Not Sure</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Boat Type &amp; Length</label>
              <input
                type="text"
                placeholder="e.g. 22' center console, pontoon, flats boat..."
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                style={{ borderColor: RULE }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tell Us What&apos;s Going On</label>
              <textarea
                rows={4}
                placeholder="Describe the issue or service you need. Any additional context helps us give you the most accurate quote."
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none resize-none"
                style={{ borderColor: RULE }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full text-base font-bold text-white"
              style={{ background: NAVY }}
            >
              Submit Quote Request
            </button>
            <p className="text-center text-xs text-gray-400">
              Or call directly:{" "}
              <Link href="tel:8138862084" className="font-semibold" style={{ color: NAVY }}>
                (813) 886-2084
              </Link>{" "}
              · Mon–Fri 9AM–5PM
            </p>
          </form>
        </div>
      </section>

      {/* ── VISIT ───────────────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="nm-rope flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: BRASS }}>Find Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: NAVY }}>
              Visit the Shop
            </h2>

            <div className="space-y-7 text-base">
              <div>
                <h4 className="font-semibold mb-1" style={{ color: NAVY }}>Address</h4>
                <p className="text-gray-700">
                  7211 N 41st St<br />
                  Tampa, FL 33604<br />
                  <span className="text-sm text-gray-500">(North Tampa — off Busch Blvd)</span>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: NAVY }}>Hours</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr><td className="pr-8 py-1.5 font-medium text-gray-900">Monday – Friday</td><td>9:00 AM – 5:00 PM</td></tr>
                    <tr><td className="pr-8 py-1.5 font-medium text-gray-900">Saturday</td><td>By Appointment</td></tr>
                    <tr><td className="pr-8 py-1.5 font-medium text-gray-900">Sunday</td><td className="text-gray-400">Closed</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: NAVY }}>Reach Us</h4>
                <p className="text-gray-700">
                  <Link href="tel:8138862084" className="hover:underline font-medium">(813) 886-2084</Link><br />
                  <Link href="mailto:service@nauticalmarinestampa.com" className="hover:underline text-sm text-gray-500">
                    service@nauticalmarinestampa.com
                  </Link>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: NAVY }}>Financing Available</h4>
                <p className="text-gray-600 text-sm">Ask about financing options for repowers and major repairs.</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="https://goo.gl/maps/7nFd1yTyPj6M9DWv7"
                  target="_blank"
                  className="px-7 py-3 rounded-full text-sm font-semibold text-white"
                  style={{ background: NAVY }}
                >
                  Get Directions
                </Link>
                <Link
                  href="tel:8138862084"
                  className="px-7 py-3 rounded-full text-sm font-semibold border-2"
                  style={{ borderColor: NAVY, color: NAVY }}
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>

          {/* Visit photo */}
          <div className="rounded-2xl overflow-hidden relative" style={{ height: 440 }}>
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"
              alt="Tampa Bay waterfront"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ─────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold" style={{ color: NAVY }}>@_nauticalmarine</p>
            <Link
              href="https://instagram.com/_nauticalmarine"
              target="_blank"
              className="text-sm font-semibold hover:underline"
              style={{ color: BRASS }}
            >
              Follow on Instagram →
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {GALLERY_PHOTOS.map((p) => (
              <div key={`strip-${p.id}`} className="nm-gallery aspect-square rounded-lg overflow-hidden relative">
                <Image
                  src={`https://images.unsplash.com/photo-${p.id}?w=400&q=80`}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ──────────────────────────────────────────────── */}
      <section className="py-20 px-5 md:px-8 text-center" style={{ background: NAVY }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-4" style={{ color: BRASS }}>
            Ready to Get Back on the Water?
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Talk About Your Boat
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            30+ years of marine expertise, honest estimates, and fast turnarounds. Tampa Bay&apos;s most trusted shop is right here on N 41st St.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#quote"
              className="px-10 py-4 rounded-full font-bold text-base"
              style={{ background: BRASS, color: NAVY_DARK }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="tel:8138862084"
              className="px-10 py-4 rounded-full font-semibold text-base border-2 border-white text-white"
            >
              Call (813) 886-2084
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: NAVY_DARK, color: "rgba(255,255,255,0.6)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">Nautical Marine</p>
            <p className="text-sm mb-4">Tampa Bay&apos;s #1 Customer-Rated Outboard Repower &amp; Service Center</p>
            <div className="flex gap-4">
              <Link href="https://facebook.com/outboardrepowercentertampa" target="_blank" className="hover:text-white transition-colors">Facebook</Link>
              <Link href="https://instagram.com/_nauticalmarine" target="_blank" className="hover:text-white transition-colors">Instagram</Link>
              <Link href="https://tiktok.com/@outboardrepowertampabay" target="_blank" className="hover:text-white transition-colors">TikTok</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit the Shop</h4>
            <p>
              7211 N 41st St<br />
              Tampa, FL 33604<br />
              <Link href="tel:8138862084" className="hover:text-white transition-colors">(813) 886-2084</Link>
            </p>
            <p className="mt-3">Mon–Fri: 9:00 AM – 5:00 PM<br />Saturday: By Appointment<br />Sunday: Closed</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-1">
              {SERVICES.map((s) => (
                <li key={`footer-${s.name}`}>
                  <Link href="#services" className="hover:text-white transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="max-w-7xl mx-auto mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
        >
          <span>© 2026 Nautical Marine. All rights reserved.</span>
          <span>
            Mockup by{" "}
            <Link href="https://thryveops.com" className="hover:text-white/70 transition-colors">Thryve Operations</Link>
            {" "}· thryveops.com
          </span>
        </div>
      </footer>

    </div>
  );
}
