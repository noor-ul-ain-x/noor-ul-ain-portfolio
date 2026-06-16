import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

export default function ExternalLink({
  className,
  children,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }>) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={cn("underline decoration-[color:var(--border)] underline-offset-4 hover:decoration-current", className)}
      {...props}
    >
      {children}
    </a>
  );
}
