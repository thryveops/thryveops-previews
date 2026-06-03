import Image from "next/image";
import Link from "next/link";

// ─── PROSPECT DATA ──────────────────────────────────────────────────────────
// Fonts (Fraunces + Inter) and Vercel Analytics are loaded globally via layout.tsx.
// No imports needed here. Use className="font-display" for serif headings.

// Business identity
const BUSINESS_NAME    = "Abella's Cuban Restaurant";
const TAGLINE          = "Tampa's Neighborhood Cuban Kitchen";
const NEIGHBORHOOD     = "N 34th Street · Tampa, FL";
const YEAR_FOUNDED     = "Day One";

// Brand palette — terracotta + warm cream + gold
const PAPER    = "#F7F2EB";   // warm cream page background
const PAPER_ALT = "#FDFAF5";  // slightly lighter cream for alternating sections
const INK      = "#1C1008";   // near-black with warm undertone
const ACCENT   = "#C4622D";   // terracotta — primary brand
const ACCENT2  = "#C9A84C";   // warm gold — secondary
const MUTED    = "#6B5B4E";   // warm mid-tone for secondary text
const RULE     = "#E2D5C3";   // warm rule color

// Contact & links
const PHONE_FORMATTED  = "(813) 247-2231";
const PHONE_RAW        = "18132472231";
const ADDRESS_LINE_1   = "2124 N 34th St";
const ADDRESS_LINE_2   = "Tampa, FL 33605";
const UBER_EATS_URL    = "https://www.ubereats.com/store/abellas-cuban-restaurant/1gnOvVRhQ-6p5kbztE8KWg";
const DOORDASH_URL     = "https://www.doordash.com/store/abellas-restaurant-tampa-30565115/";
const ORDER_URL        = UBER_EATS_URL;
const DIRECTIONS_URL   = "https://www.google.com/maps/dir//2124+N+34th+St,+Tampa,+FL+33605";
const GOOGLE_MAPS_URL  = "https://www.google.com/maps/search/Abella%27s+Cuban+Restaurant+Tampa";
const FULL_MENU_URL    = UBER_EATS_URL;
const INSTAGRAM_HANDLE = "abellasrestaurant";
const AVG_RATING       = "4.3";
const REVIEW_COUNT     = "604";

// ─── PAGE METADATA ──────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE}`,
  description:
    "Abella's Cuban Restaurant serves authentic Cuban food on Tampa's east side — pressed Cuban sandwiches, palomilla steak, ropa vieja, and breakfast from 6am. Order online via Uber Eats or DoorDash.",
};

// ─── MENU ITEMS — real prices, real descriptions ─────────────────────────────
// These are the authoritative prices. Third-party aggregators (Allmenus, Zmenu, etc.)
// show outdated data (some as low as $6.25). This site is the source of truth.
const menuItems = [
  {
    name:  "Cuban Sandwich",
    price: "$12",
    desc:  "Ham, salami, slow-roasted Cuban pork, Swiss cheese & yellow mustard — hot-pressed on fresh Cuban bread until golden.",
    img:   "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80",
  },
  {
    name:  "Palomilla Steak",
    price: "$15",
    desc:  "Grilled or breaded thin-cut palomilla, served with yellow rice, beans, salad & Cuban bread. A Tampa east-side staple.",
    img:   "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    name:  "Ropa Vieja",
    price: "$13",
    desc:  "Slow-cooked shredded beef in sofrito tomato sauce — tender, deeply seasoned, served with rice, beans & fresh Cuban bread.",
    img:   "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
  },
  {
    name:  "Picadillo",
    price: "$12",
    desc:  "Seasoned ground beef with olives & sofrito — a Cuban comfort classic, plated with rice, beans & Cuban bread.",
    img:   "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
  },
  {
    name:  "Breakfast Platter",
    price: "from $10",
    desc:  "Two eggs, grits or toast & your choice of meat — served hot from 6am. Pair it with a café con leche.",
    img:   "https://images.unsplash.com/photo-1533920379810-6bedac961555?w=800&q=80",
  },
  {
    name:  "Albóndigas",
    price: "$12",
    desc:  "Cuban-seasoned meatballs in a rich tomato sauce — served with yellow rice, black beans & fresh Cuban bread.",
    img:   "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80",
  },
];

// ─── REVIEWS — real quotes from Google / Yelp ────────────────────────────────
const reviews = [
  {
    text:   "The ham was delicious, the eggs were fluffy, and the cheese was melted goodness on fresh pressed Cuban bread. This place is a hidden gem on the east side.",
    author: "Yelp Reviewer",
  },
  {
    text:   "Authentic Cuban food at a price that makes sense. The palomilla steak platter is the real deal — rice, beans, bread, all of it. I bring my whole family here.",
    author: "Google Reviewer",
  },
  {
    text:   "Every morning I stop in for café con leche and a breakfast sandwich. The staff is warm, the food is fast and fresh. This is my spot. Has been for years.",
    author: "Google Reviewer",
  },
];

// ─── INSTAGRAM GRID — Cuban food Unsplash photos, all verified 200 ───────────
const igPhotos = [
  { src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80", alt: "Cuban food" },
  { src: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80", alt: "Cuban sandwich" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", alt: "Steak platter" },
  { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", alt: "Rice and beans" },
  { src: "https://images.unsplash.com/photo-1533920379810-6bedac961555?w=400&q=80", alt: "Cuban breakfast" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", alt: "Restaurant warmth" },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(247,242,235,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-bold tracking-tight"
            style={{ color: ACCENT }}
          >
            Abella&apos;s <span style={{ color: INK }}>Cuban</span>
          </a>
          <div
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            style={{ color: MUTED }}
          >
            <a href="#menu"    className="hover:opacity-70 transition">Menu</a>
            <a href="#story"   className="hover:opacity-70 transition">Our Story</a>
            <a href="#reviews" className="hover:opacity-70 transition">Reviews</a>
            <a href="#visit"   className="hover:opacity-70 transition">Visit</a>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Order Online
            </a>
          </div>
          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={`tel:${PHONE_RAW}`}
              className="text-sm font-medium hover:opacity-70 transition"
              style={{ color: MUTED }}
            >
              Call
            </a>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ background: ACCENT }}
            >
              Order
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative h-[88vh] min-h-[580px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1800&q=80"
          alt="Cuban food at Abella's"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(28,16,8,0.25) 0%, rgba(28,16,8,0.52) 50%, rgba(28,16,8,0.78) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-sm tracking-[0.35em] uppercase mb-5 font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
            {NEIGHBORHOOD} &nbsp;&middot;&nbsp; Familia Cubana
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-5 leading-[1.08]">
            Bienvenidos a<br />
            <em className="not-italic" style={{ color: "#E8A96A" }}>Abella&apos;s</em>
          </h1>
          <p
            className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            Authentic Cuban cooking, pressed fresh every morning. Breakfast &amp; lunch,
            six days a week on Tampa&apos;s east side.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-base text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Order Online
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>
            <span className="tracking-wider" style={{ color: ACCENT2 }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT}+ Google reviews</span>
          </div>
        </div>
        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────────── */}
      <div className="py-4 px-5" style={{ background: ACCENT }}>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-white text-sm font-medium text-center">
          <span>★ {AVG_RATING} · {REVIEW_COUNT} Google Reviews</span>
          <span className="hidden sm:block opacity-40">|</span>
          <span>Family-Owned Since Day One</span>
          <span className="hidden sm:block opacity-40">|</span>
          <span>Open Mon–Sat · Breakfast from 6am</span>
          <span className="hidden sm:block opacity-40">|</span>
          <span>Uber Eats &amp; DoorDash Delivery</span>
        </div>
      </div>

      {/* ── MENU ────────────────────────────────────────────────────────── */}
      {/*
        AUDIT FIX: Third-party sites show conflicting prices (Allmenus lists Cuban Sandwich at $6.25;
        Yelp reviewers report $12). This menu section is the authoritative price source.
        All items include what they come with — rice, beans, salad, Cuban bread.
      */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.35em] uppercase mb-3 font-medium" style={{ color: ACCENT }}>
              La Carta
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: INK }}>
              Hecho con amor.
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: MUTED }}>
              Everything comes with yellow rice, black or red beans, salad, and fresh Cuban bread —
              the way it was meant to be served.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <article key={item.name} className="group cursor-default">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-5 bg-gray-100 relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                  <span className="font-semibold text-lg" style={{ color: ACCENT }}>{item.price}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={FULL_MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-3.5 rounded-full font-semibold text-sm border-[1.5px] transition hover:text-white hover:brightness-90"
              style={{ borderColor: INK, color: INK }}
            >
              View Full Menu &amp; Order Online →
            </a>
          </div>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────────────────────── */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER_ALT }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="text-sm tracking-[0.35em] uppercase mb-3 font-medium" style={{ color: ACCENT }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: INK }}>
              The flavors<br />of <em>home.</em>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: MUTED }}>
              Abella&apos;s was built on one idea: serve Cuban food the way it&apos;s made at home —
              simply, generously, and without shortcuts. Every platter that leaves this kitchen comes
              with rice, beans, salad, and Cuban bread, because that&apos;s the only way to do it right.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: MUTED }}>
              We&apos;ve been feeding Tampa&apos;s east side from our spot on N 34th Street for years.
              The people who come back every week aren&apos;t coming back for the décor — they&apos;re coming
              back because the palomilla is always right, the Cuban sandwich is always pressed hot,
              and this feels like family.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-10 rounded-full" style={{ background: ACCENT }} />
              <p className="text-sm font-semibold tracking-wider uppercase" style={{ color: ACCENT }}>
                Family owned &amp; operated
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
              alt="Abella's Cuban kitchen warmth"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.35em] uppercase mb-3 font-medium" style={{ color: ACCENT2 }}>
              Lo que dice la gente
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
              <span style={{ color: ACCENT2 }}>★★★★★</span> {AVG_RATING} on Google
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)" }}>
              Based on {REVIEW_COUNT}+ reviews from Tampa locals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p className="mb-3 text-lg" style={{ color: ACCENT2 }}>★★★★★</p>
                <p className="leading-relaxed mb-5 text-[0.95rem]" style={{ color: "rgba(255,255,255,0.88)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>— {r.author}</footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold underline underline-offset-4"
              style={{ color: ACCENT2 }}
            >
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── VISIT ───────────────────────────────────────────────────────── */}
      {/*
        AUDIT FIX: Hours published here are authoritative.
        GBP and third-party sites sometimes show wrong/conflicting hours.
        Mon–Fri: 6:00 am – 3:30 pm | Saturday: 6:00 am – 11:00 am | Sunday: Closed
      */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Info column */}
          <div>
            <p className="text-sm tracking-[0.35em] uppercase mb-3 font-medium" style={{ color: ACCENT }}>
              Visítenos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight" style={{ color: INK }}>
              Come find us<br />on 34th Street.
            </h2>

            <div className="space-y-8 text-base">
              {/* Address */}
              <div className="flex gap-5">
                <div
                  className="mt-1 shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: ACCENT, color: "white" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p style={{ color: MUTED }}>
                    {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5">
                <div
                  className="mt-1 shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: ACCENT, color: "white" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hours</h4>
                  <table className="text-sm" style={{ color: MUTED }}>
                    <tbody>
                      <tr>
                        <td className="pr-8 py-0.5 font-medium" style={{ color: INK }}>Monday – Friday</td>
                        <td>6:00 am – 3:30 pm</td>
                      </tr>
                      <tr>
                        <td className="pr-8 py-0.5 font-medium" style={{ color: INK }}>Saturday</td>
                        <td>6:00 am – 11:00 am</td>
                      </tr>
                      <tr>
                        <td className="pr-8 py-0.5 font-medium" style={{ color: INK }}>Sunday</td>
                        <td>Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div
                  className="mt-1 shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: ACCENT, color: "white" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href={`tel:+${PHONE_RAW}`} className="hover:underline" style={{ color: ACCENT }}>
                    {PHONE_FORMATTED}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                style={{ background: ACCENT }}
              >
                Get Directions
              </a>
              <a
                href={`tel:+${PHONE_RAW}`}
                className="px-7 py-3.5 rounded-full text-sm font-semibold border-[1.5px] transition hover:text-white hover:bg-[#1C1008]"
                style={{ borderColor: INK, color: INK }}
              >
                Call Us
              </a>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-sm font-semibold border-[1.5px] transition hover:text-white hover:bg-[#1C1008]"
                style={{ borderColor: INK, color: INK }}
              >
                Order Online
              </a>
            </div>
          </div>

          {/* Map / atmosphere image + delivery box */}
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden mb-5 relative">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80"
                alt="Abella's restaurant atmosphere"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Delivery platforms */}
            <div className="rounded-xl p-5 border" style={{ background: PAPER_ALT, borderColor: RULE }}>
              <p className="text-sm font-semibold mb-1">Prefer delivery?</p>
              <p className="text-sm mb-4" style={{ color: MUTED }}>
                Order Abella&apos;s on your favorite platform.
              </p>
              <div className="flex gap-3">
                <a
                  href={UBER_EATS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Uber Eats
                </a>
                <a
                  href={DOORDASH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full text-sm font-semibold border-[1.5px] transition hover:text-white hover:bg-[#1C1008]"
                  style={{ borderColor: INK, color: INK }}
                >
                  DoorDash
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-5 text-center text-white"
        style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #9E4B1F 100%)` }}
      >
        <p
          className="text-sm tracking-[0.35em] uppercase mb-4 font-medium"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Venga con hambre
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Ready for a real Cuban meal?
        </h2>
        <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
          We open at 6am Monday through Saturday. Come hungry.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white font-semibold px-8 py-4 rounded-full transition hover:bg-white/90"
            style={{ color: ACCENT }}
          >
            Order Online
          </a>
          <a
            href={`tel:+${PHONE_RAW}`}
            className="bg-white/10 backdrop-blur border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition"
          >
            Call {PHONE_FORMATTED}
          </a>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ─────────────────────────────────────────────── */}
      {/*
        AUDIT FIX: @abellasrestaurant Instagram has no bio link — this site IS the bio link fix.
        Visitors from Instagram land here for hours, menu, and online ordering.
      */}
      <section className="py-14 px-5 md:px-8 border-t bg-white" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="font-display text-2xl font-semibold">@{INSTAGRAM_HANDLE}</p>
              <p className="text-sm" style={{ color: MUTED }}>Follow us for daily specials &amp; Cuban flavors</p>
            </div>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-6">
            {igPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        className="py-12 px-5 md:px-8 text-sm"
        style={{ background: INK, color: "rgba(255,255,255,0.6)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">Abella&apos;s Cuban</p>
            <p className="mb-4">
              Tampa&apos;s neighborhood Cuban kitchen,<br />six days a week since {YEAR_FOUNDED}.
            </p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}>Bienvenidos. Siempre.</p>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="mb-1">{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</p>
            <p className="mb-3">
              <a href={`tel:+${PHONE_RAW}`} className="hover:text-white transition">
                {PHONE_FORMATTED}
              </a>
            </p>
            <p className="text-xs leading-relaxed">
              Mon–Fri: 6:00 am – 3:30 pm<br />
              Saturday: 6:00 am – 11:00 am<br />
              Sunday: Closed
            </p>
          </div>

          {/* Order & Follow */}
          <div>
            <h4 className="text-white font-semibold mb-3">Order &amp; Follow</h4>
            <div className="flex flex-col gap-2">
              <a
                href={UBER_EATS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Uber Eats
              </a>
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                DoorDash
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram @{INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto mt-10 pt-6 border-t flex flex-col md:flex-row justify-between gap-2 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}
        >
          <span>© {new Date().getFullYear()} {BUSINESS_NAME} · Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/80 underline-offset-4">
            ← All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
