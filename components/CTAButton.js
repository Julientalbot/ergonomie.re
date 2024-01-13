"use client"; // Ajoutez cette ligne pour indiquer que c'est un composant client

import Link from "next/link";
import React, { useState } from "react";

const CTAButton = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const ctaStyle = isHovered ? { transform: 'scale(1.1)', transition: 'transform 0.3s ease' } : {};

  return (
    <Link
      href="#cal"
      className={`bg-black px-6 py-2 rounded-lg ${className}`}
      style={ctaStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Planifier un rendez-vous
    </Link>
  );
};

export default CTAButton;
