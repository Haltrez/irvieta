"use client";

import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = {
  /** Always provided — visually hidden when `hideLabel`, but never dropped. */
  label: string;
  hideLabel?: boolean;
  error?: string | null;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;

export function Input({ label, hideLabel = false, error, className, ...rest }: InputProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={cn(
          "mb-2 block text-sm font-medium text-ink",
          hideLabel && "sr-only",
        )}
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "h-[52px] w-full rounded-input bg-bg px-4 py-3.5 text-base text-ink",
          "shadow-neu-inset placeholder:text-ink-soft/70",
          "transition-shadow duration-200 motion-reduce:transition-none",
          "focus:shadow-neu-inset-deep focus:outline-none",
          "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          error && "ring-2 ring-red-500/60",
          className,
        )}
        {...rest}
      />
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
