import "server-only";

import type { Locale } from "@/i18n/config";
import type en from "./dictionaries/en.json";

export type Dictionary = typeof en;

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () =>
    import("./dictionaries/en.json").then((m) => m.default as Dictionary),
  ar: () =>
    import("./dictionaries/ar.json").then((m) => m.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  loaders[locale]();
