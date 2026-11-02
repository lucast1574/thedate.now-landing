import Link from "next/link";
export default function LegalLinks() {
  return (
    <nav className="legal-links" aria-label="Información legal y ayuda">
      <Link href="/privacidad">Privacidad</Link>
      <Link href="/terminos">Términos</Link>
      <Link href="/eliminar-cuenta">Eliminar cuenta</Link>
      <Link href="/soporte">Ayuda</Link>
    </nav>
  );
}
