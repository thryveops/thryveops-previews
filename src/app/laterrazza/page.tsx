import Image from "next/image";

export const metadata = {
  title: "La Terrazza Ristorante Italiano — Northern Italian Fine Dining, Ybor City",
  description:
    "House-made pasta from Emilia Romagna, fresh seafood, and fine Italian dining on 7th Avenue. Open Thursday – Saturday for dinner only. Reservations strongly recommended.",
};

const WINE = "#7A1F2B";
const CREAM = "#FAF6EE";
const INK = "#1F1410";
const GOLD = "#C49A52";
const RULE = "#E8DDC9";

const menuItems = [
  {
    category: "Antipasti",
    name: "Bruschetta Rustica",
    price: "$14",
    desc: "Toasted country bread, San Marzano tomatoes, fresh basil, garlic, extra-virgin olive oil. The proper way to begin an evening at La Terrazza.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
  },
  {
    category: "Pasta",
    name: "Spaghetti ai Frutti di Mare",
    price: "$36",
    desc: "House-made spaghetti, clams, mussels, scallops, and shrimp in a white-wine brodetto. The dish that appears by name in most of our five-star reviews.",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
  },
  {
    category: "Pasta",
    name: "Fettuccine Bolognese",
    price: "$28",
    desc: "Hand-cut fettuccine, slow-braised beef and pork ragù in the Emilia Romagna tradition. Three hours on the stove. Worth every one of them.",
    img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80",
  },
  {
    category: "Secondi",
    name: "Veal Scallopini",
    price: "$42",
    desc: "Tender veal medallions, lemon-caper-white wine pan sauce, seasonal vegetables. A Northern Italian classic, executed as it should be.",
    img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800&q=80",
  },
  {
    category: "Secondi",
    name: "Pollo Rollatino",
    price: "$34",
    desc: "Chicken breast rolled with prosciutto, fontina, and fresh spinach, finished in a marsala reduction. A house signature for good reason.",
    img: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=800&q=80",
  },
  {
    category: "Dolci",
    name: "Tiramisù della Casa",
    price: "$12",
    desc: "House-made daily. Espresso-soaked ladyfingers, mascarpone cream, dark cocoa. The dessert our guests mention by name in their reviews — and the reason tables order a second.",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
  },
];

const reviews = [
  {
    text: "The Frutti di Mare is the best Italian dish I've had outside of Italy. House-made pasta, real brodetto — you can taste the difference. The owner came to our table to thank us. That doesn't happen anywhere else in Tampa.",
    author: "Anna M. · Google review",
  },
  {
    text: "Anniversary dinner. Tiramisu came with a candle. Pasta was hand-rolled. The Veal Scallopini was perfect — not heavy, not underseasoned. We'll be coming back every year.",
    author: "Jared P. · Google review",
  },
  {
    text: "Authentic Northern Italian — not Italian-American. Actually Italian. The Bolognese tastes like it came from Bologna. Worth booking a week in advance. Absolutely worth the reservation.",
    author: "Sofia C. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80",
  "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80",
  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
  "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
];

export default function LaTerrazzaPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: CREAM, color: INK }}>

      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(250,246,238,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-2xl md:text-3xl font-semibold tracking-tight"
            style={{ color: WINE }}
          >
            La Terrazza<span style={{ color: GOLD }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition">Menu</a>
            <a href="#story" className="hover:opacity-70 transition">Our Story</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a
              href="#reserve"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: WINE }}
            >
              Reserve a Table
            </a>
          </div>
          <a
            href="#reserve"
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: WINE }}
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1800&q=80"
          alt="La Terrazza dining room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,20,16,0.35) 0%, rgba(31,20,16,0.50) 55%, rgba(31,20,16,0.88) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p
            className="text-xs md:text-sm tracking-[0.4em] uppercase mb-5"
            style={{ color: GOLD }}
          >
            Ybor City · Northern Italian · Emilia Romagna
          </p>
          <h1 className="font-display text-5xl md:text-7xl italic font-medium mb-6 leading-[1.05]">
            A piece of Emilia Romagna,
            <br />
            <span className="not-italic font-semibold">on 7th Avenue.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-xl mx-auto leading-relaxed">
            House-made pasta. Fresh seafood. Three nights a week, done properly.
          </p>
          <p className="text-base font-semibold mb-10" style={{ color: GOLD }}>
            Open Thursday – Saturday for dinner only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#reserve"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: WINE }}
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              See the Menu
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/75">
            <span style={{ color: GOLD }} className="tracking-wider">★★★★★</span>
            <span>4.8 · 650 Google reviews</span>
          </div>
        </div>
      </section>

      {/* HOURS BAR */}
      <div
        className="py-4 px-5 md:px-8 text-center text-sm md:text-base text-white"
        style={{ background: INK }}
      >
        <p className="max-w-3xl mx-auto">
          <span
            className="font-semibold tracking-wider uppercase text-xs mr-2"
            style={{ color: GOLD }}
          >
            Service Hours ·{" "}
          </span>
          Thursday, Friday, Saturday — 5:00 PM to 10:00 PM.{" "}
          <a href="#reserve" className="underline hover:opacity-80">
            Reservations recommended.
          </a>
        </p>
      </div>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: WINE }}
            >
              From the Kitchen
            </p>
            <h2 className="font-display text-5xl md:text-6xl italic font-medium">
              House favorites
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">
              Pasta pulled fresh daily. Sauces built from scratch. The menu changes with the season — the standard never does.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <article key={item.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-5 bg-black">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  {item.category}
                </p>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl italic font-semibold">
                    {item.name}
                  </h3>
                  <span className="font-semibold ml-3 shrink-0" style={{ color: WINE }}>
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="#reserve"
              className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px] transition hover:bg-[#1F1410] hover:text-[#FAF6EE]"
              style={{ borderColor: INK, color: INK }}
            >
              View Full Menu &amp; Wine List
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden order-1 md:order-none">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
              alt="La Terrazza kitchen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: WINE }}
            >
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic font-medium mb-6 leading-tight">
              Three nights a week.
              <br />
              Done properly.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              La Terrazza opened on 7th Avenue with one idea: bring the food of Emilia Romagna — the pasta region of Italy — to a city that hadn&apos;t had it. House-made fettuccine. Three-hour ragù. Veal scallopini the way our family makes it on Sunday.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              We open Thursday, Friday, and Saturday for dinner. Every other day, we&apos;re in the kitchen prepping, sourcing, and pulling pasta. We&apos;d rather do three nights perfectly than seven nights adequately.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The result: a 4.8-star average across 650 Google reviews and 296 on Yelp. In fine dining — where expectations are highest and critics are most demanding — that score is extraordinary. We think you&apos;ll taste the reason.
            </p>
          </div>
        </div>
      </section>

      {/* LA TERRAZZA — THE TERRACE */}
      <section
        className="py-20 md:py-32 px-5 md:px-8"
        style={{ background: CREAM }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: WINE }}
            >
              The Space
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic font-medium mb-6 leading-tight">
              The name means the terrace.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              &ldquo;La Terrazza&rdquo; is Italian for the terrace — and the terrace is real. A covered outdoor dining area on 7th Avenue, candles lit from 5 PM, the kind of setting most Tampa restaurants spend years trying to manufacture. This one came with the building.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              On a Thursday evening in Ybor City, with a glass of Barolo and a plate of house-made pasta in front of you, La Terrazza delivers the closest thing to a summer night in Bologna that you&apos;ll find south of New York.
            </p>
            <a
              href="#reserve"
              className="inline-block px-7 py-3 rounded-full font-semibold text-white text-sm transition hover:brightness-110"
              style={{ background: WINE }}
            >
              Reserve a Terrace Table
            </a>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80"
              alt="La Terrazza dining patio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        className="py-20 md:py-32 px-5 md:px-8 text-white"
        style={{ background: INK }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              Loved by guests
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic font-medium mb-4">
              ★★★★★ 4.8 on Google
            </h2>
            <p className="text-white/60">
              Based on 650+ reviews — one of Tampa&apos;s highest-rated fine-dining restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-7 rounded-sm border border-white/15"
              >
                <p className="mb-3 tracking-wider" style={{ color: GOLD }}>
                  ★★★★★
                </p>
                <p className="text-white/90 leading-relaxed mb-5 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-sm text-white/50">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATIONS */}
      <section id="reserve" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{ color: WINE }}
          >
            Reservations
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic font-medium mb-6 leading-tight">
            Hold a table on the terrace.
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Open Thursday – Saturday, 5:00 PM – 10:00 PM. Reservations are strongly recommended — we typically book 7–10 days in advance on weekends.
          </p>
          <p className="text-sm text-gray-500 mb-10">
            Walk-ins are welcome based on availability. Call us at{" "}
            <a href="tel:8132481326" className="underline" style={{ color: WINE }}>
              (813) 248-1326
            </a>{" "}
            for same-day availability.
          </p>

          <div
            className="border rounded-sm p-8 md:p-10 text-left"
            style={{ background: CREAM, borderColor: RULE }}
          >
            <p className="font-display text-2xl italic font-semibold mb-6 text-center">
              Reserve via OpenTable
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-sm">
              <input
                type="date"
                className="border rounded-md px-4 py-3 bg-white"
                style={{ borderColor: RULE }}
                defaultValue="2026-06-05"
              />
              <select
                className="border rounded-md px-4 py-3 bg-white"
                style={{ borderColor: RULE }}
              >
                <option>5:30 PM</option>
                <option>6:00 PM</option>
                <option>6:30 PM</option>
                <option>7:00 PM</option>
                <option>7:30 PM</option>
                <option>8:00 PM</option>
                <option>8:30 PM</option>
                <option>9:00 PM</option>
              </select>
              <select
                className="border rounded-md px-4 py-3 bg-white"
                style={{ borderColor: RULE }}
              >
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
                <option>5 guests</option>
                <option>6 guests</option>
                <option>8+ guests</option>
              </select>
            </div>
            <a
              href="https://www.opentable.com/r/la-terrazza-ristorante-tampa"
              className="inline-block px-10 py-4 rounded-full font-semibold text-white w-full text-center transition hover:brightness-110"
              style={{ background: WINE }}
            >
              Find a Time on OpenTable
            </a>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Private events &amp; full buyouts →{" "}
            <a
              href="mailto:reservations@laterrazzaybor.com"
              className="hover:underline"
              style={{ color: WINE }}
            >
              reservations@laterrazzaybor.com
            </a>
          </p>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: WINE }}
            >
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic font-medium mb-8 leading-tight">
              Find us in Ybor
            </h2>

            <div className="space-y-7 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Address</h4>
                <p className="text-gray-700">
                  1727 East 7th Avenue
                  <br />
                  Tampa, FL 33605
                  <br />
                  <span className="text-sm text-gray-500">
                    Historic Ybor City · Street parking + Centennial Park garage
                  </span>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900">Hours</h4>
                <table className="text-sm text-gray-700 w-full max-w-xs">
                  <tbody>
                    <tr>
                      <td className="pr-8 py-1 font-medium">Thursday</td>
                      <td>5:00 PM – 10:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-medium">Friday</td>
                      <td>5:00 PM – 10:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-medium">Saturday</td>
                      <td>5:00 PM – 10:00 PM</td>
                    </tr>
                    <tr className="text-gray-400">
                      <td className="pr-8 py-1 italic">Sunday – Wednesday</td>
                      <td className="italic">Closed</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-400 mt-2">
                  Reservations recommended. We book 7–10 days ahead on weekends.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Reach us</h4>
                <p className="text-gray-700">
                  <a href="tel:8132481326" className="hover:opacity-70 transition" style={{ color: INK }}>
                    (813) 248-1326
                  </a>
                  <br />
                  <a
                    href="mailto:hello@laterrazzaybor.com"
                    className="hover:opacity-70 transition"
                    style={{ color: INK }}
                  >
                    hello@laterrazzaybor.com
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=1727+E+7th+Ave+Tampa+FL+33605"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: WINE }}
                >
                  Get Directions
                </a>
                <a
                  href="tel:8132481326"
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition"
                  style={{ borderColor: INK, color: INK }}
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
              alt="La Terrazza restaurant interior"
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
            <p className="font-display text-2xl italic font-semibold">
              @laterrazzaybor
            </p>
            <a
              href="https://instagram.com/laterrazzaybor"
              className="text-sm font-medium hover:underline"
              style={{ color: WINE }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
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

      {/* FOOTER */}
      <footer
        className="py-12 px-5 md:px-8 text-sm"
        style={{ background: INK, color: "rgba(255,255,255,0.65)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p
              className="font-display text-3xl italic font-medium text-white mb-2"
            >
              La Terrazza<span style={{ color: GOLD }}>.</span>
            </p>
            <p>Ristorante Italiano · Ybor City</p>
            <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Northern Italian · Emilia Romagna
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>
              1727 E 7th Avenue
              <br />
              Tampa, FL 33605
              <br />
              <a href="tel:8132481326" className="hover:text-white transition">
                (813) 248-1326
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>
              Thursday – Saturday
              <br />
              5:00 PM – 10:00 PM
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>
                Closed Sunday – Wednesday
              </span>
            </p>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          style={{ color: "rgba(255,255,255,0.30)" }}
        >
          <span>
            © 2026 La Terrazza Ristorante Italiano · Concept mockup by Thryve
            Operations
          </span>
          <span>thryveops.com · hello@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
