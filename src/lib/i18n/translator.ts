import en from "./messages/en.json";
import pt from "./messages/pt.json";
import type { Locale } from "./locale";

type Values = Record<string, unknown>;
export type Translator = ((source: string, values?: Values) => string) & {
  locale: Locale;
};
const catalogs: Record<string, Record<string, string>> = { en, pt };

export function createTranslator(locale: Locale): Translator {
  return Object.assign(
    (source: string, values: Values = {}) => {
      const dictionary = catalogs[locale];
      const translated =
        dictionary && Object.hasOwn(dictionary, source)
          ? dictionary[source]
          : undefined;
      const message =
        translated === undefined
          ? source
          : `${source.match(/^\s*/)?.[0] || ""}${translated.trim()}${source.match(/\s*$/)?.[0] || ""}`;
      return message.replace(/\{(v\d+)\}/g, (token, key: string) =>
        Object.hasOwn(values, key) ? String(values[key] ?? "") : token,
      );
    },
    { locale },
  );
}

export const spanishTranslator = createTranslator("es");

export function bindTranslator<A extends unknown[], R>(
  fn: (...args: [...A, Translator?]) => R,
  t: Translator,
  arity: number,
): (...args: A) => R {
  return (...args: A) => {
    const parameters: unknown[] = [...args].slice(0, arity);
    while (parameters.length < arity) parameters.push(undefined);
    return fn(...([...parameters, t] as [...A, Translator]));
  };
}

// Static UI catalogs are cached per language, retaining stable identities in hooks.
export function localized<T>(factory: (t: Translator) => T) {
  const cache = new Map<Locale, T>();
  return (t: Translator = spanishTranslator): T => {
    if (!cache.has(t.locale)) cache.set(t.locale, factory(t));
    return cache.get(t.locale)!;
  };
}
