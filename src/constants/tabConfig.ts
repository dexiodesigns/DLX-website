export interface TabConfig {
  id: string;
  label: string;
  activeColor: string;
  textColor: string;
  content: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref?: string;
    image?: string | React.ComponentType;
  };
}

export const TAB_CONFIGS: Record<string, TabConfig> = {
  "Services": {
    id: "services",
    label: "Services",
    activeColor: "#7a78ed",
    textColor: "text-black",
    content: {
      title: "Service\nExcellence",
      description: "Crafting human-centered design for digital transformation. From UX Research to Marketing Assets, we partner with businesses to design experiences that drive growth.",
      buttonText: "Explore Services",
      image: "VideoImg"
    }
  },
  "Products": {
    id: "products",
    label: "Products",
    activeColor: "rgb(242 103 103)", // Orange
    textColor: "text-black",
    content: {
      title: "SaaS\nIntelligence",
      description: "AI-powered SaaS tools that automate workflows, enhance productivity, and simplify decisions, built with the same design excellence we deliver to clients.",
      buttonText: "Explore Products"
    }
  },
  "Academy": {
    id: "academy",
    label: "Academy",
    activeColor: "rgb(59 196 246)", // Blue
    textColor: "text-black",
    content: {
      title: "Experiential\nLearning",
      description: "Where learning meets doing. Project-based workshops and mentorship programs that turn real-world challenges into creative skill-building journeys.",
      buttonText: "Learn With Us",
      image: "AcademyHomeImg"
    }
  }
};

export const getTabConfig = (tabName: string): TabConfig => {
  return TAB_CONFIGS[tabName] || TAB_CONFIGS["Services"];
};