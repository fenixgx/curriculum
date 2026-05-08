export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    period: "Present",
    title: "Full-Stack AI Developer & Product Builder",
    company: "Independent",
    description:
      "Returned to software development with modern AI tools and built multiple full-stack products from scratch. My work combines product thinking, business context, AI integration, and pragmatic engineering.",
    highlights: [
      "Built IAMenu, a live SaaS platform with 7 production AI features",
      "Created Nexus, an MCP server for persistent AI development context",
      "Built Taski, an AI-first productivity app with 51 tool-calling functions",
      "Built MYAIBS, a visual CMS for events and business landings",
      "Designed a SPEC workflow used across 155+ project specifications",
    ],
  },
  {
    period: "2005 - 2020",
    title: "Founder & Director",
    company: "Roka Creativa",
    description:
      "Founded and ran a graphic arts company for 15 years. We delivered print, signage, branding, websites, and digital projects for hundreds of businesses while managing sales, operations, delivery, and client support.",
    highlights: [
      "Led a small production team",
      "Worked directly with hundreds of real businesses",
      "Built long-term client relationships across service, retail, events, and local commerce",
      "Managed sales, delivery, client communication, operations, and quality",
      "Learned how non-technical businesses actually make decisions",
    ],
  },
  {
    period: "2000 - 2005",
    title: "Network Administrator -> Systems Manager",
    company: "American Betting Company",
    description:
      "Started in network administration and grew into systems responsibility in a fast-paced betting environment where uptime, security, and operational discipline mattered.",
    highlights: [
      "Network administration and infrastructure support",
      "Systems reliability in a real-time operational environment",
      "Early professional foundation in technology and production responsibility",
    ],
  },
];
