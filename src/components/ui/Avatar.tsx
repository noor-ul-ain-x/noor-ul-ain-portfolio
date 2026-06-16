import Image from "next/image";

import { cn } from "@/utils/cn";

interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
}

export default function Avatar({ className, src, alt }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/5 shadow-[0_30px_90px_rgba(15,23,42,0.18)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={952}
        height={1180}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}
