import Icon from "@/components/icon";
export default function ShowcaseNotes() {
  return (
    <div className="showcase-notes">
      <p>
        <Icon name="mail" />
        <span>
          <strong>Un comienzo con emoción</strong>
          <span className="showcase-detail">
            Seis aperturas animadas: carta, jardín, ticket, telón, flor y
            constelación.
          </span>
        </span>
      </p>
      <p>
        <Icon name="image" />
        <span>
          <strong>Fotos que forman parte del diseño</strong>
          <span className="showcase-detail">
            Portadas a sangre, arcos y bordes suaves que se funden con el fondo.
          </span>
        </span>
      </p>
      <p>
        <Icon name="music" />
        <span>
          <strong>También tiene su canción</strong>
          <span className="showcase-detail">
            Música con un archivo MP3 propio o un enlace de YouTube.
          </span>
        </span>
      </p>
    </div>
  );
}
