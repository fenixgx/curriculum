/**
 * 🧭 BREADCRUMB: Technical Stack Data
 * 📍 LOCATION: src/data/stack.ts
 *
 * 🎯 WHY IT EXISTS: Defines the public stack categories shown in the portfolio.
 * 🎯 USE CASES:
 *   - TechStack.tsx renders a scannable skill grid.
 *   - Stack claims stay tied to real product/project usage.
 *
 * 🔄 FLOW: stack categories -> TechStack.tsx -> visual badges
 * 🔗 USED BY: src/components/TechStack.tsx
 * ⚠️ DEPENDS ON: Rodolfo's current tools and project experience
 *
 * 🚨 CAREFUL: Avoid keyword stuffing; every item should be defensible in an interview.
 * 📊 PERFORMANCE: Static data only.
 *
 * 💾 MEMORIES: Public-safe SPEC context only; no private memory IDs.
 * 🐛 KNOWN BUGS: None known.
 * 📋 SPEC: SPEC-001-curriculum-portfolio-landing
 */
export interface StackCategory {
  category: string;
  items: string[];
}

export const techStack: StackCategory[] = [
  {
    category: "Frontend",
    items: [
      "Next.js 16",
      "React 19",
      "TypeScript 6",
      "Tailwind CSS 4",
      "Framer Motion",
      "Mantine 8",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Prisma 7",
      "Zod 4",
      "Express",
      "Server-Sent Events",
      "REST APIs",
    ],
  },
  {
    category: "Database & Auth",
    items: [
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "Supabase Auth",
      "Supabase Storage",
      "RLS Policies",
    ],
  },
  {
    category: "AI & ML",
    items: [
      "OpenAI SDK 6",
      "Anthropic SDK",
      "Function Calling",
      "Embeddings",
      "DALL-E / GPT Image",
      "Whisper STT",
    ],
  },
  {
    category: "Automation & Services",
    items: [
      "n8n Automation",
      "Resend (Email)",
      "Telegram Bot API",
      "Google Maps scraping",
      "Webhooks",
      "Workflow monitoring",
    ],
  },
  {
    category: "Payments & Integrations",
    items: [
      "Stripe 20",
      "Google Calendar API",
      "Sentry",
      "API integrations",
      "Email tracking",
      "Production alerts",
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Vercel",
      "Git / GitHub",
      "Claude Code",
      "OpenCode",
      "ESLint",
      "Playwright",
    ],
  },
];
