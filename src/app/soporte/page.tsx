import LegalPage, { legalMetadata } from "@/features/marketing/legal-page";
export async function generateMetadata() {
  return legalMetadata("soporte");
}
export default function Page() {
  return <LegalPage kind="soporte" />;
}
