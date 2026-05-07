"use client";

import { motion } from "framer-motion";
import { Brain, FileText, Search, ShieldCheck } from "lucide-react";

const workflow = [
  {
    icon: FileText,
    title: "SPEC before chaos",
    text: "Every serious change starts with a living spec: problem, requirements, tasks, and a LIFO work log. It keeps humans and AI aligned.",
  },
  {
    icon: Search,
    title: "Context retrieval",
    text: "Nexus indexes memories, hot files, APIs, code structure, and previous decisions so a new AI session can recover context fast.",
  },
  {
    icon: ShieldCheck,
    title: "Verification loop",
    text: "I do not call something done because it compiles. I verify, fix, verify again, and document what is still pending.",
  },
];

export default function HowIWorkWithAI() {
  return (
    <section className="border-b border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-sm uppercase text-[var(--color-accent)]">
            AI Workflow
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            I got tired of AI forgetting everything, so I built the memory
            around it.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            I use Claude Code, OpenCode, Kiro, Zed, Warp, Obsidian and other AI
            tools daily. The difference is that I also built the process and
            infrastructure around them: Nexus, SPECs, logs, validation, and a
            habit of leaving context for the next session.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-[var(--color-accent-subtle)] p-3">
                <Brain className="h-5 w-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="font-semibold">Nexus</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  My personal MCP server for persistent AI context
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              It stores solutions, mistakes, architecture decisions, SPECs, code
              maps, hot files, API routes, and project context. It is internal,
              not a product I am selling. It exists because context loss was
              slowing me down, so I fixed the workflow.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["1,600+ memories", "155+ specs", "<10ms memory search"].map(
                (metric) => (
                  <div
                    key={metric}
                    className="border border-[var(--color-border)] bg-[var(--color-bg)] p-3 font-mono text-xs text-[var(--color-text-secondary)]"
                  >
                    {metric}
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {workflow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <item.icon className="mb-4 h-5 w-5 text-[var(--color-accent)]" />
                <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
