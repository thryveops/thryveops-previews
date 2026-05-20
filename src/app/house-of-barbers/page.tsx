import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "House of Barbers — Columbia, MD" };

const ACCENT = "#1A2942";
const MAROON = "#7A1F2B";
const PAPER = "#FAFAF7";
const INK = "#0F1620";

export default function HouseOfBarbers() {
  return (
    <div style={{ background: PAPER, color: INK }}>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50" style={{ background: ACCENT }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl text-white tracking-widest">HOUSE OF BARBERS</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-white transition-colors" style={{ color: "#A0ADBB" }}>Services</a>
            <a href="#team" className="text-sm font-medium hover:text-white transition-colors" style={{ color: "#A0ADBB" }}>Team</a>
            <a href="#visit" className="text-sm font-medium hover:text-white transition-colors" style={{ color: "#A0ADBB" }}>Visit</a>
          </div>
          <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="text-white text-xs font-semibold px-5 py-2.5 tracking-[0.1em] uppercase" style={{ background: MAROON }}>Book Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image fill sizes="100vw" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=80" alt="Barber at work" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(15,22,32,0.88) 0%,rgba(15,22,32,0.55) 55%,rgba(15,22,32,0.15) 100%)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: MAROON }} />
            <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#A0ADBB" }}>Columbia, MD · 4.7 Stars · 123 Reviews</p>
          </div>
          <h1 className="font-display text-7xl md:text-9xl text-white leading-none mb-6">
            THE HOUSE<br />OF BARBERS
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-xl leading-relaxed mb-10" style={{ color: "#B0BFCC" }}>
            Columbia&apos;s destination barbershop. Precision cuts, clean fades, no walk-in roulette — book your seat.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-xs px-7 py-3.5 tracking-[0.1em] uppercase" style={{ background: MAROON }}>Book an Appointment</a>
            <a href="tel:4107304247" className="text-white font-semibold text-xs px-7 py-3.5 tracking-[0.1em] uppercase border-2 border-white/30">Call (410) 730-4247</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: PAPER }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: MAROON }}>What We Do</p>
          <h2 className="font-display text-5xl md:text-6xl mb-14 leading-none" style={{ color: INK }}>Services &amp; Pricing</h2>
          <div className="border-t border-[#E2E6EC]">
            {[
              { name: "Classic Cut", dur: "30 min", price: "$28" },
              { name: "Fade", dur: "35 min", price: "$33" },
              { name: "Beard Trim & Shape", dur: "20 min", price: "$18" },
              { name: "Kids Cut", dur: "30 min", price: "$22" },
            ].map((s, i, arr) => (
              <div key={s.name} className={`flex items-center justify-between py-6 ${i < arr.length - 1 ? "border-b border-[#E2E6EC]" : ""}`}>
                <div>
                  <p className="text-xl font-semibold" style={{ color: INK }}>{s.name}</p>
                  <p className="text-sm mt-1" style={{ color: "#888" }}>{s.dur}</p>
                </div>
                <p className="font-display text-3xl" style={{ color: ACCENT }}>{s.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="inline-block text-white text-xs font-semibold px-7 py-3.5 tracking-[0.1em] uppercase" style={{ background: MAROON }}>Book via Booksy</a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24" style={{ background: "#E8EBF0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: MAROON }}>The Barbers</p>
          <h2 className="font-display text-5xl md:text-6xl mb-14 leading-none" style={{ color: INK }}>Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Marcus", role: "Head Barber", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
              { name: "Devon", role: "Senior Barber", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
              { name: "Tyrell", role: "Barber", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
            ].map((m) => (
              <div key={m.name} style={{ background: PAPER }}>
                <div className="aspect-[4/5] overflow-hidden relative">
                  <Image fill sizes="33vw" src={m.img} alt={m.name} className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-2xl font-bold" style={{ color: INK }}>{m.name}</p>
                  <p className="text-sm font-semibold mt-1" style={{ color: MAROON }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square overflow-hidden relative">
              <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80" alt="Barbershop interior" className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: MAROON }}>Our Story</p>
              <h2 className="font-display text-5xl md:text-6xl mb-6 leading-none" style={{ color: INK }}>BUILT ON CRAFT</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#555" }}>
                The House of Barbers opened on Centre Park Dr because there was a gap: a neighborhood needed a real barbershop. Not a chain. Not a walk-in mill. A shop where the barbers know their craft and the clients keep coming back.
              </p>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "#555" }}>
                123 reviews later, that gap is closed. We&apos;re the barbershop Columbia residents recommend to each other — for first haircuts, weekly fades, and everything in between.
              </p>
              <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="inline-block text-white text-xs font-semibold px-7 py-3.5 tracking-[0.1em] uppercase" style={{ background: MAROON }}>Book Your Cut</a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" style={{ background: ACCENT }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#8090A0" }}>What Clients Say</p>
            <div className="flex justify-center items-baseline gap-3 mb-2">
              <span className="font-display text-7xl text-white">4.7</span>
              <span className="text-2xl" style={{ color: "#C0882A" }}>★★★★★</span>
            </div>
            <p className="text-sm font-medium" style={{ color: "#8090A0" }}>Based on 123 Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: '"Best fades in Columbia — period."', author: "— James T." },
              { text: '"Took my son here for his first real cut. Patient and professional."', author: "— Marcus B." },
              { text: '"This is my barbershop. Clean shop, real barbers, every time."', author: "— DeShawn W." },
            ].map((r) => (
              <div key={r.author} className="p-8" style={{ background: "#0F1620" }}>
                <div className="text-lg mb-4" style={{ color: "#C0882A" }}>★★★★★</div>
                <p className="text-lg leading-relaxed mb-6 font-light" style={{ color: "#D0D8E0" }}>{r.text}</p>
                <p className="text-sm font-semibold" style={{ color: "#555" }}>{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: MAROON }}>Find Us</p>
              <h2 className="font-display text-5xl md:text-6xl mb-10 leading-none" style={{ color: INK }}>COME IN</h2>
              <div className="space-y-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#888" }}>Address</p>
                  <p className="font-medium text-lg" style={{ color: INK }}>8885 Centre Park Dr #D<br />Columbia, MD 21045</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#888" }}>Hours</p>
                  <div className="space-y-2" style={{ color: INK }}>
                    <div className="flex justify-between max-w-xs"><span>Mon – Fri</span><span className="font-semibold">9am – 7pm</span></div>
                    <div className="flex justify-between max-w-xs"><span>Saturday</span><span className="font-semibold">8am – 5pm</span></div>
                    <div className="flex justify-between max-w-xs"><span>Sunday</span><span className="font-semibold" style={{ color: "#888" }}>Closed</span></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#888" }}>Phone</p>
                  <a href="tel:4107304247" className="font-medium text-lg hover:underline" style={{ color: INK }}>(410) 730-4247</a>
                </div>
              </div>
              <div className="mt-10 flex gap-4">
                <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="inline-block text-white text-xs font-semibold px-7 py-3.5 tracking-[0.1em] uppercase" style={{ background: MAROON }}>Book on Booksy</a>
                <a href="tel:4107304247" className="inline-block text-xs font-semibold px-7 py-3.5 tracking-[0.1em] uppercase border border-[#1A2942]" style={{ color: ACCENT }}>Call Us</a>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden relative">
              <Image fill sizes="50vw" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80" alt="Barbershop" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-16" style={{ background: "#E8EBF0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: MAROON }}>Follow the Work</p>
              <h2 className="font-display text-4xl" style={{ color: INK }}>@houseofbarbers_columbia</h2>
            </div>
            <a href="https://www.instagram.com/houseofbarbers_columbia" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block text-xs font-semibold px-7 py-3.5 tracking-[0.1em] uppercase border border-[#1A2942]" style={{ color: ACCENT }}>Follow on Instagram</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
              "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
              "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
            ].map((src, i) => (
              <a key={i} href="https://www.instagram.com/houseofbarbers_columbia" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" src={src} alt="Barber" className="object-cover hover:scale-110 transition-transform duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16" style={{ background: "#0F1620" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="font-display text-3xl text-white mb-4 tracking-widest">HOUSE OF BARBERS</p>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5566" }}>Columbia&apos;s destination barbershop.<br />Precision cuts. Clean fades. Real barbers.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2A3A4A" }}>Visit</p>
              <p className="text-sm leading-relaxed" style={{ color: "#8090A0" }}>
                8885 Centre Park Dr #D<br />Columbia, MD 21045<br /><br />
                Mon–Fri: 9am–7pm<br />Sat: 8am–5pm<br />Sun: Closed
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2A3A4A" }}>Contact</p>
              <div className="space-y-3">
                <a href="tel:4107304247" className="block text-sm hover:text-white transition-colors" style={{ color: "#8090A0" }}>(410) 730-4247</a>
                <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-white transition-colors" style={{ color: "#8090A0" }}>Book on Booksy</a>
              </div>
              <div className="mt-6">
                <a href="https://booksy.com" target="_blank" rel="noopener noreferrer" className="inline-block text-white text-xs font-semibold px-5 py-2 tracking-[0.1em] uppercase" style={{ background: MAROON }}>Book Now</a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#1A2942] pt-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs" style={{ color: "#2A3A4A" }}>© 2026 House of Barbers. All rights reserved.</p>
            <Link href="/" className="text-xs hover:text-gray-400" style={{ color: "#2A3A4A" }}>← All previews</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
