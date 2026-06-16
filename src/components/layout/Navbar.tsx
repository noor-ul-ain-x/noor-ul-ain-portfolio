"use client";

import { ArrowUpRight } from "lucide-react";

import { NAV_ITEMS, SITE_NAME } from "@/utils/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const activeId = useScrollSpy();

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-sm font-semibold tracking-tight">
          {SITE_NAME}
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  isActive
                    ? "bg-white/10 text-[color:var(--foreground)]"
                    : "text-[color:var(--muted-foreground)] hover:bg-white/5 hover:text-[color:var(--foreground)]",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-sm font-medium text-[color:var(--background)] transition hover:translate-y-[-1px]"
          >
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
