import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/portfolio', // ← Добавили это!
  assetPrefix: '/portfolio/', // ← И это!
};

export default nextConfig;