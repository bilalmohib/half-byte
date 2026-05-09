import type React from "react";
import { isLocale } from "@/i18n/config";
import {
  getLocaleFromPathname,
  stripLocaleFromPathname,
  withLocale,
} from "@/i18n/path";

const TECH_SECTION_ID = "technologies";

export { getLocaleFromPathname, withLocale };

function isHomePathname(pathname: string | null): boolean {
  if (!pathname) return false;
  const stripped = stripLocaleFromPathname(pathname).replace(/\/$/, "") || "/";
  return stripped === "/";
}

/**
 * When already on the path in `href`, scroll to the element for the hash
 * instead of running a full navigation. Use on Link onClick.
 */
export function tryScrollToHashFromHref(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string | null,
): boolean {
  const hashIdx = href.indexOf("#");
  if (hashIdx === -1 || !pathname) return false;
  const pathPart = href.slice(0, hashIdx);
  const id = href.slice(hashIdx + 1);
  if (!id) return false;

  const targetSegments = pathPart.split("/").filter(Boolean);
  const firstSeg = targetSegments[0] ?? "";
  const targetIsHome =
    pathPart === "" ||
    pathPart === "/" ||
    (isLocale(firstSeg) && targetSegments.length === 1);
  const onSamePath = targetIsHome
    ? isHomePathname(pathname)
    : pathname.replace(/\/$/, "") === pathPart.replace(/\/$/, "");
  if (!onSamePath) return false;

  const el = document.getElementById(id);
  if (!el) return false;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

/** Scroll to a section on the home page and update the URL hash (no full navigation). */
export function scrollToHomeSectionById(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

type NextRouterLike = {
  push: (href: string, options?: { scroll?: boolean }) => void;
};

/** From nav/hero buttons: scroll on home, otherwise client-navigate to home + hash. */
export function goToHomeSection(
  id: string,
  pathname: string | null,
  router: NextRouterLike,
): void {
  if (isHomePathname(pathname)) {
    scrollToHomeSectionById(id);
    return;
  }
  const locale = getLocaleFromPathname(pathname);
  router.push(`${withLocale("/", locale)}#${id}`, { scroll: false });
}

/** Locale-aware home href. */
export function homeHref(pathname: string | null): string {
  return withLocale("/", getLocaleFromPathname(pathname));
}

/** Home URL that opens the technologies block on a specific tab (locale-aware). */
export function technologiesHomeHref(
  slug: string,
  pathname: string | null = null,
): string {
  const q = new URLSearchParams();
  q.set("tech", slug);
  return `${homeHref(pathname)}?${q.toString()}#${TECH_SECTION_ID}`;
}
