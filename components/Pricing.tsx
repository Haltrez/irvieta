import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import { Reveal } from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    title: "Sūtītājiem",
    price: "0€",
    priceNote: null,
    subtitle: "Bez maksas. Vienmēr.",
    highlighted: true,
    features: [
      "Neierobežoti sludinājumi",
      "Piekļuve visiem braucējiem",
      "Reitingu sistēma",
      "Iekšējais chat",
    ],
    cta: "Sākt sūtīt",
  },
  {
    title: "Braucējiem",
    price: "4.90€",
    priceNote: "/ mēnesī",
    subtitle: "Atceli jebkurā brīdī.",
    highlighted: false,
    features: [
      "Redzi visus sludinājumus",
      "Piesakies neierobežoti",
      "Saglabātie maršruti ar paziņojumiem",
      "Verificēta profila statuss",
    ],
    cta: "Kļūt par braucēju",
  },
];

export function Pricing() {
  return (
    <section id="cenas" className="section-padding">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Cenas</span>
          <h2 className="heading-section mt-5 text-ink">Cik tas maksā?</h2>
          <p className="body-text mt-4">Godīgi un vienkārši.</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {PLANS.map((plan, index) => {
            /*
             * The free plan is rendered dark rather than merely ring-outlined.
             * A highlighted card has to win on contrast, not on a thin border —
             * and it doubles as a break in a long run of pale cards.
             */
            const dark = plan.highlighted;

            return (
              <Reveal key={plan.title} delay={index * 0.1} className="h-full">
                <NeumorphicCard
                  hover={!dark}
                  {...(dark ? { "data-dark": true } : {})}
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden p-7 md:p-9",
                    dark &&
                      "bg-forest-900 text-on-dark shadow-[0_24px_48px_-16px_rgba(27,67,50,0.45)]",
                  )}
                >
                  {dark ? (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary-light/10 blur-2xl"
                    />
                  ) : null}

                  <div className="relative flex items-center justify-between gap-3">
                    <h3
                      className={cn(
                        "text-lg font-semibold md:text-xl",
                        dark ? "text-on-dark" : "text-ink",
                      )}
                    >
                      {plan.title}
                    </h3>
                    {plan.highlighted ? (
                      <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-dark">
                        Populārākais
                      </span>
                    ) : null}
                  </div>

                  <p className="relative mt-5 flex items-baseline gap-1.5">
                    <span
                      className={cn(
                        "text-5xl font-bold tracking-tight md:text-6xl",
                        dark ? "text-primary-light" : "text-primary",
                      )}
                    >
                      {plan.price}
                    </span>
                    {plan.priceNote ? (
                      <span className="text-base font-medium text-ink-soft">
                        {plan.priceNote}
                      </span>
                    ) : null}
                  </p>

                  <p
                    className={cn(
                      "relative mt-2 text-base",
                      dark ? "text-on-dark-soft" : "text-ink-soft",
                    )}
                  >
                    {plan.subtitle}
                  </p>

                  <ul className="relative mt-7 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon
                          className={cn(
                            "mt-1 h-4 w-4 shrink-0",
                            dark ? "text-primary-light" : "text-primary",
                          )}
                        />
                        <span
                          className={cn(
                            "text-base",
                            dark ? "text-on-dark-soft" : "text-ink-soft",
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* mt-auto on the wrapper (it beats a margin on the anchor)
                      keeps the buttons aligned across cards of different
                      length; pt-8 keeps them off the last feature. */}
                  <div className="relative mt-auto pt-8">
                    <a
                      href="#pieraksts"
                      className={cn(
                        "flex h-14 w-full items-center justify-center rounded-btn px-6",
                        "text-base font-semibold",
                        "transition-all duration-200 motion-reduce:transition-none",
                        dark
                          ? "bg-primary-light text-primary-dark hover:bg-white"
                          : "bg-bg text-primary-dark shadow-neu-sm hover:shadow-neu active:shadow-neu-inset",
                      )}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </NeumorphicCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
