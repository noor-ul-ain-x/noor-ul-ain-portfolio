import { Gauge, GitBranch, Users } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import ProfileSnapshot from "./ProfileSnapshot";

const storyTags = [
  "Engineering Leadership",
  "Prompt Engineering",
  "Real-Time Systems",
  "System Design",
  "Agentic AI",
  "Technical Architecture",
];

const impactBlocks = [
  {
    title: "From product ambiguity to shipped systems",
    description:
      "I map the product workflow, define the data and API boundaries, and turn unclear requirements into maintainable full-stack implementation.",
    icon: GitBranch,
  },
  {
    title: "Performance with measurable outcomes",
    description:
      "Recent work improved load time by 35% and reduced polling overhead by approximately 40% through tighter API and real-time delivery patterns.",
    icon: Gauge,
  },
  {
    title: "Senior ownership in remote teams",
    description:
      "I write clearly, lead review loops, mentor engineers, and keep delivery moving across distributed product and engineering teams.",
    icon: Users,
  },
];

export default function AboutSection() {
  const snapshot = [
    { label: "Based In", value: "Pakistan" },
    { label: "Experience", value: "5+ years" },
    { label: "Focus", value: "AI products · Real-time systems · Full-stack architecture" },
    { label: "Availability", value: "Remote · Global" },
    { label: "Email", value: profile.contact.email },
  ];

  return (
    <section id="about" className="section-shell border-b border-[color:var(--border)] py-20 sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div>
            <SectionHeading
              number="02"
              eyebrow="About"
              title={<>Engineering judgment for <span className="serif-accent">real products</span></>}
            />
            <div className="mt-14 max-w-3xl space-y-8">
              <p className="text-3xl font-medium leading-tight tracking-tight text-[color:var(--foreground)]">
                I build full-stack and real-time systems where product quality matters: APIs, messaging flows, AI-assisted workflows, evaluation loops, and interfaces that teams can operate after launch.
              </p>
              <p className="text-lg leading-8 text-[color:var(--muted-foreground)]">
                My recent work spans agentic AI evaluation at Turing, senior engineering at GrowthRunes, product engineering at Kollegio, and client-facing delivery at Devsinc. The common thread is practical engineering: simplify workflows, improve system behavior, and leave teams with software they can trust.
              </p>
              <p className="text-lg leading-8 text-[color:var(--muted-foreground)]">
                I am strongest in ambiguous product environments where business process, data, APIs, and infrastructure overlap. I can own implementation details, communicate tradeoffs, and turn loose operational problems into maintainable technical systems.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {storyTags.map((tag) => (
                <Badge key={tag} className="uppercase tracking-[0.22em]">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-0 border-t border-[color:var(--border)]">
            {impactBlocks.map((block) => {
              const Icon = block.icon;

              return (
                <div key={block.title} className="grid grid-cols-[48px_1fr] gap-6 border-b border-[color:var(--border)] py-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[color:var(--muted-foreground)]">
                      {block.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <ProfileSnapshot items={snapshot} />
          </div>
        </div>
      </Container>
    </section>
  );
}
