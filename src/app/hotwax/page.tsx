import Image from "next/image";

export const metadata = {
  title: "HotWax Coffee Shop & Tap House — Coffee, Kava & Live Music in Ybor City",
  description:
    "Coffee, kava, craft beer, open mic, and live music — five concepts under one roof on 7th Avenue. 24 years in Ybor City. Open until 2:30 AM on weekends.",
};

const PINK = "#C73E73";
const DARK = "#0F0A0E";
const VINYL = "#1A1020";
const AMBER = "#C49A52";
const LIGHT = "#F8F0E8";
const INK = "#1A0A14";
const RULE = "#E4D6C7";

const concepts = [
  {
    icon: "☕",
    label: "Coffee Bar",
    desc: "Single-origin espresso, pour-overs, cold brew on tap, and seasonal lattes. Locally roasted, pulled to order.",
    color: PINK,
  },
  {
    icon: "🌿",
    label: "Kava + Kratom",
    desc: "Tampa's longest-running kava program. Traditional shell or blend. Non-alcoholic, non-judgmental. New to kava? The bar will walk you through it.",
    color: AMBER,
  },
  {
    icon: "🍺",
    label: "Craft Beer Tap",
    desc: "Rotating Florida and regional craft taps, kombucha on draft, and a curated can selection. Ask what's new — we'll pour a sample.",
    color: PINK,
  },
  {
    icon: "🎤",
    label: "Open Mic",
    desc: "Thursdays at 9 PM. Sign up at the bar. Instruments are on the wall — grab one. Music, poetry, spoken word, comedy. All welcome.",
    color: AMBER,
  },
  {
    icon: "🎸",
    label: "Live Music",
    desc: "Friday and Saturday nights. Indie, Americana, garage, blues. Rotating local and touring acts. Most nights, no cover.",
    color: PINK,
  },
];

const menuSections = [
  {
    label: "Coffee Bar",
    color: PINK,
    img: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=800&q=80",
    items: [
      { name: "Espresso", price: "$3.50", desc: "Double shot, pulled to order on rotating single-origin." },
      { name: "Latte", price: "$5.50", desc: "Espresso + steamed milk. Classic or seasonal special." },
      { name: "Cold Brew", price: "$5.00", desc: "12-hour steep, served over ice. Hits different at midnight." },
      { name: "Pour-Over", price: "$6.00", desc: "Slow, intentional, worth the extra two minutes." },
      { name: "Seasonal Specialty", price: "$6.50", desc: "Ask the bar what's on this week." },
    ],
  },
  {
    label: "Kava + Kratom Bar",
    color: AMBER,
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    items: [
      { name: "Traditional Kava Shell", price: "$8", desc: "House-prepared traditional kava, medium grind. Clean, earthy, effective." },
      { name: "Kava Blend", price: "$9", desc: "Kava with a flavor blend. A gentler intro for first-timers." },
      { name: "Kava Flight (3 shells)", price: "$22", desc: "Try three varieties. Staff will guide the sequence." },
      { name: "Kratom Shot", price: "$7", desc: "Measured single dose. Double available." },
      { name: "Mocktail Kava", price: "$10", desc: "Kava blended with house-made tropical mix. Easier on the palate." },
    ],
  },
  {
    label: "Craft Beer Tap House",
    color: PINK,
    img: "https://images.unsplash.com/photo-1563396983631-2f8cf576bb36?w=800&q=80",
    items: [
      { name: "Florida Craft Draft", price: "$7–9", desc: "Local taps rotating weekly. Ask the board what's fresh." },
      { name: "Regional Draft", price: "$6–8", desc: "Southeast favorites and national craft alongside the locals." },
      { name: "Kombucha on Tap", price: "$6", desc: "Live culture kombucha, rotating flavor. Pairs surprisingly well with kava." },
      { name: "Canned Selection", price: "$5–7", desc: "What we love when the taps rotate. Hand-picked, not random." },
      { name: "Non-Alcoholic Draft", price: "$5", desc: "NA craft beer from Florida producers. Taken seriously." },
    ],
  },
];

const events = [
  {
    day: "Tuesdays",
    time: "8 PM",
    name: "Trivia Night",
    desc: "Six rounds, teams of four, rotating categories. Winner takes a $50 bar tab. Show up early — it fills.",
    color: AMBER,
  },
  {
    day: "Wednesdays",
    time: "7 PM",
    name: "Figure Drawing",
    desc: "Monthly figure drawing session with a live model. All skill levels. Bring your own supplies or buy from the bar.",
    color: PINK,
  },
  {
    day: "Thursdays",
    time: "9 PM",
    name: "Open Mic",
    desc: "Music. Poetry. Comedy. Spoken word. Sign up at the bar. Instruments on the wall — anyone can grab one.",
    color: AMBER,
  },
  {
    day: "Fri & Sat",
    time: "10 PM",
    name: "Live Music",
    desc: "Rotating local and touring lineups. Indie, Americana, blues, garage. Most weeks no cover charge.",
    color: PINK,
  },
];

const reviews = [
  {
    text: "HotWax is the only place in Tampa where I can get a kava, a craft beer, and watch someone play guitar at midnight. It's genuinely unlike anything else in Ybor. Or anywhere.",
    author: "Alex M. · Google review",
  },
  {
    text: "Been coming here for 10 years. The open mic is the real thing — instruments on the wall, anyone can play. Show up on a Thursday and you'll understand why this place has lasted 24 years.",
    author: "Jordan T. · Google review",
  },
  {
    text: "The coffee is excellent and the atmosphere is exactly what it should be. Dark, music always playing, people who actually belong in Ybor. My kind of place every time.",
    author: "Rachel V. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&q=80",
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
  "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&q=80",
  "https://images.unsplash.com/photo-1472552944129-b035e9ea3744?w=400&q=80",
  "https://images.unsplash.com/photo-1563396983631-2f8cf576bb36?w=400&q=80",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80",
];

export default function HotWaxPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: LIGHT, color: INK }}>

      {/* STATUS BAR */}
      <div
        className="text-white text-center text-xs md:text-sm py-2.5 px-5"
        style={{ background: DARK }}
      >
        <span
          className="font-semibold tracking-widest mr-2 text-xs"
          style={{
            color: AMBER,
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.15em",
            fontSize: "0.85rem",
          }}
        >
          OPEN &apos;TIL 2:30 AM TONIGHT
        </span>
        · Thursday Open Mic 9 PM ·{" "}
        <a href="#events" className="underline hover:opacity-80">
          See this week&apos;s lineup
        </a>
      </div>

      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(248,240,232,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl md:text-3xl tracking-widest font-bold"
            style={{
              color: PINK,
              fontFamily: "var(--font-bebas-neue)",
              letterSpacing: "0.1em",
            }}
          >
            HOTWAX<span style={{ color: AMBER }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition">Menu</a>
            <a href="#events" className="hover:opacity-70 transition">Live Events</a>
            <a href="#story" className="hover:opacity-70 transition">Our Story</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a
              href="tel:8134424210"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: PINK }}
            >
              Call HotWax
            </a>
          </div>
          <a
            href="tel:8134424210"
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: PINK }}
          >
            Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[640px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1800&q=80"
          alt="Live music at HotWax"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,10,14,0.50) 0%, rgba(15,10,14,0.65) 50%, rgba(15,10,14,0.92) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-5 max-w-4xl">
          <p
            className="text-sm md:text-base tracking-[0.3em] mb-5"
            style={{
              color: AMBER,
              fontFamily: "var(--font-bebas-neue)",
              letterSpacing: "0.25em",
            }}
          >
            HISTORIC YBOR CITY · SINCE 2001
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.05]">
            Coffee. Kava.
            <br />
            Craft beer.{" "}
            <span style={{ color: PINK }}>Live music.</span>
            <br />
            <span className="italic font-normal" style={{ color: AMBER }}>
              Open mic.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Five concepts. One late-night corner of 7th Avenue. Twenty-four years and counting.
            Grab the mic. Pull a pint. Order a kava. Stay until close.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#events"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: PINK }}
            >
              This Week&apos;s Events
            </a>
            <a
              href="#menu"
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              See the Menu
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/75">
            <span style={{ color: AMBER }} className="tracking-wider">★★★★★</span>
            <span>4.5 · 285 Google reviews · 24 years in Ybor</span>
          </div>
        </div>
      </section>

      {/* FIVE CONCEPTS */}
      <section className="py-20 md:py-28 px-5 md:px-8" style={{ background: LIGHT }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm tracking-[0.3em] mb-3"
              style={{
                color: PINK,
                fontFamily: "var(--font-bebas-neue)",
                letterSpacing: "0.2em",
              }}
            >
              WHAT WE ARE
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Five concepts. One room.
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              There is nothing else in Tampa like this. Not even close.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
            {concepts.map((c) => (
              <div
                key={c.label}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-4xl mb-3">{c.icon}</p>
                <p
                  className="text-sm font-bold tracking-widest mb-3"
                  style={{
                    color: c.color,
                    fontFamily: "var(--font-bebas-neue)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {c.label.toUpperCase()}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] mb-3"
              style={{
                color: PINK,
                fontFamily: "var(--font-bebas-neue)",
                letterSpacing: "0.2em",
              }}
            >
              THE MENU
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              What&apos;s on the bar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {menuSections.map((section) => (
              <div key={section.label}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-black">
                  <Image
                    src={section.img}
                    alt={section.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-sm font-bold tracking-widest mb-5 border-b pb-3"
                  style={{
                    color: section.color,
                    fontFamily: "var(--font-bebas-neue)",
                    letterSpacing: "0.15em",
                    borderColor: RULE,
                  }}
                >
                  {section.label.toUpperCase()}
                </p>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-baseline mb-0.5">
                        <span className="font-semibold text-sm">{item.name}</span>
                        <span
                          className="text-sm font-semibold ml-3 shrink-0"
                          style={{ color: section.color }}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE EVENTS */}
      <section
        id="events"
        className="py-20 md:py-32 px-5 md:px-8 text-white"
        style={{ background: DARK }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm tracking-[0.3em] mb-3"
              style={{
                color: AMBER,
                fontFamily: "var(--font-bebas-neue)",
                letterSpacing: "0.2em",
              }}
            >
              THIS WEEK AT HOTWAX
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              The mic is open.
            </h2>
            <p className="text-white/65 max-w-xl mx-auto">
              Live programming five nights a week. Come for the coffee. Stay for the show. Grab an
              instrument on your way out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {events.map((e) => (
              <div
                key={e.name}
                className="border border-white/15 rounded-lg p-7 hover:border-white/30 transition"
              >
                <p
                  className="text-xs tracking-widest mb-1"
                  style={{
                    color: e.color,
                    fontFamily: "var(--font-bebas-neue)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {e.day.toUpperCase()}
                </p>
                <p className="text-xs text-white/50 mb-4">{e.time}</p>
                <h3 className="font-display text-2xl font-semibold mb-3">{e.name}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://instagram.com/hotwaxcoffeeshop"
              className="inline-flex items-center gap-2 font-medium hover:opacity-80 transition"
              style={{ color: AMBER }}
            >
              Follow @hotwaxcoffeeshop for the weekly lineup →
            </a>
          </div>
        </div>
      </section>

      {/* 24 YEARS — STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1472552944129-b035e9ea3744?w=900&q=80"
              alt="HotWax bar interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p
              className="text-sm tracking-[0.3em] mb-3"
              style={{
                color: PINK,
                fontFamily: "var(--font-bebas-neue)",
                letterSpacing: "0.2em",
              }}
            >
              OUR STORY
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              24 years on 7th Avenue.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              HotWax opened in 2001 with one idea: build the kind of bar we wanted to hang out in.
              Coffee that took itself seriously. Kava the right way. Craft beer on tap. A wall of
              instruments anyone could pick up. A stage open on Thursday nights.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Two and a half decades later, we&apos;re still here on the same corner of East 7th —
              doing the same five things we&apos;ve always done, only with 24 more years of regulars,
              better taps, and a kava program that&apos;s outlasted every other kava bar in Tampa.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Come for the coffee. Stay for trivia. End the night on the open mic. We&apos;ll be here
              until close.
            </p>
            <div
              className="mt-8 pt-6 border-t grid grid-cols-3 gap-4 text-center"
              style={{ borderColor: RULE }}
            >
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: PINK }}>24</p>
                <p className="text-xs text-gray-500 mt-1">Years in Ybor</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: AMBER }}>5</p>
                <p className="text-xs text-gray-500 mt-1">Concepts under<br />one roof</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: PINK }}>4.5★</p>
                <p className="text-xs text-gray-500 mt-1">285 Google<br />reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        className="py-20 md:py-32 px-5 md:px-8 text-white"
        style={{ background: VINYL }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] mb-3"
              style={{
                color: AMBER,
                fontFamily: "var(--font-bebas-neue)",
                letterSpacing: "0.2em",
              }}
            >
              THE REGULARS
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              ★★★★★ 4.5 on Google
            </h2>
            <p className="text-white/55">Based on 285 reviews · 24 years of happy customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-7 rounded-lg border border-white/15"
              >
                <p className="mb-3 tracking-wider" style={{ color: AMBER }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-5 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-sm text-white/50">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: LIGHT }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p
              className="text-sm tracking-[0.3em] mb-3"
              style={{
                color: PINK,
                fontFamily: "var(--font-bebas-neue)",
                letterSpacing: "0.2em",
              }}
            >
              COME IN
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Find us on 7th.
            </h2>

            <div className="space-y-7 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Address</h4>
                <p className="text-gray-700">
                  1522 East 7th Avenue
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
                      <td className="pr-8 py-1">Sunday – Thursday</td>
                      <td>11 AM – 1 AM</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1 font-semibold" style={{ color: PINK }}>
                        Friday – Saturday
                      </td>
                      <td className="font-semibold" style={{ color: PINK }}>
                        11 AM – 2:30 AM
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">
                  Kitchen open until close. Coffee, kava, and beer all night.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Reach us</h4>
                <p className="text-gray-700">
                  <a href="tel:8134424210" className="hover:opacity-70 transition" style={{ color: INK }}>
                    (813) 442-4210
                  </a>
                  <br />
                  <a
                    href="mailto:hello@hotwaxcoffeeshop.com"
                    className="hover:opacity-70 transition"
                    style={{ color: INK }}
                  >
                    hello@hotwaxcoffeeshop.com
                  </a>
                  <br />
                  <a
                    href="https://instagram.com/hotwaxcoffeeshop"
                    className="hover:opacity-70 transition text-sm"
                    style={{ color: PINK }}
                  >
                    @hotwaxcoffeeshop
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=1522+E+7th+Ave+Tampa+FL+33605"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: PINK }}
                >
                  Get Directions
                </a>
                <a
                  href="tel:8134424210"
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition"
                  style={{ borderColor: INK, color: INK }}
                >
                  Call HotWax
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=900&q=80"
              alt="HotWax bar interior"
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
            <p
              className="text-2xl tracking-widest"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                letterSpacing: "0.1em",
                color: INK,
              }}
            >
              @HOTWAXCOFFEESHOP
            </p>
            <a
              href="https://instagram.com/hotwaxcoffeeshop"
              className="text-sm font-medium hover:underline"
              style={{ color: PINK }}
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
        style={{ background: DARK, color: "rgba(255,255,255,0.60)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p
              className="text-2xl tracking-widest text-white mb-2"
              style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0.1em" }}
            >
              HOTWAX<span style={{ color: PINK }}>.</span>
            </p>
            <p>Coffee. Kava. Beer. Music.</p>
            <p style={{ color: "rgba(255,255,255,0.35)" }}>Ybor City, since 2001.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>
              1522 E 7th Avenue
              <br />
              Tampa, FL 33605
              <br />
              <a href="tel:8134424210" className="hover:text-white transition">
                (813) 442-4210
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>
              Sun – Thu: 11 AM – 1 AM
              <br />
              <span style={{ color: PINK }}>Fri – Sat: 11 AM – 2:30 AM</span>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/hotwaxcoffeeshop"
                className="hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/hotwaxcoffeeshopandtaphouse/"
                className="hover:text-white transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          <span>
            © 2026 HotWax Coffee Shop &amp; Tap House · Concept mockup by Thryve Operations
          </span>
          <span>thryveops.com · contact@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
