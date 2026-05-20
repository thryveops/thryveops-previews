import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ananda — Elevated Indian cuisine + farm-to-table in Maple Lawn, Maryland",
  description:
    "Ananda is an elevated Indian restaurant in Maple Lawn, Fulton, MD. Punjabi heritage, 25 years of fine dining, and a working farm less than a mile away.",
};

const PAPER = "#FAF4EC";
const PAPER2 = "#F0E4D2";
const INK = "#2A1A0F";
const ACCENT = "#C8753A";
const GOLD = "#B8923D";
const MUTED = "#6F5E4F";
const RULE = "#E3D2BE";

export default function AnandaPreview() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(250,244,236,0.95)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-3xl font-bold tracking-tight">Ananda</a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70">Menu</a>
            <a href="#farm" className="hover:opacity-70">The Farm</a>
            <a href="#story" className="hover:opacity-70">Our Story</a>
            <a href="#events" className="hover:opacity-70">Private Events</a>
            <a
              href="#"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Reserve
            </a>
          </div>
          <a
            href="#"
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1800&q=80"
          alt="Elevated Indian cuisine plating"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/80" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">
            Maple Lawn · Fulton, Maryland
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-[1] italic">
            Punjab to<br />Maple Lawn.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Elevated Indian cuisine from brothers Binda and Kehar Singh. Twenty-five years of fine dining. A working farm less than a mile away.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-white/90"
              style={{ color: INK }}
            >
              See the Menu
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>4.5 ★</p>
            <p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>1,490 Google reviews</p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>25+ yrs</p>
            <p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Singh brothers · fine dining</p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>&lt; 1 mile</p>
            <p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>From farm to plate</p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>718</p>
            <p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Photos uploaded by guests on Yelp</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Our Story</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight italic">
              Two brothers, one kitchen.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>
              Binda and Kehar Singh grew up cooking in Punjab. Twenty-five years of fine dining and one shared decision later, they opened Ananda in Maple Lawn — bringing elevated Punjabi cuisine to Howard County.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
              It&apos;s still a family kitchen. They&apos;re still the chefs. And the farm a mile away is still where most of the produce — and the duck eggs — come from every morning.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
              alt="Kitchen at Ananda"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FARM */}
      <section id="farm" className="py-20 md:py-32 px-5 md:px-8" style={{ background: INK, color: "white" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80"
              alt="The Singh family farm in Fulton"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#E5B07F" }}>Our Farm</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-[1.05] italic">
              Most of it<br />grown a mile away.
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-6">
              A working farm under a mile from the restaurant — chicken and duck eggs, seasonal vegetables, herbs that go straight to the kitchen the morning they&apos;re picked. Run by the same Singh family that runs the restaurant.
            </p>
            <div className="space-y-3 mb-8 text-sm">
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-white/85">Eggs</span>
                <span style={{ color: GOLD }}>Chicken + duck, daily</span>
              </div>
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-white/85">Produce</span>
                <span style={{ color: GOLD }}>Most of what&apos;s seasonal</span>
              </div>
              <div className="flex justify-between border-b border-white/15 pb-2">
                <span className="text-white/85">Herbs</span>
                <span style={{ color: GOLD }}>Picked that morning</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/85">Distance</span>
                <span style={{ color: GOLD }}>Under a mile</span>
              </div>
            </div>
            <a
              href="#menu"
              className="inline-block px-7 py-3 rounded-full font-semibold text-white transition hover:brightness-90"
              style={{ background: ACCENT }}
            >
              See what&apos;s on the menu
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>House Favorites</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 italic">From the Singh kitchen.</h2>
            <div className="w-16 h-[1.5px] mx-auto" style={{ background: ACCENT }} />
            <p className="text-lg mt-6" style={{ color: MUTED }}>
              Punjabi traditions, farm produce, twenty-five years of fine-dining technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pan-Fried Whole Goa Fish",
                price: "$36",
                desc: "Whole branzino, pan-fried with tamarind, scallion, and a Goan masala. The dish that wins over the table that thought they knew Indian food.",
                img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
                chip: "House Specialty",
              },
              {
                name: "Chicken Tikka Masala",
                price: "$24",
                desc: "Charcoal-grilled chicken in our house tomato-cream masala. The Punjabi way — built up over hours, finished with crushed fenugreek.",
                img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
                chip: "Punjabi Classic",
              },
              {
                name: "Seasonal Squash Samosa",
                price: "$14",
                desc: "Hand-folded samosa stuffed with squash from the Singh family farm, fennel, and warming spices. Available as long as the farm is producing.",
                img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
                chip: "From the Farm",
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
                  <span
                    className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white"
                    style={{ borderColor: RULE, color: MUTED }}
                  >
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
              { name: "Mulligatawny Soup", desc: "Spiced lentil, farm vegetables, lemon.", price: "$11" },
              { name: "Chicken Vindaloo", desc: "Goan vinegar, Kashmiri chilies. Bold.", price: "$23" },
              { name: "Avocado & Roasted Corn Salad", desc: "Farm corn, mint, lime.", price: "$13" },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
                <p className="font-display font-bold text-lg">{item.name}</p>
                <p className="text-xs mt-1" style={{ color: MUTED }}>
                  {item.desc}{" "}
                  <span className="font-medium" style={{ color: ACCENT }}>{item.price}</span>
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

      {/* PRIVATE EVENTS */}
      <section id="events" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Private Events</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 italic">Weddings, anniversaries, corporate.</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: MUTED }}>
            Private dining for groups of 10 to 80. Custom multi-course menus designed by the Singh brothers. Available 7 nights a week with three weeks&apos; notice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold mb-2">Corporate Dinners</p>
              <p className="text-sm" style={{ color: MUTED }}>Private rooms, plated service. From $85/head.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold mb-2">Weddings + Anniversaries</p>
              <p className="text-sm" style={{ color: MUTED }}>Multi-course tasting menus. From $120/head.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold mb-2">Buyout / Full Restaurant</p>
              <p className="text-sm" style={{ color: MUTED }}>Available select Mondays + Tuesdays.</p>
            </div>
          </div>
          <a
            href="mailto:events@anandarestaurant.net"
            className="inline-block px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-90"
            style={{ background: ACCENT }}
          >
            Inquire about a private event
          </a>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#E5B07F" }}>Loved by Maple Lawn</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-3 italic">★ ★ ★ ★ ★ &nbsp; 4.5 on Google</h2>
            <p className="text-white/70">1,490 reviews · 733 reviews on Yelp · 718 photos uploaded by guests</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: '"The Goa fish is the dish I send everyone to Ananda for. The duck eggs at brunch are unreal. You feel the farm in every plate."',
                author: "Anika P. · Maple Lawn",
              },
              {
                text: '"We had our anniversary dinner here. Binda came out to talk. The tasting menu was the best Indian meal I\'ve had in the US."',
                author: "David L. · Columbia",
              },
              {
                text: '"Vindaloo with real heat, tikka masala done right, the kind of Indian fine dining I thought I had to drive to DC for. Right in Maple Lawn."',
                author: "Priya R. · Fulton",
              },
            ].map((r, i) => (
              <blockquote key={i} className="p-6 rounded-xl border border-white/15">
                <p className="mb-3" style={{ color: "#E5B07F" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">{r.text}</p>
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
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight italic">Maple Lawn Boulevard.</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: MUTED }}>7421 Maple Lawn Blvd<br />Fulton, MD 20759</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Hours</h4>
                <table className="text-sm w-full max-w-sm" style={{ color: MUTED }}>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5 font-medium" style={{ color: ACCENT }}>Monday</td>
                      <td className="text-right font-medium" style={{ color: ACCENT }}>Closed</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5">Tue — Thu</td>
                      <td className="text-right">4 PM — 10 PM</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5">Fri — Sat</td>
                      <td className="text-right">4 PM — 11 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">Sunday</td>
                      <td className="text-right">4 PM — 10 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach Us</h4>
                <p style={{ color: MUTED }}>
                  <a href="tel:+13017254800" className="hover:opacity-70">(301) 725-4800</a>
                  <br />
                  <a href="mailto:hello@anandarestaurant.net" className="hover:opacity-70">hello@anandarestaurant.net</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-90"
                  style={{ background: ACCENT }}
                >
                  Reserve a Table
                </a>
                <a
                  href="https://www.google.com/maps/place/7421+Maple+Lawn+Blvd,+Fulton,+MD+20759"
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
              src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=900&q=80"
              alt="Ananda dining room"
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
            <p className="font-display text-2xl font-bold italic">@anandaatmaplelawn</p>
            <a href="https://instagram.com/anandaatmaplelawn" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
              "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80",
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
              "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=400&q=80",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square">
                <Image src={src} alt="" fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.75)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-3xl font-bold text-white mb-3 italic">Ananda</p>
            <p className="max-w-sm leading-relaxed">Elevated Indian cuisine, farm-to-plate, in Maple Lawn. Run by brothers Binda and Kehar Singh.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="leading-relaxed">
              7421 Maple Lawn Blvd<br />Fulton, MD 20759<br />
              <a href="tel:+13017254800" className="hover:text-white">(301) 725-4800</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <p className="leading-relaxed">
              <a href="https://instagram.com/anandaatmaplelawn" className="hover:text-white block">Instagram</a>
              <a href="https://facebook.com/AnandaMapleLawn" className="hover:text-white block">Facebook</a>
              <a href="https://www.opentable.com/r/ananda-fulton" className="hover:text-white block">OpenTable</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© 2026 Ananda. Concept mockup by Thryve Operations.</span>
          <Link href="/" className="hover:text-white/80">← All previews</Link>
        </div>
      </footer>
    </div>
  );
}
