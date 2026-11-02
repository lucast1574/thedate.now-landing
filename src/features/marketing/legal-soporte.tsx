import Link from "next/link";
const contact = "lucasraulsantillanarevalo@gmail.com";
export default function SupportContent({
  name,
  email,
  studio,
}: {
  name: string;
  email: string;
  studio: string;
}) {
  return (
    <>
      <p>
        Para recibir ayuda con {name}, escribe a <a href={email}>{contact}</a>.
        Indica qué ocurrió, si usas Android, iPhone o la web y la versión de la
        app.
      </p>
      <a className="legal-action" href={email}>
        Contactar con soporte
      </a>
      <h2>Acceso a tu celebración</h2>
      <p>
        Entra con el correo con el que creaste la invitación o al que te dieron
        acceso como miembro o pareja. Cada marca tiene cuentas independientes.
        Si tienes varios eventos autorizados, puedes elegir cuál consultas en la
        parte superior de la app.
      </p>
      <h2>Crear o editar una invitación</h2>
      <p>
        La preparación de invitaciones y la gestión de sus envíos se realizan en
        el <a href={studio}>estudio web de {name}</a>. La app permite consultar
        confirmaciones y regalos, recibir avisos y actualizar tu perfil.
      </p>
      <h2>Privacidad y datos</h2>
      <p>
        Consulta <Link href="/privacidad">privacidad</Link> o{" "}
        <Link href="/eliminar-cuenta">
          solicita la eliminación de tu cuenta
        </Link>
        . No envíes contraseñas ni códigos de acceso para solicitar asistencia.
      </p>
    </>
  );
}
