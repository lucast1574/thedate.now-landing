import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
export default function EditorPreviewArt({ wedding }: { wedding: boolean }) {
  const i18n = useTranslator();

  return (
    <figure className="editor-scene">
      <div className="editor-scene-window" aria-hidden="true">
        <div className="scene-toolbar">
          <span>{i18n("Tu invitación")}</span>
          <span>
            <Icon name="undo" />
            <Icon name="redo" />
            <Icon name="eye" />
          </span>
        </div>
        <div className="scene-workspace">
          <div className="scene-section-list">
            {[
              ["layout", i18n("Portada")],
              ["clock", i18n("Itinerario")],
              ["image", i18n("Galería")],
              ["users", i18n("Dress code")],
            ].map(([icon, name]) => (
              <span key={name}>
                <Icon name={icon} />
                {name}
              </span>
            ))}
            <span className="scene-add">
              <Icon name="plus" />
              {i18n("Sección")}
            </span>
          </div>
          <div className="scene-paper" data-animated>
            <Icon name={wedding ? "flower" : "sparkle"} />
            <div className="scene-selected" data-animated>
              <strong>
                {wedding
                  ? i18n("Camila y Sebastián")
                  : i18n("Nos vemos para celebrar")}
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
            <span>{i18n("Un día para recordar")}</span>
            <div className="scene-palette">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="scene-tools">
          <span>{i18n("Alinear")}</span>
          <span>{i18n("Agrupar")}</span>
          <span>
            <Icon name="lock" />
            {i18n("Bloquear")}
          </span>
        </div>
      </div>
      <div className="scene-dress" data-animated aria-hidden="true">
        <Icon name="lucide:shirt" />
        <strong>{i18n("Elegante")}</strong>
        <span>{i18n("Preferimos evitar estos tonos")}</span>
        <div>
          {[
            [i18n("Blanco"), "#ffffff"],
            [i18n("Marfil"), "#eee5d6"],
            [i18n("Champán"), "#d1b98a"],
          ].map(([name, color]) => (
            <span key={name}>
              <i style={{ background: color }} />
              {name}
            </span>
          ))}
        </div>
      </div>
      <figcaption>
        {i18n(
          "Preview animado de composición, estilos y dress code. La edición se hace en el estudio.",
        )}
      </figcaption>
    </figure>
  );
}
