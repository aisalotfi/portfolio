export type GlyphName =
  | "architecture"
  | "motion"
  | "interaction"
  | "performance"
  | "accessibility"
  | "responsive";

export interface EngineeringCapability {
  id: string;
  glyph: GlyphName;
  title: string;
  description: string;
  tools: string[];
}

export const engineeringCapabilities: EngineeringCapability[] = [
  {
    id: "architecture",
    glyph: "architecture",
    title: "Component Architecture",
    description:
      "Composable, scalable systems engineered for clarity, reuse, and the long arc of a product.",
    tools: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "motion",
    glyph: "motion",
    title: "Motion Systems",
    description:
      "Cinematic choreography. Spring physics, stagger, scroll-linked storytelling — never decoration.",
    tools: ["Framer Motion", "GSAP", "Lenis"],
  },
  {
    id: "interaction",
    glyph: "interaction",
    title: "Interaction Design",
    description:
      "Tactile micro-interactions that communicate, guide, and delight without ever shouting.",
    tools: ["Gesture", "Hover", "Transitions"],
  },
  {
    id: "performance",
    glyph: "performance",
    title: "Performance",
    description:
      "Sub-second loads, lean bundles, edge rendering. Speed is a feature, not a polish step.",
    tools: ["SSR", "Edge", "Splitting"],
  },
  {
    id: "accessibility",
    glyph: "accessibility",
    title: "Accessibility",
    description:
      "WCAG 2.2 AA+ as a baseline. Universal access without ever compromising on craft.",
    tools: ["ARIA", "Keyboard", "Contrast"],
  },
  {
    id: "responsive",
    glyph: "responsive",
    title: "Responsive Engineering",
    description:
      "Fluid layouts that hold cinematic quality from a 320px phone to a 4K studio display.",
    tools: ["Tailwind", "Grid", "Container"],
  },
];

export interface EngineeringStat {
  value: string;
  label: string;
}

export const engineeringStats: EngineeringStat[] = [
  { value: "98",   label: "Avg. Lighthouse" },
  { value: "<2s",  label: "Time to Interactive" },
  { value: "0",    label: "Axe violations" },
  { value: "AA+",  label: "WCAG baseline" },
];
