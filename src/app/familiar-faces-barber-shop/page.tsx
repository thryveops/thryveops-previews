import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Familiar Faces Barber Shop — Columbia, MD" };

const ACCENT = "#1A2942";
const MAROON = "#7A1F2B";
const PAPER = "#FAFAF7";
const INK = "#0F1620";
const GOLD = "#C8A96E";

export default function FamiliarFacesBarberShop() {
  return (
    <div style={{ background: PAPER, color: INK }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10" style={{ background: ACCENT, height: 68 }}>
        <a href="#" className="font-display text-2xl text-white tracking-[0.08em]">
          FAMILIAR <span style={{ color: GOLD }}>FACES</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/75 hover:text-white text-xs font-medium tracking-[0.12em] uppercase">Services</a>
          <a href="#team" className="text-white/75 hover:text-white text-xs font-medium tracking-[0.12em] uppercase">Team</a>
          <a href="#visit" className="text-white/75 hover:text-white text-xs font-medium tracking-[0.12em] uppercase">Visit</a>
          <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-xs px-5 py-2.5 rounded-sm tracking-[0.08em]" style={{ background: MAROON }}>Book Now</a>
        </div>
        <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="md:hidden text-white font-semibold text-xs px-4 py-2 rounded-sm" style={{ background: MAROON }}>Book</a>
      </nav>

      {/* HERO */}
      <section className="relative flex items-center overflow-hidden" style={{ height: "100vh", minHeight: 600 }}>
        <div className="absolute inset-0">
          <Image fill sizes="100vw" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=80" alt="Barber at work" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg,rgba(10,16,28,0.88) 0%,rgba(10,16,28,0.55) 55%,rgba(10,16,28,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-[700px] px-10 ml-[6vw]" style={{ marginTop: 68 }}>
          <div className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm mb-5" style={{ background: MAROON }}>
            <span className="text-yellow-300">★★★★★</span> 4.7 · 109 Google Reviews
          </div>
          <h1 className="font-display text-white leading-[0.95] mb-5" style={{ fontSize: "clamp(3.5rem,8vw,6.5rem)", letterSpacing: "0.03em" }}>
            YOUR NEIGHBORHOOD<br /><span style={{ color: GOLD }}>BARBERSHOP</span>
          </h1>
          <p className="text-white/78 text-base leading-[1.6] max-w-[520px] mb-8">
            Familiar Faces. Columbia&apos;s community barbershop. 4.7 stars, 109 reviews, and a chair waiting for you.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-xs px-8 py-3.5 rounded-sm tracking-[0.1em] uppercase" style={{ background: MAROON }}>Book an Appointment</a>
            <a href="tel:4108166449" className="text-white font-semibold text-xs px-8 py-3.5 rounded-sm tracking-[0.1em] uppercase border-2 border-white/50">Call (410) 816-6449</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white" style={{ padding: "5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: MAROON }}>What We Offer</p>
          <h2 className="font-display leading-none mb-3" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", color: ACCENT, letterSpacing: "0.04em" }}>Services &amp; Pricing</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[560px] mb-12">Straight talk on what things cost. No surprises when you sit down.</p>
          <div className="grid md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-md overflow-hidden">
            {[
              { num: "01", name: "Classic Cut", price: "$28", dur: "30 min", desc: "Scissor or clipper cut, clean lines, finished with a hot towel neck shave." },
              { num: "02", name: "Fade", price: "$33", dur: "35 min", desc: "Skin, low, mid, or high fade — tight blend, clean taper, precise edgework." },
              { num: "03", name: "Beard Trim & Shape", price: "$18", dur: "20 min", desc: "Outline, shape, and detail. Straight razor lines on the edges." },
              { num: "04", name: "Kids Cut", price: "$22", dur: "30 min", desc: "Patient, calm, and clean. For kids 12 and under." },
            ].map((s) => (
              <div key={s.num} className="bg-white p-9 relative">
                <div className="font-display text-3xl mb-2 leading-none text-gray-200">{s.num}</div>
                <div className="font-display text-2xl mb-2 leading-none" style={{ color: ACCENT, letterSpacing: "0.04em" }}>{s.name}</div>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-xl font-bold" style={{ color: MAROON }}>{s.price}</span>
                  <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-sm">{s.dur}</span>
                </div>
                <p className="text-gray-500 text-xs leading-[1.5]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="inline-block text-white font-bold text-xs px-10 py-4 rounded-sm tracking-[0.1em] uppercase" style={{ background: ACCENT }}>Book Your Cut</a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <div className="grid md:grid-cols-2 min-h-[480px]">
        <div className="relative min-h-[420px]">
          <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80" alt="Inside Familiar Faces Barber Shop" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center py-16 px-14" style={{ background: ACCENT }}>
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>Our Story</p>
          <h2 className="font-display text-white leading-none mb-5" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "0.04em" }}>More Than a Haircut</h2>
          <p className="text-white/75 text-sm leading-[1.7] mb-4">
            Familiar Faces isn&apos;t just a barbershop — it&apos;s where the neighborhood checks in. You run into people you know. You get a chair that remembers your taper. You leave looking right and feeling good about it.
          </p>
          <p className="text-white/75 text-sm leading-[1.7] mb-6">
            109 reviews built entirely on reputation, not marketing. Columbia&apos;s community barbershop — and the chair is waiting.
          </p>
          <div className="flex gap-10 pt-6 border-t border-white/10">
            {[{ val: "4.7★", label: "Google Rating" }, { val: "109", label: "Reviews" }, { val: "3", label: "Expert Barbers" }].map((s) => (
              <div key={s.label}>
                <div className="font-display text-[2.5rem] leading-none" style={{ color: GOLD }}>{s.val}</div>
                <div className="text-white/50 text-xs uppercase tracking-[0.15em] font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <section id="team" style={{ background: PAPER, padding: "5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: MAROON }}>The Barbers</p>
          <h2 className="font-display leading-none mb-3" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", color: ACCENT, letterSpacing: "0.04em" }}>Meet the Team</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[560px] mb-12">Every barber at Familiar Faces takes the craft seriously. Book the one you want, return to the one you trust.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Darius", role: "Head Barber", bio: "Fades, tapers, and skin work. 8+ years behind the chair.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
              { name: "Marcus", role: "Senior Barber", bio: "Classic cuts, beard shaping, and kids' cuts. Known for keeping the little ones calm.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
              { name: "Tre", role: "Barber", bio: "Sharp lines, clean fades, detail-focused from start to finish.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
            ].map((m) => (
              <div key={m.name} className="overflow-hidden rounded-sm bg-white shadow-sm">
                <div className="relative h-[320px]">
                  <Image fill sizes="33vw" src={m.img} alt={m.name} className="object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(10,16,28,0.7) 0%,transparent 50%)" }} />
                </div>
                <div className="p-6">
                  <div className="font-display text-2xl leading-none mb-1" style={{ color: ACCENT, letterSpacing: "0.04em" }}>{m.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: MAROON }}>{m.role}</div>
                  <p className="text-gray-500 text-xs leading-[1.55] mb-4">{m.bio}</p>
                  <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.08em] border-b pb-px" style={{ color: ACCENT, borderColor: MAROON }}>Book {m.name} →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "#0F1620", padding: "5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>What People Say</p>
            <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", letterSpacing: "0.04em" }}>The Neighborhood Speaks</h2>
            <div className="inline-flex items-center gap-3 border border-white/10 px-5 py-2.5 rounded-sm bg-white/5">
              <span className="font-display text-yellow-300 leading-none" style={{ fontSize: "2rem" }}>4.7★</span>
              <span className="text-white/45 text-xs uppercase tracking-[0.1em]">109 Google Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: '"Best shop in Columbia. Darius is the man — my fade has been consistent for two years straight. I don\'t go anywhere else."', author: "— Matt C." },
              { text: '"Great vibes, great cuts. My son won\'t go anywhere else — Marcus keeps him laughing the whole time and the cut is always clean."', author: "— Joe T." },
              { text: '"Community feel you can\'t get at the chains. These barbers know your name. They know your fade. It\'s exactly what a barbershop should be."', author: "— Josiah R." },
            ].map((r) => (
              <div key={r.author} className="p-8 rounded-sm border border-white/8 bg-white/5">
                <div className="text-yellow-300 text-base mb-4">★★★★★</div>
                <p className="text-white/80 text-sm leading-[1.65] italic mb-5">{r.text}</p>
                <div className="text-xs font-bold text-white/45 uppercase tracking-[0.12em]">{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <div id="visit" className="grid md:grid-cols-2 min-h-[420px]">
        <div className="flex flex-col justify-center bg-white py-16 px-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: MAROON }}>Find Us</p>
          <h2 className="font-display leading-none mb-6" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", color: ACCENT, letterSpacing: "0.04em" }}>Come In</h2>
          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: MAROON }}>Address</div>
              <div className="text-sm leading-[1.5]" style={{ color: INK }}>6325 Woodside Ct #200<br />Columbia, MD 21046</div>
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: MAROON }}>Hours</div>
              <div className="text-sm leading-[1.5]" style={{ color: INK }}>Mon–Fri &nbsp; 9:00 am – 7:00 pm<br />Saturday &nbsp; 8:00 am – 5:00 pm<br />Sunday &nbsp; Closed</div>
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: MAROON }}>Phone</div>
              <a href="tel:4108166449" className="text-sm" style={{ color: INK }}>(410) 816-6449</a>
            </div>
          </div>
          <div className="mt-6">
            <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="inline-block text-white font-bold text-xs px-7 py-3.5 tracking-[0.1em] uppercase" style={{ background: MAROON }}>Book Online Now</a>
          </div>
        </div>
        <div className="relative min-h-[380px]">
          <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80" alt="Barbershop exterior" className="object-cover" />
        </div>
      </div>

      {/* INSTAGRAM */}
      <section style={{ background: PAPER, padding: "5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: MAROON }}>Follow Along</p>
          <h2 className="font-display leading-none mb-3" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", color: ACCENT, letterSpacing: "0.04em" }}>@familiarfacescolumbia</h2>
          <p className="text-gray-500 text-sm leading-[1.65] max-w-[560px] mb-10">Fresh cuts, familiar faces. Follow us on Instagram for daily reveals.</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {[
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
              "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
              "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
            ].map((src, i) => (
              <a key={i} href="https://instagram.com/familiarfacescolumbia" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" src={src} alt="Barbershop" className="object-cover hover:scale-105 transition-transform duration-300" />
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="https://instagram.com/familiarfacescolumbia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em]" style={{ color: ACCENT }}>@familiarfacescolumbia</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: ACCENT, padding: "3.5rem 2.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 pb-8 border-b border-white/8">
            <div>
              <div className="font-display text-2xl text-white tracking-[0.08em] mb-3">FAMILIAR <span style={{ color: GOLD }}>FACES</span></div>
              <p className="text-white/50 text-xs leading-[1.65] max-w-[300px]">Columbia&apos;s community barbershop. 6325 Woodside Ct #200, Columbia, MD 21046. Every chair. Every barber. Every cut — done right.</p>
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.18em] uppercase text-white/35 mb-4">Navigate</div>
              <ul className="space-y-2">
                {[["#services", "Services"], ["#team", "Team"], ["#visit", "Visit Us"], ["https://booksy.com", "Book Online"]].map(([href, label]) => (
                  <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-white/55 text-xs hover:text-white transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.18em] uppercase text-white/35 mb-4">Contact</div>
              <ul className="space-y-2">
                <li><a href="tel:4108166449" className="text-white/55 text-xs hover:text-white transition-colors">(410) 816-6449</a></li>
                <li><span className="text-white/55 text-xs">@familiarfacescolumbia</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
            <span className="text-white/30 text-xs">© 2026 Familiar Faces Barber Shop · Columbia, MD</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
