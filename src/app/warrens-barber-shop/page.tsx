import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Warren's Barber Shop — Columbia, MD",
  description: "Columbia's first Black-owned barbershop. Precision cuts, fades, and beard trims at 7290-I Cradlerock Way. 4.2 stars, 158 reviews. Book on Booksy.",
};

const ACCENT = "#1A2942";
const MAROON = "#7A1F2B";
const PAPER = "#FAFAF7";
const INK = "#0F1620";
const GOLD = "#C9A96E";

const services = [
  { name: "Classic Cut", desc: "Clean lines, scissor or clipper, finished with a straight razor", duration: "30 min", price: "$28" },
  { name: "Fade", desc: "High, mid, or low fade tailored to your head shape", duration: "35 min", price: "$33" },
  { name: "Beard Trim & Shape", desc: "Full beard lineup and shaping", duration: "20 min", price: "$18" },
  { name: "Kids Cut", desc: "Patient, precise, no fuss (12 & under)", duration: "30 min", price: "$22" },
];

const team = [
  { name: "Warren", role: "Owner & Master Barber", quote: "Been cutting in Columbia since before most of our clients were driving. Precision is the standard.", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Marcus", role: "Senior Barber", quote: "Trained under Warren for 6 years. Fades are his specialty — clean lines every time.", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Jordan", role: "Barber", quote: "New to the chair, old-school about the craft. Fresh talent, proven technique.", src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
];

const reviews = [
  { quote: "Best fades in Columbia, period. Been coming here for 6 years and Warren never misses. You show up, you leave looking right. Simple as that.", name: "James T." },
  { quote: "Took my son here for his first real haircut. Patient, professional, and the cut was perfect. He didn't cry once. We'll be back every month.", name: "David M." },
  { quote: "This shop has history. Real barbers, real craft. Don't sleep on Warren's — it's the kind of place you feel lucky to know about.", name: "Marcus L." },
];

const igPhotos = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=75",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=75",
  "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=400&q=75",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=75",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=75",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=75",
];

export default function Page() {
  return (
    <div style={{ backgroundColor: PAPER, color: INK }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: ACCENT, boxShadow: "0 2px 20px rgba(0,0,0,0.35)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl text-[#FAFAF7] tracking-[0.15em]">WARREN&apos;S</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-[#FAFAF7] hover:text-[#C9A96E] transition-colors">Services</a>
            <a href="#team" className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-[#FAFAF7] hover:text-[#C9A96E] transition-colors">Team</a>
            <a href="#visit" className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-[#FAFAF7] hover:text-[#C9A96E] transition-colors">Visit</a>
          </div>
          <a href="https://booksy.com" target="_blank" className="inline-block text-[#FAFAF7] font-bold text-[0.78rem] tracking-[0.1em] uppercase px-5 py-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: MAROON }}>
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative" style={{ height: "90vh", minHeight: 580, maxHeight: 820 }}>
        <div className="absolute inset-0">
          <Image fill sizes="100vw" className="object-cover" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=80" alt="Warren's Barber Shop" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,16,28,0.88) 40%, rgba(10,16,28,0.45) 100%)" }} />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: GOLD }}>Columbia, MD · Est. First</p>
            <h1 className="font-display text-[#FAFAF7] mb-4" style={{ fontSize: "clamp(4rem, 10vw, 8rem)", lineHeight: 0.92, letterSpacing: "0.02em" }}>
              COLUMBIA&apos;S<br />FIRST
            </h1>
            <p className="text-[#FAFAF7] mb-8 max-w-lg" style={{ fontSize: "1.15rem", lineHeight: 1.65, opacity: 0.88, fontWeight: 300 }}>
              The barbershop that built this neighborhood&apos;s reputation.<br />One cut at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://booksy.com" target="_blank" className="inline-block text-[#FAFAF7] font-bold text-[0.85rem] tracking-[0.1em] uppercase px-7 py-3 hover:opacity-90 transition-all" style={{ backgroundColor: MAROON }}>
                Book an Appointment
              </a>
              <a href="tel:4435830880" className="inline-block border-2 border-[#FAFAF7] text-[#FAFAF7] font-bold text-[0.85rem] tracking-[0.1em] uppercase px-7 py-3 hover:bg-[#FAFAF7] hover:text-[#0F1620] transition-all">
                Call (443) 583-0880
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: MAROON }}>The Work</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", letterSpacing: "0.02em", lineHeight: 1, color: ACCENT }}>
            Services & Pricing
          </h2>
          <div>
            {services.map((s, i) => (
              <div
                key={s.name}
                className="items-center gap-4 py-6 border-b border-[#E0DED8]"
                style={{ display: "grid", gridTemplateColumns: "1fr auto auto", borderTop: i === 0 ? "1px solid #E0DED8" : undefined }}
              >
                <div>
                  <p className="font-semibold" style={{ fontSize: "1.05rem", marginBottom: "0.25rem", color: INK }}>{s.name}</p>
                  <p className="text-[#5A5A5A] leading-relaxed" style={{ fontSize: "0.88rem" }}>{s.desc}</p>
                </div>
                <div className="text-right whitespace-nowrap">
                  <p className="font-medium text-[#7A7A7A]" style={{ fontSize: "0.82rem" }}>{s.duration}</p>
                </div>
                <div className="text-right whitespace-nowrap">
                  <p className="font-display tracking-[0.05em]" style={{ fontSize: "1.6rem", color: MAROON }}>{s.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="https://booksy.com" target="_blank" className="inline-block text-[#FAFAF7] font-bold text-[0.85rem] tracking-[0.1em] uppercase px-7 py-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: MAROON }}>
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24" style={{ backgroundColor: "#F2F0EC" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: MAROON }}>The Barbers</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", letterSpacing: "0.02em", lineHeight: 1, color: ACCENT }}>
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name}>
                <div className="relative mb-5 overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover object-top" src={m.src} alt={m.name} />
                </div>
                <p className="font-display mb-0.5" style={{ fontSize: "1.8rem", letterSpacing: "0.05em", lineHeight: 1, color: ACCENT }}>{m.name}</p>
                <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: MAROON }}>{m.role}</p>
                <p className="text-[#4A4A4A] italic leading-relaxed" style={{ fontSize: "0.88rem" }}>&ldquo;{m.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
          <div className="flex items-center" style={{ backgroundColor: ACCENT, padding: "5rem 3.5rem" }}>
            <div>
              <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: GOLD }}>Our History</p>
              <h2 className="font-display text-[#FAFAF7] mb-6" style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", letterSpacing: "0.02em", lineHeight: 1 }}>
                Columbia&apos;s<br />Original
              </h2>
              <p className="text-[#FAFAF7] leading-relaxed max-w-md" style={{ fontSize: "1rem", lineHeight: 1.75, opacity: 0.85 }}>
                Warren&apos;s Barber Shop opened as the first Black-owned barbershop in Columbia, MD — and has been the neighborhood&apos;s go-to ever since. Not because of marketing, but because the work speaks for itself.
              </p>
              <p className="text-[#FAFAF7] mt-4 max-w-md" style={{ fontSize: "1rem", lineHeight: 1.75, opacity: 0.85 }}>
                158 Google reviews don&apos;t happen by accident.
              </p>
            </div>
          </div>
          <div className="relative min-h-[400px] overflow-hidden">
            <Image fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80" alt="The shop" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: MAROON }}>What People Say</p>
          <div className="flex flex-wrap items-end gap-6 mb-12">
            <h2 className="font-display" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", letterSpacing: "0.02em", lineHeight: 1, color: ACCENT }}>Reviews</h2>
            <div style={{ paddingBottom: "0.6rem" }}>
              <span style={{ fontSize: "1.25rem", color: GOLD }}>★★★★★</span>
              <span className="font-bold ml-1" style={{ fontSize: "1rem", color: INK }}>4.2</span>
              <span className="ml-1" style={{ fontSize: "0.85rem", color: "#6A6A6A" }}>on Google · 158 reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white p-6" style={{ border: "1px solid #E0DED8" }}>
                <div className="mb-3" style={{ fontSize: "1rem", color: GOLD }}>★★★★★</div>
                <p className="leading-relaxed mb-4 text-[#2A2A2A]" style={{ fontSize: "0.92rem", lineHeight: 1.7 }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="font-semibold text-[#5A5A5A] tracking-[0.05em]" style={{ fontSize: "0.8rem" }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24" style={{ backgroundColor: "#F2F0EC" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: MAROON }}>Find Us</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", letterSpacing: "0.02em", lineHeight: 1, color: ACCENT }}>
            Come In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: MAROON }}>Address</p>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: INK }}>
                  7290-I Cradlerock Way<br />Columbia, MD 21045
                </p>
              </div>
              <div className="mb-8">
                <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: MAROON }}>Hours</p>
                <div className="grid gap-y-1.5 gap-x-6" style={{ gridTemplateColumns: "auto 1fr" }}>
                  <span className="font-semibold" style={{ fontSize: "0.92rem" }}>Mon – Fri</span>
                  <span className="text-[#4A4A4A]" style={{ fontSize: "0.92rem" }}>9:00 AM – 7:00 PM</span>
                  <span className="font-semibold" style={{ fontSize: "0.92rem" }}>Saturday</span>
                  <span className="text-[#4A4A4A]" style={{ fontSize: "0.92rem" }}>8:00 AM – 5:00 PM</span>
                  <span className="font-semibold" style={{ fontSize: "0.92rem" }}>Sunday</span>
                  <span className="text-[#9A9A9A]" style={{ fontSize: "0.92rem" }}>Closed</span>
                </div>
              </div>
              <div className="mb-10">
                <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: MAROON }}>Phone</p>
                <a href="tel:4435830880" className="font-bold hover:underline" style={{ fontSize: "1.2rem", color: MAROON }}>(443) 583-0880</a>
              </div>
              <a href="https://booksy.com" target="_blank" className="inline-block text-[#FAFAF7] font-bold text-[0.85rem] tracking-[0.1em] uppercase px-7 py-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: MAROON }}>
                Book Online
              </a>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80" alt="Warren's Barber Shop interior" />
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20" style={{ backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: MAROON }}>Follow the Work</p>
              <h3 className="font-display" style={{ fontSize: "2.2rem", letterSpacing: "0.05em", color: ACCENT }}>@warrens_barbershop</h3>
            </div>
            <a href="https://instagram.com/warrens_barbershop" target="_blank" className="font-bold tracking-[0.1em] uppercase hover:underline" style={{ fontSize: "0.82rem", color: MAROON }}>
              View on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {igPhotos.map((src, i) => (
              <a key={i} href="https://instagram.com/warrens_barbershop" target="_blank" className="aspect-square overflow-hidden relative block">
                <Image fill sizes="(max-width:768px) 33vw, 16vw" className="object-cover hover:scale-105 transition-transform duration-300" src={src} alt={`Cut ${i + 1}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pb-10" style={{ backgroundColor: ACCENT, paddingTop: "3.5rem" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
            <div>
              <p className="font-display text-[#FAFAF7] mb-3" style={{ fontSize: "2rem", letterSpacing: "0.15em" }}>WARREN&apos;S</p>
              <p className="text-[#FAFAF7] leading-relaxed" style={{ fontSize: "0.85rem", opacity: 0.65 }}>Columbia&apos;s first Black-owned barbershop.<br />Precision, community, craft.</p>
            </div>
            <div>
              <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: GOLD }}>Contact</p>
              <p className="text-[#FAFAF7] leading-relaxed" style={{ fontSize: "0.88rem", opacity: 0.8 }}>
                7290-I Cradlerock Way<br />
                Columbia, MD 21045<br />
                <a href="tel:4435830880" className="hover:underline" style={{ color: "rgba(255,255,255,0.8)" }}>(443) 583-0880</a>
              </p>
            </div>
            <div>
              <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: GOLD }}>Follow</p>
              <div className="flex gap-4">
                <a href="https://instagram.com/warrens_barbershop" target="_blank" className="font-semibold tracking-[0.08em] uppercase hover:underline" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)" }}>
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" className="font-semibold tracking-[0.08em] uppercase hover:underline" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)" }}>
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>&copy; 2026 Warren&apos;s Barber Shop. All rights reserved.</p>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>SITE BY THRYVE OPERATIONS</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
