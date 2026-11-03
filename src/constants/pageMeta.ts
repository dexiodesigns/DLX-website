export interface PageMeta {
  title: string;
  description: string;
}

export const defaultPageMeta: PageMeta = {
  title: "Dexio LabX — AI Product Lab & SaaS Design Studio",
  description:
    "Dexio LabX designs and builds AI-native SaaS: UX audits, research and design for product teams, plus our own AI products like Vaahi. Chennai, India.",
};

// Keyed by lowercase pathname
export const pageMeta: Record<string, PageMeta> = {
  "/": defaultPageMeta,
  "/company": {
    title: "About Dexio LabX — The Curious Squad",
    description:
      "Meet the designers, researchers and builders behind Dexio LabX, and how we design products that think with the user, not around them.",
  },
  "/resources": {
    title: "Work & Insights — Dexio LabX",
    description:
      "Case studies from FlopHero, Neartail, RouteYourTravel and more, plus essays on designing SaaS for humans and AI.",
  },
  "/contact": {
    title: "Contact Dexio LabX — Reply Within 24 Hours",
    description:
      "Tell us what you're building. Our product and design team replies within 24 hours with a clear, actionable recommendation.",
  },
  "/services/ux-audit": {
    title: "UX Audit for SaaS Products — Dexio LabX",
    description:
      "Find the usability gaps, friction points and conversion blockers in your product, with fixes prioritised by impact and effort.",
  },
  "/services/ux-research": {
    title: "UX Research Services — Dexio LabX",
    description:
      "Interviews, surveys and behavioural research that replace assumptions with validated user insight before you design or rebuild.",
  },
  "/services/ux-design": {
    title: "UX & Product Design for SaaS — Dexio LabX",
    description:
      "Intuitive, scalable product experiences and design systems, built with your team and ready for development.",
  },
  "/services/data-driven-ux": {
    title: "Data-Driven UX & Conversion Design — Dexio LabX",
    description:
      "Turn funnels, behaviour and drop-off data into UX decisions that lift conversion and retention.",
  },
  "/services/next-gen-ux": {
    title: "AI, AR & Next-Gen UX Design — Dexio LabX",
    description:
      "Design AI workflows and immersive experiences that people actually adopt, validated before you scale.",
  },
  "/services/growth-focused-marketing-design": {
    title: "Growth-Focused Marketing Design — Dexio LabX",
    description:
      "Channel-ready marketing creatives built around KPIs, with consistent branding and iteration driven by results.",
  },
  "/services/motion-graphics": {
    title: "Product Explainers & Motion Graphics — Dexio LabX",
    description:
      "Explainer videos and motion design that make complex products easy to understand, across every platform.",
  },
};
