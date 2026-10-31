import TemplateShowcase from "./template-showcase";
import ResponsiveCopy from "./responsive-copy";
import GiftsProductPreview from "./gifts-product-preview";
import VenueProductPreview from "./venue-product-preview";
import ShowcaseMotion from "./showcase-motion";
import Icon from "@/components/icon";
import EditorPreviewArt from "./editor-preview-art";
import OrganizationPreviewArt from "./organization-preview-art";
export default function ProductShowcase({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  const base = wedding ? "shell" : "party-shell",
    studio = wedding
      ? "https://studio.save.thedate.now"
      : "https://crea.thedate.now";
  return (
    <div
      className={`product-showcase ${wedding ? "showcase-wedding" : "showcase-event"}`}
    >
      <ShowcaseMotion />
      <TemplateShowcase wedding={wedding} />
      <section className={`product-craft ${base}`} id="diseno">
        <div>
          <h2>
            {wedding ? (
              <ResponsiveCopy mobile="Cada detalle, muy suyo.">
                Su estilo, hasta en el último detalle.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="Tu diseño. Tu estilo.">
                Cambia el diseño. Conserva lo que cuenta.
              </ResponsiveCopy>
            )}
          </h2>
          <p>
            {wedding ? (
              <ResponsiveCopy mobile="Colores, fotos y secciones a su estilo. Todo se guarda automáticamente.">
                Cambien la paleta y la tipografía del conjunto, prueben otra
                plantilla conservando sus textos y fotos, y añadan solo las
                secciones que necesiten.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="Prueba estilos sin perder tus textos ni fotos. Todo se guarda automáticamente.">
                Prueba otro diseño sin perder textos ni fotos. Cambia los
                colores y la tipografía del conjunto y mantén los detalles que
                personalizaste.
              </ResponsiveCopy>
            )}
          </p>
          <ul className="showcase-detail">
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
            {wedding ? (
              <ResponsiveCopy mobile="La emoción, organizada.">
                La emoción de invitar. La calma de tenerlo organizado.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="Del mensaje al «sí, voy».">
                Del primer mensaje al último «sí, voy».
              </ResponsiveCopy>
            )}
          </h2>
          <p>
            {wedding ? (
              <ResponsiveCopy mobile="Invitados, respuestas y WhatsApp en un mismo lugar.">
                Detrás del diseño, un espacio para su lista de invitados,
                acompañantes, respuestas, mesas y regalos.
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="Tu lista, las respuestas y WhatsApp, juntos.">
                La invitación abre el encuentro. Tu espacio reúne invitados,
                acompañantes, respuestas, mesas y regalos.
              </ResponsiveCopy>
            )}
          </p>
          <ul className="showcase-detail">
            <li>Carga de invitados con Excel o a mano.</li>
            <li>Envío por WhatsApp por orden de lista y según el aforo.</li>
            <li>Respuestas Sí, No o Tal vez, con los cupos de cada grupo.</li>
            <li>Plano de mesas y lista de entrada en Excel.</li>
            <li>
              Lista de regalos con reservas para evitar elecciones repetidas.
            </li>
          </ul>
          <p className="showcase-detail">
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
