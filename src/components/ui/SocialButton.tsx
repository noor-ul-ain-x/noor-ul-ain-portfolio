import type { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface SocialButtonProps extends PropsWithChildren {
  href: string;
  className?: string;
}

export default function SocialButton({
  href,
  children,
  className,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] px-4 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50",
        className,
      )}
    >
      {children}
    </a>
  );
}
