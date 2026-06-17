"use client";

import type { ExperienceEntry } from "@/types";

import ExperienceCard from "./ExperienceCard";

interface ExperienceTimelineProps {
  items: ExperienceEntry[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative mt-12">
      <div className="absolute left-3 top-0 h-full w-px bg-[color:var(--border)]" />
      <div className="grid gap-5">
        {items.map((experience, index) => (
          <ExperienceCard key={`${experience.company}-${experience.title}`} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}
