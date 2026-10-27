export default function MarketingSchema({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  const name = wedding ? "Save the Date" : "The Date";
  const url = wedding ? "https://save.thedate.now/" : "https://thedate.now/";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name,
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: wedding
          ? "Invitaciones digitales de boda"
          : "Invitaciones digitales para eventos",
        isPartOf: { "@id": `${url}#website` },
        inLanguage: "es",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${url}${wedding ? "wedding" : "event"}-social.png`,
          width: 1200,
          height: 630,
        },
        about: {
          "@type": "Thing",
          name: wedding
            ? "Invitaciones digitales de boda"
            : "Invitaciones digitales para eventos",
        },
        description: wedding
          ? "Diseñen su invitación de boda, compartan los detalles y organicen invitados y confirmaciones."
          : "Crea invitaciones para cumpleaños, fiestas y reuniones. Comparte tu evento y organiza confirmaciones.",
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
