import type { ProfileSnapshotItem } from "@/types";

interface ProfileSnapshotProps {
  items: ProfileSnapshotItem[];
}

export default function ProfileSnapshot({ items }: ProfileSnapshotProps) {
  return (
    <div className="grid border-l border-t border-[color:var(--border)] sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="border-b border-r border-[color:var(--border)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              {item.label}
            </p>
            <p className="mt-4 text-base font-medium leading-7">{item.value}</p>
          </div>
        ))}
    </div>
  );
}
