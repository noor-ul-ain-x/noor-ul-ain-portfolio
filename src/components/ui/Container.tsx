import type { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16", className)}>
      {children}
    </div>
  );
}
