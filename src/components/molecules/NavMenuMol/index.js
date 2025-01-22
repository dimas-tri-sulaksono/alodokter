import React from "react";
import LinkAtom from "../../atoms/LinkAtm";
import LinkAtm from "../../atoms/LinkAtm";

const NavMenuMol = () => {
  return (
    <nav className="flex text-center gap-4 text-black text-[14px] font-alo font-normal">
      <LinkAtm href={"#"} text={"Info Kesehatan"} />
      <LinkAtm href={"#"} text={"Cari Dokter"} />
      <LinkAtm href={"#"} text={"Tanya Dokter"} />
      <LinkAtm href={"#"} text={"Langganan"} />
      <LinkAtm href={"#"} text={"Alodokter Shop"} />
    </nav>
  );
};

export default NavMenuMol;
