import Image from "next/image";

export const metadata = {
  title: "Front Porch & Bart's Tavern — Seminole Heights Restaurant Since 2002",
  description:
    "An 1898 Victorian house, two concepts, and 23 years in Seminole Heights. Front Porch dining upstairs, Bart's Tavern downstairs. Brunch Friday through Sunday. 4.4 stars, 1,759 reviews.",
};

const RED = "#7A2233";
const CREAM = "#FAF5F0";
const INK = "#1A0C0C";
const GOLD = "#C49A52";
const RULE = "#E8D8CC";

const menuItems = [
  {
    category: "The Signatures",
    name: "Award-Winning Meatloaf",
    price: "$18",
    desc: "House-ground beef meatloaf, brown gravy, garlic mashed potatoes. The dish locals recommend to anyone who hasn't been. Award-winning for a reason.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    category: "The Signatures",
    name: "Hot Vodka Ravioli",
    price: "$19",
    desc: "House-made ravioli in a spicy vodka cream sauce. The dish regulars cite by name. Order it. You'll understand why.",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
  },
  {
    category: "Bar Favorites",
    name: "Jumbo Chicken Wings",
    price: "$15",
    desc: "Fresh never-frozen jumbo wings, your choice of sauce, blue cheese or ranch. The Bart's Tavern staple. Order a second basket.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    category: "From the Grill",
    name: "8 oz Angus Burger",
    price: "$16",
    desc: "Fresh-ground Angus, brioche bun, lettuce, tomato, onion, your choice of cheese. The neighborhood burger, done right.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    category: "Weekend Brunch",
    name: "Eggs Benedict",
    price: "$14",
    desc: "Two poached eggs on a toasted English muffin, Canadian bacon, house hollandaise. Brunch anchor, Fri – Sun 8 AM – 2 PM.",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
  },
  {
    category: "Weekend Brunch",
    name: "Shrimp & Grits",
    price: "$22",
    desc: "Gulf shrimp over stone-ground grits, andouille cream sauce, scallions. A brunch plate that becomes a regular order.",
    img: "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=800&q=80",
  },
];

const reviews = [
  {
    text: "The Hot Vodka Ravioli and a Bart's cocktail on the porch is exactly what a Friday night in Tampa should feel like. 23 years of this and the kitchen hasn't slipped. That's the real flex.",
    author: "Michael B. · Google review",
  },
  {
    text: "The meatloaf is legitimately award-winning — I came for brunch and ended up ordering dinner. The Victorian building is worth the visit alone. No other restaurant in Seminole Heights has this character.",
    author: "Lisa T. · Google review",
  },
  {
    text: "Downstairs at Bart's is its own thing entirely. Happy hour on weekdays, a proper bar, the best wings in the neighborhood. We use this place for everything — brunch, dinner, after-work drinks.",
    author: "James R. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80",
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80",
  "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
];

export default function FrontPorchPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: CREAM, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(250,245,240,0.96)", borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-tight" style={{ color: RED }}>
            Front Porch<span style={{ color: GOLD }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition">Menu</a>
            <a href="#brunch" className="hover:opacity-70 transition">Brunch</a>
            <a href="#barts" className="hover:opacity-70 transition">Bart&apos;s Tavern</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a href="https://www.opentable.com/front-porch-barts-tavern" className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: RED }}>Reserve</a>
          </div>
          <a href="https://www.opentable.com/front-porch-barts-tavern" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: RED }}>Reserve</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1515669097368-22e68427d265?w=1800&q=80" alt="Front Porch Victorian restaurant" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(26,12,12,.38) 0%,rgba(26,12,12,.52) 55%,rgba(26,12,12,.88) 100%)" }} />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-5" style={{ color: GOLD }}>Seminole Heights · Since 2002 · 1898 Victorian House</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.03]">
            Seminole Heights&apos;<br />
            <span className="italic font-semibold" style={{ color: GOLD }}>Front Porch.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Twenty-three years in the same 1898 Victorian house. Front Porch dining upstairs. Bart&apos;s Tavern downstairs. Brunch Friday through Sunday. The neighborhood restaurant Tampa has been returning to since 2002.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.opentable.com/front-porch-barts-tavern" className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: RED }}>Reserve a Table</a>
            <a href="#menu" className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">See the Menu</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span style={{ color: GOLD }} className="tracking-wider">★★★★</span>
            <span>4.4 · 1,759 Google reviews · 23 years</span>
          </div>
        </div>
      </section>

      {/* TWO CONCEPTS */}
      <div className="py-8 px-5 md:px-8" style={{ background: RED }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-center">
          <div className="py-4">
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: GOLD }}>Upstairs</p>
            <p className="font-display text-2xl font-semibold">Front Porch</p>
            <p className="text-white/70 text-sm mt-1">Full dining room · Brunch + Dinner · Victorian atmosphere</p>
          </div>
          <div className="py-4 border-t md:border-t-0 md:border-l border-white/20">
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: GOLD }}>Downstairs</p>
            <p className="font-display text-2xl font-semibold">Bart&apos;s Tavern</p>
            <p className="text-white/70 text-sm mt-1">Full bar · Happy hour · Late-night · Courtyard patio</p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: RED }}>The Menu</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">23 years of getting it right</h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">Award-winning meatloaf. Hot Vodka Ravioli locals cite by name. Jumbo wings at Bart&apos;s. Weekend brunch on the porch.</p>
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
                  <span className="font-semibold ml-3 shrink-0" style={{ color: RED }}>{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRUNCH */}
      <section id="brunch" className="py-20 md:py-32 px-5 md:px-8" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80" alt="Front Porch brunch" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: RED }}>Weekend Brunch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">On the porch.<br />Friday through Sunday.</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">Front Porch runs one of the better brunch programs in Seminole Heights — and one of the few that starts Friday. Shrimp &amp; Grits, Eggs Benedict, Chicken &amp; Waffles, Bloody Marys, and mimosas starting at 8 AM.</p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">No brunch cap. No time limit. Just the wraparound porch, food that earns a 4.4 average, and two hours you didn&apos;t plan to spend.</p>
            <a href="https://www.opentable.com/front-porch-barts-tavern" className="inline-block px-7 py-3 rounded-full font-semibold text-white text-sm transition hover:brightness-110" style={{ background: RED }}>Reserve for Brunch</a>
            <p className="text-sm text-gray-500 mt-3">Friday – Sunday · 8 AM – 2 PM</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="barts" className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>1,759 Google Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">★★★★ 4.4 on Google</h2>
            <p className="text-white/55">23 years of neighborhood dining. The reviews tell the story.</p>
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

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: RED }}>Visit</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Find us on Florida Ave</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-700">5924 N Florida Avenue<br />Tampa, FL 33604<br /><span className="text-sm text-gray-500">Seminole Heights · Street parking available</span></p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <table className="text-sm text-gray-700 w-full max-w-xs">
                  <tbody>
                    <tr><td className="pr-8 py-1">Wednesday – Thursday</td><td>4 PM – 10 PM</td></tr>
                    <tr><td className="pr-8 py-1 font-semibold" style={{ color: RED }}>Fri – Sun Brunch</td><td className="font-semibold" style={{ color: RED }}>8 AM – 2 PM</td></tr>
                    <tr><td className="pr-8 py-1">Friday – Saturday Dinner</td><td>4 PM – 11 PM</td></tr>
                    <tr><td className="pr-8 py-1">Sunday Dinner</td><td>4 PM – 9 PM</td></tr>
                    <tr className="text-gray-400"><td className="pr-8 py-1 italic">Monday – Tuesday</td><td className="italic">Closed</td></tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-400 mt-1">Bart&apos;s Tavern happy hour Wed–Fri 4–7 PM.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach us</h4>
                <p className="text-gray-700">
                  <a href="tel:8132395290" className="hover:opacity-70 transition" style={{ color: INK }}>(813) 239-5290</a><br />
                  <a href="https://instagram.com/frontporchbarts" className="hover:opacity-70 transition" style={{ color: RED }}>@frontporchbarts</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://maps.google.com/?q=5924+N+Florida+Ave+Tampa+FL+33604" className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: RED }}>Get Directions</a>
                <a href="https://www.opentable.com/front-porch-barts-tavern" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition" style={{ borderColor: INK, color: INK }}>Reserve</a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=900&q=80" alt="Bart's Tavern bar" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* IG STRIP */}
      <section className="py-12 px-5 md:px-8 border-t" style={{ borderColor: RULE, background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@frontporchbarts</p>
            <a href="https://instagram.com/frontporchbarts" className="text-sm font-medium hover:underline" style={{ color: RED }}>Follow on Instagram →</a>
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
            <p className="font-display text-2xl font-semibold text-white mb-2">Front Porch<span style={{ color: GOLD }}>.</span></p>
            <p>&amp; Bart&apos;s Tavern<br />Seminole Heights · Since 2002</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>5924 N Florida Ave<br />Tampa, FL 33604<br /><a href="tel:8132395290" className="hover:text-white transition">(813) 239-5290</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>Brunch: Fri – Sun 8 AM – 2 PM<br />Dinner: Wed – Sun from 4 PM<br /><span style={{ color: "rgba(255,255,255,0.35)" }}>Closed Mon – Tue</span></p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:justify-between gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© 2026 Front Porch &amp; Bart&apos;s Tavern · Concept mockup by Thryve Operations</span>
          <span>thryveops.com · contact@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
