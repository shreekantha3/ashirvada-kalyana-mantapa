import type { NextConfig } from "next";

// GitHub Pages project sites are served from a subpath
// (e.g. /ashirvada-kalyana-mantapa). Set NEXT_BASE_PATH to that
// subpath in production so assets resolve correctly, leave empty
// for local dev and root-domain hosting (e.g. Vercel).
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
