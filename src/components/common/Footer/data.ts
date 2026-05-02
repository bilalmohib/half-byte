import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/path";

export interface FooterQuickLink {
  key: "aboutUs" | "technologies" | "newsCareers" | "contactUs";
  title: string;
  href: string;
}

export function getQuickLinks(
  dict: Dictionary,
  locale: Locale,
): FooterQuickLink[] {
  const home = withLocale("/", locale);
  return [
    { key: "aboutUs", title: dict.navbar.aboutUs, href: `${home}#about-us` },
    {
      key: "technologies",
      title: dict.navbar.technologies,
      href: `${home}#technologies`,
    },
    {
      key: "newsCareers",
      title: dict.navbar.newsCareers,
      href: `${home}#news-careers`,
    },
    {
      key: "contactUs",
      title: dict.navbar.contactUs,
      href: `${home}#contact-us`,
    },
  ];
}

export const footerContact = {
  emails: ["khalid@halfbyte.com.sa", "info@halfbyte.com.sa"] as const,
  phone: "+966 554607074",
  phoneHref: "tel:+966554607074",
  addressMapHref:
    "https://www.google.com/maps/search/?api=1&query=King+Abdulaziz+Road+RRRB6143+Riyadh",
};

/** Order matches footer design (left → right). */
export const footerSocialNames = [
  "LinkedIn",
  "Instagram",
  "Facebook",
  "X",
  "TikTok",
  "Snapchat",
] as const;
