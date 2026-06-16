import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface SectionHeadingProps extends PropsWithChildren {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionHeadingProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[color:var(--muted-foreground)]">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
