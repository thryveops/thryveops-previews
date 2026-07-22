import Image from "next/image";

export const metadata = {
  title: "Sal Rosa — Caribbean-Latin Kitchen + Bar in Downtown Tampa",
  description:
    "Caribbean-Latin cuisine on the second floor of Le Méridien Tampa. Crab cakes, Sticky Mango Shrimp, Empanadas, Caribbean Braised Boar Shank, and weekend brunch. 4.2 stars.",
};

const CORAL = "#C44E3A";
const CREAM = "#FAF5EE";
const INK = "#1A0C08";
const GOLD = "#C49A52";
const RULE = "#E8DDD0";

const menuItems = [
  {
    category: "Starters",
    name: "Crab Cakes",
    price: "$18",
    desc: "Two signature crab cakes, chipotle remoulade, mango-jalapeño slaw. The opener that sets the tone for the whole meal.",
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
  },
  {
    category: "Starters",
    name: "Sticky Mango Shrimp",
    price: "$16",
    desc: "Jumbo shrimp, sticky mango glaze, toasted coconut, lime. The Caribbean pantry in a single bite. Order two if you're sharing.",
    img: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=800&q=80",
  },
  {
    category: "Starters",
    name: "Empanadas",
    price: "$14",
    desc: "Chicken or short rib filling, golden pastry, house-made chimichurri, pepper crema. Choose your protein; either is a reason to come back.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    category: "Mains",
    name: "Caribbean Braised Boar Shank",
    price: "$34",
    desc: "Slow-braised wild boar, Caribbean spice rub, root vegetable purée, jerk reduction. The most ambitious plate on the menu. It earns every dollar.",
    img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&q=80",
  },
  {
    category: "Weekend Brunch",
    name: "Shrimp Hash & Eggs",
    price: "$18",
    desc: "Spiced shrimp hash, crispy plantain, poached eggs, mango hollandaise. Saturday and Sunday, 11 AM – 2 PM. The brunch plate downtown Tampa doesn't know to order yet.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    category: "Cocktails",
    name: "Mango Mojito",
    price: "$13",
    desc: "Fresh muddled mint, Bacardí, mango purée, lime, club soda. The bar order that announces what kind of restaurant this is the moment it hits the table.",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
  },
];

const reviews = [
  {
    text: "The Caribbean Braised Boar Shank is one of the best things I've eaten in downtown Tampa. The Sticky Mango Shrimp as a starter, the boar shank as the main — that's the order. Come hungry.",
    author: "Diana R. · Google review",
  },
  {
    text: "I work in the building next door and I've eaten here twelve times in three months. The crab cakes are always perfect. The mango mojito is perfect. The brunch on Saturday is perfect.",
    author: "James W. · Google review",
  },
  {
    text: "The second floor of a hotel shouldn't feel this much like a destination restaurant. Sal Rosa earns it — Caribbean-Latin cuisine that you wouldn't think to look for in downtown Tampa but would immediately miss.",
    author: "Angela M. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80",
  "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&q=80",
  "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=400&q=80",
  "https://images.unsplash.com/photo-1601314002592-b8734bca6604?w=400&q=80",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
];

export default function SalRosaPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: CREAM, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(250,245,238,0.96)", borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-semibold tracking-tight" style={{ color: CORAL }}>
            Sal Rosa<span style={{ color: GOLD }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition">Menu</a>
            <a href="#brunch" className="hover:opacity-70 transition">Brunch</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a href="https://www.opentable.com/sal-rosa" className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: CORAL }}>Reserve</a>
          </div>
          <a href="https://www.opentable.com/sal-rosa" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: CORAL }}>Reserve</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80" alt="Sal Rosa dining room" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(26,12,8,.38) 0%,rgba(26,12,8,.52) 55%,rgba(26,12,8,.88) 100%)" }} />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-5" style={{ color: GOLD }}>Caribbean-Latin Kitchen + Bar · Downtown Tampa · Le Méridien, 2nd Floor</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.03]">
            Caribbean-Latin,<br />
            <span className="italic font-semibold" style={{ color: GOLD }}>downtown Tampa.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Crab cakes. Sticky Mango Shrimp. Caribbean Braised Boar Shank. A weekend brunch program that downtown Tampa doesn&apos;t know to order yet. Second floor of Le Méridien — destination, not amenity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.opentable.com/sal-rosa" className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: CORAL }}>Reserve a Table</a>
            <a href="#menu" className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">See the Menu</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span style={{ color: GOLD }} className="tracking-wider">★★★★</span>
            <span>4.2 · 643 Google reviews</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: CORAL }}>The Menu</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Caribbean-Latin done properly.</h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">Chef-driven Caribbean and Latin flavors. Crab cakes, mango shrimp, boar shank, and a cocktail program that leans into the cuisine.</p>
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
                  <span className="font-semibold ml-3 shrink-0" style={{ color: CORAL }}>{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRUNCH */}
      <section id="brunch" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: CORAL }}>Weekend Brunch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Caribbean brunch.<br />Saturday &amp; Sunday.</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">Sal Rosa runs a focused weekend brunch with Caribbean-Latin sensibility. Shrimp Hash &amp; Eggs with mango hollandaise. Empanadas. Mango mojitos at noon. The Le Méridien dining room with morning light and a cocktail that belongs in it.</p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">Saturday and Sunday, 11 AM – 2 PM. Reservations recommended — walk-ins welcome at the bar.</p>
            <a href="https://www.opentable.com/sal-rosa" className="inline-block px-7 py-3 rounded-full font-semibold text-white text-sm transition hover:brightness-110" style={{ background: CORAL }}>Reserve for Brunch</a>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1601314002592-b8734bca6604?w=900&q=80" alt="Sal Rosa brunch" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>643 Google Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">★★★★ 4.2 on Google</h2>
            <p className="text-white/55">Consistently above the downtown hotel-restaurant average</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="p-7 rounded-sm border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: GOLD }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE + VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: CORAL }}>Visit</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Find us downtown</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-700">601 N Florida Avenue, 2nd Floor<br />Tampa, FL 33602<br /><span className="text-sm text-gray-500">Inside Le Méridien Tampa · Valet + street parking</span></p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <table className="text-sm text-gray-700 w-full max-w-xs">
                  <tbody>
                    <tr><td className="pr-8 py-1">Monday – Friday Lunch</td><td>11 AM – 2 PM</td></tr>
                    <tr><td className="pr-8 py-1">Daily Dinner</td><td>5 PM – 10 PM</td></tr>
                    <tr><td className="pr-8 py-1 font-semibold" style={{ color: CORAL }}>Sat – Sun Brunch</td><td className="font-semibold" style={{ color: CORAL }}>11 AM – 2 PM</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach us</h4>
                <p className="text-gray-700">
                  <a href="tel:8135551982" className="hover:opacity-70 transition" style={{ color: INK }}>(813) 555-1982</a><br />
                  <a href="https://instagram.com/salrosatampa" className="hover:opacity-70 transition" style={{ color: CORAL }}>@salrosatampa</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://www.opentable.com/sal-rosa" className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: CORAL }}>Reserve on OpenTable</a>
                <a href="https://maps.google.com/?q=601+N+Florida+Ave+Tampa+FL+33602" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition" style={{ borderColor: INK, color: INK }}>Get Directions</a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80" alt="Sal Rosa interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* IG STRIP */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@salrosatampa</p>
            <a href="https://instagram.com/salrosatampa" className="text-sm font-medium hover:underline" style={{ color: CORAL }}>Follow on Instagram →</a>
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
            <p className="font-display text-2xl font-semibold text-white mb-2">Sal Rosa<span style={{ color: GOLD }}>.</span></p>
            <p>Caribbean-Latin Kitchen + Bar<br />Downtown Tampa</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>601 N Florida Ave, 2nd Floor<br />Tampa, FL 33602<br /><a href="tel:8135551982" className="hover:text-white transition">(813) 555-1982</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>Lunch: Mon – Fri 11 AM – 2 PM<br />Dinner: Daily 5 PM – 10 PM<br /><span style={{ color: GOLD }}>Brunch: Sat – Sun 11 AM – 2 PM</span></p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:justify-between gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© 2026 Sal Rosa · Concept mockup by Thryve Operations</span>
          <span>thryveops.com · contact@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
