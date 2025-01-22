import LinkAtm from "@/components/atoms/LinkAtm";
import React from "react";

const FooterLeft_1Mol = () => {
  return (
    <>
      <div className="footer-satu inline-block w-[330px] align-top text-[18px] mb-[30px]">
        <h4 className="m-0 text-[20px] font-bold">Alodokter</h4>
        <ul className="p-0 my-[14px] leading-8">
          <li>
            <LinkAtm>Tentang Kami</LinkAtm>
          </li>
          <li>
            <LinkAtm>Karier</LinkAtm>
          </li>
          <li>
            <LinkAtm>Hubungi Kami</LinkAtm>
          </li>
          <li>
            <LinkAtm>Tim Editorial</LinkAtm>
          </li>
          <li>
            <LinkAtm>Langganan</LinkAtm>
          </li>
          <li>
            <LinkAtm>Aloproteksi Corporate</LinkAtm>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterLeft_1Mol;
