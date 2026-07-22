import Image from "next/image";
import Link from "next/link";
import MenuTabs from "./MenuTabs";

// ─── K DESSERT CAFE — Town 'N' Country, Tampa FL — concept mockup ─────────────
// Track B lead: zero owned web presence despite 1,403 Google reviews at 4.9.
// All photos are the prospect's own GMB / Instagram shots in /images/k-dessert-cafe/.

const BUSINESS_NAME = "K Dessert Cafe";
const TAGLINE = "Korean Bingsoo, Bubble Tea and Fruit Desserts";

// Brand palette — Korean dessert-cafe pastel identity
const PAPER = "#FDF8F5"; // page background
const INK = "#2A2024"; // body text + dark sections
const ACCENT = "#D96A85"; // warm pink
const ACCENT2 = "#E8A13D"; // mango
const RULE = "#F0E1E5"; // borders / dividers

// Contact — Google Business Profile number (Yelp shows a different line; reconcile with owner)
const PHONE_FORMATTED = "(813) 280-9558";
const PHONE_RAW = "+18132809558";
const ADDRESS_LINE_1 = "7525 W Hillsborough Ave";
const ADDRESS_LINE_2 = "Tampa, FL 33615";
const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=K+Dessert+Cafe+7525+W+Hillsborough+Ave+Tampa+FL+33615";
const INSTAGRAM_HANDLE = "kdessertcafe";
const TIKTOK_HANDLE = "kdessertcafetampa";
const AVG_RATING = "4.9";
const REVIEW_COUNT = "1,403";

export const metadata = {
  title: `${BUSINESS_NAME} — ${TAGLINE}`,
  description:
    "Korean shaved-ice bingsoo, brown sugar boba, fresh fruit teas and smoothies in Town 'N' Country, Tampa. Rated 4.9 stars across 1,400+ Google reviews.",
};

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
// composite reviews — replace with real GMB quotes before live deployment
const reviews = [
  {
    text: "Suki is so generous with the toppings — our bingsoo came loaded with cheesecake, strawberry and mochi. The cream is so light it basically disappears in your mouth.",
    author: "Google review",
  },
  {
    text: "The mango bingsoo is the best dessert I have found in Tampa, period. Huge portion, easily enough for two, and the owner remembered us from our last visit.",
    author: "Google review",
  },
  {
    text: "Came for dessert after Korean BBQ next door and now it is our routine. Brown sugar boba was perfect and the fruit teas are made with real fruit.",
    author: "Google review",
  },
];

const igPhotos = [
  "/images/k-dessert-cafe/gmb-2.jpg",
  "/images/k-dessert-cafe/gmb-6.jpg",
  "/images/k-dessert-cafe/ig-6.jpg",
  "/images/k-dessert-cafe/gmb-7.jpg",
  "/images/k-dessert-cafe/gmb-5.jpg",
  "/images/k-dessert-cafe/ig-1.jpg",
];

export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(253,248,245,0.94)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT }}>
            {BUSINESS_NAME}
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition">Menu</a>
            <a href="#story" className="hover:opacity-70 transition">Our Story</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a
              href={DIRECTIONS_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Get Directions
            </a>
          </div>
          <a
            href={DIRECTIONS_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Visit Us
          </a>
        </div>
      </nav>

      {/* HERO — their own mango bingsoo photo */}
      <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/k-dessert-cafe/gmb-4.jpg"
          alt="Mango bingsoo at K Dessert Cafe"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(42,32,36,0.40) 0%, rgba(42,32,36,0.45) 50%, rgba(42,32,36,0.82) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5" style={{ color: ACCENT2 }}>
            Town &lsquo;N&rsquo; Country &middot; Tampa
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Korean shaved ice,
            <br />
            <span className="italic font-normal" style={{ color: ACCENT }}>piled ridiculously high.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Snow-soft bingsoo, brown sugar boba and real-fruit teas — made to order by Suki and her team, and big
            enough to share.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DIRECTIONS_URL}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Visit Us / Get Directions
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/80">
            <span className="tracking-wider" style={{ color: ACCENT2 }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews</span>
          </div>
        </div>
      </section>

      {/* MENU — Bingsoo / Drinks tab switch (client component) */}
      {/* prices representative — confirm with owner */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Menu
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Bingsoo, boba &amp; fruit drinks</h2>
            <p className="mt-4 text-base" style={{ color: "#6B5A60" }}>
              Every bingsoo starts with snow-fine milk ice, shaved to order and stacked with fresh fruit.
            </p>
          </div>
          <MenuTabs />
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A little corner of Seoul on Hillsborough Ave
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "#4A3D42" }}>
              K Dessert Cafe is run by Suki and her team, who have turned a small plaza storefront into one of
              Tampa&rsquo;s best-loved dessert spots — 1,403 Google reviews and counting, most of them mentioning the
              generous toppings and the welcome you get at the counter.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4A3D42" }}>
              Finishing dinner at K-Hwa Ro Gui Korean BBQ next door? Dessert is twenty steps away. Grab a table on
              the patio, order a bingsoo for the table, and stay a while.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/images/k-dessert-cafe/gmb-8.jpg"
              alt="Mango bingsoo topped with mochi at K Dessert Cafe"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Loved by locals
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/70">Based on {REVIEW_COUNT} reviews</p>
          </div>

          {/* composite reviews — replace with real GMB quotes before live deployment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: ACCENT2 }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <footer className="text-sm text-white/60">— {r.author}</footer>
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Find us</h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: "#4A3D42" }}>
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </p>
                <p className="text-sm mt-1" style={{ color: "#8A767D" }}>
                  In the plaza with K-Hwa Ro Gui Korean BBQ — patio seating out front.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Hours</h4>
                <table className="text-sm" style={{ color: "#4A3D42" }}>
                  <tbody>
                    <tr><td className="pr-6 py-0.5">Mon — Thu</td><td>11:30 AM – 9:30 PM</td></tr>
                    <tr><td className="pr-6 py-0.5">Fri — Sat</td><td>11:30 AM – 10:30 PM</td></tr>
                    <tr><td className="pr-6 py-0.5">Sunday</td><td>12 PM – 9:30 PM</td></tr>
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
                  href={`tel:${PHONE_RAW}`}
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px]"
                  style={{ borderColor: INK, color: INK }}
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/k-dessert-cafe/gmb-1.jpg"
              alt="K Dessert Cafe plaza storefront and patio seating"
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
              <div key={i} className="relative aspect-square rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover"
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
            <p>{TAGLINE}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
              <br />
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white">Instagram</a>
              <a href={`https://www.tiktok.com/@${TIKTOK_HANDLE}`} className="hover:text-white">TikTok</a>
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
