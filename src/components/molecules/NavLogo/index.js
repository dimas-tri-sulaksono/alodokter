import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const NavLogo = ({
  image = "/images/logo-header.webp",
  width = 216.5,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-[216px] py-[10px] ${className}`}
    >
      <LinkAtm href="#" id="homeLogo" className="flex">
        <Image
          className="mr-[7px]"
          src={image}
          alt="logo-home"
          height={32}
          width={width}
        />
      </LinkAtm>
    </div>
  );
};

export default NavLogo;
