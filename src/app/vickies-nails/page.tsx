import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Vickie's Nails — Columbia, MD",
  description: "Columbia's neighborhood nail salon on MD-108. Gel manicures, acrylics, pedicures, and nail art. 4.4 stars, 125 reviews.",
};

const ACCENT = "#9D5B4A";
const PINK = "#C9748A";
const PAPER = "#FFFCF9";
const INK = "#1A1A1A";

const services = [
  { name: "Gel Manicure", duration: "45 minutes", price: "$35", desc: "Gel color application with base, top coat, and nail shaping. Long-lasting finish.", featured: false },
  { name: "Acrylic Full Set", duration: "60 minutes", price: "$50", desc: "Full acrylic set with shaping, length of your choice, and color application.", featured: false },
  { name: "Classic Pedicure", duration: "45 minutes", price: "$35", desc: "Soak, exfoliation, cuticle care, massage, and polish. A proper pedicure.", featured: true },
  { name: "Gel Pedicure", duration: "60 minutes", price: "$45", desc: "Classic pedicure upgraded with long-wear gel color. Lasts 2–3 weeks.", featured: false },
  { name: "Nail Art", duration: "15–30 min add-on", price: "$15+", desc: "Custom designs, ombre, chrome, florals, and more. Priced per nail or full set.", featured: false },
];

const team = [
  { name: "Vickie", role: "Owner & Senior Nail Tech", bio: "Built this salon one regular client at a time. The standard is set by Vickie.", src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80" },
  { name: "Maria", role: "Nail Tech", bio: "Acrylic sets, gel manicures, and nail art. Detail-oriented and fast.", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Sophia", role: "Nail Tech", bio: "Pedicure specialist with a particular talent for nail art and ombre finishes.", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
];

const reviews = [
  { quote: "Best gel manicures in Columbia. The shape is always perfect and it lasts forever.", name: "Lauren T.", location: "Columbia", initial: "L" },
  { quote: "Found this looking for a salon near home. So glad I did — I haven't been anywhere else since.", name: "Nina B.", location: "Columbia", initial: "N" },
  { quote: "My go-to for pedicures. Never rushed, always thorough. Vickie remembers me every time.", name: "Diane M.", location: "Columbia", initial: "D" },
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
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: PAPER, borderColor: "#EDE8E4" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-semibold" style={{ color: INK }}>Vickie&apos;s Nails</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Services</a>
            <a href="#gallery" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Gallery</a>
            <a href="#team" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Team</a>
            <a href="#visit" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Visit</a>
            <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white text-sm font-semibold py-2 px-5 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>
              Book Now
            </a>
          </div>
          <a href="https://www.vagaro.com" target="_blank" className="md:hidden inline-block text-white text-sm font-semibold py-2 px-4 rounded" style={{ backgroundColor: ACCENT }}>Book</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "92vh" }}>
        <div className="absolute inset-0">
          <Image fill sizes="100vw" className="object-cover" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1800&q=80" alt="Nail salon" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.35) 100%)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white rounded-full px-3 py-1 text-xs font-semibold tracking-wide" style={{ backgroundColor: PINK }}>★ 4.4 · 125 Reviews</span>
              <span className="text-gray-200 text-sm">Columbia, MD</span>
            </div>
            <h1 className="font-display text-white leading-tight mb-5" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
              VICKIE&apos;S<br />NAILS
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-md">
              Columbia&apos;s neighborhood nail salon. 125 reviews, every client treated like a regular.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white font-semibold text-sm py-3 px-7 rounded hover:opacity-90 transition-opacity tracking-wide" style={{ backgroundColor: ACCENT }}>
                Book an Appointment
              </a>
              <a href="tel:4109978898" className="inline-block border-2 border-white text-white font-semibold text-sm py-3 px-7 rounded hover:bg-white/10 transition-colors tracking-wide">
                Call (410) 997-8898
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: PINK }}>What We Offer</p>
            <h2 className="font-display text-4xl font-semibold" style={{ color: INK }}>Services & Pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl p-6 hover:shadow-md transition-shadow" style={{ border: s.featured ? `1px solid ${PINK}` : "1px solid #EDE8E4" }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-base" style={{ color: INK }}>{s.name}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{s.duration}</p>
                  </div>
                  <span className="font-display text-2xl font-bold" style={{ color: ACCENT }}>{s.price}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                {s.featured && (
                  <span className="inline-block mt-3 text-white text-xs font-semibold tracking-wide rounded-full px-3 py-1" style={{ backgroundColor: PINK }}>Most Requested</span>
                )}
              </div>
            ))}
            <div className="rounded-xl p-6 flex flex-col items-center justify-center text-center" style={{ backgroundColor: ACCENT }}>
              <p className="font-display text-white text-2xl font-semibold mb-2">Ready to book?</p>
              <p className="text-white/80 text-sm mb-5 leading-relaxed">Book online in 60 seconds or give us a call.</p>
              <a href="https://www.vagaro.com" target="_blank" className="inline-block bg-white text-sm font-semibold py-2 px-5 rounded hover:opacity-90 transition-opacity" style={{ color: ACCENT }}>
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20" style={{ backgroundColor: "#F5E6E0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: PINK }}>The Work</p>
            <h2 className="font-display text-4xl font-semibold" style={{ color: INK }}>Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {igPhotos.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl relative">
                <Image fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" src={src} alt={`Nail work ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: PINK }}>The Team</p>
            <h2 className="font-display text-4xl font-semibold" style={{ color: INK }}>Who Does Your Nails</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto mb-4">
                  <Image fill sizes="144px" className="object-cover" src={m.src} alt={m.name} />
                </div>
                <h3 className="font-semibold text-lg" style={{ color: INK }}>{m.name}</h3>
                <p className="text-sm font-medium mt-1" style={{ color: PINK }}>{m.role}</p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden h-80">
              <Image fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80" alt="Vickie's Columbia" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#E8A4B0" }}>Our Story</p>
              <h2 className="font-display text-white font-semibold leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                Vickie&apos;s Columbia
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Vickie&apos;s has been the neighborhood nail spot on MD-108 for years — not because of marketing, but because the work is consistent and the care is real.
              </p>
              <p className="text-white/70 leading-relaxed">
                125 clients left a review. Most regulars never do. That&apos;s the kind of loyalty that doesn&apos;t come from advertising — it comes from doing the work right, every time.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="font-display text-4xl font-bold text-white">4.4</p>
                  <p className="text-white/60 text-sm mt-1">Google Stars</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-white">125</p>
                  <p className="text-white/60 text-sm mt-1">Reviews</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-white">MD-108</p>
                  <p className="text-white/60 text-sm mt-1">Columbia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: PINK }}>Google Reviews</p>
            <h2 className="font-display text-4xl font-semibold mb-3" style={{ color: INK }}>What Clients Say</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★</span>
              <span className="text-yellow-300 text-xl">★</span>
              <span className="font-semibold text-lg" style={{ color: INK }}>4.4</span>
              <span className="text-gray-400 text-sm">· 125 reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white border rounded-xl p-6 shadow-sm" style={{ borderColor: "#EDE8E4" }}>
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-gray-600 leading-relaxed italic mb-4">&ldquo;{r.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: PINK }}>{r.initial}</div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: INK }}>{r.name}</p>
                    <p className="text-xs text-gray-400">{r.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20" style={{ backgroundColor: "#F5E6E0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: PINK }}>Find Us</p>
              <h2 className="font-display text-4xl font-semibold mb-6" style={{ color: INK }}>Visit Vickie&apos;s</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: INK }}>Address</p>
                    <p className="text-gray-600 text-sm">9170 MD-108, Columbia, MD 21045</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: INK }}>Hours</p>
                    <p className="text-gray-600 text-sm">Mon–Fri 10am–7pm</p>
                    <p className="text-gray-600 text-sm">Saturday 9am–6pm</p>
                    <p className="text-gray-600 text-sm">Sunday 11am–5pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: INK }}>Phone</p>
                    <a href="tel:4109978898" className="text-sm hover:underline" style={{ color: ACCENT }}>(410) 997-8898</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white font-semibold text-sm py-3 px-6 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Book Online</a>
                <a href="tel:4109978898" className="inline-block border-2 font-semibold text-sm py-3 px-6 rounded hover:opacity-80 transition-opacity" style={{ borderColor: ACCENT, color: ACCENT }}>Call Us</a>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-80">
              <Image fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=900&q=80" alt="Salon" />
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: PINK }}>Follow Along</p>
              <h2 className="font-display text-4xl font-semibold" style={{ color: INK }}>@vickiesnails_columbia</h2>
            </div>
            <a href="https://instagram.com/vickiesnails_columbia" target="_blank" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: ACCENT }}>
              Follow us →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <a key={i} href="https://instagram.com/vickiesnails_columbia" target="_blank" className="aspect-square overflow-hidden rounded-xl relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" className="object-cover hover:opacity-80 transition-opacity" src={src} alt={`IG post ${i + 1}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="font-display text-white text-xl font-semibold mb-3">Vickie&apos;s Nails</p>
              <p className="text-gray-400 text-sm leading-relaxed">Columbia&apos;s neighborhood nail salon on MD-108.</p>
            </div>
            <div>
              <p className="text-gray-300 text-sm font-semibold uppercase tracking-wide mb-3">Hours</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mon–Fri · 10am–7pm<br />
                Saturday · 9am–6pm<br />
                Sunday · 11am–5pm
              </p>
            </div>
            <div>
              <p className="text-gray-300 text-sm font-semibold uppercase tracking-wide mb-3">Contact</p>
              <a href="tel:4109978898" className="text-gray-400 text-sm hover:text-white block mb-1 transition-colors">(410) 997-8898</a>
              <p className="text-gray-400 text-sm mb-1">9170 MD-108, Columbia, MD 21045</p>
              <a href="https://www.vagaro.com" target="_blank" className="text-gray-400 text-sm hover:text-white block transition-colors">Book Online</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">&copy; 2026 Vickie&apos;s Nails. All rights reserved.</p>
            <a href="https://www.vagaro.com" target="_blank" className="inline-block text-white text-sm font-semibold py-2 px-5 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Book an Appointment</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
