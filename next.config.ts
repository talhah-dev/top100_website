import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "top100attractions.com",
      },
      {
        protocol: "https",
        hostname: "www.top100attractions.com",
      },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/wales", destination: "/country/wales" },
      { source: "/england", destination: "/country/england" },
      { source: "/scotland", destination: "/country/scotland" },
      { source: "/ireland", destination: "/country/ireland" },
      { source: "/northern-ireland", destination: "/country/northern-ireland" },
    ];
  },
};

export default nextConfig;
