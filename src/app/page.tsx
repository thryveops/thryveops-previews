import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
          Thryve Operations · Preview Index
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Private preview mockups
        </h1>
        <p className="text-neutral-600 leading-relaxed mb-12">
          These are concept-only mockups built by Thryve Operations for
          prospective clients. Each preview demonstrates what a modern website
          could look like for a specific business — no contract, no commitment.
        </p>

        <p className="text-xs tracking-wider uppercase text-neutral-500 mb-4">
          Tampa · July 2026 — In-Person Batch
        </p>
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200 mb-12">
          <PreviewLink href="/k-dessert-cafe" name="K-dessert Cafe" status="ready" />
          <PreviewLink href="/sea-maids-creamery" name="Sea Maids Creamery" status="ready" />
          <PreviewLink href="/las-vegas-tattoo-co" name="Las Vegas Tattoo Co" status="ready" />
          <PreviewLink href="/angry-raven-tattoo" name="Angry Raven Tattoo" status="ready" />
          <PreviewLink href="/tampa-tattoo-co" name="Tampa Tattoo Co." status="ready" />
          <PreviewLink href="/tonikon-barbershop" name="Tonikon Barbershop" status="ready" />
          <PreviewLink href="/the-fade-factory" name="The Fade Factory Gentlemen's Grooming" status="ready" />
          <PreviewLink href="/razorz-edge-barbershop" name="Razorz Edge Barbershop" status="ready" />
          <PreviewLink href="/jb-mobile-detailing" name="The J&B Mobile Detailing" status="ready" />
        </ul>

        <p className="text-xs tracking-wider uppercase text-neutral-500 mb-4">
          Tampa · July 2026
        </p>
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200 mb-12">
          <PreviewLink href="/v-nail-and-beauty" name="V Nail and Beauty" status="ready" />
          <PreviewLink href="/t-and-d-nail-salon" name="T and D Nail Salon" status="ready" />
          <PreviewLink href="/lv-nails-spa" name="LV Nails & Spa" status="ready" />
          <PreviewLink href="/levisa-massage-spa" name="LeVisa Massage Spa & Wellness" status="ready" />
          <PreviewLink href="/aguila-electrical" name="Aguila Electrical Services" status="ready" />
          <PreviewLink href="/plumbgreat-plumbing" name="Plumbgreat Plumbing" status="ready" />
          <PreviewLink href="/albert-ellis-landscaping" name="Albert & Ellis Landscaping" status="ready" />
          <PreviewLink href="/mastercut-lawn-service" name="MasterCut Lawn Service" status="ready" />
          <PreviewLink href="/stay-dry-roofing" name="Stay Dry Roofing of Tampa Bay" status="ready" />
          <PreviewLink href="/slay-the-bay-charters" name="Slay The Bay Fishing Charters" status="ready" />
          <PreviewLink href="/tampa-fishing-charters" name="Tampa Fishing Charters" status="ready" />
          <PreviewLink href="/shallow-point-charters" name="Shallow Point Fishing Charters" status="ready" />
        </ul>

        <p className="text-xs tracking-wider uppercase text-neutral-500 mb-4">
          Tampa · May 2026
        </p>
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          <PreviewLink href="https://nyx-club.thryveops.com" name="NYX Gentlemen's Club" status="ready" />
          <PreviewLink href="/little-tina-cafe" name="Little Tina Café" status="ready" />
          <PreviewLink href="/jamesjoyce" name="James Joyce Irish Pub" status="ready" />
          <PreviewLink href="/mentalgame" name="Mental Game — Evan J" status="ready" />
          <PreviewLink href="/laterrazza" name="La Terrazza" status="draft" />
          <PreviewLink href="/salrosa" name="Sal Rosa" status="draft" />
          <PreviewLink href="/frontporch" name="Front Porch & Bart's Tavern" status="draft" />
          <PreviewLink href="/coasis" name="Coasis Restaurant" status="draft" />
          <PreviewLink href="/rollinmullet" name="The Rollin' Mullet" status="draft" />
          <PreviewLink href="/elevationcoffee" name="Elevation Coffee Heights" status="draft" />
          <PreviewLink href="/thegoods" name="The Goods – Coffee & Gifts" status="draft" />
          <PreviewLink href="/hotwax" name="HotWax Coffee Shop & Tap House" status="draft" />
          <PreviewLink href="/retrohouse" name="Retro House" status="draft" />
        </ul>

        <p className="text-xs text-neutral-400 mt-12">
          thryveops.com · contact@thryveops.com
        </p>
      </div>
    </main>
  );
}

function PreviewLink({
  href,
  name,
  status,
}: {
  href: string;
  name: string;
  status: "ready" | "draft";
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-between py-4 hover:bg-neutral-100 transition px-2 -mx-2 rounded"
      >
        <span className="font-medium">{name}</span>
        <span
          className={`text-xs uppercase tracking-wider px-2 py-1 rounded ${
            status === "ready"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-neutral-200 text-neutral-600"
          }`}
        >
          {status}
        </span>
      </Link>
    </li>
  );
}
