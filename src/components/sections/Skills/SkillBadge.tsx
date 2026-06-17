import Badge from "@/components/ui/Badge";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return <Badge className="text-sm">{skill}</Badge>;
}
