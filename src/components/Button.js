import React from "react";

export const Button = ({ children }) => {
  return (
    <button className="text-white w-64 text-xl py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg px-5 font-medium  ">
      {children}
    </button>
  );
};
