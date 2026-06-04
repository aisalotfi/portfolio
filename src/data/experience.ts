export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Lead Frontend Architect",
    company: "Stripe Studios",
    period: "2024 — Present",
    description:
      "Architecting the next generation of interactive financial experiences. Leading frontend strategy across three product lines.",
    highlights: [
      "Designed and shipped a motion-first design system",
      "Reduced bundle size by 45% through code splitting",
      "Mentored a team of 8 frontend engineers",
    ],
  },
  {
    id: "exp-2",
    role: "Senior Product Engineer",
    company: "Vercel",
    period: "2022 — 2024",
    description:
      "Built and optimized core platform experiences used by millions of developers worldwide.",
    highlights: [
      "Led the redesign of the deployment dashboard",
      "Built real-time collaboration features",
      "Contributed to open-source Next.js ecosystem",
    ],
  },
  {
    id: "exp-3",
    role: "Creative Technologist",
    company: "IDEO",
    period: "2020 — 2022",
    description:
      "Bridged the gap between design thinking and technical execution on high-impact client projects.",
    highlights: [
      "Delivered 15+ client projects across industries",
      "Developed rapid prototyping frameworks",
      "Won internal innovation award for tooling",
    ],
  },
  {
    id: "exp-4",
    role: "UI/UX Engineer",
    company: "Airbnb",
    period: "2018 — 2020",
    description:
      "Crafted premium user experiences for the global hospitality platform.",
    highlights: [
      "Redesigned the host onboarding flow",
      "Improved accessibility score by 35 points",
      "Shipped internationalization framework",
    ],
  },
  {
    id: "exp-5",
    role: "Frontend Developer",
    company: "Apple",
    period: "2016 — 2018",
    description:
      "Contributed to premium web experiences for Apple's product ecosystem.",
    highlights: [
      "Built interactive product detail pages",
      "Developed animation frameworks for marketing",
      "Achieved 98% Lighthouse performance score",
    ],
  },
];

export const designPhilosophy = {
  title: "Crafting Digital Experiences That Resonate",
  paragraphs: [
    "I believe exceptional digital products are born at the intersection of engineering precision and design intuition. Every pixel, every animation, every interaction must serve a purpose — guiding users toward clarity, delight, and meaning.",
    "My approach combines architectural thinking with artistic sensibility. I don't just build interfaces; I choreograph experiences that feel inevitable, intuitive, and emotionally resonant. The best design is invisible — it dissolves into the experience, leaving only the feeling of something beautifully inevitable.",
    "I obsess over the details that most people never consciously notice — the curve of a spring animation, the rhythm of a compositional system, the weight of a typographic hierarchy. These invisible decisions create experiences that feel expensive, intentional, and deeply human.",
  ],
  disciplines: [
    "Product Design",
    "Frontend Architecture",
    "Interaction Design",
    "Motion Systems",
    "Design Systems",
    "UX Strategy",
    "Fullstack Engineering",
    "Creative Direction",
  ],
};
