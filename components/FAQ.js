"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Quels sont les principaux services offerts par ergonomie.re ?",
    answer:
      "Ergonomie.re se spécialise dans l'optimisation des conditions de travail pour augmenter la santé et la productivité des employés. Nous offrons des solutions ergonomiques personnalisées pour réduire le turnover, améliorer l'épanouissement au travail, et prévenir la dégradation de la qualité du produit.",
  },
  {
    question:
      "Quels sont les bénéfices concrets de vos interventions en ergonomie ?",
    answer:
      "Nos interventions visent à réduire significativement l'absentéisme et augmenter la productivité des employés. Nous avons aidé de nombreuses entreprises à améliorer leur ambiance de travail et leur performance globale, comme en témoignent nos clients satisfaits.",
  },
  {
    question:
      "Quelle est votre expérience et votre approche dans le domaine de l'ergonomie ?",
    answer:
      "Julien Talbot, le fondateur d'ergonomie.re, possède plus de 7 ans d'expérience en ergonomie. Notre approche se base sur l'écoute et l'adaptabilité aux besoins spécifiques de chaque entreprise pour fournir des solutions sur mesure.",
  },
  {
    question:
      "Comment peut-on planifier une séance de consultation avec ergonomie.re et quel est le coût associé ?",
    answer:
      "Vous pouvez planifier un premier échange gratuit et sans engagement pour discuter de vos problématiques. Les interventions débutent à partir de 1428€ pour une évaluation ergonomique complète et des recommandations personnalisées.",
  },
  {
    question:
      "Offrez-vous des ressources ou guides pour ceux qui souhaitent améliorer leur environnement de travail de manière autonome ?",
    answer:
      "Oui, nous offrons un guide gratuit qui présente les fondamentaux d'un environnement de travail ergonomique, montrant comment améliorer rapidement et à moindre coût la santé et la productivité de vos équipes.",
  },
];

const Item = ({ item, isOpen, setIsOpen }) => {
  const accordion = useRef(null);

  return (
    <li>
      <button
        className="border-base-content/10 relative flex w-full items-center gap-2 border-t py-5 text-left text-base font-semibold md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen();
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`text-base-content flex-1 ${isOpen ? "text-red-600" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`ml-auto h-4 w-4 flex-shrink-0 fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              isOpen && "hidden rotate-180"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`overflow-hidden opacity-80 transition-all duration-300 ease-in-out`}
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
  const [open, setOpen] = useState(null);

  return (
    <section id="faq">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-24 md:flex-row">
        <div className="flex basis-1/2 flex-col text-left">
          {/* <p className="inline-block font-semibold text-primary mb-4">FAQ</p> */}
          <p className="text-base-content text-3xl font-extrabold sm:text-4xl">
            Questions fréquemment posées
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item
              key={i}
              item={item}
              setIsOpen={() =>
                setOpen((currentOpen) => (i !== currentOpen ? i : null))
              }
              isOpen={open === i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
