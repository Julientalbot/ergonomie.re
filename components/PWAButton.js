"use client";

import { useEffect, useState } from "react";

function PWAInstall() {
  const [isIphone, setIsIphone] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!window || typeof window === "undefined") return;

    const isIphoneDevice =
      /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIphone(isIphoneDevice);

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      document?.querySelector("#install").removeAttribute("hidden");
    });
  }, []);

  const handleInstallClick = async () => {
    if (isIphone || !installPrompt) {
      setShowModal(true);
    } else if (installPrompt) {
      try {
        const tOut = setTimeout(() => {
          setShowModal(true);
        }, 1000);

        installPrompt
          .prompt()
          .then(() => {
            clearTimeout(tOut);
            setShowModal(false);
            installPrompt.userChoice
              .then(() => {
                setShowModal(false);
                clearTimeout(tOut);

              })
              .catch(() => {
                setShowModal(true);
              })
              .finally(() => {
                setInstallPrompt(null);
                document?.querySelector("#install").setAttribute("hidden", "");
              });
          })
          .catch(() => {
            setShowModal(true);
          });
      } catch (error) {
        console.error(error);
        setShowModal(true);
      }
    }
  };

  return (
    <>
      <button
        id="install"
        onClick={handleInstallClick}
      >
        {"Installer l'application"}
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-base-100 text-primary rounded-lg p-6 w-11/12 max-w-md relative">
            <span
              className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h2 className="text-xl font-semibold mb-4">
              {"Installer l'application"}
            </h2>
            <p className="mb-4">
              {
                "Installez l'application sur votre appareil pour y accéder facilement à tout moment. Pas de boutique d'applications. Pas de téléchargement. Pas de tracas."
              }
            </p>
            <ol className="list-decimal list-inside text-left space-y-2">
              <li>{"Appuyez sur l'icône de partage en bas de l'écran."}</li>
              <li>{"Sélectionnez 'Ajouter à l'écran d'accueil'."}</li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
}

export default PWAInstall;
