"use client";
import { useState } from "react";
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
            onClick={() => setCollection(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="template-collection-count" aria-live="polite">
        {templates.length} diseños · Todos personalizables en el editor
      </p>
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
          </figure>
        ))}
      </div>
      <p className="template-sample-note">
        Fotos y nombres de ejemplo. Tú eliges los tuyos.
      </p>
    </section>
  );
}
