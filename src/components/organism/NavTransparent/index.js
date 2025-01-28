import NavButton from "@/components/molecules/NavButton";
import NavButtonTransparent from "@/components/molecules/NavButtonTransparent";
import NavLogo from "@/components/molecules/NavLogo";
import NavMenu from "@/components/molecules/NavMenu";
import SearchBar from "@/components/molecules/SearchBar";
import React from "react";

const NavTransparent = ({ className = "bg-transparent border-none" }) => {
  return (
    <>
      <div className="navbar-mobile center-alo z-50 h-14 w-full border-b border-[#ECECEC] bg-white shadow-lg transition-all duration-500 md:hidden">
        <div className="navbar-inner between-alo min-w-[100%]">
          <div className="navbar-left row-alo center-alo min-w-[60%] gap-4">
            <div className="menu-button md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#3570D2"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="logo center-alo min-h-8 w-[170px] bg-[url('/images/logo-header.webp')] bg-contain bg-no-repeat"></div>
          </div>
          <div className="navbar-right mr-4 flex flex-row items-center justify-center gap-3 border-0">
            <div className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#3570D2"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="login-mobile rounded-[8px] bg-alo px-3 py-2 text-sm font-bold text-white">
              Login
            </div>
          </div>
        </div>
      </div>

      {/* white */}
      <div
        className={`top-navbar fixed left-1/2 top-0 z-[100] hidden w-full -translate-x-1/2 shadow-sm transform border-b-2 border-[#dadee4] bg-white px-8 py-[7px] text-sm transition-all duration-300 md:block ${className}`}
      >
        <div className="container-fluid mx-auto block w-[1340px] p-0">
          <div className="top-navbar-inner flex items-center justify-between">
            <div className="top-navbar-left flex h-[49px] justify-between">
              <NavLogo />
              <SearchBar
                className={"ml-[29px] mr-4 h-20 py-[4px]"}
                placeholder={"Cari di Alodokter"}
              />
            </div>
            <div class="top-navbar-right ml-[23px] flex w-[830px] items-center justify-between">
              <NavMenu />
              <NavButton />
            </div>
          </div>
        </div>
      </div>

      {/* transparent */}
      <div
        id=""
        className={`top-navbar fixed left-1/2 z-[100] hidden h-[80px] w-full -translate-x-1/2 transform border-b bg-white text-sm transition-all duration-300 xl:bg-transparent ${className}`}
      >
        <div className="container-fluid mx-auto h-[80px] w-full max-w-[1238px] p-0">
          <div className="top-navbar-inner h-[80px] items-center justify-between py-[15.5px] lg:flex">
            <div className="lg:top-navbar-left flex items-center justify-center">
              <NavLogo image="/images/logo.svg" width={113} />
              <div className="vl my-[10px] ml-[36px] h-[29px] border-l border-[#ffffff]"></div>
              <div className="hidden md:block">
                <SearchBar
                  image="bg-[url('/images/search.svg')]"
                  classNameInput="placeholder-white rounded-[8px] w-[226px] h-[48px] flex justify-center items-center"
                  className={
                    "ml-[32px] mr-4 flex items-center justify-center py-[4px]"
                  }
                  placeholder={"Cari di Alodokter"}
                />
              </div>
            </div>
            <div className="top-navbar-right flex w-[790px] items-center justify-between">
              <NavMenu className="text-white" />
              <NavButtonTransparent />
            </div>
          </div>
        </div>
        {/* <div class="h-10 bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500"></div> */}
      </div>
    </>
  );
};

export default NavTransparent;
