import TopicPage, { topicMetadata } from "@/features/marketing/topic-page";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  return topicMetadata((await params).slug);
}
export default async function Page({ params }: Props) {
  return <TopicPage slug={(await params).slug} />;
}
