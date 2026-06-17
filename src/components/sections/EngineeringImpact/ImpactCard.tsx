"use client";

import Card from "@/components/ui/Card";
import type { EngineeringImpactItem } from "@/types";

interface ImpactCardProps {
  impact: EngineeringImpactItem;
}

export default function ImpactCard({ impact }: ImpactCardProps) {
  const approachByTitle: Record<string, string> = {
    "Real-Time Communication Platform":
      "Designed socket-based user-to-user and user-to-agent messaging, then layered SSE and channel integrations around the core communication flow.",
    "LLM Evaluation Workflows":
      "Used structured review criteria, prompt analysis, and function-calling assessment to keep model output evaluation consistent across review loops.",
    "3D Avatar Experiences":
      "Built dynamic rendering around Three.js, react-three/fiber, and Ready Player Me avatars for product-ready interactive experiences.",
  };

  return (
    <Card className="p-6 hover:border-white/20 sm:p-8">
      <h3 className="text-2xl font-semibold tracking-tight">{impact.title}</h3>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
        Problem
      </p>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
        {impact.problem}
      </p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
        Approach
      </p>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
        {approachByTitle[impact.title] ?? "Placeholder: detailed implementation approach to be expanded from project notes."}
      </p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
        Technologies
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {impact.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-[color:var(--border)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[color:var(--muted-foreground)]"
          >
            {technology}
          </span>
        ))}
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
        Business Outcome
      </p>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
        {impact.impact}
      </p>
    </Card>
  );
}
