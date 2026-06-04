export interface ProcessStep {
  id: string;
  numeral: string;
  title: string;
  description: string;
  keywords: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    numeral: "i",
    title: "Discover",
    description:
      "Listen first. Map the user, the problem, and the business gravity around it. Synthesise research into one clear design direction.",
    keywords: ["Research", "Strategy", "Architecture"],
  },
  {
    id: "design",
    numeral: "ii",
    title: "Design",
    description:
      "Translate the strategy into tangible interfaces. Iterate fast — wireframes, high-fidelity comps, motion studies — until the work feels inevitable.",
    keywords: ["Wireframes", "UI", "Prototypes"],
  },
  {
    id: "engineer",
    numeral: "iii",
    title: "Engineer",
    description:
      "Build it like it has to last a decade. Clean architecture, motion choreography, accessibility baked in — no afterthoughts.",
    keywords: ["Architecture", "Motion", "A11y"],
  },
  {
    id: "refine",
    numeral: "iv",
    title: "Refine",
    description:
      "Ship, then sharpen. Usability, performance, polish — until the product feels expensive without saying a word.",
    keywords: ["Testing", "Performance", "Polish"],
  },
];
