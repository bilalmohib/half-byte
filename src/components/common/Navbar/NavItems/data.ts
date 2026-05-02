import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/path";
import { technologiesBodySectionData } from "@/components/page-components/Home/TechnologiesSection/TechnologiesBodySection/data";
import { technologiesHomeHref } from "@/lib/hash-nav";

export interface NavMenuItem {
  key: "aboutUs" | "technologies" | "newsCareers";
  title: string;
  href: string;
  hasDropdown: boolean;
}

export function getMenuItems(
  dict: Dictionary,
  locale: Locale,
): NavMenuItem[] {
  return [
    {
      key: "aboutUs",
      title: dict.navbar.aboutUs,
      href: `${withLocale("/", locale)}#about-us`,
      hasDropdown: false,
    },
    {
      key: "technologies",
      title: dict.navbar.technologies,
      href: `${withLocale("/", locale)}#technologies`,
      hasDropdown: true,
    },
    {
      key: "newsCareers",
      title: dict.navbar.newsCareers,
      href: `${withLocale("/", locale)}#news-careers`,
      hasDropdown: false,
    },
  ];
}

export interface NavTechnologyItem {
  title: string;
  slug: string;
  href: string;
}

export function getTechnologyItems(
  dict: Dictionary,
  pathname: string | null,
): NavTechnologyItem[] {
  return technologiesBodySectionData.map((t) => ({
    title:
      dict.technologies.items[
        t.dictKey as keyof typeof dict.technologies.items
      ]?.title ?? t.slug,
    slug: t.slug,
    href: technologiesHomeHref(t.slug, pathname),
  }));
}
