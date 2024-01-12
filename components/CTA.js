import ButtonLead from "./ButtonLead";

const CTA = () => {
  return (
    <section className="w-full max-w-3xl text-center px-2 py-10 mx-auto flex flex-col items-center gap-6">
      <p className="p-2 rounded-lg bg-[#353d34] text-white font-bold">
        {"Pas encore décidé ?"}
      </p>
      <p className="text-4xl font-bold">
        {"Obtenez notre guide pour améliorer rapidement et à moindre coût la santé et la productivité de vos équipes"}
      </p>
      <p className="leading-tight">
        {
          "Découvrez les fondamentaux d'un environnement de travail ergonomique. Ce guide vous montre comment l'ergonomie peut transformer la santé et l'efficacité de votre équipe."
        }
      </p>
      <ButtonLead />
    </section>
  );
};

export default CTA;
