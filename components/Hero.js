import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
// import Link from "next/link";
import heroImage from "/public/home/soudure-2.png";
import CTAButton from "./CTAButton";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-16 p-2 pt-12 mb-6">
      <div className="flex flex-col gap-4 xl:gap-8 items-center justify-center text-center xl:text-left xl:items-start">
        <h1 className="font-extrabold text-4xl xl:text-7xl tracking-tight">
          {"le manque d'ergonomie vous "}
          <span className="relative absolute before:-inset-1 rounded-lg bg-primary text-white z-10 before:-z-10"
          >{/* <span className="relative before:absolute before:-inset-1 before:rounded-lg before:bg-primary text-white z-10 before:-z-10"> */}
          coûte cher
          </span>
        </h1>
        <div className="text-lg opacity-80 leading-relaxed flex flex-col gap-2">
        <ul className="list-disc pl-5">
  <li>hausse des accidents et arrêts de travail</li>
  <li>{"baisse de l'efficacité opérationnelle,"}</li>
  <li>augmentation des coûts,</li>
  <li>{"diminution de l'engagement des employés,"}</li>
  <li>{"incapacité à innover ..."}</li>
</ul>
        </div>
        <div className="flex gap-2">
          <CTAButton className="text-white animate-ctaBlack" />
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
  );
};

export default Hero;
