"use client";

import Card from "@/components/ui/Card";

interface ContributionGraphProps {
  title: string;
  description: string;
}

const levels = [
  [0, 1, 1, 0, 0, 2, 1, 0, 0, 1, 2, 0],
  [1, 2, 3, 1, 0, 2, 2, 1, 1, 2, 3, 1],
  [0, 1, 2, 3, 1, 1, 2, 3, 1, 0, 2, 2],
  [1, 0, 1, 2, 2, 1, 0, 1, 2, 3, 1, 0],
  [0, 1, 1, 0, 2, 3, 1, 0, 1, 2, 2, 1],
  [1, 2, 0, 1, 1, 2, 3, 1, 0, 1, 1, 2],
  [0, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 3],
];

const levelClasses = [
  "bg-white/5",
  "bg-sky-400/15",
  "bg-sky-400/30",
  "bg-sky-400/50",
];

export default function ContributionGraph({
  title,
  description,
}: ContributionGraphProps) {
  return (
    <Card className="p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
        {description}
      </p>
      <div className="mt-6 grid grid-cols-12 gap-1.5">
        {levels.flatMap((row, rowIndex) =>
          row.map((level, columnIndex) => (
            <span
              key={`${rowIndex}-${columnIndex}`}
              className={`aspect-square rounded-sm ${levelClasses[level]}`}
              aria-hidden="true"
            />
          )),
        )}
      </div>
    </Card>
  );
}
