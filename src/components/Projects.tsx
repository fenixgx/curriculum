"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Lock } from "lucide-react";
import { projects, type Project } from "@/data/projects";

function ProjectCase({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8"
    >
      <div className="mb-6 flex flex-col gap-3 border-b border-[var(--color-border)] pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${project.statusColor}`}
            >
              {project.status}
            </span>
          </div>
          <p className="text-sm font-medium text-[var(--color-accent)]">
            {project.tagline}
          </p>
        </div>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            View live
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
            <Lock className="h-3.5 w-3.5" />
            Demo on request
          </span>
        )}
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_240px]">
        <figure className="border border-[var(--color-border)] bg-[var(--color-bg)] p-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.visuals[0].src}
              alt={project.visuals[0].alt}
              fill
              sizes="(min-width: 1024px) 680px, 100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="border-t border-[var(--color-border)] px-2 py-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
            {project.visuals[0].caption}
          </figcaption>
        </figure>

        {project.visuals[1] ? (
          <figure className="hidden border border-[var(--color-border)] bg-[var(--color-bg)] p-2 md:block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.visuals[1].src}
                alt={project.visuals[1].alt}
                fill
                sizes="240px"
                className="object-contain"
              />
            </div>
            <figcaption className="border-t border-[var(--color-border)] px-2 py-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
              {project.visuals[1].caption}
            </figcaption>
          </figure>
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-5">
          <div>
            <p className="mb-1 font-mono text-xs uppercase text-[var(--color-text-muted)]">
              Problem
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs uppercase text-[var(--color-text-muted)]">
              What I built
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.built}
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs uppercase text-[var(--color-text-muted)]">
              My role
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.role}
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs uppercase text-[var(--color-text-muted)]">
              Technical challenge
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.challenge}
            </p>
          </div>
        </div>

        <aside className="space-y-5">
          <div>
            <p className="mb-3 font-mono text-xs uppercase text-[var(--color-text-muted)]">
              Evidence
            </p>
            <ul className="space-y-2">
              {project.features.slice(0, 5).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-xs leading-relaxed text-[var(--color-text-secondary)]"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-1 font-mono text-xs text-[var(--color-text-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="selected-work"
      className="border-b border-[var(--color-border)] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-6 md:grid-cols-[320px_1fr]"
        >
          <div>
            <p className="mb-3 font-mono text-sm uppercase text-[var(--color-accent)]">
              Selected Work
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Products as evidence, not decoration.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            These are not tutorial projects. They are the systems I built to
            solve problems I understood from business, operations, and my own
            development workflow.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCase key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
