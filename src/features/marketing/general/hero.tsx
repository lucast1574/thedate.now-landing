import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
export default function GeneralHero() {
  const i18n = useTranslator();

  return (
    <section className="festival-hero party-shell" id="contenido">
      <div className="festival-copy">
        <p>{i18n("Invitaciones digitales para tus eventos")}</p>
        <h1>
          {i18n("El plan empieza")} <br />
          {i18n("con un")} <br />
          {i18n("«¿te apuntas?»")}
        </h1>
        <p>
          {i18n(
            "Cumpleaños, fiestas y encuentros. Crea una invitación tan tuya como el plan, compártela por WhatsApp y reúne a tu gente.",
          )}
        </p>
        <div className="festival-actions">
          <a className="party-button" href="https://crea.thedate.now">
            {i18n("Crear mi invitación")} <Icon name="external" />
          </a>
          <a href="#ideas">
            {i18n("Encontrar mi ocasión")} <Icon name="down" />
          </a>
        </div>
        <small>
          {i18n("Diseña y guarda gratis. Publica cuando tengas todo listo.")}
        </small>
      </div>
      <figure className="festival-stage">
        <div className="festival-orbit" aria-hidden="true" />
        <div className="festival-ticket">
          <span>{i18n("The Date te invita")}</span>
          <Icon name="sparkle" />
          <strong>
            {i18n("Nos vemos")} <br />
            {i18n("en la pista.")}
          </strong>
          <p>{i18n("Tu gente. Tu música. Tu noche.")}</p>
          <div>
            <span>
              {i18n("Sábado 24")} <br />
              {i18n("20:00 h")}
            </span>
            <span>
              {i18n("Dress code:")} <br />
              {i18n("ganas de bailar")}
            </span>
          </div>
          <span className="festival-tear">
            {i18n("Esta noche tiene tu nombre")}
          </span>
        </div>
        <div className="festival-response">
          <Icon name="check" />
          <span>
            {i18n("¡Me apunto!")}
            <small>{i18n("Así se siente recibir un sí.")}</small>
          </span>
        </div>
        <figcaption>{i18n("Invitación y respuesta ilustrativas")}</figcaption>
      </figure>
    </section>
  );
}
