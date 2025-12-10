import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    typedEnv: true,
  },
};

export default nextConfig;
