import Link from "next/link";
import React from "react";

const CTAButton = ({ className }) => {
  return (
    <Link href="#cal" className={`bg-black px-6 py-2 rounded-lg ${className}`}>
      Planifier un rendez-vous
    </Link>
  );
};

export default CTAButton;
