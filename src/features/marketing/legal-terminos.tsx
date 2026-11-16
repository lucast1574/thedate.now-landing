import { useTranslator } from "@/lib/i18n/react";
import Link from "next/link";
const contact = "lucasraulsantillanarevalo@gmail.com";
export default function TermsContent({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const i18n = useTranslator();

  return (
    <>
      <p>
        {name}{" "}
        {i18n(
          "permite preparar invitaciones digitales en la web y consultar confirmaciones y regalos en las apps móviles. El responsable es Lucas Santillán. Contacto:",
        )}{" "}
        <a href={email}>{contact}</a>.
      </p>
      <h2>{i18n("Tu cuenta")}</h2>
      <p>
        {i18n(
          "Usa información correcta, protege tus credenciales y accede solo a eventos propios o para los que tengas permiso. Cada persona puede utilizar su propia cuenta. El acceso como miembro o pareja no transfiere la propiedad del evento.",
        )}
      </p>
      <h2>{i18n("Contenido y uso permitido")}</h2>
      <p>
        {i18n(
          "Conservas los derechos sobre tu contenido y autorizas su tratamiento y publicación para prestar las funciones que solicitas. Debes tener los permisos necesarios sobre fotos, textos y datos de invitados. No publiques contenido ilegal, engañoso o que infrinja derechos de terceros. No intentes acceder a cuentas ajenas ni interferir en el servicio.",
        )}
      </p>
      <h2>{i18n("Compras y regalos")}</h2>
      <p>
        {i18n(
          "La creación, personalización y contratación de invitaciones se gestionan en la web. Antes de pagar se muestran el precio y las condiciones de la operación. Las consultas sobre pagos, incidencias o cancelaciones se atienden mediante soporte, respetando los derechos que reconozca la legislación aplicable. Reservar un regalo registra la elección de un invitado; no acredita por sí solo su compra, pago o entrega.",
        )}
      </p>
      <h2>{i18n("Uso del servicio")}</h2>
      <p>
        {i18n(
          "Revisa fechas, enlaces, destinatarios y contenido antes de enviar invitaciones. La disponibilidad de servicios externos depende de sus proveedores y de tu conexión. Las confirmaciones pueden cambiar cuando los invitados responden. Estas condiciones no limitan los derechos irrenunciables que reconozca la ley.",
        )}
      </p>
      <h2>{i18n("Privacidad y contacto")}</h2>
      <p>
        {i18n("Consulta la")}{" "}
        <Link href="/privacidad">{i18n("política de privacidad")}</Link>{" "}
        {i18n("y el procedimiento para")}{" "}
        <Link href="/eliminar-cuenta">{i18n("eliminar tu cuenta")}</Link>
        {i18n(". Para dudas o reclamaciones escribe a")}{" "}
        <a href={email}>{contact}</a>
        {i18n(
          ". Las actualizaciones de estas condiciones se publican aquí con su fecha.",
        )}
      </p>
    </>
  );
}
