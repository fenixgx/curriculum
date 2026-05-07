import type { Metadata } from "next";
import "./globals.css";

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
