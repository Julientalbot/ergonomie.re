import Image from "next/image";
import React from "react";
import myImage from "public/home/me.jpg";
const About = () => {
  return (
    <section
      id="à-propos"
      className="relative max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 px-2 py-6 xl:pt-8 xl:pb-20 xl:my-20"
    >
      <div className="xl:absolute xl:top-0 xl:left-0 xl:max-w-md p-6 rounded-lg bg-white shadow-xl flex flex-col gap-4">
        <h5 className="text-4xl font-bold">{"Je suis Julien"}</h5>
        <p>
          {
            "Invervenant en ergonomie et évoluant dans le milieu depuis plus de 7 ans."
          }
        </p>
        <p>
          {
            "Aujourd'hui, j'aide les dirigeants à exploiter le plein potentiel de leurs salariés tant en préservant leurs santés, pour plus de performance et moins d'absentéisme."
          }
        </p>
      </div>
      <div className="xl:absolute xl:top-0 xl:right-0 xl:max-w-md p-6 rounded-lg bg-white shadow-xl flex flex-col gap-2 xl:-rotate-1">
        <p className="text-3xl font-bold">{"+ 2 ans"}</p>
        <p>{"à accompagner entreprises réunionnaises."}</p>
      </div>
      <div className="xl:absolute xl:top-1/3 xl:right-0 xl:max-w-md p-6 rounded-lg bg-white shadow-xl flex flex-col gap-2">
        <p className="text-3xl font-bold">{"+ 100 employés"}</p>
        <p>
          {
            "épanouis au travail après une intervention en ergonomie."
          }
        </p>
      </div>
      <div className="xl:absolute xl:bottom-0 xl:right-0 xl:max-w-md p-6 rounded-lg bg-white shadow-xl flex flex-col gap-2 xl:-rotate-1">
        <p className="text-3xl font-bold">{"+ 10 entreprises"}</p>
        <p>{"constatant une baisse de l'absentéisme et une augmentation de la productivité avec mon accompagnement"}</p>
      </div>
      <div className="xl:absolute xl:bottom-0 xl:left-0 xl:max-w-2xl p-6 rounded-lg bg-white shadow-xl xl:rotate-1">
        <p className="font-bold text-2xl">
          {
            "L'équation est simple : des salariés dans de meilleurs conditions de travail = moins d'absentéisme + plus de productivité."
          }
        </p>
      </div>
      <Image
        src={myImage}
        alt="My Image"
        className="rounded-lg"
        // priority={true}
        width={500}
        // height={500}
      />
    </section>
  );
};

export default About;
