/**
 * Feed-agnostic vehicle model. Deliberately NOT shaped to any single feed
 * (DealerCenter CSV/XML/API or manual entry) — adapters map their source into
 * this shape so the UI never depends on a provider's field names.
 * See CLAUDE.md §9 (the key inventory architecture decision).
 */
export type VehicleStatus = "available" | "pending" | "sold";

export interface Vehicle {
  id: string;
  /** URL-safe identifier used for /inventory/[slug]. */
  slug: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  bodyStyle?: string;
  /** Omit price to render "Call for price" (CLAUDE.md Open Q #7). */
  price?: number;
  mileage: number;
  vin?: string;
  exteriorColor?: string;
  interiorColor?: string;
  transmission?: string;
  drivetrain?: string;
  fuelType?: string;
  engine?: string;
  mpgCity?: number;
  mpgHighway?: number;
  features?: string[];
  description?: string;
  /** Image URLs. Empty array → component renders a branded placeholder. */
  images: string[];
  status: VehicleStatus;
  carfaxUrl?: string;
}

export interface VehicleFilters {
  make?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  maxMileage?: number;
  search?: string;
  sort?: "price-asc" | "price-desc" | "year-desc" | "mileage-asc";
}

/** Aggregate options the filter UI needs (computed from current inventory). */
export interface Facets {
  makes: string[];
  modelsByMake: Record<string, string[]>;
  yearRange: [number, number];
  priceRange: [number, number];
  mileageMax: number;
  count: number;
}
