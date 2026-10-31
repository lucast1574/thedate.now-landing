import Icon from "@/components/icon";
export default function OrganizationPreviewArt({
  wedding,
}: {
  wedding: boolean;
}) {
  return (
    <figure className="organization-scene">
      <div className="scene-guest-list" aria-hidden="true">
        <span>
          {wedding ? "Su lista de invitados" : "Tu lista de invitados"}
        </span>
        {[
          ["Valeria y familia", "3 personas"],
          ["Andrés Rojas", "1 persona"],
          ["Camila Torres", "2 personas"],
        ].map(([name, people], n) => (
          <div key={name}>
            <span>
              <strong>{name}</strong>
              <small>{people}</small>
            </span>
            <span className={`scene-response response-${n}`} data-animated>
              <Icon name="check" />
              Confirmado
            </span>
          </div>
        ))}
      </div>
      <figcaption>
        Una muestra de la lista de invitados y sus respuestas.
      </figcaption>
    </figure>
  );
}
