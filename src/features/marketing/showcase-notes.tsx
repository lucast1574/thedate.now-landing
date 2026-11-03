import Icon from "@/components/icon";
export default function ShowcaseNotes() {
  return (
    <div className="showcase-notes">
      <p>
        <Icon name="leaf" />
        <span>
          <strong>Adornos que puedes hacer tuyos</strong>
          <span className="showcase-detail">
            Catorce piezas en seis colecciones. Muévelas, cambia su color y
            ajusta su intensidad.
          </span>
        </span>
      </p>
      <p>
        <Icon name="image" />
        <span>
          <strong>Fotos que forman parte del diseño</strong>
          <span className="showcase-detail">
            Arcos, bordes suaves y portadas fotográficas. Ajusta el encuadre
            para conservar lo importante.
          </span>
        </span>
      </p>
      <p>
        <Icon name="layout" />
        <span>
          <strong>Las letras también cuentan</strong>
          <span className="showcase-detail">
            Siete opciones tipográficas, cursiva e interlineado. Edita los
            textos libres directamente sobre el diseño.
          </span>
        </span>
      </p>
    </div>
  );
}
