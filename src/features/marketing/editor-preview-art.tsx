import Icon from "@/components/icon";
export default function EditorPreviewArt({ wedding }: { wedding: boolean }) {
  return (
    <figure className="editor-scene">
      <div className="editor-scene-window" aria-hidden="true">
        <div className="scene-toolbar">
          <span>Tu invitación</span>
          <span>
            <Icon name="undo" />
            <Icon name="redo" />
            <Icon name="eye" />
          </span>
        </div>
        <div className="scene-workspace">
          <div className="scene-section-list">
            {[
              ["layout", "Portada"],
              ["clock", "Itinerario"],
              ["image", "Galería"],
              ["users", "Dress code"],
            ].map(([icon, name]) => (
              <span key={name}>
                <Icon name={icon} />
                {name}
              </span>
            ))}
            <span className="scene-add">
              <Icon name="plus" />
              Sección
            </span>
          </div>
          <div className="scene-paper" data-animated>
            <Icon name={wedding ? "flower" : "sparkle"} />
            <div className="scene-selected" data-animated>
              <strong>
                {wedding ? "Camila y Sebastián" : "Nos vemos para celebrar"}
              </strong>
              <svg
                className="scene-pointer"
                data-animated
                viewBox="0 0 28 34"
                fill="none"
              >
                <path
                  d="m3 2 21 20-11-1-5 10Z"
                  fill="currentColor"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span>Un día para recordar</span>
            <div className="scene-palette">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="scene-tools">
          <span>Alinear</span>
          <span>Agrupar</span>
          <span>
            <Icon name="lock" />
            Bloquear
          </span>
        </div>
      </div>
      <div className="scene-dress" data-animated aria-hidden="true">
        <Icon name="lucide:shirt" />
        <strong>Elegante</strong>
        <span>Preferimos evitar estos tonos</span>
        <div>
          {[
            ["Blanco", "#ffffff"],
            ["Marfil", "#eee5d6"],
            ["Champán", "#d1b98a"],
          ].map(([name, color]) => (
            <span key={name}>
              <i style={{ background: color }} />
              {name}
            </span>
          ))}
        </div>
      </div>
      <figcaption>
        Preview animado de composición, estilos y dress code. La edición se hace
        en el estudio.
      </figcaption>
    </figure>
  );
}
