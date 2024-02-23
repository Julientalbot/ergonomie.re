// import React from 'react';

export default function TestimonialCard({
  testimonialText,
  imageName,
  altText,
  personName,
  company,
}) {
  // Cette fonction sera appelée une fois que le composant est monté dans le navigateur
  function createCard() {
    const cardDiv = document.createElement("div");
    cardDiv.className = "space-y-4 max-w-md mx-auto";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 35 30");
    svg.setAttributeNS(null, "class", "w-8 fill-success");
    svg.innerHTML = `...`; // Votre contenu SVG ici

    cardDiv.appendChild(svg);

    const pText = document.createElement("p");
    pText.className = "md:text-lg leading-relaxed";
    pText.textContent = testimonialText;
    cardDiv.appendChild(pText);

    const infoDiv = document.createElement("div");
    infoDiv.className = "flex items-center gap-2";

    const img = document.createElement("img");
    img.src = imageName;
    img.alt = altText;
    img.loading = "lazy";
    img.width = 48;
    img.height = 48;
    img.className = "w-10 h-10 rounded-full object-cover";
    img.style.color = "transparent";
    infoDiv.appendChild(img);

    const pInfo = document.createElement("p");
    pInfo.textContent = `${personName}, `;
    const span = document.createElement("span");
    span.className = "font-bold";
    span.textContent = company;
    pInfo.appendChild(span);

    infoDiv.appendChild(pInfo);

    cardDiv.appendChild(infoDiv);

    const container = document.getElementById("testimonialContainer");
    if (container) {
      container.appendChild(cardDiv);
    }
  }

  // Vérifier si le composant s'exécute côté client
  if (typeof window !== "undefined") {
    // S'assurer que le DOM est chargé avant de créer la carte
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", createCard);
    } else {
      createCard();
    }
  }

  // Retourner null car tout est géré dynamiquement
  return null;
}
