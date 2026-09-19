import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import { Reveal } from "@/components/Reveal";
import { SignupCard } from "@/components/SignupCard";

export function SecondCTA() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <Reveal>
          <NeumorphicCard className="mx-auto max-w-3xl px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="heading-section text-ink">Gatavs sākt?</h2>
            <p className="body-text mx-auto mt-4 max-w-xl">
              Pievienojies waitlist un esi pirmais, kas izmēģina irvieta. Nekad
              nesūtīsim tev spamu — tikai vienreiz, kad būsim gatavi.
            </p>

            {/* The signup card sits inset here so it reads as a well, not a
                second raised card stacked on the first. */}
            <div className="mx-auto mt-10 max-w-md text-left">
              <SignupCard variant="cta" className="bg-bg shadow-neu-inset" />
            </div>
          </NeumorphicCard>
        </Reveal>
      </div>
    </section>
  );
}
