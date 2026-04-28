import { technologiesBodySectionData } from "@/components/page-components/Home/TechnologiesSection/TechnologiesBodySection/data";
import { technologiesHomeHref } from "@/lib/hash-nav";

export const menuItems = [
  {
    title: "About Us",
    href: "/#about-us",
    hasDropdown: false,
  },
  {
    title: "Technologies",
    href: "/#technologies",
    hasDropdown: true,
  },
  {
    title: "News & Careers",
    href: "/#news-careers",
    hasDropdown: false,
  },
];

export const technologyItems = technologiesBodySectionData.map((t) => ({
  title: t.title,
  slug: t.slug,
  href: technologiesHomeHref(t.slug),
}));
