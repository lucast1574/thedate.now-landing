import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
export default function WeddingFeatures() {
  const i18n = useTranslator();

  return (
    <section className="features" id="como-funciona">
      <div className="shell features-layout">
        <div>
          <p className="eyebrow">{i18n("01 / LA EXPERIENCIA")}</p>
          <h2>
            {i18n("Invitar debería ser")} <br />
            <em>{i18n("parte de la emoción.")}</em>
          </h2>
        </div>
        <div className="cards">
          <article>
            <span className="card-symbol">
              <Icon name="external" />
            </span>
            <small>01</small>
            <h3>{i18n("Diseña a tu manera")}</h3>
            <p>
              {i18n(
                "Elige una plantilla, agrega fotos y cuenta los detalles de tu día con tu propia voz.",
              )}
            </p>
          </article>
          <article>
            <span className="card-symbol">
              <Icon name="circle" />
            </span>
            <small>02</small>
            <h3>{i18n("Cada invitado, al día")}</h3>
            <p>
              {i18n(
                "Invita por WhatsApp y sigue las respuestas y los cupos desde un solo panel.",
              )}
            </p>
          </article>
          <article>
            <span className="card-symbol">
              <Icon name="sparkle" />
            </span>
            <small>03</small>
            <h3>{i18n("Un lugar para recordar")}</h3>
            <p>
              {i18n(
                "Comparte una dirección tan especial como el evento: sofiaymateo.save.thedate.now.",
              )}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
