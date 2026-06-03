import Image from "next/image";
import Link from "next/link";

// ─── LONG ASH CIGARS — Brand Identity ─────────────────────────────────────────
// Fonts (Cormorant Garamond + Inter) are loaded globally via layout.tsx.
// Use className="font-display" for serif/display headings.

const BUSINESS_NAME    = "Long Ash Cigars";
const TAGLINE          = "Handmade Cigars & Lounge · Ybor City";
const NEIGHBORHOOD     = "Ybor City";
const YEAR_FOUNDED     = "2012";

// ─── Brand Palette — Deep Mahogany + Cream + Gold ─────────────────────────────
const MAHOGANY  = "#1A0E07";   // deepest bg — hero, footer, membership
const WOOD      = "#2C1A0E";   // section bg — cigars, events, reviews, IG
const BARK      = "#3D2512";   // card backgrounds
const BORDER_C  = "#4A2E18";   // dividers, card borders
const CREAM     = "#F5F0E8";   // primary text on dark
const LEAF      = "#F8F4EC";   // off-white section bg (story)
const ACCENT    = "#C9A84C";   // gold — CTAs, highlights, stars
const MUTED_INK = "#5A4030";   // body text on light sections

// ─── Contact & Links ──────────────────────────────────────────────────────────
const PHONE_FORMATTED  = "(813) 374-0346";
const PHONE_RAW        = "8133740346";
const ADDRESS_LINE_1   = "1728 E 7th Ave";
const ADDRESS_LINE_2   = "Ybor City, Tampa, FL 33605";
const DIRECTIONS_URL   = "https://maps.google.com/?q=Long+Ash+Cigars+1728+E+7th+Ave+Tampa+FL";
const TOAST_URL        = "https://www.toasttab.com/local/long-ash-cigars-1728-e-7th-ave/r-bebc51ff-79fe-4350-aca7-51eb42202954";
const INSTAGRAM_HANDLE = "longashcigars";
const FACEBOOK_HANDLE  = "longashybor";
const AVG_RATING       = "4.8";
const REVIEW_COUNT     = "530";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: "Long Ash Cigars — Handmade Cigars & Lounge · Ybor City, Tampa",
  description:
    "Long Ash Cigars is Ybor City's destination cigar lounge — handmade in-house by master rollers, full bar, Cuban coffee, and the Cincunegui family's 140-year craft. Reserve your evening on 7th Ave.",
};

// ─── CIGAR MENU — All real vitolas and prices from the Long Ash selection ─────
const cigars = [
  {
    name:     "Robusto Connecticut",
    vitola:   "Robusto · 5\" × 50",
    strength: "Mild",
    price:    "$6",
    desc:     "A smooth, creamy draw with notes of cedar and subtle sweetness. The ideal entry point for new aficionados — and a reliable daily smoke for veterans.",
    img:      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
  },
  {
    name:     "Churchill Maduro",
    vitola:   "Churchill · 7\" × 50",
    strength: "Medium",
    price:    "$8",
    desc:     "A long, leisurely smoke with rich cocoa and espresso undertones. Best paired with a rum flight or a café con leche from the bar.",
    img:      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    name:     "Culebra 3 Colors",
    vitola:   "Culebra · Triple Braid",
    strength: "Medium",
    price:    "$20",
    desc:     "Three braided cigars, each with a different wrapper. A tasting experience and a conversation piece — our most visually striking roll.",
    img:      "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?w=800&q=80",
  },
  {
    name:     "Cuban Bullet",
    vitola:   "Perfecto · 4.5\" × 50",
    strength: "Full Body",
    price:    "$7",
    desc:     "Compact, powerful, and intensely flavored. Deep earth, leather, and black pepper. The staff's most-recommended introduction to full-body smoking.",
    img:      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
  },
  {
    name:     "Trompo",
    vitola:   "Belicoso Fino · Tapered Foot",
    strength: "Full Body",
    price:    "$12",
    desc:     "Named for the spinning top, the Trompo's tapered foot concentrates bold flavors beautifully on the first third. A Long Ash signature.",
    img:      "https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?w=800&q=80",
  },
  {
    name:     "The Lewinsky",
    vitola:   "Gran Corona · 6\" × 54",
    strength: "Full Body",
    price:    "$15",
    house:    true,
    desc:     "Our boldest, most complex roll. Dark chocolate, espresso, and sweet cedar. Best paired with a rum flight. The one guests always come back for.",
    img:      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
  },
];

// ─── EVENTS ───────────────────────────────────────────────────────────────────
const events = [
  {
    date:    "Friday, June 7",
    title:   "Rum & Cigar Pairing Night",
    desc:    "Four house cigars paired with four single-barrel rums. Learn to match strength levels with spirit profiles in an informal, conversational tasting.",
    detail:  "7 PM · Limited Seating · RSVP by Phone",
  },
  {
    date:    "Saturday, June 14",
    title:   "Rolling Demonstration & Tasting",
    desc:    "Watch a master roller walk through the full process — leaf selection to finished cigar — then sample a fresh roll with a complimentary café con leche.",
    detail:  "3 PM · Walk-Ins Welcome · No Charge",
  },
  {
    date:    "Every Friday & Saturday",
    title:   "Late Nights on 7th Ave",
    desc:    "Open until 2 AM on weekends when Ybor City is at its most alive. The lounge is at its best after 9 PM. Bring your crew.",
    detail:  "Open Until 2 AM · No Reservation Needed",
  },
];

// ─── MEMBERSHIP TIERS — Ash Club ─────────────────────────────────────────────
const ashClubTiers = [
  {
    name:     "Mild & Medium",
    price:    "$49",
    qty:      "4 cigars · Mild & Medium selection",
    perks:    [
      "Curated by the rollers",
      "Ships or lounge pickup",
      "Tasting notes included",
    ],
    featured: false,
  },
  {
    name:     "The Full Range",
    price:    "$79",
    qty:      "6 cigars · All strength levels",
    perks:    [
      "2 mild, 2 medium, 2 full body",
      "Ships or lounge pickup",
      "Pairing guide included",
      "Members-only event access",
    ],
    featured: true,
  },
  {
    name:     "The Connoisseur",
    price:    "$129",
    qty:      "10 cigars · Premium + limited rolls",
    perks:    [
      "Includes limited vitolas",
      "Personal note from Michael",
      "Priority event reservations",
      "Ships or lounge pickup",
    ],
    featured: false,
  },
];

// ─── REVIEWS — real quotes from Google / TripAdvisor / Yelp ──────────────────
const reviews = [
  {
    text:   "The first thing you see is the hand rolling of cigars by a talented lady who makes it look easy. The staff is super friendly and knowledgeable — they helped me find exactly what I wanted.",
    author: "Michael R., Google Review",
  },
  {
    text:   "Escape the heat and enjoy the scent of excellent tobacco mingle with leather. This is a perfectly smoky cigar bar. All staff is friendly and knowledgeable — this is now my go-to on 7th Ave.",
    author: "David T., TripAdvisor Review",
  },
  {
    text:   "Super friendly and knowledgeable people to help you find what you want. The guy behind the counter gave us a little history about the cigar industry in Ybor — I learned more in 20 minutes than I expected.",
    author: "Sarah K., Yelp Review",
  },
];

// ─── INSTAGRAM GRID — cigar lounge / Ybor / dark bar Unsplash photos ─────────
const igPhotos = [
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80",
  "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=80",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
];

// ─── LOUNGE AMENITIES ─────────────────────────────────────────────────────────
const amenities = [
  { icon: "🥃", label: "Full Bar",         desc: "Rum flights, cocktails, local beer, wine" },
  { icon: "☕", label: "Cuban Coffee",      desc: "Café con leche & black Cuban espresso" },
  { icon: "🚪", label: "Walk-In Humidor",   desc: "Floor-to-ceiling glass, perfect conditions" },
  { icon: "🌿", label: "Outdoor Seating",  desc: "Enjoy Ybor City's 7th Ave from the patio" },
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: MAHOGANY, color: CREAM }}>

      {/* ════════════════════ STICKY NAV ════════════════════ */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{ background: "rgba(26,14,7,0.97)", borderBottom: `1px solid ${BORDER_C}` }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <a href="#" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-semibold tracking-wide" style={{ color: CREAM }}>
              Long Ash
            </span>
            <span
              className="font-medium"
              style={{ color: ACCENT, fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", marginTop: "-2px" }}
            >
              Cigars · Ybor City
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {[
              ["#cigars",     "Our Cigars"],
              ["#lounge",     "The Lounge"],
              ["#events",     "Events"],
              ["#membership", "Membership"],
              ["#visit",      "Visit"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="transition-colors"
                style={{ color: "rgba(245,240,232,0.7)" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = ACCENT)}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(245,240,232,0.7)")}
              >
                {label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{ background: ACCENT, color: MAHOGANY }}
            >
              Reserve a Visit
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href={`tel:${PHONE_RAW}`}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: ACCENT, color: MAHOGANY }}
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* ════════════════════ HERO ════════════════════ */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ minHeight: "92vh" }}
      >
        {/* Dark moody lounge interior */}
        <Image
          src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1800&q=85"
          alt="Long Ash Cigars lounge interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* Warm mahogany gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,14,7,0.88) 0%, rgba(26,14,7,0.62) 50%, rgba(44,26,14,0.80) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p
            className="font-medium mb-6"
            style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase" }}
          >
            {NEIGHBORHOOD}, Tampa, Florida &nbsp;·&nbsp; Est. {YEAR_FOUNDED}
          </p>

          {/* Headline */}
          <h1
            className="font-display font-bold mb-6 leading-[1.0]"
            style={{ fontSize: "clamp(3rem, 9vw, 6rem)", color: CREAM }}
          >
            Where Cigar
            <br />
            <em style={{ color: ACCENT }}>History</em>
            <br />
            Is Made Every Day
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto" style={{ color: "rgba(245,240,232,0.75)" }}>
            Handcrafted in-house by master rollers on the same 7th Avenue block where
            Michael Cincunegui&rsquo;s family has made cigars for five generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-8 py-4 rounded-full font-semibold text-base transition hover:brightness-110"
              style={{ background: ACCENT, color: MAHOGANY }}
            >
              Reserve Your Evening
            </a>
            <a
              href="#cigars"
              className="px-8 py-4 rounded-full text-base font-medium border transition hover:bg-white/10"
              style={{ borderColor: CREAM, color: CREAM }}
            >
              Explore Our Cigars
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-display text-4xl font-bold" style={{ color: ACCENT }}>4.8★</p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(245,240,232,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                530 Google Reviews
              </p>
            </div>
            <div className="hidden sm:block" style={{ width: "1px", height: "36px", background: BORDER_C }} />
            <div className="text-center">
              <p className="font-display text-4xl font-bold" style={{ color: ACCENT }}>25+</p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(245,240,232,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Handmade Vitolas
              </p>
            </div>
            <div className="hidden sm:block" style={{ width: "1px", height: "36px", background: BORDER_C }} />
            <div className="text-center">
              <p className="font-display text-4xl font-bold" style={{ color: ACCENT }}>5th</p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(245,240,232,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Generation Floridian
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ CIGAR MENU ════════════════════ */}
      <section id="cigars" style={{ background: WOOD, padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p
              className="font-medium mb-4"
              style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
            >
              Handmade in Ybor City
            </p>
            <div style={{ width: "48px", height: "2px", background: ACCENT, margin: "0 auto 1.5rem" }} />
            <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: CREAM }}>
              Our Cigars
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "rgba(245,240,232,0.7)" }}>
              Every cigar you smoke here was made in-house with grade&nbsp;A long filler tobacco.
              We sell nothing we don&rsquo;t roll ourselves.
            </p>
          </div>

          {/* Strength tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
            {[
              { label: "Mild",       sub: "Smooth, approachable — a great start",    featured: false },
              { label: "Medium",     sub: "Balanced — our most popular range",        featured: true  },
              { label: "Full Body",  sub: "Bold, complex — for the experienced palate", featured: false },
            ].map(({ label, sub, featured }) => (
              <div
                key={label}
                className="text-center py-3 rounded-lg"
                style={{
                  background: featured ? "rgba(201,168,76,0.08)" : BARK,
                  border: `1px solid ${featured ? ACCENT : BORDER_C}`,
                }}
              >
                <span
                  className="inline-block px-3 py-0.5 rounded-full font-semibold"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    background: featured ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.12)",
                    color: ACCENT,
                  }}
                >
                  {label}
                </span>
                <p className="mt-2 text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>{sub}</p>
              </div>
            ))}
          </div>

          {/* Cigar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cigars.map((cigar) => (
              <article
                key={cigar.name}
                className="rounded-lg overflow-hidden group transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background: BARK,
                  border: `1px solid ${cigar.house ? ACCENT : BORDER_C}`,
                }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={cigar.img}
                    alt={cigar.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-display text-2xl font-semibold" style={{ color: CREAM }}>
                      {cigar.name}
                    </h3>
                    <span className="font-display text-xl font-bold ml-3 mt-0.5" style={{ color: ACCENT }}>
                      {cigar.price}
                    </span>
                  </div>
                  <p className="text-xs mb-2" style={{ color: "rgba(245,240,232,0.45)", letterSpacing: "0.06em" }}>
                    {cigar.vitola}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="inline-block px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background:
                          cigar.strength === "Mild" || cigar.strength === "Medium"
                            ? "rgba(201,168,76,0.15)"
                            : "rgba(180,60,20,0.18)",
                        color: cigar.strength === "Full Body" ? "#D4724A" : ACCENT,
                      }}
                    >
                      {cigar.strength}
                    </span>
                    {cigar.house && (
                      <span
                        className="inline-block px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          fontSize: "0.62rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          background: "rgba(201,168,76,0.2)",
                          color: ACCENT,
                        }}
                      >
                        House Favorite
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
                    {cigar.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-block px-8 py-3 rounded-full font-semibold transition hover:brightness-110"
              style={{ background: ACCENT, color: MAHOGANY }}
            >
              Visit to See the Full Selection
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════ LOUNGE EXPERIENCE ════════════════════ */}
      <section id="lounge" style={{ background: MAHOGANY, padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
            {/* Text */}
            <div>
              <p
                className="font-medium mb-4"
                style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
              >
                The Experience
              </p>
              <div style={{ width: "48px", height: "2px", background: ACCENT, marginBottom: "1.5rem" }} />
              <h2
                className="font-display font-bold mb-6 leading-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: CREAM }}
              >
                Watch the Rollers.
                <br />
                Pour a Rum.
                <br />
                <em style={{ color: ACCENT }}>Stay a While.</em>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.7)" }}>
                Before you even walk in the door, you&rsquo;ll see one of our master rollers in the front window,
                hands moving through the rhythm of a craft practiced in Ybor City since the 1880s. Inside,
                settle into a leather armchair, order a café con leche or a rum flight from our tobacco-leaf-topped
                bar, and let the afternoon become an evening.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
                We have a walk-in humidor lined floor-to-ceiling in glass, a domino and card table in the corner,
                and an HDTV showing whatever game matters today. Outdoor seating for when the Florida evening
                is too good to waste indoors.
              </p>
            </div>

            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=85"
                alt="Long Ash Cigars lounge — leather armchairs and tobacco-leaf bar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Amenity tiles */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: BORDER_C }}
          >
            {amenities.map(({ icon, label, desc }) => (
              <div key={label} className="p-7 text-center" style={{ background: BARK }}>
                <div className="text-3xl mb-3">{icon}</div>
                <h4 className="font-display text-lg font-semibold mb-2" style={{ color: CREAM }}>
                  {label}
                </h4>
                <p className="text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ ORIGIN STORY ════════════════════ */}
      <section id="story" style={{ background: LEAF, padding: "6rem 0" }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-1">
              <Image
                src="https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?w=900&q=85"
                alt="Cigar rolling craft — hand-rolling a long-filler cigar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text */}
            <div className="order-2">
              <p
                className="font-medium mb-4"
                style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
              >
                Our Story
              </p>
              <div style={{ width: "48px", height: "2px", background: ACCENT, marginBottom: "1.5rem" }} />
              <h2
                className="font-display font-bold mb-6 leading-tight"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "#1A0E07" }}
              >
                Five Generations
                <br />
                on the Same Block
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: MUTED_INK }}>
                Michael Cincunegui&rsquo;s great-great-grandparents came from Cuba and Spain to work in
                Ybor City&rsquo;s cigar factories in the late 1800s. His great-grandfather Manuel ran a buckeye
                cigar shop — <em>Chinchal Habanero</em> — right here on 7th Avenue in the 1940s.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: MUTED_INK }}>
                When cigarettes overtook cigars in the 1950s, the shop closed. When cigars came back,
                Michael brought the family craft back to the same street. Long Ash opened in 2012 —
                a fourth-generation Tampa native, a fifth-generation Floridian, and a fifth-generation
                cigar maker.
              </p>
              <p className="text-base leading-relaxed" style={{ color: MUTED_INK }}>
                Michael&rsquo;s mother Sandra, a former Ybor City Chamber goodwill ambassador, works alongside
                him. When you walk through that door, you&rsquo;re not just buying a cigar — you&rsquo;re
                joining a 140-year conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ EVENTS + PRIVATE BOOKING ════════════════════ */}
      <section id="events" style={{ background: WOOD, padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-16">
            <p
              className="font-medium mb-4"
              style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
            >
              What&rsquo;s Coming Up
            </p>
            <div style={{ width: "48px", height: "2px", background: ACCENT, margin: "0 auto 1.5rem" }} />
            <h2 className="font-display text-5xl font-bold" style={{ color: CREAM }}>
              Events &amp; Tastings
            </h2>
            <p className="mt-4 text-base max-w-md mx-auto" style={{ color: "rgba(245,240,232,0.7)" }}>
              Special evenings, cigar tastings, rum pairings, and private group events on 7th Ave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {events.map((evt) => (
              <div
                key={evt.title}
                className="rounded-lg p-6"
                style={{
                  background: BARK,
                  border: `1px solid ${BORDER_C}`,
                  borderLeft: `3px solid ${ACCENT}`,
                }}
              >
                <p
                  className="font-medium mb-2"
                  style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
                >
                  {evt.date}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: CREAM }}>
                  {evt.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
                  {evt.desc}
                </p>
                <p className="text-xs font-medium" style={{ color: ACCENT }}>
                  {evt.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Private event CTA — directly addresses the #1 audit gap */}
          <div
            className="rounded-xl p-8 md:p-12 text-center"
            style={{ background: BARK, border: `1px solid ${BORDER_C}` }}
          >
            <p
              className="font-medium mb-3"
              style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
            >
              Private Events
            </p>
            <h3
              className="font-display font-bold mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: CREAM }}
            >
              Book the Lounge for Your Group
            </h3>
            <p className="text-base max-w-lg mx-auto mb-8" style={{ color: "rgba(245,240,232,0.7)" }}>
              Corporate cigar nights, birthday evenings, bachelor parties, team dinners — we host private
              groups in the full lounge or the patio. Includes curated cigar service, bar access, and
              rolling demonstrations on request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_RAW}`}
                className="px-8 py-4 rounded-full font-semibold transition hover:brightness-110"
                style={{ background: ACCENT, color: MAHOGANY }}
              >
                Call to Book &nbsp;→
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="px-8 py-4 rounded-full font-medium border transition hover:bg-white/10"
                style={{ borderColor: CREAM, color: CREAM }}
              >
                {PHONE_FORMATTED}
              </a>
            </div>
            <p className="mt-4 text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              Private groups, corporate evenings, cigar nights — call to check availability
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════ ASH CLUB MEMBERSHIP ════════════════════ */}
      <section
        id="membership"
        className="relative overflow-hidden"
        style={{ background: MAHOGANY, padding: "6rem 0" }}
      >
        {/* Decorative gold rule top */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
        />

        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <p
            className="font-medium mb-4"
            style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            For the Regulars
          </p>
          <div style={{ width: "48px", height: "2px", background: ACCENT, margin: "0 auto 1.5rem" }} />
          <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: CREAM }}>
            Join the <em style={{ color: ACCENT }}>Ash Club</em>
          </h2>
          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: "rgba(245,240,232,0.7)" }}>
            A curated monthly bundle of Long Ash originals — selected by Michael and the rollers —
            delivered to your door or held for lounge pickup.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {ashClubTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-lg p-7 relative"
                style={{
                  background: BARK,
                  border: `${tier.featured ? "2px" : "1px"} solid ${tier.featured ? ACCENT : BORDER_C}`,
                }}
              >
                {tier.featured && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: ACCENT, color: MAHOGANY }}
                  >
                    Most Popular
                  </span>
                )}
                <p
                  className="font-medium mb-3"
                  style={{
                    color: tier.featured ? ACCENT : "rgba(245,240,232,0.5)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {tier.name}
                </p>
                <p className="font-display text-4xl font-bold mb-1" style={{ color: CREAM }}>
                  {tier.price}
                  <span className="text-xl font-normal">/mo</span>
                </p>
                <p className="text-sm mb-5" style={{ color: "rgba(245,240,232,0.7)" }}>
                  {tier.qty}
                </p>
                <ul className="text-sm text-left space-y-2 mb-6" style={{ color: "rgba(245,240,232,0.7)" }}>
                  {tier.perks.map((perk) => (
                    <li key={perk}>
                      <span style={{ color: ACCENT }}>✦</span>&nbsp;&nbsp;{perk}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="block w-full text-center px-6 py-2.5 rounded-full text-sm font-semibold transition hover:brightness-110"
                  style={
                    tier.featured
                      ? { background: ACCENT, color: MAHOGANY }
                      : { border: `1.5px solid ${CREAM}`, color: CREAM }
                  }
                >
                  {tier.featured ? "Join Now" : "Inquire"}
                </a>
              </div>
            ))}
          </div>

          {/* Email capture bar — addresses the "no owned channel" audit finding */}
          <div
            className="rounded-xl p-6 md:p-8"
            style={{ background: BARK, border: `1px solid ${BORDER_C}` }}
          >
            <p className="font-display text-2xl font-semibold mb-2" style={{ color: CREAM }}>
              Not ready to commit? Stay in the loop.
            </p>
            <p className="text-sm mb-5" style={{ color: "rgba(245,240,232,0.65)" }}>
              Join the Long Ash mailing list — event announcements, new vitola releases, member-only nights.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
                style={{ background: WOOD, border: `1px solid ${BORDER_C}`, color: CREAM }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-sm font-semibold transition hover:brightness-110 whitespace-nowrap"
                style={{ background: ACCENT, color: MAHOGANY }}
              >
                Sign Me Up
              </button>
            </form>
            <p className="text-xs mt-3" style={{ color: "rgba(245,240,232,0.35)" }}>
              No spam. Unsubscribe anytime. All memberships include free shipping on orders over $250.
            </p>
          </div>
        </div>

        {/* Decorative gold rule bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
        />
      </section>

      {/* ════════════════════ REVIEWS ════════════════════ */}
      <section style={{ background: WOOD, padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-16">
            <p
              className="font-medium mb-4"
              style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
            >
              {AVG_RATING}★ on Google
            </p>
            <div style={{ width: "48px", height: "2px", background: ACCENT, margin: "0 auto 1.5rem" }} />
            <h2 className="font-display text-5xl font-bold" style={{ color: CREAM }}>
              What Our Guests Say
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>
              {REVIEW_COUNT} Google reviews · 4.9 on TripAdvisor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="rounded-lg p-6"
                style={{ background: BARK, border: `1px solid ${BORDER_C}` }}
              >
                <p className="text-base mb-1" style={{ color: ACCENT }}>★★★★★</p>
                <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(245,240,232,0.7)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-xs font-medium" style={{ color: "rgba(245,240,232,0.45)" }}>
                  — {r.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full text-sm font-semibold border transition hover:bg-white/10"
              style={{ borderColor: CREAM, color: CREAM }}
            >
              Read All {REVIEW_COUNT} Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════ VISIT + HOURS ════════════════════ */}
      <section id="visit" style={{ background: MAHOGANY, padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Info column */}
            <div>
              <p
                className="font-medium mb-4"
                style={{ color: ACCENT, fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
              >
                Come Find Us
              </p>
              <div style={{ width: "48px", height: "2px", background: ACCENT, marginBottom: "1.5rem" }} />
              <h2 className="font-display font-bold mb-8 leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: CREAM }}>
                {ADDRESS_LINE_1}
                <br />
                <span className="font-display font-normal" style={{ fontSize: "0.65em", color: ACCENT }}>
                  {ADDRESS_LINE_2}
                </span>
              </h2>

              <div className="space-y-6 text-base">
                {/* Hours */}
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: CREAM }}>Hours</h4>
                  <table className="text-sm">
                    <tbody>
                      {[
                        ["Monday — Thursday", "11:00 AM — 12:00 AM"],
                        ["Friday — Saturday", "11:00 AM — 2:00 AM"],
                        ["Sunday",             "11:00 AM — 10:00 PM"],
                      ].map(([day, hrs]) => (
                        <tr key={day}>
                          <td className="pr-6 py-1" style={{ color: "rgba(245,240,232,0.7)" }}>{day}</td>
                          <td className="py-1 font-medium" style={{ color: CREAM }}>{hrs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: CREAM }}>Contact</h4>
                  <p>
                    <a
                      href={`tel:${PHONE_RAW}`}
                      className="transition-colors"
                      style={{ color: "rgba(245,240,232,0.7)" }}
                    >
                      {PHONE_FORMATTED}
                    </a>
                    <br />
                    <a
                      href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm mt-1 inline-block transition-colors"
                      style={{ color: "rgba(245,240,232,0.7)" }}
                    >
                      @{INSTAGRAM_HANDLE} on Instagram
                    </a>
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-sm font-semibold transition hover:brightness-110"
                    style={{ background: ACCENT, color: MAHOGANY }}
                  >
                    Get Directions
                  </a>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="px-6 py-3 rounded-full text-sm font-semibold border transition hover:bg-white/10"
                    style={{ borderColor: CREAM, color: CREAM }}
                  >
                    Call Us
                  </a>
                  <a
                    href={TOAST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-sm font-semibold border transition hover:bg-white/10"
                    style={{ borderColor: CREAM, color: CREAM }}
                  >
                    Order Online
                  </a>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=900&q=85"
                alt="Long Ash Cigars — Ybor City exterior and lounge"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ INSTAGRAM STRIP ════════════════════ */}
      <section style={{ background: WOOD, padding: "3rem 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between mb-5">
            <p className="font-display text-2xl font-semibold" style={{ color: CREAM }}>
              @{INSTAGRAM_HANDLE}
            </p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition hover:opacity-80"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-sm group">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(26,14,7,0.55)" }}
                >
                  <span style={{ color: ACCENT, fontSize: "1.4rem" }}>♡</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer
        style={{ background: "#0D0806", borderTop: `1px solid ${BORDER_C}`, padding: "4rem 0 2rem" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <p className="font-display text-3xl font-bold mb-1" style={{ color: CREAM }}>
                Long Ash Cigars
              </p>
              <p className="text-sm mb-4" style={{ color: "rgba(245,240,232,0.45)" }}>
                Handmade · Locally Sourced · Finest Cigars
                <br />
                {NEIGHBORHOOD}, Tampa, Florida
              </p>
              <p className="text-sm italic" style={{ color: "rgba(245,240,232,0.7)" }}>
                &ldquo;The place where cigar history is made every day.&rdquo;
              </p>
            </div>

            {/* Visit */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: CREAM }}>Visit</h4>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
                <br />
                <br />
                <a href={`tel:${PHONE_RAW}`} className="hover:opacity-80 transition-opacity">
                  {PHONE_FORMATTED}
                </a>
              </p>
              <div className="mt-4 text-xs space-y-1" style={{ color: "rgba(245,240,232,0.45)" }}>
                <p>Mon–Thu: 11 AM – 12 AM</p>
                <p>Fri–Sat: 11 AM – 2 AM</p>
                <p>Sunday: 11 AM – 10 PM</p>
              </div>
            </div>

            {/* Connect + Explore */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: CREAM }}>Connect</h4>
              <div className="flex gap-5 mb-6">
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "rgba(245,240,232,0.7)" }}
                >
                  Instagram
                </a>
                <a
                  href={`https://facebook.com/${FACEBOOK_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "rgba(245,240,232,0.7)" }}
                >
                  Facebook
                </a>
              </div>
              <h4 className="font-semibold mb-3" style={{ color: CREAM }}>Explore</h4>
              <div className="flex flex-col gap-1.5 text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>
                {[
                  ["#cigars",     "Our Cigars"],
                  ["#lounge",     "The Lounge"],
                  ["#events",     "Events & Private Booking"],
                  ["#membership", "Ash Club Membership"],
                ].map(([href, label]) => (
                  <a key={href} href={href} className="hover:opacity-80 transition-opacity">
                    {label}
                  </a>
                ))}
                <a
                  href={TOAST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: `1px solid ${BORDER_C}` }} />
          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <p className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              © {new Date().getFullYear()} Long Ash Cigars · You must be 21 or older to purchase tobacco products.
            </p>
            <p className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              Concept mockup by{" "}
              <a
                href="https://thryveops.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: ACCENT }}
                className="hover:opacity-80 transition-opacity"
              >
                Thryve Operations
              </a>
            </p>
            <Link href="/" className="text-xs hover:opacity-80 transition-opacity" style={{ color: "rgba(245,240,232,0.4)" }}>
              ← All previews
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
