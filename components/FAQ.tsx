import { Reveal } from "@/components/Reveal";
import { ChevronDownIcon } from "@/components/icons";

/*
 * Native <details>/<summary> rather than a JS accordion: keyboard support,
 * screen-reader semantics and no-JS behaviour all come for free. The open/close
 * chevron and the card shadow transition — the panel itself opens instantly,
 * which is what <details> does natively and is plenty here.
 */
const QUESTIONS = [
  {
    q: "Kad irvieta būs pieejams?",
    a: "Strādājam pie tā tagad. Pirmās versijas palaišana plānota 2026. gada beigās. Piereģistrējies waitlist, lai būtu pirmais, kas dabū piekļuvi.",
  },
  {
    q: "Vai tas ir droši?",
    a: "Katrs lietotājs pierakstīsies ar identifikāciju. Reitingu sistēma parāda, kam uzticēties. Visi darījumi ir dokumentēti iekšējā chat. Bet — kā jebkurā tirgus platformā, galvenā atbildība paliek pusēm.",
  },
  {
    q: "Kas notiek, ja braucējs sabojā manu paciņu?",
    a: "Puses vienojas par nosacījumiem pirms pārvešanas. Rekomendējam foto pierakstus un skaidru komunikāciju. Nākotnē pievienosim apdrošinājumu profesionāliem pārvadātājiem.",
  },
  {
    q: "Vai man jāreģistrē SIA vai IK, lai kļūtu par braucēju?",
    a: "Nē. Pietiek ar personīgu identifikāciju un abonementu 4.90€/mēnesī. Ja pelni daudz un regulāri, tev pašam jādomā par nodokļu deklarēšanu VID.",
  },
  {
    q: "Kā notiek maksājumi?",
    a: "Sūtītājs un braucējs vienojas par summu iekšējā chat. Nauda tiek pārskaitīta tieši starp jums — mēs neiejaucamies darījumā. Mūsu vienīgais ieņēmums ir braucēju abonements.",
  },
  {
    q: "Kāpēc irvieta ir labāks par Facebook grupām?",
    a: "FB grupās nav uzticības rīku, nav struktūras, nav reitingu. Sludinājumi pazūd starp memiem un reklāmām. irvieta ir veidota tieši šim mērķim — vienkārši, ātri un ar drošības slāni.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-section mt-5 text-ink">Bieži uzdotie jautājumi</h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-4 md:mt-16">
          {QUESTIONS.map(({ q, a }, index) => (
            <Reveal key={q} delay={index * 0.05}>
              <details className="group rounded-card bg-bg shadow-neu-sm transition-shadow duration-300 open:shadow-neu motion-reduce:transition-none">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card p-6 text-left text-base font-semibold text-ink md:text-lg [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-base leading-relaxed text-ink-soft">{a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
