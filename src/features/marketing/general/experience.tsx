import Icon from "@/components/icon";
export default function GeneralExperience() {
  return (
    <section className="festival-control party-shell">
      <div>
        <p>Del chat al encuentro</p>
        <h2>
          Menos «¿a qué hora?».
          <br />
          Más «allá nos vemos».
        </h2>
        <p>
          La fecha, la ubicación y los detalles viven en tu invitación. Tus
          invitados encuentran el plan y tú puedes seguir las confirmaciones en
          un solo lugar.
        </p>
        <a className="party-link" href="https://crea.thedate.now">
          Abrir mi espacio <Icon name="external" />
        </a>
      </div>
      <div className="festival-tools">
        <article>
          <Icon name="layout" />
          <h3>Un diseño con tu ritmo</h3>
          <p>
            Plantillas, fotos y un editor para personalizar cada parte de tu
            invitación.
          </p>
        </article>
        <article>
          <Icon name="users" />
          <h3>Tu gente, bien organizada</h3>
          <p>
            Gestiona invitados, acompañantes y cupos cuando habilites tu evento.
          </p>
        </article>
        <article>
          <Icon name="table" />
          <h3>Cada quien en su lugar</h3>
          <p>
            Organiza mesas y consulta quién confirmó para preparar el encuentro.
          </p>
        </article>
      </div>
    </section>
  );
}
