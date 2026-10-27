import Icon from "@/components/icon";
const steps = [
  [
    "01",
    "Denle su estilo",
    "Elijan una plantilla y hagan espacio para su historia: fotos, colores y palabras que se sientan suyas.",
  ],
  [
    "02",
    "Reúnan los detalles",
    "Ceremonia, celebración, horario y ubicación. Todo en una invitación que sus invitados pueden consultar desde el celular.",
  ],
  [
    "03",
    "Compartan la emoción",
    "Publiquen en una dirección propia, compartan por WhatsApp y sigan las confirmaciones desde el estudio.",
  ],
];
export default function WeddingStory() {
  return (
    <>
      <section className="vow-promise shell">
        <Icon name="flower" />
        <p>
          El día es de ustedes.
          <br />
          Los detalles también.
        </p>
        <span>
          Una invitación digital, una lista de invitados y un mismo lugar para
          organizarlo todo.
        </span>
      </section>
      <section className="vow-story shell" id="como-funciona">
        <div>
          <p className="vow-intro">Del primer diseño al gran día</p>
          <h2>
            Un poco menos de organizar.
            <br />
            Un poco más de disfrutar.
          </h2>
        </div>
        <div className="vow-steps">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="vow-guest-section">
        <div className="shell vow-guest-layout">
          <div
            className="vow-guest-preview"
            aria-label="Ejemplo ilustrativo de organización de invitados"
          >
            <span>Su lista, en calma</span>
            <div>
              <b>Valeria y familia</b>
              <small>3 cupos · Confirmados</small>
              <Icon name="check" />
            </div>
            <div>
              <b>Andrés Rojas</b>
              <small>1 cupo · Por responder</small>
              <Icon name="clock" />
            </div>
            <div>
              <b>Camila Torres</b>
              <small>2 cupos · Mesa 4</small>
              <Icon name="table" />
            </div>
            <p>Vista de ejemplo. Sin datos de invitados reales.</p>
          </div>
          <div>
            <p className="vow-intro">Que nadie se quede fuera</p>
            <h2>
              Detrás de cada nombre,
              <br />
              alguien que quieren.
            </h2>
            <p>
              Gestionen invitados, acompañantes y cupos. Consulten las
              respuestas y organicen las mesas sin perder de vista a las
              personas que hacen especial su boda.
            </p>
            <p>
              El diseño y el guardado están disponibles antes de pagar. La
              publicación y las herramientas de invitados se habilitan según el
              evento.
            </p>
          </div>
        </div>
      </section>
      <section className="vow-closing shell">
        <Icon name="ring" />
        <h2>
          Todo empieza
          <br />
          con una fecha.
        </h2>
        <p>La suya ya tiene una historia. Ahora denle una invitación.</p>
        <a className="button" href="https://studio.save.thedate.now">
          Entrar al estudio de bodas <Icon name="external" />
        </a>
      </section>
    </>
  );
}
