"use client";

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
