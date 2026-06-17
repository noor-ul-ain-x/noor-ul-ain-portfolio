"use client";

import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";

import { NAV_ITEMS, SITE_NAME } from "@/utils/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import MobileMenu from "./MobileMenu";
import { cn } from "@/utils/cn";
import { profile } from "@/data/profile";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const activeId = useScrollSpy();

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--background)]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1536px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <a href="#hero" className="group inline-flex items-center gap-3 text-sm font-semibold tracking-tight">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--card)]">
            <Image src="/images/dp.png" alt={SITE_NAME} fill sizes="36px" className="object-cover" priority />
          </span>
          <span className="text-base text-[color:var(--foreground)]">{SITE_NAME}</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative py-2 text-base transition",
                  isActive
                    ? "text-[color:var(--foreground)]"
                    : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[color:var(--foreground)] transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.contact.resume}
            download
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-[color:var(--border)] bg-white/[0.02] px-5 text-base font-semibold text-[color:var(--foreground)] transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            Resume
            <ArrowDownToLine className="h-4 w-4" />
          </a>
          <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
        </div>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
