import { useTranslator } from "@/lib/i18n/react";
export default function MarketingSchema({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  const i18n = useTranslator();

  const name = wedding ? "Save the Date" : "The Date";
  const url = wedding ? "https://save.thedate.now/" : "https://thedate.now/";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name,
        url,
      },
      {
        "@type": "WebApplication",
        "@id": `${url}#application`,
        name,
        url: wedding
          ? "https://studio.save.thedate.now"
          : "https://crea.thedate.now",
        applicationCategory: "DesignApplication",
        operatingSystem: "Web",
        inLanguage: i18n.locale,
        publisher: { "@id": `${url}#organization` },
        featureList: [
          i18n("24 plantillas de invitaciones"),
          i18n("Aperturas animadas y música"),
          i18n("Estilos globales y biblioteca de secciones"),
          i18n("Envío por WhatsApp"),
          i18n("Confirmaciones de asistencia"),
          i18n("Organización de mesas"),
          i18n("Lista de regalos con reservas"),
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name,
        inLanguage: "es",
        publisher: { "@id": `${url}#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: wedding
          ? i18n("Invitaciones digitales de boda")
          : i18n("Invitaciones digitales para eventos"),
        isPartOf: { "@id": `${url}#website` },
        inLanguage: "es",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${url}${wedding ? "wedding" : "event"}-social.png`,
          width: 1200,
          height: 630,
        },
        about: {
          "@type": i18n("Thing"),
          name: wedding
            ? i18n("Invitaciones digitales de boda")
            : i18n("Invitaciones digitales para eventos"),
        },
        description: wedding
          ? i18n(
              "Diseñen su invitación de boda, compartan los detalles y organicen invitados y confirmaciones.",
            )
          : i18n(
              "Crea invitaciones para cumpleaños, fiestas y reuniones. Comparte tu evento y organiza confirmaciones.",
            ),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
