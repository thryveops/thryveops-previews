/** Pure, client-safe filtering + sorting. Shared by the server source and the
 *  client-side browser so behavior is identical in both. */
import type { Vehicle, VehicleFilters } from "./types";

export function filterAndSort(vehicles: Vehicle[], f: VehicleFilters = {}): Vehicle[] {
  let out = vehicles.filter((v) => v.status !== "sold");

  if (f.make) out = out.filter((v) => v.make === f.make);
  if (f.model) out = out.filter((v) => v.model === f.model);
  if (f.minPrice != null) out = out.filter((v) => (v.price ?? Infinity) >= f.minPrice!);
  if (f.maxPrice != null) out = out.filter((v) => (v.price ?? 0) <= f.maxPrice!);
  if (f.minYear != null) out = out.filter((v) => v.year >= f.minYear!);
  if (f.maxYear != null) out = out.filter((v) => v.year <= f.maxYear!);
  if (f.maxMileage != null) out = out.filter((v) => v.mileage <= f.maxMileage!);
  if (f.search) {
    const q = f.search.toLowerCase();
    out = out.filter((v) =>
      `${v.year} ${v.make} ${v.model} ${v.trim ?? ""}`.toLowerCase().includes(q),
    );
  }

  const sorted = [...out];
  switch (f.sort) {
    case "price-asc":
      sorted.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
      break;
    case "price-desc":
      sorted.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      break;
    case "mileage-asc":
      sorted.sort((a, b) => a.mileage - b.mileage);
      break;
    case "year-desc":
    default:
      sorted.sort((a, b) => b.year - a.year);
  }
  return sorted;
}
