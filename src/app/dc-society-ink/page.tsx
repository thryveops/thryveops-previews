import Image from "next/image";
import Link from "next/link";

// ─── BUSINESS IDENTITY ─────────────────────────────────────────────────────────
const BUSINESS_NAME    = "DC Society Ink";
const TAGLINE          = "South Tampa's Premier Custom Tattoo Studio";
const NEIGHBORHOOD     = "South Tampa";
const YEAR_FOUNDED     = "2022";

// ─── BRAND PALETTE — Dark luxury: deep navy-black + gold ──────────────────────
const BG1    = "#0D0D14";   // deepest background
const BG2    = "#13131E";   // alternate sections
const BG3    = "#1A1A2E";   // card backgrounds
const BG4    = "#22223A";   // elevated surfaces
const ACCENT = "#C9A84C";   // primary gold accent
const RULE   = "#2A2A42";   // borders / dividers
const TEXT1  = "#F5F5F0";   // primary text
const TEXT2  = "#A0A0B8";   // secondary text
const TEXT3  = "#606075";   // muted text

// ─── CONTACT & LINKS ───────────────────────────────────────────────────────────
const PHONE_FORMATTED  = "(813) 533-0002";
const PHONE_RAW        = "8135330002";
const EMAIL            = "bookings@dcsocietyink.com";
const ADDRESS_LINE_1   = "1108 W Kennedy Blvd";
const ADDRESS_LINE_2   = "Tampa, FL 33606";
const BOOKING_URL      = "mailto:bookings@dcsocietyink.com";
const DIRECTIONS_URL   = "https://www.google.com/maps/dir//1108+W+Kennedy+Blvd,+Tampa,+FL+33606";
const INSTAGRAM_HANDLE = "dcsocietyink";
const FACEBOOK_HANDLE  = "DCSOCIETYINK";
const AVG_RATING       = "4.9";
const REVIEW_COUNT     = "268";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — South Tampa's Premier Tattoo Studio`,
  description:
    "DC Society Ink — co-founded by Dave Bautista. Ten world-class artists. Hyperrealism, fine line, black & grey, color realism, and more. 1108 W Kennedy Blvd, South Tampa. ★4.9 / 268 Google reviews.",
};

// ─── ARTISTS ───────────────────────────────────────────────────────────────────
const artists = [
  {
    name:      "LUIS",
    specialty: "Hyperrealism · Trash Polka · Cover-Ups",
    badge:     "15+ Yrs",
    bio:       "Versatile across color hyperrealism, black & grey realism, trash polka, traditional, and newschool. Luis turns complex, multi-reference briefs into cohesive single pieces.",
    img:       "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?w=600&q=80",
  },
  {
    name:      "SOFIIA",
    specialty: "Fine Line · Florals · Minimal",
    badge:     "Booking Open",
    bio:       "Specialist in delicate florals, soft line work, and intricate minimal designs. Sofiia's fine line pieces age beautifully and work equally well as standalone statements or additions to existing collections.",
    img:       "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  },
  {
    name:      "VEE",
    specialty: "Black & Grey Realism · Florals · Anime",
    badge:     null,
    bio:       "Black and grey realism with a distinct softness — florals, botanicals, and animated subjects rendered with exceptional tonal range. Vee's work has a quiet drama that photographs exceptionally well.",
    img:       "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=600&q=80",
  },
  {
    name:      "LUIGI",
    specialty: "Realism · Color · Large Scale",
    badge:     "Large Scale",
    bio:       "Full-color realism and large compositional work are Luigi's arena. Sleeves, back pieces, and complex multi-session projects. If you're committed to something ambitious, Luigi is the conversation to start.",
    img:       "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80",
  },
  {
    name:      "BRANDON",
    specialty: "Black & Grey · Surrealism · Cover-Ups",
    badge:     null,
    bio:       "A black and grey specialist with a surrealist eye — Brandon's cover-up work is among the most technically demanding in the studio. Clients seeking transformative cover-ups book months in advance.",
    img:       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
];

// ─── GALLERY ITEMS ─────────────────────────────────────────────────────────────
const galleryItems = [
  {
    img:   "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
    label: "Hyperrealism · Luis",
    alt:   "Hyperrealism tattoo",
  },
  {
    img:   "https://images.unsplash.com/photo-1601315379734-425a469078de?w=600&q=80",
    label: "Fine Line · Sofiia",
    alt:   "Fine line floral tattoo",
  },
  {
    img:   "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    label: "Black & Grey · Brandon",
    alt:   "Black and grey realism tattoo",
  },
  {
    img:   "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=600&q=80",
    label: "Color Realism · Luigi",
    alt:   "Color realism tattoo",
  },
  {
    img:   "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
    label: "Botanical · Vee",
    alt:   "Floral botanical tattoo",
  },
  {
    img:   "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
    label: "Geometric · Aybar",
    alt:   "Geometric tattoo",
  },
  {
    img:   "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
    label: "Minimal · Karolina",
    alt:   "Minimalist tattoo",
  },
  {
    img:   "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600&q=80",
    label: "Neo-Traditional · Camilo",
    alt:   "Neo-traditional tattoo",
  },
];

// ─── INSTAGRAM GRID ────────────────────────────────────────────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&q=80",
  "https://images.unsplash.com/photo-1601315379734-425a469078de?w=400&q=80",
  "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=400&q=80",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
  "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&q=80",
  "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=400&q=80",
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
const reviews = [
  {
    text:   "I cannot say enough good things about this studio. From the moment I walked in, the vibe was warm and professional — nothing like the intimidating shops I'd been to before. Luis did my sleeve and it is genuinely the most beautiful thing I own.",
    author: "Maria T., Google Review",
  },
  {
    text:   "Sofiia did the most delicate fine line piece on my wrist and I've been getting compliments on it constantly. The studio is clean, the artists are real artists — not just technicians — and the aftercare instructions they gave me were the most thorough I've ever received.",
    author: "Ashley R., Google Review",
  },
  {
    text:   "Brandon covered a piece I'd been embarrassed by for 10 years. The transformation is unbelievable — I still can't believe how good it looks. I sent three friends here already. DC Society Ink is the real deal, full stop.",
    author: "Derek M., Google Review",
  },
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: BG1, color: TEXT1 }}>

      {/* ── STICKY NAV ─────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur"
        style={{ background: "rgba(13,13,20,0.96)", borderBottom: `1px solid ${RULE}` }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span
              className="font-display text-2xl"
              style={{
                letterSpacing: "0.1em",
                background: `linear-gradient(90deg, ${ACCENT}, #E2C07A, #fff, #E2C07A, ${ACCENT})`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              DC SOCIETY INK
            </span>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: TEXT3, marginTop: 1 }}>
              Dream Chaser · South Tampa
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium" style={{ color: TEXT2 }}>
            <a href="#gallery" className="transition-colors hover:text-amber-400">Gallery</a>
            <a href="#artists" className="transition-colors hover:text-amber-400">Artists</a>
            <a href="#about" className="transition-colors hover:text-amber-400">Our Story</a>
            <a href="#visit" className="transition-colors hover:text-amber-400">Visit</a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2 rounded-full text-sm transition-colors hover:text-amber-400"
              style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT, fontSize: "0.8rem" }}
            >
              Walk-Ins Welcome
            </a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold transition hover:brightness-110"
              style={{ background: ACCENT, color: BG1 }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href={BOOKING_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: ACCENT, color: BG1 }}
          >
            Book Now
          </a>
        </div>
      </nav>


      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "92vh", minHeight: 620 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1920&q=85"
          alt="Tattoo artist at work in DC Society Ink studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(13,13,20,0.55) 0%, rgba(13,13,20,0.78) 60%, rgba(13,13,20,0.97) 100%)" }}
        />

        {/* Gold top edge */}
        <div
          className="absolute top-0 left-0 w-full"
          style={{ height: 2, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-5 max-w-4xl">
          <p
            className="mb-5"
            style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT }}
          >
            1108 W Kennedy Blvd · South Tampa · Since 2022
          </p>

          <h1
            className="font-display mb-6 leading-none"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              background: `linear-gradient(90deg, ${ACCENT}, #E2C07A, #fff, #E2C07A, ${ACCENT})`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DC SOCIETY INK
          </h1>

          <p
            className="mb-3"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: TEXT2, fontStyle: "italic", letterSpacing: "0.02em", fontFamily: "Georgia, serif" }}
          >
            &ldquo;We&rsquo;re turning this dream into a reality — it&rsquo;s going to be an experience.&rdquo;
          </p>
          <p className="mb-8 text-sm" style={{ color: ACCENT, letterSpacing: "0.12em" }}>
            — Dave Bautista, Co-Founder
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-2 mb-10">
            <div className="text-center">
              <div className="font-display" style={{ fontSize: "2rem", color: ACCENT }}>4.9★</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: TEXT3 }}>268 Google Reviews</div>
            </div>
            <div style={{ width: 1, background: RULE }} className="hidden md:block" />
            <div className="text-center">
              <div className="font-display" style={{ fontSize: "2rem", color: ACCENT }}>10+</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: TEXT3 }}>World-Class Artists</div>
            </div>
            <div style={{ width: 1, background: RULE }} className="hidden md:block" />
            <div className="text-center">
              <div className="font-display" style={{ fontSize: "2rem", color: ACCENT }}>19K</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: TEXT3 }}>Instagram Followers</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full font-semibold transition hover:brightness-110"
              style={{ background: ACCENT, color: BG1, fontSize: "0.9rem" }}
            >
              Book a Consultation
            </a>
            <a
              href="#artists"
              className="px-8 py-4 rounded-full font-semibold transition hover:border-amber-400 hover:text-amber-400"
              style={{ border: "1.5px solid rgba(245,245,240,0.25)", color: TEXT1, fontSize: "0.9rem" }}
            >
              Meet the Artists
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: TEXT3 }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, ${ACCENT}, transparent)` }} />
        </div>
      </section>


      {/* ── VALUE PROP STRIP ───────────────────────────────────────────────── */}
      <section style={{ background: BG2, borderTop: `1px solid ${RULE}`, borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">

          <div className="px-10 py-10 text-center md:border-r" style={{ borderColor: RULE }}>
            <div className="font-display mb-3" style={{ fontSize: "1.8rem", letterSpacing: "0.08em", color: ACCENT }}>DREAM CHASER</div>
            <p style={{ color: TEXT2, fontSize: "0.875rem", lineHeight: 1.6 }}>
              Founded on the conviction that every story deserves to be told in ink — by artists who treat your canvas with the same respect you do.
            </p>
          </div>

          <div className="px-10 py-10 text-center md:border-r" style={{ borderColor: RULE }}>
            <div className="font-display mb-3" style={{ fontSize: "1.8rem", letterSpacing: "0.08em", color: ACCENT }}>SOUTH TAMPA&rsquo;S OWN</div>
            <p style={{ color: TEXT2, fontSize: "0.875rem", lineHeight: 1.6 }}>
              1108 W Kennedy Blvd — right in the heart of South Tampa. Walk-ins welcome. Consultations by appointment. $300/hr session rate.
            </p>
          </div>

          <div className="px-10 py-10 text-center">
            <div className="font-display mb-3" style={{ fontSize: "1.8rem", letterSpacing: "0.08em", color: ACCENT }}>EVERY STYLE</div>
            <p style={{ color: TEXT2, fontSize: "0.875rem", lineHeight: 1.6 }}>
              Hyperrealism. Fine line. Black &amp; grey. Trash polka. Florals. Color. Large-scale compositions. Ten artists. One standard: extraordinary.
            </p>
          </div>

        </div>
      </section>


      {/* ── GALLERY / STYLE FILTER ────────────────────────────────────────── */}
      <section id="gallery" className="py-24 md:py-32 px-5 md:px-8" style={{ background: BG1 }}>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-5">
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT }}>Our Work</p>
          </div>
          <div className="text-center mb-4">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                background: `linear-gradient(90deg, ${ACCENT}, #E2C07A, #fff, #E2C07A, ${ACCENT})`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              THE GALLERY
            </h2>
          </div>
          <div className="text-center mb-12">
            <p style={{ color: TEXT2, maxWidth: 520, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Browse by style. Every piece below was completed in our South Tampa studio. Filter to find the artist and aesthetic that fits your vision.
            </p>
          </div>

          {/* Style filter pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All Styles", "Hyperrealism", "Fine Line", "Black & Grey", "Color & Realism", "Floral & Botanical", "Trash Polka", "Large Scale"].map((pill, i) => (
              <button
                key={pill}
                className="px-5 py-2 rounded-full text-sm font-medium transition"
                style={
                  i === 0
                    ? { background: ACCENT, color: BG1, fontSize: "0.78rem" }
                    : { border: "1.5px solid rgba(245,245,240,0.25)", color: TEXT1, fontSize: "0.78rem" }
                }
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className="relative rounded-lg overflow-hidden cursor-pointer group"
                style={{ aspectRatio: "1" }}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                  style={{ background: "rgba(201,168,76,0.18)" }}
                >
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT }}>
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/dcsocietyink/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full text-sm font-medium transition hover:text-amber-300"
              style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT, fontSize: "0.85rem" }}
            >
              View Full Portfolio on Instagram →
            </a>
          </div>

        </div>
      </section>


      {/* ── ARTIST ROSTER ─────────────────────────────────────────────────── */}
      <section id="artists" className="py-24 md:py-32 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-5">
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT }}>The Roster</p>
          </div>
          <div className="text-center mb-4">
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.06em", color: ACCENT }}>
              MEET THE ARTISTS
            </h2>
          </div>
          <div className="text-center mb-16">
            <p style={{ color: TEXT2, maxWidth: 540, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Each artist at DC Society Ink brings a distinct mastery to their craft. Choose your artist, or let us match you based on the work you&rsquo;re envisioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {artists.map((artist) => (
              <div
                key={artist.name}
                className="rounded-xl overflow-hidden group"
                style={{ background: BG3, border: `1px solid ${RULE}` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-xl">
                  <Image
                    src={artist.img}
                    alt={`Tattoo artist ${artist.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                    style={{ filter: "grayscale(40%)" }}
                  />
                  <div
                    className="absolute inset-0 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(201,168,76,0.15)" }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display" style={{ fontSize: "1.5rem", letterSpacing: "0.06em", color: ACCENT }}>
                        {artist.name}
                      </h3>
                      <p style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: TEXT3 }}>
                        {artist.specialty}
                      </p>
                    </div>
                    {artist.badge && (
                      <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 8px", border: `1px solid ${ACCENT}`, color: ACCENT, borderRadius: 20 }}>
                        {artist.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ color: TEXT2, fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                    {artist.bio}
                  </p>
                  <a
                    href={`mailto:bookings@dcsocietyink.com?subject=Booking Inquiry — ${artist.name.charAt(0) + artist.name.slice(1).toLowerCase()}`}
                    className="block text-center py-2 rounded-full text-sm transition hover:text-amber-300"
                    style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT, fontSize: "0.78rem" }}
                  >
                    Book {artist.name.charAt(0) + artist.name.slice(1).toLowerCase()}
                  </a>
                </div>
              </div>
            ))}

            {/* +5 More card */}
            <div
              className="rounded-xl flex flex-col items-center justify-center text-center p-8 cursor-pointer"
              style={{ background: BG3, border: `1px dashed ${RULE}`, minHeight: 400 }}
            >
              <div className="font-display mb-3" style={{ fontSize: "2rem", letterSpacing: "0.06em", color: ACCENT }}>+5 MORE</div>
              <p style={{ color: TEXT2, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                John Kural, Camilo, Aybar, Karolina, Alex, and Raquel are all booking. View the full roster and find the artist who fits your vision.
              </p>
              <a
                href={BOOKING_URL}
                className="px-6 py-3 rounded-full text-sm font-semibold transition hover:brightness-110"
                style={{ background: ACCENT, color: BG1, fontSize: "0.8rem" }}
              >
                Find Your Artist
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* ── DAVE BAUTISTA FOUNDING STORY ─────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-5 md:px-8" style={{ background: BG2, borderTop: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Studio image */}
          <div className="order-2 md:order-1 relative">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                alt="DC Society Ink studio interior South Tampa"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Gold accent border */}
            <div
              className="absolute -bottom-4 -right-4 rounded-xl"
              style={{ width: "60%", height: "60%", border: `1px solid ${ACCENT}`, zIndex: -1 }}
            />
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2">
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT }} className="mb-4">
              Our Story
            </p>
            <div style={{ width: 48, height: 2, background: ACCENT }} className="mb-6" />

            <h2
              className="font-display mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.05em", lineHeight: 1.1, color: ACCENT }}
            >
              THE DREAM<br />CHASER STORY
            </h2>

            <p style={{ color: TEXT2, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              DC Society Ink was born from a conviction shared by co-founders Dave Bautista and John Kural: that tattooing is storytelling, and every client deserves an artist who treats their story with care. &ldquo;DC&rdquo; isn&rsquo;t just initials — it stands for Dream Chaser, Bautista&rsquo;s personal mantra and a nod to his Washington D.C. roots. The name carries the ethos of the shop: deliberate, ambitious, and built to last.
            </p>

            <p style={{ color: TEXT2, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              Opened in January 2022 at 1108 W Kennedy Blvd, the studio brought together ten artists spanning every major tattoo discipline — from Luis Morales&rsquo;s 15+ years of hyperrealism mastery to Sofiia&rsquo;s precise fine line florals. The goal was never to be another Tampa tattoo shop. The goal was to be a destination: welcoming, premium, and consistent enough that a 4.9-star Google rating across 268 reviews feels earned, not performed.
            </p>

            <p style={{ color: TEXT2, fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Walk-ins are always welcome. Consultations are always complimentary. And whether you&rsquo;re walking in for a first tattoo or starting a multi-session sleeve, the experience at DC Society Ink is designed to feel like exactly what it is: art made by people who take it seriously.
            </p>

            {/* Bautista quote pull */}
            <blockquote
              className="rounded-lg p-5 mb-7"
              style={{ background: BG4, borderLeft: `3px solid ${ACCENT}` }}
            >
              <p style={{ color: TEXT1, fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.7, fontFamily: "Georgia, serif" }}>
                &ldquo;We&rsquo;re turning this dream into a reality — it&rsquo;s going to be an experience.&rdquo;
              </p>
              <footer style={{ fontSize: "0.75rem", color: TEXT3, marginTop: 8, letterSpacing: "0.08em" }}>
                — Dave Bautista, Co-Founder, WWE Hall of Famer &amp; Marvel&rsquo;s Drax
              </footer>
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                className="px-7 py-3 rounded-full text-sm font-semibold transition hover:brightness-110"
                style={{ background: ACCENT, color: BG1 }}
              >
                Book a Consultation
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full text-sm font-semibold transition hover:border-amber-400 hover:text-amber-400"
                style={{ border: "1.5px solid rgba(245,245,240,0.25)", color: TEXT1 }}
              >
                @dcsocietyink
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ── SERVICES + PRICING ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ background: BG1, borderTop: `1px solid ${RULE}` }}>
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-5">
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT }}>Book Your Session</p>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.06em", color: ACCENT }}>
              BOOKING &amp; PRICING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">

            {/* Session types */}
            <div className="p-8 rounded-2xl" style={{ background: BG3, border: `1px solid ${RULE}` }}>
              <h3 className="font-display mb-6" style={{ fontSize: "1.4rem", letterSpacing: "0.06em", color: ACCENT }}>SESSION TYPES</h3>
              <div className="space-y-5">

                <div className="flex justify-between items-start pb-4" style={{ borderBottom: `1px solid ${RULE}` }}>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontSize: "0.9rem" }}>Walk-In</div>
                    <div style={{ color: TEXT2, fontSize: "0.78rem" }}>First-come, first-served. Smaller pieces, flash designs, and touch-ups. Mon–Sat 11am–9pm.</div>
                  </div>
                  <span className="font-semibold ml-4 whitespace-nowrap" style={{ color: ACCENT, fontSize: "0.9rem" }}>$300/hr</span>
                </div>

                <div className="flex justify-between items-start pb-4" style={{ borderBottom: `1px solid ${RULE}` }}>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontSize: "0.9rem" }}>Consultation + Appointment</div>
                    <div style={{ color: TEXT2, fontSize: "0.78rem" }}>Custom work, cover-ups, and multi-session projects. Free consultation. $300 deposit secures your date.</div>
                  </div>
                  <span className="font-semibold ml-4 whitespace-nowrap" style={{ color: ACCENT, fontSize: "0.9rem" }}>$300/hr</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold mb-1" style={{ fontSize: "0.9rem" }}>Large Scale / Multi-Session</div>
                    <div style={{ color: TEXT2, fontSize: "0.78rem" }}>Sleeves, back pieces, full compositions. Scheduled up to 3 months in advance. Contact for project quote.</div>
                  </div>
                  <span className="font-semibold ml-4 whitespace-nowrap" style={{ color: ACCENT, fontSize: "0.9rem" }}>Contact Us</span>
                </div>

              </div>
            </div>

            {/* What to know */}
            <div className="p-8 rounded-2xl" style={{ background: BG3, border: `1px solid ${RULE}` }}>
              <h3 className="font-display mb-6" style={{ fontSize: "1.4rem", letterSpacing: "0.06em", color: ACCENT }}>WHAT TO KNOW</h3>
              <div className="space-y-4" style={{ color: TEXT2, fontSize: "0.83rem", lineHeight: 1.7 }}>
                {[
                  "Must be 18+ with valid government-issued ID. No exceptions.",
                  "$300 deposit required to secure appointment. Non-refundable and non-transferable.",
                  "We accept cash and all major credit cards. 3% processing fee on card payments.",
                  "Provide reference photos with detailed description for fastest processing of custom requests.",
                  "Complimentary consultations available. Book a consult before committing to a session.",
                  "We provide full aftercare guidance. Your healing is part of the work — we take it seriously.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span style={{ color: ACCENT, marginTop: "0.125rem" }}>▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center">
            <a
              href={BOOKING_URL}
              className="inline-block px-10 py-4 rounded-full font-semibold mr-3 transition hover:brightness-110"
              style={{ background: ACCENT, color: BG1, fontSize: "0.9rem" }}
            >
              Start Your Booking
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-block px-10 py-4 rounded-full font-semibold transition hover:text-amber-300"
              style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT, fontSize: "0.9rem" }}
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>

        </div>
      </section>


      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-8" style={{ background: BG1 }}>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-5">
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT }}>Client Reviews</p>
          </div>
          <div className="text-center mb-4">
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "0.05em", color: ACCENT }}>
              ★★★★★ {AVG_RATING} ON GOOGLE
            </h2>
          </div>
          <div className="text-center mb-16">
            <p style={{ color: TEXT3, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
              Based on {REVIEW_COUNT} verified Google reviews · South Tampa&rsquo;s highest-rated tattoo studio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-7 rounded-xl"
                style={{ background: BG3, border: `1px solid ${RULE}` }}
              >
                <p className="mb-4" style={{ fontSize: "1.1rem", letterSpacing: "0.05em", color: ACCENT }}>★★★★★</p>
                <p style={{ color: TEXT1, fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1.2rem", fontStyle: "italic" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer style={{ fontSize: "0.75rem", color: TEXT3 }}>— {r.author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/DC+Society+Ink+Tampa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full text-sm font-medium transition hover:border-amber-400 hover:text-amber-400"
              style={{ border: "1.5px solid rgba(245,245,240,0.25)", color: TEXT1, fontSize: "0.82rem" }}
            >
              Read All 268 Reviews on Google →
            </a>
          </div>

        </div>
      </section>


      {/* ── BOOKING FORM (replaces Yahoo email) ───────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-8 relative overflow-hidden" style={{ background: BG3 }}>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full" style={{ height: 1, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />
        <div className="absolute bottom-0 left-0 w-full" style={{ height: 1, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />

        {/* Ghost background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-display"
            style={{ fontSize: "clamp(6rem, 18vw, 16rem)", color: "rgba(201,168,76,0.04)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
          >
            DREAM CHASER
          </span>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">

          <div className="text-center mb-12">
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT }} className="mb-4">
              Get Started
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "0.05em", lineHeight: 1.1 }}
            >
              <span
                style={{
                  background: `linear-gradient(90deg, ${ACCENT}, #E2C07A, #fff, #E2C07A, ${ACCENT})`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                YOUR STORY.<br />YOUR SKIN.<br />YOUR ARTISTS.
              </span>
            </h2>
            <p style={{ color: TEXT2, fontSize: "0.9rem", lineHeight: 1.7 }}>
              Fill out the form below and we&rsquo;ll match you with the right artist and confirm your date. Complimentary consultations always available.
            </p>
          </div>

          {/* Booking form */}
          <form
            action={BOOKING_URL}
            method="GET"
            className="space-y-5 rounded-2xl p-8"
            style={{ background: BG4, border: `1px solid ${RULE}` }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1.5 text-xs font-medium" style={{ color: TEXT2, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition focus:border-amber-400"
                  style={{ background: BG3, border: `1px solid ${RULE}`, color: TEXT1 }}
                />
              </div>
              <div>
                <label className="block mb-1.5 text-xs font-medium" style={{ color: TEXT2, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition focus:border-amber-400"
                  style={{ background: BG3, border: `1px solid ${RULE}`, color: TEXT1 }}
                />
              </div>
            </div>

            <div>
              <label className="block mb-1.5 text-xs font-medium" style={{ color: TEXT2, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Preferred Artist
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition"
                style={{ background: BG3, border: `1px solid ${RULE}`, color: TEXT1 }}
              >
                <option value="">Select an artist (or let us match you)</option>
                <option>Luis — Hyperrealism · Trash Polka</option>
                <option>Sofiia — Fine Line · Florals</option>
                <option>Vee — Black &amp; Grey · Anime</option>
                <option>Luigi — Color Realism · Large Scale</option>
                <option>Brandon — Black &amp; Grey · Cover-Ups</option>
                <option>Any available artist</option>
              </select>
            </div>

            <div>
              <label className="block mb-1.5 text-xs font-medium" style={{ color: TEXT2, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Project Type
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition"
                style={{ background: BG3, border: `1px solid ${RULE}`, color: TEXT1 }}
              >
                <option value="">Select session type</option>
                <option>Walk-In / Flash Piece</option>
                <option>Custom Appointment</option>
                <option>Cover-Up</option>
                <option>Large Scale / Multi-Session</option>
                <option>Free Consultation First</option>
              </select>
            </div>

            <div>
              <label className="block mb-1.5 text-xs font-medium" style={{ color: TEXT2, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Tell us about your vision
              </label>
              <textarea
                rows={4}
                placeholder="Describe your idea, placement, size, and any reference images you have..."
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition resize-none"
                style={{ background: BG3, border: `1px solid ${RULE}`, color: TEXT1 }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold transition hover:brightness-110"
              style={{ background: ACCENT, color: BG1 }}
            >
              Send Booking Request
            </button>

            <p className="text-center" style={{ fontSize: "0.73rem", color: TEXT3 }}>
              Or call us directly at{" "}
              <a href={`tel:${PHONE_RAW}`} style={{ color: ACCENT }}>
                {PHONE_FORMATTED}
              </a>{" "}
              · We respond within 24 hours
            </p>
          </form>

        </div>
      </section>


      {/* ── VISIT + HOURS ─────────────────────────────────────────────────── */}
      <section id="visit" className="py-24 md:py-32 px-5 md:px-8" style={{ background: BG2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Info */}
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: ACCENT }} className="mb-4">
              Find Us
            </p>
            <div style={{ width: 48, height: 2, background: ACCENT }} className="mb-6" />
            <h2
              className="font-display mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.05em", lineHeight: 1.1, color: ACCENT }}
            >
              SOUTH TAMPA<br />W KENNEDY BLVD
            </h2>

            <div className="space-y-7" style={{ fontSize: "0.88rem" }}>
              <div>
                <h4 style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT }} className="font-semibold mb-2">
                  Address
                </h4>
                <p style={{ color: TEXT2, lineHeight: 1.7 }}>
                  {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT }} className="font-semibold mb-3">
                  Hours
                </h4>
                <table style={{ color: TEXT2, fontSize: "0.83rem", borderCollapse: "collapse", width: "100%" }}>
                  <tbody>
                    <tr style={{ borderBottom: `1px solid ${RULE}` }}>
                      <td style={{ padding: "7px 24px 7px 0", color: TEXT3 }}>Mon – Sat</td>
                      <td style={{ padding: "7px 0" }}>11:00 AM – 9:00 PM</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "7px 24px 7px 0", color: TEXT3 }}>Sunday</td>
                      <td style={{ padding: "7px 0", color: ACCENT }}>Walk-ins only · Hours may vary</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT }} className="font-semibold mb-2">
                  Contact
                </h4>
                <p style={{ color: TEXT2, lineHeight: 1.9 }}>
                  <a href={`tel:${PHONE_RAW}`} className="transition hover:text-amber-400" style={{ color: "inherit" }}>
                    {PHONE_FORMATTED}
                  </a>
                  <br />
                  <a href={`mailto:${EMAIL}`} className="transition hover:text-amber-400" style={{ color: "inherit" }}>
                    {EMAIL}
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-sm font-semibold transition hover:brightness-110"
                  style={{ background: ACCENT, color: BG1, fontSize: "0.82rem" }}
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="px-6 py-3 rounded-full text-sm font-semibold transition hover:text-amber-300"
                  style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT, fontSize: "0.82rem" }}
                >
                  Call the Studio
                </a>
              </div>
            </div>
          </div>

          {/* Studio image */}
          <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
              alt="Tattoo studio interior South Tampa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>


      {/* ── INSTAGRAM STRIP ──────────────────────────────────────────────── */}
      <section style={{ background: BG1, borderTop: `1px solid ${RULE}`, padding: "3rem 1.25rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display" style={{ fontSize: "1.5rem", letterSpacing: "0.08em", color: ACCENT }}>
              @DCSOCIETYINK
            </p>
            <a
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:underline"
              style={{ color: ACCENT, fontSize: "0.78rem", letterSpacing: "0.08em" }}
            >
              19K Followers · Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square group overflow-hidden">
                <Image
                  src={src}
                  alt="DC Society Ink tattoo work"
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(201,168,76,0.18)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="py-14 px-5 md:px-8" style={{ background: "#080810", borderTop: `1px solid ${RULE}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          <div>
            <p className="font-display mb-2" style={{ fontSize: "1.5rem", letterSpacing: "0.1em", color: ACCENT }}>
              DC SOCIETY INK
            </p>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TEXT3, marginBottom: "0.8rem" }}>
              Dream Chaser · South Tampa
            </p>
            <p style={{ color: TEXT3, fontSize: "0.8rem", lineHeight: 1.6 }}>
              South Tampa&rsquo;s premier tattoo studio. Co-founded by Dave Bautista and John Kural — ten artists, every style, one standard.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.8rem", fontWeight: 600 }}>
              Visit Us
            </h4>
            <p style={{ color: TEXT2, fontSize: "0.82rem", lineHeight: 1.8 }}>
              {ADDRESS_LINE_1}<br />
              {ADDRESS_LINE_2}<br />
              <a href={`tel:${PHONE_RAW}`} style={{ color: "inherit" }}>{PHONE_FORMATTED}</a><br />
              Mon–Sat: 11am – 9pm
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.8rem", fontWeight: 600 }}>
              Connect
            </h4>
            <div className="flex gap-5">
              <a
                href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-400"
                style={{ color: TEXT2, fontSize: "0.82rem" }}
              >
                Instagram
              </a>
              <a
                href={`https://www.facebook.com/${FACEBOOK_HANDLE}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-400"
                style={{ color: TEXT2, fontSize: "0.82rem" }}
              >
                Facebook
              </a>
            </div>
          </div>

        </div>

        <div
          className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontSize: "0.72rem", color: TEXT3 }}>
            &copy; 2026 DC Society Ink · 1108 W Kennedy Blvd, Tampa, FL 33606
          </p>
          <p style={{ fontSize: "0.68rem", color: TEXT3 }}>
            Mockup by{" "}
            <a href="https://thryveops.com" style={{ color: ACCENT, textDecoration: "none" }}>
              Thryve Operations
            </a>{" "}
            · thryveops.com · @thryveops
          </p>
        </div>
      </footer>

    </div>
  );
}
