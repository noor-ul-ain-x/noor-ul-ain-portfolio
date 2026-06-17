import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import EducationSection from "@/components/sections/Education";
import EngineeringImpactSection from "@/components/sections/EngineeringImpact";
import ExperienceSection from "@/components/sections/Experience";
import HighlightsSection from "@/components/sections/Highlights";
import HeroSection from "@/components/sections/Hero";
import SkillsSection from "@/components/sections/Skills";
import ToolboxSection from "@/components/sections/Toolbox";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <EngineeringImpactSection />
      <ExperienceSection />
      <SkillsSection />
      <ToolboxSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
