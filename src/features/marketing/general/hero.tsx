import Icon from "@/components/icon";
export default function GeneralHero() {
  return (
    <section className="festival-hero party-shell" id="contenido">
      <div className="festival-copy">
        <p>Invitaciones digitales para tus eventos</p>
        <h1>
          El plan empieza
          <br />
          con un
          <br />
          «¿te apuntas?»
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
      <figure className="festival-stage">
        <div className="festival-orbit" aria-hidden="true" />
        <div className="festival-ticket">
          <span>The Date te invita</span>
          <Icon name="sparkle" />
          <strong>
            Nos vemos
            <br />
            en la pista.
          </strong>
          <p>Tu gente. Tu música. Tu noche.</p>
          <div>
            <span>
              Sábado 24
              <br />
              20:00 h
            </span>
            <span>
              Dress code:
              <br />
              ganas de bailar
            </span>
          </div>
          <span className="festival-tear">Esta noche tiene tu nombre</span>
        </div>
        <div className="festival-response">
          <Icon name="check" />
          <span>
            ¡Me apunto!<small>Así se siente recibir un sí.</small>
          </span>
        </div>
        <figcaption>Invitación y respuesta ilustrativas</figcaption>
      </figure>
    </section>
  );
}
