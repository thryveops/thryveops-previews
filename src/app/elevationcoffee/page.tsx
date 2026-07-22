import Image from "next/image";

export const metadata = {
  title: "Elevation Coffee Heights — Specialty Coffee + Natural Wine Bar in Ybor City",
  description:
    "Specialty coffee bar from 8 AM. La Sétima Club natural wine bar from afternoon to late. Two concepts, one stunning space on 7th Avenue. 4.6 stars, 215 reviews.",
};

const BROWN = "#8B5A3C";
const CREAM = "#FAF5EE";
const INK = "#1A100A";
const GOLD = "#C49A52";
const RULE = "#E8DDD0";

const coffeeMenu = [
  { name: "Espresso", price: "$3.50", desc: "Double shot, single-origin rotating selection, pulled to order." },
  { name: "Latte", price: "$5.50", desc: "Espresso and steamed milk. Classic or seasonal. Ask what's rotating." },
  { name: "Greenhouse", price: "$6.50", desc: "House signature: hibiscus syrup, espresso, oat milk. The one everyone orders twice." },
  { name: "UNA MAS", price: "$6.50", desc: "Espresso, coconut milk, toasted vanilla. A full-stop reason to walk in." },
  { name: "Pour-Over", price: "$6", desc: "Slow, single-origin, intentional. Worth the extra two minutes every time." },
  { name: "Cold Brew", price: "$5", desc: "12-hour steep, served over ice. Available from open 'til we run out." },
];

const wineMenu = [
  { name: "Natural White", price: "From $12", desc: "Rotating selections — funky, alive, and paired with good conversation." },
  { name: "Natural Red", price: "From $13", desc: "Low-intervention reds from producers who let the fruit talk." },
  { name: "Orange Wine", price: "From $14", desc: "Skin-contact whites. Complex, unusual — in the best way." },
  { name: "Pét-Nat Sparkling", price: "From $14", desc: "Perfect for a Tuesday that deserves to feel like a Saturday." },
  { name: "Bottle Service", price: "From $48", desc: "Curated natural wine selection. Ask the bar for tonight's picks." },
  { name: "Charcuterie Board", price: "$18", desc: "Cured meats, cheese, pickled vegetables, crackers. The board that keeps the night going." },
];

const reviews = [
  {
    text: "The Greenhouse latte is genuinely one of the best drinks in Tampa. The back area is stunning — greenery, soft lighting, music you actually want to hear. Coffee by day, wine by night in the same room is a concept I didn't know I needed.",
    author: "Maya R. · Google review",
  },
  {
    text: "4.6 stars are earned. The baristas know what they're doing. Came back the same week for the wine program — the natural wine list is exactly what you'd want. The space does not belong near anything mediocre.",
    author: "Daniel K. · Google review",
  },
  {
    text: "Best coffee in Ybor, and after 2 PM it becomes something else entirely. The La Sétima transformation is real — low lights, wine, good music. I've brought four different people here and every one became a regular.",
    author: "Sofia M. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80",
  "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
  "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=400&q=80",
  "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&q=80",
];

export default function ElevationCoffeePreview() {
  return (
    <div className="font-sans antialiased" style={{ background: CREAM, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(250,245,238,0.96)", borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-tight" style={{ color: BROWN }}>
            Elevation Coffee<span style={{ color: GOLD }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#coffee" className="hover:opacity-70 transition">Coffee</a>
            <a href="#wine" className="hover:opacity-70 transition">La Sétima Wine</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a href="https://elevationhaus.square.site" className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: BROWN }}>Order Coffee</a>
          </div>
          <a href="https://elevationhaus.square.site" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: BROWN }}>Order</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80" alt="Elevation Coffee interior" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(26,16,10,.40) 0%,rgba(26,16,10,.55) 55%,rgba(26,16,10,.90) 100%)" }} />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-5" style={{ color: GOLD }}>815 E 7th Ave · Ybor City · Inside La Sétima Club</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.03]">
            Coffee from 8 AM.
            <br />
            <span className="italic font-semibold" style={{ color: GOLD }}>Wine after 2.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Elevation Coffee Heights by morning — specialty espresso, pour-overs, and signature lattes. La Sétima Club by afternoon — curated natural wine, low lights, and the best room in Ybor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#coffee" className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: BROWN }}>See the Coffee Menu</a>
            <a href="#wine" className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">La Sétima Wine Program</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span style={{ color: GOLD }} className="tracking-wider">★★★★★</span>
            <span>4.6 · 215 Google reviews</span>
          </div>
        </div>
      </section>

      {/* DUAL CONCEPT STRIP */}
      <div className="py-8 px-5 md:px-8" style={{ background: BROWN }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-center">
          <div className="py-4">
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: GOLD }}>8 AM – 2 PM</p>
            <p className="font-display text-2xl font-semibold">Elevation Coffee</p>
            <p className="text-white/70 text-sm mt-1">Specialty coffee bar · Single-origin · Signature lattes</p>
          </div>
          <div className="py-4 border-t md:border-t-0 md:border-l border-white/20">
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: GOLD }}>Afternoon – Late</p>
            <p className="font-display text-2xl font-semibold">La Sétima Club</p>
            <p className="text-white/70 text-sm mt-1">Natural wine bar · Curated selections · Low lights · Good music</p>
          </div>
        </div>
      </div>

      {/* COFFEE MENU */}
      <section id="coffee" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: BROWN }}>The Coffee Program</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Pulled to order. Every time.</h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">Single-origin rotating selection, house signature lattes, and the pour-overs that earned us 4.6 stars. Open 8 AM to 2 PM.</p>
          </div>
          <div className="relative aspect-[16/6] rounded-lg overflow-hidden mb-14">
            <Image src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1400&q=80" alt="Elevation Coffee bar" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {coffeeMenu.map((item) => (
              <div key={item.name} className="p-5 rounded-lg border" style={{ borderColor: RULE }}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                  <span className="font-semibold ml-3 shrink-0 text-sm" style={{ color: BROWN }}>{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WINE PROGRAM */}
      <section id="wine" className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Afternoon → Late</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">La Sétima Natural Wine Club</h2>
            <p className="text-white/65 max-w-xl mx-auto">The same room, transformed. Low-intervention, natural wines from independent producers. The wine bar Ybor needed.</p>
          </div>
          <div className="relative aspect-[16/6] rounded-lg overflow-hidden mb-14">
            <Image src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1400&q=80" alt="Natural wine selection" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {wineMenu.map((item) => (
              <div key={item.name} className="p-5 rounded-lg border border-white/15">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                  <span className="font-semibold ml-3 shrink-0 text-sm" style={{ color: GOLD }}>{item.price}</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: BROWN }}>What Guests Say</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">★★★★★ 4.6 on Google</h2>
            <p className="text-gray-500">Based on 215 reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="p-7 rounded-lg border" style={{ borderColor: RULE }}>
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
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: BROWN }}>Visit</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Find us on 7th</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-700">815 E 7th Avenue<br />Tampa, FL 33602<br /><span className="text-sm text-gray-500">Inside La Sétima Club · Historic Ybor City</span></p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <table className="text-sm text-gray-700 w-full max-w-xs">
                  <tbody>
                    <tr><td className="pr-8 py-1 font-medium" style={{ color: BROWN }}>Coffee Bar</td><td className="font-medium" style={{ color: BROWN }}>8 AM – 2 PM daily</td></tr>
                    <tr><td className="pr-8 py-1">La Sétima Club</td><td>Afternoon – late (varies)</td></tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-400 mt-2">Follow @elev8coffee for tonight&apos;s hours and programming.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Follow</h4>
                <a href="https://instagram.com/elev8coffee" className="hover:opacity-70 transition" style={{ color: BROWN }}>@elev8coffee on Instagram</a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://maps.google.com/?q=815+E+7th+Ave+Tampa+FL+33602" className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: BROWN }}>Get Directions</a>
                <a href="https://elevationhaus.square.site" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition" style={{ borderColor: INK, color: INK }}>Order Coffee Online</a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&q=80" alt="Elevation Coffee interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* IG STRIP */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@elev8coffee</p>
            <a href="https://instagram.com/elev8coffee" className="text-sm font-medium hover:underline" style={{ color: BROWN }}>Follow on Instagram →</a>
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
            <p className="font-display text-2xl font-semibold text-white mb-2">Elevation Coffee<span style={{ color: GOLD }}>.</span></p>
            <p>Specialty Coffee + Natural Wine<br />Ybor City, Tampa</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>815 E 7th Ave<br />Tampa, FL 33602<br /><span style={{ color: "rgba(255,255,255,0.40)" }}>Inside La Sétima Club</span></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>Coffee: 8 AM – 2 PM<br />Wine: Afternoon – late<br /><a href="https://instagram.com/elev8coffee" className="hover:text-white transition" style={{ color: GOLD }}>@elev8coffee</a></p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:justify-between gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© 2026 Elevation Coffee Heights · Concept mockup by Thryve Operations</span>
          <span>thryveops.com · contact@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
