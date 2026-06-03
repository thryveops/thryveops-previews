import Image from "next/image";
import Link from "next/link";

// ─── IRONBLOOD TATTOOS — THRYVE OPS MOCKUP ─────────────────────────────────────
// Fonts (display) are loaded globally via layout.tsx — no font imports needed here.
// Use className="font-display" for Bebas Neue / bold display headings.

// ─── BUSINESS IDENTITY ─────────────────────────────────────────────────────────
const BUSINESS_NAME    = "Ironblood Tattoos";
const TAGLINE          = "Your skin. Our art.";
const NEIGHBORHOOD     = "North Tampa";
const YEAR_FOUNDED     = "2013";
const MOTTO            = "The endless pursuit to perfection through the alluring magic of tattooing.";

// ─── BRAND PALETTE ─────────────────────────────────────────────────────────────
// Near-black body, deep crimson primary, gold accent — matches Ironblood's aesthetic.
const BG1      = "#0A0A0A";   // page body background
const BG2      = "#111111";   // nav, alternate dark sections
const BG3      = "#1A1A1A";   // cards, blockquotes
const BORDER   = "#2A2A2A";   // subtle dividers
const CRIMSON  = "#8B0000";   // primary brand color
const CRIMSON2 = "#A00000";   // hover state
const GOLD     = "#C9A84C";   // accent highlights, prices, stats
const MUTED    = "#A0A0A0";   // body text on dark bg
const FAINT    = "#606060";   // secondary muted text

// ─── CONTACT & LINKS ───────────────────────────────────────────────────────────
const PHONE_FORMATTED  = "(813) 815-0089";
const PHONE_RAW        = "8138150089";
const EMAIL            = "ironbloodtattoos@gmail.com";
const ADDRESS_LINE_1   = "1034 W Hillsborough Ave";
const ADDRESS_LINE_2   = "Tampa, FL 33603";
const DIRECTIONS_URL   = "https://www.google.com/maps/search/1034+W+Hillsborough+Ave+Tampa+FL+33603";
const INSTAGRAM_HANDLE = "ironblood.tattoos";
const INSTAGRAM_URL    = "https://www.instagram.com/ironblood.tattoos/";
const FACEBOOK_URL     = "https://www.facebook.com/Ironbloodtatt00s/";
const AVG_RATING       = "4.9";
const REVIEW_COUNT     = "478";

// ─── ARTIST ROSTER ─────────────────────────────────────────────────────────────
const artists = [
  {
    name:         "Oscar",
    lastName:     "Soriano",
    role:         "Owner / Lead Artist",
    experience:   "14 Yrs",
    availability: "booked",
    availLabel:   "Booked 3–4 Wks",
    bio:          "Trained alongside Teresa Sharpe and Stefano Alcantara, Oscar is Tampa's go-to for anime, pop-culture portraits, and intricate watercolor work. Dragon Ball, One Piece, Zelda, Hunter × Hunter — if you've seen it animated, he can put it on skin. Fourteen years of craft; every piece treated like it'll be worn for sixty.",
    styles:       ["Anime", "Watercolor", "Realism", "Horror"],
    img:          "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=700&q=80",
    imgAlt:       "Oscar Soriano — lead tattoo artist at Ironblood",
  },
  {
    name:         "Tai",
    lastName:     "",
    role:         "Artist",
    experience:   "3 Yrs",
    availability: "available",
    availLabel:   "Available",
    bio:          "Coming from a hairstyling background, Tai brings a bold sense of color and composition to the needle. Her Pokémon and manga-inspired pieces are technically precise and saturated in a way that holds over time. Vaporwave aesthetics, clean lines, color theory — Tai's work pops.",
    styles:       ["New School", "Pokémon", "Manga", "Colorwork"],
    img:          "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=700&q=80",
    imgAlt:       "Tai — color tattoo artist at Ironblood",
  },
  {
    name:         "Maya",
    lastName:     "",
    role:         "Artist",
    experience:   "New to Ironblood",
    availability: "available",
    availLabel:   "Available",
    bio:          "The newest member of the Ironblood family. Maya brings fresh energy and her own distinct visual language to the shop. The best way to see where she's at is to follow @ironblood.tattoos — her portfolio speaks for itself.",
    styles:       ["Inquire", "DM for Portfolio"],
    img:          "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=700&q=80",
    imgAlt:       "Maya — tattoo artist at Ironblood",
  },
];

// ─── GALLERY ITEMS ─────────────────────────────────────────────────────────────
const galleryItems = [
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80", label: "Oscar · Anime", ratio: "3/4" },
  { src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=700&q=80", label: "Tai · Color",   ratio: "1/1" },
  { src: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=700&q=80", label: "Oscar · Realism", ratio: "3/4" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80", label: "Oscar · Watercolor", ratio: "4/5" },
  { src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=700&q=80", label: "Tai · New School", ratio: "1/1" },
  { src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=700&q=80", label: "Ironblood Studio", ratio: "3/4" },
  { src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=700&q=80", label: "In Progress",      ratio: "4/3" },
  { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&q=80", label: "Oscar · Horror",    ratio: "3/4" },
  { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80", label: "Tai · Color Sleeve", ratio: "1/1" },
];

// ─── SERVICES ──────────────────────────────────────────────────────────────────
const services = [
  {
    name:    "Custom Tattoo",
    desc:    "Original artwork designed around your idea. Consultation included for complex pieces. Oscar specializes in anime and pop culture; Tai in color and new school.",
    price:   "From $150",
    deposit: "$100 Deposit",
    cta:     "Book",
  },
  {
    name:    "Art Commission",
    desc:    "Custom digital artwork delivered before your appointment. Five-day creation window. Deposit applies to final cost.",
    price:   "Custom Quote",
    deposit: "$300 Deposit",
    cta:     "Inquire",
  },
  {
    name:    "Piercing",
    desc:    "Ear, nose, and body piercings. Minors 16–18 require notarized parental consent per Florida law. Walk-ins welcome for availability.",
    price:   "Call for Pricing",
    deposit: "Walk-Ins Welcome",
    cta:     "Call",
  },
  {
    name:    "Tattoo Removal",
    desc:    "Laser tattoo removal with documented before/after progress. Multiple sessions typically required depending on ink density and age.",
    price:   "Consultation",
    deposit: "By Appointment",
    cta:     "Book",
  },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
const reviews = [
  {
    text:   "Oscar and Tai are hands down the best people to spend an entire day with. The work speaks for itself but honestly the vibe in the shop makes the whole experience. My anime sleeve came out better than I imagined.",
    author: "Marcus T., Google Review",
  },
  {
    text:   "I drove 45 minutes for Oscar's anime work and I'd do it again. Clean lines, insane color, and he actually listened to what I wanted. The Pokémon piece Tai did for my daughter is stunning — she cried when she saw it.",
    author: "Priya L., Google Review",
  },
  {
    text:   "Very friendly and true artists. The shop is clean and professional. Oscar's line work is amazing and his personality makes you want to come back. Five stars isn't enough honestly.",
    author: "Dani R., Google Review",
  },
];

// ─── INSTAGRAM STRIP ───────────────────────────────────────────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&q=80",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&q=80",
  "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=400&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
];

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — Custom Tattoos & Piercings in North Tampa`,
  description:
    "Ironblood Tattoos — anime, watercolor, realism, and new school tattoos in North Tampa. Book with Oscar, Tai, or Maya. 4.9 stars · 478 Google reviews · Walk-ins welcome.",
};

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function IronbloodMockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: BG1, color: "rgba(255,255,255,0.88)" }}>

      {/* ── STICKY NAV ── */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(17,17,17,0.97)", backdropFilter: "blur(12px)", borderColor: BORDER }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="no-underline leading-none">
            <span
              className="font-display text-white block"
              style={{ fontSize: "1.5rem", letterSpacing: "0.1em" }}
            >
              IRONBLOOD
            </span>
            <span
              className="font-display block"
              style={{ fontSize: "0.72rem", color: CRIMSON, letterSpacing: "0.2em", marginTop: "-4px" }}
            >
              TATTOOS &amp; PIERCINGS
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "#artists",  label: "Artists"  },
              { href: "#gallery",  label: "Gallery"  },
              { href: "#services", label: "Services" },
              { href: "#about",    label: "The Shop" },
              { href: "#visit",    label: "Visit"    },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs font-medium uppercase tracking-[0.08em] transition hover:text-white"
                style={{ color: MUTED, textDecoration: "none" }}
              >
                {label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-6 py-2.5 rounded-sm font-display text-white transition hover:brightness-110"
              style={{ background: CRIMSON, letterSpacing: "0.1em", fontSize: "0.9rem", textDecoration: "none" }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href={`tel:${PHONE_RAW}`}
            className="md:hidden px-4 py-2 rounded-sm font-display text-white"
            style={{ background: CRIMSON, letterSpacing: "0.1em", fontSize: "0.85rem", textDecoration: "none" }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ minHeight: "92vh" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1800&q=80"
          alt="Tattoo artist at work at Ironblood Tattoos Tampa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 50%, rgba(10,10,10,0.92) 100%)" }}
        />

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p
            className="font-display mb-6 uppercase tracking-[0.2em]"
            style={{ fontSize: "0.75rem", color: GOLD }}
          >
            {NEIGHBORHOOD} &middot; Est. {YEAR_FOUNDED} &middot; {AVG_RATING} ★ on Google
          </p>

          {/* Hero headline — shimmer effect via inline style */}
          <h1
            className="font-display mb-6"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
              lineHeight: 1,
              letterSpacing: "0.06em",
              background: `linear-gradient(90deg, ${CRIMSON}, ${GOLD}, #fff, ${GOLD}, ${CRIMSON})`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            YOUR SKIN.<br />OUR ART.
          </h1>

          <p
            className="mb-10 max-w-xl mx-auto"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7, fontWeight: 300, color: "rgba(255,255,255,0.75)" }}
          >
            Custom tattoos, piercings, and removal in North Tampa.
            Anime, watercolor, realism, horror, new school — each artist,
            their own style, your permanent story.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { val: REVIEW_COUNT, label: "Google Reviews" },
              { val: `${AVG_RATING}★`, label: "Average Rating" },
              { val: "13", label: "Years in Tampa" },
              { val: "3", label: "Artists on Roster" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="font-display" style={{ fontSize: "2rem", color: GOLD, lineHeight: 1.1 }}>{val}</div>
                <div
                  className="uppercase tracking-[0.1em]"
                  style={{ fontSize: "0.7rem", color: MUTED, marginTop: "4px" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-10 py-4 rounded-sm font-display text-white transition hover:brightness-110"
              style={{ background: CRIMSON, letterSpacing: "0.1em", fontSize: "0.95rem", textDecoration: "none" }}
            >
              Book Your Session
            </a>
            <a
              href="#artists"
              className="px-10 py-4 rounded-sm font-display transition"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.1em",
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Meet the Artists
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2"
          style={{ transform: "translateX(-50%)", opacity: 0.35 }}
          aria-hidden="true"
        >
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, white)", margin: "0 auto" }} />
        </div>
      </section>

      {/* ── VALUE PROP STRIP ── */}
      <section style={{ background: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {[
            { title: "STYLE-MATCHED", body: "Browse each artist's actual portfolio. Book the one whose style matches your vision — not whoever's available." },
            { title: "$100 DEPOSIT",  body: "Secure your appointment with a $100 deposit applied to your final cost. No surprises, no wasted trips." },
            { title: "WALK-INS WELCOME", body: "Open Mon–Sat 1:30–9 PM. Walk in for piercings, small flash, and availability check — no appointment needed." },
          ].map(({ title, body }, i) => (
            <div
              key={title}
              className="px-10 py-10 text-center"
              style={i < 2 ? { borderRight: `1px solid ${BORDER}` } : {}}
            >
              <div className="font-display mb-2" style={{ fontSize: "1.05rem", color: GOLD, letterSpacing: "0.12em" }}>
                {title}
              </div>
              <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ARTIST ROSTER ── */}
      <section id="artists" style={{ background: BG1, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <p
              className="font-display uppercase mb-4"
              style={{ fontSize: "0.75rem", color: CRIMSON, letterSpacing: "0.2em" }}
            >
              The Artists
            </p>
            <div style={{ width: 48, height: 3, background: CRIMSON, margin: "0 auto 24px" }} />
            <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}>
              MEET YOUR ARTIST
            </h2>
            <p className="max-w-lg mx-auto" style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.7 }}>
              At Ironblood, you book a person — not a slot. Each artist brings their own specialty.
              Find yours, then book direct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <article
                key={artist.name}
                className="rounded-sm overflow-hidden"
                style={{
                  background: BG3,
                  border: `1px solid ${BORDER}`,
                  transition: "border-color 0.3s, transform 0.3s",
                }}
              >
                {/* Artist photo */}
                <div className="relative" style={{ height: 340, overflow: "hidden" }}>
                  <Image
                    src={artist.img}
                    alt={artist.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    style={{ filter: "grayscale(40%)", transition: "filter 0.5s" }}
                  />
                </div>

                {/* Artist info */}
                <div className="p-7">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-display text-white" style={{ fontSize: "1.75rem", letterSpacing: "0.06em" }}>
                        {artist.name.toUpperCase()}
                      </h3>
                      <p
                        className="font-semibold uppercase"
                        style={{ color: CRIMSON, fontSize: "0.7rem", letterSpacing: "0.12em" }}
                      >
                        {artist.role} &middot; {artist.experience}
                      </p>
                    </div>
                    <span
                      className="text-white uppercase font-bold"
                      style={{
                        background: artist.availability === "booked" ? CRIMSON : "#1A3A1A",
                        color: artist.availability === "booked" ? "white" : "#5FC45F",
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        padding: "4px 10px",
                        borderRadius: 2,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {artist.availLabel}
                    </span>
                  </div>

                  <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.65, marginBottom: 16 }}>
                    {artist.bio}
                  </p>

                  {/* Style tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {artist.styles.map((style) => (
                      <span
                        key={style}
                        className="uppercase"
                        style={{
                          border: `1px solid ${BORDER}`,
                          color: MUTED,
                          fontSize: "0.68rem",
                          padding: "4px 10px",
                          borderRadius: 2,
                          letterSpacing: "0.07em",
                        }}
                      >
                        {style}
                      </span>
                    ))}
                  </div>

                  {/* Per-artist booking CTA — addresses audit finding */}
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="block w-full text-center font-display text-white rounded-sm transition hover:brightness-110"
                    style={{
                      background: CRIMSON,
                      padding: "12px 24px",
                      letterSpacing: "0.1em",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    Book with {artist.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY WITH STYLE FILTER TABS ── */}
      {/* Addresses audit finding: flat undifferentiated gallery → tabbed by artist/style */}
      <section
        id="gallery"
        style={{ background: BG2, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10">
            <p
              className="font-display uppercase mb-4"
              style={{ fontSize: "0.75rem", color: CRIMSON, letterSpacing: "0.2em" }}
            >
              The Work
            </p>
            <div style={{ width: 48, height: 3, background: CRIMSON, margin: "0 auto 24px" }} />
            <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}>
              PORTFOLIO
            </h2>

            {/* Style filter tabs — static display in Server Component; JS enhancement on production */}
            <div className="flex flex-wrap justify-center gap-2">
              {["All Work", "Oscar — Anime", "Oscar — Watercolor", "Oscar — Realism", "Tai — Color", "Removal"].map(
                (tab, i) => (
                  <span
                    key={tab}
                    className="uppercase cursor-pointer transition"
                    style={{
                      padding: "6px 18px",
                      border: `1px solid ${i === 0 ? CRIMSON : BORDER}`,
                      background: i === 0 ? CRIMSON : "transparent",
                      color: i === 0 ? "white" : MUTED,
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      borderRadius: 2,
                    }}
                  >
                    {tab}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Masonry-style gallery grid */}
          <div className="columns-2 md:columns-3 gap-3">
            {galleryItems.map(({ src, label, ratio }) => (
              <div
                key={label}
                className="mb-3 rounded-sm overflow-hidden relative group"
                style={{ breakInside: "avoid" }}
              >
                <div style={{ aspectRatio: ratio, position: "relative", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(139,0,0,0.75)" }}
                  >
                    <span
                      className="font-display text-white"
                      style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}
                    >
                      {label.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display rounded-sm transition"
              style={{
                border: `1px solid rgba(255,255,255,0.25)`,
                color: "rgba(255,255,255,0.85)",
                padding: "14px 40px",
                letterSpacing: "0.1em",
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              View Full Portfolio on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES & PRICING ── */}
      <section
        id="services"
        style={{ background: BG1, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <p
              className="font-display uppercase mb-4"
              style={{ fontSize: "0.75rem", color: CRIMSON, letterSpacing: "0.2em" }}
            >
              Services
            </p>
            <div style={{ width: 48, height: 3, background: CRIMSON, margin: "0 auto 24px" }} />
            <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}>
              WHAT WE DO
            </h2>
            <p style={{ color: MUTED, fontSize: "0.9375rem" }}>
              All appointments require a $100 deposit applied to your final cost.
            </p>
          </div>

          {/* Service rows with pricing anchors — addresses audit "no pricing" finding */}
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 4, overflow: "hidden" }}>
            {services.map((svc, idx) => (
              <div
                key={svc.name}
                className="flex items-center justify-between px-8 py-6 transition-colors"
                style={{
                  borderBottom: idx < services.length - 1 ? `1px solid ${BORDER}` : undefined,
                  borderLeft: "3px solid transparent",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 className="text-white font-semibold mb-1" style={{ fontSize: "1rem" }}>
                    {svc.name}
                  </h3>
                  <p style={{ color: MUTED, fontSize: "0.8125rem", lineHeight: 1.55 }}>{svc.desc}</p>
                </div>
                <div className="text-right ml-8" style={{ flexShrink: 0 }}>
                  <div className="font-display" style={{ fontSize: "1.25rem", color: GOLD }}>
                    {svc.price}
                  </div>
                  <div
                    className="uppercase"
                    style={{ color: FAINT, fontSize: "0.72rem", letterSpacing: "0.08em", marginTop: 2 }}
                  >
                    {svc.deposit}
                  </div>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="inline-block mt-2 font-display rounded-sm transition hover:opacity-80"
                    style={{
                      background: GOLD,
                      color: BG1,
                      padding: "6px 14px",
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textDecoration: "none",
                    }}
                  >
                    {svc.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8" style={{ color: FAINT, fontSize: "0.8125rem" }}>
            Payment accepted: Cash · Cash App · Venmo &nbsp;|&nbsp; Deposits placed via Cash App upon confirmation
          </p>
        </div>
      </section>

      {/* ── ABOUT / THE SHOP ── */}
      <section
        id="about"
        style={{ background: BG2, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="font-display uppercase mb-4"
              style={{ fontSize: "0.75rem", color: CRIMSON, letterSpacing: "0.2em" }}
            >
              The Shop
            </p>
            <div style={{ width: 48, height: 3, background: CRIMSON, marginBottom: 24 }} />
            <h2
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", lineHeight: 1.05 }}
            >
              WHERE YOU COME<br />TO BUILD YOU
            </h2>
            <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: 20 }}>
              Oscar Soriano opened Ironblood Tattoos on April 20, 2013 on W Hillsborough Ave in
              North Tampa. What started as one artist&apos;s pursuit — &ldquo;the endless pursuit to
              perfection through the alluring magic of tattooing&rdquo; — has become a shop built on
              craft, honesty, and the kind of session where you forget you&apos;re there for ink and
              just end up talking.
            </p>
            <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: 20 }}>
              Trained alongside David Mushaney, Liz Cook, Teresa Sharpe, and Stefano Alcantara,
              Oscar built his technique on realism before letting his love for anime, trading cards,
              and gaming leak into the work. That specificity is what drew Tai and Maya to the
              shop — artists with their own obsessions, their own portfolios, their own clients.
            </p>
            <p style={{ color: MUTED, fontSize: "0.9375rem", lineHeight: 1.75 }}>
              {REVIEW_COUNT} Google reviews at {AVG_RATING} stars isn&apos;t marketing. It&apos;s what happens
              when a shop treats every piece like it&apos;s the one the client will carry for the next
              60 years.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={`tel:${PHONE_RAW}`}
                className="font-display text-white rounded-sm px-8 py-4 transition hover:brightness-110"
                style={{ background: CRIMSON, letterSpacing: "0.1em", fontSize: "0.9rem", textDecoration: "none" }}
              >
                Book Now
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display rounded-sm px-8 py-4 transition"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.1em",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                Instagram →
              </a>
            </div>
          </div>

          {/* Shop photo with floating rating badge */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=900&q=80"
                alt="Ironblood Tattoos studio interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating rating badge */}
            <div
              className="absolute rounded-sm"
              style={{
                bottom: -16,
                right: -16,
                background: CRIMSON,
                padding: "20px 24px",
              }}
            >
              <div className="font-display text-white" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                {AVG_RATING}★
              </div>
              <div
                className="uppercase"
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.72rem", letterSpacing: "0.1em", marginTop: 4 }}
              >
                {REVIEW_COUNT} Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WALK-INS CTA BAND ── */}
      {/* High-converting impulse-visit section — solid crimson band */}
      <section style={{ background: CRIMSON, padding: "72px 0" }}>
        <div className="max-w-5xl mx-auto px-5 md:px-10 text-center">
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.06em" }}
          >
            WALK-INS WELCOME
          </h2>
          <p
            className="max-w-lg mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Open Monday through Saturday, 1:30 PM to 9:00 PM. Stop in for piercings, flash
            tattoos, or to talk through a design. No appointment needed — just show up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display rounded-sm transition hover:opacity-90"
              style={{
                background: "white",
                color: CRIMSON,
                padding: "14px 32px",
                letterSpacing: "0.1em",
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get Directions
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="font-display rounded-sm transition"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
                padding: "14px 32px",
                letterSpacing: "0.1em",
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {PHONE_FORMATTED}
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ background: BG1, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p
              className="font-display uppercase mb-4"
              style={{ fontSize: "0.75rem", color: CRIMSON, letterSpacing: "0.2em" }}
            >
              Social Proof
            </p>
            <div style={{ width: 48, height: 3, background: CRIMSON, margin: "0 auto 24px" }} />
            <h2 className="font-display text-white mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}>
              ★★★★★ {AVG_RATING} ON GOOGLE
            </h2>
            <p style={{ color: MUTED }}>
              Based on {REVIEW_COUNT} reviews — one of the highest-rated tattoo studios in Tampa Bay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <blockquote
                key={r.author}
                className="rounded-sm"
                style={{ background: BG3, border: `1px solid ${BORDER}`, padding: 28 }}
              >
                <p style={{ color: GOLD, marginBottom: 12, fontSize: "0.875rem", letterSpacing: "0.05em" }}>
                  ★★★★★
                </p>
                <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer style={{ color: FAINT, fontSize: "0.8rem" }}>— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT / CONTACT ── */}
      <section
        id="visit"
        style={{ background: BG2, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="font-display uppercase mb-4"
              style={{ fontSize: "0.75rem", color: CRIMSON, letterSpacing: "0.2em" }}
            >
              Find Us
            </p>
            <div style={{ width: 48, height: 3, background: CRIMSON, marginBottom: 24 }} />
            <h2 className="font-display text-white mb-8" style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
              VISIT IRONBLOOD
            </h2>

            <div className="space-y-8" style={{ fontSize: "0.9375rem" }}>
              {/* Address */}
              <div>
                <h4
                  className="font-semibold mb-2 uppercase"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.12em", color: MUTED }}
                >
                  Address
                </h4>
                <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
                  {ADDRESS_LINE_1}<br />
                  {ADDRESS_LINE_2}<br />
                  <em style={{ color: FAINT, fontSize: "0.8125rem" }}>North Tampa · Near Seminole Heights</em>
                </p>
              </div>

              {/* Hours */}
              <div>
                <h4
                  className="font-semibold mb-2 uppercase"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.12em", color: MUTED }}
                >
                  Hours
                </h4>
                <table style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", borderCollapse: "collapse" }}>
                  <tbody>
                    <tr>
                      <td style={{ paddingRight: 24, paddingTop: 5, paddingBottom: 5, color: MUTED }}>Monday – Saturday</td>
                      <td style={{ color: "rgba(255,255,255,0.88)" }}>1:30 PM – 9:00 PM</td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 24, paddingTop: 5, paddingBottom: 5, color: MUTED }}>Sunday</td>
                      <td style={{ color: "rgba(255,255,255,0.88)" }}>Appointment Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Contact */}
              <div>
                <h4
                  className="font-semibold mb-2 uppercase"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.12em", color: MUTED }}
                >
                  Contact
                </h4>
                <p style={{ lineHeight: 1.8 }}>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="block transition hover:text-white"
                    style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none" }}
                  >
                    {PHONE_FORMATTED}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="block transition hover:text-white"
                    style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none" }}
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>

              {/* Payment */}
              <div>
                <h4
                  className="font-semibold mb-2 uppercase"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.12em", color: MUTED }}
                >
                  Payment
                </h4>
                <p style={{ color: MUTED, fontSize: "0.875rem" }}>Cash · Cash App · Venmo</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-white rounded-sm px-7 py-3 transition hover:brightness-110"
                  style={{ background: CRIMSON, letterSpacing: "0.1em", fontSize: "0.85rem", textDecoration: "none" }}
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="font-display rounded-sm px-7 py-3 transition"
                  style={{
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.1em",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  Call to Book
                </a>
              </div>
            </div>
          </div>

          {/* Studio exterior photo */}
          <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "1", border: `1px solid ${BORDER}` }}>
            <Image
              src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=900&q=80"
              alt="Ironblood Tattoos studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section
        style={{
          background: BG2,
          padding: "120px 0",
          borderTop: `1px solid ${BORDER}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gradient lines */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${CRIMSON}, transparent)`,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${CRIMSON}, transparent)`,
          }}
        />
        {/* Ghost background watermark */}
        <div
          className="font-display text-center"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(5rem, 20vw, 16rem)",
            color: "rgba(139,0,0,0.06)",
            letterSpacing: "0.04em",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          IRONBLOOD
        </div>

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
          <p
            className="font-display uppercase mb-6"
            style={{ fontSize: "0.75rem", color: CRIMSON, letterSpacing: "0.2em" }}
          >
            Ready?
          </p>
          <h2
            className="font-display text-white mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.05 }}
          >
            YOUR NEXT PIECE<br />
            <span style={{ color: CRIMSON }}>STARTS HERE.</span>
          </h2>
          <p
            className="max-w-md mx-auto mb-10"
            style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7 }}
          >
            Call us, DM us, or walk through the door. Mon–Sat, 1:30–9 PM.
            Bring your reference, your idea, or just your trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="font-display text-white rounded-sm transition hover:brightness-110"
              style={{
                background: CRIMSON,
                padding: "18px 48px",
                letterSpacing: "0.1em",
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {PHONE_FORMATTED} · Book Now
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display rounded-sm transition"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.85)",
                padding: "18px 48px",
                letterSpacing: "0.1em",
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ── */}
      <section style={{ background: BG2, padding: "60px 0", borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-white" style={{ fontSize: "1.4rem", letterSpacing: "0.08em" }}>
              @{INSTAGRAM_HANDLE.toUpperCase()}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold uppercase transition hover:opacity-70"
              style={{
                color: CRIMSON,
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
            >
              Follow on Instagram →
            </a>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative rounded-sm overflow-hidden group" style={{ aspectRatio: "1" }}>
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(139,0,0,0.75)" }}
                >
                  <span
                    className="font-display text-white"
                    style={{ fontSize: "0.7rem", letterSpacing: "0.12em" }}
                  >
                    VIEW
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER — CORRECT BRANDING (addresses audit: wrong "THE LOOK STUDIO") ── */}
      <footer style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: "60px 0 32px" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Brand — Ironblood Tattoos, not "The Look Studio" */}
            <div>
              <div className="font-display text-white mb-1" style={{ fontSize: "1.75rem", letterSpacing: "0.1em" }}>
                IRONBLOOD
              </div>
              <div className="font-display mb-4" style={{ fontSize: "0.78rem", color: CRIMSON, letterSpacing: "0.2em" }}>
                TATTOOS &amp; PIERCINGS
              </div>
              <p style={{ color: FAINT, fontSize: "0.8125rem", lineHeight: 1.65 }}>
                &ldquo;{MOTTO}&rdquo;<br />
                Tampa, FL · Est. {YEAR_FOUNDED}
              </p>
            </div>

            {/* Visit */}
            <div>
              <h4
                className="text-white font-semibold mb-4 uppercase"
                style={{ fontSize: "0.72rem", letterSpacing: "0.14em" }}
              >
                Visit
              </h4>
              <p style={{ color: FAINT, fontSize: "0.8125rem", lineHeight: 1.9 }}>
                {ADDRESS_LINE_1}<br />
                {ADDRESS_LINE_2}<br />
                Mon–Sat: 1:30 PM – 9:00 PM<br />
                Sunday: Appointment Only<br />
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="transition hover:text-white"
                  style={{ color: MUTED, textDecoration: "none" }}
                >
                  {PHONE_FORMATTED}
                </a>
              </p>
            </div>

            {/* Follow */}
            <div>
              <h4
                className="text-white font-semibold mb-4 uppercase"
                style={{ fontSize: "0.72rem", letterSpacing: "0.14em" }}
              >
                Follow
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                  style={{ color: MUTED, textDecoration: "none", fontSize: "0.8125rem" }}
                >
                  Instagram — @ironblood.tattoos
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                  style={{ color: MUTED, textDecoration: "none", fontSize: "0.8125rem" }}
                >
                  Facebook — Ironblood Tattoos
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition hover:text-white"
                  style={{ color: MUTED, textDecoration: "none", fontSize: "0.8125rem" }}
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Footer bottom bar — correct copyright, correct business name */}
          <div
            className="flex flex-wrap justify-between gap-2"
            style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, fontSize: "0.72rem", color: FAINT }}
          >
            <span>© 2026 {BUSINESS_NAME}. All rights reserved.</span>
            <span>
              Mockup by{" "}
              <a
                href="https://thryveops.com"
                className="transition hover:text-white"
                style={{ color: CRIMSON, textDecoration: "none" }}
              >
                Thryve Operations
              </a>
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
