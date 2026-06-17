import type { SkillCategory as SkillCategoryType } from "@/types";

import SkillBadge from "./SkillBadge";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="grid gap-6 border-b border-[color:var(--border)] p-6 last:border-b-0 sm:p-8 lg:grid-cols-[260px_1fr]">
      <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-neutral-500">{category.category}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
