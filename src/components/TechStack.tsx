"use client";

/**
 * 🧭 BREADCRUMB: Technical Stack Grid
 * 📍 LOCATION: src/components/TechStack.tsx
 *
 * 🎯 WHY IT EXISTS: Shows the tools Rodolfo actually uses across frontend, backend, AI, automation, and deployment.
 * 🎯 USE CASES:
 *   - Lets recruiters scan technologies quickly.
 *   - Supports the broader claim of end-to-end product execution.
 *
 * 🔄 FLOW: techStack data -> category cards -> stack overview
 * 🔗 USED BY: src/app/page.tsx
 * ⚠️ DEPENDS ON: src/data/stack.ts, framer-motion
 *
 * 🚨 CAREFUL: Keep stack items tied to real usage; do not add buzzwords just for keyword stuffing.
 * 📊 PERFORMANCE: Static badge grid; no dynamic cost.
 *
 * 💾 MEMORIES: Public-safe SPEC context only; no private memory IDs.
 * 🐛 KNOWN BUGS: None known.
 * 📋 SPEC: SPEC-001-curriculum-portfolio-landing
 */
import { motion } from "framer-motion";
import { techStack } from "@/data/stack";

export default function TechStack() {
  return (
    <section className="border-b border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm uppercase text-[var(--color-accent)]">
            Tech Stack
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            The stack I use to ship.
          </h2>
          <p className="mx-auto max-w-xl text-[var(--color-text-secondary)]">
            Modern stack, production-tested. The same tools I use to build my
            own products.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--color-accent)] uppercase">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 font-mono text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text-primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
