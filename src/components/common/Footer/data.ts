import { IFooterSection } from "@/components/common/Footer/types";

export const footerColumns: IFooterSection[][] = [
  // Column 1
  [
    {
      title: "Products — Organizations",
      items: [
        {
          title: "ATLAS — Capital Governance Layer",
          description: "(ILS / Sovereign Wealth Funds / Pensions)",
          link: "/products/atlas-capital-market",
        },
        {
          title: "ATLAS — Parametric Engine",
          description: "(Parametric Insurance)",
        },
        {
          title: "ATLAS — Catastrophe Governance Layer",
          description: "(E&S / Catastrophe Risk)",
        },
        {
          title: "ATLAS — Environmental Burden Score",
          description: "(Health Insurance)",
        },
        {
          title: "Satori — Pediatric Environmental Risk Intelligence",
          description: "(Healthcare Systems / Pediatric Care)",
          link: "/products/satori-pediatric-care",
        },
      ],
    },
    {
      title: "Products — Individuals",
      items: [
        { title: "Satori — For Childhood Asthma & Allergies", link: "/" },
      ],
    },
  ],
  // Column 2
  [
    {
      title: "Organizational Engagement",
      items: [
        { title: "Request a Validation" },
        { title: "Speak with an Expert" },
      ],
    },
    {
      title: "Trust & Governance",
      items: [{ title: "Trust Center" }],
    },
  ],
  // Column 3
  [
    {
      title: "Thought Leadership",
      items: [
        {
          title: "Thought Leadership",
          link: "https://www.beyondintelligence.ai/blog/",
          isExternal: true,
        },
        // { title: "Press", link: "https://www.beyondintelligence.ai/press", isExternal: true },
        {
          title: "Speakers",
          link: "https://www.beyondintelligence.ai/keynote",
          isExternal: true,
        },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About", link: "/about" },
        { title: "Careers" },
        { title: "Contact", link: "/contact" },
      ],
    },
  ],
];

export const contactInfo = {
  address: {
    line1: "1111 Brickell Avenue, 10th Floor",
    line2: "Miami, Florida 33131, United States",
  },
  phone: "+1 (786) 305-3491",
  phoneLink: "tel:+17863053491",
  email: "support@beyondintelligence.ai",
  emailLink: "mailto:support@beyondintelligence.ai",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=1111+Brickell+Avenue,+Miami,+FL+33131&t=&z=15&ie=UTF8&iwloc=&output=embed",
  /** WGS84 center for Mapbox footer map (1111 Brickell Avenue area, Miami). */
  mapCenter: {
    latitude: 25.76168,
    longitude: -80.19179,
    zoom: 14,
  },
};

export const bottomLinks = [
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Terms of Use", link: "/terms" },
  { title: "SMS Program", link: "/sms" },
  { title: "SMS Opt-in Proof", link: "/sms-optin-proof" },
  { title: "Contact", link: "/contact" },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/company/beyond-intelligence-inc/",
};
