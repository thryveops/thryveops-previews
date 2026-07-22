import Image from "next/image";

export const metadata = {
  title: "Retro House Coffee Bar & Asian Bistro — Hong Kong-Style Coffee + Dim Sum in Ybor City",
  description:
    "Hong Kong-style coffee, ube baos, lemongrass chicken dumplings, and char siu fried rice in Ybor City. 4.9 stars. Featured on FOX 13. Open Tuesday through Sunday.",
};

const TERRA = "#D67857";
const CREAM = "#FAF4EE";
const INK = "#1A0E08";
const GOLD = "#C49A52";
const RULE = "#E8DDD0";

const coffeeItems = [
  { name: "Yuan Yang Iced Latte", price: "$7", desc: "Hong Kong-style coffee + milk tea, served over ice. Half the menu orders this. The other half orders it twice." },
  { name: "Signature Espresso", price: "$3.75", desc: "Felicitous Coffee-roasted beans, pulled to order. The foundation everything else is built on." },
  { name: "HK-Style Milk Tea", price: "$5.50", desc: "Traditional Hong Kong-style milk tea, brewed strong, served hot or iced. Butter-smooth." },
  { name: "Matcha Latte", price: "$6", desc: "Ceremonial-grade matcha, steamed oat or whole milk. Clean and grounding." },
  { name: "Cold Brew", price: "$5", desc: "Felicitous cold brew, 12-hour steep, served over ice." },
];

const foodItems = [
  {
    category: "Bao",
    name: "Ube Bao",
    price: "$6",
    desc: "Purple ube bun, house-made filling, light and pillowy. The most-photographed item in the case. Taste it before you shoot it.",
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
  },
  {
    category: "Bao",
    name: "Pan-Fried Pork Bao",
    price: "$6.50",
    desc: "Crispy-bottomed steamed bao, slow-braised pork filling, green onion, sesame. The one that sells out first.",
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&q=80",
  },
  {
    category: "Dim Sum",
    name: "Lemongrass Chicken Dumplings",
    price: "$9",
    desc: "Hand-pleated dumplings, lemongrass-scented chicken, ginger dipping sauce. The dish FOX 13 came to film.",
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
  },
  {
    category: "Dim Sum",
    name: "Mango Shrimp Wontons",
    price: "$10",
    desc: "Shrimp wontons, mango chili sauce, sesame oil drizzle. Sweet-spicy-umami and exactly as good as it sounds.",
    img: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=800&q=80",
  },
  {
    category: "Rice & Noodles",
    name: "Char Siu Fried Rice",
    price: "$13",
    desc: "House-made char siu pork, wok-fried jasmine rice, egg, scallion, soy-sesame glaze. The comfort food anchor.",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80",
  },
  {
    category: "Rice & Noodles",
    name: "Crispy Noodle Bowl",
    price: "$14",
    desc: "Pan-fried egg noodles, seasonal vegetables, your choice of protein, oyster sauce glaze. Textural, satisfying, reorderable.",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
  },
];

const reviews = [
  {
    text: "4.9 stars and every single one is deserved. The Yuan Yang latte is unlike anything else in Tampa. The ube bao is worth an Uber ride. FOX 13 was right.",
    author: "Angela W. · Google review",
  },
  {
    text: "Went for the dumplings, stayed for the char siu rice, went back the next day for the pan-fried bao. The only complaint: the menu should be twice as long.",
    author: "Kevin L. · Google review",
  },
  {
    text: "Best Hong Kong-style coffee in Tampa, and it's not close. The space is beautiful — mid-century, considered, not trying too hard. The food is the real thing. This place is special.",
    author: "Priya N. · Google review",
  },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80",
  "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80",
  "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80",
  "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
  "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
];

export default function RetroHousePreview() {
  return (
    <div className="font-sans antialiased" style={{ background: CREAM, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(250,244,238,0.96)", borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-tight" style={{ color: TERRA }}>
            Retro House<span style={{ color: GOLD }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#coffee" className="hover:opacity-70 transition">Coffee</a>
            <a href="#food" className="hover:opacity-70 transition">Dim Sum &amp; Bao</a>
            <a href="#visit" className="hover:opacity-70 transition">Visit</a>
            <a href="https://retrohousetampa.square.site" className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: TERRA }}>Order Online</a>
          </div>
          <a href="https://retrohousetampa.square.site" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: TERRA }}>Order</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1800&q=80" alt="Retro House dim sum and coffee" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(26,14,8,.40) 0%,rgba(26,14,8,.55) 55%,rgba(26,14,8,.90) 100%)" }} />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-5" style={{ color: GOLD }}>934 E Henderson Ave · Ybor City</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.03]">
            Hong Kong-style coffee<br />
            <span className="italic font-semibold" style={{ color: GOLD }}>+ dim sum, in Ybor.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-5 max-w-xl mx-auto leading-relaxed">
            Yuan Yang lattes, ube baos, lemongrass dumplings, and char siu fried rice. One of a kind in Tampa.
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="px-3 py-1.5 rounded-full border border-white/30 text-xs tracking-wide">Featured on FOX 13</span>
            <span className="px-3 py-1.5 rounded-full border border-white/30 text-xs tracking-wide">Creative Loafing</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://retrohousetampa.square.site" className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: TERRA }}>Order Online</a>
            <a href="#food" className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">See Full Menu</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span style={{ color: GOLD }} className="tracking-wider">★★★★★</span>
            <span>4.9 · 342 Google reviews</span>
          </div>
        </div>
      </section>

      {/* COFFEE */}
      <section id="coffee" className="py-20 md:py-28 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TERRA }}>The Coffee Program</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Hong Kong–style coffee by Felicitous.</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">Partner roaster Felicitous Coffee supplies the beans. The Yuan Yang iced latte — HK coffee + milk tea — is the drink that brings people back. The espresso is the foundation everything else is built on.</p>
            <div className="space-y-4">
              {coffeeItems.map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4 pb-4 border-b last:border-0" style={{ borderColor: RULE }}>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="font-semibold text-sm shrink-0" style={{ color: TERRA }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&q=80" alt="Retro House coffee" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* DIM SUM & BAO */}
      <section id="food" className="py-20 md:py-32 px-5 md:px-8" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TERRA }}>Dim Sum, Bao &amp; Rice</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">The food FOX 13 filmed.</h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">Ube baos. Hand-pleated dumplings. Char siu fried rice. The kind of menu that makes a city wonder why it took this long.</p>
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
                  <span className="font-semibold ml-3 shrink-0" style={{ color: TERRA }}>{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://retrohousetampa.square.site" className="inline-block px-8 py-3 rounded-full font-semibold text-white transition hover:brightness-110" style={{ background: TERRA }}>Order Online</a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>What Tampa Is Saying</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">★★★★★ 4.9 on Google</h2>
            <p className="text-white/55">342 reviews · Best-in-class Asian fusion in Tampa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
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
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TERRA }}>Visit</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Find us in Ybor</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-700">934 E Henderson Avenue<br />Tampa, FL 33605<br /><span className="text-sm text-gray-500">Ybor City · Street parking available</span></p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <table className="text-sm text-gray-700 w-full max-w-xs">
                  <tbody>
                    <tr><td className="pr-8 py-1">Tuesday – Friday</td><td>7:30 AM – 4 PM</td></tr>
                    <tr><td className="pr-8 py-1">Saturday – Sunday</td><td>8 AM – 5 PM</td></tr>
                    <tr className="text-gray-400"><td className="pr-8 py-1 italic">Monday</td><td className="italic">Closed</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Follow</h4>
                <a href="https://instagram.com/retrohousetampa" className="hover:opacity-70 transition" style={{ color: TERRA }}>@retrohousetampa</a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://maps.google.com/?q=934+E+Henderson+Ave+Tampa+FL+33605" className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110" style={{ background: TERRA }}>Get Directions</a>
                <a href="https://retrohousetampa.square.site" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition" style={{ borderColor: INK, color: INK }}>Order Online</a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80" alt="Retro House interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* IG STRIP */}
      <section className="py-12 px-5 md:px-8 border-t" style={{ borderColor: RULE, background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@retrohousetampa</p>
            <a href="https://instagram.com/retrohousetampa" className="text-sm font-medium hover:underline" style={{ color: TERRA }}>Follow on Instagram →</a>
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
            <p className="font-display text-2xl font-semibold text-white mb-2">Retro House<span style={{ color: GOLD }}>.</span></p>
            <p>Coffee Bar &amp; Asian Bistro<br />Ybor City, Tampa</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p>934 E Henderson Ave<br />Tampa, FL 33605<br /><a href="https://retrohousetampa.com" className="hover:text-white transition">retrohousetampa.com</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p>Tue – Fri: 7:30 AM – 4 PM<br />Sat – Sun: 8 AM – 5 PM<br /><span style={{ color: "rgba(255,255,255,0.35)" }}>Closed Monday</span></p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row md:justify-between gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© 2026 Retro House Coffee Bar &amp; Asian Bistro · Concept mockup by Thryve Operations</span>
          <span>thryveops.com · contact@thryveops.com</span>
        </div>
      </footer>
    </div>
  );
}
