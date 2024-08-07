"use client";

import { useEffect } from "react";

function PWAInstall() {
  useEffect(() => {
    if (!window || typeof window === "undefined") return;
    let installPrompt = null;
    const installButton = document?.querySelector("#install");

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      installPrompt = event;
      installButton.removeAttribute("hidden");
    });

    installButton?.addEventListener("click", async () => {
      if (!installPrompt) return;

      installPrompt?.prompt()
      installPrompt?.userChoice
        .then(console.log)
        .catch(console.error)
        .finally(disableInAppInstallPrompt);
    });

    function disableInAppInstallPrompt() {
      installPrompt = null;
      installButton.setAttribute("hidden", "");
      installButton.classList.add("hidden")
    }
  }, [])

  return (
    <button
      id="install"
    >{"Installer l'application"}</button>
  )
}

export default PWAInstall;
