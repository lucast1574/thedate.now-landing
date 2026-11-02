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
              <ResponsiveCopy mobile="24 diseños: fotos a toda pantalla, flores ilustradas y letras con personalidad.">
                Fotografías a toda pantalla, flores ilustradas y letras que
                acompañan sus nombres. 24 diseños para contar su historia, desde
                la portada hasta el último detalle.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="24 diseños: portadas fotográficas, carteles expresivos y noches de gala.">
                Portadas fotográficas, carteles expresivos y noches de gala. 24
                diseños con personalidad para cumpleaños, fiestas y encuentros,
                listos para hacerlos tuyos.
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
