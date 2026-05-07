export interface Project {
  name: string;
  slug: string;
  status: "LIVE" | "PAUSED" | "IN DEV" | "INTERNAL";
  statusColor: string;
  tagline: string;
  problem: string;
  built: string;
  role: string;
  challenge: string;
  features: string[];
  stack: string[];
  url: string | null;
  visuals: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export const projects: Project[] = [
  {
    name: "IAMenu",
    slug: "iamenu",
    status: "LIVE",
    statusColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    tagline: "AI-powered digital menu platform for restaurants",
    problem:
      "Restaurants need digital menus that are easy to manage, multilingual, visual, and compliant without turning every update into agency work.",
    built:
      "A multi-tenant SaaS for QR menus with billing, dashboards, public menus, AI translation, allergen detection, image generation, and a conversational assistant for menu operations.",
    role:
      "Solo founder/developer: product, architecture, database, frontend, backend, AI flows, billing, deployment, and support.",
    challenge:
      "The hardest part was making a 3-level menu hierarchy work cleanly with drag-and-drop: categories, subcategories, products inside both, and loose products.",
    features: [
      "7 AI features in production",
      "40+ users across 10 countries in the first month",
      "29-language auto-translation",
      "14 EU allergen detection",
      "DALL-E / GPT Image generation",
      "Conversational assistant with 79 functions",
      "Stripe billing + multi-tenant architecture",
      "n8n growth workflows for leads, email, replies, churn, and Telegram reports",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma 7",
      "Supabase",
      "OpenAI",
      "Stripe",
      "n8n",
    ],
    url: "https://iamenu.ai",
    visuals: [
      {
        src: "/iamenu/dashboard_iamenu.png",
        alt: "IAMenu dashboard with menu hierarchy, drag and drop controls, translations, and product rows",
        caption: "Dashboard: hierarchy, products, translations, allergens, and DnD in one operational view.",
      },
      {
        src: "/iamenu/edit_product_iamenu.png",
        alt: "IAMenu product editor with translation and AI image assistant",
        caption: "Product editor: translation flow, AI generation, image gallery, allergens, and tags.",
      },
    ],
  },
  {
    name: "MYAIBS",
    slug: "myaibs",
    status: "PAUSED",
    statusColor: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    tagline: "Visual CMS for events and business landings",
    problem:
      "Small businesses and event organizers need landing pages fast, but most builders become rigid when events have dates, locations, RSVPs, products, and custom domains.",
    built:
      "A CMS and visual builder for event pages and business landings with page blocks, public routes, RSVP/confirmation flows, media handling, and custom-domain support.",
    role:
      "Designed and built the product end to end, then paused it deliberately to focus on IAMenu.",
    challenge:
      "Balancing a flexible page builder with real event/business data models without turning every landing into a custom one-off.",
    features: [
      "Visual page builder with drag-and-drop",
      "AI content generation",
      "Custom domain support",
      "Multi-occurrence events",
      "RSVP and confirmation system",
      "Product catalog with Stripe checkout",
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma 7", "Supabase", "OpenAI", "Sharp"],
    url: "https://myaibs.com/es",
    visuals: [
      {
        src: "/myaibs/ladincreator.png",
        alt: "MYAIBS landing creator wizard with page configuration and preview panel",
        caption: "Landing creator: structured wizard with live configuration preview.",
      },
      {
        src: "/myaibs/dashboard_myaibs.png",
        alt: "MYAIBS dashboard with page creation options and navigation",
        caption: "Dashboard: event and landing creation from a single control panel.",
      },
    ],
  },
  {
    name: "Taski",
    slug: "taski",
    status: "IN DEV",
    statusColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    tagline: "AI-first personal productivity manager",
    problem:
      "I used task apps for years and kept hitting the same wall: they store tasks, but they do not really help manage attention, context, calendar pressure, or follow-up.",
    built:
      "A chat-first productivity manager with tasks, projects, Kanban, calendar sync, Telegram notifications, voice input, and 51 AI tools exposed through function calling.",
    role:
      "Product designer and full-stack developer, reusing patterns learned from IAMenu's assistant architecture.",
    challenge:
      "Letting AI act on real user data safely while keeping manual UI control available at every step.",
    features: [
      "51 AI tools via function calling",
      "Chat-first interface",
      "Multi-provider AI (OpenAI, Anthropic)",
      "Proactive notifications through Telegram",
      "Google Calendar sync",
      "Kanban board with drag-and-drop",
      "MCP server for IDE integration",
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma 7", "Supabase", "OpenAI", "Telegram"],
    url: "https://taski-lilac.vercel.app",
    visuals: [
      {
        src: "/taski/vistad_desktop1.png",
        alt: "Taski desktop view with AI chat, project sidebar, and Kanban board",
        caption: "Desktop: chat-first AI actions beside the task board they update.",
      },
      {
        src: "/taski/movil1.png",
        alt: "Taski mobile chat interface with AI-created tasks",
        caption: "Mobile: the same AI workflow compressed into a phone-first interface.",
      },
    ],
  },
  {
    name: "Nexus",
    slug: "nexus",
    status: "INTERNAL",
    statusColor: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    tagline: "Persistent context infrastructure for AI development",
    problem:
      "AI coding sessions forget decisions, previous fixes, architecture rules, and what was already tried. That wastes time and creates repeated mistakes.",
    built:
      "A personal MCP server with persistent memory, code intelligence, API discovery, SPEC tracking, dev logs, validation helpers, and multi-project workspace orchestration.",
    role:
      "Built it for my own workflow and use it as the operating system behind my AI-assisted development.",
    challenge:
      "Making context retrieval useful in seconds: project structure, hot files, memories, specs, APIs, and warnings all need to work together.",
    features: [
      "1,600+ persistent memories",
      "Code intelligence and hot-file analysis",
      "API endpoint discovery",
      "155+ SPECs across projects",
      "Multi-project workspace orchestration",
      "7-layer search strategy",
    ],
    stack: ["Node.js", "Supabase", "pgvector", "OpenAI", "Express", "Chokidar"],
    url: null,
    visuals: [
      {
        src: "/nexus/cmd_CQyHzKzLhq.png",
        alt: "Nexus console logs showing memory sync, tags, CodeIntel, and project watcher activity",
        caption: "Nexus running: memory sync, tags, CodeIntel, file watching, and AI analysis.",
      },
      {
        src: "/nexus/cmd_lM3b5AFMHh.png",
        alt: "Nexus console startup logs for workspace switching and SPEC watcher",
        caption: "Workspace boot: switch, scan, API intelligence, and SPEC watcher setup.",
      },
    ],
  },
];
