"use client";

import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/common/Navbar/Logo";
import Container from "@/components/common/Container";
import NavItems from "@/components/common/Navbar/NavItems";
import { ContactUsButton } from "@/components/common/Navbar/NavItems/ContactUsButton";
import MobileNavItems from "@/components/common/Navbar/NavItems/MobileNavItems";

interface NavbarProps {
  className?: string;
  isNavTransparent?: boolean;
  isNavLight?: boolean;
}

function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className={cn("w-full transition-all duration-200", className)}>
        <Container>
          {/* White pill container */}
          <div className="bg-white rounded-[50px] shadow-sm relative flex w-full items-center justify-between py-3 px-6">
            <div className="relative z-10 shrink-0">
              <Logo onClick={() => setIsMobileMenuOpen(false)} />
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-center md:flex">
              <div className="pointer-events-auto">
                <NavItems />
              </div>
            </div>

            <div className="relative z-10 hidden shrink-0 md:block">
              <ContactUsButton />
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none transition-all duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile/Tablet menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "max-h-[calc(100vh-80px)] opacity-100"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 80px)" }}>
            <Container>
              <div
                className={cn(
                  "bg-white rounded-2xl mt-2 pb-6 pt-4 px-4 shadow-md transform transition-all duration-300 ease-out",
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
              >
                <MobileNavItems
                  onLinkClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </Container>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
