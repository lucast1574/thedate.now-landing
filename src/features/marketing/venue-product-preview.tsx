import { useTranslator } from "@/lib/i18n/react";
import ResponsiveCopy from "./responsive-copy";
import Icon from "@/components/icon";
import { useWorkspacePreview } from "./workspace-preview";
export default function VenueProductPreview({ wedding }: { wedding: boolean }) {
  const i18n = useTranslator();
  const preview = useWorkspacePreview();

  return (
    <section
      className={`product-venue ${wedding ? "shell" : "party-shell"}`}
      id="mesas"
    >
      <header>
        <h2>
          {wedding
            ? i18n("Su salón, en su lugar.")
            : i18n("Un lugar para cada persona.")}
        </h2>
        <p>
          <ResponsiveCopy mobile="Mesas, invitados y pista de baile. Cada cosa en su lugar.">
            {i18n(
              "Mesas circulares o rectangulares, personas confirmadas y espacios para la pista, el bar o la entrada. Así se organiza en",
            )}{" "}
            {wedding ? i18n("el estudio") : i18n("tu espacio")}.
          </ResponsiveCopy>
        </p>
      </header>
      <figure className="workspace-product-preview venue-product-preview">
        <div className="venue-product-window" aria-hidden="true">
          <div dangerouslySetInnerHTML={{ __html: preview.overview }} />
          <div className="venue-product-toolbar">
            <span>{i18n("Organiza tu salón")}</span>
            <span>
              <Icon name="users" />
              {i18n("Asignar automáticamente")}
            </span>
          </div>
          <div className="venue-product-board">
            <div dangerouslySetInnerHTML={{ __html: preview.seating }} />
            <span className="venue-product-add">
              <Icon name="plus" />
            </span>
            <span className="venue-product-selection" data-animated>
              <strong>{i18n("Mesa 1")}</strong>
              <span>{i18n("8 personas · 2 asientos libres")}</span>
              <i>
                <Icon name="check" /> {i18n("Lucía Rojas")}
              </i>
              <i>
                <Icon name="check" /> {i18n("Mateo Rojas")}
              </i>
            </span>
          </div>
          <div className="venue-product-footer">
            <span>{i18n("3 mesas · 24 personas ubicadas")}</span>
            <span>
              {i18n("Lista de entrada en Excel")} <Icon name="external" />
            </span>
          </div>
        </div>
        <figcaption>
          {i18n(
            "El plano de la plataforma, con personas y distribución de ejemplo.",
          )}
        </figcaption>
      </figure>
    </section>
  );
}
