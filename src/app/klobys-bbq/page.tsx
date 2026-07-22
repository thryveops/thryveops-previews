import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Kloby's Smokehouse & Whiskey Bar — Slow-smoked BBQ + a world-class whiskey list",
  description: 'Carolina-style pulled pork, beef brisket, ribs, and a deep whiskey list in Laurel, Maryland. Featured on Travel Channel and United States of Bacon.',
}

const PAPER = '#F6F1EA'
const PAPER2 = '#ECE3D5'
const INK = '#1A1410'
const ACCENT = '#8C2F1A'
const GOLD = '#C9A24C'
const MUTED = '#6B5D55'
const RULE = '#DDD0BD'

export default function KlobysBbq() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: `${PAPER}F2`, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-wider uppercase">
            Kloby&apos;s <span style={{ color: ACCENT }}>BBQ</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70">Menu</a>
            <a href="#whiskey" className="hover:opacity-70">Whiskey</a>
            <a href="#catering" className="hover:opacity-70">Catering</a>
            <a href="#visit" className="hover:opacity-70">Visit</a>
            <a href="https://www.doordash.com/en/store/klobys-smokehouse-laurel-25671608/" className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
          </div>
          <a href="https://www.doordash.com/en/store/klobys-smokehouse-laurel-25671608/" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1800&q=80&auto=format&fit=crop" alt="Slow-smoked BBQ ribs" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/80" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">As seen on Travel Channel · United States of Bacon</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-[1] uppercase">
            Slow smoked.<br /><span style={{ color: '#E5A082' }}>All-natural wood.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            House-rubbed pulled pork served Carolina-style. Beef brisket. Ribs. Sides from scratch. A whiskey list to match.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.doordash.com/en/store/klobys-smokehouse-laurel-25671608/" className="px-8 py-4 rounded-full font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
            <a href="tel:+13013621510" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-white/90" style={{ color: INK }}>Reserve a Table</a>
          </div>
        </div>
      </section>

      {/* PRESS STRIP */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
          <p className="text-center text-xs tracking-[0.3em] uppercase mb-6" style={{ color: MUTED }}>As Seen On</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center items-center">
            <div><p className="font-display text-xl md:text-2xl font-bold uppercase">Travel Channel</p><p className="text-xs mt-1" style={{ color: MUTED }}>101 Best New Places to Chow Down</p></div>
            <div><p className="font-display text-xl md:text-2xl font-bold uppercase">United States of Bacon</p><p className="text-xs mt-1" style={{ color: MUTED }}>Featured episode</p></div>
            <div><p className="font-display text-2xl md:text-3xl font-bold" style={{ color: ACCENT }}>4.3 ★</p><p className="text-xs mt-1" style={{ color: MUTED }}>1,091 Google reviews</p></div>
            <div><p className="font-display text-2xl md:text-3xl font-bold" style={{ color: ACCENT }}>429+</p><p className="text-xs mt-1" style={{ color: MUTED }}>Photos on Yelp</p></div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>The Pit</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 uppercase">Smoked Low. Smoked Slow.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Fresh meats, house dry rubs, all-natural wood. Every plate the same way it&apos;s been done for ten years.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80&auto=format&fit=crop" alt="Carolina pulled pork" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Signature</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold uppercase">Carolina Pulled Pork</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$15</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>14-hour-smoked pork shoulder, hand-pulled and tossed in our Carolina-vinegar sauce. Served with slaw, pickle, and a side.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop" alt="Beef brisket platter" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Travel Channel Pick</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold uppercase">Beef Brisket</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$22</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Whole-packer brisket smoked 18 hours, sliced to order. Pink smoke ring, peppery bark, and a side of brown-sugar BBQ on request.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop" alt="Smoked ribs" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>House Rub</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold uppercase">St. Louis Ribs</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$26</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Half-rack or full. Hand-rubbed with our house spice blend, smoked over apple and hickory until they pull clean from the bone.</p>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg uppercase">Smoked Chicken</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Half-bird, dry-rubbed. <span className="font-medium" style={{ color: ACCENT }}>$14</span></p>
            </div>
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg uppercase">BBQ Sampler</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Pork, brisket, ribs, sausage. <span className="font-medium" style={{ color: ACCENT }}>$32</span></p>
            </div>
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg uppercase">From-Scratch Sides</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Mac &amp; cheese, beans, slaw, greens.</p>
            </div>
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg uppercase">Burnt Ends (Wknd)</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Saturday only, while they last. <span className="font-medium" style={{ color: ACCENT }}>$18</span></p>
            </div>
          </div>

          <div className="text-center mt-14">
            <a href="#" className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>View Full Menu</a>
          </div>
        </div>
      </section>

      {/* WHISKEY */}
      <section id="whiskey" className="py-20 md:py-32 px-5 md:px-8" style={{ background: INK, color: 'white' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>The Whiskey Bar</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-[1.05] uppercase">A world-class<br />whiskey list.</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">100+ bourbons, ryes, and single malts. Rare picks, single-barrel selections, and the kind of bottles you usually have to drive into the city for. Pull up a stool — we&apos;ll pour something good.</p>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between border-b border-white/15 pb-2"><span className="text-white/90">Bourbon</span><span style={{ color: GOLD }}>40+ bottles</span></div>
              <div className="flex justify-between border-b border-white/15 pb-2"><span className="text-white/90">Rye</span><span style={{ color: GOLD }}>25+ bottles</span></div>
              <div className="flex justify-between border-b border-white/15 pb-2"><span className="text-white/90">Single Malt Scotch</span><span style={{ color: GOLD }}>30+ bottles</span></div>
              <div className="flex justify-between"><span className="text-white/90">Single-Barrel + Rare</span><span style={{ color: GOLD }}>Rotating</span></div>
            </div>
            <a href="#" className="inline-block px-7 py-3 rounded-full font-semibold text-white" style={{ background: ACCENT }}>See Full Whiskey List</a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <Image src="https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=900&q=80&auto=format&fit=crop" alt="Whiskey bar at Kloby's" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* CATERING */}
      <section id="catering" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Catering</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase">Feed your crew like we feed ours.</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: MUTED }}>Corporate lunches, weddings, family parties, tailgates. Drop-off or full-service. We&apos;ve catered for 10 people and we&apos;ve catered for 600.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold uppercase mb-2">Corporate</p>
              <p className="text-sm" style={{ color: MUTED }}>Drop-off lunches. From $14/head.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold uppercase mb-2">Events</p>
              <p className="text-sm" style={{ color: MUTED }}>Full-service. Custom menus. From $24/head.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold uppercase mb-2">Pickup Pans</p>
              <p className="text-sm" style={{ color: MUTED }}>10-person pans of any meat or side.</p>
            </div>
          </div>
          <a href="mailto:catering@klobysbbq.com" className="inline-block px-8 py-4 rounded-full font-semibold text-white" style={{ background: ACCENT }}>Get a Catering Quote</a>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8" style={{ background: INK, color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>Loved by Locals</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-3 uppercase">★ ★ ★ ★ &nbsp; 4.3 on Google</h2>
            <p className="text-white/70">1,091 reviews · 10 years in Laurel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: GOLD }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Brisket bark like I&apos;d drive to Texas for. Saturday burnt ends sell out fast — get there before 1.&quot;</p>
              <footer className="text-sm text-white/60">— Mike H. · Columbia</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: GOLD }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;The whiskey list rivals anywhere in DC. Had a Knob Creek single barrel they picked themselves — outstanding.&quot;</p>
              <footer className="text-sm text-white/60">— Anika P. · Laurel</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: GOLD }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Catered our office party last month. 50 people, every single one asked where it was from. Booking again.&quot;</p>
              <footer className="text-sm text-white/60">— Jamal R. · Columbia</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight uppercase">Montpelier Center, Laurel.</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: MUTED }}>7500 Montpelier Rd #116<br />Laurel, MD 20723</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Hours</h4>
                <table className="text-sm w-full max-w-sm" style={{ color: MUTED }}>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5">Mon — Thu</td>
                      <td className="text-right">11 AM — 9 PM</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5">Fri — Sat</td>
                      <td className="text-right">11 AM — 10 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">Sunday</td>
                      <td className="text-right">11 AM — 9 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach Us</h4>
                <p style={{ color: MUTED }}>
                  <a href="tel:+13013621510" className="hover:opacity-70">(301) 362-1510</a><br />
                  <a href="mailto:catering@klobysbbq.com" className="hover:opacity-70">catering@klobysbbq.com</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://www.doordash.com/en/store/klobys-smokehouse-laurel-25671608/" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
                <a href="https://www.google.com/maps/place/7500+Montpelier+Rd+%23116,+Laurel,+MD+20723" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>Get Directions</a>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-md relative">
            <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80&auto=format&fit=crop" alt="Kloby's interior dining" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-14 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold uppercase">@klobysbbq</p>
            <a href="https://facebook.com/KlobysBBQ" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>Follow →</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              ['https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', 'Ribs'],
              ['https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80', 'Pulled pork'],
              ['https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=400&q=80', 'Whiskey pour'],
              ['https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80', 'Waffle'],
              ['https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80', 'Bar'],
              ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80', 'Plate'],
            ].map(([src, alt]) => (
              <div key={src} className="aspect-square relative overflow-hidden rounded">
                <Image src={src} alt={alt} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 px-5 md:px-8 text-sm" style={{ background: INK, color: 'rgba(255,255,255,0.75)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-3xl font-bold text-white mb-3 uppercase">Kloby&apos;s <span style={{ color: GOLD }}>BBQ</span></p>
            <p className="max-w-sm leading-relaxed">Slow-smoked BBQ + whiskey bar at Montpelier Center, Laurel. Featured on Travel Channel + United States of Bacon.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="leading-relaxed">7500 Montpelier Rd #116<br />Laurel, MD 20723<br /><a href="tel:+13013621510" className="hover:text-white">(301) 362-1510</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <p className="leading-relaxed">
              <a href="https://facebook.com/KlobysBBQ" className="hover:text-white block">Facebook</a>
              <a href="https://www.doordash.com/en/store/klobys-smokehouse-laurel-25671608/" className="hover:text-white block">DoorDash</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50">© 2026 Kloby&apos;s Smokehouse &amp; Whiskey Bar. All rights reserved.</div>
        <p className="max-w-6xl mx-auto mt-6 text-[10px] tracking-widest uppercase text-white/30">Mockup by Thryve Operations · thryveops.com · @thryveops · contact@thryveops.com</p>
      </footer>
    </div>
  )
}
