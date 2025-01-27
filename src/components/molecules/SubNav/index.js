import LinkAtm from "@/components/atoms/LinkAtm";
import React from "react";

const SubNav = ({ text }) => {
  return (
    <>
      <div className="subnav text-[#424242]">
        <div className="head between-alo mb-4 px-4 font-bold">
          <div className="left">Artikel Kesehatan</div>
          <div className="right text-alo">Lihat Semua</div>
        </div>
        <div className="body center-alo mx-2 gap-1 text-sm">
          <div className="category min-w-[20px] rounded-full border border-[#7f7f7f] px-4 py-2">
            Nutrisi
          </div>
          <div className="category min-w-[20px] rounded-full border border-[#7f7f7f] px-4 py-2">
            Diabetes
          </div>
          <div className="category min-w-[20px] rounded-full border border-[#7f7f7f] px-4 py-2">
            Jantung
          </div>
          <div className="category min-w-[20px] rounded-full border border-[#7f7f7f] px-4 py-2">
            Diet
          </div>
          <div className="category min-w-[20px] rounded-full border border-[#7f7f7f] px-4 py-2">
            Bayi
          </div>
        </div>
      </div>

      <div className="subnav-center center-alo lg:mt-[50px] hidden md:block">
        <div className="container-subnav-center hidden md:block lg:w-[1000px]">
          <h2 className="font-alo text-[30px] font-bold text-[#424242]">
            {text}
          </h2>
          <div className="subnav-menu mb-[40px] mt-[20px] block h-[69px] border-b border-t border-[#dddddd]">
            <ul className="font-alo m-0 flex list-none justify-between gap-6 p-0 text-[16px] font-normal leading-[69px] text-[#424242]">
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
        </div>
      </div>
    </>
  );
};

export default SubNav;
