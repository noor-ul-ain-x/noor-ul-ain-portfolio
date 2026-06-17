"use client";

import { useEffect, useState } from "react";

import { cn } from "@/utils/cn";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const documentElement = document.documentElement;
      const maxScroll =
        documentElement.scrollHeight - documentElement.clientHeight;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      setProgress((documentElement.scrollTop / maxScroll) * 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-px w-full bg-transparent">
      <div
        className={cn(
          "h-full origin-left bg-[color:var(--foreground)]/70 transition-[width]",
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
