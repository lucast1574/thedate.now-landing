import type { MetadataRoute } from "next";
import { publicOrigin } from "@/features/marketing/public-origin";
import { productTopics, contentUpdated } from "@/features/marketing/topic-data";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await publicOrigin();
  return origin
    ? [
        { url: `${origin}/`, lastModified: contentUpdated },
        {
          url: `${origin}/${origin.includes("save.") ? "invitaciones-digitales-de-boda" : "invitaciones-digitales-para-eventos"}`,
          lastModified: contentUpdated,
        },
        ...productTopics(origin.includes("save.")).map((item) => ({
          url: `${origin}/${item.slug}`,
          lastModified: contentUpdated,
        })),
      ]
    : [];
}
