import InputAtm from "@/components/atoms/InputAtm";
import React from "react";

const SearchBarMol = ({ className, placeholder }) => {
  return (
    <div className={className}>
      <InputAtm
        className={"w-[264px] h-[42px]"}
        type={"search"}
        name={"search"}
        id={"search"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBarMol;
