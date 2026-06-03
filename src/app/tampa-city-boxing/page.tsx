import Image from "next/image";
import Link from "next/link";

// ─── BRAND IDENTITY ────────────────────────────────────────────────────────────
// Fonts (display + body) are loaded globally via layout.tsx.
// Use className="font-display" for display headings — no imports needed here.

const BUSINESS_NAME    = "Tampa City Boxing";
const TAGLINE          = "More than a boxing gym.";
const NEIGHBORHOOD     = "North Tampa, FL";
const YEAR_FOUNDED     = "Est. by Champion Omar Albanil";

// Brand palette — dark boxing aesthetic: near-black + red + gold
const BG1     = "#0D0D0D";   // deepest background
const BG2     = "#141414";   // alternate section background
const BG3     = "#1C1C1C";   // card backgrounds
const BORDER  = "#2A2A2A";   // dividers
const ACCENT  = "#D72638";   // boxing red — primary CTA
const ACCENT2 = "#C9A84C";   // gold — secondary accent
const T1      = "#FFFFFF";   // primary text
const T2      = "#A0A0A0";   // secondary text
const T3      = "#606060";   // muted text

// Contact & links
const PHONE_FORMATTED  = "(813) 817-4014";
const PHONE_RAW        = "8138174014";
const EMAIL            = "gym@tampacityboxing.com";
const ADDRESS_LINE_1   = "4435 N Lauber Way";
const ADDRESS_LINE_2   = "Tampa, FL 33614";
const DIRECTIONS_URL   = "https://www.google.com/maps/dir/?api=1&destination=4435+N+Lauber+Way+Tampa+FL+33614";
const INSTAGRAM_HANDLE = "tampacityboxing";
const AVG_RATING       = "4.9";
const REVIEW_COUNT     = "216";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_NAME} — Real Boxing in North Tampa, FL`,
  description:
    "Tampa City Boxing offers real boxing instruction in North Tampa from 4× Florida State Champion Omar Albanil. Classes Mon–Fri at 5pm & 7pm. Women's boxing, youth programs (ages 10+). First class free.",
};

// ─── SCHEDULE DATA — HTML table, not an image ──────────────────────────────────
// Audit finding: existing site shows schedule as a PNG image — unreadable on mobile,
// invisible to search engines. This is a live HTML table.
const schedule = [
  {
    time: "5:00 PM",
    mon: { name: "Boxing Fundamentals", level: "All levels", coach: "Omar" },
    tue: { name: "Technique & Defense",  level: "All levels", coach: "Tyson" },
    wed: { name: "Boxing Fundamentals",  level: "All levels", coach: "Ben" },
    thu: { name: "Conditioning & Sparring", level: "Intermediate+", coach: "Cisco" },
    fri: { name: "Boxing Fundamentals",  level: "All levels", coach: "Stephen" },
  },
  {
    time: "7:00 PM",
    mon: { name: "Technique & Footwork", level: "All levels", coach: "Ben" },
    tue: { name: "Women's Boxing",       level: "Women",      coach: "Elisa" },
    wed: { name: "Technique & Footwork", level: "All levels", coach: "Cisco" },
    thu: { name: "Women's Boxing",       level: "Women",      coach: "Elisa" },
    fri: { name: "Competition Prep",     level: "Fighters only", coach: "Omar" },
  },
];

// ─── COACHES ───────────────────────────────────────────────────────────────────
const coaches = [
  {
    name:  "Omar Albanil",
    role:  "Head Coach & Founder",
    bio:   "4× Florida State Champion. 27-5 amateur, 5-0 professional. USA Boxing Silver Level Coach. NASM CPT. Omar grew up in Tampa, went 0-2 early, found the right coaching — and went on to win four state titles and turn pro undefeated. He built Tampa City Boxing to give that coaching to everyone else.",
    img:   "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600&q=80",
    cta:   "Train with Omar",
    featured: true,
  },
  {
    name:  "Elisa Nieves",
    role:  "Boxing Coach · Women's Boxing",
    bio:   "Leads the women's boxing program at Tampa City Boxing. Technique-first coaching in a class designed specifically for women — welcoming, intentional, and intense. Teaches Tuesday and Thursday 7pm women's sessions.",
    img:   "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    cta:   "Train with Elisa",
    featured: false,
  },
  {
    name:  "Cisco Rivera",
    role:  "Boxing Coach · Conditioning",
    bio:   "Francisco "Cisco" Rivera specializes in boxing conditioning and sparring prep. Leads Thursday 5pm conditioning sessions and Wednesday 7pm technique classes. The coach to see when you're ready to step it up.",
    img:   "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&q=80",
    cta:   "Train with Cisco",
    featured: false,
  },
];

// ─── MEMBERSHIP TIERS ─────────────────────────────────────────────────────────
// Audit finding: existing site only lists $99/month with no $40 open gym option visible,
// no JOIN NOW button, and no self-service path. Both tiers shown here with clear CTAs.
const plans = [
  {
    label:    "Free Trial",
    eyebrow:  "Get started",
    price:    "FREE",
    sub:      "First Class on Us",
    featured: false,
    items: [
      "One full 90-minute class",
      "Equipment available on-site",
      "No obligation, no sales pitch",
      "Any day, any class level",
    ],
    cta:      "Call to Book Free Class",
    href:     `tel:${PHONE_RAW}`,
    ghost:    true,
  },
  {
    label:    "Open Gym",
    eyebrow:  "Gym access",
    price:    "$40",
    sub:      "/ month · Gym Access Only",
    featured: false,
    items: [
      "Full gym access during open hours",
      "Heavy bags, speed bags, ring time",
      "Power rack & free weights",
      "No contract — month-to-month",
    ],
    cta:      "Join Now — Open Gym",
    href:     `tel:${PHONE_RAW}`,
    ghost:    true,
  },
  {
    label:    "Full Training",
    eyebrow:  "Most popular",
    price:    "$99",
    sub:      "/ month · Gym + Unlimited Classes",
    featured: true,
    items: [
      "Unlimited classes — 7 days/week",
      "Full gym access",
      "All class types: boxing, conditioning, women's, youth",
      "Competition training pathway",
      "No contract — month-to-month",
    ],
    cta:      "Join Now — Full Training",
    href:     `tel:${PHONE_RAW}`,
    ghost:    false,
  },
];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
const reviews = [
  {
    text:   "Coach Omar is one of the best boxing coaches I've ever trained under. The technique he teaches is the real thing — not cardio, not fitness boxing. I've learned more here in three months than I did in a year anywhere else.",
    author: "Marcus T., Tampa · Google Review",
  },
  {
    text:   "I came in knowing absolutely nothing about boxing. The coaches here are patient, knowledgeable, and actually invested in your progress. The women's class with Elisa is incredible — welcoming and intense at the same time.",
    author: "Jasmine R., Tampa · Google Review",
  },
  {
    text:   "My 12-year-old has been training here for six months and the discipline and confidence it's built in him is unreal. Omar runs a tight, professional program. This is the real deal — not a fitness gimmick.",
    author: "David P., Tampa · Google Review",
  },
];

// ─── INSTAGRAM GRID ───────────────────────────────────────────────────────────
// All URLs verified 200 OK — boxing gym, fighter, heavy bag, gloves photography
const igPhotos = [
  "https://images.unsplash.com/photo-1549476464-37392f717541?w=400&q=80",
  "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
  "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80",
  "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&q=80",
  "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=400&q=80",
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div
      className="font-sans antialiased"
      style={{ background: BG1, color: T1 }}
    >

      {/* ── STICKY NAV ─────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur"
        style={{ background: "rgba(13,13,13,0.97)", borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-2xl font-black tracking-widest"
            style={{ color: T1, letterSpacing: "0.05em" }}
          >
            TAMPA CITY{" "}
            <span style={{ color: ACCENT }}>BOXING</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#schedule"   className="hover:text-white transition" style={{ color: T2 }}>Schedule</a>
            <a href="#membership" className="hover:text-white transition" style={{ color: T2 }}>Membership</a>
            <a href="#coaches"    className="hover:text-white transition" style={{ color: T2 }}>Coaches</a>
            <a href="#about"      className="hover:text-white transition" style={{ color: T2 }}>About</a>
            <a href="#visit"      className="hover:text-white transition" style={{ color: T2 }}>Visit</a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-5 py-2 rounded text-sm font-black uppercase tracking-wider text-white transition hover:brightness-90"
              style={{ background: ACCENT, letterSpacing: "0.06em" }}
            >
              Free Class
            </a>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="md:hidden px-4 py-2 rounded text-sm font-black text-white"
            style={{ background: ACCENT }}
          >
            Free Class
          </a>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ minHeight: "92vh" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1549476464-37392f717541?w=1800&q=85"
          alt="Boxing training at Tampa City Boxing"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.55) 40%, rgba(13,13,13,0.88) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pb-40">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
            style={{ color: ACCENT2 }}
          >
            {NEIGHBORHOOD} &middot; {YEAR_FOUNDED}
          </p>
          <h1
            className="font-display font-black leading-none mb-6"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", letterSpacing: "0.02em" }}
          >
            <span
              style={{
                background: `linear-gradient(90deg, ${ACCENT}, #e87080, #fff, #e87080, ${ACCENT})`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MORE THAN
            </span>
            <br />
            <span style={{ color: T1 }}>A BOXING GYM</span>
          </h1>
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Real coaching from a 4× Florida State Champion and 5-0 professional fighter.
            Technique, footwork, defense. Not cardio-boxing. Not fitness boxing.
            Actual boxing — for all levels, no contract.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-10 py-4 rounded text-base font-black text-white uppercase tracking-widest transition hover:brightness-90"
              style={{ background: ACCENT, letterSpacing: "0.08em" }}
            >
              Claim Free Class
            </a>
            <a
              href="#schedule"
              className="px-10 py-4 rounded text-base font-bold text-white uppercase border transition hover:border-red-500"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}
            >
              View Schedule
            </a>
          </div>
        </div>

        {/* Stat bar — Omar credentials prominently displayed, audit finding */}
        <div
          className="absolute bottom-0 left-0 right-0 py-5"
          style={{ background: "rgba(13,13,13,0.88)", borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p
                className="font-display font-black text-3xl md:text-4xl"
                style={{ color: ACCENT }}
              >
                4.9★
              </p>
              <p className="text-xs mt-1" style={{ color: T2 }}>
                Google ({REVIEW_COUNT} Reviews)
              </p>
            </div>
            <div>
              <p
                className="font-display font-black text-3xl md:text-4xl"
                style={{ color: ACCENT }}
              >
                4×
              </p>
              <p className="text-xs mt-1" style={{ color: T2 }}>
                Florida State Champion
              </p>
            </div>
            <div>
              <p
                className="font-display font-black text-3xl md:text-4xl"
                style={{ color: ACCENT }}
              >
                5-0
              </p>
              <p className="text-xs mt-1" style={{ color: T2 }}>
                Omar&rsquo;s Pro Record
              </p>
            </div>
            <div>
              <p
                className="font-display font-black text-3xl md:text-4xl"
                style={{ color: ACCENT }}
              >
                27-5
              </p>
              <p className="text-xs mt-1" style={{ color: T2 }}>
                Omar&rsquo;s Amateur Record
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ────────────────────────────────────────────────────── */}
      <section style={{ background: BG2, borderBottom: `1px solid ${BORDER}` }}>
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "1px", background: BORDER }}
        >
          {[
            {
              headline: "ALL LEVELS",
              body: "Complete beginners to competitive fighters. Non-contact available. You don't need experience — just show up.",
            },
            {
              headline: "REAL BOXING",
              body: "Technique, footwork, defense, offense. You leave knowing how to actually box — not just how to hit a bag to music.",
            },
            {
              headline: "NO CONTRACT",
              body: "Month-to-month membership. No hidden fees, no year-long lock-in. Pay, train, stay because you want to.",
            },
          ].map((v) => (
            <div
              key={v.headline}
              className="px-8 py-10 text-center"
              style={{ background: BG2 }}
            >
              <p
                className="font-display font-black text-4xl md:text-5xl mb-3"
                style={{ color: ACCENT }}
              >
                {v.headline}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: T2 }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLASS SCHEDULE — HTML TABLE (not a PNG image) ──────────────────── */}
      {/*
          AUDIT FIX: The existing site shows the schedule as a static PNG image.
          This is a fully live HTML table — mobile-readable and Google-indexable.
          Days as columns, times as rows, with class name + coach per cell.
      */}
      <section
        id="schedule"
        className="py-20 md:py-28 px-5 md:px-10"
        style={{ background: BG1 }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: ACCENT }}
            >
              Classes
            </p>
            <h2
              className="font-display font-black text-5xl md:text-6xl"
              style={{ letterSpacing: "0.03em" }}
            >
              WEEKLY SCHEDULE
            </h2>
            <p className="mt-4" style={{ color: T2 }}>
              All classes are 90 minutes. Equipment provided for your first session — bring water and wraps.
            </p>
          </div>

          {/* Desktop schedule table */}
          <div
            className="hidden md:block overflow-hidden rounded-lg"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    className="py-4 px-5 text-left font-display text-xl font-bold"
                    style={{ background: BG3, color: T2, width: "130px", borderRight: `1px solid ${BORDER}` }}
                  >
                    TIME
                  </th>
                  {["MON", "TUE", "WED", "THU", "FRI"].map((day) => (
                    <th
                      key={day}
                      className="py-4 px-4 text-center font-display text-xl font-bold text-white"
                      style={{ background: ACCENT, border: `1px solid ${BORDER}` }}
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => {
                  const days = [row.mon, row.tue, row.wed, row.thu, row.fri];
                  return (
                    <tr key={row.time} style={{ background: i % 2 === 0 ? BG2 : BG3 }}>
                      <td
                        className="py-5 px-5 font-bold text-base"
                        style={{ color: ACCENT2, border: `1px solid ${BORDER}` }}
                      >
                        {row.time}
                      </td>
                      {days.map((cell, j) => (
                        <td
                          key={j}
                          className="py-5 px-4 text-center"
                          style={{ border: `1px solid ${BORDER}` }}
                        >
                          <p className="font-bold text-white text-sm">{cell.name}</p>
                          <p className="text-xs mt-1" style={{ color: T2 }}>
                            {cell.level} &middot; {cell.coach}
                          </p>
                        </td>
                      ))}
                    </tr>
                  );
                })}
                {/* Youth row */}
                <tr style={{ background: BG2 }}>
                  <td
                    className="py-5 px-5 font-bold text-base"
                    style={{ color: ACCENT2, border: `1px solid ${BORDER}` }}
                  >
                    7:00 PM
                    <span
                      className="block text-xs mt-0.5 font-normal"
                      style={{ color: T3 }}
                    >
                      Youth
                    </span>
                  </td>
                  <td
                    colSpan={5}
                    className="py-5 px-4 text-center"
                    style={{ border: `1px solid ${BORDER}` }}
                  >
                    <p className="font-bold text-white text-sm">
                      Youth Boxing — Ages 10+
                    </p>
                    <p className="text-xs mt-1" style={{ color: T2 }}>
                      Mon–Fri &middot; Runs simultaneously with adult 7pm class &middot; Beginner to intermediate
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile schedule cards */}
          <div className="md:hidden space-y-4">
            {[
              {
                time: "5:00 PM — Mon through Fri",
                title: "Boxing Fundamentals / Technique & Conditioning",
                desc: "All levels welcome. 90 minutes. Rotating coaches — Omar (Mon), Tyson (Tue), Ben (Wed), Cisco (Thu), Stephen (Fri).",
              },
              {
                time: "7:00 PM — Mon through Fri",
                title: "Technique, Women's Boxing & Competition Prep",
                desc: "All levels. Women's classes Tue & Thu with Coach Elisa. Competition prep Fridays with Omar. Monday & Wednesday: Technique & Footwork.",
              },
              {
                time: "7:00 PM Youth — Mon through Fri",
                title: "Youth Boxing — Ages 10+",
                desc: "Runs simultaneously with adult 7pm class. Structured, real boxing instruction for kids in a safe environment.",
              },
            ].map((card) => (
              <div
                key={card.time}
                className="rounded-lg p-5"
                style={{ background: BG2, border: `1px solid ${BORDER}` }}
              >
                <p
                  className="font-display font-black text-2xl mb-1"
                  style={{ color: ACCENT2 }}
                >
                  {card.time}
                </p>
                <p className="font-semibold text-white">{card.title}</p>
                <p className="text-sm mt-2" style={{ color: T2 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-8 text-sm"
            style={{ color: T3 }}
          >
            Schedule subject to change. Call{" "}
            <a href={`tel:${PHONE_RAW}`} style={{ color: ACCENT }}>
              {PHONE_FORMATTED}
            </a>{" "}
            or check our Instagram for updates.
          </p>
          <div className="text-center mt-10">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-block px-10 py-4 rounded text-base font-black text-white uppercase tracking-widest transition hover:brightness-90"
              style={{ background: ACCENT, letterSpacing: "0.08em" }}
            >
              Book Your Free Class
            </a>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP PRICING — two tiers, both visible, JOIN NOW buttons ─── */}
      {/*
          AUDIT FIX: Existing site shows only $99/month with no $40 tier visible,
          no description of inclusions, and no join button. All three tiers shown
          here with transparent inclusions and a clear CTA per card.
      */}
      <section
        id="membership"
        className="py-20 md:py-28 px-5 md:px-10"
        style={{ background: BG2 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: ACCENT }}
            >
              Membership
            </p>
            <h2
              className="font-display font-black text-5xl md:text-6xl"
              style={{ letterSpacing: "0.03em" }}
            >
              SIMPLE PRICING
            </h2>
            <p className="mt-4" style={{ color: T2 }}>
              No contracts. Month-to-month. Cancel anytime.
              First month includes a one-time $40 gym initiation fee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.label}
                className="rounded-xl p-8 text-center relative flex flex-col"
                style={{
                  background: BG3,
                  border: `1px solid ${plan.featured ? ACCENT : BORDER}`,
                  transition: "border-color 0.2s",
                }}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="px-4 py-1 rounded-full text-xs font-black tracking-widest text-white uppercase"
                      style={{ background: ACCENT }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ color: plan.featured ? ACCENT : ACCENT2 }}
                >
                  {plan.eyebrow}
                </p>
                <p
                  className="font-display font-black text-5xl mb-1"
                  style={{ color: plan.featured ? ACCENT : T1 }}
                >
                  {plan.price}
                </p>
                <p className="text-sm mb-6" style={{ color: T2 }}>
                  {plan.sub}
                </p>
                <ul className="text-sm space-y-3 mb-8 text-left flex-1" style={{ color: T2 }}>
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: ACCENT }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className="w-full block py-3 rounded text-sm font-black text-center uppercase tracking-wider transition"
                  style={
                    plan.ghost
                      ? {
                          border: "1.5px solid rgba(255,255,255,0.4)",
                          color: T1,
                          letterSpacing: "0.07em",
                        }
                      : {
                          background: ACCENT,
                          color: T1,
                          letterSpacing: "0.07em",
                        }
                  }
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: T3 }}>
            First month includes a one-time $40 gym initiation fee. Monthly billing to debit or credit card.
          </p>
        </div>
      </section>

      {/* ── ABOUT / FOUNDING STORY ─────────────────────────────────────────── */}
      <section
        id="about"
        className="py-20 md:py-28 px-5 md:px-10"
        style={{ background: BG1 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: ACCENT }}
            >
              The Story
            </p>
            <h2
              className="font-display font-black text-5xl md:text-6xl mb-6 leading-none"
              style={{ letterSpacing: "0.02em" }}
            >
              BUILT BY A{" "}
              <span style={{ color: ACCENT }}>CHAMPION</span>
              <br />
              FOR TAMPA
            </h2>
            <p className="text-base mb-5 leading-relaxed" style={{ color: T2 }}>
              Omar Albanil grew up in Tampa. He started boxing and went 0-2. Then he found the right
              coaching — and went on to win four Florida State Championships, compile a 27-5 amateur
              record, and finish his professional career undefeated at 5-0. He knew what the right
              coaching made possible, and he built Tampa City Boxing to give that to everyone else.
            </p>
            <p className="text-base mb-8 leading-relaxed" style={{ color: T2 }}>
              TCB is a 2,000 sq ft facility with a professional 18×18 ring, commercial rubber flooring,
              and a full range of heavy, uppercut, double-end, and speed bags. More importantly, it&rsquo;s
              a gym where you&rsquo;ll actually learn to box — footwork, hand positioning, offensive combos,
              defensive slipping — taught by coaches who compete, not trainers who just count reps.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "2,000", label: "Square feet of training space" },
                { stat: "18×18", label: "Professional boxing ring" },
                { stat: "Ages 10+", label: "Youth boxing program" },
                { stat: "All levels", label: "Beginners to competitors" },
              ].map((s) => (
                <div
                  key={s.stat}
                  className="p-4 rounded-lg"
                  style={{ background: BG3, border: `1px solid ${BORDER}` }}
                >
                  <p
                    className="font-display font-black text-3xl"
                    style={{ color: ACCENT }}
                  >
                    {s.stat}
                  </p>
                  <p className="text-xs mt-1" style={{ color: T2 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div
              className="rounded-xl overflow-hidden relative"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1517438476312-10d79c077509?w=900&q=85"
                alt="Boxing training at Tampa City Boxing"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── COACHING STAFF ─────────────────────────────────────────────────── */}
      {/*
          AUDIT FIX: Existing site lists coaches by name only — no bios, no photos,
          no specialties, no individual book links. Full cards with bios here.
      */}
      <section
        id="coaches"
        className="py-20 md:py-28 px-5 md:px-10"
        style={{ background: BG2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: ACCENT }}
            >
              The Coaches
            </p>
            <h2
              className="font-display font-black text-5xl md:text-6xl"
              style={{ letterSpacing: "0.03em" }}
            >
              TRAIN WITH THE BEST
            </h2>
            <p className="mt-4" style={{ color: T2 }}>
              A team of coaches who compete. They&rsquo;ve been in the ring — and they&rsquo;ll put you there too, when you&rsquo;re ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{ background: BG3, border: `1px solid ${BORDER}` }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={coach.img}
                    alt={`${coach.name} — ${coach.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    style={{ filter: "grayscale(30%)", transition: "filter 0.4s" }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p
                    className="font-display font-black text-2xl"
                    style={{ color: T1, letterSpacing: "0.04em" }}
                  >
                    {coach.name.toUpperCase()}
                  </p>
                  <p
                    className="text-xs font-semibold mb-3 uppercase"
                    style={{ color: ACCENT, letterSpacing: "0.15em" }}
                  >
                    {coach.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-4"
                    style={{ color: T2 }}
                  >
                    {coach.bio}
                  </p>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="w-full block py-2 rounded text-xs font-black text-center uppercase tracking-wider transition"
                    style={
                      coach.featured
                        ? {
                            background: ACCENT,
                            color: T1,
                            letterSpacing: "0.07em",
                          }
                        : {
                            border: "1.5px solid rgba(255,255,255,0.3)",
                            color: T1,
                            letterSpacing: "0.07em",
                          }
                    }
                  >
                    {coach.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-sm" style={{ color: T3 }}>
            Full coaching staff also includes Benjamin Katz, Tyson Bruner, and Stephen Jennings.
            Every class is taught by an experienced boxer.
          </p>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 px-5 md:px-10"
        style={{ background: BG1 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: ACCENT }}
            >
              Reviews
            </p>
            <h2
              className="font-display font-black text-5xl md:text-6xl"
              style={{ letterSpacing: "0.03em" }}
            >
              <span style={{ color: ACCENT }}>★★★★★</span> {AVG_RATING} ON GOOGLE
            </h2>
            <p className="mt-4" style={{ color: T2 }}>
              Based on {REVIEW_COUNT} reviews from members who came in as beginners and stayed as boxers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="p-6 rounded-xl"
                style={{ background: BG2, border: `1px solid ${BORDER}` }}
              >
                <p className="text-sm mb-2" style={{ color: ACCENT2 }}>★★★★★</p>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-xs" style={{ color: T3 }}>
                  — {r.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/Tampa+City+Boxing+Tampa+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded text-sm font-bold uppercase tracking-wider text-white border transition hover:border-red-500"
              style={{ border: "1.5px solid rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}
            >
              Read All {REVIEW_COUNT} Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL CTA SECTION ─────────────────────────────────────────── */}
      {/*
          Dedicated section for highest-intent visitors — audit found free trial CTA
          leads to a contact page with no actual booking flow. This section gives it
          its own moment with full visual weight.
      */}
      <section
        className="py-20 md:py-28 px-5 md:px-10 relative overflow-hidden"
        style={{ background: BG3 }}
      >
        {/* Background watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none"
          aria-hidden="true"
        >
          <p
            className="font-display font-black text-white"
            style={{ fontSize: "clamp(5rem, 20vw, 18rem)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
          >
            TCB
          </p>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
            style={{ color: ACCENT2 }}
          >
            First class is on us
          </p>
          <h2
            className="font-display font-black mb-6 leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", letterSpacing: "0.03em" }}
          >
            COME SEE
            <br />
            WHAT REAL
            <br />
            <span style={{ color: ACCENT }}>BOXING FEELS LIKE</span>
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: T2 }}
          >
            Your first class at Tampa City Boxing is free. No credit card, no sales pitch.
            Just show up, wrap your hands, and train with coaches who actually know what they&rsquo;re doing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="px-12 py-5 rounded text-lg font-black text-white uppercase tracking-widest transition hover:brightness-90"
              style={{ background: ACCENT, letterSpacing: "0.08em" }}
            >
              Call {PHONE_FORMATTED}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="px-12 py-5 rounded text-lg font-bold text-white uppercase border transition"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}
            >
              Email Us
            </a>
          </div>
          <p className="mt-6 text-sm" style={{ color: T3 }}>
            Bring 180&rdquo; hand-wraps and 16oz boxing gloves — or come early and we&rsquo;ll sort you out.
          </p>
        </div>
      </section>

      {/* ── TRAINING PHILOSOPHY ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-10" style={{ background: BG2 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "1" }}>
            <Image
              src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=900&q=80"
              alt="Tampa City Boxing training session"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: ACCENT }}
            >
              Training Philosophy
            </p>
            <h2
              className="font-display font-black text-4xl md:text-5xl mb-6 leading-tight"
              style={{ letterSpacing: "0.02em" }}
            >
              WE TEACH YOU HOW
              <br />
              <span style={{ color: ACCENT }}>TO ACTUALLY FIGHT</span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "Technique First",
                  desc: "Every class builds on proper form — stance, footwork, hand position, head movement. You build the habit correctly from day one.",
                },
                {
                  title: "Defense Is Offense",
                  desc: "Slipping, rolling, parrying — we teach you to not get hit as seriously as we teach you to land punches. Real boxing is both.",
                },
                {
                  title: "Compete If You Want",
                  desc: "Not everyone wants to fight. We don't push it. But if you do, Omar's competition training pathway is there when you're ready.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h4
                    className="font-semibold text-white mb-1"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: T2 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT + HOURS ──────────────────────────────────────────────────── */}
      <section
        id="visit"
        className="py-20 md:py-28 px-5 md:px-10"
        style={{ background: BG1 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: ACCENT }}
            >
              Location
            </p>
            <h2
              className="font-display font-black text-5xl md:text-6xl mb-8"
              style={{ letterSpacing: "0.03em" }}
            >
              FIND US
            </h2>

            <div className="space-y-6">
              <div>
                <p
                  className="text-xs font-bold mb-1 uppercase"
                  style={{ color: T3, letterSpacing: "0.15em" }}
                >
                  Address
                </p>
                <p className="text-base font-medium" style={{ color: T1 }}>
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-bold mb-3 uppercase"
                  style={{ color: T3, letterSpacing: "0.15em" }}
                >
                  Class Hours
                </p>
                <table className="text-sm w-full" style={{ color: T2 }}>
                  <tbody>
                    <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <td className="py-2 pr-6 font-semibold" style={{ color: T1 }}>Monday – Friday</td>
                      <td className="py-2">5:00 PM &amp; 7:00 PM</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <td className="py-2 pr-6 font-semibold" style={{ color: T1 }}>Youth (Mon–Fri)</td>
                      <td className="py-2">7:00 PM (ages 10+)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-6 font-semibold" style={{ color: T1 }}>Saturday – Sunday</td>
                      <td className="py-2" style={{ color: T3 }}>Open Gym Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <p
                  className="text-xs font-bold mb-2 uppercase"
                  style={{ color: T3, letterSpacing: "0.15em" }}
                >
                  Contact
                </p>
                <p>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="text-base font-medium hover:underline"
                    style={{ color: ACCENT }}
                  >
                    {PHONE_FORMATTED}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm hover:underline"
                    style={{ color: T2 }}
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded text-sm font-black text-white uppercase tracking-wider transition hover:brightness-90"
                  style={{ background: ACCENT, letterSpacing: "0.06em" }}
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="px-6 py-3 rounded text-sm font-bold text-white uppercase border transition"
                  style={{ border: "1.5px solid rgba(255,255,255,0.3)", letterSpacing: "0.04em" }}
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "1" }}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
              alt="Boxing gym interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ────────────────────────────────────────────────── */}
      <section
        className="py-12 px-5 md:px-10"
        style={{ background: BG2, borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p
              className="font-display font-black text-2xl"
              style={{ letterSpacing: "0.04em" }}
            >
              @{INSTAGRAM_HANDLE}
            </p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded"
                style={{ aspectRatio: "1" }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer
        className="py-12 px-5 md:px-10"
        style={{ background: BG1, borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p
              className="font-display font-black text-3xl mb-2"
              style={{ letterSpacing: "0.05em" }}
            >
              TAMPA CITY <span style={{ color: ACCENT }}>BOXING</span>
            </p>
            <p className="text-sm" style={{ color: T2 }}>
              {TAGLINE}
              <br />
              {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline"
                style={{ color: ACCENT }}
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/Tampa-City-Boxing-301816429839942"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline"
                style={{ color: T2 }}
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-xs font-bold mb-4 uppercase"
              style={{ color: T3, letterSpacing: "0.2em" }}
            >
              Classes
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: T2 }}>
              <li>Boxing Fundamentals</li>
              <li>Technique &amp; Defense</li>
              <li>Women&rsquo;s Boxing</li>
              <li>Youth Boxing (Ages 10+)</li>
              <li>Competition Training</li>
              <li>Boxing Conditioning</li>
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-bold mb-4 uppercase"
              style={{ color: T3, letterSpacing: "0.2em" }}
            >
              Hours &amp; Contact
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: T2 }}>
              <li>Mon–Fri: 5:00 PM &amp; 7:00 PM</li>
              <li>Youth Mon–Fri: 7:00 PM (Ages 10+)</li>
              <li>Sat–Sun: Open Gym Only</li>
              <li className="pt-2">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  {PHONE_FORMATTED}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:underline"
                  style={{ color: T2 }}
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto mt-10 pt-6 text-xs flex flex-col md:flex-row justify-between gap-2"
          style={{ borderTop: `1px solid ${BORDER}`, color: T3 }}
        >
          <p>© {new Date().getFullYear()} Tampa City Boxing LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <p>
              Mockup by{" "}
              <a href="https://thryveops.com" className="hover:underline" style={{ color: ACCENT }}>
                Thryve Operations
              </a>
            </p>
            <Link href="/" className="hover:underline" style={{ color: T3 }}>
              ← All previews
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
