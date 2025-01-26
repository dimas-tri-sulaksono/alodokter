import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const HeroMenu = ({
  href = "",
  classNameLink = "",
  image,
  alt,
  classNameImage = "",
  text,
}) => {
  return (
    <>
      <LinkAtm
        href={href}
        className={`wrap-menu text-center text-[16px] z-[2] pb-[12px] ${classNameLink}`}
      >
        <div className="w-[122px] m-auto mb-[14px] flex justify-center items-center">
          <Image
            className={`rounded-full border-[12px] border-[rgba(255,255,255,10%)] ${classNameImage}`}
            src={image}
            alt={alt}
            width={106}
            height={105}
          />
        </div>
        <span className="font-bold underline text-white">{text}</span>
      </LinkAtm>
    </>
  );
};

export default HeroMenu;
