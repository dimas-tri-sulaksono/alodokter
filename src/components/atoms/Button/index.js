import React from "react";

const Button = ({
  className = "bg-white border-[#3570D2] text-[#3570D2]",
  text,
}) => {
  return (
    <button
      className={`border rounded-[3px] px-[18px] py-[11px] text-[14px] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
