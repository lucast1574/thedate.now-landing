import Link from "next/link";
import TemplateCatalogGallery from "./template-catalog-gallery";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Brand from "@/components/brand";
import Icon from "@/components/icon";
import { publicOrigin } from "./public-origin";
import { topics, productTopics, contentUpdated } from "./topic-data";

async function resolveTopic(slug: string) {
  const origin = await publicOrigin();
  return topics.find(
    (t) =>
      t.slug === slug &&
      origin ===
        (t.kind === "wedding"
          ? "https://save.thedate.now"
          : "https://thedate.now"),
  );
}
export async function topicMetadata(slug: string): Promise<Metadata> {
  const item = await resolveTopic(slug);
  if (!item) return { robots: { index: false, follow: false } };
  const wedding = item.kind === "wedding",
    origin = wedding ? "https://save.thedate.now" : "https://thedate.now",
    name = wedding ? "Save the Date" : "The Date",
    url = `${origin}/${item.slug}`,
    image = `${origin}/${wedding ? "wedding" : "event"}-social.png`;
  return {
    title: `${item.title} | ${name}`,
    description: item.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url,
      title: item.title,
      description: item.description,
      siteName: name,
      locale: "es_PE",
      modifiedTime: contentUpdated,
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
export default async function TopicPage({ slug }: { slug: string }) {
  const item = await resolveTopic(slug);
  if (!item) notFound();
  const wedding = item.kind === "wedding",
    origin = wedding ? "https://save.thedate.now" : "https://thedate.now",
    name = wedding ? "Save the Date" : "The Date",
    studio = wedding
      ? "https://studio.save.thedate.now"
      : "https://crea.thedate.now",
    url = `${origin}/${slug}`,
    isCatalog = slug.startsWith("plantillas-");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: item.title,
    description: item.description,
    inLanguage: "es",
    dateModified: contentUpdated,
    isPartOf: { "@id": `${origin}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name, item: origin },
        { "@type": "ListItem", position: 2, name: item.title, item: url },
      ],
    },
  };
  return (
    <main
      className={`guide-page ${isCatalog ? "template-catalog-page" : ""} ${wedding ? "wedding-atlas" : "festival-site"}`}
    >
      <header>
        <Link href="/" aria-label={`${name}, inicio`}>
          <Brand wedding={wedding} />
        </Link>
        <a href={studio}>
          Abrir {wedding ? "estudio" : "mi espacio"}
          <Icon name="external" />
        </a>
      </header>
      <article>
        <nav aria-label="Ruta de navegación">
          <Link href="/">{name}</Link>
          <Icon name="arrow" />
          <span>{isCatalog ? "Plantillas" : item.title}</span>
        </nav>
        <h1>
          {isCatalog
            ? wedding
              ? "Su historia, su estilo."
              : "Elige cómo empieza."
            : item.title}
        </h1>
        <p className="guide-intro">
          {isCatalog
            ? "24 diseños para hacer tuyos con tus fotos, colores y palabras."
            : item.intro}
        </p>
        {!isCatalog &&
          item.sections.map(([title, text]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
        {isCatalog && <TemplateCatalogGallery wedding={wedding} />}
        {!isCatalog && (
          <aside className="topic-related">
            <h2>Más para preparar {wedding ? "su boda" : "el encuentro"}</h2>
            <a
              href={
                wedding
                  ? "/invitaciones-digitales-de-boda"
                  : "/invitaciones-digitales-para-eventos"
              }
            >
              Guía para crear y compartir la invitación
              <Icon name="arrow" />
            </a>
            {productTopics(wedding)
              .filter((t) => t.slug !== slug)
              .map((t) => (
                <a href={`/${t.slug}`} key={t.slug}>
                  {t.title}
                  <Icon name="arrow" />
                </a>
              ))}
          </aside>
        )}
        <div className="guide-action">
          <h2>
            {wedding
              ? "Su historia empieza aquí"
              : "Dale forma a tu próximo plan"}
          </h2>
          <p>
            {wedding
              ? "Prueben las plantillas y preparen su invitación en el estudio."
              : "Elige una plantilla y prepara tu invitación desde tu espacio."}
          </p>
          <a href={studio}>
            {wedding ? "Entrar al estudio" : "Crear mi invitación"}
            <Icon name="external" />
          </a>
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\u003c"),
        }}
      />
    </main>
  );
}
