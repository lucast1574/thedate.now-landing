import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
export default function GeneralHow() {
  const i18n = useTranslator();

  return (
    <section className="party-how" id="como-funciona">
      <div className="party-shell">
        <div className="party-how-intro">
          <p className="party-eyebrow">
            {i18n("DE LA IDEA AL “¡ALLÁ ESTARÉ!”")}
          </p>
          <h2>
            {i18n("Todo fluye")} <br />
            <em>{i18n("mejor junto.")}</em>
          </h2>
        </div>
        <div className="party-steps">
          <article>
            <span>01</span>
            <h3>{i18n("Hazla tuya")}</h3>
            <p>
              {i18n(
                "Elige el estilo, agrega fotos y escribe los detalles con tu voz.",
              )}
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>{i18n("Invita fácil")}</h3>
            <p>
              {i18n(
                "Comparte una dirección única y envía invitaciones por WhatsApp.",
              )}
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>{i18n("Disfruta el plan")}</h3>
            <p>
              {i18n("Mira quién confirmó y lleva el aforo desde tu espacio.")}
            </p>
          </article>
        </div>
        <div className="party-final">
          <span>{i18n("¿Ya tienes una fecha?")}</span>
          <a className="party-button" href="https://crea.thedate.now">
            {i18n("Hagamos que pase")} <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  );
}
