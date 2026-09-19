"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SignupCard } from "@/components/SignupCard";
import { CheckIcon } from "@/components/icons";

export function Hero() {
  const reduceMotion = useReducedMotion();

  // Staggered fade + rise on load. With reduced motion the children simply
  // start at their final values.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: 0.05 },
    },
  };

  const item = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-[120px] md:px-8 md:pb-24 md:pt-[152px] lg:pb-32"
    >
      {/* Mint glow bleeding in from the top-left — stops the hero reading as a
          flat off-white slab without touching text contrast. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-hero-glow"
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-surface px-4 py-2 text-sm font-medium text-primary-dark shadow-neu-sm">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Drīzumā pieejams
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.5rem] font-bold leading-[1.06] tracking-tight text-ink md:text-[3.75rem] lg:text-[4.5rem] lg:leading-[1.02]"
          >
            Kāds jau brauc{" "}
            <span className="relative whitespace-nowrap">
              tavā virzienā
              {/* Hand-drawn underline under the payoff words. */}
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-[0.35em] w-full text-primary-light"
              >
                <path
                  d="M2 8.5C58 3.5 142 2.5 298 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            irvieta savieno cilvēkus, kam kaut kas jāaizved, ar braucējiem, kuri jau
            brauc šajā maršrutā. Vienkārši, ātri, zaļi.
          </motion.p>

          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-ink-soft"
          >
            {["Bez maksas sūtītājiem", "Pieejams visā Latvijā", "Uzsākam drīzumā"].map(
              (label, i) => (
                <li key={label} className="flex items-center gap-3">
                  {i > 0 ? (
                    <span aria-hidden className="h-1 w-1 rounded-full bg-primary/40" />
                  ) : null}
                  <span className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    {label}
                  </span>
                </li>
              ),
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          id="pieraksts"
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: reduceMotion ? 0 : 0.25 }}
          className="scroll-mt-28"
        >
          <SignupCard variant="hero" />
        </motion.div>
      </div>
    </section>
  );
}
