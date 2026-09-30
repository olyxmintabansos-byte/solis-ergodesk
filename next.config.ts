import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/solis-ergodesk",
  images: { unoptimized: true },
};

export default nextConfig;
