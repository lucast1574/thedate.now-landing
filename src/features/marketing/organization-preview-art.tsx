import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
export default function OrganizationPreviewArt({
  wedding,
}: {
  wedding: boolean;
}) {
  const i18n = useTranslator();

  return (
    <figure className="organization-scene">
      <div className="scene-guest-list" aria-hidden="true">
        <span>
          {wedding
            ? i18n("Su lista de invitados")
            : i18n("Tu lista de invitados")}
        </span>
        {[
          [i18n("Valeria y familia"), "3 personas"],
          [i18n("Andrés Rojas"), "1 persona"],
          [i18n("Camila Torres"), "2 personas"],
        ].map(([name, people], n) => (
          <div key={name}>
            <span>
              <strong>{name}</strong>
              <small>{people}</small>
            </span>
            <span className={`scene-response response-${n}`} data-animated>
              <Icon name="check" />
              {i18n("Confirmado")}
            </span>
          </div>
        ))}
      </div>
      <figcaption>
        {i18n("Una muestra de la lista de invitados y sus respuestas.")}
      </figcaption>
    </figure>
  );
}
