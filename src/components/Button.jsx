import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center  px-7 py-4 border text-lg leading-none gap-2 font-montserrat bg-coral-red rounded-full text-white border-coral-red ">
      {label}
      {iconURL ? (
        <img src={iconURL} alt="Icon" className="w-5 h-5 ml-2 rounded-full" />
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;
