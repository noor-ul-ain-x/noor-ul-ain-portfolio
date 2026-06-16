"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/5 text-[color:var(--foreground)] transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
    >
      {isDark ? <SunMedium /> : <MoonStar />}
    </button>
  );
}