import {
  type Translator,
  localized,
  spanishTranslator,
} from "@/lib/i18n/translator";
import { getTranslator } from "@/lib/i18n/server";
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
const titles = localized((i18n: Translator): Record<LegalKind, string> => ({
  privacidad: i18n("Política de privacidad"),
  terminos: i18n("Términos de uso"),
  "eliminar-cuenta": i18n("Eliminar tu cuenta y tus datos"),
  soporte: i18n("Ayuda y soporte"),
}));
const contact = "lucasraulsantillanarevalo@gmail.com";
export async function legalMetadata(
  kind: LegalKind,
  i18n: Translator = spanishTranslator,
): Promise<Metadata> {
  const origin = await publicOrigin();
  return {
    title: i18n("{v0} | {v1}", {
      v0: titles(i18n)[kind],
      v1: origin?.includes("save.") ? "Save the Date" : "The Date",
    }),
    robots: { index: false, follow: true },
    alternates: origin ? { canonical: `${origin}/${kind}` } : undefined,
  };
}
export default async function LegalPage({ kind }: { kind: LegalKind }) {
  const i18n = await getTranslator();

  const origin = await publicOrigin();
  if (!origin) notFound();
  const wedding = origin.includes("save."),
    name = wedding ? "Save the Date" : "The Date",
    studio = wedding
      ? "https://studio.save.thedate.now"
      : "https://crea.thedate.now";
  const email = `mailto:${contact}?subject=${encodeURIComponent(`${name}: ${kind === "eliminar-cuenta" ? i18n("solicitud de eliminación de cuenta") : "consulta"}`)}`;
  return (
    <main
      className={`legal-page ${wedding ? "legal-wedding" : "legal-general"}`}
    >
      <header>
        <Link href="/" aria-label={`${name}, inicio`}>
          <Brand wedding={wedding} />
        </Link>
        <Link href="/">{i18n("Volver al inicio")}</Link>
      </header>
      <article>
        <p className="legal-updated">
          {i18n("Actualizado el 1 de noviembre de 2026")}
        </p>
        <h1>{titles(i18n)[kind]}</h1>
        {kind === "privacidad" && <PrivacyContent name={name} email={email} />}
        {kind === "terminos" && <TermsContent name={name} email={email} />}
        {kind === "eliminar-cuenta" && (
          <DeletionContent name={name} email={email} studio={studio} />
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
