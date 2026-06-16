"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { NAV_ITEMS } from "@/utils/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/utils/cn";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/5 text-[color:var(--foreground)]"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)]/98 p-4 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
            <span className="text-sm font-semibold">Navigation</span>
            <ThemeToggle />
          </div>
          <nav className="mt-4 grid gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition",
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
        </div>
      ) : null}
    </div>
  );
}
