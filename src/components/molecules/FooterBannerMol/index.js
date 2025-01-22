import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const FooterBannerMol = ({
  textSatu,
  textDua,
  className = "bg-[linear-gradient(189deg,#6d97de,#1c4b9a)] shadow-[inset_25px_-26px_160px_#1c4b9a]",
}) => {
  return (
    <>
      <div
        className={`banner-footer h-[155px] pt-[24px] pb-[21px] ${className}`}
      >
        <div className="container-footer flex flex-row justify-center gap-5">
          <Image
            className="w-[237px] -mt-[67px]"
            src="/images/chat.png"
            alt="phone display chat"
            width={237}
            height={67}
          />
          <div className="text-banner">
            <div className="text-banner-3 text-[26px] font-alo font-semibold">
              {textSatu}
            </div>
            <div className="text-banner-4 text-[24px] font-alo font-normal">
              {textDua}
            </div>
            <div className="logo-kemenkes flex justify-end -mt-[20px]">
              <Image
                className="w-[160px]"
                src="/images/kemenkes.png"
                alt="logo kementrian kesehatan"
                width={160}
                height={48}
              />
            </div>
          </div>
          <div className="downloadApp"> 
            <LinkAtm>
              <Image
                className="w-[145px] mb-[10px]"
                src="/images/googleplay.png"
                alt="google play"
                width={145}
                height={41.7}
              />
            </LinkAtm>
            <LinkAtm>
              <Image
                className="w-[145px]"
                src="/images/appstore.png"
                alt="app store"
                width={145}
                height={41.7}
              />
            </LinkAtm>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBannerMol;
