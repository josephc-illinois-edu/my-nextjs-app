import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure basePath is set for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Disable server-side features for static export
  trailingSlash: true,
};

export default nextConfig;
