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
      "Building AI-first SaaS and internal tools from product idea to deployment. My work combines Next.js, Prisma, Supabase, OpenAI, Stripe, n8n automation, UX decisions, API design, and operational support.",
    highlights: [
      "Designed and built IAMenu, a live SaaS product using Next.js, React, TypeScript, Prisma, PostgreSQL, Supabase, Stripe, OpenAI, and Vercel",
      "Implemented AI features including menu translation, allergen detection, AI-generated descriptions, image generation, and conversational CRUD workflows",
      "Built admin tools, subscription limits, analytics, public menu views, PDF generation, QR tools, and restaurant configuration systems",
      "Created Nexus, an MCP server for persistent AI development context, code intelligence, SPEC tracking, logs, validation, and project recovery",
      "Used n8n automation for scraping, email pipelines, reply classification, churn alerts, Telegram reporting, and product growth operations",
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
    company: "Betting / Gaming Operations",
    description:
      "Worked in IT systems and network administration for betting/gaming operations, from local-office infrastructure to internal systems, servers, user accounts, connectivity, backups, and day-to-day technical support.",
    highlights: [
      "Managed local office IT infrastructure, internal networks, workstations, shared resources, and technical support",
      "Helped maintain locally hosted software systems and internal web services before cloud hosting became the default approach",
      "Supported on-premise servers, local applications, connectivity, user access, and operational reliability",
      "Built an early foundation in infrastructure, troubleshooting, system reliability, and practical IT operations",
    ],
  },
];
