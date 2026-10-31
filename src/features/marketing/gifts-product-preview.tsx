import ResponsiveCopy from "./responsive-copy";
import Icon from "@/components/icon";
import preview from "./workspace-preview-data.json";
export default function GiftsProductPreview({ wedding }: { wedding: boolean }) {
  return (
    <section
      className={`product-gifts ${wedding ? "shell" : "party-shell"}`}
      id="regalos"
    >
      <div>
        <h2>
          {wedding
            ? "Un detalle elegido con cariño."
            : "Regalos que sí van contigo."}
        </h2>
        <p>
          <ResponsiveCopy mobile="Una lista dentro de la invitación. Cada regalo se reserva una sola vez.">
            {wedding
              ? "Reúnan sus ideas en una lista que forma parte de la invitación. Cada invitado puede elegir un regalo y ver cuáles ya están reservados."
              : "Reúne tus ideas en una lista dentro de la invitación. Tu gente puede elegir un regalo y ver qué opciones siguen disponibles."}
          </ResponsiveCopy>
        </p>
        <p className="showcase-detail">
          Una elección personal, sin regalos repetidos. La compra se hace por
          separado en la tienda.
        </p>
      </div>
      <figure className="workspace-product-preview gift-product-preview">
        <div aria-hidden="true">
          <div className="gift-product-heading">
            <Icon name="lucide:gift" />
            <strong>
              {wedding
                ? "Un detalle para nuestra nueva etapa"
                : "Detalles para celebrar"}
            </strong>
            <span>Tu compañía es el mejor regalo.</span>
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
              <strong>Tu elección está reservada</strong>Los demás invitados
              verán que ya la elegiste.
            </span>
          </span>
        </div>
        <figcaption>
          Una muestra de la lista que reciben los invitados, con regalos de
          ejemplo.
        </figcaption>
      </figure>
    </section>
  );
}
