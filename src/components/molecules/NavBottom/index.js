import Image from "next/image";
import React from "react";

const NavBottom = () => {
  return (
    <>
      <div className="menu-bottom fixed bottom-0 z-50 m-0 flex h-[80px] w-full items-center justify-center border-t border-[#ECECEC] bg-white px-0 py-[1px]">
        <div className="inner between-alo gap-8">
          <div className="wrapper w-[50px]">
            <div className="icon mx-auto w-[25px] items-center justify-center p-0">
              <Image
                src="/images/nav/bottom-icon-home.svg"
                alt=""
                width={50}
                height={50}
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#3570D2"
                class="size-6"
              >
                <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
              </svg> */}
            </div>
            <div className="text-[12px] font-bold text-[#3570D2]">Beranda</div>
          </div>
          <div className="wrapper w-[50px]">
            <div className="icon mx-auto w-[25px] items-center justify-center p-0">
              <Image
                src="/images/nav/bottom-icon-paperlist.svg"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="text-center text-[12px] font-bold text-[#bcbcbc;]">
              Aktivitas
            </div>
          </div>
          <div className="wrapper w-[50px]">
            <div className="icon mx-auto w-[25px] items-center justify-center p-0">
              <Image
                src="/images/nav/bottom-icon-doc.svg"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="text-center text-[12px] font-bold text-[#bcbcbc;]">
              Artikel
            </div>
          </div>
          <div className="wrapper w-[50px]">
            <div className="icon mx-auto w-[25px] items-center justify-center p-0">
              <Image
                src="/images/nav/bottom-icon-umbrella.svg"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="text-center text-[12px] font-bold text-[#bcbcbc;]">
              Langganan
            </div>
          </div>
          <div className="wrapper w-[50px]">
            <div className="icon mx-auto w-[25px] items-center justify-center p-0">
              <Image
                src="/images/nav/bottom-icon-profile.svg"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="text-center text-[12px] font-bold text-[#bcbcbc;]">
              Profil
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBottom;
