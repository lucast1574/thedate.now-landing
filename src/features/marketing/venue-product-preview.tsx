import ResponsiveCopy from "./responsive-copy";
import Icon from "@/components/icon";
import preview from "./workspace-preview-data.json";
export default function VenueProductPreview({ wedding }: { wedding: boolean }) {
  return (
    <section
      className={`product-venue ${wedding ? "shell" : "party-shell"}`}
      id="mesas"
    >
      <header>
        <h2>
          {wedding ? "Su salón, en su lugar." : "Un lugar para cada persona."}
        </h2>
        <p>
          <ResponsiveCopy mobile="Mesas, invitados y pista de baile. Cada cosa en su lugar.">
            Mesas circulares o rectangulares, personas confirmadas y espacios
            para la pista, el bar o la entrada. Así se organiza en{" "}
            {wedding ? "el estudio" : "tu espacio"}.
          </ResponsiveCopy>
        </p>
      </header>
      <figure className="workspace-product-preview venue-product-preview">
        <div className="venue-product-window" aria-hidden="true">
          <div dangerouslySetInnerHTML={{ __html: preview.overview }} />
          <div className="venue-product-toolbar">
            <span>Organiza tu salón</span>
            <span>
              <Icon name="users" />
              Asignar automáticamente
            </span>
          </div>
          <div className="venue-product-board">
            <div dangerouslySetInnerHTML={{ __html: preview.seating }} />
            <span className="venue-product-add">
              <Icon name="plus" />
            </span>
            <span className="venue-product-selection" data-animated>
              <strong>Mesa 1</strong>
              <span>8 personas · 2 asientos libres</span>
              <i>
                <Icon name="check" /> Lucía Rojas
              </i>
              <i>
                <Icon name="check" /> Mateo Rojas
              </i>
            </span>
          </div>
          <div className="venue-product-footer">
            <span>3 mesas · 24 personas ubicadas</span>
            <span>
              Lista de entrada en Excel <Icon name="external" />
            </span>
          </div>
        </div>
        <figcaption>
          El plano de la plataforma, con personas y distribución de ejemplo.
        </figcaption>
      </figure>
    </section>
  );
}
