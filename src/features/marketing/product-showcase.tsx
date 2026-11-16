import { useTranslator } from "@/lib/i18n/react";
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
  const i18n = useTranslator();

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
      <div className="showcase-surface">
        <section className={`product-craft ${base}`} id="diseno">
          <div>
            <h2>
              {wedding ? (
                <ResponsiveCopy mobile="Cada detalle, muy suyo.">
                  {i18n("Su estilo, hasta en el último detalle.")}
                </ResponsiveCopy>
              ) : (
                <ResponsiveCopy mobile="Tu diseño. Tu estilo.">
                  {i18n("Cambia el diseño. Conserva lo que cuenta.")}
                </ResponsiveCopy>
              )}
            </h2>
            <p>
              {wedding ? (
                <ResponsiveCopy mobile="Colores, fotos y secciones a su estilo. Todo se guarda automáticamente.">
                  {i18n(
                    "Cambien la paleta y la tipografía del conjunto, prueben otra plantilla conservando sus textos y fotos, y añadan solo las secciones que necesiten.",
                  )}
                </ResponsiveCopy>
              ) : (
                <ResponsiveCopy mobile="Prueba estilos sin perder tus textos ni fotos. Todo se guarda automáticamente.">
                  {i18n(
                    "Prueba otro diseño sin perder textos ni fotos. Cambia los colores y la tipografía del conjunto y mantén los detalles que personalizaste.",
                  )}
                </ResponsiveCopy>
              )}
            </p>
            <ul className="showcase-detail">
              <li>
                {i18n(
                  "Portada, historia, itinerario, mapa, galería, dress code y confirmación ya adaptados al estilo.",
                )}
              </li>
              <li>
                {i18n(
                  "Alinear, distribuir, agrupar, bloquear y copiar estilos para cuidar la composición.",
                )}
              </li>
              <li>
                {i18n(
                  "Nombres largos, fotografías y textos con espacio para respirar.",
                )}
              </li>
              <li>
                {i18n(
                  "Guardado automático; los cambios de una invitación publicada se aplican cuando decides actualizarla.",
                )}
              </li>
            </ul>
            <a href={studio}>
              {wedding
                ? i18n("Probarlo en el estudio")
                : i18n("Probarlo en mi espacio")}
              <Icon name="external" />
            </a>
          </div>
          <EditorPreviewArt wedding={wedding} />
        </section>
      </div>
      <section className={`product-organize ${base}`}>
        <OrganizationPreviewArt wedding={wedding} />
        <div>
          <h2>
            {wedding ? (
              <ResponsiveCopy mobile="La emoción, organizada.">
                {i18n("La emoción de invitar. La calma de tenerlo organizado.")}
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="Del mensaje al «sí, voy».">
                {i18n("Del primer mensaje al último «sí, voy».")}
              </ResponsiveCopy>
            )}
          </h2>
          <p>
            {wedding ? (
              <ResponsiveCopy mobile="Invitados, respuestas y WhatsApp en un mismo lugar.">
                {i18n(
                  "Detrás del diseño, un espacio para su lista de invitados, acompañantes, respuestas, mesas y regalos.",
                )}
              </ResponsiveCopy>
            ) : (
              <ResponsiveCopy mobile="Tu lista, las respuestas y WhatsApp, juntos.">
                {i18n(
                  "La invitación abre el encuentro. Tu espacio reúne invitados, acompañantes, respuestas, mesas y regalos.",
                )}
              </ResponsiveCopy>
            )}
          </p>
          <ul className="showcase-detail">
            <li>{i18n("Carga de invitados con Excel o a mano.")}</li>
            <li>
              {i18n("Envío por WhatsApp por orden de lista y según el aforo.")}
            </li>
            <li>
              {i18n(
                "Respuestas Sí, No o Tal vez, con los cupos de cada grupo.",
              )}
            </li>
            <li>{i18n("Plano de mesas y lista de entrada en Excel.")}</li>
            <li>
              {i18n(
                "Lista de regalos con reservas para evitar elecciones repetidas.",
              )}
            </li>
          </ul>
          <p className="showcase-detail">
            {i18n(
              "Al pulsar «Enviar invitaciones», primero se prepara y comprueba la web; después empieza el envío.",
            )}
          </p>
          <a
            href={
              wedding
                ? "/organizar-invitados-de-boda"
                : "/organizar-invitados-y-mesas"
            }
          >
            {i18n("Ver cómo se organiza")} <Icon name="arrow" />
          </a>
        </div>
      </section>
      <div className="showcase-surface">
        <VenueProductPreview wedding={wedding} />
      </div>
      <GiftsProductPreview wedding={wedding} />
    </div>
  );
}
