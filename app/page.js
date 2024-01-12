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
        <Problem />
        <FeaturesAccordion />
        <FeaturesAccordion2 />
        {/* <FeaturesListicle /> */}
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
