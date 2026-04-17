"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AUTH_ROUTES } from "@/lib/constants";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { NavbarProvider } from "@/contexts/NavbarContext";
import ScrollRestoration from "@/components/common/ScrollRestoration";

import "swiper/css";
import "swiper/css/effect-fade";

const MainAppLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

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

      {/* <Footer /> */}
    </div>
  );
};

const MainAppLayout = ({ children }: { children: React.ReactNode }) => (
  <NavbarProvider>
    <MainAppLayoutContent>{children}</MainAppLayoutContent>
  </NavbarProvider>
);

export default MainAppLayout;
