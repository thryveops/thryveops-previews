import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";
import { getInventorySource } from "@/lib/inventory/source";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = brand.url;

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/inventory", priority: 0.9, freq: "daily" },
    { path: "/financing", priority: 0.8, freq: "monthly" },
    { path: "/value-your-trade", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/reviews", priority: 0.5, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
    { path: "/faq", priority: 0.5, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  // Only include individual vehicle pages once inventory is live (they're
  // sample/preview pages until then).
  const source = getInventorySource();
  if (source.live) {
    const vehicles = await source.list();
    for (const v of vehicles) {
      entries.push({
        url: `${base}/inventory/${v.slug}`,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
