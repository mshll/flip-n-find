import React from "react";

function Button({ className, children, ...props }) {
  return (
    <button
      className={`cursor-pointer rounded-lg border-b-[4px] px-6 py-2 transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] active:brightness-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
