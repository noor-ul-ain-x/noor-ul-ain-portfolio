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
        "inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",
        className,
      )}
    >
      {children}
    </a>
  );
}
