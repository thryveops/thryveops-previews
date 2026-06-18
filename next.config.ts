import type { NextConfig } from "next";

const NYX_ORIGIN = "https://nyx-club-mm66ro2qc-thryveops-4612s-projects.vercel.app";

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
