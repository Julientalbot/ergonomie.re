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
    <section className="bg-primary scroll-mt-8 text-white" id="cal">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-28 px-2 py-20 lg:flex-row lg:items-start">
        <div className="flex flex-1 flex-col gap-8">
          <div className="w-fit rounded-lg bg-[#353d34] p-2 font-bold">
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
          <div className="rounded-lg border-2 border-[#353d34] p-6 font-semibold">
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
        <div className="my-auto flex flex-1 flex-col items-center gap-5">
          <Link
            target="_blank"
            href="mailto:julien.talbot@ergonomie.re"
            className="link link-hover flex items-center gap-2"
          >
            <Mail />
            julien.talbot@ergonomie.re
          </Link>
          <Link
            target="_blank"
            href="tel:+262693655544"
            className="link link-hover flex items-center gap-2"
          >
            <Phone />
            +262693655544
          </Link>

          <button
            className="link link-hover flex items-center gap-2"
            onClick={() => setOpen(!open)}
          >
            <Calendar />
            Prendre un rendez-vous
          </button>
        </div>

        <div
          className={`fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 ${open ? "z-50" : "hidden"}`}
        />
        <div
          onClick={() => setOpen(false)}
          className={`fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center ${open ? "z-50" : "z-[-1]"}`}
        >
          <dialog
            onClick={(evt) => {
              evt.preventDefault();
              evt.stopPropagation();
            }}
            open
            className={`relative transition-all duration-300 ${open ? "opacity-100" : "opacity-0"} bg-base-100 h-full w-full max-w-7xl transform overflow-visible rounded-xl p-6 text-left align-middle shadow-xl transition-all md:max-h-[80vh] md:p-8`}
          >
            <div className="mb-5 flex w-full justify-between">
              <h3 className="font-semibold">Prendre un rendez-vous</h3>
              <button
                className="btn btn-square btn-ghost btn-sm"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
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
