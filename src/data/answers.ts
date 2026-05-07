export interface HonestAnswer {
  question: string;
  answer: string;
}

export const honestAnswers: HonestAnswer[] = [
  {
    question: "How many real users does IAMenu have?",
    answer:
      "IAMenu is new. It launched recently and has 40+ trial users from more than 10 countries. I am not claiming paid traction yet; the first users are still in trial. The useful signal is that SEO is already bringing real people to the product.",
  },
  {
    question: "If you build your own products, why look for a job?",
    answer:
      "Because I want to work with a team, contribute what I have learned, and keep improving. AI development is moving fast, and I do not want to grow only inside my own bubble. Long term I want my products to stand on their own, but right now I want to build with stronger people around me.",
  },
  {
    question: "Did you build all these products alone?",
    answer:
      "The recent AI products, yes. That means I had to handle product decisions, frontend, backend, database, AI flows, deployment, and support. But I am not a person who needs to work alone: before this I ran Roka Creativa with a small production team and worked in teams earlier in my IT career.",
  },
  {
    question: "Are these products really live, or are they experiments?",
    answer:
      "IAMenu is live and has real users. MYAIBS had real clients but is paused because the target is more specific and I chose to focus on IAMenu. Taski is in active development. Nexus is internal infrastructure for my own workflow, not a public product.",
  },
  {
    question: "What is Nexus, and does anyone else use it?",
    answer:
      "Nexus is my personal MCP server for persistent AI development context. It stores memories, code intelligence, SPECs, logs, and project knowledge so AI sessions do not start from zero every time. Nobody else uses it and I am not selling it; I built it because I needed that workflow myself.",
  },
  {
    question: "Can you work with legacy code?",
    answer:
      "Yes. If something works in production, I do not touch it for ego. I follow the team lead, make the smallest useful change, preserve behavior, and only refactor when there is a real reason. Production code should be changed surgically.",
  },
  {
    question: "What happens when AI cannot solve something cleanly?",
    answer:
      "Then I slow down. I read the code, test smaller pieces, ask better questions, and avoid risky changes until I understand the system. I use AI heavily, but I do not pretend it is magic. My strength is building with AI in a structured way: SPECs, context, logs, verification, and backups.",
  },
  {
    question: "Have you contributed to open source?",
    answer:
      "Not meaningfully yet. Most of my work has been private products and client/business work. I do understand the basic GitHub workflow: branches, pull requests, reviews, and merges. I expect to improve that muscle more inside a professional team.",
  },
  {
    question: "What is your English level?",
    answer:
      "My reading and writing are strong, especially for technical work. Spoken English is functional for technical conversations, but not polished yet. I am honest about that and improving it every day.",
  },
];
