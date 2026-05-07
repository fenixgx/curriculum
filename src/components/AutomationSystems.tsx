"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Bot,
  Database,
  Mail,
  MapPinned,
  Server,
  Workflow,
} from "lucide-react";

const workflows = [
  {
    icon: MapPinned,
    title: "Lead sourcing",
    text: "Google Maps lead hunter by country, city, rating, reviews, website, phone, and business type.",
  },
  {
    icon: Mail,
    title: "Email operations",
    text: "Cold email flows, retry handling, Resend delivery, templates, and status updates back into IAMenu.",
  },
  {
    icon: Bot,
    title: "AI classification",
    text: "GPT-assisted reply detection for interested, not interested, unsubscribe, and urgent hot-lead signals.",
  },
  {
    icon: Bell,
    title: "Operational alerts",
    text: "Telegram reports for lead batches, email results, churn alerts, and replies that need human attention.",
  },
];

const pipeline = [
  "Google Maps",
  "n8n",
  "IAMenu API",
  "Supabase",
  "Resend",
  "Telegram",
];

export default function AutomationSystems() {
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
            Automation & Growth
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            I also build the workflows around the product.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            For IAMenu I designed and tested n8n automation pipelines for lead
            generation, email enrichment, cold outreach, GPT reply
            classification, churn alerts, Telegram reporting, and Supabase/API
            webhooks. I am careful with the wording: these systems are built and
            tested, not presented as massive production traction.
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
            <div className="mb-5 flex items-center gap-3">
              <div className="bg-[var(--color-accent-subtle)] p-3">
                <Workflow className="h-5 w-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="font-semibold">IAMenu automation pipeline</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  n8n on Oracle/Easypanel connected to real product APIs
                </p>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-6">
              {pipeline.map((step, index) => (
                <div
                  key={step}
                  className="relative border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-center font-mono text-[11px] text-[var(--color-text-secondary)]"
                >
                  {step}
                  {index < pipeline.length - 1 && (
                    <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-[var(--color-accent)] sm:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["11", "workflow set"],
                ["6+", "countries mapped"],
                ["SPEC", "documented system"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border border-[var(--color-border)] bg-[var(--color-bg)] p-4"
                >
                  <p className="font-mono text-lg text-[var(--color-accent)]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {workflows.map((item, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:grid-cols-[auto_1fr]"
          >
            <div className="flex gap-2">
              <Server className="h-5 w-5 text-[var(--color-accent)]" />
              <Database className="h-5 w-5 text-[var(--color-accent)]" />
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              The important part is not the tool. It is connecting automation to
              the product safely: API secrets, webhooks, deduplication, retries,
              rate limits, logs, and human notifications when something needs a
              decision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
