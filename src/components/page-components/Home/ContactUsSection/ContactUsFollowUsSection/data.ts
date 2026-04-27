export interface IFollowUsData {
    id: number;
    name: string;
    link: string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
        mobileWidth: number;
        mobileHeight: number;
    }
}

export const followUsData: IFollowUsData[] = [
    {
        id: 1,
        name: "X",
        link: "https://x.com/halfbytee?s=21",
        image: {
            src: "/assets/pages/Home/ContactUsSection/ContactUsFollowUsSection/twitter.png",
            alt: "X",
            width: 54,
            height: 54,
            mobileWidth: 42,
            mobileHeight: 42
        }
    },
    {
        id: 2,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/half-byte-a405a93ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        image: {
            src: "/assets/pages/Home/ContactUsSection/ContactUsFollowUsSection/linkedin.png",
            alt: "LinkedIn",
            width: 54,
            height: 54,
            mobileWidth: 42,
            mobileHeight: 42
        }
    },
    {
        id: 3,
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61578428953017",
        image: {
            src: "/assets/pages/Home/ContactUsSection/ContactUsFollowUsSection/facebook.png",
            alt: "Facebook",
            width: 54,
            height: 54,
            mobileWidth: 42,
            mobileHeight: 42
        }
    },
    {
        id: 4,
        name: "Instagram",
        link: "https://www.instagram.com/halfbytee?igsh=dG9mczBzMWpleG1m&utm_source=qr",
        image: {
            src: "/assets/pages/Home/ContactUsSection/ContactUsFollowUsSection/instagram.png",
            alt: "Instagram",
            width: 54,
            height: 54,
            mobileWidth: 42,
            mobileHeight: 42
        }
    },
    {
        id: 5,
        name: "Snapchat",
        link: "https://snapchat.com/t/Hs6IfdLZ",
        image: {
            src: "/assets/pages/Home/ContactUsSection/ContactUsFollowUsSection/snapchat.png",
            alt: "Snapchat",
            width: 54,
            height: 54,
            mobileWidth: 42,
            mobileHeight: 42
        }
    },
    {
        id: 6,
        name: "TikTok",
        link: "https://www.tiktok.com/@halfbytee?_r=1&_t=ZS-95SShxZ656V",
        image: {
            src: "/assets/pages/Home/ContactUsSection/ContactUsFollowUsSection/ticktok.png",
            alt: "TikTok",
            width: 54,
            height: 54,
            mobileWidth: 42,
            mobileHeight: 42
        }
    }
]