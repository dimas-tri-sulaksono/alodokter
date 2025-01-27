import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const HeroMenu = ({
  href = "",
  classNameLink = "",
  image,
  classNameMenu = "",
  text,
}) => {
  return (
    <>
      <LinkAtm
        href={href}
        className={`wrap-menu pb-[12px] text-center text-[16px] ${classNameLink}`}
      >
        <div className="center-alo m-auto mb-1 w-[60px] lg:w-[122px]">
          <div
            className={`menu h-[48px] w-[48px] rounded-full bg-[#f4f8ff] bg-contain bg-no-repeat lg:border-[12px] lg:border-[rgba(255,255,255,10%)] ${classNameMenu} ${image}`}
          ></div>

          {/* <Image
            className={`rounded-full border-[12px] border-[rgba(255,255,255,10%)] ${classNameImage}`}
            src={image}
            alt={alt}
            width={106}
            height={105}
          /> */}
        </div>
        <span className="text-[10px] font-bold text-[#424242] lg:text-white lg:underline">
          {text}
        </span>
      </LinkAtm>
    </>
  );
};

export default HeroMenu;
