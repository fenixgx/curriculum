"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, MapPin } from "lucide-react";

const facts = [
  ["Location", "Tenerife / Scotland temporarily"],
  ["English", "B2 - strong written, functional spoken"],
  ["Open to", "Remote full-stack / AI product roles"],
  ["Background", "23 years in tech, 15 running a business"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] px-6 py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_360px] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            Full-Stack AI Developer
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-6xl">
            I build real AI products, and I understand the businesses behind
            them.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            I am Rodolfo Giannotti. Before returning to code, I spent 15 years
            running a creative agency and working with restaurants, hotels, and
            local businesses. Now I build full-stack AI products with the same
            obsession: solve the real problem, not the imaginary one.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#selected-work"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              See Selected Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="mailto:r.giannotti@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-3 text-sm font-semibold transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Mail className="h-4 w-4" />
              r.giannotti@gmail.com
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <MapPin className="h-4 w-4" />
            Based between Spain and the UK. Remote preferred.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
        >
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/rodolfo-profile.png"
              alt="Rodolfo Giannotti"
              width={80}
              height={80}
              priority
              className="h-20 w-20 shrink-0 rounded-full border border-[var(--color-accent)]/50 object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Rodolfo Giannotti</p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Full-Stack AI Developer
              </p>
            </div>
          </div>

          <dl className="space-y-4">
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="border-t border-[var(--color-border)] pt-4"
              >
                <dt className="font-mono text-xs uppercase text-[var(--color-text-muted)]">
                  {label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
