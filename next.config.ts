import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Temporarily disable ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
