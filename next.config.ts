import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lint is run in CI/locally, not as a build blocker on Vercel.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
