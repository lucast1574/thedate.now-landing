import InvitationGuide, { guideMetadata } from "@/features/marketing/guide";
export const generateMetadata = () => guideMetadata(true);
export default function GuidePage() {
  return <InvitationGuide wedding={true} />;
}
