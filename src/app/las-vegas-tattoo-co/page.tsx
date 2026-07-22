import Image from "next/image";
import Link from "next/link";
import ConsultFlow from "./ConsultFlow";

// ─── Doc Dog's Las Vegas Tattoo Co. — Ybor City, Tampa ────────────────────────
// Concept mockup by Thryve Operations. Track B greenfield build.
// All photos are the prospect's own GMB shots at /images/las-vegas-tattoo-co/.

const BUSINESS_NAME = "Las Vegas Tattoo Co.";
const FULL_NAME = "Doc Dog's Las Vegas Tattoo Co.";

// Tattoo palette — near-black + crimson (their red-neon-on-black storefront)
const BG1 = "#0A0A0A";
const BG2 = "#111111";
const CARD = "#1A1A1A";
const BORDER = "#2A2A2A";
const T2 = "#A0A0A0";
const ACCENT = "#C0392B";

const PHONE_FORMATTED = "(813) 248-3004";
const PHONE_HREF = "tel:+18132483004";
const ADDRESS_LINE_1 = "1829 E 7th Ave";
const ADDRESS_LINE_2 = "Ybor City, Tampa, FL 33605";
const DIRECTIONS_URL = "https://maps.google.com/?q=Las+Vegas+Tattoo+Co+1829+E+7th+Ave+Tampa+FL+33605";
const INSTAGRAM_HANDLE = "lasvegastattoocoybor";
const FACEBOOK_HANDLE = "LasVegasTattooCo";
const AVG_RATING = "4.7";
const REVIEW_COUNT = "435";

export const metadata = {
  title: "Doc Dog's Las Vegas Tattoo Co. — Tattoo & Piercing in Ybor City, Tampa",
  description:
    "Family-run tattoo and piercing shop on 7th Ave in Ybor City since 2003. Founder Tony \"Doc Dog\" Baker opened the first Las Vegas tattoo parlor in 1977 — and once tattooed Cher. Walk-ins welcome.",
};

// Honest tattoo-shop offerings — consult-for-quote, no invented prices.
const services = [
  {
    name: "Custom Tattoos",
    desc: "Bring your idea or reference images — the artists draw it up and quote it in person. Every custom piece starts with a free consultation.",
    price: "Consult for quote",
  },
  {
    name: "Walk-in Flash",
    desc: "Classic flash off the wall, done same-day. First come, first served — the Ybor way since 2003.",
    price: "Ask in shop",
  },
  {
    name: "Fine-line & Script",
    desc: "Delicate single-needle florals, lettering, and minimal pieces that heal clean.",
    price: "Consult for quote",
  },
  {
    name: "Black & Grey",
    desc: "Smooth shading and realism — portraits, wildlife, and large-scale work built over sessions.",
    price: "Consult for quote",
  },
  {
    name: "Color & Neo-traditional",
    desc: "Bold, saturated color work that holds up for decades. Doc Dog has been proving it since 1977.",
    price: "Consult for quote",
  },
  {
    name: "Piercings by Belle",
    desc: "Gentle, patient, and repeatedly review-praised by first-timers. Quality jewelry in the case, sterile technique every time.",
    price: "Priced by piercing + jewelry",
  },
];

// Real family — no public face photos exist, so monogram cards, never stock faces.
const team = [
  {
    initials: "TB",
    name: 'Tony "Doc Dog" Baker',
    role: "Founder & Artist",
    bio: "Tattooing for six decades. Opened the first Las Vegas tattoo parlor in 1977, tattooed Cher, and has run this shop on 7th Ave since 2003.",
  },
  {
    initials: "B",
    name: "Belle",
    role: "Piercer",
    bio: "The calm hands behind every piercing in the shop. First-timers ask for her by name — the reviews will tell you why.",
  },
  {
    initials: "C",
    name: "Colt",
    role: "Artist",
    bio: "Second-generation ink. Raised in the shop, carrying the family craft into its next era with a modern range of styles.",
  },
];

// Gallery — the shop's own healed work, straight from their Google listing.
const gallery = [
  { src: "/images/las-vegas-tattoo-co/gmb-3.jpg", alt: "Fine-line butterfly and sunflower forearm tattoo" },
  { src: "/images/las-vegas-tattoo-co/gmb-4.jpg", alt: "Black and grey shark leg tattoo" },
  { src: "/images/las-vegas-tattoo-co/gmb-6.jpg", alt: "Blackwork dove hand tattoo" },
  { src: "/images/las-vegas-tattoo-co/gmb-7.jpg", alt: "Neo-traditional color tattoo of a woman with devil hand" },
  { src: "/images/las-vegas-tattoo-co/gmb-8.jpg", alt: "We The People script biceps tattoo" },
];

const reviews = [
  {
    text: "Drama-free, friendly shop with endless quality. You can tell the second you walk in that these people have been doing this forever.",
    author: "Google review",
  },
  {
    text: "Belle did my first piercing and was so sweet and comforting the whole time. Soft hands, clean setup, zero stress.",
    author: "Google review",
  },
  {
    text: "The whole staff is personable, professional, and inviting. A real family shop in the middle of Ybor — not a tourist trap.",
    author: "Google review",
  },
];

const hours = [
  { day: "Monday", time: "12 PM – 8 PM" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "12 PM – 9 PM" },
  { day: "Thursday", time: "12 PM – 9 PM" },
  { day: "Friday", time: "12 PM – 10 PM" },
  { day: "Saturday", time: "12 PM – 10 PM" },
  { day: "Sunday", time: "12 PM – 9 PM" },
];

export default function MockupPage() {
  return (
    <div className="font-sans antialiased text-white" style={{ background: BG1 }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b backdrop-blur"
        style={{ background: "rgba(10,10,10,0.92)", borderColor: BORDER }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#" className="font-display text-lg md:text-xl font-bold tracking-tight leading-tight">
            <span style={{ color: ACCENT }}>Las Vegas</span> Tattoo Co.
            <span className="ml-2 hidden text-[10px] font-normal uppercase tracking-[0.25em] md:inline" style={{ color: T2 }}>
              Ybor City
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#work" className="transition-opacity hover:opacity-60">The Work</a>
            <a href="#artists" className="transition-opacity hover:opacity-60">Artists</a>
            <a href="#story" className="transition-opacity hover:opacity-60">Story</a>
            <a href="#visit" className="transition-opacity hover:opacity-60">Visit</a>
            <a
              href={PHONE_HREF}
              className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book a Consultation
            </a>
          </div>
          <a
            href={PHONE_HREF}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white md:hidden"
            style={{ background: ACCENT }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO — their own neon storefront at night ─────────────────────── */}
      <section className="relative flex h-[88vh] min-h-[580px] items-center justify-center overflow-hidden text-center">
        <Image
          src="/images/las-vegas-tattoo-co/gmb-1.jpg"
          alt="Las Vegas Tattoo Co. neon storefront at night in Ybor City"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.94) 100%)" }}
        />
        <div className="relative z-10 max-w-3xl px-5">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/70 md:text-sm">
            Ybor City &middot; Est. 2003 &middot; Family Owned
          </p>
          <h1 className="font-display mb-6 text-5xl font-bold leading-[1.02] md:text-7xl">
            Six decades of ink.{" "}
            <span className="italic font-normal" style={{ color: ACCENT }}>
              One shop on 7th Ave.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            Tony &ldquo;Doc Dog&rdquo; Baker opened the first tattoo parlor in Las Vegas in 1977 — and
            once tattooed Cher. Today the family works out of Ybor City. Walk-ins welcome.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full px-8 py-4 font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              See the Work
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="tracking-wider" style={{ color: ACCENT }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews</span>
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ───────────────────────────────────────────────────── */}
      <section className="border-b px-5 py-14 md:px-8" style={{ background: BG2, borderColor: BORDER }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>1977</p>
            <p className="mt-1 text-sm" style={{ color: T2 }}>First tattoo parlor in Las Vegas — founded by Doc Dog himself</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>23 years</p>
            <p className="mt-1 text-sm" style={{ color: T2 }}>In the heart of Ybor City, same family, same address</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>Walk-ins</p>
            <p className="mt-1 text-sm" style={{ color: T2 }}>Always welcome — open until 10 PM Fridays and Saturdays</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
              What We Do
            </p>
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">Tattoos &amp; Piercings</h2>
            <p className="mx-auto max-w-xl" style={{ color: T2 }}>
              Every piece is quoted in person — bring your idea, get a straight answer.
            </p>
          </div>

          <div className="border-t" style={{ borderColor: BORDER }}>
            {services.map((svc) => (
              <div
                key={svc.name}
                className="grid grid-cols-1 items-center gap-4 border-b py-6 transition-colors md:grid-cols-[1fr,auto,auto] md:gap-8 hover:bg-[#141414]"
                style={{ borderColor: BORDER }}
              >
                <div>
                  <h3 className="font-display mb-1 text-2xl font-semibold">{svc.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: T2 }}>{svc.desc}</p>
                </div>
                <div className="text-sm font-medium md:text-right whitespace-nowrap" style={{ color: ACCENT }}>
                  {svc.price}
                </div>
                <a
                  href={PHONE_HREF}
                  className="rounded-full px-5 py-2 text-center text-sm font-semibold text-white whitespace-nowrap transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Book
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY — their own healed work ───────────────────────────────── */}
      <section id="work" className="px-5 py-20 md:px-8 md:py-32" style={{ background: BG2 }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
              The Work
            </p>
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">Straight off the chair</h2>
            <p className="mx-auto max-w-xl" style={{ color: T2 }}>
              Fine-line, black &amp; grey, blackwork, color — all done in-house on 7th Ave.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-lg ${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]" : "aspect-[3/4]"}`}
                style={{ background: CARD }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-lg border text-center transition-colors hover:border-[#C0392B]"
              style={{ background: CARD, borderColor: BORDER }}
            >
              <span className="font-display text-2xl font-bold" style={{ color: ACCENT }}>
                @{INSTAGRAM_HANDLE}
              </span>
              <span className="px-6 text-sm" style={{ color: T2 }}>
                Fresh work posted daily — follow along on Instagram →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ARTISTS — real family, monogram cards (no public face photos) ─── */}
      <section id="artists" className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
              The Family
            </p>
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">Three chairs, one family</h2>
            <p className="mx-auto max-w-xl" style={{ color: T2 }}>
              You are not booking a franchise. You are booking the people whose name is on the door.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border p-8 text-center transition-colors hover:border-[#C0392B]"
                style={{ background: CARD, borderColor: BORDER }}
              >
                <div
                  className="font-display mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold"
                  style={{ background: "rgba(192,57,43,0.15)", color: ACCENT }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display mb-1 text-2xl font-semibold">{member.name}</h3>
                <p className="mb-4 text-xs uppercase tracking-wider" style={{ color: ACCENT }}>
                  {member.role}
                </p>
                <p className="mb-6 text-sm leading-relaxed" style={{ color: T2 }}>{member.bio}</p>
                <a
                  href={PHONE_HREF}
                  className="text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: ACCENT }}
                >
                  Book with {member.name.split(" ")[0].replace(/"/g, "")} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section id="story" className="px-5 py-20 md:px-8 md:py-32" style={{ background: BG2 }}>
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
              Since 1977
            </p>
            <h2 className="font-display mb-6 text-4xl font-bold leading-tight md:text-5xl">
              The name is history, not geography
            </h2>
            <p className="mb-4 text-base leading-relaxed md:text-lg" style={{ color: "#D0D0D0" }}>
              In 1977, Tony &ldquo;Doc Dog&rdquo; Baker opened the very first tattoo parlor in Las
              Vegas. Along the way he put ink on thousands of people — including Cher. The shop
              carries that name as a badge of where it all started.
            </p>
            <p className="text-base leading-relaxed md:text-lg" style={{ color: "#D0D0D0" }}>
              Since October 2003, home has been 1829 E 7th Ave in Ybor City — Tony on the machines,
              Belle at the piercing table, and their son Colt in the third chair. The Tampa Bay Times
              told the story in 2023. The reviews tell it every week.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-lg md:order-2">
            <Image
              src="/images/las-vegas-tattoo-co/gmb-5.jpg"
              alt="7th Avenue street view in Ybor City with palm trees"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CONSULT FLOW — interactive wizard (client component) ──────────── */}
      <section id="consult" className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
              Start Your Piece
            </p>
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">Request a consultation</h2>
            <p className="mx-auto max-w-xl" style={{ color: T2 }}>
              Three quick questions and the shop calls you back. Prefer the old way? Call{" "}
              <a href={PHONE_HREF} className="font-semibold underline underline-offset-4" style={{ color: ACCENT }}>
                {PHONE_FORMATTED}
              </a>{" "}
              or just walk in.
            </p>
          </div>
          <ConsultFlow />
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="px-5 py-20 md:px-8 md:py-32" style={{ background: BG2 }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
              Ybor Knows
            </p>
            <h2 className="font-display mb-6 text-4xl font-bold md:text-5xl">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p style={{ color: T2 }}>Based on {REVIEW_COUNT} reviews</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((review, i) => (
              <blockquote key={i} className="rounded-lg border p-7" style={{ background: CARD, borderColor: BORDER }}>
                <p className="mb-3 tracking-wider" style={{ color: ACCENT }}>★★★★★</p>
                <p className="mb-4 leading-relaxed text-white/90">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm" style={{ color: T2 }}>— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ─────────────────────────────────────────────────────────── */}
      <section id="visit" className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
              Visit
            </p>
            <h2 className="font-display mb-8 text-4xl font-bold leading-tight md:text-5xl">
              On 7th Ave, under the neon
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="mb-1 font-semibold text-white">Address</h4>
                <p style={{ color: T2 }}>{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-white">Hours</h4>
                <table className="text-sm" style={{ color: T2 }}>
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day}>
                        <td className="py-0.5 pr-8">{h.day}</td>
                        <td style={h.time === "Closed" ? { color: ACCENT } : undefined}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-white">Reach us</h4>
                <p>
                  <a href={PHONE_HREF} className="text-white transition-opacity hover:opacity-70">
                    {PHONE_FORMATTED}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={PHONE_HREF}
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Book a Consultation
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="rounded-full border-[1.5px] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                  style={{ borderColor: BORDER }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="relative overflow-hidden rounded-lg" style={{ background: CARD }}>
              <Image
                src="/images/las-vegas-tattoo-co/gmb-2.jpg"
                alt="Piercing jewelry display case at Las Vegas Tattoo Co."
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs uppercase tracking-wider text-white" style={{ background: "rgba(10,10,10,0.7)" }}>
                Belle&rsquo;s jewelry case — piercings daily
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border p-8 text-center" style={{ background: CARD, borderColor: BORDER }}>
              <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>Walk-ins welcome</p>
              <p className="mt-2 max-w-xs text-sm" style={{ color: T2 }}>
                No appointment needed for flash and most piercings. Custom work starts with a free consult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="border-t px-5 py-16 text-center md:px-8" style={{ background: BG2, borderColor: BORDER }}>
        <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">
          Your next tattoo has a 49-year pedigree
        </h2>
        <p className="mx-auto mb-8 max-w-xl" style={{ color: T2 }}>
          Call the shop, request a consult, or walk in off 7th Ave. Closed Tuesdays.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-block rounded-full px-10 py-4 font-semibold text-white transition hover:brightness-110"
          style={{ background: ACCENT }}
        >
          Call {PHONE_FORMATTED}
        </a>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="px-5 py-12 text-sm md:px-8" style={{ background: BG1, color: "rgba(255,255,255,0.6)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-display mb-2 text-2xl font-bold text-white">{FULL_NAME}</p>
            <p>Tattoo &amp; piercing in Ybor City since 2003. Family owned. Walk-ins welcome.</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-white">Visit</h4>
            <p>
              {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />
              <a href={PHONE_HREF} className="transition-colors hover:text-white">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-white">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="transition-colors hover:text-white">Instagram</a>
              <a href={`https://facebook.com/${FACEBOOK_HANDLE}`} className="transition-colors hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} {BUSINESS_NAME} &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="underline-offset-4 hover:text-white/70">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
