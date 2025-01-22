import FooterBannerMol from "@/components/molecules/FooterBannerMol";
import FooterLeft_1Mol from "@/components/molecules/FooterLeft_1Mol";
import FooterLeft_2Mol from "@/components/molecules/FooterLeft_2Mol";
import FooterMedsosMol from "@/components/molecules/FooterMedsosMol";
import React from "react";

const FooterOrg = ({ className = "bg-alo h-auto text-white" }) => {
  return (
    <>
      <div id="footer" class={`footer font-alo ${className}`}>
        <FooterBannerMol
          textSatu={"Chat lebih dari 1.000 dokter di Aplikasi Alodokter!"}
          textDua={"Respons Cepat, Jawaban Akurat!"}
        />
        <div className="container-footer w-[1080px] mx-auto font-alo">
          <div className="footer-inner pt-[36pt]">
            <div className="footer-top flex flex-row border-b border-[#ffffff]">
              {/* footer satu */}
              <FooterLeft_1Mol />
              <FooterLeft_2Mol />
              <FooterMedsosMol />
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

export default FooterOrg;
