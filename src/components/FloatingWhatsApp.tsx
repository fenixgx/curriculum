"use client";

/**
 * 🧭 BREADCRUMB: Floating WhatsApp Contact
 * 📍 LOCATION: src/components/FloatingWhatsApp.tsx
 *
 * 🎯 WHY IT EXISTS: Gives mobile/desktop visitors a low-friction direct contact path without scrolling to the footer.
 * 🎯 USE CASES:
 *   - Recruiter wants to message quickly after scanning the page.
 *   - Visitor is on mobile and prefers WhatsApp over email.
 *
 * 🔄 FLOW: fixed button -> wa.me deep link -> WhatsApp conversation
 * 🔗 USED BY: src/app/page.tsx
 * ⚠️ DEPENDS ON: @tabler/icons-react, WhatsApp wa.me URL format
 *
 * 🚨 CAREFUL: Do not use green WhatsApp styling; it breaks the portfolio's visual identity.
 * 📊 PERFORMANCE: Single fixed anchor; no state.
 *
 * 💾 MEMORIES: Public-safe SPEC context only; no private memory IDs.
 * 🐛 KNOWN BUGS: Requires WhatsApp/web support on visitor device.
 * 📋 SPEC: SPEC-001-curriculum-portfolio-landing
 */
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34605377796?text=Hi%20Rodolfo%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Rodolfo on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-accent)]/60 bg-[var(--color-bg)] text-[var(--color-accent)] shadow-2xl shadow-black/30 transition hover:scale-105 hover:bg-[var(--color-accent)] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
    >
      <IconBrandWhatsapp className="h-5 w-5" />
    </a>
  );
}
