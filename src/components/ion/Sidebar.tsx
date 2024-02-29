// ion/Sidebar: Generated with Ion on 2/28/2024, 10:56:30 AM
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
   className?: string;
   filled?: boolean;
   children?: React.ReactNode | React.ReactNode[];
}

export default function Sidebar({
   children,
   filled = false,
   className,
}: Props) {
   return (
      <div
         className={clsx(
            "flex h-auto max-h-screen min-h-0 shrink-0 flex-col justify-between",
            {
               "bg-primary-darker dark:bg-primary-lighter": filled,
               "border-r border-soft-stroke": !filled,
            },
            className
         )}
      >
         {children}
      </div>
   );
}
