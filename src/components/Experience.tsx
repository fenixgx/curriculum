"use client";

/**
 * 🧭 BREADCRUMB: Experience Timeline
 * 📍 LOCATION: src/components/Experience.tsx
 *
 * 🎯 WHY IT EXISTS: Presents Rodolfo's career as three coherent stages instead of a confusing non-linear CV.
 * 🎯 USE CASES:
 *   - Shows current AI/full-stack work.
 *   - Shows Roka Creativa as long-term business ownership.
 *   - Shows early IT/embassy/gaming operations background as real technical foundation.
 *
 * 🔄 FLOW: experience data -> alternating timeline -> career narrative
 * 🔗 USED BY: src/app/page.tsx
 * ⚠️ DEPENDS ON: src/data/experience.ts, framer-motion
 *
 * 🚨 CAREFUL: Website timeline is intentionally condensed; LinkedIn can carry more granular job history.
 * 📊 PERFORMANCE: Static data render with viewport animations.
 *
 * 💾 MEMORIES: Public-safe SPEC context only; no private memory IDs.
 * 🐛 KNOWN BUGS: None known.
 * 📋 SPEC: SPEC-001-curriculum-portfolio-landing
 */
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[var(--color-border)] px-6 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm uppercase text-[var(--color-accent)]">
            Experience
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            A non-linear path, but a useful one.
          </h2>
          <p className="mx-auto max-w-xl text-[var(--color-text-secondary)]">
            Systems, business ownership, client work, and AI product building.
            That mix is the point.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--color-border)] md:left-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative mb-12 pl-20 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pl-0 md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute top-1 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] ${
                  index % 2 === 0
                    ? "left-[26px] md:left-auto md:-right-[7px]"
                    : "left-[26px] md:-left-[7px]"
                }`}
              />

              <p className="mb-2 font-mono text-sm text-[var(--color-accent)]">
                {exp.period}
              </p>
              <h3 className="mb-1 text-lg font-semibold">{exp.title}</h3>
              <p className="mb-3 text-sm font-medium text-[var(--color-text-muted)]">
                {exp.company}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {exp.description}
              </p>
              <ul
                className={`space-y-1.5 ${
                  index % 2 === 0 ? "md:ml-auto" : ""
                }`}
              >
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className={`flex items-start gap-2 text-xs text-[var(--color-text-muted)] ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {index % 2 === 0 ? (
                      <>
                        {highlight}
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      </>
                    ) : (
                      <>
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {highlight}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
