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
          Tampa · May 2026
        </p>
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          <PreviewLink href="/little-tina-cafe" name="Little Tina Café" status="ready" />
          <PreviewLink href="/jamesjoyce" name="James Joyce Irish Pub" status="ready" />
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
          thryveops.com · hello@thryveops.com
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
