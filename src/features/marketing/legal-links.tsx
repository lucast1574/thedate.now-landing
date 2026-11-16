import { useTranslator } from "@/lib/i18n/react";
import Link from "next/link";
export default function LegalLinks() {
  const i18n = useTranslator();

  return (
    <nav className="legal-links" aria-label={i18n("Información legal y ayuda")}>
      <Link href="/privacidad">{i18n("Privacidad")}</Link>
      <Link href="/terminos">{i18n("Términos")}</Link>
      <Link href="/eliminar-cuenta">{i18n("Eliminar cuenta")}</Link>
      <Link href="/soporte">{i18n("Ayuda")}</Link>
    </nav>
  );
}
