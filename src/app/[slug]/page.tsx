import { getTranslator } from "@/lib/i18n/server";
import TopicPage, { topicMetadata } from "@/features/marketing/topic-page";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const i18n = await getTranslator();

  return topicMetadata((await params).slug, i18n);
}
export default async function Page({ params }: Props) {
  return <TopicPage slug={(await params).slug} />;
}
