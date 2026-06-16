import Badge from "@/components/ui/Badge";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return <Badge className="bg-white/5">{skill}</Badge>;
}
