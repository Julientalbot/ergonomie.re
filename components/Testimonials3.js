import Image from "next/image";
import config from "@/config";

// The list of your testimonials. It needs 3 items to fill the row.
const list = [
  {
    // Optional, use for social media like Twitter. Does not link anywhere but cool to display
    username: "Directrice adjointe d'une structure du secteur médico-social",
    // REQUIRED
    name: "Axelle",
    // REQUIRED
    text: "Julien nous a accompagné dans notre projet de démanagement, sur l'aménagement spatial et nouveaux locaux ainsi que la signalétique directionnel. Il a été réactif, professionnel, a su s'adapter et répondre à nos besoins changeants. Nous avons apprécié son écoute et sa disponibilité. Nous le recommandons vivement.",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: "/home/clients/client_1.jpeg",
  },
  {
    username: "Directeur d'une métallerie",
    name: "Jérémie",
    text: "L'entreprise était sur une mauvaise pente, tant en termes d'ambiance que de performance. Julien nous a aidé à redresser la barre. Nous avons vu réduction signiticative de l'absentéisme et une hausse conséquente de la productivité et donc du chiffre d'affaires sur ce début d'année !",
    img: "/home/clients/client_6.jpeg",
  },
  {
    username: "Responsable Hygiène Sécurité Environnement",
    name: "Cécile",
    text: "Nous sommes satisfaits de la prestation de Julien, qui nous a accompagné dans l'analyse et l'amélioration des conditions de travail de nos salariés. Il a su être à l'écoute et a su s'adapter à nos contraintes. Nous le recommandons vivement.",
    img: "/home/clients/client_4.jpeg",
  },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
        <blockquote className="relative flex-1">
          <p className="text-base-content/80 leading-relaxed">
            {testimonial.text}
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
          <div className="w-full flex items-center justify-between gap-2">
            <div>
              <div className="font-medium text-base-content md:mb-0.5">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  {testimonial.username}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={list[i].img}
                  alt={`${list[i].name}'s testimonial for ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials" className="my-6 pb-4 scroll-mt-8">
      <div className="p-2 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <div className="">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              {"Qu'en disent mes clients ?"}
            </h2>
          </div>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what they have to say
            about ShipFast.
          </p> */}
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials3;
