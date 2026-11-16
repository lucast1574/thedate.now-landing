import { useTranslator } from "@/lib/i18n/react";
import ResponsiveCopy from "./responsive-copy";
import Icon from "@/components/icon";
import { useWorkspacePreview } from "./workspace-preview";
export default function GiftsProductPreview({ wedding }: { wedding: boolean }) {
  const i18n = useTranslator();
  const preview = useWorkspacePreview();

  return (
    <section
      className={`product-gifts ${wedding ? "shell" : "party-shell"}`}
      id="regalos"
    >
      <div>
        <h2>
          {wedding
            ? i18n("Un detalle elegido con cariño.")
            : i18n("Regalos que sí van contigo.")}
        </h2>
        <p>
          <ResponsiveCopy mobile="Una lista dentro de la invitación. Cada regalo se reserva una sola vez.">
            {wedding
              ? i18n(
                  "Reúnan sus ideas en una lista que forma parte de la invitación. Cada invitado puede elegir un regalo y ver cuáles ya están reservados.",
                )
              : i18n(
                  "Reúne tus ideas en una lista dentro de la invitación. Tu gente puede elegir un regalo y ver qué opciones siguen disponibles.",
                )}
          </ResponsiveCopy>
        </p>
        <p className="showcase-detail">
          {i18n(
            "Una elección personal, sin regalos repetidos. La compra se hace por separado en la tienda.",
          )}
        </p>
      </div>
      <figure className="workspace-product-preview gift-product-preview">
        <div aria-hidden="true">
          <div className="gift-product-heading">
            <Icon name="lucide:gift" />
            <strong>
              {wedding
                ? i18n("Un detalle para nuestra nueva etapa")
                : i18n("Detalles para celebrar")}
            </strong>
            <span>{i18n("Tu compañía es el mejor regalo.")}</span>
          </div>
          <div className="gift-product-grid">
            {preview.gifts.map((html, index) => (
              <div
                data-animated
                className={`gift-product-item gift-item-${index}`}
                key={index}
              >
                {index === 0 ? (
                  <>
                    <div
                      className="gift-state-before"
                      data-animated
                      dangerouslySetInnerHTML={{
                        __html: preview.giftAvailable,
                      }}
                    />
                    <div
                      className="gift-state-after"
                      data-animated
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                )}
              </div>
            ))}
          </div>
          <span className="gift-product-receipt" data-animated>
            <Icon name="check" />
            <span>
              <strong>{i18n("Tu elección está reservada")}</strong>
              {i18n("Los demás invitados verán que ya la elegiste.")}
            </span>
          </span>
        </div>
        <figcaption>
          {i18n(
            "Una muestra de la lista que reciben los invitados, con regalos de ejemplo.",
          )}
        </figcaption>
      </figure>
    </section>
  );
}
