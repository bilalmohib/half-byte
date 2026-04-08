export interface IOurValuesBodySectionData {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

export const ourValuesBodySectionData: IOurValuesBodySectionData[] = [
    {
        title: "Integrity",
        description: "All our actions and outcomes are guided by ethics and transparency.",
        image: {
            src: "/assets/pages/Home/OurValues/integrity.svg",
            alt: "Integrity",
            width: 31,
            height: 31,
        }
    },
    {
        title: "Client Centricity",
        description: "Empowering our clients to achieve their business goals.",
        image: {
            src: "/assets/pages/Home/OurValues/client_centricity.svg",
            alt: "Client Centricity",
            width: 31,
            height: 31,
        }
    },
    {
        title: "Sustainability",
        description: "We are committed to minimizing our environmental impact and ensuring that our business practices support long-term economic, social, and ecological balance.",
        image: {
            src: "/assets/pages/Home/OurValues/sustainability.svg",
            alt: "Sustainability",
            width: 30,
            height: 30,
        }
    }
];