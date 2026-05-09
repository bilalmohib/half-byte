"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

function activateExternalHref(
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
  onClick?: ComponentPropsWithoutRef<"a">["onClick"],
): void {
  onClick?.(e);
  if (e.defaultPrevented) return;
  e.preventDefault();
  window.location.assign(href);
}

type MailtoLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  email: string;
};

/** Opens the default mail client; RTL-safe hit target + explicit navigation for stubborn environments. */
export function MailtoLink({
  email,
  className,
  children,
  onClick,
  ...rest
}: MailtoLinkProps) {
  const trimmed = email.trim();
  const href = `mailto:${trimmed}`;
  return (
    <a
      {...rest}
      href={href}
      dir="ltr"
      className={cn("inline-block max-w-full", className)}
      onClick={(e) => activateExternalHref(e, href, onClick)}
    >
      {children ?? trimmed}
    </a>
  );
}

type TelLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};

export function TelLink({
  href,
  className,
  children,
  onClick,
  ...rest
}: TelLinkProps) {
  return (
    <a
      {...rest}
      href={href}
      dir="ltr"
      className={cn("inline-block max-w-full", className)}
      onClick={(e) => activateExternalHref(e, href, onClick)}
    >
      {children}
    </a>
  );
}
