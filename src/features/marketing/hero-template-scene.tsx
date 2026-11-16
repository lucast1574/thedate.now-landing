import { useTranslator } from "@/lib/i18n/react";
import Image from "next/image";
import Icon from "@/components/icon";
import catalog from "./template-preview-data.json";

export default function HeroTemplateScene({ wedding }: { wedding: boolean }) {
  const i18n = useTranslator();

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
          alt={i18n(
            "Plantilla {v0}, con ilustración y tipografía personalizada",
            { v0: illustration.name },
          )}
          width={illustration.width}
          height={illustration.height}
        />
        <Image
          className="hero-template-photograph"
          unoptimized
          src={photograph.image}
          alt={i18n("Plantilla {v0}, con fotografía a pantalla completa", {
            v0: photograph.name,
          })}
          width={photograph.width}
          height={photograph.height}
          preload
        />
      </div>
      <figcaption>
        <span>
          {wedding
            ? i18n("Su historia, a su manera.")
            : i18n("Tu celebración tiene su estilo.")}
        </span>
        <a href="#plantillas">
          {i18n("Explorar los 24 diseños")} <Icon name="arrow" />
        </a>
      </figcaption>
    </figure>
  );
}
