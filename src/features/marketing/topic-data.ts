import { weddingTopics } from "./wedding-topics";
import { generalTopics } from "./general-topics";
import {
  type Translator,
  localized,
  spanishTranslator,
} from "@/lib/i18n/translator";
export const contentUpdated = "2026-10-31";
export const topics = localized(
  (i18n: Translator) =>
    [...weddingTopics(i18n), ...generalTopics(i18n)] as const,
);
export function productTopics(
  wedding: boolean,
  i18n: Translator = spanishTranslator,
) {
  return topics(i18n).filter(
    (t) => t.kind === (wedding ? "wedding" : "general"),
  );
}
