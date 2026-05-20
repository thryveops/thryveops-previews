import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Auto Obsessions Car Care — Columbia, MD" };

const ACCENT = "#1F2937";
const AMBER = "#D97706";
const PAPER = "#FAFAF7";
const INK = "#0F1620";

export default function AutoObssessionsCarCare() {
  return (
    <div style={{ background: PAPER, color: INK }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg h-16 flex items-center" style={{ background: ACCENT }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
          <a href="#" className="font-display text-2xl text-white tracking-widest">AUTO OBSESSIONS</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white text-sm font-medium">Services</a>
            <a href="#gallery" className="text-gray-300 hover:text-white text-sm font-medium">Gallery</a>
            <a href="#visit" className="text-gray-300 hover:text-white text-sm font-medium">Visit</a>
            <a href="tel:4104091806" className="text-white text-sm font-semibold px-5 py-2 rounded hover:opacity-90" style={{ background: AMBER }}>Get a Quote</a>
          </div>
          <a href="tel:4104091806" className="md:hidden text-white text-sm font-semibold px-4 py-2 rounded" style={{ background: AMBER }}>Quote</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image fill sizes="100vw" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80" alt="Detailed car" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(15,22,32,0.88) 0%,rgba(15,22,32,0.55) 60%,rgba(15,22,32,0.35) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block text-white text-xs font-semibold tracking-widest px-4 py-1.5 mb-6 uppercase" style={{ background: AMBER }}>Columbia, MD · Stevens Forest Rd</div>
          <h1 className="font-display text-7xl md:text-9xl text-white tracking-widest leading-none mb-6">OBSESSED<br />WITH YOUR<br />VEHICLE</h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Columbia&apos;s detail shop for drivers who care. PPF, ceramic coating, tint, audio, and full detailing — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4104091806" className="text-white font-semibold px-8 py-4 rounded text-base hover:opacity-90 w-full sm:w-auto" style={{ background: AMBER }}>Get a Free Quote</a>
            <a href="tel:4104091806" className="border-2 border-white text-white font-semibold px-8 py-4 rounded text-base hover:bg-white w-full sm:w-auto" style={{}} >Call (410) 409-1806</a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-300 text-sm flex-wrap">
            <div className="flex items-center gap-2"><span className="font-bold" style={{ color: AMBER }}>4.8 ★</span><span>118 Reviews</span></div>
            <div className="w-px h-4 bg-gray-600 hidden sm:block" />
            <div>Full-Service Appearance Shop</div>
            <div className="w-px h-4 bg-gray-600 hidden sm:block" />
            <div className="hidden sm:block">Howard County, MD</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: AMBER }}>What We Do</p>
            <h2 className="font-display text-6xl tracking-wide" style={{ color: ACCENT }}>SERVICES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: AMBER }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Full Detail</h3>
              <p className="text-gray-500 text-sm mb-5">Interior deep clean, exterior hand wash, clay bar, polish, and wax. Your car leaves looking new.</p>
              <div className="flex items-end justify-between">
                <div><div className="text-2xl font-bold" style={{ color: ACCENT }}>$149</div><div className="text-gray-400 text-xs">4–6 hrs</div></div>
                <a href="tel:4104091806" className="font-semibold text-sm hover:underline" style={{ color: AMBER }}>Book →</a>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: AMBER }}>Popular</div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: ACCENT }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Ceramic Coating</h3>
              <p className="text-gray-500 text-sm mb-5">Long-term paint protection with hydrophobic properties and deep gloss. Multi-year durability.</p>
              <div className="flex items-end justify-between">
                <div><div className="text-2xl font-bold" style={{ color: ACCENT }}>Starting $499</div><div className="text-gray-400 text-xs">1–2 days</div></div>
                <a href="tel:4104091806" className="font-semibold text-sm hover:underline" style={{ color: AMBER }}>Get Quote →</a>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: AMBER }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Paint Protection Film</h3>
              <p className="text-gray-500 text-sm mb-5">Self-healing urethane film that protects against rock chips, road debris, and swirl marks.</p>
              <div className="flex items-end justify-between">
                <div><div className="text-2xl font-bold" style={{ color: ACCENT }}>Get Quote</div><div className="text-gray-400 text-xs">Varies by coverage</div></div>
                <a href="tel:4104091806" className="font-semibold text-sm hover:underline" style={{ color: AMBER }}>Inquire →</a>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: ACCENT }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Window Tint</h3>
              <p className="text-gray-500 text-sm mb-5">Heat-blocking, UV-filtering window film. Cuts glare, protects interior, improves comfort.</p>
              <div className="flex items-end justify-between">
                <div><div className="text-2xl font-bold" style={{ color: ACCENT }}>Starting $199</div><div className="text-gray-400 text-xs">2–3 hrs</div></div>
                <a href="tel:4104091806" className="font-semibold text-sm hover:underline" style={{ color: AMBER }}>Book →</a>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: AMBER }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: ACCENT }}>Car Audio</h3>
              <p className="text-gray-500 text-sm mb-5">Head unit upgrades, subwoofer installs, component speakers, amplifiers, and full system builds.</p>
              <div className="flex items-end justify-between">
                <div><div className="text-2xl font-bold" style={{ color: ACCENT }}>Get Quote</div><div className="text-gray-400 text-xs">Varies by install</div></div>
                <a href="tel:4104091806" className="font-semibold text-sm hover:underline" style={{ color: AMBER }}>Inquire →</a>
              </div>
            </div>

            <div className="rounded-lg p-8 flex flex-col justify-between" style={{ background: ACCENT }}>
              <div>
                <div className="font-display text-3xl text-white tracking-wide mb-3">NOT SURE WHERE TO START?</div>
                <p className="text-gray-300 text-sm leading-relaxed">Tell us about your vehicle and what you&apos;re looking for. We&apos;ll recommend the right service.</p>
              </div>
              <a href="tel:4104091806" className="mt-8 text-white font-semibold text-sm px-6 py-3 rounded inline-block hover:opacity-90 text-center" style={{ background: AMBER }}>Call (410) 409-1806</a>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24" style={{ background: PAPER }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: AMBER }}>The People Behind the Work</p>
            <h2 className="font-display text-6xl tracking-wide" style={{ color: ACCENT }}>THE TEAM</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jake", role: "Lead Detailer & PPF Tech", bio: "Specializes in paint decontamination, PPF installs, and high-end full details.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
              { name: "Darius", role: "Ceramic & Tint Specialist", bio: "Ceramic coating applications and window tint installs done with no shortcuts.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
              { name: "Cam", role: "Audio & Detail", bio: "Car audio system builds from single subwoofer installs to full custom setups.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
            ].map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden" style={{ border: `4px solid ${AMBER}` }}>
                  <Image fill sizes="192px" src={m.img} alt={m.name} className="object-cover" />
                </div>
                <h3 className="font-display text-2xl tracking-wide" style={{ color: ACCENT }}>{m.name}</h3>
                <p className="font-medium text-sm mt-1" style={{ color: AMBER }}>{m.role}</p>
                <p className="text-gray-500 text-sm mt-3 max-w-xs mx-auto">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-semibold text-sm tracking-widest uppercase mb-4" style={{ color: AMBER }}>Our Story</p>
              <h2 className="font-display text-6xl tracking-wide leading-tight mb-8" style={{ color: ACCENT }}>BUILT ON OBSESSION</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Auto Obsessions started as one guy who refused to cut corners on a detail job. The right product for the surface, the right technique, no rushing. The kind of work you can see the difference in.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                118 reviews later, that standard hasn&apos;t moved — just the services list. What started as detailing grew into tint, then PPF, then ceramic, then audio. Customers kept coming back and bringing harder jobs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We&apos;re on Stevens Forest Rd in Columbia. Come by, see the work in person, and bring the hard jobs. That&apos;s what we&apos;re here for.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl relative h-[500px]">
              <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80" alt="Auto Obsessions shop" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" style={{ background: ACCENT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-white">4.8</span>
              <div><div className="text-xl" style={{ color: AMBER }}>★★★★★</div><div className="text-gray-400 text-xs">118 Google reviews</div></div>
            </div>
            <h2 className="font-display text-5xl text-white tracking-wide">WHAT CLIENTS SAY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: '"Got Ceramic Pro on my BMW. The shine is unreal after 8 months. Water beads off like nothing. Worth every dollar."', name: "Chris T.", sub: "Ceramic Coating, BMW" },
              { text: '"12-year-old car looked completely new when they were done. Interior deep cleaned, exterior polished. Couldn\'t believe it was the same vehicle."', name: "Mike A.", sub: "Full Detail" },
              { text: '"PPF install was clean, professional, no bubbles anywhere. You can\'t even tell it\'s on there except the paint looks perfect. Solid work."', name: "Jess M.", sub: "Paint Protection Film" },
            ].map((r) => (
              <div key={r.name} className="rounded-xl p-8 border border-white/10 bg-white/10">
                <div className="text-lg mb-4" style={{ color: AMBER }}>★★★★★</div>
                <p className="text-gray-200 text-base leading-relaxed mb-6">{r.text}</p>
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
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: AMBER }}>Come See Us</p>
            <h2 className="font-display text-6xl tracking-wide" style={{ color: ACCENT }}>VISIT</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl relative h-[360px]">
              <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80" alt="Shop exterior" className="object-cover" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Address</h3>
                <p className="text-gray-700 text-lg">6300 Stevens Forest Rd<br />Columbia, MD 21046</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Hours</h3>
                <div className="space-y-1 text-gray-700">
                  <div className="flex gap-4"><span className="w-28">Mon – Fri</span><span>8:00 am – 6:00 pm</span></div>
                  <div className="flex gap-4"><span className="w-28">Saturday</span><span>9:00 am – 4:00 pm</span></div>
                  <div className="flex gap-4"><span className="w-28">Sunday</span><span className="text-gray-400">Closed</span></div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Phone</h3>
                <a href="tel:4104091806" className="font-bold text-xl hover:underline" style={{ color: AMBER }}>(410) 409-1806</a>
              </div>
              <a href="tel:4104091806" className="inline-block text-white font-semibold px-8 py-4 rounded hover:opacity-90" style={{ background: ACCENT }}>Call to Book</a>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="gallery" className="py-24" style={{ background: PAPER }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: AMBER }}>Follow the Work</p>
            <h2 className="font-display text-5xl tracking-wide" style={{ color: ACCENT }}>@autoobsessionsllc</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
              "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80",
              "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
              "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
              "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80",
              "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=80",
            ].map((src, i) => (
              <a key={i} href="https://instagram.com/autoobsessionsllc" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden rounded-lg relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" src={src} alt="Work" className="object-cover hover:scale-105 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ background: ACCENT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display text-3xl text-white tracking-widest mb-1">AUTO OBSESSIONS</div>
              <div className="text-gray-400 text-sm">6300 Stevens Forest Rd · Columbia, MD 21046</div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="tel:4104091806" className="font-bold text-lg hover:underline" style={{ color: AMBER }}>(410) 409-1806</a>
              <a href="https://instagram.com/autoobsessionsllc" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">@autoobsessionsllc</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-xs">
            &copy; 2026 Auto Obsessions Car Care. All rights reserved.
          </div>
          <div className="text-center mt-4">
            <Link href="/" className="text-gray-500 text-xs hover:text-gray-300">← All previews</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
