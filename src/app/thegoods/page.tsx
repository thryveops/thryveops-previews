import Image from "next/image";

export const metadata = {
  title: "The Goods — Coffee Bar + Curated Gift Shop in Old Seminole Heights",
  description:
    "Coffee bar and curated gift shop in Old Seminole Heights — housewares, jewelry, gourmet edibles, and local crafts alongside the best matcha in the neighborhood. 4.8 stars. No website until now.",
};

const SAGE = "#7A8B6F";
const CREAM = "#F8F5EE";
const INK = "#1A1A0E";
const WARM = "#C4A96E";
const RULE = "#E0E5D8";

const coffeeMenu = [
  { name: "Matcha — Three Ways", price: "From $6", desc: "Traditional, iced, or blended with oat milk. The drink that earned The Goods its press. One of Old Seminole Heights' best, full stop." },
  { name: "Espresso", price: "$3.50", desc: "Double shot, locally roasted, pulled to order. The foundation." },
  { name: "Latte", price: "$5.50", desc: "Espresso and steamed milk. Classic or seasonal rotation." },
  { name: "Cold Brew", price: "$5", desc: "12-hour steep, served over ice. The workhorse of the afternoon crowd." },
  { name: "Seasonal Specialty", price: "$6.50", desc: "Ask the bar. Changes with the season, rarely disappoints." },
];

const giftItems = [
  {
    category: "Home & Kitchen",
    name: "Curated Housewares",
    desc: "Ceramics, cutting boards, linen napkins, and small-batch kitchen goods. The kind of thing you'd buy for yourself but present as a gift.",
    img: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=800&q=80",
  },
  {
    category: "Jewelry",
    name: "Local Designer Jewelry",
    desc: "Handmade pieces from independent Florida designers. Earrings, rings, and necklaces that you won't find at a mall.",
    img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
  },
  {
    category: "Gourmet Edibles",
    name: "Artisan Food & Pantry",
    desc: "Small-batch hot sauces, local honey, specialty salts, artisan chocolates, and hand-picked pantry items. The gift that disappears first.",
    img: "https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=800&q=80",
  },
];

const reviews = [
  {
    text: "The best matcha in Old Seminole Heights and it's not close. The gift shop is beautifully curated — I've done all my holiday shopping here for the last two years. The fact that this place doesn't have a website yet is a crime.",
    author: "Claire T. · Google review",
  },
  {
    text: "We came for brunch at Rooster & the Till next door and wandered in. Left with a matcha, a ceramic bowl, and a jar of local honey. It's the kind of store that knows exactly what it is and does it perfectly.",
    author: "Nina K. · Google review",
  },
  {
    text: "4.8 stars with 103 reviews — every one of those is earned. The staff are genuinely lovely. The matcha is genuinely excellent. The gift selection is exactly right for the neighborhood. Give this place a website.",
    author: "David L. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&q=80",
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&q=80",
  "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80",
  "https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=400&q=80",
];

export default function TheGoodsPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: CREAM, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(248,245,238,0.96)", borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-tight" style={{ color: SAGE }}>
            The Goods<span style={{ color: WARM }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#coffee" className="hover:opacity-70 transition">Coffee</a>
            <a href="#shop" className="hover:opacity-70 transition">The Shop</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a
              href="https://instagram.com/thegoodstpa"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: SAGE }}
            >
              @thegoodstpa
            </a>
          </div>
          <a href="https://instagram.com/thegoodstpa" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: SAGE }}>Follow</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80" alt="The Goods coffee bar" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(26,26,14,.42) 0%,rgba(26,26,14,.58) 55%,rgba(26,26,14,.90) 100%)" }} />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-5" style={{ color: WARM }}>6500 N Florida Ave · Old Seminole Heights · Next to Rooster &amp; the Till</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.03]">
            Coffee bar +<br />curated gift shop,<br />
            <span className="italic font-semibold" style={{ color: WARM }}>in Old Seminole Heights.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-5 max-w-xl mx-auto leading-relaxed">
            The best matcha in the neighborhood, alongside housewares, jewelry, gourmet edibles, and locally-made crafts. Two reasons to walk in. One reason to come back.
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="px-3 py-1.5 rounded-full border border-white/30 text-xs tracking-wide">&ldquo;Best Matcha in Old Seminole Heights&rdquo;</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#coffee" className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: SAGE }}>See the Coffee Menu</a>
            <a href="#shop" className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">The Gift Shop</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span style={{ color: WARM }} className="tracking-wider">★★★★★</span>
            <span>4.8 · 103 Google reviews</span>
          </div>
        </div>
      </section>

      {/* DUAL CONCEPT STRIP */}
      <div className="py-8 px-5 md:px-8" style={{ background: SAGE }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-center">
          <div className="py-4">
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: WARM }}>The Coffee Bar</p>
            <p className="font-display text-2xl font-semibold">Best matcha in the neighborhood</p>
            <p className="text-white/70 text-sm mt-1">Espresso · Matcha · Cold brew · Seasonal specialties</p>
          </div>
          <div className="py-4 border-t md:border-t-0 md:border-l border-white/20">
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: WARM }}>The Gift Shop</p>
            <p className="font-display text-2xl font-semibold">Curated, not random</p>
            <p className="text-white/70 text-sm mt-1">Housewares · Jewelry · Gourmet edibles · Local crafts</p>
          </div>
        </div>
      </div>

      {/* COFFEE MENU */}
      <section id="coffee" className="py-20 md:py-28 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: SAGE }}>The Coffee Program</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">The best matcha in Old Seminole Heights.</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">Editorial-recognized. Three preparations. The matcha program at The Goods is the reason regulars come in three times a week — and the reason first-timers become regulars.</p>
            <div className="space-y-4">
              {coffeeMenu.map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4 pb-4 border-b last:border-0" style={{ borderColor: RULE }}>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="font-semibold text-sm shrink-0" style={{ color: SAGE }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80" alt="The Goods coffee" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* THE SHOP */}
      <section id="shop" className="py-20 md:py-32 px-5 md:px-8" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: SAGE }}>The Gift Shop</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Curated, not random.</h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">Every item in The Goods is there because someone made a deliberate decision to put it there. Housewares, jewelry, gourmet pantry items, and local crafts — the gift you&apos;d want to receive.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftItems.map((item) => (
              <article key={item.name} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-5 bg-black">
                  <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">{item.category}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm mb-4">In-store shopping and local delivery available. <a href="https://instagram.com/thegoodstpa" className="underline" style={{ color: SAGE }}>DM @thegoodstpa</a> for specific item availability.</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: WARM }}>What the neighborhood is saying</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">★★★★★ 4.8 on Google</h2>
            <p className="text-white/55">103 reviews · Old Seminole Heights&apos; favorite quiet find</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: WARM }}>★★★★★</p>
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
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: SAGE }}>Visit</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Find us on Florida Ave</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-700">6500 N Florida Avenue<br />Tampa, FL 33604<br /><span className="text-sm text-gray-500">Old Seminole Heights · Next to Rooster &amp; the Till · Street parking</span></p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <table className="text-sm text-gray-700 w-full max-w-xs">
                  <tbody>
                    <tr className="text-gray-400"><td className="pr-8 py-1 italic">Monday – Tuesday</td><td className="italic">Closed</td></tr>
                    <tr><td className="pr-8 py-1">Wednesday – Friday</td><td>10:30 AM – 6:30 PM</td></tr>
                    <tr><td className="pr-8 py-1 font-semibold" style={{ color: SAGE }}>Saturday – Sunday</td><td className="font-semibold" style={{ color: SAGE }}>10 AM – 6 PM</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Follow &amp; reach us</h4>
                <p className="text-gray-700">
                  <a href="https://instagram.com/thegoodstpa" className="hover:opacity-70 transition" style={{ color: SAGE }}>@thegoodstpa on Instagram</a>
                </p>
                <p className="text-xs text-gray-400 mt-1">Sister store: Cleanse Apothecary</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://maps.google.com/?q=6500+N+Florida+Ave+Tampa+FL+33604" className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: SAGE }}>Get Directions</a>
                <a href="https://instagram.com/thegoodstpa" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition" style={{ borderColor: INK, color: INK }}>DM on Instagram</a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1497636577773-f1231844b336?w=900&q=80" alt="The Goods interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* IG STRIP */}
      <section className="py-12 px-5 md:px-8 border-t" style={{ borderColor: RULE, background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@thegoodstpa</p>
            <a href="https://instagram.com/thegoodstpa" className="text-sm font-medium hover:underline" style={{ color: SAGE }}>Follow on Instagram →</a>
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
            <p className="font-display text-2xl font-semibold text-white mb-2">The Goods<span style={{ color: WARM }}>.</span></p>
            <p>Coffee Bar + Curated Gift Shop<br />Old Seminole Heights, Tampa</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>6500 N Florida Ave<br />Tampa, FL 33604<br /><span style={{ color: "rgba(255,255,255,0.40)" }}>Next to Rooster &amp; the Till</span></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>Wed – Fri: 10:30 AM – 6:30 PM<br /><span style={{ color: WARM }}>Sat – Sun: 10 AM – 6 PM</span><br /><span style={{ color: "rgba(255,255,255,0.35)" }}>Closed Mon – Tue</span></p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:justify-between gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© 2026 The Goods — Coffee &amp; Gifts · Concept mockup by Thryve Operations</span>
          <span>thryveops.com · hello@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
