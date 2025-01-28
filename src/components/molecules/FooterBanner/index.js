import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const FooterBanner = ({
  textSatu,
  textDua,
  className = "bg-[linear-gradient(189deg,#6d97de,#1c4b9a)] shadow-[inset_25px_-26px_160px_#1c4b9a]",
}) => {
  return (
    <>
      <div
        className={`banner-footer h-[312px] lg:h-[180px] min-w-10 border-0 border-black pt-[30px] lg:pb-[21px] lg:pt-[24px] ${className}`}
      >
        <div className="container-footer min-h-[280px] border-0 border-slate-500 lg:flex lg:flex-row lg:justify-center lg:gap-5">
          {/* <div className="center-alo relative bottom-[0px] left-[230px] hidden min-h-[174px] min-w-[200px] bg-[url('/images/chat.png')] bg-contain bg-no-repeat"></div> */}
          {/* <Image
            className="-mt-[67px] w-[237px] hidden"
            src="/images/chat.png"
            alt="phone display chat"
            width={237}
            height={67}
          /> */}
          <div className="text-banner mr-[27px] min-w-[325px] px-[30px]">
            <div className="text-banner-3 text-[25px] font-semibold lg:text-[26px]">
              {textSatu}
            </div>
            <div className="text-banner-4 text-[18px] font-normal lg:text-[24px]">
              {textDua}
            </div>
            <div className="logo-kemenkes mb-1 mt-5 border-0 lg:absolute lg:right-[710px] flex h-[48px] min-h-[44px] w-[132px] justify-end bg-[url('/images/kemenkes.png')] bg-contain bg-no-repeat lg:-mt-[20px] lg:w-[160px]">
              {/* <Image
                className="w-[160px] lg:block"
                src="/images/kemenkes.png"
                alt="logo kementrian kesehatan"
                width={160}
                height={48}
              /> */}
            </div>
          </div>
          <div className="downloadApp ml-[30px]">
            <LinkAtm>
              <div className="mt-2 min-h-[44px] w-[132px] bg-[url('/images/googleplay.png')] bg-contain bg-no-repeat"></div>
              {/* <Image
                className="mb-[10px] w-[145px]"
                src="/images/googleplay.png"
                alt="google play"
                width={145}
                height={41.7}
              /> */}
            </LinkAtm>
            <LinkAtm>
              <div className="mb-1 mt-1 min-h-[44px] w-[132px] bg-[url('/images/appstore.png')] bg-contain bg-no-repeat"></div>

              {/* <Image
                className="w-[145px]"
                src="/images/appstore.png"
                alt="app store"
                width={145}
                height={41.7}
              /> */}
            </LinkAtm>
          </div>
        </div>
        {/* <div className="center-alo absolute -bottom-[460px] right-[0px] min-h-[174px] min-w-[200px] border-0 bg-[url('/images/chat.png')] bg-contain bg-no-repeat"></div> */}

        <div className="borde-2 min-w-20 border-0 border-red-500"></div>
      </div>
    </>
  );
};

export default FooterBanner;
