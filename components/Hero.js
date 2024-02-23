import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
// import Link from "next/link";
import heroImage from "/public/home/soudure-2.png";
import CTAButton from "./CTAButton";
import TestimonialRating from "@/components/TestimonialRating";

const Hero = () => {
  return (
    (<TestimonialRating />),
    (
      <section className="mx-auto mb-6 flex max-w-7xl flex-col items-center justify-between gap-16 p-2 pt-12 xl:flex-row">
        <div className="flex flex-col items-center justify-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight xl:text-7xl">
            {"le manque d'ergonomie vous "}
            <span className="bg-primary absolute relative z-10 rounded-lg text-white before:-inset-1 before:-z-10">
              {/* <span className="relative before:absolute before:-inset-1 before:rounded-lg before:bg-primary text-white z-10 before:-z-10"> */}
              {"coûte cher"}
            </span>
            {/* {"de votre entreprise"} */}
          </h1>
          <div className="flex flex-col gap-2 text-lg leading-relaxed opacity-80">
            {
              "reconnaissez-vous ces signaux d'alerte au sein de votre entreprise ?"
            }
            <ul className="list-disc pl-5">
              <li>
                {"augmentation de l'absentéisme et des arrêts de travail"}
              </li>{" "}
              {/* santé */}
              <li>{"diminution de la productivité et de la qualité"}</li>{" "}
              {/* performance */}
              <li>{"hausse significative des coûts associés"}</li> {/* coûts */}
              <li>{"baisse de l'engagement des employés"}</li>{" "}
              {/* culture d'entreprise */}
              <li>{"incapacité croissante à innover ..."}</li>{" "}
              {/* coopération et innovation */}
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
          alt="PhotogrAphIe d'un soudeur en train de réaliser une soudure"
          className="rounded-lg"
          priority={true}
          width={600}
          height={500}
        />
      </section>
    )
  );
};

export default Hero;
