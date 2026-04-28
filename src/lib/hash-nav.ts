import type React from "react";

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
  const path = pathPart === "" ? "/" : pathPart;
  const id = href.slice(hashIdx + 1);
  if (!id) return false;
  if (pathname !== path) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
  return true;
}

/** Scroll to a section on the home page and update the URL hash (no full navigation). */
export function scrollToHomeSectionById(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `/#${id}`);
  return true;
}

type NextRouterLike = {
  push: (href: string, options?: { scroll?: boolean }) => void;
};

/** From nav/hero buttons: scroll on home, otherwise client-navigate to `/#id`. */
export function goToHomeSection(
  id: string,
  pathname: string | null,
  router: NextRouterLike,
): void {
  if (pathname === "/") {
    scrollToHomeSectionById(id);
  } else {
    router.push(`/#${id}`, { scroll: false });
  }
}

const TECH_SECTION_ID = "technologies";

/** Home URL that opens the technologies block on a specific tab. */
export function technologiesHomeHref(slug: string): string {
  const q = new URLSearchParams();
  q.set("tech", slug);
  return `/?${q.toString()}#${TECH_SECTION_ID}`;
}
