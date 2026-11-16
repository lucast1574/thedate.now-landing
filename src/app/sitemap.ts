import { spanishTranslator } from "@/lib/i18n/translator";
import type { MetadataRoute } from "next";
import { publicOrigin } from "@/features/marketing/public-origin";
import { productTopics, contentUpdated } from "@/features/marketing/topic-data";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const i18n = spanishTranslator;
  const origin = await publicOrigin();
  return origin
    ? [
        { url: `${origin}/`, lastModified: contentUpdated },
        {
          url: `${origin}/${origin.includes("save.") ? "invitaciones-digitales-de-boda" : "invitaciones-digitales-para-eventos"}`,
          lastModified: contentUpdated,
        },
        ...productTopics(origin.includes("save."), i18n).map((item) => ({
          url: `${origin}/${item.slug}`,
          lastModified: contentUpdated,
        })),
      ]
    : [];
}
