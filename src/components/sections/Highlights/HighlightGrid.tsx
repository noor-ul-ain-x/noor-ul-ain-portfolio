"use client";

import type { CareerHighlight } from "@/types";

import HighlightCard from "./HighlightCard";

interface HighlightGridProps {
  highlights: CareerHighlight[];
}

export default function HighlightGrid({ highlights }: HighlightGridProps) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {highlights.map((highlight) => (
        <HighlightCard key={highlight.label} highlight={highlight} />
      ))}
    </div>
  );
}
