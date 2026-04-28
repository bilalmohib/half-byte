"use client";

import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/** After navigation to a URL with a hash, scroll that element into view. */
export default function HashScrollIntoView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams.toString();

  useLayoutEffect(() => {
    const hash =
      typeof window !== "undefined" ? window.location.hash : "";
    if (!hash || hash.length < 2) return;
    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname, searchKey]);

  return null;
}
