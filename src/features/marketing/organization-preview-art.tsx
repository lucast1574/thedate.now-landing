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
      <div className="scene-table-plan" aria-hidden="true">
        <svg viewBox="0 0 340 230">
          <rect
            x="20"
            y="15"
            width="300"
            height="200"
            rx="8"
            fill="none"
            stroke="currentColor"
            opacity=".2"
          />
          <path
            d="M245 15V215M20 163H245"
            stroke="currentColor"
            opacity=".12"
          />
          {[
            [85, 70],
            [177, 70],
            [85, 130],
            [177, 130],
          ].map(([x, y], n) => (
            <g className={`scene-table table-${n}`} data-animated key={n}>
              <circle cx={x} cy={y} r="22" fill="currentColor" opacity=".1" />
              <circle
                cx={x}
                cy={y}
                r="17"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <circle
                  key={angle}
                  cx={x + Math.cos((angle * Math.PI) / 180) * 29}
                  cy={y + Math.sin((angle * Math.PI) / 180) * 29}
                  r="3.5"
                  fill="currentColor"
                  opacity=".7"
                />
              ))}
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="currentColor"
                fontSize="11"
              >
                {n + 1}
              </text>
            </g>
          ))}
          <text
            x="269"
            y="105"
            fill="currentColor"
            fontSize="10"
            transform="rotate(90 269 105)"
          >
            Pista de baile
          </text>
          <text x="55" y="195" fill="currentColor" fontSize="11">
            Un lugar para cada persona
          </text>
        </svg>
      </div>
      <div className="scene-gift" data-animated aria-hidden="true">
        <Icon name="lucide:gift" />
        <span>
          <strong>Un detalle con cariño</strong>
          <small>Regalo reservado</small>
        </span>
        <Icon name="check" />
      </div>
      <figcaption>
        Escena ilustrativa con nombres y respuestas de ejemplo. No se realizan
        envíos ni reservas.
      </figcaption>
    </figure>
  );
}
