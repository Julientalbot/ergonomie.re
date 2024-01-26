"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  { // mentionner les solutions aux problématiques suivantes : santé, performance, rentabilité, culture et engagement, adaptation et innovation
    // + problématiques du dirigeant : pas le temps, tête dans le guidon, absence de recul sur la situation, 
    title: "Optimisez simultanément la santé et la performance", // #santé, #performance, #rentabilité
    description:
      "Notre approche va au-delà des attentes traditionnelles. Elle englobe les aspects physiques, spatiaux, organisationnels et économiques de l'entreprise pour offrir une solution complète. En analysant et en optimisant ces différentes dimensions, nous créons un équilibre parfait entre la santé et la performance, tout en respectant la structure économique et les spécificités de votre entreprise à la Réunion. Cette approche globale garantit des améliorations significatives dans le bien-être des employés et une augmentation mesurable de la productivité et de la rentabilité.",
    type: "video",
    path: "public/home/soudure.mp4",
    format: "video/mp4",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {    title: "Optimisez simultanément la santé et la performance", // #culture et engagement
  description:
    "Notre approche va au-delà des attentes traditionnelles. Elle englobe les aspects physiques, spatiaux, organisationnels et économiques de l'entreprise pour offrir une solution complète. En analysant et en optimisant ces différentes dimensions, nous créons un équilibre parfait entre la santé et la performance, tout en respectant la structure économique et les spécificités de votre entreprise à la Réunion. Cette approche globale garantit des améliorations significatives dans le bien-être des employés et une augmentation mesurable de la productivité et de la rentabilité.",
  type: "video",
  path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
  format: "video/webm",
  svg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  ),
  },
  {    title: "Optimisez simultanément la santé et la performance", // #adaptation et innovation 
  description:
    "Notre approche va au-delà des attentes traditionnelles. Elle englobe les aspects physiques, spatiaux, organisationnels et économiques de l'entreprise pour offrir une solution complète. En analysant et en optimisant ces différentes dimensions, nous créons un équilibre parfait entre la santé et la performance, tout en respectant la structure économique et les spécificités de votre entreprise à la Réunion. Cette approche globale garantit des améliorations significatives dans le bien-être des employés et une augmentation mesurable de la productivité et de la rentabilité.",
  type: "video",
  path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
  format: "video/webm",
  svg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  ),
  },
  {
    title: "Innovation technologique et accompagnement personnalisé",
    description:
      "Intégrez l'ergonomie du futur avec notre usage de technologies avancées comme l'intelligence artificielle pour des diagnostics précis et des solutions personnalisées. Profitez également d'un accès exclusif à un espace client en ligne pendant toute la durée de notre intervention, offrant des ressources riches, des suivis de projet et des avantages supplémentaires pour une expérience client transparente et enrichissante.",
    type: "video",
    path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
    format: "video/webm",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    title: "Diagnostics et interventions sur-mesure",
    description:
      "Parce que je suis à la CPME et au courant [...] Nous comprenons que chaque entreprise est unique. C'est pourquoi nous proposons des solutions ergonomiques flexibles et adaptées à tous les budgets. Que ce soit pour une petite start-up ou une grande entreprise, nos services sont conçus pour répondre spécifiquement à vos défis et à vos capacités financières, garantissant une amélioration continue sans surcharger votre entreprise.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ feature, isOpen, setFeatureSelected }) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <section 
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto"
      id="comment"
    >
      <div className="px-8">
        <h2 className="text-center max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          transformez les défis ergonomiques en
          <span className="bg-primary rounded-lg text-white px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            avantages stratégiques
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>
            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;

//Pour inverser l'ordre :
{/* <section  */}
      // className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto"
      // id="comment"
    // >
      {/* <div className="px-8"> */}
        {/* <h2 className="text-center max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8"> */}
          {/* transformez les défis ergonomiques en */}
          {/* <span className="bg-primary rounded-lg text-white px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap"> */}
            {/* avantages stratégiques */}
          {/* </span> */}
        {/* </h2> */}
        {/* <div className="flex flex-col md:flex-row gap-12 md:gap-24"> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 sm:gap-12 lg:gap-20"> */}
            {/* <ul className="w-full md:order-2"> */}
              {/* {features.map((feature, i) => ( */}
                // <Item
                  // key={feature.title}
                  // index={i}
                  // feature={feature}
                  // isOpen={featureSelected === i}
                  // setFeatureSelected={() => setFeatureSelected(i)}
                // />
              // ))}
            {/* </ul> */}
{/*  */}
            {/* <div className="md:order-1"> */}
              {/* <Media feature={features[featureSelected]} key={featureSelected} /> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    {/* </section> */}