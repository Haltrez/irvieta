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
          <h2 className="heading-section text-ink">Cik tas maksā?</h2>
          <p className="body-text mt-4">Godīgi un vienkārši.</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.title} delay={index * 0.1} className="h-full">
              <NeumorphicCard
                hover
                className={cn(
                  "relative flex h-full flex-col p-7 md:p-9",
                  plan.highlighted && "ring-2 ring-primary/25",
                )}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                    Populārākais
                  </span>
                ) : null}

                <h3 className="text-lg font-semibold text-ink md:text-xl">{plan.title}</h3>

                <p className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                    {plan.price}
                  </span>
                  {plan.priceNote ? (
                    <span className="text-base font-medium text-ink-soft">{plan.priceNote}</span>
                  ) : null}
                </p>

                <p className="mt-2 text-base text-ink-soft">{plan.subtitle}</p>

                <ul className="mt-7 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-base text-ink-soft">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Both CTAs point at the waitlist — nothing to sign up to yet.
                    The wrapper carries `mt-auto` (which beats any margin on the
                    anchor itself) so the buttons line up across cards of
                    different content length, and `pt-8` keeps the button off
                    the last feature. */}
                <div className="mt-auto pt-8">
                  <a
                    href="#pieraksts"
                    className={cn(
                      "flex h-14 w-full items-center justify-center rounded-btn px-6",
                      "text-base font-semibold",
                      "transition-all duration-200 motion-reduce:transition-none",
                      plan.highlighted
                        ? "bg-primary text-white shadow-neu hover:bg-primary-dark hover:shadow-neu-lg active:shadow-neu-inset"
                        : "bg-bg text-primary-dark shadow-neu-sm hover:shadow-neu active:shadow-neu-inset",
                    )}
                  >
                    {plan.cta}
                  </a>
                </div>
              </NeumorphicCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
