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
  const templates = catalog.templates
    .filter((t) => t.kind === (wedding ? "wedding" : "general"))
    .sort((a, b) => priority(a.id) - priority(b.id));
  return (
    <section
      aria-label={wedding ? "Plantillas de boda" : "Plantillas para eventos"}
    >
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
            <figcaption>{t.name}</figcaption>
          </figure>
        ))}
      </div>
      <p className="template-sample-note">
        Fotos y nombres de ejemplo. Tú eliges los tuyos.
      </p>
    </section>
  );
}
