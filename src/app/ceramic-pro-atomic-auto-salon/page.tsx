import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Atomic Auto Salon — Ceramic Pro Elite Dealer · Columbia, MD" };

const DARK = "#0F1823";
const BLUE = "#2563EB";
const PAPER = "#FAFAFA";
const INK = "#0F1823";

export default function CeramicProAtomicAutoSalon() {
  return (
    <div style={{ background: PAPER, color: INK }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 border-b border-white/5" style={{ background: DARK, height: 68 }}>
        <a href="#" className="font-display text-[1.4rem] text-white tracking-[0.08em] flex items-center gap-3">
          ATOMIC AUTO SALON
          <span className="text-white font-bold text-[0.55rem] tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm" style={{ background: BLUE, fontFamily: "inherit", letterSpacing: "0.18em" }}>Ceramic Pro Elite</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/60 hover:text-white text-xs font-medium tracking-[0.12em] uppercase">Services</a>
          <a href="#gallery" className="text-white/60 hover:text-white text-xs font-medium tracking-[0.12em] uppercase">Gallery</a>
          <a href="#visit" className="text-white/60 hover:text-white text-xs font-medium tracking-[0.12em] uppercase">Visit</a>
          <a href="https://orbisx.ca/app/booknow/VSVJ5" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-xs px-5 py-2.5 rounded-sm tracking-[0.08em] uppercase" style={{ background: BLUE }}>Book Online</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex items-center overflow-hidden" style={{ height: "100vh", minHeight: 620 }}>
        <div className="absolute inset-0">
          <Image fill sizes="100vw" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1800&q=80" alt="Premium automotive detail" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg,rgba(8,14,26,0.94) 0%,rgba(8,14,26,0.65) 50%,rgba(8,14,26,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-[760px] px-10 ml-[6vw]" style={{ marginTop: 68 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-white font-bold text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm" style={{ background: BLUE }}>Ceramic Pro Elite Dealer</span>
            <span className="text-white/70 font-semibold text-[0.65rem] tracking-[0.12em] uppercase px-3 py-1.5 border border-white/12 rounded-sm bg-white/5"><span className="text-yellow-300 mr-1">★</span>4.7 · 686 Google Reviews</span>
          </div>
          <h1 className="font-display text-white leading-[0.9] mb-3" style={{ fontSize: "clamp(3.5rem,9vw,7rem)", letterSpacing: "0.03em" }}>
            CERAMIC PRO<br /><span style={{ color: BLUE }}>ELITE DEALER</span>
          </h1>
          <p className="text-white/65 text-base leading-[1.65] max-w-[540px] mb-9">
            686 reviews. Columbia&apos;s most trusted automotive appearance shop. Ceramic coating, PPF, tint, and full detailing — done right, every time.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://orbisx.ca/app/booknow/VSVJ5" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-xs px-9 py-3.5 rounded-sm tracking-[0.12em] uppercase" style={{ background: BLUE }}>Book Online</a>
            <a href="tel:4109882213" className="text-white font-semibold text-xs px-9 py-3.5 rounded-sm tracking-[0.12em] uppercase border border-white/30">Call (410) 988-2213</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="flex justify-center gap-16 px-8 py-5 flex-wrap" style={{ background: "#161F2E" }}>
        {["Ceramic Pro Elite Dealer", "686 Google Reviews · 4.7 Stars", "16 Services", "Columbia, MD"].map((item) => (
          <div key={item} className="flex items-center gap-2.5 text-white/60 text-xs font-medium tracking-[0.08em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: BLUE }} />
            {item}
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" className="py-22 bg-white">
        <div className="max-w-6xl mx-auto px-10 py-22" style={{ paddingTop: "5.5rem", paddingBottom: "5.5rem" }}>
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2" style={{ color: BLUE }}>What We Do</p>
          <h2 className="font-display leading-none mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: INK, letterSpacing: "0.04em" }}>Services &amp; Pricing</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[520px] mb-12">From express details to full ceramic coatings — clear starting prices, no guesswork.</p>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-md overflow-hidden">
            {[
              { name: "Express Detail", price: "Starting $89", dur: "~1.5 hrs", desc: "Hand wash, dry, tire dressing, interior vacuum and wipedown. In and out." },
              { name: "Premium Detail", price: "Starting $249", dur: "5–6 hrs", desc: "Full interior extraction, paint decontamination, clay bar, and hand wax. Full restoration detail." },
              { name: "Ceramic Coating", price: "Get Quote", dur: "1–2 days", desc: "Ceramic Pro Elite coating packages with multi-year warranty. Paint, glass, and wheel options." },
              { name: "Paint Protection Film", price: "Get Quote", dur: "1–2 days", desc: "Self-healing PPF and Ceramic Pro Shift color PPF. Partial or full-vehicle coverage." },
              { name: "Window Tint", price: "Starting $199", dur: "~2–3 hrs", desc: "Ceramic tint film, UV protection, heat rejection. Windshield protection film available." },
              { name: "Rim Repair & More", price: "Get Quote", dur: "Varies", desc: "Rim repair, leather repair, plastic dyeing, odor removal, mold remediation, and specialty services." },
            ].map((s) => (
              <div key={s.name} className="bg-white p-9 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-4" style={{ background: "rgba(37,99,235,0.08)" }}>
                  <svg className="w-5 h-5" fill="none" stroke={BLUE} strokeWidth={1.75} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div className="font-display text-2xl mb-2 leading-none" style={{ color: INK, letterSpacing: "0.04em" }}>{s.name}</div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-xl font-bold" style={{ color: BLUE }}>{s.price}</span>
                  <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-sm">{s.dur}</span>
                </div>
                <p className="text-gray-500 text-xs leading-[1.5]">{s.desc}</p>
                <a href="https://orbisx.ca/app/booknow/VSVJ5" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs font-bold tracking-[0.1em] uppercase" style={{ color: BLUE }}>Book →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <div className="grid md:grid-cols-2 min-h-[500px]">
        <div className="flex flex-col justify-center py-20 px-16" style={{ background: DARK }}>
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2 text-white/35">Who We Are</p>
          <h2 className="font-display text-white leading-none mb-5" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "0.04em" }}>Columbia&apos;s Detail Standard</h2>
          <p className="text-white/65 text-sm leading-[1.7] mb-4">
            Atomic Auto Salon earned Ceramic Pro Elite dealer status by doing the work right, every time. Not by running promotions. By showing up with the right tools, the right technique, and a zero-compromise standard on every vehicle that rolls through the bay.
          </p>
          <p className="text-white/65 text-sm leading-[1.7] mb-8">
            686 reviews — not from marketing, from results. Every coating, every PPF install, every detail is done with the same precision the rating reflects.
          </p>
          <div className="flex gap-10 pt-8 border-t border-white/10">
            {[{ val: "4.7★", label: "Google" }, { val: "686", label: "Reviews" }, { val: "16", label: "Services" }].map((s) => (
              <div key={s.label}>
                <div className="font-display text-[2.5rem] leading-none" style={{ color: BLUE }}>{s.val}</div>
                <div className="text-white/40 text-xs uppercase tracking-[0.15em] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[440px]">
          <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80" alt="Premium vehicle detail" className="object-cover" />
        </div>
      </div>

      {/* TEAM */}
      <section id="team" className="py-22" style={{ background: PAPER, paddingTop: "5.5rem", paddingBottom: "5.5rem" }}>
        <div className="max-w-6xl mx-auto px-10">
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2" style={{ color: BLUE }}>The Specialists</p>
          <h2 className="font-display leading-none mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: INK, letterSpacing: "0.04em" }}>Meet the Team</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[520px] mb-12">Every technician at Atomic Auto Salon is trained to the Ceramic Pro standard. Precision, not guesswork.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "James", role: "Lead Ceramic Tech & PPF Installer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
              { name: "Marcus", role: "Detail Specialist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
              { name: "Alex", role: "Tint Specialist", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
            ].map((m) => (
              <div key={m.name} className="overflow-hidden rounded-sm bg-white border border-gray-200">
                <div className="relative h-[300px]">
                  <Image fill sizes="33vw" src={m.img} alt={m.name} className="object-cover object-top" />
                </div>
                <div className="p-6">
                  <div className="font-display text-2xl leading-none mb-1" style={{ color: INK, letterSpacing: "0.04em" }}>{m.name}</div>
                  <div className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: BLUE }}>{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-22" style={{ background: "#111827", paddingTop: "5.5rem", paddingBottom: "5.5rem" }}>
        <div className="max-w-6xl mx-auto px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2 text-white/40">Client Reviews</p>
            <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "0.04em" }}>686 Reviews. One Standard.</h2>
            <div className="inline-flex items-center gap-4 border border-white/8 px-6 py-2.5 rounded-sm bg-white/4">
              <span className="font-display text-yellow-300 leading-none" style={{ fontSize: "2.25rem" }}>4.7★</span>
              <span className="text-white/35 text-xs uppercase tracking-[0.12em]">686 Google Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: '"Ceramic Pro on my BMW. The shine is unreal after a year — zero swirl marks, water beads off perfectly. Worth every penny."', author: "— Alex T." },
              { text: '"PPF install was immaculate. No bubbles, no lifting, no trim issues. Professional from drop-off to pickup. This team knows what they\'re doing."', author: "— Marcus D." },
              { text: '"Best detail shop in Maryland. I\'ve been to five different places in Howard County — nobody touches Atomic. The standard here is just different."', author: "— Justin K." },
            ].map((r) => (
              <div key={r.author} className="p-8 rounded-sm border border-white/7 bg-white/4">
                <div className="text-yellow-300 text-sm tracking-[0.1em] mb-4">★★★★★</div>
                <p className="text-white/75 text-sm leading-[1.65] italic mb-5">{r.text}</p>
                <div className="text-xs font-bold text-white/35 uppercase tracking-[0.15em]">{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <div id="visit" className="grid md:grid-cols-2 min-h-[420px]">
        <div className="relative min-h-[420px]">
          <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Atomic Auto Salon facility" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-white py-18 px-14" style={{ padding: "4.5rem 3.5rem" }}>
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2" style={{ color: BLUE }}>Find Us</p>
          <h2 className="font-display leading-none mb-6" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: INK, letterSpacing: "0.04em" }}>Visit the Shop</h2>
          <div className="space-y-6 mt-2">
            {[
              { label: "Address", val: "9050 Red Branch Rd Suite P\nColumbia, MD 21045" },
              { label: "Hours", val: "Mon–Fri  8:00 am – 5:30 pm\nSaturday  8:00 am – 5:00 pm\nSunday  Closed" },
              { label: "Phone", val: "(410) 988-2213", href: "tel:4109882213" },
              { label: "Email", val: "mail@atomicdetailing.com", href: "mailto:mail@atomicdetailing.com" },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-sm flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(37,99,235,0.08)" }}>
                  <svg className="w-4 h-4" fill="none" stroke={BLUE} strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.18em] uppercase mb-1" style={{ color: BLUE }}>{row.label}</div>
                  <div className="text-sm leading-[1.55]" style={{ color: INK }}>
                    {row.href ? <a href={row.href}>{row.val}</a> : row.val.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="https://orbisx.ca/app/booknow/VSVJ5" target="_blank" rel="noopener noreferrer" className="inline-block text-white font-bold text-xs px-9 py-3.5 rounded-sm tracking-[0.12em] uppercase" style={{ background: BLUE }}>Book Online</a>
          </div>
        </div>
      </div>

      {/* INSTAGRAM */}
      <section id="gallery" className="py-22" style={{ background: PAPER, paddingTop: "5.5rem", paddingBottom: "5.5rem" }}>
        <div className="max-w-6xl mx-auto px-10">
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-2" style={{ color: BLUE }}>On Instagram</p>
          <h2 className="font-display leading-none mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: INK, letterSpacing: "0.04em" }}>@ceramicpro_maryland</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[520px] mb-10">The work speaks. See every coating, every PPF install, every finished detail on Instagram.</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {[
              "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
              "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80",
              "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
              "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80",
              "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=80",
            ].map((src, i) => (
              <a key={i} href="https://instagram.com/ceramicpro_maryland" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" src={src} alt="Detail work" className="object-cover hover:scale-105 transition-transform duration-300" />
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="https://instagram.com/ceramicpro_maryland" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em] border-b-2 pb-px" style={{ color: INK, borderColor: BLUE }}>Follow @ceramicpro_maryland</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16" style={{ background: "#090F1A" }}>
        <div className="max-w-6xl mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-12 mb-10">
            <div>
              <div className="font-display text-2xl text-white tracking-[0.08em] mb-1">ATOMIC AUTO SALON</div>
              <div className="inline-block text-white/50 text-xs font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm mb-3" style={{ background: "rgba(37,99,235,0.2)" }}>Ceramic Pro Elite Dealer</div>
              <p className="text-white/35 text-xs leading-[1.65] max-w-[320px]">9050 Red Branch Rd Suite P, Columbia MD 21045. Columbia&apos;s most trusted automotive appearance shop. 686 reviews and counting.</p>
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/25 mb-4">Services</div>
              <ul className="space-y-2">
                {["Express Detail", "Premium Detail", "Ceramic Coating", "Paint Protection Film", "Window Tint"].map((s) => (
                  <li key={s}><a href="#services" className="text-white/45 text-xs hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/25 mb-4">Contact</div>
              <ul className="space-y-2">
                <li><a href="tel:4109882213" className="text-white/45 text-xs hover:text-white transition-colors">(410) 988-2213</a></li>
                <li><a href="mailto:mail@atomicdetailing.com" className="text-white/45 text-xs hover:text-white transition-colors">mail@atomicdetailing.com</a></li>
                <li><a href="https://orbisx.ca/app/booknow/VSVJ5" target="_blank" rel="noopener noreferrer" className="text-white/45 text-xs hover:text-white transition-colors">Book Online</a></li>
                <li><a href="https://instagram.com/ceramicpro_maryland" target="_blank" rel="noopener noreferrer" className="text-white/45 text-xs hover:text-white transition-colors">@ceramicpro_maryland</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/6 pt-6 flex flex-wrap justify-between gap-3">
            <span className="text-white/20 text-xs">© 2026 Atomic Auto Salon · Columbia, MD · Ceramic Pro Elite Dealer</span>
            <Link href="/" className="text-white/20 text-xs hover:text-white/50">← All previews</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
