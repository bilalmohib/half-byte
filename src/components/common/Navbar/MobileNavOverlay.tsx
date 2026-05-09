"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { tryScrollToHashFromHref } from "@/lib/hash-nav";
import {
  getMenuItems,
  getTechnologyItems,
} from "@/components/common/Navbar/NavItems/data";
import LanguageSwitcher from "@/components/common/Navbar/LanguageSwitcher";
import { ContactUsButton } from "@/components/common/Navbar/NavItems/ContactUsButton";
import { useT, useLocale } from "@/i18n/DictionaryProvider";

interface MobileNavOverlayProps {
  open: boolean;
  onClose: () => void;
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants = {
  closed: {
    clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
    transition: {
      type: "tween" as const,
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
  open: {
    clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)",
    transition: {
      type: "tween" as const,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const listVariants = {
  closed: {},
  open: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  closed: { y: 24, opacity: 0 },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 32,
    },
  },
};

function MobileNavOverlayInner({ open, onClose }: MobileNavOverlayProps) {
  const pathname = usePathname();
  const dict = useT();
  const locale = useLocale();
  const menuItems = getMenuItems(dict, locale);
  const techItems = getTechnologyItems(dict, pathname);
  const [techOpen, setTechOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setTechOpen(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-nav-backdrop"
          className="fixed inset-0 z-60 md:hidden"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.25 }}
          aria-hidden={!open}
        >
          <motion.div
            key="mobile-nav-panel"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute inset-0 flex flex-col bg-linear-to-br from-[#0E3A20] via-[#0C2E18] to-[#08200F] text-white"
            role="dialog"
            aria-modal="true"
            aria-label={dict.navbar.mobileNavLabel}
          >
            {/* Decorative rings — match desktop CTA aesthetic */}
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              aria-hidden
            >
              <div className="absolute -top-32 -inset-e-24 size-[340px] rounded-full border border-[#ADEBCA22]" />
              <div className="absolute -bottom-40 -inset-s-20 size-[420px] rounded-full border border-[#ADEBCA1A]" />
              <div className="absolute top-1/3 -inset-e-32 size-[260px] rounded-full border border-[#ADEBCA12]" />
            </div>

            {/* Top bar: Logo + close */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-5">
              <button
                type="button"
                aria-label="Half Byte"
                onClick={onClose}
                className="rounded-xl bg-white/95 px-3 py-1.5 shadow-sm"
              >
                <Image
                  src="/assets/(common)/half_byte_logo.jpeg"
                  alt="Half Byte"
                  width={120}
                  height={40}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </button>
              <motion.button
                type="button"
                onClick={onClose}
                aria-label={dict.navbar.openMenu}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.25 }}
                className={cn(
                  "flex size-11 items-center justify-center rounded-full",
                  "bg-white/10 text-white hover:bg-white/15 active:bg-white/20",
                  "transition-colors backdrop-blur-sm border border-white/15",
                )}
              >
                <X className="size-5" strokeWidth={2.25} />
              </motion.button>
            </div>

            {/* Nav links */}
            <motion.nav
              variants={listVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-10 flex flex-1 flex-col gap-1 overflow-y-auto px-6 pt-10 pb-8"
              aria-label={dict.navbar.mobileNavLabel}
            >
              {menuItems.map((item) => (
                <motion.div key={item.key} variants={itemVariants}>
                  {item.hasDropdown ? (
                    <div className="flex flex-col">
                      <div className="flex items-stretch overflow-hidden rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm">
                        <Link
                          href={item.href}
                          scroll={false}
                          onClick={(e) => {
                            tryScrollToHashFromHref(e, item.href, pathname);
                            onClose();
                          }}
                          className="flex-1 px-5 py-4 text-2xl font-semibold tracking-tight text-white no-underline"
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setTechOpen((v) => !v)}
                          aria-expanded={techOpen}
                          aria-label={dict.navbar.toggleTechnologies}
                          className="flex shrink-0 items-center justify-center border-s border-white/10 px-5 text-white/80 transition-colors hover:bg-white/5"
                        >
                          <motion.span
                            animate={{ rotate: techOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex"
                          >
                            <ChevronDown className="size-5" strokeWidth={2.25} />
                          </motion.span>
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {techOpen && (
                          <motion.ul
                            key="tech-sub"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="mt-2 ms-2 flex flex-col gap-1 overflow-hidden border-s border-white/10 ps-4"
                          >
                            {techItems.map((tech) => (
                              <li key={tech.slug} className="list-none">
                                <Link
                                  href={tech.href}
                                  scroll={false}
                                  onClick={onClose}
                                  className="block rounded-lg px-3 py-2.5 text-base font-normal text-white/85 no-underline transition-colors hover:bg-white/5 hover:text-white"
                                >
                                  {tech.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      scroll={false}
                      onClick={(e) => {
                        tryScrollToHashFromHref(e, item.href, pathname);
                        onClose();
                      }}
                      className="block rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-2xl font-semibold tracking-tight text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
                    >
                      {item.title}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>

            {/* Bottom: CTA + language */}
            <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-10 flex flex-col gap-4 border-t border-white/10 px-6 pt-5 pb-7 bg-black/15 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium uppercase tracking-wider text-white/60">
                  {dict.languageSwitcher.label}
                </span>
                <LanguageSwitcher />
              </div>
              <div className="flex justify-center">
                <ContactUsButton onNavigate={onClose} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function MobileNavOverlay(props: MobileNavOverlayProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(<MobileNavOverlayInner {...props} />, document.body);
}
