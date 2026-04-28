export interface ITechnologiesBodySectionData {
    title: string;
    /** URL segment: matches `?tech=` and technology detail routes. */
    slug: string;
    description: string;
    image: string;
}

export const technologiesBodySectionData: ITechnologiesBodySectionData[] = [
    {
        title: "AI Enablement",
        slug: "ai-enablement",
        description: "Half Byte leverages AI solutions across different industries, enabling clients to adopt the right technologies aligned with their business values and objectives. We deliver AI solutions using various deployment methodologies and consumption models tailored to each client’s needs.",
        image: "/assets/pages/Home/Technologies/ai_enablement.png",
    },
    {
        title: "Systems Integration",
        slug: "systems-integration",
        description: "We design and build reliable, scalable, and secure IT infrastructures to address diverse client needs—whether through greenfield deployments or integrating new solutions into existing environments. Our approach ensures dependable delivery with appropriate scalability options, following best practices from the design phase through deployment and ongoing operations to guarantee a robust infrastructure that serves business objectives effectively.",
        image: "/assets/pages/Home/Technologies/systems_integration.svg",
    },
    {
        title: "Cloud Orchestration",
        slug: "cloud-orchestration",
        description: "By combining our private cloud capabilities with partnerships with hyperscalers, we deliver highly customized cloud solutions tailored to client workloads and specific needs. We also provide advisory services to help clients choose the most suitable deployment model—private, hybrid, or multi-cloud—ensuring optimal capacity and computing power, along with seamless migration and related services.",
        image: "/assets/pages/Home/Technologies/cloud_orchestration.svg",
    },
    {
        title: "Managed Services",
        slug: "managed-services",
        description: "We empower clients by offering managed services through a holistic approach or modular service components. This ensures the right balance between efficiency and effectiveness while we handle backend operations—removing technological burdens and enabling businesses to focus on achieving their goals.",
        image: "/assets/pages/Home/Technologies/managed_services.svg",
    },
    {
        title: "Cybersecurity Services",
        slug: "cybersecurity-services",
        description: "Half Byte adopts a comprehensive approach to cybersecurity, focusing on the CIA triad (Confidentiality, Integrity, Availability) while emphasizing GRC. We secure environments starting from the hardware level up to policies and information security frameworks, providing continuous monitoring and threat analysis to mitigate risks and prevent zero-day attacks.",
        image: "/assets/pages/Home/Technologies/cybersecurity_services.svg",
    },
    {
        title: "Technology Consultancy",
        slug: "technology-consultancy",
        description: "With a highly experienced team spanning multiple sectors and over 30 years of combined expertise—supported by strong academic backgrounds and international recognitions—Half Byte delivers timely and effective advisory services. We help clients adopt the right IT strategies and methodologies aligned with their business objectives.",
        image: "/assets/pages/Home/Technologies/technology_consultancy.svg",
    },
    {
        title: "GRC Intelligence",
        slug: "grc-intelligence",
        description: `
        Half Byte delivers advanced GRC solutions built on AI-driven intelligence systems, designed to support all stages of the risk management lifecycle in alignment with local and international regulations.
        <br />
        Our approach includes:
        <br />
        <ul class="list-disc list-inside">
            <li>Thorough identification using KYC/KYP practices</li>
            <li>Deep due diligence from financial and security perspectives</li>
            <li>Visualization of entity and relationship networks</li>
            <li>Correlation of data from multiple sources to uncover hidden insights</li>
            <li>Comprehensive 360° background checks, including legal cases and social media analysis</li>
        </ul>
        This enables clients to gain clear visibility, mitigate risks, evaluate the impact of decisions, and implement effective risk management strategies across the entire lifecycle.
        `,
        image: "/assets/pages/Home/Technologies/grc_intelligence.svg",
    }
];