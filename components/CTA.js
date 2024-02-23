import ButtonLead from "./ButtonLead";

const CTA = () => {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-2 py-10 text-center">
      <p className="rounded-lg bg-[#353d34] p-2 font-bold text-white">
        {"Pas encore décidé ?"}
      </p>
      <p className="text-4xl font-bold">
        {
          "Obtenez notre guide pour améliorer rapidement et à moindre coût la santé et la productivité de vos équipes"
        }
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
