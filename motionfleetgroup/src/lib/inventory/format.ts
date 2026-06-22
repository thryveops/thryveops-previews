/** Display helpers for vehicle data. */

export function formatPrice(price?: number): string {
  if (price == null || price <= 0) return "Call for price";
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export function formatMileage(miles: number): string {
  return `${miles.toLocaleString("en-US")} mi`;
}

export function vehicleTitle(v: {
  year: number;
  make: string;
  model: string;
  trim?: string;
}): string {
  return [v.year, v.make, v.model, v.trim].filter(Boolean).join(" ");
}
