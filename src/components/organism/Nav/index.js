import NavButton from "@/components/molecules/NavButton";
import NavLogo from "@/components/molecules/NavLogo";
import NavMenu from "@/components/molecules/NavMenu";
import SearchBar from "@/components/molecules/SearchBar";
import React from "react";

const Nav = ({ className = "bg-white border-[#dadee4]" }) => {
  return (
    <>
      <div
        className={`top-navbar border-b w-full fixed px-8 py-[7px] top-0 left-1/2 z-[100] text-sm transition-all duration-300 transform -translate-x-1/2 ${className}`}
      >
        <div className="container-fluid w-[1340px] mx-auto p-0 block">
          <div className="top-navbar-inner flex justify-between items-center">
            <div className="top-navbar-left flex justify-between h-[49px]">
              <NavLogo />
              <SearchBar
                className={"h-20 mr-4 ml-[29px] py-[4px]"}
                placeholder={"Cari di Alodokter"}
              />
            </div>
            <div class="top-navbar-right w-[830px] ml-[23px] flex justify-between items-center">
              <NavMenu />
              <NavButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
