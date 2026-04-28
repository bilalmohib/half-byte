export const quickLinks = [
  { title: "About Us", href: "/#about-us" },
  { title: "Technologies", href: "/#technologies" },
  { title: "News & Careers", href: "/#news-careers" },
  { title: "Contact Us", href: "/#contact-us" },
] as const;

export const footerContact = {
  address: "Riyadh, King Abdulaziz Road, RRRB6143",
  emails: ["khalid@halfbyte.com.sa", "info@halfbyte.com.sa"] as const,
  phone: "+966 554607074",
  phoneHref: "tel:+966554607074",
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
