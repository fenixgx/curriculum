"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { honestAnswers } from "@/data/answers";

export default function HonestAnswers() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm uppercase text-[var(--color-accent)]">
            Straight Answers
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            The questions worth answering upfront.
          </h2>
          <p className="mx-auto max-w-xl text-[var(--color-text-secondary)]">
            I prefer a precise story over a polished fantasy. These are the
            questions I would rather answer clearly before an interview gets
            vague.
          </p>
        </motion.div>

        <div className="space-y-3">
          {honestAnswers.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--color-surface-hover)]"
              >
                <span className="text-sm font-medium text-[var(--color-text-primary)]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-t border-[var(--color-border)] px-5 py-4">
                      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
