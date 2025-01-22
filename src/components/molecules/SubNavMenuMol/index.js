import LinkAtm from "@/components/atoms/LinkAtm";
import React from "react";

const SubNavMenuMol = () => {
  return (
    <>
      <div className="subnav-menu block mt-[20px] mb-[40px] h-[69px] border-t border-b border-[#dddddd]">
        <ul className="list-none flex justify-between gap-6 m-0 p-0 text-[16px] text-[#424242] leading-[69px] font-alo font-normal">
          <li className="list-item">
            <LinkAtm>Nutrisi</LinkAtm>
          </li>
          <li>
            <LinkAtm>Diabetes</LinkAtm>
          </li>
          <li>
            <LinkAtm>Jantung</LinkAtm>
          </li>
          <li>
            <LinkAtm>Kesehatan Mulut</LinkAtm>
          </li>
          <li>
            <LinkAtm>Kolesterol Tinggi</LinkAtm>
          </li>
          <li>
            <LinkAtm>Diet</LinkAtm>
          </li>
          <li>
            <LinkAtm>Kecantikan</LinkAtm>
          </li>
          <li>
            <LinkAtm>Kulit</LinkAtm>
          </li>
          <li>
            <LinkAtm>Kehamilan</LinkAtm>
          </li>
          <li>
            <LinkAtm>Bayi</LinkAtm>
          </li>
          <li>
            <LinkAtm>Demam</LinkAtm>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SubNavMenuMol;
