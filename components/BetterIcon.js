import React from "react";

// A better way to illustrate with icons
// Pass any SVG icon as children (recommended width/height : w-6 h-6)
// By default, it's using your primary color for styling
const BetterIcon = ({ children }) => {
  return (
    <div className="bg-primary/20 text-primary inline-flex h-12 w-12 items-center justify-center rounded-full">
      {children}
    </div>
  );
};

export default BetterIcon;
