import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bon Appetit Bakery & Cafe — Korean-American specialty bakery in Ellicott City",
  description:
    "Whimsical custom cakes, Korean-American pastries, macarons, croissants, and a green-tea smoothie program. Supplier to H Mart and Lotte Plaza Market.",
};

const PAPER = "#FCF6F2";
const PAPER2 = "#F8E9E5";
const INK = "#2A1A16";
const ACCENT = "#B0635E";
const ROSE = "#E8A39B";
const MUTED = "#6B5D55";
const RULE = "#E5D3CE";

export default function BonAppetitPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(252,246,242,0.95)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            Bon Appetit <span style={{ color: ACCENT }}>Bakery</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#case" className="hover:opacity-70">The Case</a>
            <a href="#cakes" className="hover:opacity-70">Custom Cakes</a>
            <a href="#wholesale" className="hover:opacity-70">Wholesale</a>
            <a href="#visit" className="hover:opacity-70">Visit</a>
            <a
              href="#"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Order Online
            </a>
          </div>
          <a
            href="#"
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Order
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1800&q=80"
          alt="Custom cake at Bon Appetit Bakery"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">
            Ellicott City · Open 7 days a week, 7am–9pm
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-[1]">
            A bakery,<br />
            <span style={{ color: "#F3B6B0" }}>a cake studio,</span>
            <br />a Korean kitchen.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Whimsical custom cakes, Korean-style pastries, macarons, croissants, and the green-tea smoothie locals come for. Open 14 hours a day, every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#cakes"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Order a Custom Cake
            </a>
            <a
              href="#case"
              className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-white/90"
              style={{ color: INK }}
            >
              See What&apos;s Fresh
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "4.5 ★", label: "395 Google reviews" },
            { val: "H Mart", label: "+ Lotte Plaza wholesale" },
            { val: "7 days", label: "7 AM – 9 PM, every day" },
            { val: "3 lines", label: "Retail · Custom Cakes · Wholesale" },
          ].map((s) => (
            <div key={s.val}>
              <p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>{s.val}</p>
              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE CASE */}
      <section id="case" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>The Case</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">What&apos;s in the case today.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Korean-style pastries, French classics, and the items locals ask about by name.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "French Macarons",
                price: "$3 ea",
                desc: "Eight rotating flavors — including a green-tea macaron that customers ask for by name. Boxes of six and twelve available.",
                img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
                chip: "Most Loved",
              },
              {
                name: "Butter Croissants",
                price: "$4",
                desc: "Hand-laminated, 72-hour ferment. Plain, chocolate, almond. Out of the oven by 7:15am every morning.",
                img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
                chip: "Daily",
              },
              {
                name: "Green Tea Smoothie",
                price: "$7",
                desc: "Real matcha, milk, light sweetness. The drink locals come back for. Hot or iced, year-round.",
                img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
                chip: "Signature",
              },
            ].map((item) => (
              <article key={item.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-5" style={{ background: PAPER2 }}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>
                    {item.chip}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl font-bold">{item.name}</h3>
                  <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>{item.price}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {[
              { name: "Korean Croquettes", desc: "Curry, sweet potato, cream cheese.", price: "$5" },
              { name: "Café Sandwiches", desc: "Croissant ham & cheese, BLT, egg salad.", price: "" },
              { name: "Gluten-Free + Vegan", desc: "Daily options. Just ask at the counter.", price: "" },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
                <p className="font-display font-bold text-lg">{item.name}</p>
                <p className="text-xs mt-1" style={{ color: MUTED }}>
                  {item.desc}{" "}
                  {item.price && <span className="font-medium" style={{ color: ACCENT }}>{item.price}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM CAKES */}
      <section id="cakes" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Custom Cakes</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Cakes worth the photo.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Whimsical, playful, and built around your day. Birthdays, weddings, corporate, Korean dol celebrations.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {[
              { src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&q=80", alt: "Birthday cake" },
              { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&q=80", alt: "Wedding cake" },
              { src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500&q=80", alt: "Themed cake" },
              { src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80", alt: "Korean style cake" },
            ].map((img) => (
              <div key={img.alt} className="relative aspect-square overflow-hidden rounded-lg">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold mb-2">6&quot; Round</p>
              <p className="text-xs mb-3" style={{ color: MUTED }}>Serves 8–10. Starting at <span className="font-semibold" style={{ color: ACCENT }}>$55</span></p>
              <p className="text-sm" style={{ color: MUTED }}>Standard birthdays, small celebrations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2" style={{ borderColor: ACCENT }}>
              <p className="font-display text-xl font-bold mb-2">8&quot; Round + Themed</p>
              <p className="text-xs mb-3" style={{ color: MUTED }}>Serves 16–20. Starting at <span className="font-semibold" style={{ color: ACCENT }}>$95</span></p>
              <p className="text-sm" style={{ color: MUTED }}>Custom themes, character work, illustrative details. Most popular tier.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold mb-2">Tiered Cakes</p>
              <p className="text-xs mb-3" style={{ color: MUTED }}>Weddings, large events. From <span className="font-semibold" style={{ color: ACCENT }}>$240</span></p>
              <p className="text-sm" style={{ color: MUTED }}>Two-week notice. Includes a consultation.</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="mailto:cakes@bonappetitbakery.com"
              className="inline-block px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Order a Custom Cake
            </a>
            <p className="text-sm mt-3" style={{ color: MUTED }}>Two weeks&apos; notice. Deposit due at booking. Available for pickup or local delivery.</p>
          </div>
        </div>
      </section>

      {/* WHOLESALE */}
      <section id="wholesale" className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ROSE }}>Wholesale</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">
              Already in H Mart and Lotte Plaza.
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-6">
              For more than a decade, Bon Appetit has supplied baked goods to the dominant Korean grocery chains in the DMV. If you&apos;re a corporate caterer, a restaurant operator, or a retailer looking for a Korean-American specialty bakery partner, let&apos;s talk.
            </p>
            <div className="space-y-3 mb-8 text-sm">
              {[
                { label: "Korean Pastries", val: "Minimum order 50 ct" },
                { label: "Croissants & Bread", val: "Daily delivery" },
                { label: "Macarons (boxes)", val: "100 ct minimum" },
                { label: "Lead Time", val: "48–72 hours" },
              ].map((row, i) => (
                <div key={i} className={`flex justify-between pb-2 ${i < 3 ? "border-b border-white/15" : ""}`}>
                  <span className="text-white/85">{row.label}</span>
                  <span style={{ color: ROSE }}>{row.val}</span>
                </div>
              ))}
            </div>
            <a
              href="mailto:wholesale@bonappetitbakery.com"
              className="inline-block px-7 py-3 rounded-full font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Request a Wholesale Quote
            </a>
          </div>
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80"
              alt="Bakery production"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Loved by Locals</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-3">★ ★ ★ ★ ★ &nbsp; 4.5 on Google</h2>
            <p style={{ color: MUTED }}>395 reviews · 112 photos on Yelp</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: '"Ordered a custom cake for my daughter\'s first birthday. Beyond what we pictured. Got messages from family asking who made it."', author: "Hae-won J. · Columbia" },
              { text: '"Green tea smoothie is unreal. Croissants are some of the best in HoCo. Best bakery within 20 minutes."', author: "Daniel C. · Ellicott City" },
              { text: '"They opened at 7 and we were one of three customers. Macarons came out fresh while we were there. Worth the early drive."', author: "Priya R. · Catonsville" },
            ].map((r, i) => (
              <blockquote key={i} className="p-6 rounded-xl bg-white border" style={{ borderColor: RULE }}>
                <p className="mb-3" style={{ color: ACCENT }}>★★★★★</p>
                <p className="leading-relaxed mb-4">{r.text}</p>
                <footer className="text-sm" style={{ color: MUTED }}>— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">Baltimore National Pike.</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: MUTED }}>10155 Baltimore National Pike<br />Ellicott City, MD 21042</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Hours</h4>
                <table className="text-sm w-full max-w-sm" style={{ color: MUTED }}>
                  <tbody>
                    <tr><td className="py-1.5">Every Day</td><td className="text-right">7 AM — 9 PM</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach Us</h4>
                <p style={{ color: MUTED }}>
                  <a href="tel:+14102032071" className="hover:opacity-70">(410) 203-2071</a>
                  <br />
                  <a href="mailto:hello@bonappetitbakery.com" className="hover:opacity-70">hello@bonappetitbakery.com</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
                  style={{ background: ACCENT }}
                >
                  Order Online
                </a>
                <a
                  href="https://www.google.com/maps/place/10155+Baltimore+National+Pike,+Ellicott+City,+MD+21042"
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition hover:opacity-80"
                  style={{ borderColor: INK, color: INK }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=80"
              alt="Bakery counter"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="py-14 px-5 md:px-8 border-t" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold">@bonappetitbakery</p>
            <a href="https://facebook.com/bonappetitbakery" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>
              Follow on Facebook →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&q=80", alt: "Cake" },
              { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80", alt: "Macarons" },
              { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80", alt: "Croissants" },
              { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&q=80", alt: "Wedding cake" },
              { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", alt: "Drink" },
              { src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&q=80", alt: "Themed cake" },
            ].map((img, i) => (
              <div key={i} className="relative aspect-square">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.75)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-3xl font-bold text-white mb-3">
              Bon Appetit <span style={{ color: "#F3B6B0" }}>Bakery</span>
            </p>
            <p className="max-w-sm leading-relaxed">Korean-American specialty bakery in Ellicott City. Retail, custom cakes, and wholesale. Open every day.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="leading-relaxed">
              10155 Baltimore National Pike<br />Ellicott City, MD 21042<br />
              <a href="tel:+14102032071" className="hover:text-white">(410) 203-2071</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <p className="leading-relaxed">
              <a href="https://facebook.com/bonappetitbakery" className="hover:text-white block">Facebook</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© 2026 Bon Appetit Bakery & Cafe. Concept mockup by Thryve Operations.</span>
        </div>
      </footer>
    </div>
  );
}
