import type { Metadata } from "next";
import "./globals.css";

/**
 * 🧭 BREADCRUMB: Root Metadata And HTML Shell
 * 📍 LOCATION: src/app/layout.tsx
 *
 * 🎯 WHY IT EXISTS: Defines the global document shell and SEO/social metadata for the public portfolio.
 * 🎯 USE CASES:
 *   - Browser title and search/social previews identify Rodolfo correctly.
 *   - All app routes inherit the English document shell and global styles.
 *
 * 🔄 FLOW: Next.js app request -> RootLayout -> global HTML/body + metadata
 * 🔗 USED BY: Next.js App Router, every page in src/app
 * ⚠️ DEPENDS ON: src/app/globals.css, Next.js Metadata API
 *
 * 🚨 CAREFUL: Overclaiming metadata can create recruiter distrust before the page is read.
 * 📊 PERFORMANCE: Static metadata only; no runtime cost.
 *
 * 💾 MEMORIES: Public-safe SPEC context only; no private memory IDs.
 * 🐛 KNOWN BUGS: None known.
 * 📋 SPEC: SPEC-001-curriculum-portfolio-landing
 */
export const metadata: Metadata = {
  title: "Rodolfo Giannotti - Full-Stack AI Developer",
  description:
    "Full-Stack AI Developer with 23 years in technology, 15 years running a business, and real AI products built from scratch.",
  openGraph: {
    title: "Rodolfo Giannotti - Full-Stack AI Developer",
    description:
      "Full-Stack AI Developer with 23 years in technology, 15 years running a business, and real AI products built from scratch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodolfo Giannotti - Full-Stack AI Developer",
    description:
      "Full-Stack AI Developer with 23 years in technology, 15 years running a business, and real AI products built from scratch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
