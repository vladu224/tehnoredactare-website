import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  allowedDevOrigins: [
    "192.168.0.29",
    "192.168.1.137",
  ]
};

export default nextConfig;
