export interface HonestAnswer {
  question: string;
  answer: string;
}

export const honestAnswers: HonestAnswer[] = [
  {
    question: "How real are these products?",
    answer:
      "IAMenu is live and being tested by real users. It is still early-stage, so I do not present it as a mature business or proven revenue engine. The important proof is that it is a working SaaS product: public pages, dashboard, database, AI workflows, billing logic, deployment, and real product constraints.",
  },
  {
    question: "Did you build everything alone?",
    answer:
      "The recent AI products were built independently. That means I handled product decisions, frontend, backend, database, AI workflows, deployment, and support. Before this, I ran Roka Creativa with a small production team and worked in IT environments, so I am used to coordination, deadlines, and operational pressure.",
  },
  {
    question: "If you build your own products, why look for a job?",
    answer:
      "Because building alone has limits. I want to work with a strong team, contribute what I have learned, and improve faster around better engineers and product people. Long term, I still believe in my own products, but right now I want to build inside a serious team and take on larger challenges.",
  },
  {
    question: "What is your strongest technical proof?",
    answer:
      "My strongest proof is not one isolated feature. It is the ability to ship complete systems end to end: database schema, APIs, UI, authentication, payments, AI workflows, automation, deployment, and product logic. IAMenu, Taski, and Nexus show different parts of that same ability.",
  },
  {
    question: "What is Nexus?",
    answer:
      "Nexus is my internal MCP-based system for AI-assisted development. It stores project memory, previous decisions, errors, code context, SPECs, and implementation notes so AI sessions do not start from zero every time. It is not a public product; it is infrastructure I built because I needed a more reliable AI development workflow.",
  },
  {
    question: "Can you work with legacy or existing codebases?",
    answer:
      "Yes. If something works in production, I do not touch it for ego. I first understand the current behavior, team conventions, business risk, and deployment process. If a change is needed, I prefer small, surgical improvements over risky rewrites.",
  },
  {
    question: "What happens when AI is not enough?",
    answer:
      "Then I slow down. I read the code, reduce the problem, test smaller pieces, check logs, and avoid risky changes until I understand the system. I use AI as leverage, not as a replacement for engineering responsibility. My workflow is built around SPECs, context, verification, and backups.",
  },
];
