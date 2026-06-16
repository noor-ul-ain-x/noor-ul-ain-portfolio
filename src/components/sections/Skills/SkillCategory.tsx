import Card from "@/components/ui/Card";
import type { SkillCategory as SkillCategoryType } from "@/types";

import SkillBadge from "./SkillBadge";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">{category.category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </Card>
  );
}
