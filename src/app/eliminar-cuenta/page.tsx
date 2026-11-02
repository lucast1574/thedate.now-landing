import LegalPage, { legalMetadata } from "@/features/marketing/legal-page";
export async function generateMetadata() {
  return legalMetadata("eliminar-cuenta");
}
export default function Page() {
  return <LegalPage kind="eliminar-cuenta" />;
}
