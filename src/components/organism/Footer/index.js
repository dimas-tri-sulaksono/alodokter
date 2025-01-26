import FooterBanner from "@/components/molecules/FooterBanner";
import FooterMenu from "@/components/molecules/FooterMenu";

import React from "react";

const Footer = ({ className = "bg-alo h-auto text-white" }) => {
  return (
    <>
      <div id="footer" class={`footer mt-32 ${className}`}>
        <FooterBanner
          textSatu={"Chat lebih dari 1.000 dokter di Aplikasi Alodokter!"}
          textDua={"Respons Cepat, Jawaban Akurat!"}
        />
        <div className="container-footer w-[1080px] mx-auto font-alo">
          <div className="footer-inner pt-[36pt]">
            <div className="footer-top flex flex-row border-b border-[#ffffff]">
              {/* footer satu */}
              <FooterMenu />
            </div>
            <div className="footer-copyright py-4">
              <p>Hak Cipta © 2025 Alodokter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
