"use client";

import Card from "@/components/ui/Card";
import type { GitHubStat } from "@/types";

interface GithubStatsProps {
  stats: GitHubStat[];
}

export default function GithubStats({ stats }: GithubStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <p className="text-sm font-medium text-[color:var(--muted-foreground)]">{stat.label}</p>
          <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{stat.description}</p>
        </Card>
      ))}
    </div>
  );
}
