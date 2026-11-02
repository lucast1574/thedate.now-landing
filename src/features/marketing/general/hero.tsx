import HeroTemplateScene from "../hero-template-scene";
import Icon from "@/components/icon";
export default function GeneralHero() {
  return (
    <section className="festival-hero party-shell" id="contenido">
      <div className="festival-copy">
        <p>Invitaciones digitales para tus eventos</p>
        <h1>
          Tu plan.
          <br />
          Tu invitación.
        </h1>
        <p>
          Cumpleaños, fiestas y encuentros. Crea una invitación tan tuya como el
          plan, compártela por WhatsApp y reúne a tu gente.
        </p>
        <div className="festival-actions">
          <a className="party-button" href="https://crea.thedate.now">
            Crear mi invitación <Icon name="external" />
          </a>
          <a href="#ideas">
            Encontrar mi ocasión <Icon name="down" />
          </a>
        </div>
        <small>Diseña y guarda gratis. Publica cuando tengas todo listo.</small>
      </div>
      <HeroTemplateScene wedding={false} />
    </section>
  );
}
