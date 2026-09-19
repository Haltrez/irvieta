import { LatviaMap } from "@/components/LatviaMap";
import { Reveal } from "@/components/Reveal";

// Counts are deliberately vague ("katrs ciems") rather than invented figures —
// there is no platform data yet, and fake stats on a pre-launch page are a bad
// promise to make.
const POINTS = [
  {
    title: "Ne tikai Rīga",
    text: "Lielceļi, mazceļi un tie, kas tikai vietējiem zināmi. Ja kāds tur brauc, tur ir irvieta.",
  },
  {
    title: "Maršruti, kas jau notiek",
    text: "Neviens nebrauc speciāli tavas paciņas dēļ. Braucējs jau ir ceļā — tava paciņa vienkārši brauc līdzi.",
  },
  {
    title: "Arī atpakaļceļš",
    text: "Puse kravas auto Latvijā atpakaļceļu brauc tukši. Tieši tur ir visvairāk brīvās vietas.",
  },
];

export function Coverage() {
  return (
    <section id="visa-latvija" data-dark className="dark-section relative overflow-hidden">
      {/* Soft mint glow behind the map, kept inside the section by overflow-hidden. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-primary-light/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_8fr] lg:gap-14">
          <Reveal>
            <span className="eyebrow-dark">Pārklājums</span>
            <h2 className="heading-section mt-5 text-on-dark">
              No Ventspils
              <br className="hidden sm:block" /> līdz Ludzai.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-on-dark-soft md:text-lg">
              Katru dienu pa Latvijas ceļiem brauc tūkstošiem cilvēku ar pustukšām
              bagāžniekiem. irvieta ir karte, kas parāda, kurš brauc tavā virzienā.
            </p>

            <ul className="mt-10 space-y-7">
              {POINTS.map((point) => (
                <li key={point.title} className="border-l-2 border-primary-light/40 pl-5">
                  <h3 className="text-base font-semibold text-on-dark md:text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-on-dark-soft">
                    {point.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <div>
            <LatviaMap className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
