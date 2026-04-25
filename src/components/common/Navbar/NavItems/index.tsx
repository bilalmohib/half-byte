"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  menuItems,
  technologyItems,
} from "@/components/common/Navbar/NavItems/data";
import { useCallback, useEffect, useRef, useState } from "react";

const HOVER_CLOSE_DELAY_MS = 150;

function TechnologiesNavDropdown({ label }: { label: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY_MS);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger
        onPointerEnter={() => {
          cancelClose();
          setOpen(true);
        }}
        onPointerLeave={scheduleClose}
        className={cn(
          "font-roboto text-base mllg:text-lg lg:text-xl font-normal leading-none tracking-normal text-navlink-text",
          "flex items-center gap-1 border-0 bg-transparent p-0 outline-none",
          "cursor-pointer hover:text-primary focus-visible:text-primary data-[state=open]:text-primary",
          "data-[state=open]:[&_svg]:rotate-180",
        )}
      >
        {label}
        <ChevronDown
          className="size-3 shrink-0 text-current transition-transform duration-200"
          strokeWidth={2.5}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={12}
        onPointerEnter={cancelClose}
        onPointerLeave={scheduleClose}
        onCloseAutoFocus={(e) => e.preventDefault()}
        className={cn(
          "flex w-[265px] min-w-[265px] max-w-[265px] flex-col gap-[19px] rounded-[10px] border-0 bg-white p-0",
          "px-[40px] py-[33px] shadow-none ring-0 outline-none overflow-visible overflow-y-visible",
        )}
        style={{ boxShadow: "0px 4px 5.1px 0px #00000040" }}
      >
        {technologyItems.map((techItem) => (
          <DropdownMenuItem
            key={techItem.title}
            className={cn(
              "cursor-pointer rounded-none border-0 bg-transparent px-0 py-0",
              "font-roboto text-sm md:text-base font-medium leading-none tracking-normal text-navlink-dropdown-text",
              "outline-none focus:bg-transparent! focus:text-primary!",
              "data-highlighted:bg-transparent! data-highlighted:text-primary!",
            )}
            onSelect={() => {
              router.push(techItem.href);
            }}
          >
            {techItem.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const NavItems = () => {
  return (
    <div className="flex items-center w-full gap-4.25 mllg:gap-20 lg:gap-[95px]">
      {menuItems.map((item) =>
        item.hasDropdown ? (
          <TechnologiesNavDropdown key={item.title} label={item.title} />
        ) : (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "font-roboto text-base mllg:text-lg lg:text-xl font-normal leading-none tracking-normal text-navlink-text",
              "shrink-0 hover:text-primary transition-colors",
            )}
          >
            {item.title}
          </Link>
        ),
      )}
    </div>
  );
};

export default NavItems;
