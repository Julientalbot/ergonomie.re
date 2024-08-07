"use client"
import React, { useState, useEffect } from "react";

const PWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("Accepter");
      } else {
        console.log("Refused");
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <button onClick={handleInstallClick}>{"Installer l'application"}</button>
  );
};

export default PWAButton;
