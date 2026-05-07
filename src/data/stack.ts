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
