import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'The Trolley Stop — Historic Oella restaurant + bar in Ellicott City',
  description: 'Eat at the trolley stop they kept. American gastropub, full bar, karaoke + open mic, on the original Oella trolley building since the 1880s.',
}

const PAPER = '#F7F3EE'
const PAPER2 = '#EFE7DC'
const INK = '#1F1614'
const ACCENT = '#7A2929'
const MUTED = '#6B5D55'
const RULE = '#DDD0BD'
const ROSE2 = '#D49B9B'

export default function TrolleyStop() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: `${PAPER}F2`, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight">
            The <span style={{ color: ACCENT }}>Trolley Stop</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70">Menu</a>
            <a href="#events" className="hover:opacity-70">Events</a>
            <a href="#story" className="hover:opacity-70">Our Story</a>
            <a href="#visit" className="hover:opacity-70">Visit</a>
            <a href="tel:+14104658546" className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Reserve a Table</a>
          </div>
          <a href="tel:+14104658546" className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Reserve</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80&auto=format&fit=crop" alt="The Trolley Stop bar at golden hour" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/75" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/85">6 Oella Ave · Since 1882</p>
          <h1 className="font-display text-5xl md:text-7xl font-black mb-6 leading-[1.02]">
            Eat at the<br />trolley stop they kept.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            American gastropub, full bar, karaoke Fridays, open mic Wednesdays. On the original Oella trolley building, in the heart of historic Ellicott City.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+14104658546" className="px-8 py-4 rounded-full font-semibold text-white" style={{ background: ACCENT }}>Reserve a Table</a>
            <a href="#menu" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-white/90" style={{ color: INK }}>See the Menu</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><p className="font-display text-3xl md:text-4xl font-black" style={{ color: ACCENT }}>4.5 ★</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>1,481 Google reviews</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-black" style={{ color: ACCENT }}>140+</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Years on Oella Ave</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-black" style={{ color: ACCENT }}>6 nights</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Karaoke · open mic · happy hour</p></div>
          <div><p className="font-display text-3xl md:text-4xl font-black" style={{ color: ACCENT }}>Late</p><p className="text-xs uppercase tracking-widest mt-1" style={{ color: MUTED }}>Open til 10pm Fri-Sat</p></div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Kitchen + Bar</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">What we serve.</h2>
            <div className="w-[50px] h-[2px] mx-auto" style={{ background: ACCENT }} />
            <p className="text-lg mt-6" style={{ color: MUTED }}>Maryland classics, hand-cut steaks, gastropub favorites, and a full bar that goes deep on whiskey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80&auto=format&fit=crop" alt="Trolley #9 hand-cut steak" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Signature</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Trolley #9 Steak</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$32</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Hand-cut 12oz ribeye, butter-basted, served with smashed potatoes, charred broccolini, and a red-wine pan jus.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop" alt="The Trolley Burger" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>House Favorite</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">The Trolley Burger</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$16</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Half-pound chuck-and-brisket blend, aged cheddar, caramelized onion, house pickle, brioche bun. Hand-cut fries on the side.</p>
            </article>

            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop" alt="Maryland crab dip" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mb-2">
                <span className="inline-block px-2.5 py-0.5 border rounded-full text-[11px] tracking-[.08em] uppercase bg-white" style={{ borderColor: RULE, color: MUTED }}>Maryland</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl font-bold">Maryland Crab Dip</h3>
                <span className="font-semibold whitespace-nowrap ml-3" style={{ color: ACCENT }}>$11</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Cream cheese, jumbo lump crab, Old Bay, sharp cheddar. Served bubbling hot with grilled toast points.</p>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="flex items-start gap-4 p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Pasta" fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">Chicken Riggie</p>
                <p className="text-xs mt-1" style={{ color: MUTED }}>Tender chicken, linguini, artichokes. <span className="font-medium" style={{ color: ACCENT }}>$19</span></p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80" alt="Philly cheesesteak" fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">Philly Cheesesteak</p>
                <p className="text-xs mt-1" style={{ color: MUTED }}>Shaved ribeye, peppers, onions, provolone. <span className="font-medium" style={{ color: ACCENT }}>$15</span></p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-lg bg-white border" style={{ borderColor: RULE }}>
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 relative" style={{ background: PAPER2 }}>
                <Image src="https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=300&q=80" alt="Whiskey pour" fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">Bar Program</p>
                <p className="text-xs mt-1" style={{ color: MUTED }}>Full bar, deep whiskey list, craft cocktails. <span className="font-medium" style={{ color: ACCENT }}>From $7</span></p>
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <a href="#" className="inline-block px-8 py-3 rounded-full font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>View Full Menu</a>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-20 md:py-32 px-5 md:px-8 border-y" style={{ background: PAPER2, borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Six Nights a Week</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">There&apos;s always something on.</h2>
            <div className="w-[50px] h-[2px] mx-auto" style={{ background: ACCENT }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-2xl p-7 border shadow-sm" style={{ borderColor: RULE }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Wednesdays</p>
              <h3 className="font-display text-2xl font-bold mb-2">Open Mic Night</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>Sign-ups at 7. First set at 8. Bring an instrument, bring nothing, just bring something to share. House drinks $2 off all night.</p>
              <a href="tel:+14104658546" className="text-sm font-semibold" style={{ color: ACCENT }}>Reserve a spot →</a>
            </article>
            <article className="bg-white rounded-2xl p-7 border shadow-sm" style={{ borderColor: RULE }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Tuesday — Friday</p>
              <h3 className="font-display text-2xl font-bold mb-2">Happy Hour</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>3pm — 6pm. Domestic drafts $2.50. IPAs &amp; imports $5. Rail drinks $5. Wings, dip, and bar snacks at half-price.</p>
              <a href="#menu" className="text-sm font-semibold" style={{ color: ACCENT }}>See bar menu →</a>
            </article>
            <article className="bg-white rounded-2xl p-7 border shadow-sm" style={{ borderColor: RULE }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Fridays</p>
              <h3 className="font-display text-2xl font-bold mb-2">Karaoke Night</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>9pm til close. KJ Rob is back behind the wheel. Over 20,000 songs, including everything you don&apos;t admit to liking sober.</p>
              <a href="tel:+14104658546" className="text-sm font-semibold" style={{ color: ACCENT }}>Reserve a booth →</a>
            </article>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6 leading-tight">The original trolley stop.</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: MUTED }}>In 1882, this building was a stop on the Oella trolley line — the one that carried mill workers, day-trippers, and Sunday families between Baltimore and Ellicott City along the Patapsco River.</p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>The trolley line is gone. The building stayed. So did the name. We&apos;re an American gastropub, a full bar, a 1,481-review neighborhood favorite, and the only restaurant in Howard County that can honestly say we&apos;ve been here since the streetcar era. Pull up. We saved you a seat.</p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
            <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80&auto=format&fit=crop" alt="Historic Trolley Stop building exterior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-32 px-5 md:px-8" style={{ background: INK, color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ROSE2 }}>Loved by Locals</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-3">★ ★ ★ ★ ★ &nbsp; 4.5 on Google</h2>
            <p className="text-white/70">Based on 1,481 reviews from Howard County and Baltimore-edge regulars</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: ROSE2 }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;The Trolley #9 steak is the best steak I&apos;ve had outside of a chophouse. Add the river view and you can&apos;t beat it.&quot;</p>
              <footer className="text-sm text-white/60">— Greg M. · Catonsville</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: ROSE2 }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Friday karaoke is a riot. KJ Rob is a legend. The crab dip is the only reason I leave the house some weeks.&quot;</p>
              <footer className="text-sm text-white/60">— Sarah B. · Ellicott City</footer>
            </blockquote>
            <blockquote className="p-6 rounded-xl border border-white/15">
              <p className="mb-3" style={{ color: ROSE2 }}>★★★★★</p>
              <p className="text-white/90 leading-relaxed mb-4">&quot;Open mic Wednesday is the best $0 entertainment in HoCo. Get there at 7 if you want to play.&quot;</p>
              <footer className="text-sm text-white/60">— Marcus L. · Baltimore</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8" style={{ background: PAPER2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Find Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight">Just past the bridge.</h2>
            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p style={{ color: MUTED }}>6 Oella Ave<br />Ellicott City, MD 21043</p>
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
                      <td className="text-right">8 AM — 9 PM</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: RULE }}>
                      <td className="py-1.5">Fri — Sat</td>
                      <td className="text-right">8 AM — 10 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">Sunday</td>
                      <td className="text-right">8 AM — 9 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reach Us</h4>
                <p style={{ color: MUTED }}>
                  <a href="tel:+14104658546" className="hover:opacity-70">(410) 465-8546</a><br />
                  <a href="mailto:hello@newtrolleystop.com" className="hover:opacity-70">hello@newtrolleystop.com</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="tel:+14104658546" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>Reserve a Table</a>
                <a href="https://www.google.com/maps/place/6+Oella+Ave,+Ellicott+City,+MD+21043" className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px]" style={{ borderColor: INK, color: INK }}>Get Directions</a>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-md relative">
            <Image src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=900&q=80&auto=format&fit=crop" alt="Trolley Stop dining room" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-14 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-bold">@thetrolleystop_oec</p>
            <a href="https://instagram.com/thetrolleystop_oec" className="text-sm font-semibold hover:underline" style={{ color: ACCENT }}>Follow on Instagram →</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80', 'Bar'],
              ['https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80', 'Steak'],
              ['https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', 'Burger'],
              ['https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80', 'Exterior'],
              ['https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=400&q=80', 'Whiskey'],
              ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80', 'Crab dip'],
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
            <p className="font-display text-3xl font-black text-white mb-3">The <span style={{ color: ROSE2 }}>Trolley Stop</span></p>
            <p className="max-w-sm leading-relaxed">American gastropub on the original Oella trolley building. Open seven days a week, except Monday.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Visit</h4>
            <p className="leading-relaxed">6 Oella Ave<br />Ellicott City, MD 21043<br /><a href="tel:+14104658546" className="hover:text-white">(410) 465-8546</a></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <p className="leading-relaxed">
              <a href="https://instagram.com/thetrolleystop_oec" className="hover:text-white block">Instagram</a>
              <a href="https://facebook.com/Trolley101" className="hover:text-white block">Facebook</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50">© 2026 The Trolley Stop. All rights reserved.</div>
        <p className="max-w-6xl mx-auto mt-6 text-[10px] tracking-widest uppercase text-white/30">Mockup by Thryve Operations · thryveops.com · @thryveops · contact@thryveops.com</p>
      </footer>
    </div>
  )
}
