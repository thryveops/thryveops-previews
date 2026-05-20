import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Precision Vision Lawns — Ellicott City, MD" };

const ACCENT = "#1A4D3F";
const GREEN = "#4D7C0F";
const PAPER = "#FAFAF8";
const INK = "#1A1A1A";
const SAGE = "#A8D5A2";

export default function PrecisionVisionLawns() {
  return (
    <div style={{ background: PAPER, color: INK }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10" style={{ background: ACCENT, height: 68 }}>
        <a href="#" className="font-display leading-tight">
          <span className="text-white text-xl font-bold block" style={{ letterSpacing: "0.02em" }}>Precision Vision Lawns</span>
          <span className="text-white/55 text-xs font-semibold uppercase tracking-[0.22em]">Ellicott City, MD</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/65 hover:text-white text-xs font-medium tracking-[0.1em] uppercase">Services</a>
          <a href="#gallery" className="text-white/65 hover:text-white text-xs font-medium tracking-[0.1em] uppercase">Gallery</a>
          <a href="#visit" className="text-white/65 hover:text-white text-xs font-medium tracking-[0.1em] uppercase">Visit</a>
          <a href="tel:4437438169" className="text-white font-bold text-xs px-5 py-2.5 rounded-sm tracking-[0.08em]" style={{ background: GREEN }}>Get a Free Quote</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex items-center overflow-hidden" style={{ height: "100vh", minHeight: 600 }}>
        <div className="absolute inset-0">
          <Image fill sizes="100vw" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1800&q=80" alt="Precision lawn care" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(10,30,20,0.88) 0%,rgba(10,30,20,0.55) 50%,rgba(10,30,20,0.15) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-[680px] px-10 ml-[6vw]" style={{ marginTop: 68 }}>
          <div className="inline-flex items-center gap-2 text-white/75 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1.5 border border-white/15 rounded-sm mb-5 bg-white/8">
            <span className="text-yellow-300">★★★★★</span> 5.0 Stars · Google
          </div>
          <h1 className="font-display text-white leading-[1.05] mb-5" style={{ fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight: 700 }}>
            Precision in<br /><span className="italic" style={{ color: SAGE }}>Every Detail</span>
          </h1>
          <p className="text-white/72 text-base leading-[1.65] max-w-[500px] mb-9">
            Ellicott City&apos;s 5-star lawn care and garden design service. Every property left better than we found it.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:4437438169" className="text-white font-bold text-xs px-8 py-3.5 rounded-sm tracking-[0.1em] uppercase" style={{ background: GREEN }}>Get a Free Quote</a>
            <a href="tel:4437438169" className="text-white font-semibold text-xs px-8 py-3.5 rounded-sm tracking-[0.1em] uppercase border border-white/45">Call (443) 743-8169</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="flex justify-center gap-16 px-8 py-4.5 flex-wrap" style={{ background: ACCENT, paddingTop: "1.1rem", paddingBottom: "1.1rem" }}>
        {["5.0 Stars on Google", "Ellicott City & Howard County", "Licensed & Insured", "Free Estimates"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-white/60 text-xs font-semibold tracking-[0.12em] uppercase">
            <span style={{ color: SAGE }}>✦</span> {item}
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" className="bg-white" style={{ padding: "5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2" style={{ color: GREEN }}>What We Do</p>
          <h2 className="font-display font-bold mb-4 leading-[1.15]" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", color: ACCENT }}>Services &amp; Pricing</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[560px] mb-12">Straightforward pricing for every service. Call for a free estimate on your specific property.</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { emoji: "🌿", name: "Lawn Maintenance", price: "$45+", freq: "Per visit", desc: "Mow, edge, trim, and blow. Consistent schedule keeps your lawn looking sharp all season." },
              { emoji: "🌱", name: "Garden Design", price: "$150+", freq: "Project", desc: "Bed design, plant selection, and installation. We make the space match the vision." },
              { emoji: "🍂", name: "Seasonal Cleanup", price: "$75+", freq: "Per service", desc: "Spring and fall cleanups — leaves, debris, beds cleared and refreshed for the season ahead." },
              { emoji: "🪨", name: "Mulch Installation", price: "$85+", freq: "Per yard", desc: "Beds edged, old mulch removed where needed, fresh mulch installed and leveled clean." },
              { emoji: "✂️", name: "Hedge Trimming", price: "$60+", freq: "Per visit", desc: "Precise shaping and trimming for shrubs, hedges, and ornamental plants. Clean lines, no stray growth." },
            ].map((s) => (
              <div key={s.name} className="rounded-md p-7 border border-[#E5EDE8] hover:border-[#1A4D3F] hover:shadow-md transition-all hover:-translate-y-0.5" style={{ background: PAPER }}>
                <span className="text-2xl block mb-3">{s.emoji}</span>
                <div className="font-display font-bold text-xl mb-2 leading-[1.2]" style={{ color: ACCENT }}>{s.name}</div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-lg font-bold" style={{ color: GREEN }}>{s.price}</span>
                  <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-sm">{s.freq}</span>
                </div>
                <p className="text-gray-500 text-xs leading-[1.55]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <p className="text-gray-500 text-xs mb-4">Pricing varies based on property size and condition. Free estimate for every new client.</p>
            <a href="tel:4437438169" className="inline-block text-white font-bold text-xs px-8 py-3.5 rounded-sm tracking-[0.1em] uppercase" style={{ background: ACCENT }}>Call for a Free Estimate</a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <div className="grid md:grid-cols-2 min-h-[480px]">
        <div className="flex flex-col justify-center py-20 px-16" style={{ background: ACCENT }}>
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2 text-white/35">Our Story</p>
          <h2 className="font-display font-bold text-white leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)" }}>5 Stars from Day One</h2>
          <p className="text-white/65 text-sm leading-[1.7] mb-4">
            Precision Vision Lawns started with one standard: leave every property better than we found it. Not &quot;good enough for the price.&quot; Better — every time.
          </p>
          <p className="text-white/65 text-sm leading-[1.7] mb-8">
            Five reviews, five stars. That&apos;s the foundation. Every lawn we maintain, every garden bed we design, every seasonal cleanup we run — that standard doesn&apos;t move.
          </p>
          <div className="flex gap-10 pt-7 border-t border-white/12">
            {[{ val: "5.0★", label: "Google" }, { val: "100%", label: "5-Star Reviews" }, { val: "LLC", label: "Licensed" }].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-[2.25rem] leading-none" style={{ color: SAGE }}>{s.val}</div>
                <div className="text-white/40 text-xs uppercase tracking-[0.15em] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&q=80" alt="Beautiful lawn and garden" className="object-cover" />
        </div>
      </div>

      {/* TEAM */}
      <section id="team" style={{ background: PAPER, padding: "5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2" style={{ color: GREEN }}>The Team</p>
          <h2 className="font-display font-bold mb-4 leading-[1.15]" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", color: ACCENT }}>Who Does the Work</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[560px] mb-12">Owner-operated, hands-on, accountable. When you hire Precision Vision Lawns, you know who&apos;s on your property.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {[
              { name: "Seth", role: "Owner & Lead Landscaper", bio: "On every job, personally. The 5-star standard is his — and he holds it every time.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
              { name: "Jordan", role: "Landscape Tech", bio: "Detail work, mulch installs, and cleanup. Precise and consistent on every property.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
            ].map((m) => (
              <div key={m.name} className="overflow-hidden rounded-md border border-[#E5EDE8] bg-white">
                <div className="relative h-[300px]">
                  <Image fill sizes="50vw" src={m.img} alt={m.name} className="object-cover object-top hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-xl mb-0.5" style={{ color: ACCENT }}>{m.name}</div>
                  <div className="text-xs font-bold uppercase tracking-[0.15em] mb-2.5" style={{ color: GREEN }}>{m.role}</div>
                  <p className="text-gray-500 text-xs leading-[1.55] mt-2.5">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "#162A22", padding: "5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2 text-white/40">Client Reviews</p>
            <h2 className="font-display font-bold text-white leading-[1.15] mb-4" style={{ fontSize: "clamp(2rem,5vw,3.25rem)" }}>Every Job. Every Star.</h2>
            <div className="inline-flex items-center gap-3 border border-white/8 px-6 py-2.5 rounded-sm bg-white/4">
              <span className="font-display font-bold text-yellow-300 leading-none" style={{ fontSize: "2rem" }}>5.0★</span>
              <span className="text-white/35 text-xs uppercase tracking-[0.12em]">5 Google Reviews · Perfect Score</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: '"Seth showed up on time, worked clean, and my lawn looked incredible when he was done. Professional from start to finish."', author: "— David M." },
              { text: '"The garden bed redesign was beyond what I expected. Great eye for layout, quality plants, and everything was cleaned up perfectly."', author: "— Carol T." },
              { text: '"Reliable, professional, and does the work right. I\'ve had other services not show up. Precision Vision has never missed a scheduled visit."', author: "— James R." },
            ].map((r) => (
              <div key={r.author} className="p-8 rounded-md border border-white/7 bg-white/4">
                <div className="text-yellow-300 text-sm tracking-[0.08em] mb-4">★★★★★</div>
                <p className="font-display italic text-white/78 text-sm leading-[1.65] mb-5">{r.text}</p>
                <div className="text-xs font-bold text-white/35 uppercase tracking-[0.15em]">{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT / SERVICE AREA */}
      <div id="visit" className="grid md:grid-cols-2 min-h-[420px]">
        <div className="flex flex-col justify-center bg-white py-20 px-16">
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2" style={{ color: GREEN }}>Service Area</p>
          <h2 className="font-display font-bold mb-6 leading-[1.15]" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", color: ACCENT }}>Serving Howard County</h2>
          <div className="space-y-6 mt-2">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-sm flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(77,124,15,0.1)" }}>
                <svg className="w-4 h-4" fill="none" stroke={GREEN} strokeWidth={2} viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="text-xs font-bold tracking-[0.18em] uppercase mb-1" style={{ color: GREEN }}>Based In</div>
                <div className="text-sm leading-[1.55]" style={{ color: INK }}>3060 Milltowne Dr<br />Ellicott City, MD 21043</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-sm flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(77,124,15,0.1)" }}>
                <svg className="w-4 h-4" fill="none" stroke={GREEN} strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <div className="text-xs font-bold tracking-[0.18em] uppercase mb-2" style={{ color: GREEN }}>Service Area</div>
                <div className="flex flex-wrap gap-2">
                  {["Ellicott City", "Columbia", "Clarksville", "Fulton", "Howard County"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-sm border" style={{ background: "rgba(26,77,63,0.08)", color: ACCENT, borderColor: "rgba(26,77,63,0.15)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-sm flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(77,124,15,0.1)" }}>
                <svg className="w-4 h-4" fill="none" stroke={GREEN} strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.73 2.02z"/></svg>
              </div>
              <div>
                <div className="text-xs font-bold tracking-[0.18em] uppercase mb-1" style={{ color: GREEN }}>Phone</div>
                <a href="tel:4437438169" className="text-sm" style={{ color: INK }}>(443) 743-8169</a>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <a href="tel:4437438169" className="inline-block text-white font-bold text-xs px-8 py-3.5 rounded-sm tracking-[0.1em] uppercase" style={{ background: GREEN }}>Call for a Free Estimate</a>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80" alt="Precision lawn care result" className="object-cover" />
        </div>
      </div>

      {/* INSTAGRAM */}
      <section id="gallery" style={{ background: PAPER, padding: "5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2" style={{ color: GREEN }}>Follow Our Work</p>
          <h2 className="font-display font-bold mb-4 leading-[1.15]" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", color: ACCENT }}>@precisionvisionlawns</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[560px] mb-10">Before and after, every job. See the standard on Instagram.</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {[
              "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
              "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80",
              "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80",
              "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
            ].map((src, i) => (
              <a key={i} href="https://instagram.com/precisionvisionlawns" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" src={src} alt="Lawn" className="object-cover hover:scale-105 transition-transform duration-300" />
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="https://instagram.com/precisionvisionlawns" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em] border-b-2 pb-px" style={{ color: ACCENT, borderColor: GREEN }}>@precisionvisionlawns</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: ACCENT, padding: "4rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-10">
            <div>
              <div className="font-display font-bold text-white text-xl mb-1 leading-[1.2]">Precision Vision Lawns</div>
              <div className="text-white/35 text-xs font-bold tracking-[0.2em] uppercase mb-3">Ellicott City, Maryland · LLC</div>
              <p className="text-white/40 text-xs leading-[1.65] max-w-[300px]">Serving Ellicott City, Columbia, and surrounding Howard County. Every property left better than we found it.</p>
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/25 mb-4">Services</div>
              <ul className="space-y-2">
                {["Lawn Maintenance", "Garden Design", "Seasonal Cleanup", "Mulch Installation", "Hedge Trimming"].map((s) => (
                  <li key={s}><a href="#services" className="text-white/45 text-xs hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/25 mb-4">Contact</div>
              <ul className="space-y-2">
                <li><a href="tel:4437438169" className="text-white/45 text-xs hover:text-white transition-colors">(443) 743-8169</a></li>
                <li><a href="mailto:hello@precisionvisionlawns.com" className="text-white/45 text-xs hover:text-white transition-colors">hello@precisionvisionlawns.com</a></li>
                <li><a href="https://instagram.com/precisionvisionlawns" target="_blank" rel="noopener noreferrer" className="text-white/45 text-xs hover:text-white transition-colors">@precisionvisionlawns</a></li>
                <li><a href="tel:4437438169" className="text-white/45 text-xs hover:text-white transition-colors">Free Estimate</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/8 pt-6 flex flex-wrap justify-between gap-3">
            <span className="text-white/25 text-xs">© 2026 Precision Vision Lawns LLC · Ellicott City, MD</span>
            <Link href="/" className="text-white/25 text-xs hover:text-white/50">← All previews</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
