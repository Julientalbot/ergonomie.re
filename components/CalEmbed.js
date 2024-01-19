"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section className="bg-primary text-white scroll-mt-8" id="cal">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-28 items-center px-2 py-20">
        <div className="flex flex-col gap-8">
          <div className="p-2 rounded-lg font-bold bg-[#353d34] w-fit">
            Durée : 30 minutes
          </div>
          <h3 className="text-4xl font-bold">
            {
              "Besoin d'un accompagnement ? Planifions un premier échange gratuit dès maintenant."
            }
          </h3>
          <p className="opacity-70">
            {
              "Je travaille avec toutes les personnes soucieuses d'améliorer leurs environnemments de travail, recherchant une diminution de la pénibilité et une augmentation de la performance."
            }
          </p>
          <p className="opacity-70">
            {
              "Ce premier échange gratuit et sans engagement a pour but d'identifier vos principales problématiques et de déterminer comment je peux vous accompagner à les résoudre."
            }
          </p>
          <div className="p-6 border-2 border-[#353d34] rounded-lg font-semibold">
            {
              "Mes interventions commencent à partir de 1428€* pour une évaluation ergonomique complète et des recommandations sur mesure"
            }
          </div>
          <p className="opacity-70">
            {
              "*Tarif minimum nous permettant de bénéficier d'aides de la CGSS. Un devis détaillé sera établi après notre premier échange."
            }
          </p>
        </div>
        <Cal
          calLink="julien-talbot-ergonome/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </section>
  );
}
