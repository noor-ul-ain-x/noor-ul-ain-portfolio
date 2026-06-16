"use client";

import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { profile } from "@/data/profile";

export default function HeroAvatar() {
  return (
    <Card className="overflow-hidden p-4">
      <Avatar src="/images/dp.png" alt={profile.name} />
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-[color:var(--muted-foreground)]">
            {profile.role}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.coreStrengths.slice(0, 3).map((strength) => (
            <Badge key={strength}>{strength}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
