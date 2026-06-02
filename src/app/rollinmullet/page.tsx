import Image from "next/image";

export const metadata = {
  title: "The Rollin' Mullet — 1971 Airstream, Lobster Rolls & Lawn Games in Seminole Heights",
  description:
    "An open-air bar with a 1971 Airstream walk-in beer cooler, real Northeastern lobster rolls, bocce, cornhole, and ring toss. 4.7 stars in Seminole Heights, Tampa.",
};

const TEAL = "#1F7A8C";
const CREAM = "#F8F4EE";
const INK = "#0E1A1F";
const AMBER = "#C49A52";
const RULE = "#DDE8E8";

const foodItems = [
  {
    category: "The Star",
    name: "Maine Lobster Roll",
    price: "$22",
    desc: "Cold Maine lobster, chilled on a toasted split-top bun, light mayo, chives. Real Northeastern — not pretend. In Tampa. From an Airstream-adjacent food truck.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    category: "Seafood",
    name: "New England Crab Cakes",
    price: "$18",
    desc: "Two crab cakes, remoulade, pickled jalapeño slaw. The kind that are mostly crab. Made fresh, not from frozen.",
    img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&q=80",
  },
  {
    category: "Bar Fare",
    name: "Fish Tacos (3)",
    price: "$15",
    desc: "Beer-battered cod, cabbage slaw, chipotle crema, lime. The outdoor-bar taco done properly.",
    img: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80",
  },
  {
    category: "Bar Fare",
    name: "Fried Chicken Sandwich",
    price: "$14",
    desc: "Buttermilk-brined thigh, hot sauce, pickles, brioche bun. The non-seafood option that doesn't apologize for being here.",
    img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=800&q=80",
  },
  {
    category: "Seafood",
    name: "Clam Chowder Cup",
    price: "$8",
    desc: "New England-style, cream-based, loaded with clams and potatoes. Pairs with a draft. Or just order it twice.",
    img: "https://images.unsplash.com/photo-1563396983631-2f8cf576bb36?w=800&q=80",
  },
  {
    category: "From the Airstream",
    name: "Rotating Draft Selection",
    price: "From $7",
    desc: "Local Florida craft and regional favorites, poured cold from the 1971 Airstream walk-in cooler. Ask the board what's fresh this week.",
    img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80",
  },
];

const lawnGames = [
  { name: "Bocce Ball", desc: "Full court on the lawn. Team up. Bring your game." },
  { name: "Cornhole", desc: "Four sets running on weekends. Regulars bring their own bags." },
  { name: "Ring Toss", desc: "Casual, competitive, and exactly the right level of stakes for a Sunday afternoon." },
  { name: "Giant Connect Four", desc: "Six-foot Connect Four. Harder than it looks after two drafts from the Airstream." },
];

const reviews = [
  {
    text: "The Airstream converted into a beer cooler alone is worth the visit. The lobster roll is the real thing — not a Tampa interpretation of a lobster roll. The lawn games, the vibe, the food truck. Tampa needed this.",
    author: "Patrick M. · Google review",
  },
  {
    text: "We came for the cornhole tournament and stayed for three hours. The lobster roll and crab cakes were perfect. This is the outdoor bar concept Tampa has been missing.",
    author: "Sarah L. · Google review",
  },
  {
    text: "4.7 stars is accurate. The Airstream, the games, the seafood — it all works. A Sunday afternoon at the Rollin' Mullet is one of the best afternoons you can have in Seminole Heights.",
    author: "Tom K. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80",
  "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&q=80",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80",
  "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=400&q=80",
  "https://images.unsplash.com/photo-1563396983631-2f8cf576bb36?w=400&q=80",
];

export default function RollinMulletPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: CREAM, color: INK }}>

      {/* STATUS BAR */}
      <div className="py-2.5 px-5 text-center text-xs text-white" style={{ background: TEAL }}>
        <span className="font-semibold tracking-wide">Open today, weather permitting</span>
        {" · "}
        Sunday cornhole starts at noon
        {" · "}
        <a href="#visit" className="underline hover:opacity-80">Hours &amp; directions</a>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(248,244,238,0.96)", borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: TEAL }}>
            The Rollin&apos; Mullet<span style={{ color: AMBER }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#food" className="hover:opacity-70 transition">Food</a>
            <a href="#lawn" className="hover:opacity-70 transition">The Lawn</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a href="https://therollinmullet.com" className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: TEAL }}>Reserve a Table</a>
          </div>
          <a href="https://therollinmullet.com" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: TEAL }}>Reserve</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1574096079513-d8259312b785?w=1800&q=80" alt="The Rollin' Mullet outdoor bar" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(14,26,31,.40) 0%,rgba(14,26,31,.55) 55%,rgba(14,26,31,.90) 100%)" }} />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-5" style={{ color: AMBER }}>Seminole Heights · 6401 N Nebraska Ave</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.03]">
            A 1971 Airstream,<br />a lobster roll,<br />
            <span className="italic font-semibold" style={{ color: AMBER }}>and a lawn full of cornhole.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            An open-air bar with a walk-in beer cooler that used to be an Airstream. Real Northeastern lobster rolls. Bocce, cornhole, ring toss, Connect Four. The outdoor concept Tampa needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#lawn" className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: TEAL }}>What&apos;s On the Lawn</a>
            <a href="#food" className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">The Menu</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span style={{ color: AMBER }} className="tracking-wider">★★★★★</span>
            <span>4.7 · 428 Google reviews</span>
          </div>
        </div>
      </section>

      {/* AIRSTREAM SECTION */}
      <section className="py-16 md:py-24 px-5 md:px-8" style={{ background: TEAL }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: AMBER }}>The Icon</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">A 1971 Airstream walk-in beer cooler.</h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4">It&apos;s exactly what it sounds like. A restored 1971 Airstream trailer, stationed on the lawn, converted into a walk-in cooler stocked with cold craft drafts. You open the door, choose your pint, and take it to the lawn.</p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">There is nothing else like this in Tampa. It should be the homepage of every Tampa weekend guide. It is ours.</p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1574096079513-d8259312b785?w=900&q=80" alt="The Rollin' Mullet Airstream" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* FOOD MENU */}
      <section id="food" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TEAL }}>The Menu</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Real Northeastern seafood. In Tampa.</h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">Lobster rolls, crab cakes, clam chowder, and fish tacos alongside bar classics. The food truck adjacent to the Airstream is the real deal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foodItems.map((item) => (
              <article key={item.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-5 bg-black">
                  <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{item.category}</p>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                  <span className="font-semibold ml-3 shrink-0" style={{ color: TEAL }}>{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LAWN GAMES */}
      <section id="lawn" className="py-20 md:py-32 px-5 md:px-8" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TEAL }}>What&apos;s on the Lawn</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The reason groups show up at noon on Sunday.</h2>
            <p className="text-gray-600 max-w-lg mx-auto">The lawn is the experience. Bring a team or find one when you arrive.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {lawnGames.map((g) => (
              <div key={g.name} className="bg-white p-6 rounded-lg border" style={{ borderColor: RULE }}>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: TEAL }}>{g.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://therollinmullet.com" className="inline-block px-8 py-3 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: TEAL }}>Book a Private Event or Party</a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: AMBER }}>Guest Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">★★★★★ 4.7 on Google</h2>
            <p className="text-white/55">428 reviews · Seminole Heights&apos; most distinctive outdoor bar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: AMBER }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TEAL }}>Visit</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Find us in Seminole Heights</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-700">6401 N Nebraska Avenue<br />Tampa, FL 33604<br /><span className="text-sm text-gray-500">Seminole Heights · Parking lot on-site</span></p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <table className="text-sm text-gray-700 w-full max-w-xs">
                  <tbody>
                    <tr><td className="pr-8 py-1">Monday – Thursday</td><td>4 PM – 10 PM</td></tr>
                    <tr><td className="pr-8 py-1 font-semibold" style={{ color: TEAL }}>Friday</td><td className="font-semibold" style={{ color: TEAL }}>2 PM – Midnight</td></tr>
                    <tr><td className="pr-8 py-1 font-semibold" style={{ color: TEAL }}>Saturday – Sunday</td><td className="font-semibold" style={{ color: TEAL }}>Noon – Midnight</td></tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-400 mt-2">Open weather permitting. Follow @rollinmullet for closure alerts.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach us</h4>
                <p className="text-gray-700">
                  <a href="tel:8135558342" className="hover:opacity-70 transition" style={{ color: INK }}>(813) 555-8342</a><br />
                  <a href="https://instagram.com/rollinmullet" className="hover:opacity-70 transition" style={{ color: TEAL }}>@rollinmullet</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://maps.google.com/?q=6401+N+Nebraska+Ave+Tampa+FL+33604" className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: TEAL }}>Get Directions</a>
                <a href="https://therollinmullet.com" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition" style={{ borderColor: INK, color: INK }}>Book a Party</a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=900&q=80" alt="The Rollin' Mullet lawn" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* IG STRIP */}
      <section className="py-12 px-5 md:px-8 border-t" style={{ borderColor: RULE, background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@rollinmullet</p>
            <a href="https://instagram.com/rollinmullet" className="text-sm font-medium hover:underline" style={{ color: TEAL }}>Follow on Instagram →</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={src} alt="" fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover hover:scale-105 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.60)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">The Rollin&apos; Mullet<span style={{ color: AMBER }}>.</span></p>
            <p>Open-air bar · Airstream cooler<br />Seminole Heights, Tampa</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>6401 N Nebraska Ave<br />Tampa, FL 33604<br /><a href="tel:8135558342" className="hover:text-white transition">(813) 555-8342</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>Mon – Thu: 4 PM – 10 PM<br /><span style={{ color: AMBER }}>Fri – Sun: Noon – Midnight</span><br /><a href="https://instagram.com/rollinmullet" className="hover:text-white transition">@rollinmullet</a></p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:justify-between gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© 2026 The Rollin&apos; Mullet · Concept mockup by Thryve Operations</span>
          <span>thryveops.com · hello@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
