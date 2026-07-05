import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitLab Pages (dumb static host).
  output: "export",
  // Required: the default next/image optimizer is unavailable in a static export.
  images: { unoptimized: true },
  // Emit /route/index.html so clean URLs resolve without server rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
