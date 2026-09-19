import { Reveal } from "@/components/Reveal";
import { SignupCard } from "@/components/SignupCard";

export function SecondCTA() {
  return (
    <section data-dark className="dark-section relative overflow-hidden">
      {/* Two soft glows so the dark band has depth rather than reading flat. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-light/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-primary/25 blur-3xl"
      />

      <div className="container-page relative px-5 py-20 md:px-8 md:py-28 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-dark">Agrīnā piekļuve</span>
          <h2 className="heading-section mt-5 text-on-dark">Gatavs sākt?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-on-dark-soft md:text-lg">
            Pievienojies waitlist un esi pirmais, kas izmēģina irvieta. Nekad
            nesūtīsim tev spamu — tikai vienreiz, kad būsim gatavi.
          </p>
        </Reveal>

        {/* The form stays on the light surface: neumorphism needs it, and a
            bright card on a dark band is the strongest CTA on the page. */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-md text-left">
          <SignupCard variant="cta" />
        </Reveal>
      </div>
    </section>
  );
}
