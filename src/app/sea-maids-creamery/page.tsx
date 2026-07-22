import Image from "next/image";
import Link from "next/link";
import FlavorTabs from "./FlavorTabs";

// ─── PROSPECT DATA ─────────────────────────────────────────────────────────────
// Fonts (Fraunces + Inter) loaded globally via layout.tsx. Use className="font-display".

const BUSINESS_NAME = "Sea Maids Creamery";
const TAGLINE       = "Ice Cream & a Little More";
const NEIGHBORHOOD  = "Seminole Heights";

// Brand palette — mermaid pink + deep teal
const PAPER   = "#FFF9FA";
const INK     = "#27222B";
const ACCENT  = "#E56B8C";
const ACCENT2 = "#1F6E6B";
const RULE    = "#F3DCE3";

// Contact & links
const PHONE_FORMATTED  = "(813) 766-1097";
const PHONE_RAW        = "+18137661097";
const ADDRESS_LINE_1   = "4230 N Florida Ave";
const ADDRESS_LINE_2   = "Tampa, FL 33603";
const ORDER_URL        = "https://www.ubereats.com/store/sea-maids-creamery/D2dYHmJqSYWSeC0MyXP2Jg";
const DIRECTIONS_URL   = "https://maps.google.com/?q=Sea+Maids+Creamery+4230+N+Florida+Ave+Tampa+FL+33603";
const INSTAGRAM_HANDLE = "seamaidscreamery";
const AVG_RATING       = "4.9";
const REVIEW_COUNT     = "875";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE} | Seminole Heights, Tampa`,
  description:
    "Loaded cones, monster shakes, vegan scoops, and Latin flavors from a mother-daughter ice cream parlor in Seminole Heights. Open Thu-Sun. 4.9 stars on Google.",
};

// ─── SIGNATURE BUILDS ─────────────────────────────────────────────────────────
{/* prices representative — confirm with owner */}
const signatureBuilds = [
  {
    name:  "Loaded Triple Stack",
    price: "$9",
    desc:  "Three scoops on a cereal-crusted cone, stacked past reason and finished with whipped cream. The one everyone films.",
    img:   "/images/sea-maids-creamery/gmb-3.jpg",
  },
  {
    name:  "Monster Shake",
    price: "$12",
    desc:  "A full milkshake in our pink cup, crowned with cookies, candy, and whatever the sea maids dreamed up that week.",
    img:   "/images/sea-maids-creamery/gmb-4.jpg",
  },
  {
    name:  "Mermaid Sundae",
    price: "$8.50",
    desc:  "Purple Haze scoops, sprinkles, a cherry, and a paper umbrella. Built for sharing — rarely shared.",
    img:   "/images/sea-maids-creamery/gmb-6.jpg",
  },
];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
{/* composite reviews — replace with real GMB quotes before live deployment */}
const reviews = [
  {
    text:   "Got the Purple Haze in a waffle cone and my dog got her own pup cup. The mother-daughter team behind the counter make you feel like family.",
    author: "Google review",
  },
  {
    text:   "Best vegan ice cream in Tampa, hands down. The almond-milk cookies & cream rotates in and I plan my whole weekend around it.",
    author: "Google review",
  },
  {
    text:   "The loaded shakes are absurd in the best way. Worth driving across town for — and the coquito flavor tastes like Christmas in Puerto Rico.",
    author: "Google review",
  },
];

// ─── HOURS ────────────────────────────────────────────────────────────────────
const hours = [
  { day: "Monday - Wednesday", time: "Closed", closed: true },
  { day: "Thursday",           time: "4:00 PM - 10:00 PM" },
  { day: "Friday",             time: "4:00 PM - 10:00 PM" },
  { day: "Saturday",           time: "2:30 PM - 10:30 PM" },
  { day: "Sunday",             time: "2:30 PM - 9:30 PM" },
];

// ─── INSTAGRAM GRID — the shop's own photos ───────────────────────────────────
const igPhotos = [
  "/images/sea-maids-creamery/ig-1.jpg",
  "/images/sea-maids-creamery/ig-2.jpg",
  "/images/sea-maids-creamery/ig-6.jpg",
  "/images/sea-maids-creamery/ig-7.jpg",
  "/images/sea-maids-creamery/ig-9.jpg",
  "/images/sea-maids-creamery/gmb-5.jpg",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(255,249,250,0.94)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT }}>
            Sea Maids <span style={{ color: ACCENT2 }}>Creamery</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu"  className="hover:opacity-70 transition">Flavors</a>
            <a href="#story" className="hover:opacity-70 transition">Our Story</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a
              href={ORDER_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Order on Uber Eats
            </a>
          </div>
          <a
            href={ORDER_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Order
          </a>
        </div>
      </nav>

      {/* HERO — the pink 1927 storefront with mermaid mural */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/sea-maids-creamery/gmb-1.jpg"
          alt="Sea Maids Creamery pink storefront with mermaid mural at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(39,34,43,0.30) 0%, rgba(39,34,43,0.45) 55%, rgba(39,34,43,0.82) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5" style={{ color: "#FBC1D2" }}>
            {NEIGHBORHOOD} &middot; In a 1927 Original
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Ice cream
            <br />
            <span className="italic font-normal" style={{ color: "#FBC1D2" }}>&amp; a little more.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Loaded cones, monster shakes, vegan scoops, and Latin flavors — scooped by a
            mother-daughter team under the sea maids of Seminole Heights.
          </p>
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 text-sm font-semibold"
            style={{ background: "rgba(31,110,107,0.85)" }}
          >
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#FBC1D2" }} />
            Open Thursday&ndash;Sunday
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={ORDER_URL}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Order on Uber Eats
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/80">
            <span className="tracking-wider" style={{ color: "#FBC1D2" }}>★★★★★</span>
            <span>{AVG_RATING} &middot; {REVIEW_COUNT} Google reviews</span>
          </div>
        </div>
      </section>

      {/* HOURS BAND — the Thu–Sun ritual, front and center */}
      <section className="py-14 px-5 md:px-8 text-white" style={{ background: ACCENT2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#FBC1D2" }}>
              A Weekend Ritual
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              We scoop four days a week.
              <br />
              <span className="italic font-normal text-white/80">Worth planning around.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-base">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between border-b border-white/15 py-2 sm:col-span-1"
                style={h.day.startsWith("Monday") ? { opacity: 0.55 } : undefined}
              >
                <span className="font-medium">{h.day}</span>
                <span className={h.closed ? "" : "font-semibold"} style={h.closed ? undefined : { color: "#FBC1D2" }}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU — signature builds */}
      <section id="menu" className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Builds
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Over the top, on purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureBuilds.map((item) => (
              <article key={item.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-5 relative" style={{ background: RULE }}>
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
                  <span className="font-semibold" style={{ color: ACCENT }}>{item.price}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B5F6E" }}>{item.desc}</p>
              </article>
            ))}
          </div>

          {/* FLAVOR BOARD — interactive tabs (client component) */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT2 }}>
                On the Board
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold">This weekend&rsquo;s flavors</h3>
            </div>
            <FlavorTabs />
          </div>
        </div>
      </section>

      {/* A LITTLE MORE — pies, baked desserts, catering */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 text-white overflow-hidden">
        <Image
          src="/images/sea-maids-creamery/gmb-2.jpg"
          alt="Cream pies and chocolate desserts at Sea Maids Creamery"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(39,34,43,0.72)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#FBC1D2" }}>
            &amp; a Little More
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Cream pies, baked desserts, pup treats &mdash; and your next party
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
            The &ldquo;little more&rdquo; is not so little: house cream pies, chocolate desserts,
            treats for the dog waiting patiently outside, and full dessert-table catering for
            birthdays, weddings, and quincea&ntilde;eras.
          </p>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-block px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
            style={{ background: ACCENT }}
          >
            Ask About Catering
          </a>
        </div>
      </section>

      {/* STORY — Emily & Zoe */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A mother, a daughter, and the sea maids
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "#4A414E" }}>
              Emily Macias and Zoe Vera opened Sea Maids Creamery together — a mother-daughter
              team scooping in a 1927 Seminole Heights original. The name honors the sea
              maidens of Puerto Rican lore, and the flags in the shop honor home.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4A414E" }}>
              That heritage is on the board too: coquito and mango scoops next to the classics,
              vegan flavors rotating weekly, and cones built like nobody is counting calories.
              Featured by Tampa Magazine, VoyageTampa, and CanvasRebel.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/sea-maids-creamery/gmb-8.jpg"
              alt="Inside Sea Maids Creamery with display counters and Puerto Rico flags"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#FBC1D2" }}>
              Loved by Tampa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/70">Based on {REVIEW_COUNT} reviews</p>
          </div>

          {/* composite reviews — replace with real GMB quotes before live deployment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="p-7 rounded-2xl border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: ACCENT }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <footer className="text-sm text-white/60">&mdash; {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Find the mermaid mural
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: "#4A414E" }}>
                  {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Hours — open Thu&ndash;Sun</h4>
                <table className="text-sm" style={{ color: "#4A414E" }}>
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day}>
                        <td className="pr-6 py-0.5">{h.day}</td>
                        <td className={h.closed ? "" : "font-medium"} style={h.closed ? undefined : { color: ACCENT2 }}>
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach us</h4>
                <p>
                  <a href={`tel:${PHONE_RAW}`} className="hover:opacity-70" style={{ color: INK }}>
                    {PHONE_FORMATTED}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Get Directions
                </a>
                <a
                  href={ORDER_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition hover:opacity-70"
                  style={{ borderColor: ACCENT2, color: ACCENT2 }}
                >
                  Order on Uber Eats
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/sea-maids-creamery/gmb-7.jpg"
              alt="Pink parlor interior with chandelier at Sea Maids Creamery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@{INSTAGRAM_HANDLE}</p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-sm font-medium hover:underline"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt="Sea Maids Creamery on Instagram"
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.7)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">{BUSINESS_NAME}</p>
            <p>{TAGLINE} &middot; Open Thu&ndash;Sun</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>
              {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow &amp; Order</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white">Instagram</a>
              <a href={ORDER_URL} className="hover:text-white">Uber Eats</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© {new Date().getFullYear()} {BUSINESS_NAME} · Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/80 underline-offset-4">
            ← All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
