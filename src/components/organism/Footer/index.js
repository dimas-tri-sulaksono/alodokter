import FooterBanner from "@/components/molecules/FooterBanner";
import FooterMenu from "@/components/molecules/FooterMenu";

import React from "react";

const Footer = ({ className = "bg-alo text-white" }) => {
  return (
    <>
      <div
        id="footer"
        class={`footer mt-[10px] min-h-[500px] border-0 border-yellow-400 ${className}`}
      >
        <FooterBanner
          textSatu={"Chat lebih dari 1.000 dokter di Aplikasi Alodokter!"}
          textDua={"Respons Cepat, Jawaban Akurat!"}
        />
        <div className="container-footer mx-auto lg:w-[1080px]">
          <div className="footer-inner lg:pt-[36pt]">
            <div className="footer-top flex flex-row border-b border-[#ffffff]">
              {/* footer satu */}
              <FooterMenu />
            </div>
            <div className="footer-copyright hidden py-4 md:block">
              <p>Hak Cipta © 2025 Alodokter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
