"use client";

import Card from "@/components/ui/Card";
import type { ExperienceEntry } from "@/types";

interface ExperienceCardProps {
  experience: ExperienceEntry;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <Card className="relative p-6 pl-8">
      <span className="absolute left-0 top-8 h-3 w-3 -translate-x-[9px] rounded-full border border-sky-300 bg-sky-400" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div className="mt-3 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{experience.company}</h3>
        <p className="text-sm text-[color:var(--muted-foreground)]">
          {experience.title} · {experience.location}
        </p>
        <p className="text-sm font-medium text-[color:var(--accent)]">
          {experience.dateRange}
        </p>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
