import ResponsiveCopy from "./responsive-copy";
import ShowcaseNotes from "./showcase-notes";
import Image from "next/image";
import Icon from "@/components/icon";
import catalog from "./template-preview-data.json";
export default function TemplateShowcase({ wedding }: { wedding: boolean }) {
  const kind = wedding ? "wedding" : "general",
    templates = catalog.templates.filter((t) => t.kind === kind);
  const choices = wedding
    ? ["wedding-flyer-olive", "wedding-flyer-cinematic", "wedding-flyer-night"]
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
              <ResponsiveCopy mobile="Una invitación con vida.">
                Una invitación que se descubre, poco a poco.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="Tu plan empieza aquí.">
                Dale al plan una entrada a lo grande.
              </ResponsiveCopy>
            )}
          </h2>
          <p>
            {wedding ? (
              <ResponsiveCopy mobile="24 diseños con movimiento para hacer su historia única.">
                24 plantillas de boda para contar su historia con movimiento,
                fotos y detalles que se sienten suyos.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="24 diseños con movimiento para cada ocasión.">
                24 plantillas para cumpleaños, fiestas y encuentros. Diseños con
                movimiento, fotografía y una personalidad distinta para cada
                ocasión.
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
          <div className="scene-envelope" data-animated>
            <Icon name={wedding ? "flower" : "sparkle"} />
          </div>
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
