import LinkAtm from "@/components/atoms/LinkAtm";
import NavButtonMol from "@/components/molecules/NavButtonMol";
import NavLogoMol from "@/components/molecules/NavLogoMol";
import SearchBarMol from "@/components/molecules/SearchBarMol";
import React from "react";

const NavOrg = ({ className = "bg-white border-[#dadee4]" }) => {
  return (
    <>
      <div
        className={`top-navbar border-b w-full fixed px-8 py-[7px] top-0 left-1/2 z-[100] text-sm transform -translate-x-1/2 ${className}`}
      >
        <div className="container-fluid w-[1340px] mx-auto p-0 block">
          <div className="top-navbar-inner flex justify-between items-center">
            <div className="top-navbar-left flex justify-between h-[49px]">
              <NavLogoMol />
              <SearchBarMol
                className={"h-20 mr-4 ml-[29px] py-[4px]"}
                placeholder={"Cari di Alodokter"}
              />
            </div>
            <div class="top-navbar-right w-[830px] ml-[23px] flex justify-between items-center">
              <nav className="flex text-center gap-4 text-black text-[14px] font-alo font-normal">
                <LinkAtm href={"#"} text={"Info Kesehatan"} />
                <LinkAtm href={"#"} text={"Cari Dokter"} />
                <LinkAtm href={"#"} text={"Tanya Dokter"} />
                <LinkAtm href={"#"} text={"Langganan"} />
                <LinkAtm href={"#"} text={"Alodokter Shop"} />
              </nav>
              <NavButtonMol />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavOrg;
