import Image from "next/image";
import Link from "next/link";

// ─── Tampa Fishing Charters®, Inc. — concept mockup by Thryve Operations ──────
// Server component. No "use client", no event handlers. Fonts loaded globally.

// Business identity
const BUSINESS_NAME = "Tampa Fishing Charters";
const TAGLINE = "Tampa Bay Inshore Fishing Charters";
const YEARS = "30";

// Brand palette — gulf navy + Florida sunset orange (marine category)
const PAPER = "#FAFAF7";
const INK = "#0F1B2A";
const ACCENT = "#0B3D6E"; // gulf navy
const ORANGE = "#F97316"; // CTA / sunset orange
const RULE = "#DCE5EE";

// Contact & links
const PHONE_FORMATTED = "(813) 245-4738";
const PHONE_RAW = "8132454738";
const EMAIL = "Contact@TampaFishingCharters.com";
const BOOKING_URL = "#book";
const INSTAGRAM_HANDLE = "tampafishingcharters";
const AVG_RATING = "5.0";
const REVIEW_COUNT = "486";

// ─── PAGE METADATA ────────────────────────────────────────────────────────────
export const metadata = {
  title: "Tampa Fishing Charters®, Inc. — Tampa Bay Inshore Fishing with Capt. Oliver O'Riordan",
  description:
    "30 years guiding Tampa Bay. Snook, redfish, tarpon and trout with USCG-licensed Capt. Oliver O'Riordan. Three departure points: Downtown Tampa, Apollo Beach and Ruskin. Book your trip today.",
};

// ─── TRIPS — real published rates from tampafishingcharters.com/rates ─────────
const trips = [
  {
    name: "Half Day",
    hours: "4 Hours",
    price: "$425",
    badge: "",
    desc: "The perfect introduction to Tampa Bay. A quick trip with plenty of action and the chance to hit a variety of species.",
  },
  {
    name: "3/4 Day",
    hours: "5 Hours",
    price: "$525",
    badge: "",
    desc: "Cover more water and more spots. A favorite for business outings and groups that want maximum hook time.",
  },
  {
    name: "Full Day",
    hours: "6 Hours",
    price: "$625",
    badge: "Best Value",
    desc: "Maximize your time on the water. Ideal for beginners who want to learn and experienced anglers chasing a slam.",
  },
  {
    name: "Sunset Cruises & Groups",
    hours: "Hours TBD",
    price: "Call for Quote",
    badge: "",
    desc: "Sunset cruises on the bay, plus team-building and corporate packages for larger parties.",
  },
];

// ─── DEPARTURE POINTS — the differentiator: 3 marinas across the bay ──────────
const locations = [
  {
    area: "Downtown Tampa",
    name: "Channelside Walk Way",
    address: "401 Channelside Walk Way, Tampa, FL 33602",
    note: "Steps from the Riverwalk, Sparkman Wharf and downtown hotels.",
    maps: "https://maps.google.com/?q=401+Channelside+Walk+Way+Tampa+FL+33602",
  },
  {
    area: "Apollo Beach",
    name: "Lands End Marina",
    address: "1220 Apollo Beach Blvd, Apollo Beach, FL 33572",
    note: "Fast access to the flats and mangrove shorelines of the east bay.",
    maps: "https://maps.google.com/?q=1220+Apollo+Beach+Blvd+Apollo+Beach+FL+33572",
  },
  {
    area: "Ruskin",
    name: "Little Harbor Resort",
    address: "536 Bahia Beach Blvd, Ruskin, FL 33570",
    note: "Dockside pickup at The Resort and Club at Little Harbor.",
    maps: "https://maps.google.com/?q=536+Bahia+Beach+Blvd+Ruskin+FL+33570",
  },
];

// ─── TARGET SPECIES ───────────────────────────────────────────────────────────
const species = [
  { name: "Snook", season: "Year-round · peaks in summer" },
  { name: "Redfish", season: "Year-round · schools in fall" },
  { name: "Tarpon", season: "April – July" },
  { name: "Speckled Trout", season: "Fall through spring" },
];

// ─── GALLERY — verified Unsplash, inshore/bay imagery ─────────────────────────
const gallery = [
  {
    src: "https://images.unsplash.com/photo-1647980516747-46af39572d38?w=700&q=80",
    alt: "Speckled trout caught on Tampa Bay",
  },
  {
    src: "https://images.unsplash.com/photo-1646338176902-3a9e99c13240?w=700&q=80",
    alt: "Working the flats from the bay boat",
  },
  {
    src: "https://images.unsplash.com/photo-1624744952264-3a7dd94e0f3b?w=700&q=80",
    alt: "Running turquoise water along the shoreline",
  },
  {
    src: "https://images.unsplash.com/photo-1647980516774-7e3676a92d38?w=700&q=80",
    alt: "Happy angler with an inshore catch",
  },
  {
    src: "https://images.unsplash.com/photo-1650081484358-b338642813c0?w=700&q=80",
    alt: "Inshore spinning setup rigged and ready at the dock",
  },
  {
    src: "https://images.unsplash.com/photo-1604064412467-af16406b5ba5?w=700&q=80",
    alt: "Sunset cruise on the bay",
  },
];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
const reviews = [
  {
    text: "Capt. Oliver put my two boys on their first snook within the hour. He cleaned our catch at the dock and had us back to our hotel downtown by lunch. Worth every penny.",
    author: "Marcus T. · Google review",
  },
  {
    text: "We were staying in Apollo Beach and he picked us up right at Lands End Marina. Redfish after redfish — the man knows every mangrove pocket in this bay.",
    author: "Dana R. · Google review",
  },
  {
    text: "Thirty years on this water and it shows. Everything was included — bait, licenses, even parking. Zero stress, all fishing. Already booked our next trip.",
    author: "J. Whitfield · Google review",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(250,250,247,0.96)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-display text-lg md:text-xl font-bold tracking-tight" style={{ color: ACCENT }}>
              {BUSINESS_NAME}<sup className="text-[0.55em]">&reg;</sup>, Inc.
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: ORANGE }}>
              Est. {YEARS} Years on the Bay
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#trips" className="hover:opacity-60 transition-opacity">Trips &amp; Rates</a>
            <a href="#locations" className="hover:opacity-60 transition-opacity">Departure Points</a>
            <a href="#captain" className="hover:opacity-60 transition-opacity">The Captain</a>
            <a href="#catch" className="hover:opacity-60 transition-opacity">What We Catch</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ORANGE }}
            >
              Book Your Trip
            </a>
          </div>
          <a
            href={BOOKING_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ORANGE }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative h-[86vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1755126088334-95bdfac86f35?w=1800&q=80"
          alt="Fishing rods over Tampa Bay with the city skyline on the horizon"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,29,50,0.35) 0%, rgba(11,29,50,0.45) 55%, rgba(11,29,50,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/75">
            Downtown Tampa &middot; Apollo Beach &middot; Ruskin
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            {YEARS} years of finding fish{" "}
            <span className="italic font-normal" style={{ color: "#FDBA74" }}>on Tampa Bay.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Snook, redfish, tarpon and trout with USCG-licensed Capt. Oliver O&rsquo;Riordan.
            Everything included — bait, tackle, licenses and fish cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ORANGE }}
            >
              Check Availability
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Call {PHONE_FORMATTED}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/75">
            <span className="tracking-wider" style={{ color: "#FDBA74" }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews · Registered trademark, the original</span>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────────────── */}
      <section className="text-white" style={{ background: ACCENT }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-display text-3xl font-bold">{YEARS} Yrs</p>
            <p className="text-xs uppercase tracking-wider text-white/70 mt-1">Guiding Tampa Bay</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold">{AVG_RATING} ★</p>
            <p className="text-xs uppercase tracking-wider text-white/70 mt-1">{REVIEW_COUNT} Google Reviews</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold">3</p>
            <p className="text-xs uppercase tracking-wider text-white/70 mt-1">Departure Points</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold">USCG</p>
            <p className="text-xs uppercase tracking-wider text-white/70 mt-1">Licensed #1188182</p>
          </div>
        </div>
      </section>

      {/* ── TRIPS & RATES ───────────────────────────────────────────────────── */}
      <section id="trips" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ORANGE }}>
              Trips &amp; Rates
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Flat rates. Everything included.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every trip includes up to 2 anglers — add more at $50 per person (max 6). Tackle, rods and reels,
              licensing, live bait, ice, fish cleaning and parking are all covered. Bring food, drinks and sunscreen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trips.map((trip) => (
              <article
                key={trip.name}
                className="relative flex flex-col rounded-xl border bg-white p-7 transition-shadow hover:shadow-lg"
                style={{ borderColor: trip.badge ? ORANGE : RULE }}
              >
                {trip.badge && (
                  <span
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white"
                    style={{ background: ORANGE }}
                  >
                    {trip.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold mb-1">{trip.name}</h3>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">{trip.hours}</p>
                <p className="font-display text-4xl font-bold mb-4" style={{ color: ACCENT }}>
                  {trip.price}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{trip.desc}</p>
                <a
                  href={BOOKING_URL}
                  className="text-center px-5 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Book This Trip
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPARTURE POINTS — the differentiator ───────────────────────────── */}
      <section id="locations" className="py-20 md:py-32 px-5 md:px-8 bg-white border-y" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ORANGE }}>
              Three Departure Points
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              We leave from the dock closest to you.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The only charter on Tampa Bay running from downtown, Apollo Beach and Ruskin —
              wherever you&rsquo;re staying, your trip starts nearby.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <article
                key={loc.name}
                className="rounded-xl border p-7 flex flex-col transition-colors hover:bg-[#F4F8FC]"
                style={{ borderColor: RULE }}
              >
                <p className="text-xs uppercase tracking-[0.25em] mb-2 font-semibold" style={{ color: ORANGE }}>
                  {loc.area}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-2">{loc.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{loc.address}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{loc.note}</p>
                <a
                  href={loc.maps}
                  className="text-sm font-semibold hover:underline transition-opacity hover:opacity-70"
                  style={{ color: ACCENT }}
                >
                  Get Directions →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CAPTAIN ─────────────────────────────────────────────────────── */}
      <section id="captain" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ORANGE }}>
              Your Captain
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Three decades on this water.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Capt. Oliver O&rsquo;Riordan has fished Tampa Bay for {YEARS} years — long enough to build
              the biggest charter reputation in Tampa and a registered trademark to go with it. He holds
              USCG license #1188182, and every trip runs on his boat, with his gear, at his standard.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              This is inshore and nearshore fishing the way it should be: reading tides, working mangrove
              shorelines and grass flats, and putting first-timers and seasoned anglers alike on snook,
              redfish, tarpon and trout — then cleaning your catch at the dock.
            </p>
            <a
              href={BOOKING_URL}
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Fish with Capt. Oliver
            </a>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1646338176794-bc3e3ff71cb7?w=900&q=80"
              alt="Capt. Oliver casting from the bow on the flats of Tampa Bay"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT WE CATCH + GALLERY ─────────────────────────────────────────── */}
      <section id="catch" className="py-20 md:py-32 px-5 md:px-8 bg-white border-y" style={{ borderColor: RULE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ORANGE }}>
              What We Catch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              The Tampa Bay inshore slam.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {species.map((sp) => (
              <div
                key={sp.name}
                className="rounded-lg border px-5 py-4 text-center transition-colors hover:border-[#F97316]"
                style={{ borderColor: RULE }}
              >
                <p className="font-display text-xl font-semibold" style={{ color: ACCENT }}>{sp.name}</p>
                <p className="text-xs text-gray-500 mt-1">{sp.season}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-sm font-semibold hover:underline transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              See this week&rsquo;s catch — @{INSTAGRAM_HANDLE} →
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#FDBA74" }}>
              Anglers love this boat
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">A perfect rating across {REVIEW_COUNT} reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: "#FDBA74" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK / CHECK AVAILABILITY ───────────────────────────────────────── */}
      <section id="book" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ORANGE }}>
              Book Your Trip
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Check availability.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tell us your dates and party size and we&rsquo;ll confirm within hours — or call the captain
              directly. Trips run year-round from all three departure points.
            </p>

            <div className="space-y-5 text-base">
              <div>
                <h4 className="font-semibold mb-1">Call or text</h4>
                <a href={`tel:${PHONE_RAW}`} className="text-gray-700 hover:opacity-70 transition-opacity">
                  {PHONE_FORMATTED}
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href={`mailto:${EMAIL}`} className="text-gray-700 hover:opacity-70 transition-opacity break-all">
                  {EMAIL}
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Departure points</h4>
                <p className="text-gray-700">
                  Channelside Walk Way (Downtown Tampa)<br />
                  Lands End Marina (Apollo Beach)<br />
                  Little Harbor Resort (Ruskin)
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mt-10">
              <Image
                src="https://images.unsplash.com/photo-1685399906145-fe59868f8080?w=900&q=80"
                alt="Florida marina dock at departure time"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* decorative form — no action, no handlers */}
          <form className="rounded-xl border bg-white p-7 md:p-9 space-y-5" style={{ borderColor: RULE }}>
            <h3 className="font-display text-2xl font-semibold">Request your date</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block text-sm">
                <span className="font-medium">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:border-[#0B3D6E]"
                  style={{ borderColor: RULE }}
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Phone</span>
                <input
                  type="tel"
                  placeholder="(813) 555-0100"
                  className="mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:border-[#0B3D6E]"
                  style={{ borderColor: RULE }}
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-medium">Preferred date</span>
              <input
                type="text"
                placeholder="e.g. Saturday, Aug 15"
                className="mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:border-[#0B3D6E]"
                style={{ borderColor: RULE }}
              />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block text-sm">
                <span className="font-medium">Trip</span>
                <select
                  className="mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none bg-white"
                  style={{ borderColor: RULE }}
                  defaultValue="Half Day — $425"
                >
                  <option>Half Day — $425</option>
                  <option>3/4 Day — $525</option>
                  <option>Full Day — $625</option>
                  <option>Sunset Cruise</option>
                  <option>Group / Corporate</option>
                </select>
              </label>
              <label className="block text-sm">
                <span className="font-medium">Anglers</span>
                <select
                  className="mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none bg-white"
                  style={{ borderColor: RULE }}
                  defaultValue="2"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </label>
            </div>
            <button
              type="button"
              className="w-full px-6 py-3.5 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ORANGE }}
            >
              Check Availability
            </button>
            <p className="text-xs text-gray-400 text-center">
              Quick response — usually within the hour during the day.
            </p>
          </form>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────────── */}
      <section className="text-white text-center px-5 py-16 md:py-20" style={{ background: ACCENT }}>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          The bay is waiting.
        </h2>
        <p className="text-white/75 mb-8 max-w-xl mx-auto">
          {YEARS} years, {REVIEW_COUNT} five-star reviews, three departure points. One call and you&rsquo;re on the water.
        </p>
        <a
          href={`tel:${PHONE_RAW}`}
          className="inline-block px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
          style={{ background: ORANGE }}
        >
          Call {PHONE_FORMATTED}
        </a>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.6)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">
              {BUSINESS_NAME}<sup className="text-[0.55em]">&reg;</sup>, Inc.
            </p>
            <p>{TAGLINE}</p>
            <p className="mt-2 text-white/40">Capt. Oliver O&rsquo;Riordan · USCG #1188182</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Departure Points</h4>
            <p>
              401 Channelside Walk Way, Tampa, FL 33602<br />
              1220 Apollo Beach Blvd, Apollo Beach, FL 33572<br />
              536 Bahia Beach Blvd, Ruskin, FL 33570
            </p>
            <p className="mt-2">
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.facebook.com/tampafishingcharters" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Tampa Fishing Charters&reg;, Inc. &middot; Concept mockup by Thryve Operations</span>
          <Link href="/" className="hover:text-white/70 underline-offset-4">
            &larr; All previews
          </Link>
        </div>
      </footer>

    </div>
  );
}
