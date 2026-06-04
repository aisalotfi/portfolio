export interface StackLayer {
  id: string;
  layer: string;       // e.g. "Interface"
  caption: string;     // e.g. "Pixels"
  description: string;
  technologies: string[];
  metric: string;
  metricLabel: string;
}

/**
 * Top → bottom: closest to the user → closest to the data.
 * Each layer is rendered at progressively richer amethyst saturation.
 */
export const stackLayers: StackLayer[] = [
  {
    id: "interface",
    layer: "Interface",
    caption: "Pixels",
    description:
      "The surface the user actually feels — typography, motion, micro-interactions, accessibility.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    metric: "60fps",
    metricLabel: "Sustained",
  },
  {
    id: "edge",
    layer: "Edge",
    caption: "Delivery",
    description:
      "Streaming, caching, and personalisation as close to the user as physics allows.",
    technologies: ["Vercel Edge", "Middleware", "ISR", "Streaming SSR"],
    metric: "<100ms",
    metricLabel: "TTFB p75",
  },
  {
    id: "api",
    layer: "API",
    caption: "Contract",
    description:
      "Type-safe service layer — REST and GraphQL designed for resilience and developer joy.",
    technologies: ["Node.js", "tRPC", "GraphQL", "REST", "Zod"],
    metric: "100%",
    metricLabel: "Type coverage",
  },
  {
    id: "data",
    layer: "Data",
    caption: "Schema",
    description:
      "Relational and document stores modelled for the question, not the convenience.",
    technologies: ["PostgreSQL", "Prisma", "Redis", "S3"],
    metric: "<50ms",
    metricLabel: "Query p95",
  },
];
