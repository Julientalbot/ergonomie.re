"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Réduisez considérablement le turnover de votre entreprise.",
    description: (
      <div className="flex flex-col gap-2">
        <p>
          {
            "Un employé qui ne se sent pas à l’aise dans son cadre de travail à 3 fois plus de chance de changer d’entreprise."
          }
        </p>
        <p>
          {
            "Nos solutions ergonomiques améliorent l’épanouissement au travail de vos employés réduisant ainsi considérablement votre turnover."
          }
        </p>
        <p>
          {
            "Le coût de remplacement d’un employé est en moyenne de 6 à 9 mois de salaire."
          }
        </p>
      </div>
    ),
    type: "image",
    path: "/home/2nd-1.png",
    alt: "A person done with her work",
  },
  {
    title: "Anticipez la dégradation de la qualité de votre produit.",
    description: (
      <div className="flex flex-col gap-2">
        <p>
          {
            "N’attendez plus le point de non-retour pour améliorer l’ergonomie de votre entreprise."
          }
        </p>
        <p>
          {
            "La baisse de motivation de vos employés, le manque d’implication et la mauvaise ambiance sont des facteurs conduisant à une baisse de qualité de votre produit."
          }
        </p>
        <p>
          {
            "Ces signaux sont liés à un point de friction ergonomique au sein de votre entreprise."
          }
        </p>
      </div>
    ),
    type: "image",
    path: "/home/3rd-1.png",
    alt: "Productiving",
  },
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ feature, isOpen, setFeatureSelected }) => {
  const accordion = useRef(null);
  const { title, description } = feature;
  // const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex w-full items-start gap-2 py-5 text-left text-base font-medium md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <div
          className={`duration-5000 mt-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown />
        </div>
        <span
          className={`text-base-content flex-1 ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline text-4xl">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`text-base-content-secondary overflow-hidden transition-all duration-300 ease-in-out`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 text-lg leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl w-full sm:w-[26rem]";
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
    <section className="mx-auto max-w-7xl px-2 py-6" id="comment">
      <div className="">
        <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
          Conserver la santé des individus et augmenter
          <span className="bg-primary ml-1 whitespace-nowrap rounded-lg px-2 leading-relaxed text-white md:ml-1.5 md:px-4">
            les performances
          </span>
          {"de l'entreprise"}
        </h2>
        <div className=" flex flex-col gap-12 md:flex-row md:gap-24">
          <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:flex-row">
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
