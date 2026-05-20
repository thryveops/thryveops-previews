import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "James Joyce Irish Pub & Eatery — Ybor City's Pub Since 2002",
  description:
    "Tampa's Irish pub. 50 craft beers on tap, 30 Irish whiskeys, live music four nights a week, and the best Shepherd's Pie in Florida — open 'til 3 AM, every night.",
};

const PAPER = "#FAF7F0";
const INK = "#0F1A11";
const ACCENT = "#1E4D2B";
const GOLD = "#B8862B";
const RULE = "#E5E0D3";

const menuItems = [
  {
    name: "Shepherd's Pie",
    price: "$17",
    desc: "Slow-braised lamb in a Guinness gravy under a roast garlic mashed potato crust. The reason regulars keep coming back.",
    img: "https://images.unsplash.com/photo-1633524892820-d36ed4d4ae93?w=800&q=80",
  },
  {
    name: "Fish & Chips",
    price: "$18",
    desc: "Beer-battered cod, hand-cut chips, malt vinegar, mushy peas. Just like in Dublin — only better, because you're already on vacation.",
    img: "https://images.unsplash.com/photo-1606851094291-6efae152bb87?w=800&q=80",
  },
  {
    name: "Bangers & Mash",
    price: "$16",
    desc: "Imported Irish bangers, scallion mash, and onion gravy. Comfort food done the way your grandmother (the Irish one) used to make it.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    name: "The Joyce Burger",
    price: "$15",
    desc: "8 oz Angus, Irish cheddar, smoked bacon, whiskey-onion jam, brioche bun. Award winner three years running.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    name: "Corned Beef Reuben",
    price: "$14",
    desc: 'Slow-cured corned beef, Swiss, sauerkraut, Russian dressing, grilled rye. The lunchtime answer to "what should I order here?"',
    img: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=800&q=80",
  },
  {
    name: "Guinness, Properly Poured",
    price: "$8",
    desc: "Two-part pour. 119.5-second rest. Shamrock if the bartender's in the mood. The only way to drink it.",
    img: "https://images.unsplash.com/photo-1577678055016-22e7fea84e76?w=800&q=80",
  },
];

const events = [
  {
    day: "Tuesdays",
    name: "Karaoke Night",
    time: "9 PM – 1 AM",
    desc: 'Pints, songs, and unexpectedly competent renditions of "Don\'t Stop Believin\'." Sign-up at the bar.',
  },
  {
    day: "Thursdays",
    name: "Trivia + Live Music",
    time: "7 PM trivia · 9:30 PM band",
    desc: "Pub trivia followed by a live band 'til close. Teams of 6 max — get here early for a booth.",
  },
  {
    day: "Fridays",
    name: "Live Music",
    time: "6 PM – 10 PM",
    desc: "Rotating roster of Tampa's best Irish-folk, Americana, and rock bands. Dinner pairing recommended.",
  },
  {
    day: "Saturdays",
    name: "DJ Night",
    time: "9 PM – 1 AM",
    desc: "Ybor's Saturday night — pints, beats, and a packed dance floor 'til last call.",
  },
];

const reviews = [
  {
    text: "Best Irish pub in Florida — and I've been to all of them. The Guinness is poured the way it should be, the lamb stew is the real thing, and the bartenders remember your name.",
    author: "Liam K., Google review",
  },
  {
    text: "Trivia Thursday is our weekly thing. The live music after is always great — even on a slow night they treat the place like it's St. Paddy's.",
    author: "Rachel D., Google review",
  },
  {
    text: "Walked in for a pint, stayed for the Shepherd's Pie, came back the next night for the band. It's Ybor's best-kept-not-secret.",
    author: "Tom V., Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1577678055016-22e7fea84e76?w=400&q=80",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80",
  "https://images.unsplash.com/photo-1546195643-70f48f9c5b87?w=400&q=80",
  "https://images.unsplash.com/photo-1633524892820-d36ed4d4ae93?w=400&q=80",
  "https://images.unsplash.com/photo-1606851094291-6efae152bb87?w=400&q=80",
  "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=400&q=80",
];

export default function JamesJoycePreview() {
  return (
    <div
      className="font-sans antialiased"
      style={{ background: PAPER, color: INK }}
    >
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{
          background: "rgba(250, 247, 240, 0.95)",
          borderColor: RULE,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-bold tracking-tight"
            style={{ color: ACCENT }}
          >
            James Joyce<span style={{ color: GOLD }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition">
              Menu
            </a>
            <a href="#whats-on" className="hover:opacity-70 transition">
              What&apos;s On
            </a>
            <a href="#visit" className="hover:opacity-70 transition">
              Visit
            </a>
            <a
              href="#reserve"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Reserve a Table
            </a>
          </div>
          <a
            href="#reserve"
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?w=1800&q=80"
          alt="Irish pub interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,26,17,0.45) 0%, rgba(15,26,17,0.55) 50%, rgba(15,26,17,0.85) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5"
            style={{ color: GOLD }}
          >
            Historic Ybor City · Since 2002
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Tampa&apos;s Irish pub.
            <br />
            <span className="italic font-normal" style={{ color: GOLD }}>
              Pour. Pull. Pub.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            50 craft beers on tap, 30 Irish whiskeys, live music four nights a
            week, and the best Shepherd&apos;s Pie in Florida — open &apos;til 3
            AM, every night.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#reserve"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
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
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span style={{ color: GOLD }} className="tracking-wider">
              ★★★★★
            </span>
            <span>4.6 · 2,999+ Google reviews</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              The Kitchen
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Pub classics, done properly
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <article key={item.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 bg-black relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl font-semibold">
                    {item.name}
                  </h3>
                  <span
                    className="font-semibold"
                    style={{ color: ACCENT }}
                  >
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="#"
              className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px] transition hover:text-[var(--paper)]"
              style={{
                borderColor: INK,
                color: INK,
              }}
            >
              View Full Menu & Whiskey List
            </a>
          </div>
        </div>
      </section>

      {/* WHAT'S ON */}
      <section
        id="whats-on"
        className="py-20 md:py-32 px-5 md:px-8 text-white"
        style={{ background: INK }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              What&apos;s On This Week
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Four nights, four reasons to come back
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Live entertainment Tuesday through Saturday — every week, no
              cover, no reservations required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {events.map((e) => (
              <div
                key={e.day}
                className="border border-white/15 rounded-lg p-7 transition hover:border-[var(--gold)]"
                style={{ ["--gold" as string]: GOLD } as React.CSSProperties}
              >
                <p
                  className="text-xs uppercase tracking-wider mb-3"
                  style={{ color: GOLD }}
                >
                  {e.day}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {e.name}
                </h3>
                <p className="text-sm text-white/70 mb-4">{e.time}</p>
                <p className="text-sm text-white/80">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://instagram.com/jamesjoyceybor"
              className="inline-flex items-center gap-2 font-medium hover:text-white"
              style={{ color: GOLD }}
            >
              Follow the live calendar on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A proper pub, in a place that loves one
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              James Joyce opened in 2002 with a simple idea: bring the warmth,
              hospitality, and stubborn love of a great pour that you&apos;d
              find in a Dublin neighborhood pub to a city that didn&apos;t have
              one. Two decades later, we&apos;re still here — same corner of
              8th Avenue, same bartenders behind the wood, same
              119-and-a-half-second Guinness pour.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Along the way, we&apos;ve become Tampa&apos;s home for Irish
              whiskey, live folk and Americana, late-night burgers, and the
              kind of conversations that go from &quot;one quick pint&quot; to
              &quot;is it really 2 AM already?&quot; 2,999 reviews and
              counting. We&apos;d love to make it 3,000.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=900&q=80"
              alt="Bartender pulling a Guinness"
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
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              Loved by locals
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ 4.6 on Google
            </h2>
            <p className="text-white/70">Based on 2,999+ reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-7 rounded-lg border border-white/15"
              >
                <p
                  className="mb-3 tracking-wider"
                  style={{ color: GOLD }}
                >
                  ★★★★★
                </p>
                <p className="text-white/90 leading-relaxed mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-sm text-white/60">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE */}
      <section id="reserve" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: ACCENT }}
          >
            Reservations
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Book a table.
            <br />
            Hold a snug for your crew.
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10">
            OpenTable reservations recommended for dinner Thursday through
            Saturday and any night with live music. Walk-ins always welcome at
            the bar.
          </p>

          <div
            className="border rounded-lg p-8 md:p-10"
            style={{ background: PAPER, borderColor: RULE }}
          >
            <p className="font-display text-2xl font-semibold mb-6">
              Find a table on OpenTable
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-sm">
              <input
                type="date"
                className="border rounded-md px-4 py-3 bg-white"
                style={{ borderColor: RULE }}
                defaultValue="2026-05-22"
              />
              <select
                className="border rounded-md px-4 py-3 bg-white"
                style={{ borderColor: RULE }}
                defaultValue="7:30 PM"
              >
                <option>7:00 PM</option>
                <option>7:30 PM</option>
                <option>8:00 PM</option>
                <option>8:30 PM</option>
              </select>
              <select
                className="border rounded-md px-4 py-3 bg-white"
                style={{ borderColor: RULE }}
                defaultValue="2 guests"
              >
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
                <option>6 guests</option>
                <option>8+ guests</option>
              </select>
            </div>
            <a
              href="https://www.opentable.com/james-joyce-irish-pub-and-eatery"
              className="inline-block px-10 py-4 rounded-full font-semibold text-white w-full sm:w-auto transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Find a Time
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Private events, rehearsal dinners, and full buyouts →{" "}
            <a
              href="mailto:events@jamesjoyceybor.com"
              className="hover:underline"
              style={{ color: ACCENT }}
            >
              events@jamesjoyceybor.com
            </a>
          </p>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Find us in Ybor
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Address</h4>
                <p className="text-gray-700">
                  1724 E 8th Avenue
                  <br />
                  Tampa, FL 33605
                  <br />
                  <span className="text-sm text-gray-500">
                    Historic Ybor City · Free parking on 9th Ave after 5 PM
                  </span>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Hours</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr>
                      <td className="pr-6 py-0.5">Monday – Sunday</td>
                      <td>11 AM – 3 AM</td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-0.5 text-gray-500 italic" colSpan={2}>
                        Kitchen open &apos;til 1 AM nightly
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Reach us</h4>
                <p className="text-gray-700">
                  <a
                    href="tel:8132471896"
                    className="hover:opacity-70"
                    style={{ color: INK }}
                  >
                    (813) 247-1896
                  </a>
                  <br />
                  <a
                    href="mailto:hello@jamesjoyceybor.com"
                    className="hover:opacity-70"
                    style={{ color: INK }}
                  >
                    hello@jamesjoyceybor.com
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://maps.google.com/?q=1724+E+8th+Ave+Tampa+FL"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Get Directions
                </a>
                <a
                  href="tel:8132471896"
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px]"
                  style={{ borderColor: INK, color: INK }}
                >
                  Call the Pub
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1574096079513-d8259312b785?w=900&q=80"
              alt="James Joyce Irish Pub exterior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section
        className="py-12 px-5 md:px-8 bg-white border-t"
        style={{ borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">
              @jamesjoyceybor
            </p>
            <a
              href="https://instagram.com/jamesjoyceybor"
              className="text-sm font-medium hover:underline"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square">
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
      <footer
        className="py-12 px-5 md:px-8 text-sm"
        style={{ background: INK, color: "rgba(255,255,255,0.7)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">
              James Joyce<span style={{ color: GOLD }}>.</span>
            </p>
            <p>Irish pub, Ybor City. Since 2002.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>
              1724 E 8th Ave
              <br />
              Tampa, FL 33605
              <br />
              <a href="tel:8132471896" className="hover:text-white">
                (813) 247-1896
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/jamesjoyceybor"
                className="hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.opentable.com/james-joyce-irish-pub-and-eatery"
                className="hover:text-white"
              >
                OpenTable
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>
            © 2026 James Joyce Irish Pub & Eatery · Concept mockup by Thryve
            Operations
          </span>
          <Link href="/" className="hover:text-white/80 underline-offset-4">
            ← All previews
          </Link>
        </div>
      </footer>
    </div>
  );
}
