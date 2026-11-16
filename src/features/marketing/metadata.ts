import { type Translator, spanishTranslator } from "@/lib/i18n/translator";
import type { Metadata } from "next";
export function landingMetadata(
  wedding: boolean,
  i18n: Translator = spanishTranslator,
): Metadata {
  const name = wedding ? "Save the Date" : "The Date";
  const url = wedding ? "https://save.thedate.now/" : "https://thedate.now/";
  const title = wedding
    ? i18n("Invitaciones digitales de boda | Save the Date")
    : i18n("Invitaciones digitales para eventos | The Date");
  const description = wedding
    ? i18n(
        "24 plantillas de boda con animaciones, fotos y música. Diseñen su invitación digital y organicen WhatsApp, confirmaciones, mesas y regalos en Save the Date.",
      )
    : i18n(
        "24 plantillas animadas para cumpleaños, fiestas y encuentros. Crea tu invitación digital con fotos y música; organiza WhatsApp, confirmaciones, mesas y regalos.",
      );
  const images = [
    {
      url: `${url}${wedding ? "wedding" : "event"}-social.png`,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];
  return {
    metadataBase: new URL(url),
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale:
        i18n.locale === "pt"
          ? "pt_BR"
          : i18n.locale === "en"
            ? "en_US"
            : "es_PE",
      siteName: name,
      title,
      description,
      url,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}
