"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SignupCard } from "@/components/SignupCard";

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
      className="px-5 pb-16 pt-[120px] md:px-8 md:pb-24 md:pt-[152px] lg:pb-32"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
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
            className="mt-6 text-[2.25rem] font-bold leading-[1.08] tracking-tight text-ink md:text-[3.5rem] lg:text-[4.25rem] lg:leading-[1.03]"
          >
            Kāds jau brauc tavā virzienā.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            irvieta savieno cilvēkus, kam kaut kas jāaizved, ar braucējiem, kuri jau
            brauc šajā maršrutā. Vienkārši, ātri, zaļi.
          </motion.p>

          <motion.p variants={item} className="mt-8 text-sm text-ink-soft">
            Bez maksas sūtītājiem · Pieejams visā Latvijā · Uzsākam drīzumā
          </motion.p>
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
