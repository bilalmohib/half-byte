export type TechnologyDictKey =
  | "aiEnablement"
  | "systemsIntegration"
  | "cloudOrchestration"
  | "managedServices"
  | "cybersecurity"
  | "consultancy"
  | "grcIntelligence";

export interface ITechnologiesBodySectionData {
  /** Translation key into `dict.technologies.items[...]`. */
  dictKey: TechnologyDictKey;
  /** URL segment: matches `?tech=` and technology detail routes. */
  slug: string;
  image: string;
}

export const technologiesBodySectionData: ITechnologiesBodySectionData[] = [
  {
    dictKey: "aiEnablement",
    slug: "ai-enablement",
    image: "/assets/pages/Home/Technologies/ai_enablement.png",
  },
  {
    dictKey: "systemsIntegration",
    slug: "systems-integration",
    image: "/assets/pages/Home/Technologies/systems_integration.svg",
  },
  {
    dictKey: "cloudOrchestration",
    slug: "cloud-orchestration",
    image: "/assets/pages/Home/Technologies/cloud_orchestration.svg",
  },
  {
    dictKey: "managedServices",
    slug: "managed-services",
    image: "/assets/pages/Home/Technologies/managed_services.svg",
  },
  {
    dictKey: "cybersecurity",
    slug: "cybersecurity-services",
    image: "/assets/pages/Home/Technologies/cybersecurity_services.svg",
  },
  {
    dictKey: "consultancy",
    slug: "technology-consultancy",
    image: "/assets/pages/Home/Technologies/technology_consultancy.svg",
  },
  {
    dictKey: "grcIntelligence",
    slug: "grc-intelligence",
    image: "/assets/pages/Home/Technologies/grc_intelligence.svg",
  },
];
