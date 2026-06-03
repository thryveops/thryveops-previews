import Image from "next/image";
import Link from "next/link";

// ─── BUSINESS IDENTITY ────────────────────────────────────────────────────────
// Fonts (Fraunces + Inter) and Vercel Analytics are loaded globally via layout.tsx.
// No imports needed here. Use className="font-display" for serif headings.

const BUSINESS_NAME    = "Shaila's Pet Grooming & Spa";
const TAGLINE          = "Boutique, cage-free, 1:1 pet grooming in East Tampa";
const NEIGHBORHOOD     = "East Tampa";
const YEAR_FOUNDED     = "Est. Tampa FL";

// ─── BRAND PALETTE ────────────────────────────────────────────────────────────
// Soft lavender-purple + coral-pink + warm white — matches Shaila's IG aesthetic
const PAPER      = "#FDFCFB";   // warm off-white page background
const PAPER_ALT  = "#FAF7FF";   // soft lavender-tinted section bg
const PAPER_BLUSH = "#FFF5F8";  // blush-tinted section bg
const INK        = "#1E1A2E";   // deep navy-violet body text
const ACCENT     = "#7B61FF";   // soft purple — primary CTA
const ACCENT2    = "#FF6B9D";   // coral-pink — secondary accent
const MUTED      = "#7A7090";   // muted purple-gray
const RULE       = "#EDE8F5";   // soft lavender rule

// ─── CONTACT & LINKS ─────────────────────────────────────────────────────────
const PHONE_FORMATTED  = "(787) 235-5163";
const PHONE_RAW        = "7872355163";
const ADDRESS_LINE_1   = "3315 S 74th St";
const ADDRESS_LINE_2   = "Tampa, FL 33619";
const DIRECTIONS_URL   = "https://maps.google.com/?q=3315+S+74th+St+Tampa+FL+33619";
const INSTAGRAM_HANDLE = "shailaspetgrooming";
const FACEBOOK_HANDLE  = "shailaspetgroomingandspa";
const AVG_RATING       = "5.0";
const REVIEW_COUNT     = "41";

// ─── PAGE METADATA ────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — Boutique No-Cage Pet Grooming | Tampa, FL`,
  description:
    "Shaila's Pet Grooming & Spa offers 1:1 cage-free dog and cat grooming in East Tampa. 5.0 stars · 41 Google reviews. Specializing in anxious, senior, and puppy pets. Call (787) 235-5163.",
};

// ─── SERVICES + PRICING ──────────────────────────────────────────────────────
const services = [
  {
    name: "Bath & Blow-Dry",
    desc: "Shampoo + conditioner + brush out + blow-dry. Leaves coats clean, fluffy, and smelling amazing.",
    prices: { small: "$40+", medium: "$55+", large: "$75+" },
  },
  {
    name: "Full Groom",
    desc: "Bath + breed-specific cut + nail trim + ear cleaning + bandana. Everything your pup needs in one visit.",
    prices: { small: "$65+", medium: "$85+", large: "$110+" },
    featured: true,
  },
  {
    name: "Deshedding Treatment",
    desc: "Deep blow-out + deshedding shampoo + intensive brush. Reduces shedding by 80%+ — your couch will thank you.",
    prices: { small: "$55+", medium: "$75+", large: "$100+" },
  },
  {
    name: "Puppy First Groom",
    desc: "Gentle intro experience — bath, nails, brush out. No scissors until your puppy is comfortable. Sets the tone for a lifetime of easy grooming.",
    prices: { small: "$45+", medium: "$55+", large: "$65+" },
  },
  {
    name: "Nail Trim",
    desc: "Clip + file. Available standalone or as an add-on to any service.",
    prices: { small: "$15", medium: "$15", large: "$20" },
  },
  {
    name: "Ear Cleaning",
    desc: "Gentle cleaning and inspection. Add-on or standalone — important for floppy-eared breeds.",
    prices: { small: "$12", medium: "$12", large: "$15" },
  },
  {
    name: "Custom Pet Dye",
    desc: "Pet-safe, non-toxic color — vibrant and fun. Requires a short consultation before booking.",
    prices: null,
    custom: "By consultation",
  },
  {
    name: "Boarding & Daycare",
    desc: "Daily or overnight care in a calm, home-like environment. One pet at a time — the same 1:1 care you trust for grooming.",
    prices: null,
    custom: "Call for rates",
  },
];

// ─── REVIEWS ─────────────────────────────────────────────────────────────────
const reviews = [
  {
    text: "My golden has thick fur and gets matted easily. Shaila was so patient and thorough — best groom he's ever had. He came out fluffy, calm, and actually happy. We're not going anywhere else.",
    author: "Maria R., Tampa FL",
  },
  {
    text: "I've tried four groomers for my rescue and he would shake and refuse to go in. Shaila took it slow, talked to him the whole time, and he actually fell asleep mid-groom. I literally cried. Thank you so much.",
    author: "Carlos M., Brandon FL",
  },
  {
    text: "My 14-year-old Chihuahua mix needs gentle handling and Shaila delivers every time. She remembers his preferences, checks in throughout, and he's always so clean and relaxed after. Highly recommend for senior pets.",
    author: "Jennifer L., Tampa FL",
  },
];

// ─── GALLERY PHOTOS ──────────────────────────────────────────────────────────
// All URLs verified 200 OK as of 2026-06-02
const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    alt: "Freshly groomed golden retriever, happy and fluffy",
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    alt: "Two happy dogs running together after grooming",
  },
  {
    src: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=600&q=80",
    alt: "Freshly groomed poodle portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&q=80",
    alt: "Cute dog relaxing after a spa groom",
  },
  {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80",
    alt: "Fluffy dog portrait after professional grooming",
  },
  {
    src: "https://images.unsplash.com/photo-1608096299210-db7e38487075?w=600&q=80",
    alt: "Calm cat after grooming session",
  },
];

// ─── INSTAGRAM GRID ──────────────────────────────────────────────────────────
// Reuses gallery photos — represents what her IG feed looks like
const igPhotos = [
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
  "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&q=80",
  "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=80",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80",
  "https://images.unsplash.com/photo-1608096299210-db7e38487075?w=400&q=80",
];

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── STICKY NAV ── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(253,252,251,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-lg md:text-xl font-bold tracking-tight"
            style={{ color: ACCENT }}
          >
            Shaila&rsquo;s Pet Grooming &amp; Spa
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium" style={{ color: INK }}>
            <a href="#services" className="hover:opacity-70 transition">Services</a>
            <a href="#gallery"  className="hover:opacity-70 transition">Gallery</a>
            <a href="#about"    className="hover:opacity-70 transition">About Shaila</a>
            <a href="#reviews"  className="hover:opacity-70 transition">Reviews</a>
            <a href="#visit"    className="hover:opacity-70 transition">Visit</a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Book button */}
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
      <section className="relative min-h-[88vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1800&q=85"
          alt="Happy, freshly groomed golden retriever at a pet spa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Purple-to-pink gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(30,10,60,0.72) 0%, rgba(123,97,255,0.45) 50%, rgba(255,107,157,0.35) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
          {/* No-cage badge */}
          <span
            className="inline-block text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, #7B61FF 0%, #FF6B9D 100%)",
            }}
          >
            No Cages &nbsp;&middot;&nbsp; 1:1 Private Sessions &nbsp;&middot;&nbsp; Tampa FL
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.06] mb-5">
            Your fur baby deserves
            <br />
            <span className="italic font-normal" style={{ color: "#FFDEE9" }}>
              a spa day, not a kennel.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Boutique, cage-free grooming in a calm private studio — for every dog and cat,
            especially the anxious ones. Serving East Tampa since day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-9 py-4 rounded-full font-semibold text-base text-white transition hover:brightness-90"
              style={{ background: ACCENT2 }}
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="bg-white/15 border border-white/40 backdrop-blur px-9 py-4 rounded-full font-semibold text-base hover:bg-white/25 transition"
            >
              See Services &amp; Pricing
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-lg" style={{ color: "#FFB800" }}>★★★★★</span>
              <span>5.0 Google rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div>41 five-star reviews</div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div>No cage, no rush, no stress</div>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS STRIP ── */}
      <section style={{ background: PAPER_ALT }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="font-semibold text-base mb-2">Private, Cage-Free Studio</h3>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              One pet at a time. No boarding kennels, no chaos. Your fur baby has Shaila&rsquo;s
              full attention from start to finish.
            </p>
          </div>
          <div
            className="text-center p-6 border-y sm:border-y-0 sm:border-x"
            style={{ borderColor: RULE }}
          >
            <div className="text-3xl mb-3">💜</div>
            <h3 className="font-semibold text-base mb-2">Specialists in Anxious Pets</h3>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Slow, gentle, and patient. If your pet has had bad experiences at other salons,
              Shaila&rsquo;s is where they finally feel safe.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-semibold text-base mb-2">Full Spa Menu — Dogs &amp; Cats</h3>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Bath, cut, nails, ears, deshedding, puppy intro grooms, custom pet dye — everything
              your pet needs under one caring roof.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES + PRICING ── */}
      <section id="services" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-3"
              style={{ color: ACCENT2 }}
            >
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Services &amp; Pricing
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: MUTED }}>
              All services are one-on-one with Shaila. Pricing varies by breed coat type and
              size — exact quote confirmed at booking.
            </p>
          </div>

          {/* Column header */}
          <div
            className="grid grid-cols-4 gap-2 text-xs font-semibold uppercase tracking-wider mb-2 px-4 md:px-6"
            style={{ color: MUTED }}
          >
            <div>Service</div>
            <div className="text-center">Small</div>
            <div className="text-center">Medium</div>
            <div className="text-center">Large+</div>
          </div>

          {/* Pricing rows */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: RULE }}
          >
            {services.map((svc, i) => {
              const isAlt = i % 2 === 1;
              return (
                <div
                  key={svc.name}
                  className={`grid grid-cols-4 gap-2 px-4 md:px-6 py-4 ${i < services.length - 1 ? "border-b" : ""}`}
                  style={{
                    borderColor: RULE,
                    background: isAlt ? PAPER_BLUSH : undefined,
                  }}
                >
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={svc.featured ? { color: ACCENT } : undefined}
                    >
                      {svc.name}
                      {svc.featured && (
                        <span
                          className="ml-2 text-xs font-normal px-2 py-0.5 rounded-full"
                          style={{ background: PAPER_ALT, color: ACCENT }}
                        >
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: MUTED }}>
                      {svc.desc}
                    </div>
                  </div>

                  {svc.prices ? (
                    <>
                      <div
                        className="text-center text-sm font-medium self-center"
                        style={{ color: INK }}
                      >
                        {svc.prices.small}
                      </div>
                      <div
                        className="text-center text-sm font-medium self-center"
                        style={{ color: INK }}
                      >
                        {svc.prices.medium}
                      </div>
                      <div
                        className="text-center text-sm font-medium self-center"
                        style={{ color: INK }}
                      >
                        {svc.prices.large}
                      </div>
                    </>
                  ) : (
                    <div
                      className="col-span-3 text-center text-sm font-medium self-center"
                      style={{ color: ACCENT }}
                    >
                      {svc.custom}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm mb-5" style={{ color: MUTED }}>
              Prices may vary for matted, double-coated, or senior pets. All pricing confirmed at booking.
            </p>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-block px-9 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Call to Book — {PHONE_FORMATTED}
            </a>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER GALLERY ── */}
      <section
        id="gallery"
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ background: PAPER_ALT }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-3"
              style={{ color: ACCENT2 }}
            >
              Before &amp; After
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Happy, fluffy clients
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl group ${i === 1 ? "md:row-span-2" : ""}`}
                style={{ minHeight: i === 1 ? "280px" : undefined }}
              >
                <div className={i === 1 ? "relative h-full min-h-[280px]" : "relative aspect-square"}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={
                      i === 1
                        ? "(max-width: 768px) 50vw, 33vw"
                        : "(max-width: 768px) 50vw, 33vw"
                    }
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px] transition hover:text-white"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              See More on Instagram @{INSTAGRAM_HANDLE} →
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT SHAILA ── */}
      <section id="about" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-3"
              style={{ color: ACCENT2 }}
            >
              Meet Your Groomer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I&rsquo;m Shaila.
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: MUTED }}
            >
              I treat every pet like family and focus on making grooming a calm, positive
              experience. I started Shaila&rsquo;s Pet Grooming &amp; Spa because I believe every
              dog and cat deserves one-on-one attention — not a conveyor belt.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: MUTED }}
            >
              My studio is cage-free and appointment-only. That means no barking kennels, no
              waiting around, no rush. Your pet has my full attention for the entire session. If
              they&rsquo;ve had a stressful time at a salon before, I&rsquo;ll take it slow — I
              specialize in anxious pets, seniors, and puppies who need a gentler touch.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: MUTED }}
            >
              I&rsquo;m based in East Tampa on S&nbsp;74th&nbsp;St, and I serve clients from
              Brandon, Riverview, and all across the Tampa Bay area. Every single review I&rsquo;ve
              ever received is five stars — and that means the world to me.
            </p>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-block px-8 py-3 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book with Shaila
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900&q=80"
                  alt="Pet groomer tenderly holding a happy dog"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating testimonial badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 max-w-[220px]">
                <div className="text-base mb-1" style={{ color: "#FFB800" }}>★★★★★</div>
                <p className="text-xs leading-snug" style={{ color: INK }}>
                  &ldquo;My anxious rescue finally had a grooming experience that
                  didn&rsquo;t traumatize him. Shaila is a miracle worker.&rdquo;
                </p>
                <p className="text-xs mt-2" style={{ color: MUTED }}>— Tampa Google review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES CALLOUT ── */}
      <section
        className="py-16 px-5 md:px-8"
        style={{
          background:
            "linear-gradient(135deg, #7B61FF 0%, #9F85FF 50%, #FF6B9D 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Does your pet get anxious at the groomer?
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
            Shaila specializes in pets who&rsquo;ve had bad experiences. No loud salons, no
            cages, no strangers rushing around them — just calm, 1:1 care.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {[
              "Anxious & reactive pets",
              "Senior dogs & cats",
              "Puppy first groom",
              "Double-coated breeds",
              "Special needs pets",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/20 border border-white/30 px-5 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-block bg-white font-semibold px-9 py-4 rounded-full text-base transition hover:brightness-95"
            style={{ color: ACCENT }}
          >
            Book a Calm Groom — {PHONE_FORMATTED}
          </a>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section
        id="reviews"
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ background: PAPER_ALT }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-3"
              style={{ color: ACCENT2 }}
            >
              What Tampa Pet Parents Say
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p style={{ color: MUTED }}>{REVIEW_COUNT} five-star reviews — every single one</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="bg-white rounded-2xl p-6 border transition"
                style={{ borderColor: RULE }}
              >
                <div className="text-lg mb-3" style={{ color: "#FFB800" }}>
                  ★★★★★
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: INK }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-xs" style={{ color: MUTED }}>
                  — {r.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/Shaila%27s+Pet+Grooming+Spa+Tampa"
              className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px] transition"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Read All {REVIEW_COUNT} Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── VISIT + BOOKING ── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p
              className="text-sm tracking-[0.3em] uppercase mb-3"
              style={{ color: ACCENT2 }}
            >
              Find Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Visit the Studio
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1" style={{ color: INK }}>Address</h4>
                <p style={{ color: MUTED }}>
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </p>
                <p className="text-sm mt-1" style={{ color: MUTED }}>
                  East Tampa &middot; Clair-Mel area
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2" style={{ color: INK }}>Hours</h4>
                <table className="text-sm" style={{ color: MUTED }}>
                  <tbody>
                    <tr>
                      <td className="pr-6 py-1">Monday – Friday</td>
                      <td>9:00 AM – 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-1">Saturday</td>
                      <td>9:00 AM – 4:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-1">Sunday</td>
                      <td>By appointment only</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs mt-2" style={{ color: ACCENT }}>
                  All appointments — call or text to schedule
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1" style={{ color: INK }}>Contact</h4>
                <p style={{ color: MUTED }}>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="hover:underline"
                    style={{ color: ACCENT }}
                  >
                    {PHONE_FORMATTED}
                  </a>
                  {" "}— call or text
                  <br />
                  <a
                    href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                    className="hover:underline"
                    style={{ color: ACCENT2 }}
                  >
                    @{INSTAGRAM_HANDLE}
                  </a>
                  {" "}on Instagram
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="px-7 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Call / Text to Book
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-7 py-3 rounded-full text-sm font-semibold border-[1.5px] transition hover:opacity-70"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Salon interior photo */}
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "320px" }}>
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80"
              alt="Warm pet grooming salon interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-20 md:py-28 px-5 md:px-8 text-white text-center"
        style={{ background: INK }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Ready to book your fur baby&rsquo;s spa day?
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-lg mx-auto">
            Private, cage-free, 1:1 grooming with Tampa&rsquo;s most trusted boutique groomer.
            Call or text to schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-9 py-4 rounded-full font-semibold text-base text-white transition hover:brightness-90"
              style={{ background: ACCENT2 }}
            >
              Call {PHONE_FORMATTED}
            </a>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="bg-white/10 border border-white/25 px-9 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition"
            >
              DM on Instagram
            </a>
          </div>
          <p className="mt-10 text-sm text-white/50">
            {ADDRESS_LINE_1} &middot; {ADDRESS_LINE_2} &middot; @{INSTAGRAM_HANDLE}
          </p>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ── */}
      <section
        className="py-12 px-5 md:px-8 border-t"
        style={{ background: PAPER_BLUSH, borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-display text-2xl font-semibold">@{INSTAGRAM_HANDLE}</p>
              <p className="text-sm" style={{ color: MUTED }}>
                Before &amp; afters · happy clients · spa moments
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
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-12 px-5 md:px-8 text-sm"
        style={{ background: "#120E1E", color: "rgba(255,255,255,0.55)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-xl font-bold text-white mb-2">
              {BUSINESS_NAME}
            </p>
            <p className="text-sm leading-relaxed">
              Boutique, cage-free, 1:1 pet grooming.
              <br />
              East Tampa&rsquo;s kindest hands in the business.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="leading-loose">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
              <br />
              <a
                href={`tel:${PHONE_RAW}`}
                className="hover:text-white transition"
              >
                {PHONE_FORMATTED}
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow &amp; Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                className="hover:text-white transition"
              >
                Instagram — @{INSTAGRAM_HANDLE}
              </a>
              <a
                href={`https://facebook.com/${FACEBOOK_HANDLE}`}
                className="hover:text-white transition"
              >
                Facebook — @{FACEBOOK_HANDLE}
              </a>
              <a
                href="https://nextdoor.com/pages/shailas-pet-grooming-spa/"
                className="hover:text-white transition"
              >
                Nextdoor — Shaila&rsquo;s Pet Grooming &amp; Spa
              </a>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <span>
            © {new Date().getFullYear()} {BUSINESS_NAME}. Concept mockup by Thryve Operations.
          </span>
          <Link href="/" className="hover:text-white/80 underline-offset-4">
            ← All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
