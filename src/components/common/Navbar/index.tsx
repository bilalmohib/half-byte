"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/common/Navbar/Logo";
import Container from "@/components/common/Container";
import NavItems from "@/components/common/Navbar/NavItems";
import LanguageSwitcher from "@/components/common/Navbar/LanguageSwitcher";
import { ContactUsButton } from "@/components/common/Navbar/NavItems/ContactUsButton";
import MobileNavOverlay from "@/components/common/Navbar/MobileNavOverlay";
import { useT } from "@/i18n/DictionaryProvider";

interface NavbarProps {
  className?: string;
  isNavTransparent?: boolean;
  isNavLight?: boolean;
}

function Navbar({ className }: NavbarProps) {
  const dict = useT();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className={cn("w-full transition-all duration-200", className)}>
        <Container>
          <div className="bg-white rounded-[50px] shadow-sm relative flex w-full items-center justify-between py-3 px-6">
            <div className="relative z-10 shrink-0">
              <Logo onClick={() => setIsMobileMenuOpen(false)} />
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-center md:flex">
              <div className="pointer-events-auto">
                <NavItems />
              </div>
            </div>

            <div className="relative z-10 hidden shrink-0 md:flex md:items-center md:gap-3">
              <LanguageSwitcher />
              <ContactUsButton />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-overlay"
                className="flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none transition-all duration-200"
              >
                <span className="sr-only">{dict.navbar.openMenu}</span>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <MobileNavOverlay
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;
