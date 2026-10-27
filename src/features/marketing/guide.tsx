import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Brand from "@/components/brand";
import Icon from "@/components/icon";
import { guides } from "./guide-data";
import { publicOrigin } from "./public-origin";
export async function guideMetadata(wedding: boolean): Promise<Metadata> {
  const item = wedding ? guides.wedding : guides.general;
  if ((await publicOrigin()) !== item.host)
    return { robots: { index: false, follow: false } };
  const url = `${item.host}/${item.slug}`;
  const image = `${item.host}/${wedding ? "wedding" : "event"}-social.png`;
  return {
    title: `${item.title} | ${item.name}`,
    description: item.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.description,
      url,
      siteName: item.name,
      locale: "es_PE",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [image],
    },
  };
}
export default async function InvitationGuide({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  const item = wedding ? guides.wedding : guides.general;
  if ((await publicOrigin()) !== item.host) notFound();
  const studio = wedding
    ? "https://studio.save.thedate.now"
    : "https://crea.thedate.now";
  const url = `${item.host}/${item.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: item.title,
    description: item.description,
    inLanguage: "es",
    isPartOf: { "@id": `${item.host}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: item.name, item: item.host },
        { "@type": "ListItem", position: 2, name: item.title, item: url },
      ],
    },
  };
  return (
    <main
      className={`guide-page ${wedding ? "wedding-atlas" : "festival-site"}`}
    >
      <header>
        <a href={item.host} aria-label={`${item.name}, inicio`}>
          <Brand wedding={wedding} />
        </a>
        <a href={studio}>
          Abrir {wedding ? "estudio" : "mi espacio"}
          <Icon name="external" />
        </a>
      </header>
      <article>
        <nav aria-label="Ruta de navegación">
          <a href={item.host}>{item.name}</a>
          <Icon name="arrow" />
          <span>Guía de invitaciones</span>
        </nav>
        <h1>{item.title}</h1>
        <p className="guide-intro">{item.intro}</p>
        {item.sections.map(([title, text]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
        <div className="guide-action">
          <h2>
            {wedding
              ? "Denle forma a su invitación"
              : "¿Listo para crear tu invitación?"}
          </h2>
          <p>
            {wedding
              ? "Reúnan los detalles y empiecen por el diseño. Pueden guardarlo y volver cuando quieran."
              : "Reúne los detalles del plan y entra a tu espacio para comenzar."}
          </p>
          <a href={studio}>
            {wedding ? "Entrar al estudio de bodas" : "Crear mi invitación"}
            <Icon name="external" />
          </a>
        </div>
        <a className="guide-back" href={item.host}>
          Volver a {item.name}
        </a>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\u003c"),
        }}
      />
    </main>
  );
}
