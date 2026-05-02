"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useT, useLocale } from "@/i18n/DictionaryProvider";
import { isLocale, locales, type Locale } from "@/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";

function setLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${oneYear}; samesite=lax`;
}

function swapLocaleInPathname(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }
  return `/${segments.join("/")}`;
}

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const dict = useT();
  const currentLocale = useLocale();

  return (
    <div
      role="group"
      aria-label={dict.languageSwitcher.label}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[#E5E5E5] bg-white p-1",
        className,
      )}
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        const label =
          locale === "ar"
            ? dict.languageSwitcher.arabic
            : dict.languageSwitcher.english;
        const short =
          locale === "ar"
            ? dict.languageSwitcher.ar
            : dict.languageSwitcher.en;
        return (
          <button
            key={locale}
            type="button"
            aria-pressed={isActive}
            aria-label={label}
            onClick={() => {
              if (isActive) return;
              setLocaleCookie(locale);
              const nextPath = swapLocaleInPathname(pathname ?? "/", locale);
              router.push(nextPath, { scroll: false });
              router.refresh();
            }}
            className={cn(
              "px-2.5 py-1 rounded-full text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
              isActive
                ? "bg-primary text-white"
                : "text-navlink-text hover:bg-gray-100",
            )}
          >
            {short}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
