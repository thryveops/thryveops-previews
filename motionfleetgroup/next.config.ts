import type { NextConfig } from "next";

/**
 * Deployed as a Next.js Multi-Zone behind preview.thryveops.com.
 * This app owns the /motionfleetgroup path: basePath prefixes all routes and
 * static assets so they resolve correctly when the previews app rewrites
 * /motionfleetgroup/* to this zone.
 *
 * To run/launch as the standalone real site later, remove basePath/assetPrefix
 * (and update brand.url in src/lib/brand.ts back to motionfleetgroup.com).
 */
const BASE_PATH = "/motionfleetgroup";

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  // This app lives inside the thryveops-previews repo. Pin the workspace root
  // to this folder so Next doesn't infer the parent dir from its lockfile.
  turbopack: { root: __dirname },
};

export default nextConfig;
