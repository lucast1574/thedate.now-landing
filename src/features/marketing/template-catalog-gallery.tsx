"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import catalog from "./template-preview-data.json";

const photoOrder = [
  "cinematic",
  "gallery",
  "landscape",
  "polaroid",
  "split",
  "ribbon",
  "waves",
  "mosaic",
];
function priority(id: string) {
  const index = photoOrder.indexOf(id.split("-").at(-1)!);
  return index < 0 ? photoOrder.length : index;
}
export default function TemplateCatalogGallery({
  wedding,
}: {
  wedding: boolean;
}) {
  const [collection, setCollection] = useState("all");
  const [selected, setSelected] = useState<string>();
  const preview = useRef<HTMLElement>(null);
  useEffect(() => {
    if (selected) preview.current?.scrollIntoView({ block: "start" });
  }, [selected]);
  const detail = catalog.templates.find((t) => t.id === selected);
  const collections = [
    ["all", "Todas"],
    ["botanical", "Jardín botánico"],
    ["romance", "Romance"],
    ["gala", "Gala"],
    ["editorial", "Editorial"],
    ["fiesta", "Fiesta gráfica"],
    ["coastal", "Costa"],
  ];
  const templates = catalog.templates
    .filter((t) => t.kind === (wedding ? "wedding" : "general"))
    .filter((t) => collection === "all" || t.collection === collection)
    .sort((a, b) => priority(a.id) - priority(b.id));
  return (
    <section
      aria-label={wedding ? "Plantillas de boda" : "Plantillas para eventos"}
    >
      <div
        className="template-collection-filters"
        aria-label="Filtrar por colección"
      >
        {collections.map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={collection === id}
            onClick={() => {
              setCollection(id);
              setSelected(undefined);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="template-collection-count" aria-live="polite">
        {templates.length} diseños · Todos personalizables en el editor
      </p>
      {detail && (
        <section
          ref={preview}
          className="template-interior-preview"
          aria-label={`Interior de ${detail.name}`}
        >
          <header>
            <div>
              <h2>{detail.name}</h2>
              <p>
                Una muestra del interior. Cada plantilla incluye bienvenida,
                fecha, ubicación, vestimenta, restricciones, regalos, programa y
                confirmación, con la misma identidad de principio a fin.
              </p>
            </div>
            <button type="button" onClick={() => setSelected(undefined)}>
              Cerrar interior
            </button>
          </header>
          <div className="template-interior-panels">
            <Image
              unoptimized
              src={detail.interior}
              width={2208}
              height={detail.interiorHeight}
              alt={`Secciones interiores de ${detail.name}`}
            />
          </div>
          <a
            href={
              wedding
                ? "https://studio.save.thedate.now/"
                : "https://crea.thedate.now/"
            }
          >
            Personalizar en el estudio
          </a>
        </section>
      )}
      <div className="topic-template-grid">
        {templates.map((t, index) => (
          <figure key={t.id}>
            <Image
              unoptimized
              src={t.image}
              width={t.width}
              height={t.height}
              loading={index < 3 ? "eager" : "lazy"}
              decoding="async"
              alt={`Composición ${t.name}`}
            />
            <figcaption>
              {t.name}
              <span className="template-collection-name">
                {collections.find(([id]) => id === t.collection)?.[1]}
              </span>
            </figcaption>
            <button
              className="template-interior-button"
              type="button"
              aria-pressed={selected === t.id}
              onClick={() => setSelected(selected === t.id ? undefined : t.id)}
            >
              Ver interior
            </button>
          </figure>
        ))}
      </div>
      <p className="template-sample-note">
        Fotos y nombres de ejemplo. Tú eliges los tuyos.
      </p>
    </section>
  );
}
