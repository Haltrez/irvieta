import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "1",
    title: "Ievieto sludinājumu",
    text: "Vajag aizvest paciņu, mēbeli vai dokumentus? Ievieto sludinājumu ar maršrutu un aptuvenu izmēru. Bez maksas, bez reģistrācijas sarežģījumiem.",
  },
  {
    number: "2",
    title: "Saņem piedāvājumus",
    text: "Braucēji, kuri jau brauc tavā virzienā, redz sludinājumu un piedāvā savu cenu. Tu izvēlies to, kas tev patīk.",
  },
  {
    number: "3",
    title: "Satiecies un nodod",
    text: "Sazvanies, satiecies norunātajā vietā, nodod paciņu. Nauda tiek pārskaitīta tieši braucējam. Vienkārši.",
  },
];

export function HowItWorks() {
  return (
    <section id="ka-tas-strada" className="section-padding">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Kā tas strādā</span>
          <h2 className="heading-section mt-5 text-ink">Trīs soļi, un lieta ir ceļā</h2>
          <p className="body-text mt-4">Bez sarežģītām reģistrācijām.</p>
        </Reveal>

        <div className="relative mt-12 md:mt-16">
          {/* The route the parcel takes, drawn between the three cards. Desktop
              only — stacked cards on mobile would need a vertical line that
              fights the card shadows. */}
          <svg
            aria-hidden
            viewBox="0 0 1000 24"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 top-[52px] hidden h-6 w-full text-primary/30 md:block"
          >
            <path
              d="M170 12 H 500 M 500 12 H 830"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="7 9"
              strokeLinecap="round"
            />
          </svg>

        <ul className="relative grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} className="h-full">
              <NeumorphicCard as="li" hover className="flex h-full list-none flex-col p-7 md:p-8">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-neu-sm md:text-[1.75rem]"
                  aria-hidden
                >
                  {step.number}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ink md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{step.text}</p>
              </NeumorphicCard>
            </Reveal>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
