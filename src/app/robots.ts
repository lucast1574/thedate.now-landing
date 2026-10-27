import type { MetadataRoute } from "next";
import { publicOrigin } from "@/features/marketing/public-origin";
export default async function robots(): Promise<MetadataRoute.Robots> {
  const origin = await publicOrigin();
  return origin
    ? {
        rules: {
          userAgent: "*",
          allow: "/",
          disallow: [
            "/api/",
            "/admin",
            "/profile",
            "/affiliates",
            "/editor/",
            "/manager/",
            "/rsvp/",
            "/join/",
          ],
        },
        sitemap: `${origin}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
