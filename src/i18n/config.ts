export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const isRtlLocale = (locale: Locale): boolean => locale === "ar";

export const localeDirection = (locale: Locale): "rtl" | "ltr" =>
  isRtlLocale(locale) ? "rtl" : "ltr";
