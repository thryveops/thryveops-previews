import type { MetadataRoute } from "next";

/**
 * Preview deployment: disallow crawling entirely (client mockup on the agency
 * domain). At real launch, restore allow "/" + the sitemap reference.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
