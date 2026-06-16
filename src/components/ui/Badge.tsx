import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export default function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/5 px-3 py-1 text-xs font-medium text-[color:var(--foreground)]",
        className,
      )}
      {...props}
    />
  );
}
