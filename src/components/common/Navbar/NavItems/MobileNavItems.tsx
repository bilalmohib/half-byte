"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  menuItems,
  technologyItems,
} from "@/components/common/Navbar/NavItems/data";
import { ChevronRight, ChevronDown } from "lucide-react";
import { ContactUsButton } from "@/components/common/Navbar/NavItems/ContactUsButton";
import { tryScrollToHashFromHref } from "@/lib/hash-nav";

interface MobileNavItemsProps {
  onLinkClick: () => void;
}

function MobileNavItems({ onLinkClick }: MobileNavItemsProps) {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleItem = (title: string) => {
    setOpenItem(openItem === title ? null : title);
  };

  return (
    <nav aria-label="Mobile navigation" className="w-full">
      <ul className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const isOpen = openItem === item.title;

          return (
            <li key={item.title} className="list-none">
              {item.hasDropdown ? (
                <div className="flex flex-col">
                  <div className="flex w-full min-h-[52px] items-stretch overflow-hidden rounded-xl border-0 bg-transparent">
                    <Link
                      href={item.href}
                      scroll={item.href.includes("#") ? false : undefined}
                      onClick={(e) => {
                        tryScrollToHashFromHref(e, item.href, pathname);
                        onLinkClick();
                      }}
                      className={cn(
                        "font-roboto text-base mllg:text-lg lg:text-xl font-normal leading-none tracking-normal text-navlink-text",
                        "flex flex-1 items-center px-4 py-3.5 text-left transition-colors hover:bg-gray-50",
                        isActive(item.href) && "text-primary!",
                      )}
                    >
                      {item.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleItem(item.title)}
                      className="flex shrink-0 items-center justify-center border-0 border-l border-gray-100 bg-transparent px-3 transition-colors hover:bg-gray-50"
                      aria-expanded={isOpen}
                      aria-label="Toggle technologies submenu"
                    >
                      <ChevronDown
                        className={cn(
                          "size-3 shrink-0 text-navlink-text transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                        strokeWidth={2.5}
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="flex flex-col gap-[19px] py-2 pl-4">
                      {technologyItems.map((techItem) => (
                        <Link
                          key={techItem.slug}
                          href={techItem.href}
                          scroll={false}
                          onClick={onLinkClick}
                          className={cn(
                            "block font-roboto text-sm md:text-base font-light md:font-medium leading-none tracking-normal transition-colors hover:text-primary",
                            isActive(techItem.href)
                              ? "text-primary!"
                              : "text-navlink-dropdown-text",
                          )}
                        >
                          {techItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  scroll={item.href.includes("#") ? false : undefined}
                  onClick={(e) => {
                    tryScrollToHashFromHref(e, item.href, pathname);
                    onLinkClick();
                  }}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "font-roboto text-base mllg:text-lg lg:text-xl font-normal leading-none tracking-normal text-navlink-text",
                    "flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors hover:bg-gray-50",
                    isActive(item.href) && "text-primary!",
                  )}
                >
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex justify-center px-4">
        <ContactUsButton onNavigate={onLinkClick} />
      </div>
    </nav>
  );
}

export default MobileNavItems;
