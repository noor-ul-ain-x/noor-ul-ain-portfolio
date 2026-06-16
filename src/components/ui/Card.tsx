import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export default function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/95 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
