import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import ProfileSnapshot from "./ProfileSnapshot";

const focusAreas = [
  "Real-Time Systems",
  "Agentic AI",
  "Prompt Engineering",
  "LLM Evaluation",
];

export default function AboutSection() {
  const snapshot = [
    { label: "Experience", value: "5+ years" },
    { label: "Education", value: profile.education.institution },
    { label: "Degree", value: profile.education.degree },
    { label: "Latest role", value: experience[0].company },
  ];

  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About"
              title="Engineering judgment for real-time and AI-driven products."
              description={profile.summary}
            />
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                Areas of specialization
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.coreStrengths.map((strength) => (
                  <Badge key={strength}>{strength}</Badge>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                Current focus areas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Badge key={area} className="bg-white/10">
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <ProfileSnapshot items={snapshot} />
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                Professional summary
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {profile.summary}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
