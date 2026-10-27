import type { Metadata } from "next";
export function landingMetadata(wedding: boolean): Metadata {
  const name = wedding ? "Save the Date" : "The Date";
  const url = wedding ? "https://save.thedate.now/" : "https://thedate.now/";
  const title = wedding
    ? "Invitaciones digitales de boda | Save the Date"
    : "Invitaciones digitales para eventos | The Date";
  const description = wedding
    ? "Creen una invitación digital de boda con sus fotos, horarios y ubicación. Compartan por WhatsApp y organicen invitados, cupos y confirmaciones en un solo lugar."
    : "Crea invitaciones digitales para cumpleaños, fiestas y reuniones. Personaliza tu diseño, comparte por WhatsApp y organiza invitados y confirmaciones de asistencia.";
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
      locale: "es_PE",
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
