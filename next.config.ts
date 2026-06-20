import type { NextConfig } from "next";

// Point at the stable production alias (not a pinned deployment) so the hub
// always proxies the latest live nyx-club without needing a config change.
const NYX_ORIGIN = "https://nyx-club.vercel.app";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/nyx-club",
        destination: `${NYX_ORIGIN}/`,
      },
      {
        source: "/nyx-club/:path*",
        destination: `${NYX_ORIGIN}/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
