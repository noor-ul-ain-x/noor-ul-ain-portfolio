"use client";

import Card from "@/components/ui/Card";
import type { EngineeringImpactItem } from "@/types";

interface ImpactCardProps {
  impact: EngineeringImpactItem;
}

export default function ImpactCard({ impact }: ImpactCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold">{impact.title}</h3>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
        Problem solved
      </p>
      <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
        {impact.problem}
      </p>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
        Technologies used
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {impact.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-[color:var(--border)] bg-white/5 px-3 py-1 text-xs font-medium"
          >
            {technology}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
        Business impact
      </p>
      <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
        {impact.impact}
      </p>
    </Card>
  );
}
