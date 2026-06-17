import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import SkillCategory from "./SkillCategory";

export default function SkillsSection() {
  const capabilityGroups = [
    { category: "Core Strengths", skills: profile.coreStrengths },
    ...skills,
  ];

  return (
    <section id="skills" className="section-shell border-b border-[color:var(--border)] py-20 sm:py-24">
      <Container>
        <SectionHeading
          number="05"
          eyebrow="Skills"
          title={<>Tools of the <span className="serif-accent">trade</span></>}
          description="Grouped capabilities for fast scanning without turning the page into a giant badge wall."
        />
        <div className="mt-12 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)]">
          {capabilityGroups.map((category) => (
            <SkillCategory key={category.category} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
