import { isLocale, defaultLocale, type Locale } from "@/i18n/config";

/** Extract the locale prefix from a pathname, falling back to default. */
export function getLocaleFromPathname(pathname: string | null): Locale {
  if (!pathname) return defaultLocale;
  const first = pathname.split("/")[1] ?? "";
  return isLocale(first) ? first : defaultLocale;
}

/** Strip the locale prefix from a pathname (e.g. `/en/foo` -> `/foo`). */
export function stripLocaleFromPathname(pathname: string | null): string {
  if (!pathname) return "/";
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if (isLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname;
}

/** Build a path with the given locale prefix. */
export function withLocale(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}
