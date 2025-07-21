import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    typedRoutes: true,
  },
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
};

export default nextConfig;