import type { NextConfig } from "next";

const basePath = "/ocube-content-review-2026";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,

  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  allowedDevOrigins: ["172.21.96.1", "192.168.0.43"],
};

export default nextConfig;
