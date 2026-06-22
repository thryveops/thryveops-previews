"use client";

import { useMemo, useState } from "react";
import type { Vehicle, VehicleFilters, Facets } from "@/lib/inventory/types";
import { filterAndSort } from "@/lib/inventory/filter";
import { VehicleCard } from "./vehicle-card";
import { Input, Select } from "@/components/ui/field";
import { CarIcon } from "@/components/icons";

const YEAR_OPTIONS = [2015, 2017, 2019, 2021, 2023];
const PRICE_OPTIONS = [
  { value: 15000, label: "Under $15,000" },
  { value: 20000, label: "Under $20,000" },
  { value: 25000, label: "Under $25,000" },
  { value: 30000, label: "Under $30,000" },
];
const MILEAGE_OPTIONS = [40000, 60000, 80000, 100000];
const SORTS: { value: NonNullable<VehicleFilters["sort"]>; label: string }[] = [
  { value: "year-desc", label: "Newest year" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "mileage-asc", label: "Lowest mileage" },
];

const EMPTY: VehicleFilters = { sort: "year-desc" };

export function InventoryBrowser({
  vehicles,
  facets,
}: {
  vehicles: Vehicle[];
  facets: Facets;
}) {
  const [filters, setFilters] = useState<VehicleFilters>(EMPTY);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => filterAndSort(vehicles, filters), [vehicles, filters]);
  const models = filters.make ? facets.modelsByMake[filters.make] ?? [] : [];

  const set = (patch: Partial<VehicleFilters>) =>
    setFilters((f) => ({ ...f, ...patch }));

  const activeCount = Object.entries(filters).filter(
    ([k, v]) => k !== "sort" && v != null && v !== "",
  ).length;

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
      {/* Filter rail */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            className="inline-flex items-center gap-2 rounded-sm border border-hairline bg-white px-4 py-2.5 font-display text-sm font-bold text-ink"
            aria-expanded={showFilters}
          >
            Filters
            {activeCount > 0 && (
              <span className="tabular flex h-5 min-w-5 items-center justify-center rounded-full bg-red px-1 text-xs text-white">
                {activeCount}
              </span>
            )}
          </button>
          <span className="tabular text-sm text-gray-500">{results.length} results</span>
        </div>

        <div
          className={`mt-4 rounded-lg border border-hairline bg-white p-5 lg:mt-0 lg:block ${
            showFilters ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gray-500">
              Refine
            </h2>
            {activeCount > 0 && (
              <button
                type="button"
                onClick={() => setFilters(EMPTY)}
                className="text-xs font-semibold text-red hover:text-red-dark"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="mt-4 space-y-4">
            <LabeledField label="Search">
              <Input
                tone="light"
                placeholder="Make, model, year…"
                value={filters.search ?? ""}
                onChange={(e) => set({ search: e.target.value })}
              />
            </LabeledField>

            <LabeledField label="Make">
              <Select
                tone="light"
                value={filters.make ?? ""}
                onChange={(e) => set({ make: e.target.value || undefined, model: undefined })}
              >
                <option value="">All makes</option>
                {facets.makes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </Select>
            </LabeledField>

            <LabeledField label="Model">
              <Select
                tone="light"
                value={filters.model ?? ""}
                disabled={!filters.make}
                onChange={(e) => set({ model: e.target.value || undefined })}
              >
                <option value="">{filters.make ? "All models" : "Select a make first"}</option>
                {models.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </Select>
            </LabeledField>

            <LabeledField label="Max price">
              <Select
                tone="light"
                value={filters.maxPrice ?? ""}
                onChange={(e) =>
                  set({ maxPrice: e.target.value ? Number(e.target.value) : undefined })
                }
              >
                <option value="">Any price</option>
                {PRICE_OPTIONS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </Select>
            </LabeledField>

            <LabeledField label="Year (newer than)">
              <Select
                tone="light"
                value={filters.minYear ?? ""}
                onChange={(e) =>
                  set({ minYear: e.target.value ? Number(e.target.value) : undefined })
                }
              >
                <option value="">Any year</option>
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y}>
                    {y} &amp; newer
                  </option>
                ))}
              </Select>
            </LabeledField>

            <LabeledField label="Max mileage">
              <Select
                tone="light"
                value={filters.maxMileage ?? ""}
                onChange={(e) =>
                  set({ maxMileage: e.target.value ? Number(e.target.value) : undefined })
                }
              >
                <option value="">Any mileage</option>
                {MILEAGE_OPTIONS.map((m) => (
                  <option key={m} value={m}>
                    Under {m.toLocaleString()} mi
                  </option>
                ))}
              </Select>
            </LabeledField>
          </div>
        </div>
      </aside>

      {/* Results */}
      <div>
        <div className="mb-5 hidden items-center justify-between lg:flex">
          <p className="tabular text-sm text-gray-500">
            Showing <span className="font-bold text-ink">{results.length}</span> of{" "}
            {facets.count} vehicles
          </p>
          <label className="flex items-center gap-2 text-sm text-gray-500">
            Sort
            <Select
              tone="light"
              className="w-auto"
              value={filters.sort ?? "year-desc"}
              onChange={(e) => set({ sort: e.target.value as VehicleFilters["sort"] })}
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </Select>
          </label>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-hairline bg-white py-20 text-center">
            <CarIcon className="h-10 w-10 text-gray-500/40" />
            <p className="mt-4 font-display text-lg font-bold text-ink">No matches</p>
            <p className="mt-1 max-w-xs text-sm text-gray-500">
              Try widening your filters — or tell us what you want and we&apos;ll
              track it down for you.
            </p>
            <button
              type="button"
              onClick={() => setFilters(EMPTY)}
              className="mt-5 font-display text-sm font-bold text-red hover:text-red-dark"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function LabeledField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </span>
      {children}
    </div>
  );
}
