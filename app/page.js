import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion2 from "@/components/FeaturesAccordion2";
import FeaturesListicle from "@/components/FeaturesListicle";
import Testimonials3 from "@/components/Testimonials3";
import CalEmbed from "@/components/CalEmbed";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Structure : Sensibilisation / (reco sociale : logo d'entreprises) / Reconnaissance du problème / Présentation de la solution / Avantages spécifiques (pourquoi nous ?) / CTA / A propos avec reconnaissance a-sociale comme les diplômes 

export default function Home() {
  return (
    <>
    <Suspense>
      <Header />
      </Suspense> {/* logo / [votre problème / notre solution / ce qui nous différencie / qui je suis] / CTA(s) */}
      <main>
        <Hero /> {/* unaware / votre problème : le manque d'ergonomie coûte cher */}
        <Problem /> {/* problem aware : Agitation du problème = listing précis des effets de l'absence d'ergonomie et d'EFC */}
        <FeaturesAccordion2 /> {/* solution aware : Présentation de la solution et de ses bénéfices. Equivalent de : "vous utilisez telle méthode, c'est l'ancienne, voilà avec ma méthode ce qu'on pourrait avoir."*/}
        <FeaturesListicle /> {/* product aware : (1) un ergonome vraiment ergonome (je ne vends pas de chaise), (2)  */}
        <Testimonials3 /> {/*  */}
        <CalEmbed /> {/* most aware : */}
        <About /> {/*  */}
        <CTA /> {/*  */}
        <FAQ /> {/*  */}
      </main>
      <Footer /> {/*  */}
    </>
  );
}
