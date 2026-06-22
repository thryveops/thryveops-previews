import type { Metadata } from "next";
import { LeadForm, type LeadFormField } from "@/components/lead-form";
import { InventoryBrowser } from "@/components/inventory/inventory-browser";
import { Eyebrow } from "@/components/ui/section";
import { SpeedLines } from "@/components/speed-lines";
import { getInventorySource } from "@/lib/inventory/source";
import { CarIcon } from "@/components/icons";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Inventory — Used Cars in Clearwater & Largo",
  description:
    "Browse used cars, trucks, and SUVs at Motion Fleet Group in the Clearwater & Largo, FL area. Inventory launching soon — tell us what you're looking for and we'll alert you.",
  alternates: { canonical: "/inventory" },
};

const notifyFields: LeadFormField[] = [
  { name: "name", label: "Full name", required: true, placeholder: "Jordan Smith" },
  { name: "phone", label: "Mobile phone", type: "tel", placeholder: "(727) 555-0123" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  {
    name: "vehicle",
    label: "What are you looking for?",
    full: true,
    placeholder: "e.g. SUV under $25k, low miles, AWD",
  },
];

export default async function InventoryPage() {
  const source = getInventorySource();
  const [vehicles, facets] = await Promise.all([source.list(), source.facets()]);
  const isPreview = !source.live;

  return (
    <>
      {/* Light hero — inventory pages run light so photos read clean (CLAUDE.md §4) */}
      <section className="surface-light relative overflow-hidden border-b border-hairline">
        <SpeedLines
          tone="red"
          className="pointer-events-none absolute -right-6 top-8 h-24 w-72 opacity-[0.12]"
        />
        <div className="shell py-14 sm:py-16">
          <Eyebrow className="reveal">Inventory</Eyebrow>
          <h1 className="reveal mt-4 max-w-3xl font-display text-[length:var(--text-h1)] font-black leading-[0.98] tracking-tight text-ink text-balance">
            {isPreview ? (
              <>
                Our lineup is <span className="text-red">arriving soon</span>.
              </>
            ) : (
              <>Browse our inventory</>
            )}
          </h1>
          <p className="reveal mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
            We&apos;re stocking the lot now. Tell us what you&apos;re after and
            we&apos;ll reach out the moment it lands — or start a pre-approval so
            you&apos;re ready to move when it does.
          </p>
        </div>
      </section>

      {/* Notify / inquiry — the v1 lead capture */}
      {isPreview && (
        <section className="surface-light border-b border-hairline">
          <div className="shell py-14">
            <div className="grid items-start gap-10 rounded-xl border border-hairline bg-white p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red/10">
                  <CarIcon className="h-6 w-6 text-red" />
                </div>
                <h2 className="mt-5 text-h2 font-extrabold text-ink">
                  Get first dibs
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700">
                  Skip the refresh button. Send us your wish list and we&apos;ll
                  text or email you the second a match hits our lot — often before
                  it&apos;s posted anywhere else.
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Looking to buy now?{" "}
                  <a href={brand.phoneHref} className="font-bold text-ink hover:text-red">
                    Call {brand.phone}
                  </a>{" "}
                  — we can often source a specific vehicle for you.
                </p>
              </div>
              <div className="rounded-lg border border-hairline bg-paper p-6 sm:p-7">
                <LeadForm
                  type="inventory-notify"
                  fields={notifyFields}
                  tone="light"
                  submitLabel="Notify Me"
                  successTitle="You're on the list"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Browser — live inventory, or a labeled preview of the experience */}
      <section className="surface-light">
        <div className="shell py-14">
          {isPreview && (
            <div className="mb-8 flex items-start gap-3 rounded-lg border border-red/20 bg-red/5 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red/15 text-xs font-bold text-red">
                i
              </span>
              <p className="text-sm leading-relaxed text-gray-700">
                <strong className="text-ink">Preview of the shopping experience.</strong>{" "}
                The vehicles below are samples that demonstrate how filtering and
                listings will work — they are not currently for sale. Real
                inventory will appear here automatically once we go live.
              </p>
            </div>
          )}
          <InventoryBrowser vehicles={vehicles} facets={facets} />
        </div>
      </section>
    </>
  );
}
