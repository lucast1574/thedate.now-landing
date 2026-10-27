import { headers } from "next/headers";
export async function publicOrigin() {
  const host = ((await headers()).get("host") ?? "")
    .toLowerCase()
    .replace(/:\d+$/, "")
    .replace(/\.$/, "");
  return ["thedate.now", "save.thedate.now"].includes(host)
    ? `https://${host}`
    : null;
}
