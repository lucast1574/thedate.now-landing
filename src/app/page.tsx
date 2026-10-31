import { publicOrigin } from "@/features/marketing/public-origin";
import { headers } from "next/headers";
import { landingMetadata } from "@/features/marketing/metadata";
import GeneralLanding from "@/features/marketing/general/landing";
import WeddingLanding from "@/features/marketing/wedding/landing";
async function weddingHost() {
  const host = ((await headers()).get("host") ?? "")
    .toLowerCase()
    .replace(/:\d+$/, "")
    .replace(/\.$/, "");
  return host === "save.thedate.now";
}
export async function generateMetadata() {
  return {
    ...landingMetadata(await weddingHost()),
    robots: {
      index: !!(await publicOrigin()),
      follow: !!(await publicOrigin()),
    },
  };
}
export default async function Home() {
  return (await weddingHost()) ? <WeddingLanding /> : <GeneralLanding />;
}
