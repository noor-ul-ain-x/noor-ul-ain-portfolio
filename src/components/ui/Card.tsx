import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export default function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] transition-colors duration-200",
        className,
      )}
      {...props}
    />
  );
}
