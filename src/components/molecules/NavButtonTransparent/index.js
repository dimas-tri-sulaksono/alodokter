import Button from "@/components/atoms/Button";
import React from "react";

const NavButtonTransparent = ({ className = "flex" }) => {
  return (
    <>
      <div className={className}>
        <Button
          text={"Masuk / Daftar"}
          className="bg-white border-white rounded-[8px] px-[14.7px] text-alo text-[18px] font-bold"
        />
        <Button
          text={"Download Aplikasi"}
          // className="bg-alo border-alo text-white ml-[20px]"
          className="bg-transparent border-white rounded-[8px] h-[48px] ml-[14px] py-[11px] px-[14.7px] whitespace-nowrap text-white text-[18px] font-bold"
        />
      </div>
    </>
  );
};

export default NavButtonTransparent;
