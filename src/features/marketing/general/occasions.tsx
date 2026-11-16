import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
export default function GeneralOccasions() {
  const i18n = useTranslator();

  return (
    <section className="party-occasions party-shell" id="ideas">
      <div className="party-section-head">
        <div>
          <p className="party-eyebrow">
            {i18n("PARA TODOS ESOS DÍAS QUE CUENTAN")}
          </p>
          <h2>
            {i18n("La vida pide")} <br />
            <em>{i18n("celebrarse.")}</em>
          </h2>
        </div>
        <p>
          {i18n(
            "Desde una fiesta enorme hasta una cena con los de siempre. Dale a cada ocasión un lugar propio.",
          )}
        </p>
      </div>
      <div className="party-occasion-grid">
        <article className="occasion-birthday">
          <span>{i18n("Pide un deseo")}</span>
          <b aria-hidden="true">
            <Icon name="cake" />
          </b>
          <h3>{i18n("Cumpleaños")}</h3>
          <p>
            {i18n(
              "Otra vuelta al sol merece algo más que un mensaje en el grupo.",
            )}
          </p>
        </article>
        <article className="occasion-party">
          <span>{i18n("Sube el volumen")}</span>
          <b aria-hidden="true">
            <Icon name="music" />
          </b>
          <h3>{i18n("Fiestas")}</h3>
          <p>
            {i18n(
              "Reúne a tu gente y deja que todos sepan dónde, cuándo y cómo.",
            )}
          </p>
        </article>
        <article className="occasion-gather">
          <span>{i18n("Hagamos plan")}</span>
          <b aria-hidden="true">
            <Icon name="circle" />
          </b>
          <h3>{i18n("Encuentros")}</h3>
          <p>
            {i18n("Una comida, una graduación o simplemente ganas de vernos.")}
          </p>
        </article>
      </div>
    </section>
  );
}
