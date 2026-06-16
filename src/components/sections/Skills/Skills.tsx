import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import SkillCategory from "./SkillCategory";

export default function SkillsSection() {
  return (
    <section id="tech-stack" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="A stack centered on interfaces, APIs, and real-time delivery."
          description="The stack reflects the tools used across full-stack delivery, systems work, and AI-assisted engineering."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => (
            <SkillCategory key={category.category} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
