/**
 * 🧭 BREADCRUMB: Experience Timeline Data
 * 📍 LOCATION: src/data/experience.ts
 *
 * 🎯 WHY IT EXISTS: Keeps career history factual, concise, and aligned with LinkedIn without overcrowding the landing page.
 * 🎯 USE CASES:
 *   - Experience.tsx renders the non-linear career story.
 *   - Copy can be audited for truthfulness before public changes.
 *
 * 🔄 FLOW: career entries -> Experience.tsx -> visual timeline
 * 🔗 USED BY: src/components/Experience.tsx
 * ⚠️ DEPENDS ON: Rodolfo's verified career history and LinkedIn positioning
 *
 * 🚨 CAREFUL: Do not split into too many roles on the website; LinkedIn carries granular job history.
 * 📊 PERFORMANCE: Static data only.
 *
 * 💾 MEMORIES: Public-safe SPEC context only; no private memory IDs.
 * 🐛 KNOWN BUGS: None known.
 * 📋 SPEC: SPEC-001-curriculum-portfolio-landing
 */
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
    company: "Embassy & Betting / Gaming Operations",
    description:
      "Built my early IT foundation in stable, trust-based environments, including embassy/government-office support and betting/gaming operations. The work covered local-office infrastructure, internal systems, servers, user accounts, connectivity, backups, and day-to-day technical support.",
    highlights: [
      "Worked in environments where reliability, discretion, and practical support mattered",
      "Managed local office IT infrastructure, internal networks, workstations, shared resources, and technical support",
      "Helped maintain locally hosted software systems and internal web services before cloud hosting became the default approach",
      "Supported on-premise servers, local applications, connectivity, user access, and operational reliability",
      "Built an early foundation in infrastructure, troubleshooting, system reliability, and practical IT operations",
    ],
  },
];
