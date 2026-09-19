import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type NeumorphicCardProps = {
  children: ReactNode;
  /** Semantic element to render — use `article`, `li`, etc. where it fits. */
  as?: ElementType;
  /** Lift on hover. Only for cards that are interactive or feel clickable. */
  hover?: boolean;
  /** Carved-in rather than raised. */
  inset?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

export function NeumorphicCard({
  children,
  as: Tag = "div",
  hover = false,
  inset = false,
  className,
  ...rest
}: NeumorphicCardProps) {
  return (
    <Tag
      className={cn(
        "rounded-card bg-bg",
        inset ? "shadow-neu-inset" : "shadow-neu",
        hover &&
          !inset &&
          "transition-shadow duration-300 ease-out hover:shadow-neu-lg motion-reduce:transition-none",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
