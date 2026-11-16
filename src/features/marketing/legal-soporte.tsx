import { useTranslator } from "@/lib/i18n/react";
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
  const i18n = useTranslator();

  return (
    <>
      <p>
        {i18n("Para recibir ayuda con")} {name}
        {i18n(", escribe a")} <a href={email}>{contact}</a>
        {i18n(
          ". Indica qué ocurrió, si usas Android, iPhone o la web y la versión de la app.",
        )}
      </p>
      <a className="legal-action" href={email}>
        {i18n("Contactar con soporte")}
      </a>
      <h2>{i18n("Acceso a tu celebración")}</h2>
      <p>
        {i18n(
          "Entra con el correo con el que creaste la invitación o al que te dieron acceso como miembro o pareja. Cada marca tiene cuentas independientes. Si tienes varios eventos autorizados, puedes elegir cuál consultas en la parte superior de la app.",
        )}
      </p>
      <h2>{i18n("Crear o editar una invitación")}</h2>
      <p>
        {i18n(
          "La preparación de invitaciones y la gestión de sus envíos se realizan en el",
        )}{" "}
        <a href={studio}>
          {i18n("estudio web de")} {name}
        </a>
        {i18n(
          ". La app permite consultar confirmaciones y regalos, recibir avisos y actualizar tu perfil.",
        )}
      </p>
      <h2>{i18n("Privacidad y datos")}</h2>
      <p>
        {i18n("Consulta")} <Link href="/privacidad">{i18n("privacidad")}</Link>{" "}
        {i18n("o")}{" "}
        <Link href="/eliminar-cuenta">
          {i18n("solicita la eliminación de tu cuenta")}
        </Link>
        {i18n(
          ". No envíes contraseñas ni códigos de acceso para solicitar asistencia.",
        )}
      </p>
    </>
  );
}
