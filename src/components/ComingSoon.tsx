import Link from "next/link";

export function ComingSoon({
  business,
  hookHeadline,
  hookBody,
}: {
  business: string;
  hookHeadline: string;
  hookBody: string;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 text-neutral-900 px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
          Thryve Operations · Concept Preview
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {business}
        </h1>
        <div className="border-y border-neutral-200 py-8 my-8 text-left">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
            What we noticed
          </p>
          <p className="font-display text-xl md:text-2xl font-semibold mb-3 leading-snug">
            {hookHeadline}
          </p>
          <p className="text-neutral-600 leading-relaxed">{hookBody}</p>
        </div>
        <p className="text-neutral-700 mb-2">
          A full concept mockup is in progress.
        </p>
        <p className="text-sm text-neutral-500 mb-10">
          We&apos;ll share the live preview as soon as it&apos;s ready.
        </p>
        <p className="text-xs text-neutral-400 mt-12">
          thryveops.com · hello@thryveops.com
        </p>
      </div>
    </main>
  );
}
