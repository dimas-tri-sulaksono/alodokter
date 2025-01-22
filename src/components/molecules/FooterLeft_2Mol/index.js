import LinkAtm from "@/components/atoms/LinkAtm";
import React from "react";

const FooterLeft_2Mol = () => {
  return (
    <>
      <div className="footer-dua inline-block w-[330px] align-top text-[18px] mb-[30px]">
        <h4 className="m-0 text-[20px] font-bold">Lainnya</h4>
        <ul className="p-0 my-[14px] leading-8">
          <li>
            <LinkAtm>Syarat &amp; Ketentuan</LinkAtm>
          </li>
          <li>
            <LinkAtm>Privasi</LinkAtm>
          </li>
          <li>
            <LinkAtm>Iklan</LinkAtm>
          </li>
          <li>
            <LinkAtm>Gabung di Tim Dokter</LinkAtm>
          </li>
          <li>
            <LinkAtm>Daftarkan Rumah Sakit Anda</LinkAtm>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterLeft_2Mol;
