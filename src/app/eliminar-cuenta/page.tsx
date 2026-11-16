import { getTranslator } from "@/lib/i18n/server";
import LegalPage, { legalMetadata } from "@/features/marketing/legal-page";
export async function generateMetadata() {
  const i18n = await getTranslator();

  return legalMetadata("eliminar-cuenta", i18n);
}
export default function Page() {
  return <LegalPage kind="eliminar-cuenta" />;
}
