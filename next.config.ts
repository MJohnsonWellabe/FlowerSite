import type { NextConfig } from "next";

// Deploying as a static site to GitHub Pages at
// https://mjohnsonwellabe.github.io/FlowerSite/ — a project page, so it's served from a
// /FlowerSite subpath rather than the domain root. Only applied for production builds so
// local dev keeps running at the site root.
const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/FlowerSite";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? `${repoBasePath}/` : "",
  images: {
    // GitHub Pages has no image optimization server — serve originals as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
