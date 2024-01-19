"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Calendar, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function CalEmbed() {
  const [open, setOpen] = useState(false);

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
        <div className="flex flex-col gap-5 my-auto">
          <Link
            target="_blank"
            href="mailto:julien.talbot@ergonomie.re"
            className="link link-hover flex gap-2 items-center"
          >
            <Mail />
            julien.talbot@ergonomie.re
          </Link>
          <Link
            target="_blank"
            href="tel:+262693655544"
            className="link link-hover flex gap-2 items-center"
          >
            <Phone />
            +262693655544
          </Link>


          <button className="link link-hover flex gap-2 items-center" onClick={() => setOpen(!open)}>
            <Calendar />
            Prendre un rendez-vous
          </button>
        </div>

        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${open ? "z-50" : "hidden"}`} />
        <div
          onClick={() => setOpen(false)}
          className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center ${open ? "z-50" : "z-[-1]"}`}
        >
          <dialog
            onClick={(evt) => {
              evt.preventDefault(); evt.stopPropagation();
            }}
            open
            className={`relative transition-all duration-300 ${open ? "opacity-100" : "opacity-0"} w-full max-w-7xl h-full md:max-h-[80vh] overflow-visible transform text-left align-middle shadow-xl transition-all rounded-xl bg-base-100 p-6 md:p-8`}
          >
            <div className="flex w-full justify-between mb-5">
              <h3 className="font-semibold">
                Prendre un rendez-vous
              </h3>
              <button
                className="btn btn-square btn-ghost btn-sm"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>

            <Cal
              calLink="julien-talbot-ergonome/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </dialog>
        </div>
      </div>
    </section>
  );
}
