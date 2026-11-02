import Image from "next/image";
import Icon from "@/components/icon";
import catalog from "./template-preview-data.json";

export default function HeroTemplateScene({ wedding }: { wedding: boolean }) {
  const prefix = wedding ? "wedding" : "general";
  const photograph = catalog.templates.find(
    (t) => t.id === `${prefix}-flyer-cinematic`,
  )!;
  const illustration = catalog.templates.find(
    (t) => t.id === `${prefix}-flyer-${wedding ? "floral" : "party"}`,
  )!;
  return (
    <figure className="hero-template-scene">
      <div className="hero-template-pair">
        <Image
          className="hero-template-illustrated"
          unoptimized
          src={illustration.image}
          alt={`Plantilla ${illustration.name}, con ilustración y tipografía personalizada`}
          width={illustration.width}
          height={illustration.height}
        />
        <Image
          className="hero-template-photograph"
          unoptimized
          src={photograph.image}
          alt={`Plantilla ${photograph.name}, con fotografía a pantalla completa`}
          width={photograph.width}
          height={photograph.height}
          preload
        />
      </div>
      <figcaption>
        <span>
          {wedding
            ? "Su historia, a su manera."
            : "Tu celebración tiene su estilo."}
        </span>
        <a href="#plantillas">
          Explorar los 24 diseños <Icon name="arrow" />
        </a>
      </figcaption>
    </figure>
  );
}
