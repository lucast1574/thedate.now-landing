export const locales = ["es", "en", "pt"] as const;
export type Locale = (typeof locales)[number];

export function resolveLocale(
  preferences: string | readonly string[] | null | undefined,
): Locale {
  const entries =
    typeof preferences === "string"
      ? preferences.split(",")
      : (preferences ?? []);
  const ranked = entries
    .map((entry, index) => {
      const [tag, ...params] = entry.trim().split(";");
      const quality = params.find((part) => part.trim().startsWith("q="));
      const q = quality ? Number(quality.trim().slice(2)) : 1;
      return {
        language: tag.toLowerCase().replaceAll("_", "-").split("-")[0],
        q,
        index,
      };
    })
    .filter(({ q }) => Number.isFinite(q) && q > 0 && q <= 1)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  return (
    (ranked.find(({ language }) => locales.includes(language as Locale))
      ?.language as Locale) ?? "es"
  );
}

export function formatLocale(locale: Locale) {
  return locale === "pt" ? "pt-BR" : locale;
}
