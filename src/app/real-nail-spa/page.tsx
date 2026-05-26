import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Real Nail Spa — Columbia, MD",
  description: "Columbia's highest-rated nail spa. 4.9 stars, 134 reviews. Gel manicures, acrylics, pedicures, and nail art at 6365 Dobbin Rd.",
};

const ACCENT = "#9D5B4A";
const PINK = "#C9748A";
const PAPER = "#FFFCF9";
const INK = "#1A1A1A";

const services = [
  { name: "Gel Manicure", duration: "45 min", price: "$35" },
  { name: "Acrylic Full Set", duration: "60 min", price: "$50" },
  { name: "Classic Pedicure", duration: "45 min", price: "$35" },
  { name: "Gel Pedicure", duration: "60 min", price: "$45" },
  { name: "Nail Art", duration: "15–30 min", price: "From $15" },
];

const team = [
  { name: "Lily", role: "Lead Nail Tech", src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80" },
  { name: "Mia", role: "Senior Nail Tech", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" },
  { name: "Chloe", role: "Nail Tech", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80" },
];

const reviews = [
  { quote: "Every time I come in, my nails look better than I imagined.", name: "Sarah K." },
  { quote: "Best nail salon in Columbia, hands down.", name: "Amanda R." },
  { quote: "4.9 stars is earned. Never missed in 2 years.", name: "Priya M." },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80",
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
];

export default function Page() {
  return (
    <div style={{ backgroundColor: PAPER, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: PAPER, borderColor: "#F0E0DB" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-lg font-bold tracking-wide" style={{ color: INK }}>REAL NAIL SPA</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-[#555] hover:text-[#9D5B4A] transition-colors">Services</a>
            <a href="#gallery" className="text-sm font-medium text-[#555] hover:text-[#9D5B4A] transition-colors">Gallery</a>
            <a href="#visit" className="text-sm font-medium text-[#555] hover:text-[#9D5B4A] transition-colors">Visit</a>
          </div>
          <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image fill sizes="100vw" className="object-cover" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1800&q=80" alt="Nail spa close-up" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(26,26,26,0.72) 0%, rgba(26,26,26,0.38) 60%, rgba(26,26,26,0.1) 100%)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#F5E6E0] mb-4">Columbia, MD · 4.9 Stars</p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight">
            NAILS DONE<br />RIGHT
          </h1>
          <p className="text-[#F5E6E0] text-xl md:text-2xl font-light max-w-xl leading-relaxed mb-10">
            Columbia&apos;s highest-rated nail spa. 4.9 stars, 134 reviews, and not a single one you didn&apos;t earn.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white font-semibold tracking-widest uppercase text-sm px-7 py-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>
              Book an Appointment
            </a>
            <a href="tel:4107159999" className="inline-block font-semibold tracking-widest uppercase text-sm px-7 py-3 transition-all" style={{ border: "1.5px solid #F5E6E0", color: "#F5E6E0" }}>
              Call (410) 715-9999
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT }}>What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-14" style={{ color: INK }}>Services & Pricing</h2>
          <div className="border-t border-[#F0E0DB]">
            {services.map((s) => (
              <div key={s.name} className="flex items-center justify-between py-6 border-b border-[#F0E0DB]">
                <div>
                  <p className="font-display text-xl font-semibold" style={{ color: INK }}>{s.name}</p>
                  <p className="text-sm text-[#888] mt-1">{s.duration}</p>
                </div>
                <p className="font-display text-2xl font-bold" style={{ color: ACCENT }}>{s.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white font-semibold tracking-widest uppercase text-sm px-7 py-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24" style={{ backgroundColor: "#F5E6E0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT }}>The Team</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-14" style={{ color: INK }}>Meet Your Nail Techs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} style={{ backgroundColor: PAPER }}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" src={m.src} alt={m.name} />
                </div>
                <div className="p-6">
                  <p className="font-display text-2xl font-semibold" style={{ color: INK }}>{m.name}</p>
                  <p className="text-sm font-medium mt-1" style={{ color: ACCENT }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT }}>Our Story</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: INK }}>
                4.9 Stars Speaks<br />for Itself
              </h2>
              <p className="text-[#555] text-lg leading-relaxed mb-6">
                Real Nail Spa has been Columbia&apos;s best-kept secret for years. Tucked into Dobbin Rd, we&apos;ve built our reputation the only way that matters — one client, one appointment, one set of nails at a time.
              </p>
              <p className="text-[#555] text-lg leading-relaxed mb-10">
                134 Google reviews and a 4.9-star rating aren&apos;t a marketing achievement. They&apos;re a record of the work. Every review is a client who left satisfied enough to write about it.
              </p>
              <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white font-semibold tracking-widest uppercase text-sm px-7 py-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>
                Book Your Visit
              </a>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80" alt="Nail spa interior" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#F5E6E0] mb-3">What Clients Say</p>
            <div className="flex justify-center items-baseline gap-3 mb-2">
              <span className="font-display text-6xl font-black text-white">4.9</span>
              <span className="text-[#F5E6E0] text-xl">★★★★★</span>
            </div>
            <p className="text-[#F5E6E0] text-sm font-medium">Based on 134 Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="p-8" style={{ backgroundColor: PAPER }}>
                <div className="flex gap-1 mb-4">
                  <span className="text-lg" style={{ color: PINK }}>★★★★★</span>
                </div>
                <p className="font-display text-lg leading-relaxed mb-6" style={{ color: INK }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[#888]">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80" alt="Nail salon interior" />
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT }}>Find Us</p>
              <h2 className="font-display text-4xl font-bold mb-8" style={{ color: INK }}>Come Visit</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-1">Address</p>
                  <p className="font-medium" style={{ color: INK }}>6365 Dobbin Rd<br />Columbia, MD 21045</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-2">Hours</p>
                  <div className="space-y-1" style={{ color: INK }}>
                    <div className="flex justify-between max-w-xs"><span>Mon – Fri</span><span className="font-medium">10am – 7pm</span></div>
                    <div className="flex justify-between max-w-xs"><span>Saturday</span><span className="font-medium">9am – 6pm</span></div>
                    <div className="flex justify-between max-w-xs"><span>Sunday</span><span className="font-medium">11am – 5pm</span></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-1">Phone</p>
                  <a href="tel:4107159999" className="font-medium hover:underline transition-colors" style={{ color: INK }}>(410) 715-9999</a>
                </div>
              </div>
              <div className="mt-10">
                <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white font-semibold tracking-widest uppercase text-sm px-7 py-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="gallery" className="py-16" style={{ backgroundColor: "#F5E6E0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase mb-1" style={{ color: ACCENT }}>Follow Along</p>
              <h2 className="font-display text-3xl font-bold" style={{ color: INK }}>@real_nailspa</h2>
            </div>
            <a href="https://www.instagram.com/real_nailspa" target="_blank" className="hidden md:inline-block border font-semibold tracking-widest uppercase text-xs px-5 py-3 transition-all hover:opacity-80" style={{ borderColor: ACCENT, color: ACCENT }}>
              Follow on Instagram
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <a key={i} href="https://www.instagram.com/real_nailspa" target="_blank" className="aspect-square overflow-hidden relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" className="object-cover hover:scale-110 transition-transform duration-500" src={src} alt={`Nail work ${i + 1}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="font-display text-2xl font-bold text-white mb-4">REAL NAIL SPA</p>
              <p className="text-[#888] text-sm leading-relaxed">Columbia&apos;s highest-rated nail spa.<br />4.9 stars. 134 reviews. Earned one at a time.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#555] mb-4">Visit</p>
              <p className="text-[#aaa] text-sm leading-relaxed">
                6365 Dobbin Rd<br />
                Columbia, MD 21045<br /><br />
                Mon–Fri: 10am–7pm<br />
                Sat: 9am–6pm<br />
                Sun: 11am–5pm
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#555] mb-4">Connect</p>
              <div className="space-y-3">
                <a href="tel:4107159999" className="block text-[#aaa] text-sm hover:text-white transition-colors">(410) 715-9999</a>
                <a href="https://www.instagram.com/real_nailspa" target="_blank" className="block text-[#aaa] text-sm hover:text-white transition-colors">Instagram @real_nailspa</a>
                <a href="https://www.facebook.com/realnailspa123" target="_blank" className="block text-[#aaa] text-sm hover:text-white transition-colors">Facebook @realnailspa123</a>
              </div>
              <div className="mt-6">
                <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] pt-8 text-center">
            <p className="text-[#555] text-xs">&copy; 2026 Real Nail Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
