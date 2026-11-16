import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
import { WeddingMark } from "@/components/brand";
export default function WeddingHero() {
  const i18n = useTranslator();

  return (
    <section className="vow-hero shell">
      <div className="vow-copy">
        <p className="vow-intro">{i18n("Invitaciones digitales de boda")}</p>
        <h1>
          {i18n("Su historia merece")} <br />
          {i18n("una invitación")} <br />
          {i18n("inolvidable.")}
        </h1>
        <p>
          {i18n(
            "Antes del gran día, llega ese primer «sí, ahí estaremos». Creen una invitación con sus fotos, los detalles de la boda y un lugar para cada invitado.",
          )}
        </p>
        <a className="button" href="https://studio.save.thedate.now">
          {i18n("Diseñar nuestra invitación")} <Icon name="external" />
        </a>
        <a className="vow-secondary" href="#como-funciona">
          {i18n("Conocer la experiencia")} <Icon name="down" />
        </a>
        <span className="vow-footnote">
          {i18n("Diseñen y guarden gratis. Publiquen cuando esté lista.")}
        </span>
      </div>
      <figure className="vow-scene">
        <div className="vow-envelope" aria-hidden="true" />
        <div className="vow-invitation">
          <WeddingMark className="vow-flower" />
          <span>{i18n("Con ustedes, siempre")}</span>
          <strong>
            {i18n("Sofía")} <br />
            <i>&</i> {i18n("Mateo")}
          </strong>
          <div className="vow-date">{i18n("21 de junio de 2027")}</div>
          <p>
            {i18n("Una vida por compartir.")} <br />
            {i18n("Un día para celebrar.")}
          </p>
          <span className="vow-invitation-bottom">
            {i18n("Nos encantará verlos allí")}
          </span>
        </div>
        <span className="vow-seal" aria-hidden="true">
          <WeddingMark />
        </span>
        <figcaption>
          {i18n("Una muestra de lo que pueden crear juntos.")}
        </figcaption>
      </figure>
    </section>
  );
}
