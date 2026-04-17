export interface IAboutUsReasonsData {
    info: string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    }
}

export const aboutUsReasonsData: IAboutUsReasonsData[] = [
    {
        info: "Security-Driven <br class='hidden ssmd:block' /> Architecture",
        image: {
            src: "/assets/pages/Home/AboutUsSection/AboutUsReasons/carbon_security.png",
            alt: "Security-Driven Architecture",
            width: 46,
            height: 46
        },
    },
    {
        info: "Multi-Industry <br class='hidden ssmd:block' /> Expertise",
        image: {
            src: "/assets/pages/Home/AboutUsSection/AboutUsReasons/carbon_enterprise.svg",
            alt: "Multi-Industry Expertise",
            width: 44,
            height: 44
        }
    },
    {
        info: "Scalable Enterprise <br class='hidden ssmd:block' /> Solutions",
        image: {
            src: "/assets/pages/Home/AboutUsSection/AboutUsReasons/material-symbols_enterprise-outline.svg",
            alt: "Scalable Enterprise Solutions",
            width: 44,
            height: 44
        }
    }
];