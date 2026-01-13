import { ReactNode } from "react";

export interface ServiceStat {
  value: string;
  label: string;
  icon: string; // Icon name from lucide-react
}

export interface ServiceChallenge {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  subtitleGradient: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  statsHeading: string;
  stats: ServiceStat[];
  challengesHeading: string;
  challenges: ServiceChallenge[];
  processHeading: string;
  processSubheading: string;
  processSteps: ProcessStep[];
  ctaBoxHeading: string;
  ctaBoxSubheading: string;
  ctaBoxButtonText: string;
}

export const servicesData: ServiceData[] = [
  {
    id: "ux-audit",
    slug: "ux-audit",
    title: "UX Audit",
    subtitle: "Uncover what's stopping your users.",
    subtitleGradient: "from-[#f97316] to-[#ec4899]",
    description: "Evaluate your product end-to-end to uncover usability gaps, friction points, and missed opportunities.",
    ctaText: "Review My Product",
    ctaLink: "/contact",
    statsHeading: "Clear results you can measure.",
    stats: [
      { value: "95%", label: "Experience Clarity", icon: "Focus" },
      { value: "88%", label: "Impact Prioritisation", icon: "Settings" },
      { value: "92%", label: "Actionable Insights", icon: "MessageCircle" },
    ],
    challengesHeading: "Signs your experience needs review.",
    challenges: [
      { icon: "TrendingDown", title: "User Drop-offs", description: "Users leave, analytics fail to explain experience breakdowns." },
      { icon: "AlignLeft", title: "Stalled Conversions", description: "Conversion rates plateau despite traffic growth or feature releases." },
      { icon: "RefreshCw", title: "Repeated Redesigns", description: "Design changes occur without measurable or lasting improvements." },
      { icon: "GitBranch", title: "Conflicting Opinions", description: "Stakeholders disagree on issues, slowing confident decision-making." },
      { icon: "CircleDot", title: "Scaling Blindly", description: "Product scales without clarity on UX effectiveness." },
      { icon: "Zap", title: "Quick Wins Needed", description: "Immediate UX improvements required before major redesign efforts." },
    ],
    processHeading: "Aligned closely with your product team.",
    processSubheading: "You get clarity, ownership, and continuity without the overhead of building an in-house team.",
    processSteps: [
      { title: "Context Alignment", description: "Business goals, user segments, and real product constraints." },
      { title: "Experience Review", description: "Heuristic checks, usability analysis, journey walkthroughs." },
      { title: "Issue Prioritisation", description: "Severity, effort, and business impact evaluation." },
      { title: "Actionable Direction", description: "Clear fixes, quick wins, and strategic improvements." },
    ],
    ctaBoxHeading: "Move forward by knowing exactly what to fix.",
    ctaBoxSubheading: "Clear priorities and next best actions.",
    ctaBoxButtonText: "Review My Product",
  },
  {
    id: "ux-research",
    slug: "ux-research",
    title: "UX Research",
    subtitle: "Understand users before building solutions.",
    subtitleGradient: "from-[#6366f1] to-[#ec4899]",
    description: "Uncover validated user insights and align teams around what users genuinely need.",
    ctaText: "Explore User Insights",
    ctaLink: "/contact",
    statsHeading: "Real results without assumptions.",
    stats: [
      { value: "90%", label: "Validated Assumptions", icon: "CheckCircle" },
      { value: "85%", label: "Understanding Users", icon: "Users" },
      { value: "92%", label: "Team Alignment", icon: "Sparkles" },
    ],
    challengesHeading: "Signals you need user insight.",
    challenges: [
      { icon: "Brain", title: "Opinion Decisions", description: "Product decisions rely on assumptions, not user evidence." },
      { icon: "GitPullRequest", title: "Unexpected Behaviour", description: "Users interact differently than originally intended." },
      { icon: "LogIn", title: "New Markets", description: "Entering new domains without validated user understanding." },
      { icon: "MessageSquare", title: "Low Adoption", description: "Features launch but fail to gain meaningful usage." },
      { icon: "Heart", title: "Pre-Design Clarity", description: "Insights required before starting design or rebuild." },
      { icon: "Zap", title: "Team Misalignment", description: "Teams lack shared understanding of user needs." },
    ],
    processHeading: "Partnered with your product thinking.",
    processSubheading: "Deep domain immersion, direct collaboration, and dedicated researchers, without the cost or rigidity of in-house hiring.",
    processSteps: [
      { title: "Context Alignment", description: "Business objectives, market landscape, and constraints." },
      { title: "User Discovery", description: "Interviews, surveys, and behavioural observations." },
      { title: "Insight Synthesis", description: "Patterns, personas, and journey mapping." },
      { title: "Strategic Inputs", description: "Clear insights for design and product direction." },
    ],
    ctaBoxHeading: "Make product decisions grounded in real user understanding.",
    ctaBoxSubheading: "Insights that replace assumptions completely.",
    ctaBoxButtonText: "Explore User Insights",
  },
  {
    id: "ux-design",
    slug: "ux-design",
    title: "UX Design",
    subtitle: "Design experiences users adopt naturally.",
    subtitleGradient: "from-[#a855f7] to-[#6366f1]",
    description: "We design intuitive, scalable user experiences that balance usability, aesthetics, and business goals.",
    ctaText: "Design With Us",
    ctaLink: "/contact",
    statsHeading: "Outcomes that truly matter.",
    stats: [
      { value: "93%", label: "Usability Improvement", icon: "MousePointer" },
      { value: "88%", label: "Faster User Adoption", icon: "Users" },
      { value: "90%", label: "Design Consistency", icon: "PenTool" },
    ],
    challengesHeading: "Moments that need better UX.",
    challenges: [
      { icon: "Grid3x3", title: "Complex Experience", description: "Product feels confusing, inconsistent, or hard to navigate." },
      { icon: "Lightbulb", title: "Onboarding Friction", description: "New users struggle to understand product value." },
      { icon: "Maximize", title: "No Design System", description: "Scaling creates inconsistent patterns and experiences." },
      { icon: "Circle", title: "Unused Features", description: "Features exist but users fail to adopt." },
      { icon: "TrendingDown", title: "Low Impact", description: "Redesigns look better but don't improve outcomes." },
      { icon: "Zap", title: "Growth Readiness", description: "UX not prepared to support product growth." },
    ],
    processHeading: "Working as part of your design team.",
    processSubheading: "Dedicated designers working closely with your team—aligned to your roadmap, tech, and timelines.",
    processSteps: [
      { title: "Goal Alignment", description: "Business goals, user needs, and success metrics." },
      { title: "Experience Design", description: "User flows, information architecture, interactions." },
      { title: "System Design", description: "Scalable components and consistent design patterns." },
      { title: "Validation Handoff", description: "Usability checks and development-ready outputs." },
    ],
    ctaBoxHeading: "Design experiences users trust and return to.",
    ctaBoxSubheading: "Built for adoption and long-term value.",
    ctaBoxButtonText: "Design With Us",
  },
  {
    id: "data-driven-ux",
    slug: "data-driven-ux",
    title: "Data-Driven UX",
    subtitle: "Turn product data into better experiences.",
    subtitleGradient: "from-[#22c55e] to-[#6366f1]",
    description: "Turn user behaviour and data into UX decisions that improve conversions and retention.",
    ctaText: "Discuss UX Metrics",
    ctaLink: "/contact",
    statsHeading: "Impact you can clearly quantify.",
    stats: [
      { value: "35-45%", label: "Conversion Uplift", icon: "ChevronUp" },
      { value: "100%", label: "Execution Clarity", icon: "MousePointer" },
      { value: "40%", label: "Drop-Off Reduction", icon: "ChevronDown" },
    ],
    challengesHeading: "Gaps between data and decisions.",
    challenges: [
      { icon: "TrendingDown", title: "Data Without Answers", description: "Analytics show behaviour but not underlying reasons." },
      { icon: "AlignLeft", title: "Leaky Funnels", description: "Users drop at key stages unexpectedly." },
      { icon: "PlayCircle", title: "Guess Optimisation", description: "UX changes made without validation or evidence." },
      { icon: "GitBranch", title: "Proof Needed", description: "Decisions require data-backed UX justification." },
      { icon: "CircleDot", title: "Growing Data", description: "Increasing user data lacks structured interpretation." },
      { icon: "Zap", title: "Metric Gaps", description: "Key UX metrics remain undefined or unclear." },
    ],
    processHeading: "Working at the intersection of UX and data.",
    processSubheading: "UX, data, and product thinking; working together, not in silos.",
    processSteps: [
      { title: "Data Analysis", description: "Funnels, user behaviour, and drop-off patterns." },
      { title: "UX Mapping", description: "Journeys aligned directly with key metrics." },
      { title: "Insight Clarity", description: "Understanding what happens and why." },
      { title: "Optimisation Planning", description: "Validated improvements backed by data." },
    ],
    ctaBoxHeading: "Turn product data into clear, confident decisions.",
    ctaBoxSubheading: "From signals to meaningful action.",
    ctaBoxButtonText: "Discuss UX Metrics",
  },
  {
    id: "next-gen-ux",
    slug: "next-gen-ux",
    title: "Next-Gen UX",
    subtitle: "Design future-ready experiences practically.",
    subtitleGradient: "from-[#f97316] to-[#ec4899]",
    description: "We design AI, AR, and immersive experiences focused on real usability, adoption, and scale; not demos.",
    ctaText: "Design The Future",
    ctaLink: "/contact",
    statsHeading: "Proven impact before scaling.",
    stats: [
      { value: "80%", label: "Feasibility Validation", icon: "CheckCircle" },
      { value: "90%", label: "Usability Confidence", icon: "Scale" },
      { value: "50%", label: "Faster MVP Concepts", icon: "PenTool" },
    ],
    challengesHeading: "Opportunities beyond traditional UX.",
    challenges: [
      { icon: "Users", title: "AI Exploration", description: "AI workflows lack clear experience direction." },
      { icon: "PenTool", title: "Immersive Interfaces", description: "AR or VR usability remains unvalidated." },
      { icon: "Cpu", title: "Tech-First UX", description: "Advanced technology feels complex for users." },
      { icon: "Lightbulb", title: "Early Validation", description: "Innovative ideas need testing before scaling." },
      { icon: "TrendingUp", title: "Hype Risk", description: "Trends distract from real user value." },
      { icon: "Zap", title: "Future Readiness", description: "Experiences need adoption-ready, scalable design." },
    ],
    processHeading: "Partnered for future-ready experiences.",
    processSubheading: "Strategic, technical, and UX expertise combined—without experimental risk.",
    processSteps: [
      { title: "Use-Case Framing", description: "Real user problems, not technology trends." },
      { title: "Concept Modelling", description: "Human-first interaction design." },
      { title: "Prototype Validation", description: "Usability testing and adoption checks." },
      { title: "Scale Preparation", description: "Designs ready for real-world use." },
    ],
    ctaBoxHeading: "Design future-ready experiences users can actually use.",
    ctaBoxSubheading: "Innovation grounded in real usability.",
    ctaBoxButtonText: "Design The Future",
  },
  {
    id: "marketing-designs",
    slug: "marketing-designs",
    title: "Marketing Designs",
    subtitle: "Design that drives measurable growth.",
    subtitleGradient: "from-[#ec4899] to-[#f97316]",
    description: "Create marketing designs that drive measurable engagement, clarity, and growth across channels.",
    ctaText: "Design For Growth",
    ctaLink: "/contact",
    statsHeading: "Results backed by performance.",
    stats: [
      { value: "35%", label: "Engagement Lift", icon: "Heart" },
      { value: "28%", label: "CTR Improvement", icon: "ThumbsUp" },
      { value: "100%", label: "Brand Consistency", icon: "Award" },
    ],
    challengesHeading: "Design challenges impacting growth.",
    challenges: [
      { icon: "TrendingDown", title: "Low Engagement", description: "Visuals fail to capture attention across channels." },
      { icon: "MessageSquare", title: "Brand Inconsistency", description: "Design language varies across platforms and campaigns." },
      { icon: "Cloud", title: "Unclear Performance", description: "Creative impact is difficult to measure." },
      { icon: "Maximize", title: "Creative Scaling", description: "Growing teams lack repeatable design systems." },
      { icon: "MessageSquareOff", title: "Poor Conversion", description: "Design looks good but doesn't drive action." },
      { icon: "Zap", title: "Channel Misfit", description: "Assets are not platform or audience optimised." },
    ],
    processHeading: "Working as part of your growth engine.",
    processSubheading: "Designers aligned to your growth goals; not just visuals.",
    processSteps: [
      { title: "Goal Alignment", description: "Campaign objectives and measurable KPIs." },
      { title: "Creative Direction", description: "Messaging clarity and visual strategy." },
      { title: "Asset Creation", description: "Channel-specific, scalable design assets." },
      { title: "Performance Optimisation", description: "Iteration driven by real results." },
    ],
    ctaBoxHeading: "Create marketing designs that drive measurable growth.",
    ctaBoxSubheading: "Every design earns its place.",
    ctaBoxButtonText: "Design For Growth",
  },
  {
    id: "motion-graphics",
    slug: "motion-graphics",
    title: "Motion Graphics",
    subtitle: "Turn complex ideas into clear stories.",
    subtitleGradient: "from-[#6366f1] to-[#22c55e]",
    description: "Tell clear visual stories through motion that improve understanding, retention, and audience engagement.",
    ctaText: "Tell Your Story",
    ctaLink: "/contact",
    statsHeading: "Performance you can track.",
    stats: [
      { value: "2x", label: "Content Retention", icon: "PenTool" },
      { value: "40%", label: "Message Clarity", icon: "ThumbsUp" },
      { value: "30%", label: "Engagement Uplift", icon: "BarChart2" },
    ],
    challengesHeading: "Moments that need motion.",
    challenges: [
      { icon: "TrendingDown", title: "Hard to Explain", description: "Product value is difficult to communicate quickly." },
      { icon: "AlignLeft", title: "Onboarding Gaps", description: "Users need visual guidance for understanding." },
      { icon: "PlayCircle", title: "Weak Static Content", description: "Images and text fail to retain attention." },
      { icon: "GitBranch", title: "Short Attention", description: "Messages must be delivered fast and clearly." },
      { icon: "CircleDot", title: "Low Impact Stories", description: "Narratives lack clarity, emotion, or recall." },
      { icon: "Zap", title: "Multi-Channel Needs", description: "Videos must adapt across platforms and use cases." },
    ],
    processHeading: "Working alongside your product narrative.",
    processSubheading: "Story-driven motion design aligned with your product and audience.",
    processSteps: [
      { title: "Story Framing", description: "Clear narrative structure and flow." },
      { title: "Visual Language", description: "Brand-aligned visuals and styles." },
      { title: "Motion Crafting", description: "Timing, transitions, and visual clarity." },
      { title: "Optimised Delivery", description: "Outputs tailored for each platform." },
    ],
    ctaBoxHeading: "Tell stories that simplify and stay memorable.",
    ctaBoxSubheading: "Clear stories with lasting impact.",
    ctaBoxButtonText: "Tell Your Story",
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find((service) => service.slug === slug);
};

export const serviceNavItems = servicesData.map((service) => ({
  name: service.title,
  slug: service.slug,
  href: `/services/${service.slug}`,
}));

