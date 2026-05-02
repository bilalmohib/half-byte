"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { homeHref } from "@/lib/hash-nav";

interface LogoProps {
  onClick?: () => void;
  isNavLight?: boolean;
}

const Logo = ({ onClick }: LogoProps = {}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      type="button"
      className="inline-flex shrink-0 cursor-pointer select-none border-0 bg-transparent p-0"
      onClick={() => {
        router.push(homeHref(pathname));
        onClick?.();
      }}
    >
      <Image
        src="/assets/(common)/half_byte_logo.jpeg"
        alt="Half Byte — Amplifying digital intelligence"
        width={147}
        height={49}
        className="object-contain object-left w-[70px] sssm:w-[100px] h-auto sssmd:w-[147px] sssmd:h-[49px]"
        priority
      />
    </button>
  );
};

export default Logo;
