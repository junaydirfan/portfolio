import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add the output option for static export
  output: 'export',

  // Add the images option because you use next/image
  images: {
    unoptimized: true,
  },

  // Keep any other config options you might already have below
  /* existing config options here */

};

export default nextConfig;