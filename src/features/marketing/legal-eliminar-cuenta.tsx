import Link from "next/link";
const contact = "lucasraulsantillanarevalo@gmail.com";
export default function DeletionContent({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <>
      <p>
        Puedes solicitar la eliminación de tu cuenta de {name} y de los datos
        personales asociados aunque ya no tengas instalada la app.
      </p>
      <h2>Cómo solicitarla</h2>
      <p>
        En la app, entra en Cuenta y selecciona «Solicitar eliminación de
        cuenta». También puedes enviar la solicitud desde el correo asociado a
        tu cuenta usando este enlace:
      </p>
      <a className="legal-action" href={email}>
        Solicitar eliminación por correo
      </a>
      <p>
        Indica que quieres eliminar tu cuenta de {name}. No envíes contraseñas,
        códigos ni documentos de identidad en el primer mensaje. Si tienes
        cuentas en ambas marcas, indica cuáles quieres eliminar.
      </p>
      <h2>Datos y eventos afectados</h2>
      <p>
        La solicitud comprende tu perfil, foto y datos personales asociados a la
        cuenta. Revisaremos también los eventos propios y el acceso a eventos
        compartidos. Si eliminar un evento afecta a otras personas autorizadas,
        te informaremos antes de completar ese paso. Los eventos de otra persona
        no se eliminan al cerrar tu acceso como miembro o pareja.
      </p>
      <h2>Verificación y conservación</h2>
      <p>
        Podemos confirmar tu identidad mediante el correo de la cuenta. Te
        comunicaremos la tramitación y los datos que deban conservarse por
        obligaciones legales, pagos, seguridad o disputas. La solicitud no
        elimina la cuenta de inmediato ni elimina tu cuenta de Google. Las
        copias de seguridad se retiran conforme a su ciclo de rotación. También
        puedes solicitar que eliminemos datos concretos sin cerrar la cuenta.
      </p>
      <p>
        Más información en <Link href="/privacidad">privacidad</Link>. Si el
        enlace no abre tu correo, escribe directamente a{" "}
        <a href={email}>{contact}</a>.
      </p>
    </>
  );
}
