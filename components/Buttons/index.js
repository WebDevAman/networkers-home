import React from "react";

const Button = ({ text, styles }) => {
  return (
    <button
      className={`${
        styles ? styles : "bg-blue-600  text-white"
      }    rounded-md font-semibold text-xs md:text-md `}
    >
      {text}
    </button>
  );
};

export default Button;
