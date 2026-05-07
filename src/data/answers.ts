export interface HonestAnswer {
  question: string;
  answer: string;
}

export const honestAnswers: HonestAnswer[] = [
  {
    question: "Why look for a team if you already build your own products?",
    answer:
      "Because building alone teaches independence, but it also limits your speed. I want to contribute what I know about AI product development, learn from stronger engineers, and build inside a team that moves with discipline.",
  },
  {
    question: "Did you build all of this alone?",
    answer:
      "The recent products, yes. But I also ran Roka Creativa for 15 years with a team of 10. I know deadlines, clients, feedback, responsibility, and working with people. I am not attached to being the solo guy.",
  },
  {
    question: "Are these production products or experiments?",
    answer:
      "IAMenu is live with real users. MYAIBS has had real clients but is paused. Taski is in active development. Nexus is internal infrastructure. I am careful about wording because I would rather be precise than inflate the story.",
  },
  {
    question: "What happens when AI-generated code gets complex?",
    answer:
      "I treat it like any complex code: read it, test it, document the why, and change it surgically. Nexus and the SPEC system exist because I do not trust memory alone, human or AI.",
  },
  {
    question: "Can you work with legacy code?",
    answer:
      "Yes. If it works in production, I do not touch it for ego. I make the smallest useful change, preserve behavior, and only refactor when the business or the team actually benefits.",
  },
  {
    question: "What is your English level?",
    answer:
      "B2. I understand technical meetings well and write technical documentation comfortably. Speaking is clear, with an accent. I am improving it every day.",
  },
];
