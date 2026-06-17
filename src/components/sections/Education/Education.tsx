import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const courseTags = [
  "Software Engineering",
  "Data Structures",
  "Algorithms",
  "Database Systems",
  "Operating Systems",
  "Computer Networks",
  "Web Engineering",
  "AI Coursework (placeholder)",
  "Applied ML",
  "Artificial Intelligence",
  "Cloud Computing",
  "Software Testing",
  "OOAD",
  "Discrete Structures"
];

export default function EducationSection() {
  return (
    <section id="education" className="section-shell border-b border-[color:var(--border)] py-20 sm:py-24">
      <Container>
        <SectionHeading
          number="07"
          eyebrow="Education"
          title={<>Where I <span className="serif-accent">studied</span></>}
        />

        <Card className="mt-16 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
                Education
              </p>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                {profile.education.degree}
              </h3>
              <p className="mt-4 text-lg text-[color:var(--muted-foreground)]">
                {profile.education.institution}
              </p>
              <p className="mt-4 text-sm font-medium tracking-[0.16em] text-neutral-500">
                Pakistan · {profile.education.startDate} - {profile.education.endDate}
              </p>
            </div>
            <p className="text-sm font-medium tracking-[0.16em] text-neutral-500">
              Graduated 2022
            </p>
          </div>

          <div className="mt-10 border-t border-[color:var(--border)] pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Relevant coursework
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {courseTags.map((course) => (
                <Badge key={course}>{course}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
