import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import HowIWorkWithAI from "@/components/HowIWorkWithAI";
import AutomationSystems from "@/components/AutomationSystems";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import HonestAnswers from "@/components/HonestAnswers";
import TryBeforeYouHire from "@/components/TryBeforeYouHire";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/**
 * 🧭 BREADCRUMB: Portfolio Page Composition
 * 📍 LOCATION: src/app/page.tsx
 *
 * 🎯 WHY IT EXISTS: Composes the public CV/portfolio narrative in the exact reading order recruiters should see.
 * 🎯 USE CASES:
 *   - Presents Rodolfo first as a person and builder.
 *   - Moves from proof of work to methodology, experience, stack, answers, and contact.
 *
 * 🔄 FLOW: Route "/" -> ordered section components -> complete landing page
 * 🔗 USED BY: Next.js root route, Vercel static export
 * ⚠️ DEPENDS ON: All components in src/components
 *
 * 🚨 CAREFUL: Reordering sections changes the hiring narrative, not just layout.
 * 📊 PERFORMANCE: Static composition; animation lives inside client components.
 *
 * 💾 MEMORIES: Public-safe SPEC context only; no private memory IDs.
 * 🐛 KNOWN BUGS: None known.
 * 📋 SPEC: SPEC-001-curriculum-portfolio-landing
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <HowIWorkWithAI />
      <AutomationSystems />
      <Experience />
      <TechStack />
      <HonestAnswers />
      <TryBeforeYouHire />
      <Contact />
      <FloatingWhatsApp />
    </main>
  );
}
