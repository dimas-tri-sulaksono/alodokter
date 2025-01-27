import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const FooterMenu = () => {
  return (
    <>
      <div className="footer-menu mb-[80px] w-full">
        <div className="menu-1 flex min-h-[50px] w-full items-center border-b border-[rgba(255,255,255,0.3)] px-[30px] text-[16px] font-bold">
          + Alodokter
        </div>
        <div className="menu-1 flex min-h-[50px] w-full items-center border-b border-[rgba(255,255,255,0.3)] px-[30px] text-[16px] font-bold">
          + Lainnya
        </div>
        <div className="menu-1 flex min-h-[50px] w-full items-center border-b border-[rgba(255,255,255,0.3)] px-[30px] text-[16px] font-bold">
          + Bagian dari Alodokter
        </div>
        <div className="menu-1 flex min-h-[50px] w-full items-center justify-center gap-5 px-[30px] py-[15px] text-[16px] font-bold">
          <div className="center-alo right-[0px] min-h-[30px] min-w-[30px] bg-[url('/images/facebook.svg')] bg-contain bg-no-repeat"></div>
          <div className="center-alo right-[0px] min-h-[30px] min-w-[30px] bg-[url('/images/twitter.svg')] bg-contain bg-no-repeat"></div>
          <div className="center-alo right-[0px] min-h-[30px] min-w-[30px] bg-[url('/images/linkedin.svg')] bg-contain bg-no-repeat"></div>
          <div className="center-alo right-[0px] min-h-[30px] min-w-[30px] bg-[url('/images/instagram.svg')] bg-contain bg-no-repeat"></div>
          <div className="center-alo right-[0px] min-h-[30px] min-w-[30px] bg-[url('/images/youtube.svg')] bg-contain bg-no-repeat"></div>
        </div>
      </div>

      <div className="footer-satu mb-[30px] hidden w-[330px] align-top text-[18px] md:inline-block">
        <h4 className="m-0 text-[20px] font-bold">Alodokter</h4>
        <ul className="my-[14px] p-0 leading-8">
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
      <div className="footer-dua mb-[30px] hidden w-[330px] align-top text-[18px] md:inline-block">
        <h4 className="m-0 text-[20px] font-bold">Lainnya</h4>
        <ul className="my-[14px] p-0 leading-8">
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
      <div className="footer-data-item-social-medi mb-[30px] hidden w-[330px] align-top text-[18px] md:inline-block">
        <h4 className="m-0 text-[20px] font-bold">Media Sosial</h4>
        <div className="footer-row-social-media-list my-[14px] mb-[60px] flex max-w-[260px] justify-between">
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
        <p className="mb-[10px] mt-[38px] text-[16px] font-bold">
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
