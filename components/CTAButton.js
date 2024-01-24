"use client"; // Ajoutez cette ligne pour indiquer que c'est un composant client

import Link from "next/link";
import React, { useState } from "react";

const CTAButton = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const ctaStyle = isHovered ? { transform: 'scale(1.1)', transition: 'transform 0.3s ease' } : {};

  return (
    <Link
      href="#cal"
      className={`bg-primary px-6 py-2 rounded-lg ${className}`}
      style={ctaStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Optimiser mon entreprise
    </Link>
  );
};

export default CTAButton;
