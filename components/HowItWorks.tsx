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
          <h2 className="heading-section text-ink">Kā tas strādā</h2>
          <p className="body-text mt-4">Trīs soļi. Bez sarežģītām reģistrācijām.</p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} className="h-full">
              <NeumorphicCard as="li" hover className="flex h-full list-none flex-col p-7 md:p-8">
                <span
                  className="text-4xl font-bold leading-none text-primary md:text-5xl"
                  aria-hidden
                >
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{step.text}</p>
              </NeumorphicCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
