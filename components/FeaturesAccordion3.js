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
  { 
    title: "Efficacité Maximale, Perturbation Minimale",
    description:
    "Notre approche unique réside dans notre capacité à intégrer rapidement et efficacement des solutions ergonomiques dans votre environnement de travail existant. Conçus pour minimiser les perturbations, nos processus sont flexibles et adaptés à votre calendrier, assurant une transition fluide sans sacrifier le temps précieux de vos employés. Choisissez nos services pour une amélioration qui respecte le rythme de votre entreprise.",
    type: "image",
    path: "/home/santé.png",
    format: "image/png",
    svg: (
<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>
  </svg>
    ),
  },
  {    title: "Un Investissement intelligent, Rentable et Mesurable",
  description:
  "Notre approche se distingue par son haut rendement sur investissement. Grâce à l'utilisation de technologies avancées comme l'IA, nous offrons des solutions ergonomiques non seulement efficaces mais aussi rentables. Chaque intervention est orientée vers l'amélioration tangible de la productivité et la réduction des coûts, avec des résultats mesurables pour assurer la clarté et la transparence du retour sur investissement.",
  path: "/home/performance.png",
    format: "image/png",
  svg: (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4.5V19c0 .6.4 1 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.2M20 9v3.2"/>
  </svg>
  ),
  },
  {    title: "Solutions Personnalisées et Adaptatives", 
  description:
  "Nos services se distinguent par leur capacité à s'adapter parfaitement à la spécificité de chaque entreprise. Que ce soit en termes de taille, de secteur d'activité, ou de culture locale, nous offrons des recommandations et des interventions sur mesure. Notre engagement commence dès le premier contact avec une formation continue, assurant des solutions parfaitement alignées avec votre contexte unique.",
  type: "image",
    path: "/home/rentabilité.png",
    format: "image/png",
  svg: (
<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 10h9.2M6 14h9.2M18 5a6 6 0 0 0-3.4-1C11 4 7.8 7.6 7.8 12s3 8 6.8 8a6 6 0 0 0 3.4-1"/>
  </svg>
  ),
  },
  {
    title: "Créez une culture d'entreprise qui attire et garde les talents && Partenariat Durable et Engagement Profond",
    description:
      "Forgez une culture d'entreprise qui valorise et engage chaque employé. En se concentrant sur le bien-être, nous aidons à attirer et retenir les talents, renforçant ainsi la dynamique interne et l'attractivité externe. && Chez nous, l'intervention ne se termine pas avec notre départ. Nous nous engageons dans un partenariat à long terme, offrant un suivi post-intervention pour garantir la pérennité des améliorations. De plus, nos programmes de formation et de sensibilisation garantissent l'engagement et l'adoption des pratiques ergonomiques par tous les employés, renforçant ainsi l'efficacité et la durabilité des résultats.",
      type: "image",
      path: "/home/coopération.png",
      format: "image/png",
    svg: (
<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
  </svg>
    ),
  },
  {
    title: "Clarté et Transparence dans Chaque Échange",
    description:
    "La communication est au cœur de notre approche. Nous nous engageons à maintenir une communication transparente et régulière, vous tenant informé à chaque étape du projet. Notre objectif est d'assurer une collaboration fluide et efficace, éliminant toute ambiguïté ou malentendu. De plus, l'accès à un espace client dédié sur ergonomie.re vous permet de suivre l'évolution de notre intervention et d'accéder à toutes les informations pertinentes en toute transparence.",
    type: "image",
    path: "/home/innovation.png",
    format: "image/png",
    svg: (
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
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
            
            {/* Placez le composant Media en premier et utilisez md:order-1 pour le déplacer vers la gauche */}
            <div className="md:order-1">
              <Media feature={features[featureSelected]} key={featureSelected} />
            </div>

            {/* Utilisez md:order-2 pour déplacer la liste des fonctionnalités vers la droite */}
            <ul className="w-full md:order-2">
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