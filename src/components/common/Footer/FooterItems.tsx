"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { IFooterSection } from "@/components/common/Footer/types";
import { Heading5, Paragraph } from "@/components/common/Typography";
import { footerColumns, contactInfo } from "@/components/common/Footer/data";

const FooterSection = ({
  section,
  onComingSoonClick,
}: {
  section: IFooterSection;
  onComingSoonClick: (title: string) => void;
}): React.JSX.Element => (
  <div className="flex flex-col gap-4">
    <Heading5 className="text-white! text-base! font-bold! leading-5!">
      {section.title}
    </Heading5>
    <div className="flex flex-col gap-2">
      {section.items.map((item) => (
        <div key={item.title} className="flex flex-col">
          {item.link ? (
            item.isExternal ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity w-fit cursor-pointer"
              >
                <Paragraph className="text-white! text-sm! font-normal! leading-5!">
                  {item.title}
                </Paragraph>
              </a>
            ) : (
              <Link
                href={item.link}
                className="hover:opacity-80 transition-opacity w-fit cursor-pointer"
              >
                <Paragraph className="text-white! text-sm! font-normal! leading-5!">
                  {item.title}
                </Paragraph>
              </Link>
            )
          ) : (
            <button
              type="button"
              onClick={() => onComingSoonClick(item.title)}
              className="text-left hover:opacity-80 transition-opacity w-fit cursor-pointer"
            >
              <Paragraph className="text-white! text-sm! font-normal! leading-5!">
                {item.title}
              </Paragraph>
            </button>
          )}
          {item.description && (
            <Paragraph className="text-white! text-xs! italic! leading-5!">
              {item.description}
            </Paragraph>
          )}
        </div>
      ))}
    </div>
  </div>
);

interface FooterItemsProps {
  className?: string;
}

const FooterItems = ({ className }: FooterItemsProps) => {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [comingSoonProductTitle, setComingSoonProductTitle] = useState<
    string | undefined
  >(undefined);

  const handleComingSoonClick = (title: string) => {
    setComingSoonProductTitle(title);
    setComingSoonOpen(true);
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 ${
          className || ""
        }`}
      >
        {/* Columns 1-3 from data */}
        {footerColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-8">
            {column.map((section, secIdx) => (
              <FooterSection
                key={secIdx}
                section={section}
                onComingSoonClick={handleComingSoonClick}
              />
            ))}
          </div>
        ))}

        {/* Column 4: Get In Touch + Map */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Heading5 className="text-white! text-base! font-bold! leading-5!">
              Get In Touch
            </Heading5>

            <div className="flex flex-col gap-2">
              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="w-auto h-auto text-white shrink-0 mt-0.5" />
                <Paragraph className="text-white! text-sm! font-normal! leading-5!">
                  {contactInfo.address.line1}
                  <br />
                  {contactInfo.address.line2}
                </Paragraph>
              </div>

              {/* Phone */}
              <a
                href={contactInfo.phoneLink}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <Phone className="w-auto h-auto text-white shrink-0" />
                </div>
                <Paragraph className="text-white! text-sm! font-normal! leading-5!">
                  {contactInfo.phone}
                </Paragraph>
              </a>

              {/* Email */}
              <a
                href={contactInfo.emailLink}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <Mail className="w-auto h-auto text-white shrink-0" />
                </div>
                <Paragraph className="text-white! text-sm! font-normal! leading-5!">
                  {contactInfo.email}
                </Paragraph>
              </a>
            </div>
          </div>

          {/* Map — Mapbox dark basemap */}
          <div className="h-40 w-full overflow-hidden rounded-lg lg:h-57">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.129227130282!2d-80.19179668472276!3d25.76167918371531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6823bcf84f1%3A0x2f240a29c6cf57e4!2s1111%20Brickell%20Ave%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1743514800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterItems;
