import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface SharedProps extends PropsWithChildren {
  className?: string;
  variant?: ButtonVariant;
}

function baseClasses(variant: ButtonVariant) {
  const shared =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  if (variant === "primary") {
    return cn(
      shared,
      "bg-[color:var(--foreground)] text-[color:var(--background)] hover:-translate-y-0.5 hover:bg-white",
    );
  }

  if (variant === "secondary") {
    return cn(
      shared,
      "border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--foreground)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]",
    );
  }

  return cn(shared, "text-[color:var(--foreground)] hover:bg-white/[0.04]");
}

export function Button({
  className,
  children,
  variant = "primary",
  ...props
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses(variant), className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  className,
  children,
  variant = "primary",
  ...props
}: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a className={cn(baseClasses(variant), className)} {...props}>
      {children}
    </a>
  );
}
