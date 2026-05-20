import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "cafe columbia — Sweet & savory crepes in Columbia Town Center",
  description:
    "cafe columbia is a small, calm, owner-operated cafe in Columbia Town Center, Maryland. Freshly made sweet and savory crepes. Mediterranean specialty.",
};

const PAPER = "#FAF6F1";
const PAPER2 = "#F0E8DC";
const INK = "#2A1F18";
const ACCENT = "#8B5A3C";
const MUTED = "#6B5D55";
const RULE = "#E3D8C8";
const CREAM = "#E5C39E";

export default function CafeColumbiaPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(250,246,241,0.95)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl md:text-3xl font-normal tracking-tight lowercase">
            cafe <span style={{ color: ACCENT }}>columbia</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium lowercase">
            <a href="#menu" className="hover:opacity-70">menu</a>
            <a href="#story" className="hover:opacity-70">about</a>
            <a href="#visit" className="hover:opacity-70">visit</a>
            <a
              href="#"
              className="px-5 py-2 rounded-full text-sm font-semibold normal-case text-white transition hover:brightness-90"
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
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519676867240-f03562e64548?w=1800&q=80"
          alt="Fresh crepes with berries"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">
            Columbia Town Center · Mon — Sat
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-normal mb-6 leading-[1] lowercase">
            small cafe.<br /><span style={{ color: CREAM }}>good crepes.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed font-light">
            Freshly made sweet and savory crepes, espresso drinks, and a calm bright room in the middle of Town Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Order Online
            </a>
            <a href="#menu" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-white/90" style={{ color: INK }}>
              See the Menu
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "4.8 ★", label: "201 Google reviews" },
            { val: "8 AM", label: "Open six days a week" },
            { val: "Crepes", label: "Sweet & savory · made to order" },
            { val: "Town Ctr", label: "5550 Sterrett Place" },
          ].map((s) => (
            <div key={s.val}>
              <p className="font-display text-3xl md:text-4xl font-normal" style={{ color: ACCENT }}>{s.val}</p>
              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 lowercase" style={{ color: ACCENT }}>the menu</p>
            <h2 className="font-display text-5xl md:text-6xl font-normal mb-4 lowercase">what we make.</h2>
            <p className="text-lg font-light" style={{ color: MUTED }}>Sweet crepes, savory crepes, espresso. Everything fresh, everything to order.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mediterranean Crepe",
                price: "$12",
                desc: "Feta, spinach, sun-dried tomato, olive, fresh herbs. The crepe customers ask about by name.",
                img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
                chip: "Most Loved",
              },
              {
                name: "Nutella & Strawberry",
                price: "$10",
                desc: "Warm Nutella, fresh strawberries, banana, powdered sugar. The kid-friendly order that adults secretly order too.",
                img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
                chip: "Sweet",
              },
              {
                name: "Espresso Drinks",
                price: "From $4",
                desc: "Drip, espresso, cappuccino, latte, chai, matcha. Plus seasonal specialties from the case.",
                img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
                chip: "Coffee Bar",
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
                  <h3 className="font-display text-2xl font-normal">{item.name}</h3>
                  <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>{item.price}</span>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {[
              { name: "Ham & Gruyère Crepe", desc: "Classic savory.", price: "$11" },
              { name: "Lemon & Sugar", desc: "The simplest sweet.", price: "$8" },
              { name: "Pastry Case", desc: "Croissants, muffins, cookies — what's fresh that day.", price: "" },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
                <p className="font-display text-lg">{item.name}</p>
                <p className="text-xs mt-1 font-light" style={{ color: MUTED }}>
                  {item.desc}{" "}
                  {item.price && <span className="font-medium" style={{ color: ACCENT }}>{item.price}</span>}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="#"
              className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px] transition hover:opacity-80"
              style={{ borderColor: INK, color: INK }}
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3 lowercase" style={{ color: ACCENT }}>about</p>
            <h2 className="font-display text-5xl md:text-6xl font-normal mb-6 leading-tight lowercase">small on purpose.</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 font-light" style={{ color: MUTED }}>
              cafe columbia is a small, bright, owner-operated cafe in the middle of Columbia Town Center. We make crepes to order, pull espresso the slow way, and keep the menu short on purpose.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: MUTED }}>
              No fluorescent lighting. No 30-page menu. Just good crepes, good coffee, and a calm room from 8 to 3 — six days a week.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?w=900&q=80"
              alt="cafe columbia interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 lowercase" style={{ color: CREAM }}>loved by locals</p>
            <h2 className="font-display text-5xl md:text-6xl font-normal mb-3 lowercase">★ ★ ★ ★ ★ &nbsp; 4.8 on google</h2>
            <p className="text-white/70">201 reviews · the highest-rated cafe in Town Center</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: '"The Mediterranean crepe is unreal. Bright, calm, fairly priced. The little cafe Town Center needed."', author: "Elena V. · Columbia" },
              { text: '"My new Saturday morning spot. The owner is lovely. The Nutella crepe is the best version I\'ve had outside of Paris."', author: "Anthony R. · Wilde Lake" },
              { text: '"Quiet, friendly, fast. I work from here twice a week. Latte and a savory crepe and I never want to leave."', author: "Priya G. · Merriweather" },
            ].map((r, i) => (
              <blockquote key={i} className="p-6 rounded-xl border border-white/15">
                <p className="mb-3" style={{ color: CREAM }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4 font-light">{r.text}</p>
                <footer className="text-sm text-white/60">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3 lowercase" style={{ color: ACCENT }}>find us</p>
            <h2 className="font-display text-5xl md:text-6xl font-normal mb-8 leading-tight lowercase">in town center.</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 lowercase">address</h4>
                <p className="font-light" style={{ color: MUTED }}>5550 Sterrett Place, Suite 103<br />Columbia, MD 21044</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 lowercase">hours</h4>
                <table className="text-sm w-full max-w-sm font-light" style={{ color: MUTED }}>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5">Mon — Sat</td>
                      <td className="text-right">8 AM — 3 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-medium" style={{ color: ACCENT }}>Sunday</td>
                      <td className="text-right font-medium" style={{ color: ACCENT }}>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 lowercase">reach us</h4>
                <p className="font-light" style={{ color: MUTED }}>
                  <a href="tel:+14106003788" className="hover:opacity-70">(410) 600-3788</a>
                  <br />
                  <a href="mailto:hello@cafecolumbia.com" className="hover:opacity-70">hello@cafecolumbia.com</a>
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
                  href="https://www.google.com/maps/place/5550+Sterrett+Pl,+Columbia,+MD+21044"
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] transition hover:opacity-80"
                  style={{ borderColor: INK, color: INK }}
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t" style={{ borderColor: RULE }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: MUTED }}>weekend specials in your inbox</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 px-4 py-3 rounded-full text-sm border bg-white"
                  style={{ borderColor: RULE }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
                  style={{ background: ACCENT }}
                >
                  Join
                </button>
              </form>
              <p className="text-xs mt-2 font-light" style={{ color: MUTED }}>One email a week. Friday morning. No more than that.</p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=900&q=80"
              alt="cafe columbia counter"
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
            <p className="font-display text-2xl font-normal lowercase">@cafecolumbiallc</p>
            <a href="https://instagram.com/cafecolumbiallc" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { src: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80", alt: "Crepe" },
              { src: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80", alt: "Mediterranean" },
              { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", alt: "Espresso" },
              { src: "https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?w=400&q=80", alt: "Counter" },
              { src: "https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?w=400&q=80", alt: "Latte art" },
              { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80", alt: "Cafe" },
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
            <p className="font-display text-3xl font-normal text-white mb-3 lowercase">
              cafe <span style={{ color: CREAM }}>columbia</span>
            </p>
            <p className="max-w-sm leading-relaxed font-light">A small cafe in the middle of Columbia Town Center. Crepes, coffee, and a calm room.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 lowercase">visit</h4>
            <p className="leading-relaxed font-light">
              5550 Sterrett Place #103<br />Columbia, MD 21044<br />
              <a href="tel:+14106003788" className="hover:text-white">(410) 600-3788</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 lowercase">follow</h4>
            <p className="leading-relaxed font-light">
              <a href="https://instagram.com/cafecolumbiallc" className="hover:text-white block">Instagram</a>
              <a href="https://facebook.com/cafecolumbiallc" className="hover:text-white block">Facebook</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© 2026 cafe columbia llc. Concept mockup by Thryve Operations.</span>
          <Link href="/" className="hover:text-white/80">← All previews</Link>
        </div>
      </footer>
    </div>
  );
}
