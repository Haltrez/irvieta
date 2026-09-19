import { Reveal } from "@/components/Reveal";
import { LeafIcon, MapPinIcon, ShieldIcon, SparkIcon } from "@/components/icons";

const REASONS = [
  {
    title: "Vienkārši",
    Icon: SparkIcon,
    text: "Pierakstoties ar Google vai epastu tu esi iekšā 30 sekundēs. Bez SIA, bez papīriem, bez birokrātijas.",
  },
  {
    title: "Visa Latvija",
    Icon: MapPinIcon,
    text: "Ne tikai Rīga. No Ventspils līdz Ludzai — ikviena pilsēta un ciems ir mūsu tirgus.",
  },
  {
    title: "Zaļāks ceļš",
    Icon: LeafIcon,
    text: "Tukšas mašīnas piepilda tukšas paciņas. Katrs sūtījums, ko paņem braucējs pa ceļam, ir viens braucējs mazāk uz Latvijas ceļiem.",
  },
  {
    title: "Uzticams",
    Icon: ShieldIcon,
    text: "Reitingu sistēma, iekšējais chat, drošas iepazīšanās procedūra. Zini, ar ko strādā.",
  },
];

export function WhyIrvieta() {
  return (
    <section id="kapec" className="section-padding">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-ink">Kāpēc irvieta?</h2>
        </Reveal>

        {/* Flat, not neumorphic — the cards above already carry that weight. */}
        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
          {REASONS.map(({ title, Icon, text }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-accent text-primary-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink md:text-xl">{title}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-ink-soft">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
