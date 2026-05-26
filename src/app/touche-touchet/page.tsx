import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Touché Touchet Bakery & Cafe — Real New Orleans beignets in Elkridge, MD',
  description: 'Owner-operated New Orleans-style bakery in Elkridge, Maryland. Real beignets. Custom cakes. Catering. Wraps, paninis, smoothies, and the full case.',
}

const PAPER = '#FBF5EC'
const PAPER2 = '#F2E4CE'
const INK = '#2A1810'
const ACCENT = '#9B5524'
const COPPER = '#C28653'
const MUTED = '#6F5743'
const RULE = '#E0CFB3'

export default function ToucheTouchet() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: `${PAPER}F2`, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            Touché <span style={{ color: ACCENT }}>Touchet</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#beignets" className="hover:opacity-70">Beignets</a>
            <a href="#case" className="hover:opacity-70">The Case</a>
            <a href="#catering" className="hover:opacity-70">Catering</a>
            <a href="#visit" className="hover:opacity-70">Visit</a>
            <a href="#" className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
          </div>
          <a href="#" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1800&q=80&auto=format&fit=crop" alt="Beignets with powdered sugar" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/80" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">Elkridge, Maryland · Run by Michael &amp; Terry</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-[1]">
            Real New Orleans<br /><span style={{ color: '#E5B07F' }}>beignets, in Elkridge.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Raspberry. Lemon. Vanilla pastry cream. Banana with caramel. Plus a full bakery case, breakfast, lunch, and the catering business that started a decade ago in Columbia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="px-8 py-4 rounded-full font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
            <a href="#beignets" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-white/90" style={{ color: INK }}>See the Beignets</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>4.3 ★</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>313 Google reviews</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>10+ yrs</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>From Columbia to Elkridge</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>4 flavors</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Real beignets every day</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>Wed–Sun</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>7 AM – 2 PM</p></div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Our Story</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">Michael &amp; Terry.</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>Michael Touchet and Terry Keyfauver ran a bakery in Columbia for over a decade before opening Touché Touchet in Elkridge. Same hands in the dough. Same Louisiana recipes. New room.</p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>The beignets are still real. The catering pipeline is still running. And we&apos;re still here Wednesday through Sunday — closed Mondays and Tuesdays because that&apos;s when we rest.</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
            <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop" alt="In the bakery kitchen" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* BEIGNETS */}
      <section id="beignets" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>The Beignets</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Four flavors. Fresh-fried.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Traditional New Orleans-style beignets, hand-piped to order. Powdered sugar everywhere.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: RULE }}>
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop" alt="Raspberry beignet" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl font-bold">Raspberry</h3>
                  <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$4 / piece</span>
                </div>
                <p className="text-sm" style={{ color: MUTED }}>Filled with premium raspberry. The sweet-tart take.</p>
              </div>
            </article>
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: RULE }}>
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1519676867240-f03562e64548?w=1200&q=80&auto=format&fit=crop" alt="Lemon beignet" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl font-bold">Lemon</h3>
                  <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$4 / piece</span>
                </div>
                <p className="text-sm" style={{ color: MUTED }}>House lemon curd. Bright and clean.</p>
              </div>
            </article>
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: RULE }}>
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=80&auto=format&fit=crop" alt="Vanilla pastry cream beignet" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl font-bold">Vanilla Pastry Cream</h3>
                  <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$4 / piece</span>
                </div>
                <p className="text-sm" style={{ color: MUTED }}>Madagascar vanilla pastry cream. Classic, rich, the most-ordered.</p>
              </div>
            </article>
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: RULE }}>
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80&auto=format&fit=crop" alt="Banana caramel beignet" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl font-bold">Banana &amp; Caramel</h3>
                  <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$5 / piece</span>
                </div>
                <p className="text-sm" style={{ color: MUTED }}>Fresh banana, fried, served with house caramel dipping sauce. The dessert version.</p>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block px-8 py-4 rounded-full font-semibold text-white" style={{ background: ACCENT }}>Order a Beignet Dozen</a>
            <p className="text-sm mt-3" style={{ color: MUTED }}>Boxes of 6 ($22) or 12 ($42). Pickup or local delivery.</p>
          </div>
        </div>
      </section>

      {/* CASE / BREAKFAST + LUNCH */}
      <section id="case" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Breakfast + Lunch</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">More than the beignets.</h2>
            <p className="text-lg" style={{ color: MUTED }}>A full bakery, breakfast, and lunch menu every day we&apos;re open.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop" alt="Sandwich" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Lunch</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Paninis &amp; Wraps</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>From $11</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Pressed paninis, fresh wraps, daily salads, and a soup of the day. The lunch line that locals know by name.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80&auto=format&fit=crop" alt="Pastry case" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Daily</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">The Pastry Case</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>From $3</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Croissants, cinnamon rolls, cupcakes, brownies, cookies, pies, and the daily cake-of-the-day. Always fresh, never frozen.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop" alt="Smoothies" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Drinks + Treats</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Smoothies + Sundaes</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>From $6</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Fresh-fruit smoothies, coffee drinks, plus the brownie hot fudge sundae regulars come for on Saturdays.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CATERING */}
      <section id="catering" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Catering</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Bring the bakery to your event.</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: MUTED }}>Corporate breakfasts, baby showers, weddings, retirement parties. Drop-off or full-service catering. Custom cakes available with two weeks&apos; notice.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold mb-2">Corporate Breakfast</p>
              <p className="text-sm" style={{ color: MUTED }}>Beignets, croissants, fruit, coffee. From $12/head.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2" style={{ borderColor: ACCENT }}>
              <p className="font-display text-xl font-bold mb-2">Event Dessert Tables</p>
              <p className="text-sm" style={{ color: MUTED }}>Full custom spread, themed. From $300, scales by guest count.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border" style={{ borderColor: RULE }}>
              <p className="font-display text-xl font-bold mb-2">Custom Cakes</p>
              <p className="text-sm" style={{ color: MUTED }}>Two weeks notice. Themed, tiered, named. From $65.</p>
            </div>
          </div>
          <a href="mailto:catering@touchetouchetcafe.com" className="inline-block px-8 py-4 rounded-full font-semibold text-white" style={{ background: ACCENT }}>Get a Catering Quote</a>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8" style={{ background: INK, color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#E5B07F' }}>Loved by Elkridge</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-3">★ ★ ★ ★ &nbsp; 4.3 on Google</h2>
            <p className="text-white/70">313 reviews · 175 customer photos · A decade-plus of regulars</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: '#E5B07F' }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;The banana caramel beignet is what I drove from Towson for. Real New Orleans style. Michael and Terry are the best.&quot;</p>
              <footer className="text-sm text-white/60">— Lauren K. · Towson</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: '#E5B07F' }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Catered my daughter&apos;s bridal shower. Beignets bar, dessert table, custom cake. Every guest asked who made it.&quot;</p>
              <footer className="text-sm text-white/60">— Diane M. · Columbia</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: '#E5B07F' }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Best paninis in Elkridge and that&apos;s not close. Plus the brownie hot fudge sundae is a sleeper. Don&apos;t sleep on it.&quot;</p>
              <footer className="text-sm text-white/60">— Marcus T. · Elkridge</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">Huntshire Drive.</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: MUTED }}>6501 Huntshire Dr<br />Elkridge, MD 21075</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Hours</h4>
                <table className="text-sm w-full max-w-sm" style={{ color: MUTED }}>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5 font-medium" style={{ color: ACCENT }}>Mon — Tue</td>
                      <td className="text-right font-medium" style={{ color: ACCENT }}>Closed</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5">Wed — Fri</td>
                      <td className="text-right">7 AM — 2 PM</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5">Saturday</td>
                      <td className="text-right">8 AM — 2 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">Sunday</td>
                      <td className="text-right">9 AM — 1 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach Us</h4>
                <p style={{ color: MUTED }}>
                  <a href="tel:+14435923107" className="hover:opacity-70">(443) 592-3107</a><br />
                  <a href="mailto:hello@touchetouchetcafe.com" className="hover:opacity-70">hello@touchetouchetcafe.com</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
                <a href="https://www.google.com/maps/place/6501+Huntshire+Dr,+Elkridge,+MD+21075" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>Get Directions</a>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-md relative">
            <Image src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=900&q=80&auto=format&fit=crop" alt="Touché Touchet cafe" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-14 px-5 md:px-8 border-t" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold">@touchetouchetcafe</p>
            <a href="https://facebook.com/touchetouchetcafe" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>Follow →</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              ['https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80', 'Beignet'],
              ['https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&q=80', 'Pastry case'],
              ['https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80', 'Lemon'],
              ['https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80', 'Banana caramel'],
              ['https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', 'Panini'],
              ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', 'Kitchen'],
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
            <p className="font-display text-3xl font-bold text-white mb-3">Touché <span style={{ color: COPPER }}>Touchet</span></p>
            <p className="max-w-sm leading-relaxed">Owner-operated New Orleans-style bakery and cafe in Elkridge, Maryland. Beignets, breakfast, lunch, and catering.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="leading-relaxed">6501 Huntshire Dr<br />Elkridge, MD 21075<br /><a href="tel:+14435923107" className="hover:text-white">(443) 592-3107</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <p className="leading-relaxed">
              <a href="https://facebook.com/touchetouchetcafe" className="hover:text-white block">Facebook</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50">© 2026 Touché Touchet Bakery &amp; Cafe. All rights reserved.</div>
        <p className="max-w-6xl mx-auto mt-6 text-[10px] tracking-widest uppercase text-white/30">Mockup by Thryve Operations · thryveops.com · @thryveops · hello@thryveops.com</p>
      </footer>
    </div>
  )
}
