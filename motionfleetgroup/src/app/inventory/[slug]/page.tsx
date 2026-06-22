import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInventorySource } from "@/lib/inventory/source";
import { formatPrice, formatMileage, vehicleTitle } from "@/lib/inventory/format";
import { VehiclePhoto } from "@/components/inventory/vehicle-photo";
import { VehicleInquiry } from "@/components/inventory/vehicle-inquiry";
import { ButtonLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { brand, ctas } from "@/lib/brand";
import type { Vehicle } from "@/lib/inventory/types";

export async function generateStaticParams() {
  const source = getInventorySource();
  const vehicles = await source.list();
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = await getInventorySource().get(slug);
  if (!vehicle) return { title: "Vehicle not found" };
  const title = vehicleTitle(vehicle);
  return {
    title: `${title} — ${formatPrice(vehicle.price)}`,
    description:
      vehicle.description ??
      `${title} for sale at ${brand.displayName} in the Clearwater & Largo, FL area.`,
    alternates: { canonical: `/inventory/${vehicle.slug}` },
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = getInventorySource();
  const vehicle = await source.get(slug);
  if (!vehicle) notFound();

  const title = vehicleTitle(vehicle);
  const isPreview = !source.live;

  return (
    <div className="surface-light">
      <div className="shell py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/inventory" className="hover:text-ink">
            Inventory
          </Link>
          <span className="px-2 text-gray-500/60">/</span>
          <span className="text-ink">{title}</span>
        </nav>

        {isPreview && (
          <div className="mb-6 rounded-lg border border-red/20 bg-red/5 p-4 text-sm leading-relaxed text-gray-700">
            <strong className="text-ink">Sample listing.</strong> This page
            demonstrates the vehicle-detail template. This specific vehicle is
            not currently for sale — live inventory launches soon.
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Left: gallery + details */}
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-hairline bg-paper">
              <VehiclePhoto src={vehicle.images[0]} alt={title} priority sizes="(max-width: 1024px) 100vw, 60vw" />
              {vehicle.status === "pending" && (
                <span className="absolute left-4 top-4 rounded-sm bg-ink px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">
                  Sale Pending
                </span>
              )}
            </div>
            {/* Thumbnail strip placeholder */}
            <div className="mt-3 grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-md border border-hairline bg-paper"
                >
                  <VehiclePhoto src={vehicle.images[i + 1]} alt={`${title} view ${i + 2}`} sizes="20vw" />
                </div>
              ))}
            </div>

            {/* Spec sheet */}
            <section className="mt-10">
              <h2 className="font-display text-xl font-extrabold text-ink">Specifications</h2>
              <dl className="tabular mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
                {specRows(vehicle).map(([label, value]) => (
                  <div key={label} className="bg-white px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-gray-500">{label}</dt>
                    <dd className="mt-0.5 font-display font-bold text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Description */}
            {vehicle.description && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-extrabold text-ink">Overview</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-gray-700">
                  {vehicle.description}
                </p>
              </section>
            )}

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-extrabold text-ink">Features</h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-gray-700">
                      <CheckIcon className="h-4 w-4 shrink-0 text-red" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right: sticky purchase rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-hairline bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)]">
              <p className="font-display text-sm font-semibold text-gray-500">{vehicle.bodyStyle}</p>
              <h1 className="mt-1 font-display text-2xl font-black leading-tight text-ink">{title}</h1>
              <div className="mt-3 flex items-end justify-between">
                <span className="tabular font-display text-3xl font-black text-ink">
                  {formatPrice(vehicle.price)}
                </span>
                <span className="tabular text-sm text-gray-500">{formatMileage(vehicle.mileage)}</span>
              </div>

              <div className="my-5 h-px bg-hairline" />

              <VehicleInquiry vehicle={title} vin={vehicle.vin} />

              <div className="mt-5 rounded-lg bg-paper p-4 text-center">
                <p className="text-sm text-gray-700">Want to know your payment?</p>
                <ButtonLink
                  href={`${ctas.preApproved.href}#calculator`}
                  variant="outline"
                  size="sm"
                  className="mt-2 w-full border-ink/20 text-ink hover:bg-ink/5"
                >
                  Estimate &amp; get pre-approved
                </ButtonLink>
              </div>

              <p className="mt-4 text-center text-sm text-gray-500">
                Or call{" "}
                <a href={brand.phoneHref} className="font-bold text-ink hover:text-red">
                  {brand.phone}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function specRows(v: Vehicle): [string, string][] {
  const rows: [string, string | undefined][] = [
    ["Year", String(v.year)],
    ["Make", v.make],
    ["Model", v.model],
    ["Trim", v.trim],
    ["Mileage", formatMileage(v.mileage)],
    ["Body", v.bodyStyle],
    ["Drivetrain", v.drivetrain],
    ["Transmission", v.transmission],
    ["Engine", v.engine],
    ["Fuel", v.fuelType],
    ["MPG", v.mpgCity && v.mpgHighway ? `${v.mpgCity} city / ${v.mpgHighway} hwy` : undefined],
    ["Exterior", v.exteriorColor],
    ["Interior", v.interiorColor],
    ["VIN", v.vin],
  ];
  return rows.filter((r): r is [string, string] => Boolean(r[1]));
}
