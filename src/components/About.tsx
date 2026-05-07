"use client";

import { motion } from "framer-motion";

const strengths = [
  "I can turn vague operational problems into product requirements, data models, workflows, and usable interfaces.",
  "I build with AI every day, but I do not treat it as magic. I wrap it in process, logs, specs, validation, and backups.",
  "I know what it means to own delivery: clients, deadlines, employees, invoices, support, and production systems.",
];

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[320px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-sm uppercase text-[var(--color-accent)]">
            Profile
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Not a bootcamp story. A systems, product, and delivery story.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-5 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            <p>
              I started in technology as a network administrator, then became
              responsible for systems in a betting company where uptime,
              reliability, and operational discipline mattered. That foundation
              stayed with me.
            </p>

            <p>
              Later I founded Roka Creativa and spent 15 years leading a
              10-person company that delivered websites, branding, print,
              signage, and digital projects. It was not only design work; it was
              sales, delivery, client communication, support, production, and
              making sure the final result worked for people who had no patience
              for technical excuses.
            </p>

            <p>
              When modern AI tooling became good enough, I returned to software
              seriously and started building full-stack products around the same
              principle: useful systems, not demos. I am looking for a team
              where I can bring product instinct, AI development workflow,
              practical engineering, and the hunger to keep learning from
              stronger builders.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {strengths.map((item) => (
              <div
                key={item}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm leading-relaxed text-[var(--color-text-secondary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
