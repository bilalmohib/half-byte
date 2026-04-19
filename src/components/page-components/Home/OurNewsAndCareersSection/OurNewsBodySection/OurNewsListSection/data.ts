export interface IOurNewsSectionData {
    id: number | string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    title: string;
    description: string;
    date: string;
    /** Present for live NewsData.io articles — opens in a new tab */
    link?: string;
}

export const ourNewsSectionData: IOurNewsSectionData[] = [
    {
        id: 1,
        image: {
            src: "/assets/pages/Home/OurNewsAndCareers/image1.jpg",
            alt: "Half Byte Business Innovation",
            width: 363,
            height: 170
        },
        title: "Half Byte Business Innovation",
        description: "Delivering secure, scalable, and modern solutions tailored to different stages of digital maturity.",
        date: "2026-04-12"
    },
    {
        id: 2,
        image: {
            src: "/assets/pages/Home/OurNewsAndCareers/image2.png",
            alt: "Half Byte Business Innovation",
            width: 363,
            height: 170
        },
        title: "Half Byte Business Innovation",
        description: "Delivering secure, scalable, and modern solutions tailored to different stages of digital maturity.",
        date: "2026-04-12"
    },
    {
        id: 3,
        image: {
            src: "/assets/pages/Home/OurNewsAndCareers/image3.jpg",
            alt: "Half Byte Business Innovation",
            width: 363,
            height: 170
        },
        title: "Half Byte Business Innovation",
        description: "Delivering secure, scalable, and modern solutions tailored to different stages of digital maturity.",
        date: "2026-04-12"
    }
];