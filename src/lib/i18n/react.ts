import { useLocale } from "next-intl";
import { createTranslator } from "./translator";
import { resolveLocale } from "./locale";

const translators = {
  es: createTranslator("es"),
  en: createTranslator("en"),
  pt: createTranslator("pt"),
};
export function useTranslator() {
  return translators[resolveLocale(useLocale())];
}
