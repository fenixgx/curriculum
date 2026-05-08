"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-sm uppercase text-[var(--color-accent)]">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Let&apos;s talk like builders.
          </h2>
          <p className="mb-10 text-[var(--color-text-secondary)]">
            Open to remote full-time roles, founding engineer conversations,
            AI product work, and contract projects where shipping matters.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:r.giannotti@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              <Mail className="h-4 w-4" />
              r.giannotti@gmail.com
            </a>
            <a
              href="https://wa.me/34605377796?text=Hi%20Rodolfo%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <IconBrandWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://github.com/fenixgx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <IconBrandGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rodolfo-giannotti-946261409"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <IconBrandLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="border-t border-[var(--color-border)] pt-8">
            <p className="text-xs text-[var(--color-text-muted)]">
              This page is built with the same stack I use in my products:
              Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
