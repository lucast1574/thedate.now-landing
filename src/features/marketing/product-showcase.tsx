import GiftsProductPreview from "./gifts-product-preview";
import VenueProductPreview from "./venue-product-preview";
import Image from "next/image";
import ShowcaseMotion from "./showcase-motion";
import Icon from "@/components/icon";
import catalog from "./template-preview-data.json";
import EditorPreviewArt from "./editor-preview-art";
import OrganizationPreviewArt from "./organization-preview-art";
export default function ProductShowcase({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  const kind = wedding ? "wedding" : "general",
    templates = catalog.templates.filter((t) => t.kind === kind);
  const choices = wedding
    ? ["wedding-flyer-olive", "wedding-flyer-cinematic", "wedding-flyer-night"]
    : ["general-flyer-party", "general-flyer-cinematic", "general-flyer-gala"];
  const selected = choices.map(
    (id, n) => templates.find((t) => t.id === id) || templates[n],
  );
  const base = wedding ? "shell" : "party-shell",
    studio = wedding
      ? "https://studio.save.thedate.now"
      : "https://crea.thedate.now";
  return (
    <div
      className={`product-showcase ${wedding ? "showcase-wedding" : "showcase-event"}`}
    >
      <ShowcaseMotion />
      <section className={`product-templates ${base}`} id="plantillas">
        <header>
          <div>
            <h2>
              {wedding
                ? "Una invitación que se descubre, poco a poco."
                : "Dale al plan una entrada a lo grande."}
            </h2>
            <p>
              {wedding
                ? "24 plantillas de boda para contar su historia con movimiento, fotos y detalles que se sienten suyos."
                : "24 plantillas para cumpleaños, fiestas y encuentros. Diseños con movimiento, fotografía y una personalidad distinta para cada ocasión."}
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
        <div className="showcase-notes">
          <p>
            <Icon name="mail" />
            <span>
              <strong>Un comienzo con emoción</strong>Seis aperturas animadas:
              carta, jardín, ticket, telón, flor y constelación.
            </span>
          </p>
          <p>
            <Icon name="image" />
            <span>
              <strong>Fotos que forman parte del diseño</strong>Portadas a
              sangre, arcos y bordes suaves que se funden con el fondo.
            </span>
          </p>
          <p>
            <Icon name="music" />
            <span>
              <strong>También tiene su canción</strong>Música con un archivo MP3
              propio o un enlace de YouTube.
            </span>
          </p>
        </div>
      </section>
      <section className={`product-craft ${base}`} id="diseno">
        <div>
          <h2>
            {wedding
              ? "Su estilo, hasta en el último detalle."
              : "Cambia el diseño. Conserva lo que cuenta."}
          </h2>
          <p>
            {wedding
              ? "Cambien la paleta y la tipografía del conjunto, prueben otra plantilla conservando sus textos y fotos, y añadan solo las secciones que necesiten."
              : "Prueba otro diseño sin perder textos ni fotos. Cambia los colores y la tipografía del conjunto y mantén los detalles que personalizaste."}
          </p>
          <ul>
            <li>
              Portada, historia, itinerario, mapa, galería, dress code y
              confirmación ya adaptados al estilo.
            </li>
            <li>
              Alinear, distribuir, agrupar, bloquear y copiar estilos para
              cuidar la composición.
            </li>
            <li>
              Nombres largos, fotografías y textos con espacio para respirar.
            </li>
            <li>
              Guardado automático; los cambios de una invitación publicada se
              aplican cuando decides actualizarla.
            </li>
          </ul>
          <a href={studio}>
            {wedding ? "Probarlo en el estudio" : "Probarlo en mi espacio"}
            <Icon name="external" />
          </a>
        </div>
        <EditorPreviewArt wedding={wedding} />
      </section>
      <section className={`product-organize ${base}`}>
        <OrganizationPreviewArt wedding={wedding} />
        <div>
          <h2>
            {wedding
              ? "La emoción de invitar. La calma de tenerlo organizado."
              : "Del primer mensaje al último «sí, voy»."}
          </h2>
          <p>
            {wedding
              ? "Detrás del diseño, un espacio para su lista de invitados, acompañantes, respuestas, mesas y regalos."
              : "La invitación abre el encuentro. Tu espacio reúne invitados, acompañantes, respuestas, mesas y regalos."}
          </p>
          <ul>
            <li>Carga de invitados con Excel o a mano.</li>
            <li>Envío por WhatsApp por orden de lista y según el aforo.</li>
            <li>Respuestas Sí, No o Tal vez, con los cupos de cada grupo.</li>
            <li>Plano de mesas y lista de entrada en Excel.</li>
            <li>
              Lista de regalos con reservas para evitar elecciones repetidas.
            </li>
          </ul>
          <p>
            Al pulsar «Enviar invitaciones», primero se prepara y comprueba la
            web; después empieza el envío.
          </p>
          <a
            href={
              wedding
                ? "/organizar-invitados-de-boda"
                : "/organizar-invitados-y-mesas"
            }
          >
            Ver cómo se organiza <Icon name="arrow" />
          </a>
        </div>
      </section>
      <VenueProductPreview wedding={wedding} />
      <GiftsProductPreview wedding={wedding} />
    </div>
  );
}
