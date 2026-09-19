/**
 * Minimal class-name joiner. We don't pull in clsx/tailwind-merge because the
 * components here never fight over conflicting Tailwind classes — the
 * `className` prop is always appended last, so it wins naturally.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
