import React from "react";

const Input = ({
  type,
  name,
  id,
  placeholder,
  className = "w-[264px] h-[42px]",
}) => {
  return (
    <input
      className={`bg-transparent border rounded-[3px] py-0 pl-9 pr-1 ${className}`}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
