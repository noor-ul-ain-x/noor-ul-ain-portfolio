import type { HTMLAttributes } from "react";

import Card from "./Card";
import { cn } from "@/utils/cn";

interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  description: string;
}

export default function MetricCard({
  label,
  value,
  description,
  className,
  ...props
}: MetricCardProps) {
  return (
    <Card
      className={cn("p-6 hover:border-white/20", className)}
      {...props}
    >
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">{label}</p>
      <p className="serif-accent mt-4 text-4xl leading-none text-[color:var(--foreground)]">{value}</p>
      <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">{description}</p>
    </Card>
  );
}
