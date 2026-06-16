import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import EngineeringImpactSection from "@/components/sections/EngineeringImpact";
import ExperienceSection from "@/components/sections/Experience";
import GithubSection from "@/components/sections/Github";
import HighlightsSection from "@/components/sections/Highlights";
import HeroSection from "@/components/sections/Hero";
import ResumeSection from "@/components/sections/Resume";
import SkillsSection from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EngineeringImpactSection />
      <GithubSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
