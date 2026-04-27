import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add any external image domains here if needed in the future
    domains: [],
  },
  // Ensure pixel art images aren't over-optimized
  experimental: {},
};

export default nextConfig;
