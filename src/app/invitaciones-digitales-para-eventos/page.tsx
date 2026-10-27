import InvitationGuide, { guideMetadata } from "@/features/marketing/guide";
export const generateMetadata = () => guideMetadata(false);
export default function GuidePage() {
  return <InvitationGuide wedding={false} />;
}
