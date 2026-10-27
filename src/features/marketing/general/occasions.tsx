import Icon from "@/components/icon";
export default function GeneralOccasions() {
  return (
    <section className="party-occasions party-shell" id="ideas">
      <div className="party-section-head">
        <div>
          <p className="party-eyebrow">PARA TODOS ESOS DÍAS QUE CUENTAN</p>
          <h2>
            La vida pide
            <br />
            <em>celebrarse.</em>
          </h2>
        </div>
        <p>
          Desde una fiesta enorme hasta una cena con los de siempre. Dale a cada
          ocasión un lugar propio.
        </p>
      </div>
      <div className="party-occasion-grid">
        <article className="occasion-birthday">
          <span>Pide un deseo</span>
          <b aria-hidden="true">
            <Icon name="cake" />
          </b>
          <h3>Cumpleaños</h3>
          <p>Otra vuelta al sol merece algo más que un mensaje en el grupo.</p>
        </article>
        <article className="occasion-party">
          <span>Sube el volumen</span>
          <b aria-hidden="true">
            <Icon name="music" />
          </b>
          <h3>Fiestas</h3>
          <p>Reúne a tu gente y deja que todos sepan dónde, cuándo y cómo.</p>
        </article>
        <article className="occasion-gather">
          <span>Hagamos plan</span>
          <b aria-hidden="true">
            <Icon name="circle" />
          </b>
          <h3>Encuentros</h3>
          <p>Una comida, una graduación o simplemente ganas de vernos.</p>
        </article>
      </div>
    </section>
  );
}
