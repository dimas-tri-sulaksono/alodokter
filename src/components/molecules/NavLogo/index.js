import Image from "next/image";
import React from "react";

const NavLogo = ({
  image = "/images/logo-header.webp",
  width = 216.5,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-[120px] py-[10px] ${className}`}
    >
      <a href="#" id="homeLogo" class="flex">
        <Image
          className="mr-[7px]"
          src={image}
          alt="logo-home"
          height={32}
          width={width}
        />
      </a>
    </div>
  );
};

export default NavLogo;
