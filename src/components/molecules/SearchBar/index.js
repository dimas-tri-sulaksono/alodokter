import Input from "@/components/atoms/Input";
import React from "react";

const SearchBar = ({
  className,
  placeholder,
  image = "bg-[url('/images/search.png')]",
  classNameInput = "border-[#dadee4] rounded-[2px] h-[42px] w-[264px] ",
}) => {
  return (
    <div className={className}>
      <Input
        className={`${classNameInput} py-[1px] pr-[2px] pl-[40px] bg-no-repeat bg-[length:24px] bg-[position:12px_center] focus-visible:outline-none focus-within:border-[#3570d2] ${image}`}
        type={"search"}
        name={"search"}
        id={"search"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
