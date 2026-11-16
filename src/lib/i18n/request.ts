import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { resolveLocale } from "./locale";

export default getRequestConfig(async () => ({
  locale: resolveLocale((await headers()).get("accept-language")),
  messages: {},
}));
