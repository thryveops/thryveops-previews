import Image from "next/image";
import Link from "next/link";

// ─── SHALLOW POINT TAMPA FISHING CHARTERS — concept mockup by Thryve Operations ─
// Owner-operator inshore charter, Capt. David Beede, chartering since 1998.
// Departs a private dock at 4832 W Bay Villa Ave, South Tampa.
// Primary CTA is TEXT — the captain's stated preference on his current site.

// Business identity
const BUSINESS_NAME  = "Shallow Point Charters";
const BUSINESS_FULL  = "Shallow Point Tampa Fishing Charters";
const TAGLINE        = "Tampa Bay inshore fishing since 1998";
const YEAR_FOUNDED   = "1998";

// Brand palette — coastal marine: deep bay navy + Florida orange
const PAPER   = "#F7FAFB";   // page background
const INK     = "#0C2233";   // navy-dark text + dark sections
const ACCENT  = "#F97316";   // Florida orange — CTAs, stars, labels
const ACCENT2 = "#0B3D6E";   // bay navy — secondary emphasis
const RULE    = "#D8E2EA";   // borders / dividers

// Contact & links
const PHONE_FORMATTED  = "(813) 758-3406";
const PHONE_RAW        = "8137583406";
const SMS_URL          = "sms:8137583406";
const EMAIL            = "david@shallowpointcharters.com";
const ADDRESS_LINE_1   = "4832 W Bay Villa Ave";
const ADDRESS_LINE_2   = "Tampa, FL 33611";
const DIRECTIONS_URL   = "https://maps.google.com/?q=4832+W+Bay+Villa+Ave+Tampa+FL+33611";
const INSTAGRAM_HANDLE = "shallowpointfishingcharters";
const AVG_RATING       = "4.9";
const REVIEW_COUNT     = "226";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: `${BUSINESS_FULL} — Tampa Bay Inshore Fishing Since 1998`,
  description:
    "Snook, redfish, tarpon, and trout with Capt. David Beede on a 26' Gause Built. Private-dock departure in South Tampa. Text the captain to book your trip.",
};

// ─── TRIP OPTIONS — 4–8 hour trips per the current site ────────────────────────
// NOTE: sample rates for concept purposes — confirm actual pricing with Capt. David
const trips = [
  {
    name:    "Half Day on the Flats",
    length:  "4 hours",
    price:   "from $600",
    desc:    "Snook, redfish, and trout on the grass flats and mangrove shorelines closest to the dock. The right trip for first-timers and tight schedules.",
    tag:     "Most popular",
    img:     "https://images.unsplash.com/photo-1783060815553-dc8d7e531838?w=900&q=80",
    alt:     "Shallow-draft boat in clear shallow water",
  },
  {
    name:    "Three-Quarter Day",
    length:  "6 hours",
    price:   "from $750",
    desc:    "Time to work the mangrove creeks, oyster bars, and dock lights — and follow the bite when it moves. The captain's pick for serious anglers.",
    tag:     "",
    img:     "https://images.unsplash.com/photo-1561139423-9ceee07384b3?w=900&q=80",
    alt:     "Mangrove shoreline on calm water",
  },
  {
    name:    "Full Day Inshore",
    length:  "8 hours",
    price:   "from $950",
    desc:    "The whole bay is on the table — tarpon in season, big snook at dawn, redfish schools on the afternoon tide. Bring a cooler for the ride home.",
    tag:     "Tarpon season",
    img:     "https://images.unsplash.com/photo-1578005983174-90424f1b81e7?w=900&q=80",
    alt:     "Charter guests fishing off the stern at first light",
  },
  {
    name:    "Kids & Family Trips",
    length:  "4–5 hours",
    price:   "text for rates",
    desc:    "Steady action on trout, snapper, and ladyfish — built around short attention spans and first fish. Capt. David has run his Kids Fishing Camp for years.",
    tag:     "Family favorite",
    img:     "https://images.unsplash.com/photo-1578005933182-43b789a70c26?w=900&q=80",
    alt:     "Young angler with a fish on the boat",
  },
];

// ─── RECENT TRIP REPORTS — how 13 years of archive could look ─────────────────
// Concept entries modeled on the real trip-report archive (2012–2025) on the
// current site — republish real reports with real photos at launch.
const tripReports = [
  {
    date:    "July 12, 2026",
    species: ["Snook", "Redfish"],
    title:   "Dawn snook bite under the mangroves",
    excerpt: "Water temps in the low 80s and the snook stacked up on the mangrove points on the outgoing tide. Best fish of the morning ate a live pilchard against the roots.",
    img:     "https://images.unsplash.com/photo-1624909050963-ce0f6a3c4c1e?w=900&q=80",
    alt:     "Skiff working a mangrove creek from above",
  },
  {
    date:    "July 3, 2026",
    species: ["Tarpon"],
    title:   "Silver kings still rolling off the bridge shadows",
    excerpt: "Late-season tarpon are still around for anglers who want the fight of a lifetime. Jumped three, brought one boatside — a fish pushing 100 pounds.",
    img:     "https://images.unsplash.com/photo-1741193182705-53bd49ab05cc?w=900&q=80",
    alt:     "Boat running the bridge shadows at dusk",
  },
  {
    date:    "June 21, 2026",
    species: ["Trout", "Mackerel"],
    title:   "Limits of trout in the shadow of the skyline",
    excerpt: "You do not have to run far — big spotted sea trout on the flats fifteen minutes from downtown Tampa, with Spanish mackerel crashing bait all around us.",
    img:     "https://images.unsplash.com/photo-1614056905561-0004a2bb2b74?w=900&q=80",
    alt:     "Tampa skyline across the bay",
  },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
const reviews = [
  {
    text:   "Capt. David put my dad and me on snook all morning — he read the tide like a book and moved us three times right as the bite started. 28 years of doing this shows.",
    author: "Mike R. · Google review",
  },
  {
    text:   "Texted him on a Tuesday, fished Thursday at sunrise from his dock in South Tampa. My 9-year-old caught her first redfish and he was more excited than she was.",
    author: "Danielle S. · Google review",
  },
  {
    text:   "The Gause Built is a serious machine — he spotted fish from the tower before we could see anything. Hooked into a tarpon that spooled half my reel. Booking again next season.",
    author: "Chris T. · Google review",
  },
];

// ─── INSTAGRAM GRID ────────────────────────────────────────────────────────────
const igPhotos = [
  "https://images.unsplash.com/photo-1578142880638-9fc9aba285c2?w=400&q=80",
  "https://images.unsplash.com/photo-1601226041388-8bbabdd6e37e?w=400&q=80",
  "https://images.unsplash.com/photo-1613683992698-e4b8840f7c3f?w=400&q=80",
  "https://images.unsplash.com/photo-1745075203669-d1137d27791e?w=400&q=80",
  "https://images.unsplash.com/photo-1609964956781-519678450be5?w=400&q=80",
  "https://images.unsplash.com/photo-1657548107389-8275185175d7?w=400&q=80",
];

// Sponsor endorsements shown on the current site
const sponsors = ["YETI", "Quantum", "St. Croix Rod", "Maui Jim", "Power Pole", "O'Hero"];

// ─── PAGE COMPONENT — server component, no event handlers ─────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(247,250,251,0.95)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="leading-tight">
            <span className="font-display text-lg md:text-xl font-bold tracking-tight block" style={{ color: ACCENT2 }}>
              {BUSINESS_NAME}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
              Tampa Bay Inshore · Est. {YEAR_FOUNDED}
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#trips"   className="hover:opacity-60 transition-opacity">Trips &amp; Rates</a>
            <a href="#captain" className="hover:opacity-60 transition-opacity">The Captain</a>
            <a href="#reports" className="hover:opacity-60 transition-opacity">Trip Reports</a>
            <a href="#visit"   className="hover:opacity-60 transition-opacity">Departure</a>
            <a
              href={SMS_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Text the Captain
            </a>
          </div>
          <a
            href={SMS_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Text
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513306239747-bca82d7485f3?w=1800&q=80"
          alt="Anglers wading beside a shallow-water skiff on the flats"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(12,34,51,0.35) 0%, rgba(12,34,51,0.45) 55%, rgba(12,34,51,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/75">
            Snook &middot; Redfish &middot; Tarpon &middot; Trout
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Fish the skinny water.{" "}
            <span className="italic font-normal" style={{ color: ACCENT }}>With the captain who has fished it since {YEAR_FOUNDED}.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Capt. David Beede runs Tampa Bay&rsquo;s flats, mangroves, and bridge shadows on a 26&rsquo; Gause Built — departing his private South Tampa dock.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={SMS_URL}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Text the Captain to Book
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="tracking-wider" style={{ color: ACCENT }}>★★★★★</span>
            <span>{AVG_RATING} &middot; {REVIEW_COUNT} Google reviews</span>
          </div>
        </div>
      </section>

      {/* ── TRIP OPTIONS ──────────────────────────────────────────────────── */}
      <section id="trips" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Trips &amp; Rates
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Pick your day on the bay
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              4 to 8 hour trips. Licenses, rods, tackle, and live bait included — just bring sunscreen and a cooler. Text {PHONE_FORMATTED} to lock in a date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trips.map((trip) => (
              <article
                key={trip.name}
                className="rounded-xl overflow-hidden bg-white border transition-shadow hover:shadow-lg"
                style={{ borderColor: RULE }}
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={trip.img}
                    alt={trip.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {trip.tag && (
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider"
                      style={{ background: ACCENT }}
                    >
                      {trip.tag}
                    </span>
                  )}
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-2xl font-semibold">{trip.name}</h3>
                    <span className="font-display text-xl font-semibold whitespace-nowrap" style={{ color: ACCENT2 }}>
                      {trip.price}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-wider mb-3" style={{ color: ACCENT }}>
                    {trip.length} &middot; up to 4 anglers
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{trip.desc}</p>
                  <a
                    href={SMS_URL}
                    className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                    style={{ background: ACCENT }}
                  >
                    Text to Book This Trip
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPTAIN'S STORY + SPONSORS ────────────────────────────────────── */}
      <section id="captain" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              The Captain
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              28 years of reading this bay
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Capt. David Beede has been running charters on Tampa Bay since {YEAR_FOUNDED} — long enough to know which mangrove point holds snook on a falling tide and which flat the redfish push onto when the water warms. He has been writing it all down, too: his trip reports go back to 2012.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              His 26&rsquo; Gause Built is purpose-built for skinny water: a 9-foot beam, a custom 14-foot tower for spotting fish, 16 rod holders, and twin 10-foot Power-Poles to lock down on the flats without a sound.
            </p>
            <div className="pt-6 border-t" style={{ borderColor: RULE }}>
              <p className="text-xs uppercase tracking-[0.25em] mb-4 text-gray-400">
                Sponsored by
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {sponsors.map((s) => (
                  <span key={s} className="font-display text-lg font-semibold" style={{ color: ACCENT2 }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1646338176765-6ceeb7b8d970?w=900&q=80"
              alt="Bay boat running across calm water on Tampa Bay"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── RECENT TRIP REPORTS ───────────────────────────────────────────── */}
      <section id="reports" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Fresh from the water
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Recent trip reports
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Capt. David has logged every season on this bay since 2012. Here&rsquo;s what&rsquo;s biting right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tripReports.map((report) => (
              <article
                key={report.title}
                className="rounded-xl overflow-hidden bg-white border transition-shadow hover:shadow-lg"
                style={{ borderColor: RULE }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={report.img}
                    alt={report.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    <span className="text-xs text-gray-400">{report.date}</span>
                    {report.species.map((sp) => (
                      <span
                        key={sp}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                        style={{ background: "#FEF0E6", color: ACCENT }}
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 leading-snug">{report.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{report.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center mt-10">
            <a href="#" className="text-sm font-semibold hover:underline" style={{ color: ACCENT2 }}>
              Browse 13 years of trip reports →
            </a>
          </p>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Loved on the water
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">Based on {REVIEW_COUNT} reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: ACCENT }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT / DEPARTURE ─────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>
              Departure
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Step off the dock, onto the flats
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Private dock — South Tampa</h4>
                <p className="text-gray-700">{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
                <p className="text-sm text-gray-500 mt-1">
                  No boat ramp lines, no marina crowds — you board at the captain&rsquo;s private dock and you&rsquo;re fishing in minutes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Trips depart daily</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr><td className="pr-8 py-0.5">Morning trips</td><td>Sunrise departure</td></tr>
                    <tr><td className="pr-8 py-0.5">Afternoon trips</td><td>By arrangement</td></tr>
                    <tr><td className="pr-8 py-0.5">Tarpon season</td><td>Ask about dawn &amp; dusk tides</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Reach Capt. David</h4>
                <p className="text-gray-700">
                  <a href={SMS_URL} className="hover:opacity-70 transition-opacity font-semibold" style={{ color: ACCENT2 }}>
                    Text {PHONE_FORMATTED} (preferred)
                  </a>
                  <br />
                  <a href={`tel:${PHONE_RAW}`} className="hover:opacity-70 transition-opacity" style={{ color: INK }}>
                    Call {PHONE_FORMATTED}
                  </a>
                  <br />
                  <a href={`mailto:${EMAIL}`} className="hover:opacity-70 transition-opacity" style={{ color: INK }}>
                    {EMAIL}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={SMS_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Text the Captain
                </a>
                <a
                  href={DIRECTIONS_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold border-[1.5px] hover:bg-gray-50 transition-colors"
                  style={{ borderColor: INK, color: INK }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1576418268033-e1bacb7104c7?w=900&q=80"
              alt="Wooden dock over calm shallow water"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-12 px-5 md:px-8 bg-white border-t" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl font-semibold">@{INSTAGRAM_HANDLE}</p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-sm font-medium hover:underline transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.6)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">{BUSINESS_FULL}</p>
            <p>{TAGLINE} &middot; Capt. David Beede</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Departure</h4>
            <p>
              {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />
              <a href={SMS_URL} className="hover:text-white transition-colors">Text {PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} {BUSINESS_FULL} &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
