interface IOurPartnersData {
    id: number;
    name: string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    }
}

export const ourPartnersData: IOurPartnersData[] = [
    {
        id: 1,
        name: "Cisco",
        image: {
            src: "/assets/pages/Home/OurPartners/cisco.svg",
            alt: "Cisco",
            width: 112,
            height: 57
        },

    },
    {
        id: 2,
        name: "Zoom",
        image: {
            src: "/assets/pages/Home/OurPartners/zoom.png",
            alt: "Zoom",
            width: 97,
            height: 23,
        }
    },
    {
        id: 3,
        name: "Nokia",
        image: {
            src: "/assets/pages/Home/OurPartners/nokia.png",
            alt: "Nokia",
            width: 121,
            height: 21
        }
    },
    {
        id: 4,
        name: "Huawei",
        image: {
            src: "/assets/pages/Home/OurPartners/huawei.png",
            alt: "Huawei",
            width: 64,
            height: 65
        }
    },
    {
        id: 5,
        name: "Intel",
        image: {
            src: "/assets/pages/Home/OurPartners/intel.png",
            alt: "Intel",
            width: 86,
            height: 55
        }
    },
    {
        id: 6,
        name: "Microsoft",
        image: {
            src: "/assets/pages/Home/OurPartners/microsoft.png",
            alt: "Microsoft",
            width: 149,
            height: 31
        }
    }
];