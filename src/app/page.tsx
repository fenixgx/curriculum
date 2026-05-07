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
    </main>
  );
}
