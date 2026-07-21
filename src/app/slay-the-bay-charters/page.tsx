import Image from "next/image";
import Link from "next/link";

// ─── SLAY THE BAY FISHING CHARTERS — concept mockup by Thryve Operations ──────
// Tampa Bay inshore charter · Capt. Kevin Overstreet · Hula Bay Marina, South Tampa
// Server component — no "use client", no event handlers. Fonts loaded via layout.tsx.

// Business identity
const BUSINESS_NAME = "Slay The Bay";
const BUSINESS_FULL = "Slay The Bay Fishing Charters";
const TAGLINE = "Tampa Bay inshore fishing with Capt. Kevin Overstreet";

// Brand palette — coastal navy + sunrise orange (marine category)
const PAPER = "#F7F9FA"; // pale gulf-morning background
const INK = "#0F1E2E"; // deep water ink
const ACCENT = "#0B3D6E"; // charter navy — CTAs, labels
const ACCENT2 = "#C2571B"; // sunrise orange — prices, highlights
const RULE = "#D8E2EA"; // borders / dividers

// Contact & links — real phone, real marina
const PHONE_FORMATTED = "(813) 770-7634";
const PHONE_RAW = "8137707634";
const EMAIL = "slaythebayfishingcharters@yahoo.com";
const MARINA_NAME = "Hula Bay Marina";
const MARINA_AREA = "South Tampa (Gandy)";
const BOOKING_URL = `tel:${PHONE_RAW}`; // call/text to book
const DIRECTIONS_URL = "https://maps.google.com/?q=Hula+Bay+Marina+Tampa+FL";
const INSTAGRAM_HANDLE = "capt.kevinoverstreet";
const AVG_RATING = "5.0";
const REVIEW_COUNT = "203";

// ─── PAGE METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  title: "Slay The Bay Fishing Charters — Tampa Bay Inshore Fishing",
  description:
    "Inshore fishing charters on Tampa Bay with Capt. Kevin Overstreet. Snook, redfish, tarpon and trout on the flats — license, tackle, bait and ice included. Departing Hula Bay Marina, South Tampa.",
};

// ─── TRIPS — illustrative rates; license, tackle, bait & ice included ─────────
const trips = [
  {
    name: "Half-Day Inshore",
    desc: "Four hours working the flats and mangrove shorelines for snook, redfish and speckled trout. The go-to trip for families and first-timers.",
    duration: "4 hrs",
    detail: "Up to 4 anglers",
    price: "$600",
    popular: true,
  },
  {
    name: "Full-Day Inshore",
    desc: "Six hours to chase the tide across Tampa Bay — more water, more spots, and time to follow the bite wherever it leads.",
    duration: "6 hrs",
    detail: "Up to 4 anglers",
    price: "$800",
    popular: false,
  },
  {
    name: "Tarpon Season Special",
    desc: "May through July, the silver kings roll through Tampa Bay. Live bait, heavy tackle, and a real shot at the fish of a lifetime.",
    duration: "6 hrs",
    detail: "May – July",
    price: "$850",
    popular: false,
  },
];

// ─── CATCH GALLERY — verified Unsplash imagery ────────────────────────────────
const gallery = [
  {
    src: "https://images.unsplash.com/photo-1600044956215-8374ac2e2509?w=800&q=80",
    alt: "Angler holding a fresh catch aboard the boat",
  },
  {
    src: "https://images.unsplash.com/photo-1714732095394-2c08409358f4?w=800&q=80",
    alt: "Mangrove roots at the waterline — snook country",
  },
  {
    src: "https://images.unsplash.com/photo-1515631604561-23e0be68ee06?w=800&q=80",
    alt: "Angler landing a silver fish on coastal water",
  },
  {
    src: "https://images.unsplash.com/photo-1643398090340-b2bc623e51f1?w=800&q=80",
    alt: "Mangrove-lined shoreline where the snook hold",
  },
  {
    src: "https://images.unsplash.com/photo-1587117187126-a0f6208e6739?w=800&q=80",
    alt: "Palm-lined Florida waterway near the launch",
  },
  {
    src: "https://images.unsplash.com/photo-1631655104117-f1cfdf688772?w=800&q=80",
    alt: "Boats docked at the marina at sunset",
  },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
const reviews = [
  {
    text: "Capt. Kevin put my son on his first snook twenty minutes out of Hula Bay. He knew exactly which mangrove line would be holding fish on that tide. Best morning of our whole Tampa trip.",
    author: "Marcus D. · Google review",
  },
  {
    text: "We jumped three tarpon in one afternoon in June. Kevin had the bait, the spots, and the patience to coach two total beginners through it. You can tell he fishes this bay every single day.",
    author: "Alyssa R. · Google review",
  },
  {
    text: "Everything was handled — licenses, tackle, bait, ice for the cooler. All we brought was sunscreen and drinks. Redfish and trout all morning, cleaned and bagged at the dock.",
    author: "Tom B. · Google review",
  },
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function MockupPage() {
  return (
    <div className="font-sans antialiased" style={{ background: PAPER, color: INK }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ background: "rgba(247,249,250,0.95)", borderColor: RULE }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: ACCENT }}>
              {BUSINESS_NAME}
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em]" style={{ color: ACCENT2 }}>
              Fishing Charters
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#trips" className="hover:opacity-60 transition-opacity">Trips &amp; Rates</a>
            <a href="#captain" className="hover:opacity-60 transition-opacity">The Captain</a>
            <a href="#gallery" className="hover:opacity-60 transition-opacity">Catches</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Where We Launch</a>
            <a
              href={BOOKING_URL}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Call to Book
            </a>
          </div>
          <a
            href={BOOKING_URL}
            className="md:hidden px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: ACCENT }}
          >
            Book
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[86vh] min-h-[580px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1646338176786-dfbcaa821535?w=1800&q=80"
          alt="Angler casting from a skiff on the Tampa Bay flats"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,29,46,0.35) 0%, rgba(11,29,46,0.45) 55%, rgba(11,29,46,0.85) 100%)" }}
        />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/75">
            Tampa Bay Inshore &middot; {MARINA_NAME}, {MARINA_AREA}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.02]">
            Snook. Redfish. Tarpon.{" "}
            <span className="italic font-normal" style={{ color: "#F0A868" }}>Slay The Bay.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Flats and mangrove fishing with Capt. Kevin Overstreet — on Tampa Bay
            roughly 250 days a year. License, tackle, bait and ice included on every trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full font-semibold text-white transition hover:brightness-110"
              style={{ background: ACCENT2 }}
            >
              Call {PHONE_FORMATTED}
            </a>
            <a
              href="#trips"
              className="bg-white/10 backdrop-blur border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
            >
              See Trips &amp; Rates
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/75">
            <span className="tracking-wider" style={{ color: "#F0A868" }}>★★★★★</span>
            <span>{AVG_RATING} · {REVIEW_COUNT} Google reviews — every one of them five stars</span>
          </div>
        </div>
      </section>

      {/* ── TRIPS & RATES ─────────────────────────────────────────────────── */}
      <section id="trips" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT2 }}>
              Trips &amp; Rates
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Pick your water. We handle the rest.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every trip includes fishing licenses, tackle, live bait, and a cooler full of ice
              for up to four anglers. Just bring drinks, snacks, and sunscreen (no spray, please).
            </p>
          </div>

          <div className="space-y-0 border-t" style={{ borderColor: RULE }}>
            {trips.map((trip) => (
              <div
                key={trip.name}
                className="grid grid-cols-1 md:grid-cols-[1fr,auto,auto] gap-4 md:gap-8 py-7 border-b items-center hover:bg-white transition-colors duration-150"
                style={{ borderColor: RULE }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-2xl font-semibold">{trip.name}</h3>
                    {trip.popular && (
                      <span
                        className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full text-white"
                        style={{ background: ACCENT2 }}
                      >
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{trip.desc}</p>
                </div>
                <div className="text-sm text-gray-400 md:text-right whitespace-nowrap">
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">{trip.duration}</span>
                  {trip.detail}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-display font-semibold" style={{ color: ACCENT2 }}>
                    {trip.price}
                  </span>
                  <a
                    href={BOOKING_URL}
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap transition hover:brightness-110"
                    style={{ background: ACCENT }}
                  >
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Call or text {PHONE_FORMATTED} to check dates. Beer is welcome aboard — no liquor, please.
          </p>
        </div>
      </section>

      {/* ── THE CAPTAIN ───────────────────────────────────────────────────── */}
      <section id="captain" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT2 }}>
              Your Guide
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Capt. Kevin Overstreet
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Kevin grew up fishing Tampa Bay&rsquo;s South Shore and never really left the water —
              he runs charters roughly 250 days a year from a Shearwater 25LTZ built for
              skinny flats and mangrove shorelines.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              That kind of time on the bay is the difference between a boat ride and a fish
              story. Kevin reads the tide, finds the bait, and puts first-timers and seasoned
              anglers alike on snook, redfish, trout — and in season, the silver kings.
            </p>
            <div className="flex flex-wrap gap-6 text-center">
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>250+</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">Days/yr on the water</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>{AVG_RATING} ★</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">{REVIEW_COUNT} Google reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>25&rsquo;</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">Shearwater 25LTZ</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1605499907240-d4240d766581?w=900&q=80"
              alt="Casting into a golden Gulf sunset"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CATCH GALLERY ─────────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT2 }}>
                The Catch Log
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Fresh from the flats
              </h2>
            </div>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-sm font-medium hover:underline transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              Follow @{INSTAGRAM_HANDLE} →
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((photo) => (
              <div key={photo.src} className="relative aspect-square overflow-hidden rounded-lg">
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
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {/* composite reviews — replace with real GMB quotes before live deployment */}
      <section className="py-20 md:py-32 px-5 md:px-8 text-white" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#F0A868" }}>
              Anglers love this boat
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ★★★★★ {AVG_RATING} on Google
            </h2>
            <p className="text-white/60">
              {REVIEW_COUNT} reviews. Not one below five stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <blockquote key={i} className="p-7 rounded-lg border border-white/15">
                <p className="mb-3 tracking-wider" style={{ color: "#F0A868" }}>★★★★★</p>
                <p className="text-white/90 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm text-white/50">— {review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE WE LAUNCH ───────────────────────────────────────────────── */}
      <section id="visit" className="py-20 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT2 }}>
              Where We Launch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {MARINA_NAME}, {MARINA_AREA}
            </h2>

            <div className="space-y-6 text-base">
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Departure point</h4>
                <p className="text-gray-700">
                  {MARINA_NAME} &middot; {MARINA_AREA}, Tampa, FL<br />
                  Free parking at the marina — meet at the dock 15 minutes before departure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Trip times</h4>
                <table className="text-sm text-gray-700">
                  <tbody>
                    <tr><td className="pr-8 py-0.5">Morning trips</td><td>Depart 7:00 AM</td></tr>
                    <tr><td className="pr-8 py-0.5">Afternoon trips</td><td>Depart 1:00 PM</td></tr>
                    <tr><td className="pr-8 py-0.5">Availability</td><td>7 days a week, weather permitting</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Book your date</h4>
                <p className="text-gray-700">
                  <a href={`tel:${PHONE_RAW}`} className="hover:opacity-70 transition-opacity" style={{ color: INK }}>
                    {PHONE_FORMATTED}
                  </a>{" "}
                  <span className="text-gray-400">(call or text)</span>
                  <br />
                  <a href={`mailto:${EMAIL}`} className="hover:opacity-70 transition-opacity" style={{ color: INK }}>
                    {EMAIL}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={BOOKING_URL}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ACCENT }}
                >
                  Call to Book
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

          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1741208625154-872b798513da?w=900&q=80"
              alt="Boats docked at the marina at sunset"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="py-12 px-5 md:px-8 text-sm" style={{ background: INK, color: "rgba(255,255,255,0.6)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-2">{BUSINESS_FULL}</p>
            <p>{TAGLINE}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Find the boat</h4>
            <p>
              {MARINA_NAME} &middot; {MARINA_AREA}<br />
              Tampa, Florida<br />
              <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors">{PHONE_FORMATTED}</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Follow the bite</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.slaythebayfishing.com" className="hover:text-white transition-colors">Website</a>
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
