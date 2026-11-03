// Placeholder product images - replace with real product shots
import vaahiImg from "../assets/resourceImages/executive-manager-analyzing-graphs-report-working-after-hours-investment-plan-business-office-young-corporate-advisor-planning-company-growth-development-increase-profit.jpg";
import autistemImg from "../assets/resourceImages/person-using-ai-tool-job.jpg";

export interface ProductCard {
  name: string;
  image: string;
  href?: string; // TODO: add product URL once live
}

export interface TabConfig {
  id: string;
  label: string;
  activeColor: string;
  textColor: string;
  content: {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    products?: ProductCard[];
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
      buttonHref: "/services/ux-audit",
      image: "VideoImg"
    }
  },
  "Products": {
    id: "products",
    label: "Products",
    activeColor: "rgb(242 103 103)", // Orange
    textColor: "text-black",
    content: {
      title: "AI\nProducts",
      description: "Our own AI products, like Vaahi, the AI Operations Manager for small businesses, built with the same design rigour we bring to client work.",
      products: [
        {
          name: "Vaahi AI",
          image: vaahiImg,
        },
        {
          name: "Autistem AI",
          image: autistemImg,
        },
      ]
    }
  }
};

export const getTabConfig = (tabName: string): TabConfig => {
  return TAB_CONFIGS[tabName] || TAB_CONFIGS["Services"];
};