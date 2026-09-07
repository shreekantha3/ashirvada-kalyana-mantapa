import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ashirvada.example.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
