import Button from "@/components/atoms/Button";
import React from "react";

const NavButtonMol = ({ className = "flex" }) => {
  return (
    <>
      <div className={className}>
        <Button text={"Masuk"} className="bg-white border-alo  text-alo" />
        <Button
          text={"Download Aplikasi"}
          className="bg-alo border-alo text-white ml-[20px]"
        />
      </div>
    </>
  );
};

export default NavButtonMol;
