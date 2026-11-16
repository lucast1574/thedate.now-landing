import { useTranslator } from "@/lib/i18n/react";
import Link from "next/link";
const contact = "lucasraulsantillanarevalo@gmail.com";
export default function DeletionContent({
  name,
  email,
  studio,
}: {
  name: string;
  email: string;
  studio: string;
}) {
  const i18n = useTranslator();

  return (
    <>
      <p>
        {i18n("Puedes solicitar la eliminación de tu cuenta de")} {name}{" "}
        {i18n(
          "y de los datos personales asociados aunque ya no tengas instalada la app.",
        )}
      </p>
      <h2>{i18n("Cómo solicitarla")}</h2>
      <p>
        {i18n(
          "Abre el panel web, inicia sesión con la cuenta que quieres eliminar y pulsa «Eliminar mi cuenta». Un modal explica los datos afectados; al confirmar, el borrado comienza automáticamente. No necesitas instalar la aplicación ni esperar una aprobación manual.",
        )}
      </p>
      <a className="legal-action" href={`${studio}/delete-account`}>
        {i18n("Eliminar mi cuenta de")} {name}
      </a>
      <p>
        {i18n(
          "También encontrarás esta opción en «Mi perfil» dentro del panel. Si tienes cuentas en ambas marcas, elimina cada una desde su propio panel. Tu cuenta de Google no se elimina.",
        )}
      </p>
      <h2>{i18n("Datos y eventos afectados")}</h2>
      <p>
        {i18n(
          "Se eliminan tu perfil y foto, tus eventos propios, sus invitados, respuestas, fotos y audios, los registros de notificaciones y tus solicitudes de soporte. Tus invitaciones publicadas dejan de estar disponibles. Se retira tu acceso a eventos compartidos; los eventos de otros propietarios se conservan. El borrado es permanente.",
        )}
      </p>
      <h2>{i18n("Verificación y conservación")}</h2>
      <p>
        {i18n(
          "Confirmamos tu identidad mediante el inicio de sesión. La cuenta deja de tener acceso al confirmar y el borrado se ejecuta de inmediato. Si un servicio no responde, el proceso continúa automáticamente hasta completarse. Los registros que deban conservar los proveedores de pago siguen sus obligaciones y políticas; eliminar la cuenta no solicita un reembolso. Las copias de seguridad se retiran conforme a su ciclo de rotación.",
        )}
      </p>
      <p>
        {i18n("Más información en")}{" "}
        <Link href="/privacidad">{i18n("privacidad")}</Link>
        {i18n(
          ". Si no puedes acceder a tu cuenta, solicita ayuda o el borrado desde el correo asociado a tu cuenta escribiendo a",
        )}{" "}
        <a href={email}>{contact}</a>.
      </p>
    </>
  );
}
