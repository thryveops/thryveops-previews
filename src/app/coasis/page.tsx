import Image from "next/image";

export const metadata = {
  title: "Coasis Restaurant, Bar & Suites — Soul + Steak + R&B in Tampa Heights",
  description:
    "Modern American cuisine with a soul-food backbone. Honey Butter Biscuit, Catfish & Grits, and RnB Thursdays until midnight. Black-owned and proud. Tampa Heights.",
};

const WINE = "#7C2D3D";
const CREAM = "#FAF4F0";
const INK = "#1A0C0C";
const GOLD = "#C49A52";
const RULE = "#E8D8CC";

const menuItems = [
  {
    category: "The Signature",
    name: "Famous Honey Butter Biscuit",
    price: "$9",
    desc: "House-made buttermilk biscuit, whipped honey butter, local honey drizzle. The dish every table orders. The reason first-timers come back.",
    img: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=800&q=80",
  },
  {
    category: "Soul Classics",
    name: "Catfish & Grits",
    price: "$22",
    desc: "Blackened catfish over stone-ground cheddar grits, shrimp creole sauce. Modern Southern, executed with conviction.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    category: "Soul Classics",
    name: "Smothered Pork Chops",
    price: "$24",
    desc: "Bone-in pork chop, slow-braised onion gravy, buttery mashed potatoes. Sunday dinner energy, every night we're open.",
    img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80",
  },
  {
    category: "Steakhouse",
    name: "Ribeye 12 oz",
    price: "$42",
    desc: "USDA choice ribeye, garlic herb butter, two sides. The steakhouse half of Coasis — not a token, the real thing.",
    img: "https://images.unsplash.com/photo-1565895405127-481853366cf8?w=800&q=80",
  },
  {
    category: "Weekend Brunch",
    name: "Chicken & Waffles",
    price: "$18",
    desc: "Crispy fried chicken thigh over a Belgian waffle, hot honey drizzle, maple syrup. Saturday and Sunday, 11 AM – 3 PM.",
    img: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&q=80",
  },
  {
    category: "Cocktails",
    name: "Coasis Old Fashioned",
    price: "$14",
    desc: "Barrel-aged bourbon, house demerara syrup, Angostura bitters, expressed orange peel. Built right, every time.",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80",
  },
];

const reviews = [
  {
    text: "The Honey Butter Biscuit alone is worth the drive. We came for brunch and stayed for two rounds of cocktails. RnB Thursday is something else — the energy in this room is unmatched in Tampa.",
    author: "Darnell W. · Google review",
  },
  {
    text: "Best soul food in Tampa, and I've tried them all. The Catfish & Grits is the real thing. The staff make you feel like a regular from the first visit.",
    author: "Simone A. · Google review",
  },
  {
    text: "Ribeye was perfect, drinks were strong, and the R&B set on Thursday night turned dinner into a whole experience. Black-owned, quality-run. Tampa should be louder about this place.",
    author: "Marcus T. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=400&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
  "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80",
  "https://images.unsplash.com/photo-1565895405127-481853366cf8?w=400&q=80",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80",
  "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
];

export default function CoasisPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: CREAM, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(250,244,240,0.96)", borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tight" style={{ color: WINE }}>
            Coasis<span style={{ color: GOLD }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition">Menu</a>
            <a href="#rnb" className="hover:opacity-70 transition">RnB Thursdays</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a
              href="https://www.toasttab.com/coasis"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: WINE }}
            >
              Order Online
            </a>
          </div>
          <a href="https://www.toasttab.com/coasis" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: WINE }}>Order</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1800&q=80"
          alt="Coasis dining room"
          fill priority sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(26,12,12,.40) 0%,rgba(26,12,12,.55) 55%,rgba(26,12,12,.90) 100%)" }} />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-5" style={{ color: GOLD }}>Tampa Heights · Black-Owned · Modern American</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.03]">
            Soul. Steak.<br />
            <span className="italic font-semibold" style={{ color: GOLD }}>R&amp;B Thursdays.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Modern American with a soul-food backbone. The Famous Honey Butter Biscuit. Brunch on the weekends. RnB night every Thursday &apos;til midnight.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#rnb" className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: WINE }}>RnB Thursday Details</a>
            <a href="#menu" className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">See the Menu</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span style={{ color: GOLD }} className="tracking-wider">★★★★</span>
            <span>4.1 · 1,005 Google reviews</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: WINE }}>From the Kitchen</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">The food people come back for</h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">Soul food roots. Steakhouse execution. The Honey Butter Biscuit on every table, every night.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <article key={item.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-5 bg-black">
                  <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{item.category}</p>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                  <span className="font-semibold ml-3 shrink-0" style={{ color: WINE }}>{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://www.toasttab.com/coasis" className="inline-block px-8 py-3 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: WINE }}>Order Online — Pickup &amp; Delivery</a>
          </div>
        </div>
      </section>

      {/* RNB THURSDAYS */}
      <section id="rnb" className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Every Thursday</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">RnB Thursdays. Until midnight.</h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4">Every Thursday, Coasis becomes something different. The music goes up. The bar gets busy. The kitchen stays open late. Live R&amp;B sets from Tampa artists, a full dinner menu until close, and a crowd that treats Thursday like a Friday.</p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">No cover. Reservations recommended for dinner before 9 PM. Walk-ins welcome at the bar.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.opentable.com/coasis-restaurant" className="px-7 py-3 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: WINE }}>Reserve for Thursday Dinner</a>
              <a href="https://instagram.com/coasistampa" className="px-7 py-3 rounded-full font-semibold border border-white/30 hover:border-white/60 transition text-white">@coasistampa</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&q=80" alt="Coasis RnB night" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: WINE }}>Guest Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">★★★★ 4.1 on Google</h2>
            <p className="text-gray-500">Based on 1,005 reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="p-7 rounded-sm border" style={{ borderColor: RULE }}>
                <p className="mb-3 tracking-wider" style={{ color: GOLD }}>★★★★★</p>
                <p className="text-gray-800 leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                <footer className="text-sm text-gray-400">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: WINE }}>Visit</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Find us in Tampa Heights</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-700">7701 N Nebraska Avenue<br />Tampa, FL 33604<br /><span className="text-sm text-gray-500">Tampa Heights · Free parking on-site</span></p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <table className="text-sm text-gray-700 w-full max-w-xs">
                  <tbody>
                    <tr><td className="pr-8 py-1">Wednesday – Friday</td><td>4 PM – 10 PM</td></tr>
                    <tr><td className="pr-8 py-1 font-semibold" style={{ color: WINE }}>Thursday</td><td className="font-semibold" style={{ color: WINE }}>4 PM – Midnight (RnB Night)</td></tr>
                    <tr><td className="pr-8 py-1">Saturday – Sunday</td><td>11 AM – 3 PM Brunch · 4 PM – 10 PM Dinner</td></tr>
                    <tr className="text-gray-400"><td className="pr-8 py-1 italic">Monday – Tuesday</td><td className="italic">Closed</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach us</h4>
                <p className="text-gray-700">
                  <a href="tel:8134885678" className="hover:opacity-70 transition" style={{ color: INK }}>(813) 488-5678</a><br />
                  <a href="https://instagram.com/coasistampa" className="hover:opacity-70 transition" style={{ color: WINE }}>@coasistampa</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://maps.google.com/?q=7701+N+Nebraska+Ave+Tampa+FL+33604" className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: WINE }}>Get Directions</a>
                <a href="https://www.opentable.com/coasis-restaurant" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition" style={{ borderColor: INK, color: INK }}>Reserve a Table</a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1545128485-c400e7702796?w=900&q=80" alt="Coasis interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* IG STRIP */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@coasistampa</p>
            <a href="https://instagram.com/coasistampa" className="text-sm font-medium hover:underline" style={{ color: WINE }}>Follow on Instagram →</a>
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
            <p className="font-display text-2xl font-bold text-white mb-2">Coasis<span style={{ color: GOLD }}>.</span></p>
            <p>Restaurant, Bar &amp; Suites<br />Tampa Heights · Black-Owned</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>7701 N Nebraska Ave<br />Tampa, FL 33604<br /><a href="tel:8134885678" className="hover:text-white transition">(813) 488-5678</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <a href="https://instagram.com/coasistampa" className="hover:text-white transition block">@coasistampa</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:justify-between gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© 2026 Coasis Restaurant, Bar &amp; Suites · Concept mockup by Thryve Operations</span>
          <span>thryveops.com · contact@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
