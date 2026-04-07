"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactUsButtonProps = {
  onNavigate?: () => void;
};

export function ContactUsButton({ onNavigate }: ContactUsButtonProps) {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant="default"
      onClick={() => {
        onNavigate?.();
        router.push("/contact");
      }}
      className={cn(
        "bg-primary! hover:bg-buttonHover!",
        "font-roboto! text-[20px]! font-normal! leading-[124%]! tracking-normal! text-white!",
        "box-border h-[46px]! w-[146px]! shrink-0 rounded-[32px]! p-[10px]!",
        "shadow-none!",
      )}
    >
      Contact Us
    </Button>
  );
}
