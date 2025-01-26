import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const FooterMenu = () => {
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
      <div className="footer-data-item-social-medi inline-block w-[330px] align-top text-[18px] mb-[30px]">
        <h4 className="m-0 text-[20px] font-bold">Media Sosial</h4>
        <div className="footer-row-social-media-list flex justify-between max-w-[260px] my-[14px] mb-[60px]">
          <LinkAtm className={"mr-[20px]"}>
            <Image
              className="w-[35px]"
              src="images/facebook.svg"
              alt="facebook"
              width={35}
              height={35}
            />
          </LinkAtm>
          <LinkAtm className={"mr-[20px]"}>
            <Image
              className="w-[35px]"
              src="images/twitter.svg"
              alt="twitter"
              width={35}
              height={35}
            />
          </LinkAtm>
          <LinkAtm className={"mr-[20px]"}>
            <Image
              className="w-[35px]"
              src="images/linkedin.svg"
              alt="linkedin"
              width={35}
              height={35}
            />
          </LinkAtm>
          <LinkAtm className={"mr-[20px]"}>
            <Image
              className="w-[35px]"
              src="images/instagram.svg"
              alt="instagram"
              width={35}
              height={35}
            />
          </LinkAtm>
          <LinkAtm>
            <Image
              className="w-[35px]"
              src="images/youtube.svg"
              alt="youtube"
              width={35}
              height={35}
            />
          </LinkAtm>
        </div>
        <p className="mt-[38px] mb-[10px] text-[16px] font-bold">
          Bagian dari Alodokter
        </p>
        <div className="alo-group block">
          <span className="mr-[23px]">
            <LinkAtm class="mr-[25px]">alomedika.com</LinkAtm>
          </span>
          <span>
            <LinkAtm>pobpad.com</LinkAtm>
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterMenu;
