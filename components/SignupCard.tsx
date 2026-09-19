"use client";

import { useRef, useState, useTransition } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Role = "sender" | "driver" | "both";

const ROLE_OPTIONS: Array<{ value: Role; label: string }> = [
  { value: "sender", label: "Gribu sūtīt" },
  { value: "driver", label: "Gribu braukt" },
  { value: "both", label: "Abi" },
];

type SignupCardProps = {
  /** `hero` shows the full card with the role toggle; `cta` is the slimmer one. */
  variant?: "hero" | "cta";
  className?: string;
};

export function SignupCard({ variant = "hero", className }: SignupCardProps) {
  const [role, setRole] = useState<Role>("both");
  const [state, setState] = useState<WaitlistState>({ status: "idle", message: "" });
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const reduceMotion = useReducedMotion();

  const isHero = variant === "hero";

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await joinWaitlist(formData);
      setState(result);
      if (result.status === "success") formRef.current?.reset();
    });
  }

  const fade = reduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      };

  return (
    <NeumorphicCard
      hover={isHero}
      className={cn("p-6 md:p-8", className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {state.status === "success" ? (
          <motion.div
            key="success"
            {...fade}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center py-6 text-center"
          >
            <span
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary-dark shadow-neu-sm"
              aria-hidden
            >
              <CheckIcon className="h-7 w-7" />
            </span>
            <p className="text-lg font-semibold text-ink" role="status">
              ✓ {state.message}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Līdz tam — paldies, ka esi ar mums no paša sākuma.
            </p>
          </motion.div>
        ) : (
          <motion.div key="form" {...fade} transition={{ duration: 0.3, ease: "easeOut" }}>
            {isHero ? (
              <>
                <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  Iegūsti agrīno piekļuvi
                </h2>
                <p className="mt-2 text-sm text-ink-soft md:text-base">
                  Esi starp pirmajiem, kas izmēģina irvieta.
                </p>
              </>
            ) : null}

            <form
              ref={formRef}
              onSubmit={onSubmit}
              className={cn("space-y-5", isHero && "mt-6")}
              noValidate
            >
              <input type="hidden" name="source" value={variant} />
              <input type="hidden" name="role" value={role} />

              {/* Honeypot — hidden from people, tempting to bots. */}
              <div className="absolute h-0 w-0 overflow-hidden" aria-hidden>
                <label htmlFor={`company-${variant}`}>Uzņēmums</label>
                <input
                  id={`company-${variant}`}
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <Input
                label="E-pasta adrese"
                hideLabel
                type="email"
                name="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="tavs@epasts.lv"
                error={state.status === "error" ? state.message : null}
              />

              {isHero ? (
                <fieldset>
                  <legend className="mb-2.5 text-sm font-medium text-ink">
                    Kas tu esi?
                  </legend>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Kas tu esi?">
                    {ROLE_OPTIONS.map((option) => {
                      const selected = role === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => setRole(option.value)}
                          className={cn(
                            "rounded-full px-4 py-2.5 text-sm font-medium",
                            "transition-all duration-200 motion-reduce:transition-none",
                            selected
                              ? "bg-primary text-white shadow-neu-sm"
                              : "bg-bg text-ink-soft shadow-neu-sm hover:text-primary-dark active:shadow-neu-inset",
                          )}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ) : null}

              <Button type="submit" size="lg" fullWidth disabled={isPending}>
                {isPending ? "Pierakstām…" : "Pievienoties waitlist"}
              </Button>

              <div className="space-y-1.5 text-center">
                <p className="text-sm text-ink-soft">
                  Pievienojies pirmajiem izmēģinātājiem
                </p>
                {isHero ? (
                  <p className="text-sm text-ink-soft">
                    Mēs nesūtām spamu. Tikai vienreiz — kad būsim gatavi.
                  </p>
                ) : null}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </NeumorphicCard>
  );
}
