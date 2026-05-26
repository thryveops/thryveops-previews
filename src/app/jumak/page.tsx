import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'JUMAK Café & Bistro — Korean × Japanese fusion + late-night bar · Ellicott City',
  description: 'A modern Korean × Japanese fusion bistro and late-night pub in Ellicott City, Maryland. Tapas, makgeolli cocktails, sake. Inspired by the traditional Korean jumak.',
}

const PAPER = '#14100E'
const PAPER2 = '#1F1815'
const INK = '#F5ECDD'
const ACCENT = '#C8553D'
const GOLD = '#D49C5C'
const MUTED = '#9C8E81'
const RULE = '#2F2722'

export default function Jumak() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: 'rgba(20,16,14,0.95)', borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            JUMAK <span style={{ color: GOLD }}>·</span> 주막
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70">Menu</a>
            <a href="#bar" className="hover:opacity-70">The Bar</a>
            <a href="#story" className="hover:opacity-70">The Jumak Story</a>
            <a href="#visit" className="hover:opacity-70">Visit</a>
            <a href="#" className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Reserve</a>
          </div>
          <a href="#" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Reserve</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80&auto=format&fit=crop" alt="Late-night fusion bar" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(20,16,14,0.4), rgba(20,16,14,0.6), rgba(20,16,14,0.9))' }} />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5" style={{ color: GOLD }}>주막 · Ellicott City · Open til late</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-[1]">
            A jumak,<br /><span style={{ color: ACCENT }}>reimagined.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: `${INK}E6` }}>
            Korean × Japanese fusion small plates. Handcrafted highballs. Makgeolli cocktails. Sake. The traditional Korean drinking house, rebuilt in Howard County.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="px-8 py-4 rounded-full font-semibold text-white" style={{ background: ACCENT }}>Reserve a Table</a>
            <a href="#menu" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-white/90" style={{ color: '#1A0F0C' }}>See the Menu</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>4.8 ★</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>66 Google reviews</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>til 2 AM</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Late Friday + Saturday</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>KR × JP</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Fusion small plates</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>$$</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Price tier</p></div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>The Jumak Story</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              What is a <span style={{ color: ACCENT }}>jumak</span>?
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>For centuries, the jumak (주막) was the heart of Korean nightlife — a village tavern where travelers stopped, drinks were poured, and food appeared late into the night. Loose, warm, unhurried.</p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>JUMAK is our version of that. Korean drinking house, Japanese precision, Ellicott City as the village. Late nights every weekend. Make this your jumak.</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <Image src="https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=900&q=80&auto=format&fit=crop" alt="Cocktail bar" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>From the Kitchen</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Small plates, big ideas.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Korean street food, Japanese-inspired tapas, late-night-friendly throughout.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER }}>
                <Image src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80&auto=format&fit=crop" alt="Grilled seafood tapas" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase" style={{ borderColor: RULE, color: MUTED, background: 'rgba(255,255,255,0.04)' }}>Signature</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Grilled Octopus Tapas</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$18</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Charred octopus, gochujang glaze, daikon, sesame, scallion oil. Best with a highball.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER }}>
                <Image src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&q=80&auto=format&fit=crop" alt="Ramen-inspired small plate" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase" style={{ borderColor: RULE, color: MUTED, background: 'rgba(255,255,255,0.04)' }}>Late Night</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Spicy Tonkotsu Bites</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$15</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Pork-belly ramen as a small plate. Soft noodle nest, marinated egg, tonkotsu reduction, chili oil.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER }}>
                <Image src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&auto=format&fit=crop" alt="Korean BBQ flatbread" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase" style={{ borderColor: RULE, color: MUTED, background: 'rgba(255,255,255,0.04)' }}>Kitchen Favorite</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Bulgogi Flatbread</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$16</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Crispy flatbread, marinated bulgogi, kimchi, mozzarella, scallion. A jumak classic, our way.</p>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="p-5 rounded-lg border" style={{ background: PAPER, borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Seafood Pot</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Shellfish, anchovy broth, gochugaru. <span className="font-medium" style={{ color: ACCENT }}>$24</span></p>
            </div>
            <div className="p-5 rounded-lg border" style={{ background: PAPER, borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Tempura Trio</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Shrimp, sweet potato, shishito. <span className="font-medium" style={{ color: ACCENT }}>$14</span></p>
            </div>
            <div className="p-5 rounded-lg border" style={{ background: PAPER, borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Kimchi Pancake</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Aged kimchi, scallion. <span className="font-medium" style={{ color: ACCENT }}>$13</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* BAR */}
      <section id="bar" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>The Bar</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">Pour the makgeolli.</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: MUTED }}>Handcrafted highballs in the Tokyo bar tradition. Makgeolli cocktails — Korean rice wine, modernized. A serious sake program. Plus a rotating list of soju, beer, and the kind of bottles you usually drive into the city for.</p>
            <div className="space-y-3 mb-8 text-sm">
              <div className="flex justify-between border-b pb-2" style={{ borderColor: RULE }}>
                <span style={{ color: `${INK}D9` }}>Highballs</span><span style={{ color: GOLD }}>8 — 12</span>
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: RULE }}>
                <span style={{ color: `${INK}D9` }}>Makgeolli Cocktails</span><span style={{ color: GOLD }}>12 — 14</span>
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: RULE }}>
                <span style={{ color: `${INK}D9` }}>Sake (glass / carafe)</span><span style={{ color: GOLD }}>10 / 38</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: `${INK}D9` }}>Soju Specials</span><span style={{ color: GOLD }}>Rotating</span>
              </div>
            </div>
            <a href="#menu" className="inline-block px-7 py-3 rounded-full font-semibold text-white" style={{ background: ACCENT }}>See Full Bar Menu</a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <Image src="https://images.unsplash.com/photo-1551218372-a8789b81b253?w=900&q=80&auto=format&fit=crop" alt="Cocktail pour" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>Loved by Locals</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-3">★ ★ ★ ★ ★ &nbsp; 4.8 on Google</h2>
            <p style={{ color: MUTED }}>66 reviews and counting — newer, growing, and worth the visit</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 rounded-xl border" style={{ background: PAPER, borderColor: RULE }}>
              <p className="mb-3" style={{ color: GOLD }}>★★★★★</p>
              <p className="leading-relaxed mb-4" style={{ color: `${INK}E6` }}>&quot;Finally somewhere in Ellicott City to eat well at 11pm. The grilled octopus is the move. Highballs hit.&quot;</p>
              <footer className="text-sm" style={{ color: MUTED }}>— Mark T. · Columbia</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border" style={{ background: PAPER, borderColor: RULE }}>
              <p className="mb-3" style={{ color: GOLD }}>★★★★★</p>
              <p className="leading-relaxed mb-4" style={{ color: `${INK}E6` }}>&quot;The makgeolli cocktails are something else. Bulgogi flatbread + sake = my new Friday.&quot;</p>
              <footer className="text-sm" style={{ color: MUTED }}>— Soo K. · Ellicott City</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border" style={{ background: PAPER, borderColor: RULE }}>
              <p className="mb-3" style={{ color: GOLD }}>★★★★★</p>
              <p className="leading-relaxed mb-4" style={{ color: `${INK}E6` }}>&quot;Korean Japanese done right. Late hours. Real cocktails. Howard County needed this.&quot;</p>
              <footer className="text-sm" style={{ color: MUTED }}>— Daniel R. · Catonsville</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>Find Us</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">Suite E120.</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: MUTED }}>10040 Baltimore National Pike, Suite E120<br />Ellicott City, MD 21042</p>
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
                      <td className="text-right">4 PM — 12 AM</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5" style={{ color: GOLD }}>Fri</td>
                      <td className="text-right" style={{ color: GOLD }}>4 PM — 2 AM</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5" style={{ color: GOLD }}>Sat</td>
                      <td className="text-right" style={{ color: GOLD }}>11 AM — 2 AM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">Sun</td>
                      <td className="text-right">11 AM — 12 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach Us</h4>
                <p style={{ color: MUTED }}>
                  <a href="tel:+14109888902" className="hover:opacity-70">(410) 988-8902</a><br />
                  <a href="mailto:hello@jumakec.com" className="hover:opacity-70">hello@jumakec.com</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Reserve a Table</a>
                <a href="https://www.google.com/maps/place/10040+Baltimore+National+Pike,+Ellicott+City,+MD+21042" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>Get Directions</a>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-md relative">
            <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80&auto=format&fit=crop" alt="JUMAK interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-14 px-5 md:px-8 border-t" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold">@jumakec</p>
            <a href="https://instagram.com/jumakec" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>Follow on Instagram →</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80', 'Bar'],
              ['https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=400&q=80', 'Cocktail'],
              ['https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80', 'Plate'],
              ['https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80', 'Tapas'],
              ['https://images.unsplash.com/photo-1551218372-a8789b81b253?w=400&q=80', 'Pour'],
              ['https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', 'Flatbread'],
            ].map(([src, alt]) => (
              <div key={src} className="aspect-square relative overflow-hidden rounded">
                <Image src={src} alt={alt} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 px-5 md:px-8 text-sm" style={{ background: PAPER2, color: 'rgba(245,236,221,0.7)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-3xl font-bold mb-3" style={{ color: INK }}>JUMAK <span style={{ color: GOLD }}>·</span> 주막</p>
            <p className="max-w-sm leading-relaxed">Korean × Japanese fusion + late-night bar. The traditional Korean drinking house, rebuilt in Ellicott City.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{ color: INK }}>Visit</h4>
            <p className="leading-relaxed">10040 Baltimore National Pike E120<br />Ellicott City, MD 21042<br /><a href="tel:+14109888902" className="hover:opacity-100">(410) 988-8902</a></p>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{ color: INK }}>Follow</h4>
            <p className="leading-relaxed">
              <a href="https://instagram.com/jumakec" className="hover:opacity-100 block">Instagram</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50">© 2026 JUMAK Café &amp; Bistro. All rights reserved.</div>
        <p className="max-w-6xl mx-auto mt-6 text-[10px] tracking-widest uppercase text-white/30">Mockup by Thryve Operations · thryveops.com · @thryveops · hello@thryveops.com</p>
      </footer>
    </div>
  )
}
