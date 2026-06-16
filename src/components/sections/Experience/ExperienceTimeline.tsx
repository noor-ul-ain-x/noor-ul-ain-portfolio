"use client";

import type { ExperienceEntry } from "@/types";

import ExperienceCard from "./ExperienceCard";

interface ExperienceTimelineProps {
  items: ExperienceEntry[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative mt-10">
      <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-sky-400/60 via-[color:var(--border)] to-transparent" />
      <div className="grid gap-6">
        {items.map((experience, index) => (
          <ExperienceCard key={`${experience.company}-${experience.title}`} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}
