import NavButton from "@/components/molecules/NavButton";
import NavButtonTransparent from "@/components/molecules/NavButtonTransparent";
import NavLogo from "@/components/molecules/NavLogo";
import NavMenu from "@/components/molecules/NavMenu";
import SearchBar from "@/components/molecules/SearchBar";
import React from "react";

const NavTransparent = ({ className = "bg-transparent border-none" }) => {
  return (
    <>
      <div
        id=""
        className={`top-navbar bg-white xl:bg-transparent border-b w-full h-[80px] fixed left-1/2 z-[100] text-sm transition-all duration-300 transform -translate-x-1/2 ${className}`}
      >
        <div className="container-fluid w-full max-w-[1238px] h-[80px] mx-auto p-0">
          <div className="top-navbar-inner lg:flex justify-between items-center h-[80px] py-[15.5px]">
            <div className="lg:top-navbar-left flex justify-center items-center">
              <NavLogo image="/images/logo.svg" width={113} />
              <div class="vl border-l border-[#ffffff] h-[29px] my-[10px] ml-[36px]"></div>
              <div class="hidden md:block">
                <SearchBar
                  image="bg-[url('/images/search.svg')]"
                  classNameInput="placeholder-white rounded-[8px] w-[226px] h-[48px] flex justify-center items-center"
                  className={
                    "mr-4 ml-[32px] py-[4px] flex justify-center items-center"
                  }
                  placeholder={"Cari di Alodokter"}
                />
              </div>
            </div>
            <div class="top-navbar-right w-[790px] flex justify-between items-center">
              <NavMenu className="text-white" />
              <NavButtonTransparent />
            </div>
          </div>
        </div>
        <div class="h-10 bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500">
      </div>
      </div>
    </>
  );
};

export default NavTransparent;
