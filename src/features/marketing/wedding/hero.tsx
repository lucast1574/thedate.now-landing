import Icon from "@/components/icon";
import HeroTemplateScene from "../hero-template-scene";
export default function WeddingHero() {
  return (
    <section className="vow-hero shell">
      <div className="vow-copy">
        <p className="vow-intro">Invitaciones digitales de boda</p>
        <h1>
          Su historia,
          <br />
          hecha invitación.
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
      <HeroTemplateScene wedding />
    </section>
  );
}
