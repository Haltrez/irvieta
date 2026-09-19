import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import { Reveal } from "@/components/Reveal";
import { CarIcon, CheckIcon, PackageIcon } from "@/components/icons";

const GROUPS = [
  {
    title: "Tev, kam kaut kas jāaizved",
    Icon: PackageIcon,
    items: [
      "Dokumenti, atslēgas, dāvanas",
      "IKEA mēbeles vai sludinājumu preces",
      "Pārtika vai lietas vecākiem citā pilsētā",
      "Jebkas cits, kas neder pakomātā",
    ],
    footnote: "Bez maksas. Vienmēr.",
  },
  {
    title: "Tev, kurš jau brauc",
    Icon: CarIcon,
    items: [
      "Pelni degvielai uz maršrutiem, ko jau brauc",
      "Redzi visus sludinājumus savā reģionā",
      "Pats izvēlies, ko un kad ņemt",
      "Bez SIA, IK vai birokrātijas",
    ],
    footnote: "4.90€ mēnesī. Atceli jebkurā brīdī.",
  },
];

export function ForWhom() {
  return (
    <section id="kam-tas-ir" className="section-padding">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-ink">Kam tas ir?</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {GROUPS.map(({ title, Icon, items, footnote }, index) => (
            <Reveal key={title} delay={index * 0.1} className="h-full">
              <NeumorphicCard hover className="flex h-full flex-col p-7 md:p-9">
                <span className="flex h-14 w-14 items-center justify-center rounded-btn bg-accent text-primary-dark">
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="mt-6 text-xl font-semibold text-ink md:text-2xl">{title}</h3>

                <ul className="mt-6 space-y-3.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-base leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-7 text-base font-semibold text-primary-dark">
                  {footnote}
                </p>
              </NeumorphicCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
