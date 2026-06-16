import Card from "@/components/ui/Card";
import type { ProfileSnapshotItem } from "@/types";

interface ProfileSnapshotProps {
  items: ProfileSnapshotItem[];
}

export default function ProfileSnapshot({ items }: ProfileSnapshotProps) {
  return (
    <Card className="p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-[color:var(--border)] bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
