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
    "Preparen la lista en Invitados. Al enviar, se prepara la web y salen los enlaces por WhatsApp; las respuestas llegan al estudio.",
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
