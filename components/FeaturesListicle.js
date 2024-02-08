"use client";

import { useState, useEffect, useRef } from "react";

// List of features to display:
// - name: name of the feature
// - description: description of the feature (can be any JSX)
// - svg: icon of the feature
const features = [
  {
    name: "Analyse",
    description: (
      <>
        <ul className="space-y-1">
          {[
            "Identification des points de friction",
            "Étude approfondie des conditions de travail",
            "Analyse des interactions et de l'ergonomie des postes",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-red-600 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {"Amélioration du bien-être et de l'efficacité des employés"}
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    name: "Conception",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Développement collaboratif avec les parties prenantes",
            "Création de solutions innovantes et adaptées",
            "Validation des concepts par des prototypes",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-red-600 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {"Solutions personnalisées favorisant l'engagement des équipes"}
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    name: "Accompagnement",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Guidance personnalisée pour l'intégration des solutions",
            "Programmes de formation sur mesure",
            "Assistance continue pendant la phase de transition",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-red-600 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {
              "Transition efficace et minimisation de la résistance au changement"
            }
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    name: "Suivi",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Mesure des impacts via des KPI spécifiques",
            "Rapports réguliers sur l'évolution de la performance",
            "Recommandations pour des améliorations continues",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-red-600 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {"Résultats mesurables et amélioration continue garantie"}
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    name: "Formation",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Sessions de formation pour une autonomie accrue",
            "Renforcement des compétences et des connaissances ergonomiques",
            "Soutien pour l'adoption des bonnes pratiques",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-red-600 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {"Autonomie accrue et compétences durables des équipes"}
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    name: "Modèle économique",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Exploration de l'Économie de la Fonctionnalité et de la Coopération",
            "Conseils pour une performance durable et une responsabilité partagée",
            "Stratégies pour une croissance économique respectueuse des principes éthiques et sociaux",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-red-600 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {"Avantage concurrentiel grâce à un modèle d'affaires innovant"}
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

// A list of features with a listicle style.
// - Click on a feature to display its description.
// - Good to use when multiples features are available.
// - Autoscroll the list of features (optional).
const FeaturesListicle = () => {
  const featuresEndRef = useRef(null);
  const [featureSelected, setFeatureSelected] = useState(features[0].name);
  const [hasClicked, setHasClicked] = useState(false);

  // (Optional) Autoscroll the list of features so user know it's interactive.
  // Stop scrolling when user scroll after the featuresEndRef element (end of section)
  // emove useEffect is not needed.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      // stop the interval when the user scroll after the featuresRef element
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("STOP AUTO CHANGE");
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="pt-16" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="max-md:px-8 max-w-3xl">
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            {/* 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it? */}
            {"Méthodologie de l'intervention"}
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
            {
              "Notre méthodologie en cinq étapes clés allie analyse rigoureuse et innovation pratique pour optimiser la performance et le bien-être au sein de votre entreprise. Chaque étape est conçue pour apporter des avantages spécifiques, assurant des résultats durables et mesurables."
            }
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
          {features.map((feature, index) => (
            <span
              key={feature.name}
              onClick={() => {
                if (!hasClicked) setHasClicked(true);
                setFeatureSelected(feature.name);
              }}
              className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
            >
              <span
                className={`duration-100 text-3xl ${
                  featureSelected === feature.name
                    ? "text-red-600"
                    : "text-base-content/30 group-hover:text-base-content/50"
                }`}
              >
                {index + 1}
              </span>
              <span
                className={`font-semibold text-sm ${
                  featureSelected === feature.name
                    ? "text-red-600"
                    : "text-base-content/50"
                }`}
              >
                {feature.name}
              </span>
            </span>
          ))}
        </div>
        <div className="">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
            <div
              className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
              key={featureSelected}
            >
              <h3 className="font-semibold text-base-content text-lg">
                {features.find((f) => f.name === featureSelected)["name"]}
              </h3>

              {features.find((f) => f.name === featureSelected)["description"]}
            </div>
          </div>
        </div>
      </div>
      {/* Just used to know it's the end of the autoscroll feature (optional, see useEffect) */}
      <p className="opacity-0" ref={featuresEndRef}></p>
    </section>
  );
};

export default FeaturesListicle;
