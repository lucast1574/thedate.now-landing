import Icon from "@/components/icon";
import { WeddingMark } from "@/components/brand";
export default function WeddingHero() {
  return (
    <section className="vow-hero shell">
      <div className="vow-copy">
        <p className="vow-intro">Invitaciones digitales de boda</p>
        <h1>
          Su historia merece
          <br />
          una invitación
          <br />
          inolvidable.
        </h1>
        <p>
          Antes del gran día, llega ese primer «sí, ahí estaremos». Creen una
          invitación con sus fotos, los detalles de la boda y un lugar para cada
          invitado.
        </p>
        <a className="button" href="https://studio.save.thedate.now">
          Diseñar nuestra invitación <Icon name="external" />
        </a>
        <a className="vow-secondary" href="#como-funciona">
          Conocer la experiencia <Icon name="down" />
        </a>
        <span className="vow-footnote">
          Diseñen y guarden gratis. Publiquen cuando esté lista.
        </span>
      </div>
      <figure className="vow-scene">
        <div className="vow-envelope" aria-hidden="true" />
        <div className="vow-invitation">
          <WeddingMark className="vow-flower" />
          <span>Con ustedes, siempre</span>
          <strong>
            Sofía
            <br />
            <i>&</i> Mateo
          </strong>
          <div className="vow-date">21 de junio de 2027</div>
          <p>
            Una vida por compartir.
            <br />
            Un día para celebrar.
          </p>
          <span className="vow-invitation-bottom">
            Nos encantará verlos allí
          </span>
        </div>
        <span className="vow-seal" aria-hidden="true">
          <WeddingMark />
        </span>
        <figcaption>Una muestra de lo que pueden crear juntos.</figcaption>
      </figure>
    </section>
  );
}
