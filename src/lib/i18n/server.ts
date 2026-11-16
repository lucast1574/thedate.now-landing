import "server-only";
import { getLocale } from "next-intl/server";
import { createTranslator } from "./translator";
import { resolveLocale } from "./locale";

export async function getTranslator() {
  return createTranslator(resolveLocale(await getLocale()));
}
