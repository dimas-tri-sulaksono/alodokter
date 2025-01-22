import Image from "next/image";
import React from "react";

const NavLogoMol = ({ className }) => {
  return (
    <div className={`flex items-center py-[9px] ${className}`}>
      <a href="#" id="homeLogo" class="flex">
        <Image
          className="mr-[7px]"
          src="/images/logo-header.webp"
          alt="logo-home"
          height={32}
          width={264}
        />
      </a>
    </div>
  );
};

export default NavLogoMol;
