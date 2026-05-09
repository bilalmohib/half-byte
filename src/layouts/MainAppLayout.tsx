"use client";

import React, { Suspense } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AUTH_ROUTES } from "@/lib/constants";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { NavbarProvider } from "@/contexts/NavbarContext";
import ScrollRestoration from "@/components/common/ScrollRestoration";
import HashScrollIntoView from "@/components/common/HashScrollIntoView";
import { isLocale } from "@/i18n/config";

import "swiper/css";
import "swiper/css/effect-fade";

function stripLocale(pathname: string | null): string {
  if (!pathname) return "/";
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if (isLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname;
}

const MainAppLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const rawPathname = usePathname();
  const pathname = stripLocale(rawPathname);

  const isTopPaddingAppliedToNav =
    pathname === "/" ||
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/products/satori-pediatric-care" ||
    pathname === "/products/atlas-capital-market";

  const navTransparentRoutes = [
    "/",
    "/signup/start",
    "/signup/success",
    "/about",
    "/keynote",
    "/contact",
    "/products/satori-pediatric-care",
    "/products/atlas-capital-market",
  ];
  const isNavTransparent = navTransparentRoutes.includes(pathname);

  const navLightRoutes = [
    "/blog",
    "/privacy",
    "/terms",
    "/sms",
    "/sms-optin-proof",
    "/support",
  ];

  const isNavLight =
    navLightRoutes.includes(pathname) || pathname.startsWith("/blog/");

  const noLayoutRoutes = ["/landing-transitions1"];

  const normalizedPathname = pathname.replace(/\/$/, "") || "/";

  const shouldSkipLayout =
    AUTH_ROUTES.includes(normalizedPathname) ||
    noLayoutRoutes.includes(normalizedPathname) ||
    noLayoutRoutes.some((route) => normalizedPathname.startsWith(`${route}/`));

  if (shouldSkipLayout) {
    return <>{children}</>;
  }

  return (
    <div>
      <ScrollRestoration />
      <Suspense fallback={null}>
        <HashScrollIntoView />
      </Suspense>
      <div
        className={cn("w-full z-50", {
          "absolute left-0 right-0": isNavTransparent,
          "pt-5": isTopPaddingAppliedToNav,
        })}
      >
        <Navbar isNavTransparent={isNavTransparent} isNavLight={isNavLight} />
      </div>

      <div
        className="relative z-10"
        style={{
          overflowX: "clip",
        }}
      >
        <div>{children}</div>
      </div>

      <Footer />
    </div>
  );
};

const MainAppLayout = ({ children }: { children: React.ReactNode }) => (
  <NavbarProvider>
    <MainAppLayoutContent>{children}</MainAppLayoutContent>
  </NavbarProvider>
);

export default MainAppLayout;
