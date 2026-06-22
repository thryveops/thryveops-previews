import type { NextConfig } from "next";

/**
 * Multi-Zone: the Motion Fleet Group app is a separate Vercel project that owns
 * the /motionfleetgroup path (it sets the matching basePath/assetPrefix). Set
 * MFG_ZONE_URL in this project's Vercel env to that deployment's origin, e.g.
 * https://motionfleetgroup.vercel.app — then /motionfleetgroup/* is served from it.
 */
const MFG_ZONE_URL = process.env.MFG_ZONE_URL;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    if (!MFG_ZONE_URL) return [];
    return [
      { source: "/motionfleetgroup", destination: `${MFG_ZONE_URL}/motionfleetgroup` },
      { source: "/motionfleetgroup/:path*", destination: `${MFG_ZONE_URL}/motionfleetgroup/:path*` },
    ];
  },
};

export default nextConfig;
