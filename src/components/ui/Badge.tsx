import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export default function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[color:var(--border)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[color:var(--muted-foreground)] transition-colors duration-200",
        className,
      )}
      {...props}
    />
  );
}
