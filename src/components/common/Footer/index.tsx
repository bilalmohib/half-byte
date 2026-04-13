"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Container from "@/components/common/Container";
import { Heading5, Paragraph } from "@/components/common/Typography";
import { followUsData } from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection/data";
import {
  footerContact,
  footerSocialNames,
  quickLinks,
} from "@/components/common/Footer/data";

/** Light gray circle + dark green icon (image2). */
function ContactIconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8E8E8] text-primary">
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
        className="flex w-full min-w-0 items-center gap-0 rounded-full border border-[#DBDBDB] bg-white p-1 pl-4 shadow-none"
      >
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[44px] min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-black outline-none placeholder:text-[#A3A3A3]"
        />
        <button
          type="submit"
          className="h-9 shrink-0 rounded-full bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-buttonHover sm:h-10 sm:px-6"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
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
                <Paragraph className="text-sm! font-normal! leading-5! text-navlink-dropdown-text!">
                  {footerContact.address}
                </Paragraph>
              </li>
              <li className="flex gap-3.5">
                <ContactIconCircle>
                  <Mail className="size-4" strokeWidth={2.25} />
                </ContactIconCircle>
                <div className="flex min-w-0 flex-col gap-1">
                  <a
                    href={`mailto:${firstEmail}`}
                    className="font-roboto text-sm leading-5 text-navlink-dropdown-text hover:text-primary"
                  >
                    {firstEmail}
                  </a>
                  {restEmails.map((addr) => (
                    <a
                      key={addr}
                      href={`mailto:${addr}`}
                      className="font-roboto text-sm leading-5 text-navlink-dropdown-text hover:text-primary"
                    >
                      {addr}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3.5 items-center">
                <ContactIconCircle>
                  <Phone className="size-4" strokeWidth={2.25} />
                </ContactIconCircle>
                <a
                  href={footerContact.phoneHref}
                  className="font-roboto text-sm leading-5 text-navlink-dropdown-text hover:text-primary"
                >
                  {footerContact.phone}
                </a>
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
                  className="font-roboto text-sm font-normal leading-7 text-black no-underline transition-colors hover:text-primary"
                >
                  {item.title}
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
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-3">
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
