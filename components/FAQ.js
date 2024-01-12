"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Quels sont les principaux services offerts par ergonomie.re ?",
    answer: "Ergonomie.re se spécialise dans l&apos;optimisation des conditions de travail pour augmenter la santé et la productivité des employés. Nous offrons des solutions ergonomiques personnalisées pour réduire le turnover, améliorer l&apos;épanouissement au travail, et prévenir la dégradation de la qualité du produit."
  },
  // {
    // question: "Quels sont les bénéfices concrets de vos interventions en ergonomie ?",
    // answer: (
      // <p>
        // {/* Nos interventions visent à réduire significativement l&apos;absentéisme et augmenter la productivité des employés. Nous avons aidé de nombreuses entreprises à améliorer leur ambiance de travail et leur performance globale, comme en témoignent nos clients satisfaits. */}
      // {/* </p> */}
    // ),
  // },
  // {
    // question: "Quelle est votre expérience et votre approche dans le domaine de l'ergonomie ?",
    // answer: (
      // <p> 
        // {/* Julien Talbot, le fondateur d&apos;ergonomie.re, possède plus de 7 ans d&apos;expérience en ergonomie. Notre approche se base sur l&apos;écoute et l&apos;adaptabilité aux besoins spécifiques de chaque entreprise pour fournir des solutions sur mesure. */}
      // {/* </p> */}
    // ),
  // },
  // {
    // question: "Comment peut-on planifier une séance de consultation avec ergonomie.re et quel est le coût associé ?",
    // answer: (
      // <p>
        // {/* Vous pouvez planifier un premier échange gratuit et sans engagement pour discuter de vos problématiques. Les interventions débutent à partir de 1428€ pour une évaluation ergonomique complète et des recommandations personnalisées.       */}
      // {/* </p> */}
    // ),
  // },
  // {
    // question: "Offrez-vous des ressources ou guides pour ceux qui souhaitent améliorer leur environnement de travail de manière autonome ?",
    // answer: (
      // <p> Oui, nous offrons un guide gratuit qui présente les fondamentaux d&apos;un environnement de travail ergonomique, montrant comment améliorer rapidement et à moindre coût la santé et la productivité de vos équipes.
      // {/* </p> */}
    // ),
  // },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-red-600" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-300" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-red-600 mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Questions fréquemment posées
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
