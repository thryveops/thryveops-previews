import type { NextConfig } from "next";

// NYX is served from its own subdomain (nyx-club.thryveops.com), which maps
// directly to the nyx-club Vercel project. Proxying it under /nyx-club broke
// styling + navigation (a root-based Next app can't live cleanly under a
// subpath), so the old path now redirects to the working subdomain.
const NYX_URL = "https://nyx-club.thryveops.com";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/nyx-club", destination: NYX_URL, permanent: false },
      { source: "/nyx-club/:path*", destination: `${NYX_URL}/:path*`, permanent: false },
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
