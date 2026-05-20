import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pro Clips Barber Shop — Columbia, MD",
  description: "Twenty years on Snowden River Pkwy. Pro Clips Barber Shop — the barbers Columbia actually trusts. Book online at Booksy.",
};

const ACCENT = "#1A2942";
const MAROON = "#7A1F2B";
const PAPER = "#FAFAF7";

const team = [
  { name: "Marcus", role: "Head Barber · 15+ Years", bio: "Fades, tapers, and lineups. Been behind the chair at Pro Clips long enough to have cut the same client at 10 and again at 25.", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Devon", role: "Senior Barber", bio: "Precise edges, clean fades, and a straight razor finish that makes the difference between a good cut and a great one.", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Jaylen", role: "Barber", bio: "Handles the full service menu with strong technical skills and a sharp eye for detail on every lineup.", src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
];

const reviews = [
  { quote: "Been going here since high school. Never missed. Marcus knows exactly what I want without me saying anything.", name: "DeShawn W.", sub: "Regular Client" },
  { quote: "Pro Clips is the real deal. No gimmicks, just good cuts at a fair price. Been coming for years and it's always consistent.", name: "Tony M.", sub: "Regular Client" },
  { quote: "Brought my son for his first fade. Patient, professional, nailed it. He's been asking to go back every week since.", name: "Marcus B.", sub: "Kids Cut" },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
];

export default function Page() {
  return (
    <div style={{ backgroundColor: PAPER, color: "#0F1620" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 shadow-lg" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          <a href="#" className="font-display text-2xl text-white tracking-widest">PRO CLIPS</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Services</a>
            <a href="#team" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Team</a>
            <a href="#visit" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Visit</a>
            <a href="https://booksy.com" target="_blank" className="text-white text-sm font-semibold px-5 py-2 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: MAROON }}>Book Now</a>
          </div>
          <a href="https://booksy.com" target="_blank" className="md:hidden text-white text-sm font-semibold px-4 py-2 rounded" style={{ backgroundColor: MAROON }}>Book</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image fill sizes="100vw" className="object-cover" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=80" alt="Barber shop" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,22,32,0.90) 0%, rgba(15,22,32,0.60) 60%, rgba(15,22,32,0.40) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block text-white text-xs font-semibold tracking-widest px-4 py-1.5 mb-6 uppercase" style={{ backgroundColor: MAROON }}>
            Est. 2002 · Snowden River Pkwy, Columbia
          </div>
          <h1 className="font-display text-8xl md:text-9xl text-white tracking-widest leading-none mb-6">PRO CLIPS</h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Twenty years on Snowden River Pkwy. The barbers Columbia actually trusts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://booksy.com" target="_blank" className="text-white font-semibold px-8 py-4 rounded text-base hover:opacity-90 transition-opacity w-full sm:w-auto" style={{ backgroundColor: MAROON }}>
              Book an Appointment
            </a>
            <a href="tel:4102905434" className="border-2 border-white text-white font-semibold px-8 py-4 rounded text-base hover:bg-white hover:text-[#1A2942] transition-all w-full sm:w-auto">
              Call (410) 290-5434
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-300 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">4.5 ★</span>
              <span>139 Reviews</span>
            </div>
            <div className="w-px h-4 bg-gray-600 hidden sm:block" />
            <div>In Business Since 2002</div>
            <div className="w-px h-4 bg-gray-600 hidden sm:block" />
            <div className="hidden sm:block">Howard County, MD</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: MAROON }}>What We Offer</p>
            <h2 className="font-display text-6xl tracking-wide" style={{ color: ACCENT }}>SERVICES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Classic Cut */}
            <div className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: ACCENT }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Classic Cut</h3>
              <p className="text-gray-500 text-sm mb-6">Scissor or clipper cut, finished clean. The standard done right.</p>
              <div className="text-3xl font-bold mb-1" style={{ color: ACCENT }}>$28</div>
              <div className="text-gray-400 text-xs mb-5">~30 min</div>
              <a href="https://booksy.com" target="_blank" className="inline-block text-white text-sm font-semibold px-6 py-2.5 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Book</a>
            </div>

            {/* Fade — Most Booked */}
            <div className="rounded-xl p-8 hover:shadow-lg transition-shadow text-center relative overflow-hidden" style={{ border: `2px solid ${MAROON}` }}>
              <div className="absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: MAROON }}>Most Booked</div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: MAROON }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Fade</h3>
              <p className="text-gray-500 text-sm mb-6">Low, mid, or high fade with a clean lineup and crisp edges.</p>
              <div className="text-3xl font-bold mb-1" style={{ color: ACCENT }}>$33</div>
              <div className="text-gray-400 text-xs mb-5">~35 min</div>
              <a href="https://booksy.com" target="_blank" className="inline-block text-white text-sm font-semibold px-6 py-2.5 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: MAROON }}>Book</a>
            </div>

            {/* Beard Trim */}
            <div className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: ACCENT }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Beard Trim</h3>
              <p className="text-gray-500 text-sm mb-6">Shape, line, and trim. Straight razor finish on the edges.</p>
              <div className="text-3xl font-bold mb-1" style={{ color: ACCENT }}>$18</div>
              <div className="text-gray-400 text-xs mb-5">~20 min</div>
              <a href="https://booksy.com" target="_blank" className="inline-block text-white text-sm font-semibold px-6 py-2.5 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Book</a>
            </div>

            {/* Kids Cut */}
            <div className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: ACCENT }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Kids Cut</h3>
              <p className="text-gray-500 text-sm mb-6">Patient with the young ones. 12 and under welcome at the chair.</p>
              <div className="text-3xl font-bold mb-1" style={{ color: ACCENT }}>$22</div>
              <div className="text-gray-400 text-xs mb-5">~30 min</div>
              <a href="https://booksy.com" target="_blank" className="inline-block text-white text-sm font-semibold px-6 py-2.5 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Book</a>
            </div>

          </div>
          <div className="text-center mt-12">
            <a href="https://booksy.com" target="_blank" className="inline-block text-white font-semibold px-10 py-4 rounded-lg text-base hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>
              View All Barbers & Book on Booksy
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: MAROON }}>The Chairs</p>
            <h2 className="font-display text-6xl tracking-wide" style={{ color: ACCENT }}>THE TEAM</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative w-52 h-52 mx-auto mb-6 rounded-full overflow-hidden" style={{ border: `4px solid ${MAROON}` }}>
                  <Image fill sizes="208px" className="object-cover" src={m.src} alt={m.name} />
                </div>
                <h3 className="font-display text-2xl tracking-wide" style={{ color: ACCENT }}>{m.name}</h3>
                <p className="font-medium text-sm mt-1 mb-3" style={{ color: MAROON }}>{m.role}</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto mb-5">{m.bio}</p>
                <a href="https://booksy.com" target="_blank" className="inline-block border-2 text-sm font-semibold px-6 py-2 rounded hover:text-white transition-all" style={{ borderColor: MAROON, color: MAROON }}>
                  Book with {m.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-xl min-h-[480px]">
              <Image fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80" alt="Pro Clips interior" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-semibold text-sm tracking-widest uppercase mb-4" style={{ color: MAROON }}>Our Story</p>
              <h2 className="font-display text-6xl tracking-wide leading-tight mb-8" style={{ color: ACCENT }}>SINCE 2002</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Pro Clips opened when most of our regulars were still in school. Two decades of fades, lineups, straight razor finishes, and kids climbing into the chair for the first time.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The shop is the same. The clients just bring their kids now.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                139 reviews at 4.5 stars is what consistency looks like over time. We're on Snowden River Pkwy where we've always been.
              </p>
              <div className="mt-10 flex items-center gap-8">
                <div className="text-center">
                  <div className="font-display text-5xl" style={{ color: ACCENT }}>20+</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide mt-1">Years Open</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="font-display text-5xl" style={{ color: ACCENT }}>139</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide mt-1">Google Reviews</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="font-display text-5xl" style={{ color: ACCENT }}>4.5</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide mt-1">Star Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="font-display text-6xl text-white">4.5</span>
              <div>
                <div className="text-amber-400 text-2xl">★★★★½</div>
                <div className="text-gray-400 text-xs">139 Google reviews</div>
              </div>
            </div>
            <h2 className="font-display text-5xl text-white tracking-wide">WHAT CLIENTS SAY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl p-8 border border-white/10 bg-white/10">
                <div className="text-amber-400 text-lg mb-4">★★★★★</div>
                <p className="text-gray-200 text-base leading-relaxed mb-6">&ldquo;{r.quote}&rdquo;</p>
                <div className="text-white font-semibold text-sm">{r.name}</div>
                <div className="text-gray-400 text-xs">{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: MAROON }}>Find Us</p>
            <h2 className="font-display text-6xl tracking-wide" style={{ color: ACCENT }}>VISIT</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[360px]">
              <Image fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80" alt="Pro Clips barber shop" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Address</h3>
                <p className="text-gray-700 text-lg">9400 Snowden River Pkwy STE 108<br />Columbia, MD 21045</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Hours</h3>
                <div className="space-y-1 text-gray-700">
                  <div className="flex gap-4"><span className="w-28">Mon – Fri</span><span>9:00 am – 7:00 pm</span></div>
                  <div className="flex gap-4"><span className="w-28">Saturday</span><span>8:00 am – 5:00 pm</span></div>
                  <div className="flex gap-4"><span className="w-28">Sunday</span><span className="text-gray-400">Closed</span></div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Phone</h3>
                <a href="tel:4102905434" className="font-bold text-xl hover:underline" style={{ color: MAROON }}>(410) 290-5434</a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://booksy.com" target="_blank" className="inline-block text-white font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity text-center" style={{ backgroundColor: MAROON }}>Book on Booksy</a>
                <a href="tel:4102905434" className="inline-block border-2 font-semibold px-8 py-4 rounded hover:bg-[#1A2942] hover:text-white transition-all text-center" style={{ borderColor: ACCENT, color: ACCENT }}>Call Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: MAROON }}>Follow Along</p>
            <h2 className="font-display text-5xl tracking-wide" style={{ color: ACCENT }}>@proclips_columbia</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <a key={i} href="https://instagram.com" target="_blank" className="aspect-square overflow-hidden rounded-lg relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" className="object-cover hover:scale-105 transition-transform duration-300" src={src} alt={`Pro Clips ${i + 1}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display text-3xl text-white tracking-widest mb-1">PRO CLIPS</div>
              <div className="text-gray-400 text-sm">9400 Snowden River Pkwy STE 108 · Columbia, MD 21045</div>
              <div className="text-gray-500 text-xs mt-1">Established 2002</div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="tel:4102905434" className="text-amber-400 font-bold text-lg hover:underline">(410) 290-5434</a>
              <a href="https://booksy.com" target="_blank" className="inline-block text-white text-sm font-semibold px-5 py-2 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: MAROON }}>Book on Booksy</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-xs">
            &copy; 2026 Pro Clips Barber Shop. All rights reserved.
          </div>
        </div>
      </footer>

      <div className="py-6 text-center text-xs text-gray-400 bg-white">
        <Link href="/" className="hover:underline">← All previews</Link>
      </div>
    </div>
  );
}
