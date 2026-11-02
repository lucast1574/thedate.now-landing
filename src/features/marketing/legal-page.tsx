import SupportContent from "./legal-soporte";
import DeletionContent from "./legal-eliminar-cuenta";
import TermsContent from "./legal-terminos";
import PrivacyContent from "./legal-privacidad";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Brand from "@/components/brand";
import { publicOrigin } from "./public-origin";
import LegalLinks from "./legal-links";
export type LegalKind =
  "privacidad" | "terminos" | "eliminar-cuenta" | "soporte";
const titles: Record<LegalKind, string> = {
  privacidad: "Política de privacidad",
  terminos: "Términos de uso",
  "eliminar-cuenta": "Eliminar tu cuenta y tus datos",
  soporte: "Ayuda y soporte",
};
const contact = "lucasraulsantillanarevalo@gmail.com";
export async function legalMetadata(kind: LegalKind): Promise<Metadata> {
  const origin = await publicOrigin();
  return {
    title: `${titles[kind]} | ${origin?.includes("save.") ? "Save the Date" : "The Date"}`,
    robots: { index: false, follow: true },
    alternates: origin ? { canonical: `${origin}/${kind}` } : undefined,
  };
}
export default async function LegalPage({ kind }: { kind: LegalKind }) {
  const origin = await publicOrigin();
  if (!origin) notFound();
  const wedding = origin.includes("save."),
    name = wedding ? "Save the Date" : "The Date",
    studio = wedding
      ? "https://studio.save.thedate.now"
      : "https://crea.thedate.now";
  const email = `mailto:${contact}?subject=${encodeURIComponent(`${name}: ${kind === "eliminar-cuenta" ? "solicitud de eliminación de cuenta" : "consulta"}`)}`;
  return (
    <main
      className={`legal-page ${wedding ? "legal-wedding" : "legal-general"}`}
    >
      <header>
        <Link href="/" aria-label={`${name}, inicio`}>
          <Brand wedding={wedding} />
        </Link>
        <Link href="/">Volver al inicio</Link>
      </header>
      <article>
        <p className="legal-updated">Actualizado el 1 de noviembre de 2026</p>
        <h1>{titles[kind]}</h1>
        {kind === "privacidad" && <PrivacyContent name={name} email={email} />}
        {kind === "terminos" && <TermsContent name={name} email={email} />}
        {kind === "eliminar-cuenta" && (
          <DeletionContent name={name} email={email} />
        )}
        {kind === "soporte" && (
          <SupportContent name={name} email={email} studio={studio} />
        )}
      </article>
      <footer>
        <LegalLinks />
      </footer>
    </main>
  );
}
