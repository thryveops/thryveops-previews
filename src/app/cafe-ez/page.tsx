import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cafe EZ — Korean-American brunch in Ellicott City & Elkridge",
  description:
    "Cafe EZ is a Korean-American brunch concept with two locations in Howard County, Maryland. Nashville hot chicken & waffles, kimchi fried rice, sweet and savory crepes — open daily.",
};

const PAPER = "#FBF7F2";
const PAPER2 = "#F5EBE0";
const INK = "#1B1410";
const ACCENT = "#C8553D";
const SALMON = "#F0A88A";
const MUTED = "#6B5D55";
const RULE = "#E8DFD4";

export default function CafeEZPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(251,247,242,0.95)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            cafe <span style={{ color: ACCENT }}>EZ</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70">Menu</a>
            <a href="#locations" className="hover:opacity-70">Locations</a>
            <a href="#story" className="hover:opacity-70">Our Story</a>
            <a href="#visit" className="hover:opacity-70">Visit</a>
            <a
              href="https://www.doordash.com/store/cafe-ez-ellicott-city-991038/"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Order Online
            </a>
          </div>
          <a
            href="https://www.doordash.com/store/cafe-ez-ellicott-city-991038/"
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
          src="https://images.unsplash.com/photo-1551218372-a8789b81b253?w=1800&q=80"
          alt="Chicken and waffles brunch plating"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">
            Howard County · Since 2017
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Korean-American brunch,<br />
            <span style={{ color: SALMON }}>eight til three.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Nashville hot chicken and waffles next to kimchi fried rice next to sweet crepes. Two locations, seven days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.doordash.com/store/cafe-ez-ellicott-city-991038/"
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

      {/* SOCIAL PROOF STRIP */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "4.5 ★", label: "1,055 Google reviews" },
            { val: "1,275", label: "Photos on Yelp" },
            { val: "2", label: "Howard County locations" },
            { val: "7", label: "Days a week" },
          ].map((s) => (
            <div key={s.val}>
              <p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>{s.val}</p>
              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>House Favorites</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The plates we got famous for.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Breakfast and brunch with one foot in Nashville and the other in Seoul.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Nashville Hot Chicken & Waffles",
                price: "$16",
                desc: "Crispy hand-breaded chicken with a Nashville-style hot dredge, served over a buttermilk waffle with maple-cayenne syrup and house pickles.",
                img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800&q=80",
                chip: "Signature",
              },
              {
                name: "Kimchi Fried Rice",
                price: "$14",
                desc: "Stir-fried with house-aged kimchi, scallion, and gochujang glaze. Topped with a sunny side egg and crispy seaweed. Add bulgogi +$4.",
                img: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&q=80",
                chip: "Korean-American",
              },
              {
                name: "Strawberry Nutella Crepe",
                price: "$11",
                desc: "Thin French-style crepe folded with fresh strawberries, warm Nutella, banana, and a dust of powdered sugar. Available as a waffle sandwich too.",
                img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
                chip: "Sweet",
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
                  <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                  <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>{item.price}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
              </article>
            ))}
          </div>

          {/* second row with thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { name: "Bulgogi Breakfast Bowl", desc: "Marinated ribeye, rice, runny egg, sesame.", price: "$15", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80" },
              { name: "Mushroom & Gruyère Crepe", desc: "Wild mushrooms, gruyère, herbs, truffle oil.", price: "$13", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80" },
              { name: "Drip, Lattes & Chai", desc: "Local roasters. Vanilla, lavender, matcha.", price: "From $4", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=80" },
            ].map((item) => (
              <div key={item.name} className="flex items-start gap-4 p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0" style={{ background: PAPER2 }}>
                  <Image src={item.img} alt={item.name} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg leading-tight">{item.name}</p>
                  <p className="text-xs mt-1" style={{ color: MUTED }}>
                    {item.desc}{" "}
                    <span className="font-medium" style={{ color: ACCENT }}>{item.price}</span>
                  </p>
                </div>
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

      {/* TWO LOCATIONS */}
      <section id="locations" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Two Locations</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Ellicott City & Elkridge.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Same menu, same crew, two doors. Pick the one closest to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Ellicott City",
                chip: "Flagship · 2017",
                addr: "3290 N Ridge Rd\nEllicott City, MD 21043",
                hours: [{ days: "Mon — Sun", time: "8:00 AM — 3:00 PM" }],
                phone: "(410) 988-8523",
                tel: "tel:+14109888523",
                map: "https://www.google.com/maps/place/3290+N+Ridge+Rd,+Ellicott+City,+MD+21043",
                img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
              },
              {
                name: "Elkridge",
                chip: "Second location",
                addr: "6060 Marshalee Dr\nElkridge, MD 21075",
                hours: [
                  { days: "Mon, Wed — Fri", time: "9:00 AM — 3:00 PM" },
                  { days: "Sat — Sun", time: "8:30 AM — 3:00 PM" },
                  { days: "Tuesday", time: "Closed", accent: true },
                ],
                phone: "(410) 304-3355",
                tel: "tel:+14103043355",
                map: "https://www.google.com/maps/place/6060+Marshalee+Dr,+Elkridge,+MD+21075",
                img: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=1200&q=80",
              },
            ].map((loc) => (
              <article key={loc.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: RULE }}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={loc.img} alt={`Cafe EZ ${loc.name}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-2xl font-bold">{loc.name}</h3>
                    <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>
                      {loc.chip}
                    </span>
                  </div>
                  <p className="text-sm mb-5" style={{ color: MUTED }}>{loc.addr.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</p>
                  <table className="text-sm w-full mb-6">
                    <tbody>
                      {loc.hours.map((h, i) => (
                        <tr key={i} className={i < loc.hours.length - 1 ? "border-b" : ""} style={{ borderColor: RULE }}>
                          <td className="py-1.5" style={{ color: h.accent ? ACCENT : MUTED }}>{h.days}</td>
                          <td className="text-right" style={{ color: h.accent ? ACCENT : undefined }}>{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex flex-wrap gap-2">
                    <a href={loc.tel} className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition hover:brightness-90" style={{ background: ACCENT }}>
                      Call {loc.phone}
                    </a>
                    <a href={loc.map} className="px-5 py-2.5 rounded-full text-sm font-semibold border-[1.5px] transition hover:opacity-80" style={{ borderColor: INK, color: INK }}>
                      Directions
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Two cultures, one breakfast.</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>
              Cafe EZ opened on N Ridge Road in 2017 with a simple idea: the breakfast you grew up with shouldn&apos;t have to fight the breakfast you&apos;re craving. So they put them on the same menu.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
              Eight years later, with two locations and over a thousand five-star reviews, it&apos;s still the same family kitchen — Korean grandmother kimchi next to Maryland-fried chicken, French crepes next to bulgogi rice. Open every morning from 8 AM. Closed by 3, because we eat dinner with our kids.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
              alt="Plating in a busy brunch kitchen"
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
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: SALMON }}>Loved by locals</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">★ ★ ★ ★ ★ &nbsp; 4.5 on Google</h2>
            <p className="text-white/70">Based on 1,055+ reviews across both locations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: '"The kimchi fried rice with bulgogi is honestly worth driving for. Plus the staff remembers our order — we\'re here every Sunday."', author: "Maya R. · Ellicott City" },
              { text: '"Best chicken & waffles in Howard County, and the savory crepes are something else. Cozy spot, no pretense, real food."', author: "Daniel K. · Columbia" },
              { text: '"Took my parents here for Mother\'s Day brunch. They tried bulgogi for breakfast for the first time. Now mom asks to come back monthly."', author: "Priya S. · Elkridge" },
            ].map((r, i) => (
              <blockquote key={i} className="p-6 rounded-xl border border-white/15">
                <p className="mb-3" style={{ color: SALMON }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">{r.text}</p>
                <footer className="text-sm text-white/60">— {r.author}</footer>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://maps.google.com/?cid=9797604758076088158"
              className="inline-block text-sm tracking-wider uppercase border-b border-white/40 pb-1 hover:border-white"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Reach Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">See you in the morning.</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: MUTED }}>
              Order online for pickup or delivery, or just show up — we&apos;ll find a seat. Catering and private events available at the Ellicott City location with two weeks&apos; notice.
            </p>
            <div className="space-y-4">
              <a
                href="https://www.doordash.com/store/cafe-ez-ellicott-city-991038/"
                className="w-full block text-center px-6 py-4 rounded-full font-semibold text-white transition hover:brightness-90"
                style={{ background: ACCENT }}
              >
                Order Online
              </a>
              <a
                href="mailto:hello@cafeez.com"
                className="w-full block text-center px-6 py-4 rounded-full font-semibold border-[1.5px] transition hover:opacity-80"
                style={{ borderColor: INK, color: INK }}
              >
                Email about catering or events
              </a>
            </div>
            <div className="mt-10 pt-8 border-t" style={{ borderColor: RULE }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: MUTED }}>Get weekend specials in your inbox</p>
              <form className="flex gap-2">
                <input type="email" placeholder="you@email.com" className="flex-1 px-4 py-3 rounded-full text-sm border bg-white" style={{ borderColor: RULE }} />
                <button type="submit" className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-90" style={{ background: ACCENT }}>
                  Join
                </button>
              </form>
              <p className="text-xs mt-2" style={{ color: MUTED }}>One email a week. Friday mornings. New specials and what&apos;s running.</p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=900&q=80"
              alt="Cafe EZ dining room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="py-14 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@cafeez_md</p>
            <a href="https://instagram.com/cafeez_md" className="text-sm font-medium hover:underline" style={{ color: ACCENT }}>
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { src: "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=400&q=80", alt: "Chicken and waffles" },
              { src: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80", alt: "Kimchi fried rice" },
              { src: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80", alt: "Strawberry crepes" },
              { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80", alt: "Bulgogi bowl" },
              { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", alt: "Latte art" },
              { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", alt: "Mushroom crepe" },
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-bold text-white mb-3">
              cafe <span style={{ color: SALMON }}>EZ</span>
            </p>
            <p className="max-w-sm leading-relaxed">Korean-American brunch in Howard County, Maryland. Two locations, seven days a week, breakfast until three.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Ellicott City</h4>
            <p className="leading-relaxed">
              3290 N Ridge Rd<br />Ellicott City, MD 21043<br />
              <a href="tel:+14109888523" className="hover:text-white">(410) 988-8523</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Elkridge</h4>
            <p className="leading-relaxed">
              6060 Marshalee Dr<br />Elkridge, MD 21075<br />
              <a href="tel:+14103043355" className="hover:text-white">(410) 304-3355</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Cafe EZ. Concept mockup by Thryve Operations.</p>
          <div className="flex gap-5 text-xs">
            <a href="https://instagram.com/cafeez_md" className="hover:text-white">Instagram</a>
            <a href="https://facebook.com/CafeEZEllicottCity" className="hover:text-white">Facebook</a>
            <a href="https://www.doordash.com/store/cafe-ez-ellicott-city-991038/" className="hover:text-white">DoorDash</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
