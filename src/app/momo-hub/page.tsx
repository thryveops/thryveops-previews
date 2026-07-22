import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'MoMo Hub — Authentic Nepali dumplings in Clarksville & Silver Spring, MD',
  description: 'The best Mo:Mo in Maryland. Steamed, fried, jhol. Halal meat, vegan options. Two locations: Clarksville and Silver Spring.',
}

const PAPER = '#FBF6F2'
const PAPER2 = '#F5E4DE'
const INK = '#1A0F0C'
const ACCENT = '#B5292B'
const SAFFRON = '#E8A33C'
const MUTED = '#6B5D55'
const RULE = '#E3D2CB'

export default function MomoHub() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: `${PAPER}F2`, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            MoMo <span style={{ color: ACCENT }}>Hub</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70">Menu</a>
            <a href="#story" className="hover:opacity-70">Our Story</a>
            <a href="#locations" className="hover:opacity-70">Locations</a>
            <a href="#" className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
          </div>
          <a href="#" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=1800&q=80&auto=format&fit=crop" alt="Steamed Nepali Mo:Mo dumplings" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/75" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">Howard County · Since 2022</p>
          <h1 className="font-display text-5xl md:text-7xl font-black mb-6 leading-[1.02]">
            The best Mo:Mo<br /><span style={{ color: SAFFRON }}>in Maryland.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Authentic Nepali dumplings — steamed, fried, or jhol. Halal meat. Vegan options. Two locations: Clarksville and Silver Spring.
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
          <div><p className="font-display text-3xl md:text-4xl font-black" style={{ color: ACCENT }}>4.8 ★</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>208 Google reviews</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-black" style={{ color: ACCENT }}>2</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Locations — Clarksville + Silver Spring</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-black" style={{ color: ACCENT }}>100%</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Halal meat · vegan options</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-black" style={{ color: ACCENT }}>2022</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Founded by Subash + June</p></div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6 leading-tight">From Kathmandu to Clarksville.</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>In 2022, Subash and June Khatiwada opened MoMo Hub inside The Common Kitchen with one dish on their mind — the Mo:Mo their families have made for generations.</p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>Three years and 200+ five-star reviews later, we&apos;ve expanded to Silver Spring and we&apos;re still doing the same thing every morning: pleating dumplings by hand, simmering jhol broth from scratch, and feeding the only authentic Nepali community in this part of Maryland.</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
            <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop" alt="Kitchen at MoMo Hub" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>House Favorites</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">The plates we got famous for.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Steamed, fried, jhol. Plus everything else our grandmothers made.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 bg-white relative">
                <Image src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80&auto=format&fit=crop" alt="Jhol Momo in broth" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Signature</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Jhol Mo:Mo</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$15.99</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Eight steamed Mo:Mo swimming in spiced tomato-sesame jhol broth. The dish that put us on the map.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 bg-white relative">
                <Image src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80&auto=format&fit=crop" alt="Fried Chicken Mo:Mo" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Most Ordered</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Fried Chicken Mo:Mo</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$14.99</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Hand-pleated chicken Mo:Mo, deep-fried until shatteringly crisp, served with achaar (Nepali tomato chutney).</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 bg-white relative">
                <Image src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop" alt="Chilly Mo:Mo" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Spicy</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Chilly Mo:Mo</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$15.99</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Mo:Mo wok-tossed with onion, bell pepper, and our house chilly sauce. The one regulars order at every table.</p>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Vegetable Chilly Mo:Mo</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Veg / vegan-friendly. <span className="font-medium" style={{ color: ACCENT }}>$15.99</span></p>
            </div>
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Chatamari</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Newari rice crepe, savory toppings.</p>
            </div>
            <div className="p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <p className="font-display font-bold text-lg">Bara &amp; Sides</p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>Black-lentil pancakes, noodles, salad.</p>
            </div>
          </div>

          <div className="text-center mt-14">
            <a href="#" className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>View Full Menu</a>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Two Locations</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">Clarksville &amp; Silver Spring.</h2>
            <p className="text-lg" style={{ color: MUTED }}>Same Mo:Mo, same family, two doors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="rounded-2xl overflow-hidden shadow-sm border" style={{ background: PAPER2, borderColor: RULE }}>
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?w=1200&q=80&auto=format&fit=crop" alt="Clarksville interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold">Clarksville</h3>
                  <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Flagship · 2022</span>
                </div>
                <p className="text-sm mb-5" style={{ color: MUTED }}>Inside The Common Kitchen<br />12250 Clarksville Pike Suite A<br />Clarksville, MD 21029</p>
                <table className="text-sm w-full mb-6">
                  <tbody>
                    <tr className="border-b" style={{ borderColor: RULE }}><td className="py-1.5" style={{ color: MUTED }}>Mon</td><td className="text-right">12 PM — 8 PM</td></tr>
                    <tr className="border-b" style={{ borderColor: RULE }}><td className="py-1.5" style={{ color: MUTED }}>Tue — Thu</td><td className="text-right">11 AM — 8 PM</td></tr>
                    <tr className="border-b" style={{ borderColor: RULE }}><td className="py-1.5" style={{ color: MUTED }}>Fri — Sat</td><td className="text-right">11 AM — 8:30 PM</td></tr>
                    <tr><td className="py-1.5" style={{ color: MUTED }}>Sunday</td><td className="text-right">11 AM — 8 PM</td></tr>
                  </tbody>
                </table>
                <div className="flex flex-wrap gap-2">
                  <a href="tel:+16673198708" className="px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Call (667) 319-8708</a>
                  <a href="https://www.google.com/maps/place/12250+Clarksville+Pike,+Clarksville,+MD+21029" className="px-5 py-2.5 rounded-full text-sm font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>Directions</a>
                </div>
              </div>
            </article>

            <article className="rounded-2xl overflow-hidden shadow-sm border" style={{ background: PAPER2, borderColor: RULE }}>
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=1200&q=80&auto=format&fit=crop" alt="Silver Spring interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold">Silver Spring</h3>
                  <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Opened 2025</span>
                </div>
                <p className="text-sm mb-5" style={{ color: MUTED }}>Silver Spring, MD<br />Inside Montgomery County&apos;s growing<br />Nepali-American food district</p>
                <table className="text-sm w-full mb-6">
                  <tbody>
                    <tr><td className="py-1.5" style={{ color: MUTED }}>Mon — Sun</td><td className="text-right">11 AM — 9 PM</td></tr>
                  </tbody>
                </table>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Order Online</a>
                  <a href="#" className="px-5 py-2.5 rounded-full text-sm font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>Directions</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8" style={{ background: INK, color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: SAFFRON }}>Loved by Locals</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-3">★ ★ ★ ★ ★ &nbsp; 4.8 on Google</h2>
            <p className="text-white/70">208 reviews · highest-rated Nepali restaurant in Maryland</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: SAFFRON }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Authentic Jhol Mo:Mo I haven&apos;t had since Kathmandu. The broth is real. The Khatiwadas know what they&apos;re doing.&quot;</p>
              <footer className="text-sm text-white/60">— Anjali T. · Columbia</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: SAFFRON }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;First time trying Mo:Mo. Now my whole family is hooked. The chilly mo:mo is dangerous. Worth the drive from Bethesda.&quot;</p>
              <footer className="text-sm text-white/60">— Brian K. · Bethesda</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: SAFFRON }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Vegan vegetable chilly mo:mo is the best vegan dumpling I&apos;ve had anywhere. Halal options for my husband, vegan options for me — finally.&quot;</p>
              <footer className="text-sm text-white/60">— Priya R. · Clarksville</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-14 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold">@momohubmd</p>
            <a href="https://instagram.com/momohubmd" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>Follow on Instagram →</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              ['https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80', 'Mo:Mo'],
              ['https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', 'Fried Mo:Mo'],
              ['https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', 'Chilly Mo:Mo'],
              ['https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?w=400&q=80', 'Cafe'],
              ['https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=400&q=80', 'Interior'],
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-black text-white mb-3">MoMo <span style={{ color: SAFFRON }}>Hub</span></p>
            <p className="max-w-sm leading-relaxed">Authentic Nepali dumplings since 2022. Halal · Vegan options. Two locations in Maryland.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Clarksville</h4>
            <p className="leading-relaxed">12250 Clarksville Pike A<br />Clarksville, MD 21029<br /><a href="tel:+16673198708" className="hover:text-white">(667) 319-8708</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Silver Spring</h4>
            <p className="leading-relaxed">Silver Spring, MD<br />Opened 2025</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/50">© 2026 MoMo Hub. All rights reserved.</p>
          <div className="flex gap-5 text-xs">
            <a href="https://instagram.com/momohubmd" className="hover:text-white">Instagram</a>
            <a href="https://facebook.com/momohubmaryland" className="hover:text-white">Facebook</a>
          </div>
        </div>
        <p className="max-w-6xl mx-auto mt-6 text-[10px] tracking-widest uppercase text-white/30">Mockup by Thryve Operations · thryveops.com · @thryveops · contact@thryveops.com</p>
      </footer>
    </div>
  )
}
