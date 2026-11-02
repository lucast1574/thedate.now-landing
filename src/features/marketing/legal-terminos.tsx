import Link from "next/link";
const contact = "lucasraulsantillanarevalo@gmail.com";
export default function TermsContent({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <>
      <p>
        {name} permite preparar invitaciones digitales en la web y consultar
        confirmaciones y regalos en las apps móviles. El responsable es Lucas
        Santillán. Contacto: <a href={email}>{contact}</a>.
      </p>
      <h2>Tu cuenta</h2>
      <p>
        Usa información correcta, protege tus credenciales y accede solo a
        eventos propios o para los que tengas permiso. Cada persona puede
        utilizar su propia cuenta. El acceso como miembro o pareja no transfiere
        la propiedad del evento.
      </p>
      <h2>Contenido y uso permitido</h2>
      <p>
        Conservas los derechos sobre tu contenido y autorizas su tratamiento y
        publicación para prestar las funciones que solicitas. Debes tener los
        permisos necesarios sobre fotos, textos y datos de invitados. No
        publiques contenido ilegal, engañoso o que infrinja derechos de
        terceros. No intentes acceder a cuentas ajenas ni interferir en el
        servicio.
      </p>
      <h2>Compras y regalos</h2>
      <p>
        La creación, personalización y contratación de invitaciones se gestionan
        en la web. Antes de pagar se muestran el precio y las condiciones de la
        operación. Las consultas sobre pagos, incidencias o cancelaciones se
        atienden mediante soporte, respetando los derechos que reconozca la
        legislación aplicable. Reservar un regalo registra la elección de un
        invitado; no acredita por sí solo su compra, pago o entrega.
      </p>
      <h2>Uso del servicio</h2>
      <p>
        Revisa fechas, enlaces, destinatarios y contenido antes de enviar
        invitaciones. La disponibilidad de servicios externos depende de sus
        proveedores y de tu conexión. Las confirmaciones pueden cambiar cuando
        los invitados responden. Estas condiciones no limitan los derechos
        irrenunciables que reconozca la ley.
      </p>
      <h2>Privacidad y contacto</h2>
      <p>
        Consulta la <Link href="/privacidad">política de privacidad</Link> y el
        procedimiento para{" "}
        <Link href="/eliminar-cuenta">eliminar tu cuenta</Link>. Para dudas o
        reclamaciones escribe a <a href={email}>{contact}</a>. Las
        actualizaciones de estas condiciones se publican aquí con su fecha.
      </p>
    </>
  );
}
