"use client";

import { motion } from "framer-motion";
import { MessageSquareCode } from "lucide-react";

export default function TryBeforeYouHire() {
  return (
    <section className="border-b border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border border-[var(--color-accent)]/30 bg-[var(--color-surface)] p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-5 inline-flex bg-[var(--color-accent-subtle)] p-3">
                <MessageSquareCode className="h-6 w-6 text-[var(--color-accent)]" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                Want to see how I think before committing?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
                Send me a small real requirement, a code review exercise, or a
                technical conversation topic. I will show how I break it down,
                what risks I see, and how I would move it safely.
              </p>
            </div>

            <a
              href="mailto:r.giannotti@gmail.com?subject=Small%20technical%20task%20or%20conversation"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Start the conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
