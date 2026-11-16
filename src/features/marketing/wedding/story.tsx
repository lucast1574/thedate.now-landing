import { useTranslator } from "@/lib/i18n/react";
import { type Translator, localized } from "@/lib/i18n/translator";
import Icon from "@/components/icon";
const steps = localized((i18n: Translator) => [
  [
    "01",
    i18n("Denle su estilo"),
    i18n(
      "Elijan una plantilla y hagan espacio para su historia: fotos, colores y palabras que se sientan suyas.",
    ),
  ],
  [
    "02",
    i18n("Reúnan los detalles"),
    i18n(
      "Ceremonia, celebración, horario y ubicación. Todo en una invitación que sus invitados pueden consultar desde el celular.",
    ),
  ],
  [
    "03",
    i18n("Compartan la emoción"),
    i18n(
      "Preparen la lista en Invitados. Al enviar, se prepara la web y salen los enlaces por WhatsApp; las respuestas llegan al estudio.",
    ),
  ],
]);
export default function WeddingStory() {
  const i18n = useTranslator();

  return (
    <>
      <section className="vow-promise shell">
        <Icon name="flower" />
        <p>
          {i18n("El día es de ustedes.")} <br />
          {i18n("Los detalles también.")}
        </p>
        <span>
          {i18n(
            "Una invitación digital, una lista de invitados y un mismo lugar para organizarlo todo.",
          )}
        </span>
      </section>
      <section className="vow-story shell" id="como-funciona">
        <div>
          <p className="vow-intro">{i18n("Del primer diseño al gran día")}</p>
          <h2>
            {i18n("Un poco menos de organizar.")} <br />
            {i18n("Un poco más de disfrutar.")}
          </h2>
        </div>
        <div className="vow-steps">
          {steps(i18n).map(([number, title, text]) => (
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
      <div className="vow-closing-band">
        <section className="vow-closing shell">
          <Icon name="ring" />
          <h2>
            {i18n("Todo empieza")} <br />
            {i18n("con una fecha.")}
          </h2>
          <p>
            {i18n("La suya ya tiene una historia. Ahora denle una invitación.")}
          </p>
          <a className="button" href="https://studio.save.thedate.now">
            {i18n("Entrar al estudio de bodas")} <Icon name="external" />
          </a>
        </section>
      </div>
    </>
  );
}
