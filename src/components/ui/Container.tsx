import type { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1500px] px-6 sm:px-8 lg:px-[100px] xl:px-[140px] 2xl:px-[160px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
