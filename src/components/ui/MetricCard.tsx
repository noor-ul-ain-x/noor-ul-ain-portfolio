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
      className={cn("p-6", className)}
      {...props}
    >
      <p className="text-sm font-medium text-[color:var(--muted-foreground)]">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{description}</p>
    </Card>
  );
}
