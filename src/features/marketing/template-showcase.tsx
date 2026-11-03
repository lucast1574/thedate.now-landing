import ResponsiveCopy from "./responsive-copy";
import ShowcaseNotes from "./showcase-notes";
import Image from "next/image";
import Icon from "@/components/icon";
import catalog from "./template-preview-data.json";
export default function TemplateShowcase({ wedding }: { wedding: boolean }) {
  const kind = wedding ? "wedding" : "general",
    templates = catalog.templates.filter((t) => t.kind === kind);
  const choices = wedding
    ? ["wedding-flyer-floral", "wedding-flyer-cinematic", "wedding-flyer-night"]
    : ["general-flyer-party", "general-flyer-cinematic", "general-flyer-gala"];
  const selected = choices.map(
    (id, n) => templates.find((t) => t.id === id) || templates[n],
  );
  const base = wedding ? "shell" : "party-shell";
  return (
    <section className={`product-templates ${base}`} id="plantillas">
      <header>
        <div>
          <h2>
            {wedding ? (
              <ResponsiveCopy mobile="Una historia. Su estilo.">
                Una historia. Su propio estilo.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="Tu plan tiene su estilo.">
                Tu plan tiene su propio estilo.
              </ResponsiveCopy>
            )}
          </h2>
          <p>
            {wedding ? (
              <ResponsiveCopy mobile="24 diseños en seis colecciones. Adornos, letras y fotos que pueden hacer suyos.">
                Jardines botánicos, lazos románticos y detalles de gala. 24
                diseños en seis colecciones, con adornos editables y
                composiciones que acompañan su historia de principio a fin.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="24 diseños en seis colecciones. Cambia las letras, mueve los adornos y encuadra tus fotos.">
                Fiesta gráfica, composiciones editoriales y noches de gala. 24
                diseños en seis colecciones para cumpleaños y encuentros. Cambia
                las letras, mueve los adornos y encuadra tus fotos.
              </ResponsiveCopy>
            )}
          </p>
        </div>
        <a
          href={
            wedding
              ? "/plantillas-invitaciones-de-boda"
              : "/plantillas-invitaciones-para-eventos"
          }
        >
          Conocer las plantillas <Icon name="arrow" />
        </a>
      </header>
      <figure className="template-theatre">
        <div className="template-stage" aria-hidden="true">
          {selected.map((t, n) => (
            <div
              className={`showcase-invitation invitation-${n}`}
              key={t.id}
              data-animated
            >
              <Image
                unoptimized
                src={t.image}
                alt=""
                width={t.width}
                height={t.height}
                loading="lazy"
                decoding="async"
              />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
        <figcaption>
          Composiciones del catálogo real. Nombres de ejemplo; cada persona
          elige sus fotografías.
        </figcaption>
      </figure>
      <ShowcaseNotes />
    </section>
  );
}
