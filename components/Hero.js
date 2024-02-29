import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import CTAButton from "./CTAButton";
// import TestimonialRating from "@/components/TestimonialRating";
import heroImage from "/public/home/soudure-2.png";

const Hero = () => {
  return (
    <>
      {/* <TestimonialRating /> */}
      <section className="mx-auto mb-6 flex max-w-7xl flex-col items-center justify-between gap-16 p-2 pt-12 xl:flex-row">
        <div className="flex flex-col items-center justify-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight xl:text-7xl">
            {"le manque d'ergonomie "}
            <span className="bg-primary absolute relative z-10 rounded-lg text-white before:-inset-1 before:-z-10">
              {"coûte cher"}
            </span>
          </h1>
          <div className="flex flex-col gap-2 text-lg leading-relaxed opacity-80">
            {
              "reconnaissez-vous ces signaux d'alerte au sein de votre entreprise ?"
            }
            <ul className="list-disc pl-5">
              {[
                "santé",
                "performance",
                "coûts",
                "culture d'entreprise",
                "coopération et innovation",
              ].map((item, index) => (
                <li key={index}>
                  {item === "santé" &&
                    "augmentation de l'absentéisme et des arrêts de travail"}
                  {item === "performance" &&
                    "diminution de la productivité et de la qualité"}
                  {item === "coûts" &&
                    "hausse significative des coûts associés"}
                  {item === "culture d'entreprise" &&
                    "baisse de l'engagement des employés"}
                  {item === "coopération et innovation" &&
                    "incapacité croissante à innover ..."}
                </li>
              ))}
            </ul>
            {"agissons ensemble dés aujourd'hui."}
          </div>
          <div className="flex gap-2">
            <CTAButton className="animate-ctaBlack text-white" />
          </div>
          <TestimonialsAvatars priority={true} />
        </div>
        <Image
          src={heroImage}
          alt="Photographie d'un soudeur en train de réaliser une soudure"
          className="rounded-lg"
          priority={true}
          width={600}
          height={500}
        />
      </section>
    </>
  );
};

export default Hero;
