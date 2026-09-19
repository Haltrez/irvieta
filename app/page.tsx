import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ForWhom } from "@/components/ForWhom";
import { Coverage } from "@/components/Coverage";
import { Pricing } from "@/components/Pricing";
import { WhyIrvieta } from "@/components/WhyIrvieta";
import { FAQ } from "@/components/FAQ";
import { SecondCTA } from "@/components/SecondCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ForWhom />
        <Coverage />
        <Pricing />
        <WhyIrvieta />
        <FAQ />
        <SecondCTA />
      </main>
      <Footer />
    </>
  );
}
