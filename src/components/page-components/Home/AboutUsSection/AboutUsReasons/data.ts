export type AboutUsReasonKey = "security" | "industry" | "scalable";

export interface IAboutUsReasonsData {
  /** Translation key into `dict.aboutUs.reasons[...]`. */
  dictKey: AboutUsReasonKey;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export const aboutUsReasonsData: IAboutUsReasonsData[] = [
  {
    dictKey: "security",
    image: {
      src: "/assets/pages/Home/AboutUsSection/AboutUsReasons/carbon_security.png",
      width: 46,
      height: 46,
    },
  },
  {
    dictKey: "industry",
    image: {
      src: "/assets/pages/Home/AboutUsSection/AboutUsReasons/carbon_enterprise.svg",
      width: 44,
      height: 44,
    },
  },
  {
    dictKey: "scalable",
    image: {
      src: "/assets/pages/Home/AboutUsSection/AboutUsReasons/material-symbols_enterprise-outline.svg",
      width: 44,
      height: 44,
    },
  },
];
