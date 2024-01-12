import About from "@/components/About";
import CTA from "@/components/CTA";
import CalEmbed from "@/components/CalEmbed";
import FAQ from "@/components/FAQ";
import FeaturesAccordion from "@/components/FeaturesAccordion";
// import FeaturesAccordion2 from "@/components/FeaturesAccordion2";
// import FeaturesListicle from "@/components/FeaturesListicle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Testimonials3 from "@/components/Testimonials3";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-base-300">
        <Hero />
        <FeaturesAccordion />
        {/* <FeaturesAccordion2 /> */}
        {/* <FeaturesListicle /> */}
        <Problem />
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
