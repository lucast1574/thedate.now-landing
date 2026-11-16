import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
export default function ShowcaseNotes() {
  const i18n = useTranslator();

  return (
    <div className="showcase-notes">
      <p>
        <Icon name="leaf" />
        <span>
          <strong>{i18n("Adornos que puedes hacer tuyos")}</strong>
          <span className="showcase-detail">
            {i18n(
              "Catorce piezas en seis colecciones. Muévelas, cambia su color y ajusta su intensidad.",
            )}
          </span>
        </span>
      </p>
      <p>
        <Icon name="image" />
        <span>
          <strong>{i18n("Fotos que forman parte del diseño")}</strong>
          <span className="showcase-detail">
            {i18n(
              "Arcos, bordes suaves y portadas fotográficas. Ajusta el encuadre para conservar lo importante.",
            )}
          </span>
        </span>
      </p>
      <p>
        <Icon name="layout" />
        <span>
          <strong>{i18n("Las letras también cuentan")}</strong>
          <span className="showcase-detail">
            {i18n(
              "Siete opciones tipográficas, cursiva e interlineado. Edita los textos libres directamente sobre el diseño.",
            )}
          </span>
        </span>
      </p>
    </div>
  );
}
