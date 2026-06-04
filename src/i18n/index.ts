import { en } from "./dictionaries/en";
import fa from "./dictionaries/fa";
import de from "./dictionaries/de";
import type { Dictionary } from "./types";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, fa, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary } from "./types";
export { locales, defaultLocale, localeMeta, isLocale } from "./config";
export type { Locale } from "./config";
