"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
} as const;

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  type = "button",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-btn font-semibold",
        "transition-all duration-200 ease-out motion-reduce:transition-none",
        "disabled:cursor-not-allowed disabled:opacity-60",
        sizes[size],
        fullWidth && "w-full",
        variant === "primary" &&
          cn(
            "bg-primary text-white shadow-neu",
            "hover:bg-primary-dark hover:shadow-neu-lg",
            // Pressed state inverts the shadows.
            "active:shadow-neu-inset active:translate-y-px",
            "disabled:hover:bg-primary disabled:hover:shadow-neu",
          ),
        variant === "ghost" &&
          cn(
            "bg-bg text-primary-dark shadow-neu-sm",
            "hover:shadow-neu active:shadow-neu-inset",
          ),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
