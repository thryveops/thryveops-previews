import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Georgia Grace Cafe — Mediterranean brunch on historic Main Street, Ellicott City',
  description: 'Mediterranean and Greek-influenced brunch, all-day pastries and espresso, and a full bar — on historic Main Street, Ellicott City. Named for Georgia and Grace.',
}

const PAPER = '#FAF7F0'
const PAPER2 = '#EFEADE'
const INK = '#1F2818'
const ACCENT = '#5A6E3A'
const SAGE = '#C9D69A'
const MUTED = '#6B6A5D'
const RULE = '#D9D2BE'

export default function GeorgiaGraceCafe() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: `${PAPER}F2`, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl md:text-3xl font-bold tracking-tight italic">
            Georgia <span style={{ color: ACCENT }}>Grace</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70">Menu</a>
            <a href="#story" className="hover:opacity-70">Our Story</a>
            <a href="#patio" className="hover:opacity-70">The Patio</a>
            <a href="#visit" className="hover:opacity-70">Visit</a>
            <a href="#" className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
          </div>
          <a href="#" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=1800&q=80&auto=format&fit=crop" alt="Mediterranean breakfast spread" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/75" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">8333 Main Street · Ellicott City</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-[1] italic">
            A little<br />Mediterranean,<br /><span style={{ color: SAGE }}>on Main Street.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Brunch, espresso, and pastries — with a Greek accent. Named for Georgia and Grace. Open five days a week with an outdoor stone patio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="px-8 py-4 rounded-full font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
            <a href="#menu" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-white/90" style={{ color: INK }}>See the Menu</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>4.6 ★</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>570 Google reviews</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>2017</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Family-owned since</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>Stone</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Outdoor patio + historic building</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>All Day</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Pastries + coffee til 4pm</p></div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Our Story</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight italic">Named for two of mine.</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>&quot;Georgia&quot; was my mother. &quot;Grace&quot; is my daughter. The cafe is named for both of them — and feels like both of them, if you&apos;ve ever met them.</p>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: MUTED }}>We opened in September 2017 on lower Main Street. After the flood, we rebuilt on the higher side of the road in a historic building with a stone patio out back. Mediterranean and Greek-influenced brunch, all-day espresso, pastries from our oven, and a full bar when you need one.</p>
            <p className="text-base md:text-lg italic font-display" style={{ color: ACCENT }}>— Paula, owner</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
            <Image src="https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?w=900&q=80&auto=format&fit=crop" alt="Inside Georgia Grace Cafe" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>House Favorites</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 italic">What people come back for.</h2>
            <div className="w-[60px] h-[1.5px] mx-auto" style={{ background: ACCENT }} />
            <p className="text-lg mt-6" style={{ color: MUTED }}>Brunch with a Mediterranean spirit, plus the espresso program you&apos;d expect on Main Street.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 bg-white relative">
                <Image src="https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80&auto=format&fit=crop" alt="Mediterranean crepe" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Signature</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Mediterranean Crepe</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$14</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Spinach, feta, sun-dried tomato, kalamata olive, roasted red pepper, and a whisper of fresh oregano. Customers ask us not to ever take it off.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 bg-white relative">
                <Image src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80&auto=format&fit=crop" alt="Greek breakfast plate" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Brunch</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Greek Breakfast Plate</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$16</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Two soft-set eggs, herbed feta, cherry tomatoes, cucumber, olives, pita, and a small Greek yogurt with honey.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 bg-white relative">
                <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop" alt="Espresso pour" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>All Day</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Espresso &amp; Pastry</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>From $6</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Local roasters, traditional drinks, plus pastries from our oven. Pastries and coffee available until 4pm — long after brunch closes.</p>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Avocado &amp; Feta Toast</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Sourdough, smashed avocado, feta. <span className="font-medium" style={{ color: ACCENT }}>$13</span></p>
            </div>
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Lamb Gyro Wrap</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>House-spiced lamb, tzatziki. <span className="font-medium" style={{ color: ACCENT }}>$15</span></p>
            </div>
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Brunch Cocktails</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Mimosas, espresso martinis, spritzes. <span className="font-medium" style={{ color: ACCENT }}>From $9</span></p>
            </div>
          </div>

          <div className="text-center mt-14">
            <a href="#" className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>View Full Menu</a>
          </div>
        </div>
      </section>

      {/* PATIO */}
      <section id="patio" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
            <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop" alt="Stone patio at Georgia Grace" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>The Patio</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight italic">An outdoor stone patio.</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>Tucked behind the cafe, with vines and string lights and Main Street&apos;s foot traffic just up the path. Open seasonally from April through October. Dogs welcome. Sunday afternoons are our favorite.</p>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: MUTED }}>Available for private events — anniversaries, baby showers, small wedding rehearsal dinners. Inquire about reserving the whole patio.</p>
            <a href="mailto:hello@georgiagracecafe.com" className="inline-block px-6 py-3 rounded-full font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>Reserve the patio</a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8" style={{ background: INK, color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: SAGE }}>Loved by Locals</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-3 italic">★ ★ ★ ★ ★ &nbsp; 4.6 on Google</h2>
            <p className="text-white/70">570 reviews from Main Street regulars and visiting brunchers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: SAGE }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;The Mediterranean crepe is the dish I think about during the week. The patio in the spring is one of the prettiest spots in Ellicott City.&quot;</p>
              <footer className="text-sm text-white/60">— Eleni P. · Catonsville</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: SAGE }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Paula remembers your order on the second visit. The Greek breakfast plate and espresso martini at 11am is the move.&quot;</p>
              <footer className="text-sm text-white/60">— David L. · Ellicott City</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: SAGE }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Took my mom for Mother&apos;s Day. The patio, the lamb gyro, the espresso. She&apos;s already asking to come back.&quot;</p>
              <footer className="text-sm text-white/60">— Sara M. · Columbia</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight italic">Up the hill on Main.</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: MUTED }}>8333 Main Street<br />Ellicott City, MD 21043</p>
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
                      <td className="py-1.5">Wed — Sun</td>
                      <td className="text-right">8 AM — 3 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">Coffee + pastries</td>
                      <td className="text-right">Until 4 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach Us</h4>
                <p style={{ color: MUTED }}>
                  <a href="tel:+14107544393" className="hover:opacity-70">(410) 754-4393</a><br />
                  <a href="mailto:hello@georgiagracecafe.com" className="hover:opacity-70">hello@georgiagracecafe.com</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
                <a href="https://www.google.com/maps/place/8333+Main+St,+Ellicott+City,+MD+21043" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>Get Directions</a>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t" style={{ borderColor: RULE }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: MUTED }}>Friday email: what&apos;s running this weekend</p>
              <form className="flex gap-2">
                <input type="email" placeholder="you@email.com" className="flex-1 px-4 py-3 rounded-full text-sm border bg-white" style={{ borderColor: RULE }} />
                <button type="submit" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Join</button>
              </form>
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-md relative">
            <Image src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=900&q=80&auto=format&fit=crop" alt="Georgia Grace dining room" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-14 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold italic">@georgiagracecafe</p>
            <a href="https://instagram.com/georgiagracecafe" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>Follow on Instagram →</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              ['https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80', 'Mediterranean'],
              ['https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80', 'Crepe'],
              ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', 'Espresso'],
              ['https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?w=400&q=80', 'Cafe'],
              ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', 'Patio'],
              ['https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', 'Brunch'],
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
            <p className="font-display text-3xl font-bold text-white mb-3 italic">Georgia <span style={{ color: SAGE }}>Grace</span></p>
            <p className="max-w-sm leading-relaxed">Mediterranean brunch on historic Main Street, Ellicott City. Named for Georgia and Grace.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="leading-relaxed">8333 Main Street<br />Ellicott City, MD 21043<br /><a href="tel:+14107544393" className="hover:text-white">(410) 754-4393</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <p className="leading-relaxed">
              <a href="https://instagram.com/georgiagracecafe" className="hover:text-white block">Instagram</a>
              <a href="https://facebook.com/GeorgiaGraceCafeEllicottCity" className="hover:text-white block">Facebook</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50">© 2026 Georgia Grace Cafe. All rights reserved.</div>
        <p className="max-w-6xl mx-auto mt-6 text-[10px] tracking-widest uppercase text-white/30">Mockup by Thryve Operations · thryveops.com · @thryveops · contact@thryveops.com</p>
      </footer>
    </div>
  )
}
