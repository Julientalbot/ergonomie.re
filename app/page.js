import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FeaturesAccordion2 from "@/components/FeaturesAccordion2";
import FeaturesListicle from "@/components/FeaturesListicle";
import Testimonials3 from "@/components/Testimonials3";
import CalEmbed from "@/components/CalEmbed";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem /> {/* Agitation du problème = listing précis des effets de l'absence d'ergonomie. */}
        {/* <FeaturesAccordion /> à supprimer */}
        <FeaturesAccordion2 /> {/* à créer. Présentation de la solution et de ses bénéfices. Equivalent de : "vous utilisez telle méthode, c'est l'ancienne, voilà avec ma méthode ce qu'on pourrait avoir." */}
        <FeaturesListicle /> {/* méthodologie détaillée et éléments différençiants par rapport à la concurrence */}
        <Testimonials3 />
        <CalEmbed />
        <About />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
