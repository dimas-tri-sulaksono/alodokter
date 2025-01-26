import React from "react";
import LinkAtm from "../../atoms/LinkAtm";

const NavMenu = ({ className = "text-[#424242]" }) => {
  return (
    <nav
      id="navMenu"
      className={`${className} navMenu flex text-center gap-4 text-[14px] font-alo font-normal`}
    >
      <LinkAtm href={"#"} text={"Info Kesehatan"} />
      <LinkAtm href={"#"} text={"Chat Dokter"} />
      {/* <LinkAtm href={"#"} text={"Cari Dokter"} /> */}
      {/* <LinkAtm href={"#"} text={"Tanya Dokter"} /> */}
      <LinkAtm href={"#"} text={"Langganan"} />
      <LinkAtm href={"#"} text={"Aloshop"} />
      <LinkAtm href={"#"} text={"Alochoice"} />
    </nav>
  );
};

export default NavMenu;
