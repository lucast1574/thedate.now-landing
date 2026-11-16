import { useTranslator } from "@/lib/i18n/react";
import es from "./workspace-preview-data.json";
import en from "./workspace-preview-en.json";
import pt from "./workspace-preview-pt.json";

const previews = { es, en, pt };
export function useWorkspacePreview() {
  return previews[useTranslator().locale];
}
