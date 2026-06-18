import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,

    domains: [
      "images.unsplash.com",
      "cdn.britannica.com",
      "static.vecteezy.com",
    ],
  },
};

export default nextConfig;