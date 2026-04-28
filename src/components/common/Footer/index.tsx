"use client";

import Link from "next/link";
import Image from "next/image";
import {
  footerContact,
  footerSocialNames,
  quickLinks,
} from "@/components/common/Footer/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { tryScrollToHashFromHref } from "@/lib/hash-nav";
import Container from "@/components/common/Container";
import { Heading5, Paragraph } from "@/components/common/Typography";
import { followUsData } from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection/data";

/** Light gray circle + dark green icon (image2). */
function ContactIconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white drop-shadow-md text-primary">
      {children}
    </span>
  );
}

function FooterNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="flex flex-col gap-4">
      <Heading5>
        Subscribe to our newsletter
      </Heading5>
      <form
        onSubmit={handleSubmit}
        className="flex w-full min-w-0 items-center gap-0 rounded-full border border-[#DBDBDB] bg-white p-1 pl-4 pr-2 shadow-none"
      >
        <Input
          variant="underline"
          inputClassName="min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-black outline-none placeholder:text-[#A3A3A3]"
          id="footer-newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[44px] min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-black outline-none placeholder:text-[#A3A3A3]"
        />
        <Button
          type="submit"
          className="h-10.5! shrink-0 rounded-full bg-primary px-5 text-base! font-normal! text-white transition-colors hover:bg-buttonHover sm:h-10 sm:px-6"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const pathname = usePathname();
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
          {/* Column 1 — brand + contact */}
          <div className="flex min-w-0 flex-col gap-10">
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
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
          {/* Column 1 — contact us */}
          <div className="flex flex-col gap-4">
            <Heading5>
              Contact Us
            </Heading5>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3.5 items-center">
                <ContactIconCircle>
                  <MapPin className="size-4" strokeWidth={2.25} />
                </ContactIconCircle>
                <Paragraph className="text-[#1A1A1A]!">
                  {footerContact.address}
                </Paragraph>
              </li>
              <li className="flex gap-3.5">
                <ContactIconCircle>
                  <Mail className="size-4" strokeWidth={2.25} />
                </ContactIconCircle>
                <div className="flex min-w-0 flex-col gap-1">
                  <Link
                    href={`mailto:${firstEmail}`}
                    className="no-underline"
                  >
                    <Paragraph className="text-[#1A1A1A]! hover:text-primary">
                      {firstEmail}
                    </Paragraph>
                  </Link>
                  {restEmails.map((email) => (
                    <Link
                      key={email}
                      href={`mailto:${email}`}
                      className="no-underline"
                    >
                      <Paragraph className="text-[#1A1A1A]! hover:text-primary">
                        {email}
                      </Paragraph>
                    </Link>
                  ))}
                </div>
              </li>
              <li className="flex gap-3.5 items-center">
                <ContactIconCircle>
                  <Phone className="size-4" strokeWidth={2.25} />
                </ContactIconCircle>
                <Link
                  href={footerContact.phoneHref}
                  className="no-underline"
                >
                  <Paragraph className="text-[#1A1A1A]!">
                    {footerContact.phone}
                  </Paragraph>
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 2 — quick links */}
          <div className="flex flex-col gap-4 lg:pt-1">
            <Heading5>
              Quick Links
            </Heading5>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
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

          {/* Column 3 — newsletter */}
          <div className="min-w-0 lg:pt-1">
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom: divider + social (image2) — all icons from followUsData */}
        <div className="mt-14 border-b mb-16 border-[#E5E5E5] pt-8 pb-10 md:mt-0 md:pb-12">
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 sm:items-start">
            <Paragraph className="text-navlink-dropdown-text! lg:text-xl!">
              Follow us
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
