/**
 * i18n configuration — single source of truth for locales.
 */

export const locales = ["fa", "en", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const localeMeta: Record<
  Locale,
  { label: string; nativeLabel: string; dir: "ltr" | "rtl"; htmlLang: string }
> = {
  fa: { label: "Persian",   nativeLabel: "فارسی",   dir: "rtl", htmlLang: "fa-IR" },
  en: { label: "English",   nativeLabel: "English", dir: "ltr", htmlLang: "en"    },
  de: { label: "German",    nativeLabel: "Deutsch", dir: "ltr", htmlLang: "de"    },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
