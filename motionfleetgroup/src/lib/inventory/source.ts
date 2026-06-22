/**
 * Inventory data source — the swap point for the whole inventory system.
 *
 * Every page/component reads inventory through `getInventorySource()`, never
 * from a concrete provider. To go live, implement `InventorySource` for the
 * chosen method and switch the factory below. Nothing in the UI changes.
 *
 * Candidate future sources (CLAUDE.md §9, Open Q #1):
 *   - DealerCenterSource — pulls a CSV / XML / API feed, maps → Vehicle[]
 *   - ManualSource       — reads vehicles entered by the dealership (CMS/DB)
 */
import type { Vehicle, VehicleFilters, Facets } from "./types";
import { mockVehicles } from "./mock-data";
import { filterAndSort } from "./filter";

export interface InventorySource {
  /** Which provider is backing this source (for debugging/labels). */
  readonly mode: "mock" | "manual" | "dealercenter";
  /**
   * Whether real, sellable inventory is available. While false, the
   * /inventory page shows its "coming soon" state and treats listings as a
   * preview/sample rather than live stock.
   */
  readonly live: boolean;
  list(filters?: VehicleFilters): Promise<Vehicle[]>;
  get(slug: string): Promise<Vehicle | null>;
  facets(): Promise<Facets>;
}

function computeFacets(vehicles: Vehicle[]): Facets {
  const active = vehicles.filter((v) => v.status !== "sold");
  const makes = [...new Set(active.map((v) => v.make))].sort();
  const modelsByMake: Record<string, string[]> = {};
  for (const v of active) {
    (modelsByMake[v.make] ??= []);
    if (!modelsByMake[v.make].includes(v.model)) modelsByMake[v.make].push(v.model);
  }
  Object.values(modelsByMake).forEach((m) => m.sort());

  const years = active.map((v) => v.year);
  const prices = active.map((v) => v.price ?? 0).filter((p) => p > 0);
  const mileages = active.map((v) => v.mileage);

  return {
    makes,
    modelsByMake,
    yearRange: [Math.min(...years), Math.max(...years)],
    priceRange: [Math.min(...prices), Math.max(...prices)],
    mileageMax: Math.max(...mileages),
    count: active.length,
  };
}

/** Local mock/JSON-backed source used for v1 (template + preview). */
class MockSource implements InventorySource {
  readonly mode = "mock" as const;
  readonly live = false; // flip to true (or use a real source) when launching

  async list(filters?: VehicleFilters) {
    return filterAndSort(mockVehicles, filters);
  }
  async get(slug: string) {
    return mockVehicles.find((v) => v.slug === slug) ?? null;
  }
  async facets() {
    return computeFacets(mockVehicles);
  }
}

let singleton: InventorySource | null = null;

/**
 * Returns the active inventory source. Today: MockSource. To launch, return a
 * DealerCenterSource or ManualSource here (optionally keyed off an env var like
 * INVENTORY_SOURCE) — no UI changes required.
 */
export function getInventorySource(): InventorySource {
  if (!singleton) singleton = new MockSource();
  return singleton;
}
