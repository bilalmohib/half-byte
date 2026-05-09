"use client";

import Link from "next/link";
import Image from "next/image";
import {
  footerContact,
  footerSocialNames,
  getQuickLinks,
} from "@/components/common/Footer/data";
import { MapPin, Mail, Phone } from "lucide-react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { tryScrollToHashFromHref } from "@/lib/hash-nav";
import Container from "@/components/common/Container";
import { Heading5, Paragraph } from "@/components/common/Typography";
import { followUsData } from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection/data";
import { useT, useLocale } from "@/i18n/DictionaryProvider";
import SubscribeToNewsLetter from "@/components/common/Footer/SubscribeToNewsLetter";
import { MailtoLink, TelLink } from "@/components/common/contact-links";

function ContactIconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white drop-shadow-md text-primary">
      {children}
    </span>
  );
}

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const pathname = usePathname();
  const dict = useT();
  const locale = useLocale();
  const quickLinks = useMemo(() => getQuickLinks(dict, locale), [dict, locale]);
  const orderedSocial = useMemo(
    () =>
      footerSocialNames
        .map((name) => followUsData.find((item) => item.name === name))
        .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    [],
  );

  const [firstEmail, ...restEmails] = footerContact.emails;

  return (
    <footer
      className={`w-full border-t border-[#D3D3D3] bg-white transition-all duration-200 ${className ?? ""}`}
    >
      <Container className="pt-6 pb-0 md:pt-7 lg:pt-8.5 flex flex-col gap-8.5">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-14">
          <div className="flex min-w-0 flex-col gap-10">
            <div className="flex flex-col gap-2.5">
              <Link
                href={`/${locale}`}
                className="flex w-fit cursor-pointer items-center gap-3 text-left no-underline"
              >
                <Image
                  src="/assets/(common)/half_byte_logo.jpeg"
                  alt="Half Byte"
                  width={147}
                  height={49}
                  className="h-10 w-auto object-contain object-left md:h-[52px]"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-14">
          <div className="flex flex-col gap-4">
            <Heading5>{dict.footer.contactUs}</Heading5>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3.5 items-center">
                <ContactIconCircle>
                  <MapPin className="size-4" strokeWidth={2.25} />
                </ContactIconCircle>
                <a
                  href={footerContact.addressMapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-normal md:leading-[142%] text-[#1A1A1A] no-underline hover:text-primary cursor-pointer wrap-break-word"
                >
                  {dict.contactUs.address.value}
                </a>
              </li>
              <li className="flex gap-3.5">
                <ContactIconCircle>
                  <Mail className="size-4" strokeWidth={2.25} />
                </ContactIconCircle>
                <div className="flex min-w-0 flex-col gap-1">
                  <MailtoLink
                    email={firstEmail}
                    className="font-roboto font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-normal md:leading-[142%] text-[#1A1A1A] no-underline hover:text-primary cursor-pointer break-all"
                  />
                  {restEmails.map((email) => (
                    <MailtoLink
                      key={email}
                      email={email}
                      className="font-roboto font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-normal md:leading-[142%] text-[#1A1A1A] no-underline hover:text-primary cursor-pointer break-all"
                    />
                  ))}
                </div>
              </li>
              <li className="flex gap-3.5 items-center">
                <ContactIconCircle>
                  <Phone className="size-4" strokeWidth={2.25} />
                </ContactIconCircle>
                <TelLink
                  href={footerContact.phoneHref}
                  className="font-roboto font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-normal md:leading-[142%] text-[#1A1A1A] no-underline hover:text-primary cursor-pointer"
                >
                  {footerContact.phone}
                </TelLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:pt-1">
            <Heading5>{dict.footer.quickLinks}</Heading5>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  scroll={item.href.includes("#") ? false : undefined}
                  onClick={(e) =>
                    tryScrollToHashFromHref(e, item.href, pathname)
                  }
                  className="no-underline"
                >
                  <Paragraph className="text-[#1A1A1A]! hover:text-primary">
                    {item.title}
                  </Paragraph>
                </Link>
              ))}
            </nav>
          </div>

          <div className="min-w-0 lg:pt-1">
            <SubscribeToNewsLetter />
          </div>
        </div>

        <div className="border-b mb-16 border-[#E5E5E5] pb-10 md:mt-0 md:pb-12">
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 sm:items-start">
            <Paragraph className="text-navlink-dropdown-text! lg:text-xl!">
              {dict.footer.followUs}
            </Paragraph>
            <div className="flex flex-wrap items-center gap-6 md:gap-8.5">
              {orderedSocial.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-85"
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="size-8 object-contain md:size-[38px]!"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
