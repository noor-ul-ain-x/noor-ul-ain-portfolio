import { useEffect, useState } from "react";

import { SECTION_IDS } from "@/utils/constants";

export function useScrollSpy() {
  const [activeId, setActiveId] = useState<(typeof SECTION_IDS)[number]>(
    SECTION_IDS[0],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id as (typeof SECTION_IDS)[number]);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.15 },
    );

    SECTION_IDS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}
