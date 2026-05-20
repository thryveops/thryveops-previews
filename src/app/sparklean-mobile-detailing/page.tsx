import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sparklean Mobile Detailing — Ellicott City, MD",
  description: "Ellicott City's 5-star mobile detail service. Perfect 5.0 rating, 137 reviews. We come to your home or office. Book online.",
};

const DARK = "#1F2937";
const BLUE = "#1E88E5";
const PAPER = "#FAFAF7";
const INK = "#0F1620";

const services = [
  { name: "Express Wash & Vac", duration: "1.5 hours", price: "$89", desc: "Exterior hand wash, wheel cleaning, windows, interior vacuum and wipe-down.", featured: false },
  { name: "Interior Detail", duration: "2.5 hours", price: "$149", desc: "Deep vacuum, shampoo seats & carpet, leather conditioning, full interior wipe-down.", featured: false },
  { name: "Full Detail", duration: "4–5 hours", price: "$249", desc: "Complete exterior + interior detail. Everything included — the works.", featured: true },
  { name: "Ceramic Coating", duration: "Full day", price: "$399+", desc: "Professional-grade ceramic protection. Years of gloss and hydrophobic paint protection.", featured: false },
  { name: "Paint Correction", duration: "4–6 hours", price: "$299+", desc: "Remove swirl marks, light scratches, and oxidation. Paint restored to showroom clarity.", featured: false },
];

const team = [
  { name: "Malik", role: "Lead Detailer & Owner", bio: "Built Sparklean from scratch. Every 5-star review is personal.", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Tyler", role: "Detail Specialist", bio: "Exterior expert. Handles paint correction and ceramic coating prep.", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Dani", role: "Interior & Ceramic Tech", bio: "Interior specialist and certified ceramic coating applicator.", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
];

const reviews = [
  { quote: "Car looked better than the day I bought it. These guys are something else.", name: "Kevin L.", location: "Ellicott City", initial: "K" },
  { quote: "Got $1,500 more when I sold my car after a full detail. Paid for itself 6x over.", name: "James W.", location: "Columbia", initial: "J" },
  { quote: "My wife thought I bought her a new car. Best $249 I've ever spent.", name: "David R.", location: "Howard County", initial: "D" },
];

const galleryPhotos = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=80",
];

export default function Page() {
  return (
    <div style={{ backgroundColor: PAPER, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl text-white tracking-widest">SPARKLEAN</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors">Services</a>
            <a href="#gallery" className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors">Gallery</a>
            <a href="#team" className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors">Team</a>
            <a href="#reviews" className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors">Reviews</a>
            <a href="https://sparklean.square.site" target="_blank" className="text-white font-semibold text-sm py-2 px-5 rounded hover:opacity-90 transition-opacity uppercase tracking-wide" style={{ backgroundColor: BLUE }}>
              Book Now
            </a>
          </div>
          <a href="https://sparklean.square.site" target="_blank" className="md:hidden text-white font-semibold text-sm py-2 px-4 rounded uppercase" style={{ backgroundColor: BLUE }}>Book</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image fill sizes="100vw" className="object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80" alt="Car detailing" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,22,32,0.88) 50%, rgba(15,22,32,0.45))" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white rounded-full px-3 py-1 text-[0.8rem] font-bold tracking-wide" style={{ backgroundColor: BLUE }}>★ 5.0 — 137 Reviews</span>
              <span className="text-gray-300 text-sm">Ellicott City, MD</span>
            </div>
            <h1 className="font-display text-white leading-none mb-5" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", letterSpacing: "0.04em" }}>
              WE COME<br />TO YOU
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-md">
              Ellicott City&apos;s 5-star mobile detail service. Perfect rating. Perfect results. We work at your driveway.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://sparklean.square.site" target="_blank" className="inline-block text-white font-semibold text-sm py-3 px-8 rounded uppercase tracking-wide hover:opacity-90 transition-opacity" style={{ backgroundColor: BLUE }}>
                Book a Detail
              </a>
              <a href="tel:4073832899" className="inline-block border-2 border-white text-white font-semibold text-sm py-3 px-8 rounded uppercase tracking-wide hover:bg-white/10 transition-colors">
                Call (407) 383-2899
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: BLUE }}>What We Offer</p>
            <h2 className="font-display text-5xl" style={{ color: DARK }}>SERVICES & PRICING</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="rounded-lg p-6 hover:shadow-md transition-shadow" style={{ border: s.featured ? `2px solid ${BLUE}` : "1px solid #e5e7eb" }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: INK }}>{s.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{s.duration}</p>
                  </div>
                  <span className="font-display text-3xl" style={{ color: BLUE }}>{s.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                {s.featured && (
                  <span className="inline-block mt-3 text-xs font-semibold tracking-wide uppercase px-2 py-1 rounded text-white" style={{ backgroundColor: BLUE }}>Most Popular</span>
                )}
              </div>
            ))}
            <div className="rounded-lg p-6 flex flex-col items-center justify-center text-center" style={{ backgroundColor: DARK }}>
              <p className="font-display text-white text-2xl mb-3">READY?</p>
              <p className="text-gray-300 text-sm mb-5 leading-relaxed">We come to your home or office. Book online or call us directly.</p>
              <a href="https://sparklean.square.site" target="_blank" className="inline-block text-white font-semibold text-sm py-2 px-6 rounded uppercase tracking-wide hover:opacity-90 transition-opacity" style={{ backgroundColor: BLUE }}>
                Book a Detail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20" style={{ backgroundColor: "#F0F0EE" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: BLUE }}>The Work</p>
            <h2 className="font-display text-5xl" style={{ color: DARK }}>GALLERY</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryPhotos.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg relative">
                <Image fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" src={src} alt={`Detail work ${i + 1}`} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://www.instagram.com/sparkleanmd" target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: BLUE }}>
              See more on Instagram @sparkleanmd
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: BLUE }}>The Crew</p>
            <h2 className="font-display text-5xl" style={{ color: DARK }}>WHO DETAILS YOUR CAR</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto mb-4">
                  <Image fill sizes="144px" className="object-cover" src={m.src} alt={m.name} />
                </div>
                <h3 className="font-semibold text-lg" style={{ color: INK }}>{m.name}</h3>
                <p className="text-sm font-medium mt-1" style={{ color: BLUE }}>{m.role}</p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: BLUE }}>Our Story</p>
              <h2 className="font-display text-white leading-none mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                5 STARS,<br />EVERY TIME
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Sparklean started simple: great work, at your front door. No shop overhead, no waiting room — just a team that shows up and takes the work seriously.
              </p>
              <p className="text-gray-400 leading-relaxed">
                137 reviews later, the standard hasn&apos;t moved. A perfect 5.0 isn&apos;t a goal anymore — it&apos;s just how we operate.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="font-display text-4xl" style={{ color: BLUE }}>5.0</p>
                  <p className="text-gray-400 text-sm mt-1">Google Rating</p>
                </div>
                <div>
                  <p className="font-display text-4xl" style={{ color: BLUE }}>137</p>
                  <p className="text-gray-400 text-sm mt-1">Reviews</p>
                </div>
                <div>
                  <p className="font-display text-4xl" style={{ color: BLUE }}>0</p>
                  <p className="text-gray-400 text-sm mt-1">Missed Details</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-80">
              <Image fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80" alt="Detailing story" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: BLUE }}>Google Reviews</p>
            <h2 className="font-display text-5xl mb-3" style={{ color: DARK }}>WHAT CLIENTS SAY</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="font-semibold text-lg" style={{ color: INK }}>5.0</span>
              <span className="text-gray-500 text-sm">· 137 reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-gray-700 leading-relaxed italic mb-4">&ldquo;{r.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: BLUE }}>{r.initial}</div>
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

      {/* SERVICE AREA */}
      <section id="visit" className="py-20" style={{ backgroundColor: "#F0F0EE" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden h-80">
              <Image fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80" alt="Mobile service area" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: BLUE }}>Service Area</p>
              <h2 className="font-display text-5xl mb-6" style={{ color: DARK }}>WE COME TO YOU</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                No shop, no commute. We show up at your home, office, or wherever your car is parked and do the work right there.
              </p>
              <div className="space-y-3 mb-8">
                {["Ellicott City, MD", "Columbia, MD", "Surrounding Howard County", "By appointment — book online or call"].map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: BLUE }} />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <a href="tel:4073832899" className="inline-flex items-center gap-2 font-semibold text-lg" style={{ color: DARK }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (407) 383-2899
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: BLUE }}>Instagram</p>
              <h2 className="font-display text-5xl" style={{ color: DARK }}>@SPARKLEANMD</h2>
            </div>
            <a href="https://www.instagram.com/sparkleanmd" target="_blank" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold" style={{ color: BLUE }}>
              Follow us →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {galleryPhotos.map((src, i) => (
              <a key={i} href="https://www.instagram.com/sparkleanmd" target="_blank" className="aspect-square overflow-hidden rounded-lg relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" className="object-cover hover:opacity-80 transition-opacity" src={src} alt={`IG post ${i + 1}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="font-display text-white text-2xl tracking-widest mb-3">SPARKLEAN</p>
              <p className="text-gray-400 text-sm leading-relaxed">Ellicott City&apos;s 5-star mobile detail service. We come to you.</p>
            </div>
            <div>
              <p className="text-gray-300 text-sm font-semibold uppercase tracking-wide mb-3">Service Area</p>
              <p className="text-gray-400 text-sm leading-relaxed">Ellicott City · Columbia<br />Howard County, MD</p>
            </div>
            <div>
              <p className="text-gray-300 text-sm font-semibold uppercase tracking-wide mb-3">Contact</p>
              <a href="tel:4073832899" className="text-gray-400 text-sm hover:text-white block mb-1 transition-colors">(407) 383-2899</a>
              <a href="https://www.instagram.com/sparkleanmd" target="_blank" className="text-gray-400 text-sm hover:text-white block mb-1 transition-colors">@sparkleanmd</a>
              <a href="https://sparklean.square.site" target="_blank" className="text-gray-400 text-sm hover:text-white block transition-colors">Book Online</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">&copy; 2026 Sparklean Mobile Detailing. All rights reserved.</p>
            <a href="https://sparklean.square.site" target="_blank" className="inline-block text-white text-sm font-semibold py-2 px-5 rounded uppercase tracking-wide hover:opacity-90 transition-opacity" style={{ backgroundColor: BLUE }}>Book a Detail</a>
          </div>
        </div>
      </footer>

      <div className="py-6 text-center text-xs text-gray-400 bg-white">
        <Link href="/" className="hover:underline">← All previews</Link>
      </div>
    </div>
  );
}
