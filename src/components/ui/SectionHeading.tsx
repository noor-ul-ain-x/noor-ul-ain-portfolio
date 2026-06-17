import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

import { cn } from "@/utils/cn";

interface SectionHeadingProps extends PropsWithChildren {
  number?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionHeadingProps & Omit<HTMLAttributes<HTMLDivElement>, "title">) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {eyebrow || number ? (
        <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
          <span className="h-px w-10 bg-[color:var(--border)]" />
          {number ? <span>{number}</span> : null}
          {number && eyebrow ? <span>-</span> : null}
          {eyebrow ? <span>{eyebrow}</span> : null}
        </p>
      ) : null}
      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
