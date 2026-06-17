"use client";

import Card from "@/components/ui/Card";
import type { ExperienceEntry } from "@/types";

interface ExperienceCardProps {
  experience: ExperienceEntry;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const roleMeta: Record<string, { technologies: string[]; impact: string }> = {
    Turing: {
      technologies: ["Prompt Engineering", "LLM Evaluation", "Function Calling", "Quality Review"],
      impact: "Contributed to consistent AI output review and agentic workflow assessment.",
    },
    GrowthRunes: {
      technologies: ["React", "Node.js", "WebSockets", "SSE", "Three.js", "Docker"],
      impact: "Delivered real-time messaging, reduced polling overhead by 40%, and supported team delivery standards.",
    },
    Kollegio: {
      technologies: ["React", "State Management", "API Optimization", "Monitoring", "Analytics"],
      impact: "Improved application load time by 35% and strengthened product stability.",
    },
    Devsinc: {
      technologies: ["React", "Python", "Ruby", "REST", "GraphQL", "SQL", "NoSQL"],
      impact: "Delivered client-facing full-stack applications across multiple product contexts.",
    },
  };

  const metadata = roleMeta[experience.company] ?? roleMeta.GrowthRunes;

  return (
    <Card className="relative p-6 pl-9 hover:border-white/20 sm:p-8 sm:pl-10">
      <span className="absolute left-0 top-9 h-3 w-3 -translate-x-[9px] rounded-full border border-[color:var(--background)] bg-[color:var(--accent)]" />
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div className="mt-4 grid gap-6 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{experience.company}</h3>
          <p className="mt-3 text-base text-[color:var(--foreground)]">
            {experience.title}
          </p>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            {experience.location}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            {experience.dateRange}
          </p>
        </div>

        <div>
          <div className="grid gap-4 border-y border-[color:var(--border)] py-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Impact
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                {metadata.impact}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Technologies
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {metadata.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-[color:var(--border)] bg-white/[0.03] px-2.5 py-1 text-xs text-[color:var(--muted-foreground)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Key achievements
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
