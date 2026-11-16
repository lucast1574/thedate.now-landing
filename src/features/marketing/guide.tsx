import { type Translator, spanishTranslator } from "@/lib/i18n/translator";
import { getTranslator } from "@/lib/i18n/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Brand from "@/components/brand";
import Icon from "@/components/icon";
import { productTopics, contentUpdated } from "./topic-data";
import { guides } from "./guide-data";
import { publicOrigin } from "./public-origin";
export async function guideMetadata(
  wedding: boolean,
  i18n: Translator = spanishTranslator,
): Promise<Metadata> {
  const item = wedding ? guides(i18n).wedding : guides(i18n).general;
  if ((await publicOrigin()) !== item.host)
    return { robots: { index: false, follow: false } };
  const url = `${item.host}/${item.slug}`;
  const image = `${item.host}/${wedding ? "wedding" : "event"}-social.png`;
  return {
    title: i18n("{v0} | {v1}", { v0: item.title, v1: item.name }),
    description: item.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.description,
      url,
      siteName: item.name,
      locale:
        i18n.locale === "pt"
          ? "pt_BR"
          : i18n.locale === "en"
            ? "en_US"
            : "es_PE",
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
  const i18n = await getTranslator();

  const item = wedding ? guides(i18n).wedding : guides(i18n).general;
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
    inLanguage: i18n.locale,
    dateModified: contentUpdated,
    isPartOf: { "@id": `${item.host}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: item.name,
          item: item.host,
        },
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
          {i18n("Abrir")} {wedding ? i18n("estudio") : i18n("mi espacio")}
          <Icon name="external" />
        </a>
      </header>
      <article>
        <nav aria-label={i18n("Ruta de navegación")}>
          <a href={item.host}>{item.name}</a>
          <Icon name="arrow" />
          <span>{i18n("Guía de invitaciones")}</span>
        </nav>
        <h1>{item.title}</h1>
        <p className="guide-intro">{item.intro}</p>
        {item.sections.map(([title, text]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
        <nav
          className="topic-related"
          aria-label={i18n("Más sobre las invitaciones")}
        >
          {productTopics(wedding, i18n).map((t) => (
            <a key={t.slug} href={`/${t.slug}`}>
              {t.title}
              <Icon name="arrow" />
            </a>
          ))}
        </nav>
        <div className="guide-action">
          <h2>
            {wedding
              ? i18n("Denle forma a su invitación")
              : i18n("¿Listo para crear tu invitación?")}
          </h2>
          <p>
            {wedding
              ? i18n(
                  "Reúnan los detalles y empiecen por el diseño. Pueden guardarlo y volver cuando quieran.",
                )
              : i18n(
                  "Reúne los detalles del plan y entra a tu espacio para comenzar.",
                )}
          </p>
          <a href={studio}>
            {wedding
              ? i18n("Entrar al estudio de bodas")
              : i18n("Crear mi invitación")}
            <Icon name="external" />
          </a>
        </div>
        <a className="guide-back" href={item.host}>
          {i18n("Volver a")} {item.name}
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
