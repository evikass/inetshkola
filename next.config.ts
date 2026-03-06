import type { NextConfig } from "next";

// Next.js configuration for production
const nextConfig: NextConfig = {
  output: "export",
  basePath: '/inetshkola',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Отключить оптимизацию для static export
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
