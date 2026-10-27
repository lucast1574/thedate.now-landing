import Icon from "@/components/icon";
export default function GeneralHow() {
  return (
    <section className="party-how" id="como-funciona">
      <div className="party-shell">
        <div className="party-how-intro">
          <p className="party-eyebrow">DE LA IDEA AL “¡ALLÁ ESTARÉ!”</p>
          <h2>
            Todo fluye
            <br />
            <em>mejor junto.</em>
          </h2>
        </div>
        <div className="party-steps">
          <article>
            <span>01</span>
            <h3>Hazla tuya</h3>
            <p>
              Elige el estilo, agrega fotos y escribe los detalles con tu voz.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Invita fácil</h3>
            <p>
              Comparte una dirección única y envía invitaciones por WhatsApp.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Disfruta el plan</h3>
            <p>Mira quién confirmó y lleva el aforo desde tu espacio.</p>
          </article>
        </div>
        <div className="party-final">
          <span>¿Ya tienes una fecha?</span>
          <a className="party-button" href="https://crea.thedate.now">
            Hagamos que pase <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  );
}
