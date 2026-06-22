import Link from "next/link";
import type { Vehicle } from "@/lib/inventory/types";
import { formatPrice, formatMileage, vehicleTitle } from "@/lib/inventory/format";
import { VehiclePhoto } from "./vehicle-photo";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const title = vehicleTitle(vehicle);
  const pending = vehicle.status === "pending";

  return (
    <Link
      href={`/inventory/${vehicle.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-hairline bg-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        <VehiclePhoto src={vehicle.images[0]} alt={title} />
        {pending && (
          <span className="absolute left-3 top-3 rounded-sm bg-ink px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wider text-white">
            Sale Pending
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-sm bg-white/90 px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wider text-gray-700">
          {vehicle.bodyStyle}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight text-ink">{title}</h3>
        <p className="tabular mt-1 text-sm text-gray-500">{formatMileage(vehicle.mileage)}</p>

        <dl className="tabular mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-gray-500">
          <div className="flex justify-between">
            <dt>Drive</dt>
            <dd className="font-semibold text-gray-700">{vehicle.drivetrain ?? "—"}</dd>
          </div>
          <div className="flex justify-between">
            <dt>MPG hwy</dt>
            <dd className="font-semibold text-gray-700">{vehicle.mpgHighway ?? "—"}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-end justify-between border-t border-hairline pt-4">
          <span className="tabular font-display text-xl font-black text-ink">
            {formatPrice(vehicle.price)}
          </span>
          <span className="font-display text-sm font-bold text-red transition-colors group-hover:text-red-dark">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}
