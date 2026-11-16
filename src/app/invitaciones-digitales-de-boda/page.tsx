import { getTranslator } from "@/lib/i18n/server";
import InvitationGuide, { guideMetadata } from "@/features/marketing/guide";
export async function generateMetadata() {
  const i18n = await getTranslator();
  return guideMetadata(true, i18n);
}
export default function GuidePage() {
  return <InvitationGuide wedding={true} />;
}
