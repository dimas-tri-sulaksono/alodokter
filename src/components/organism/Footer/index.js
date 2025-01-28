import FooterBanner from "@/components/molecules/FooterBanner";
import FooterMenu from "@/components/molecules/FooterMenu";
import { useRouter } from "next/router";

import React from "react";

const Footer = ({ className = "bg-alo text-white" }) => {
  const router = useRouter();

  return (
    <>
      <div
        id="footer"
        className={`footer mt-[10px] min-h-[500px] border-0 border-yellow-400 ${className}`}
      >
        {router.pathname === "/aloshop" ? (
          <FooterBanner
            textSatu={"Beli Semua Produk Kesehatan Anda di Alodokter"}
            textDua={"Solusi Aman dan Terpercaya"}
          />
        ) : (
          <FooterBanner
            textSatu={"Chat lebih dari 1.000 dokter di Aplikasi Alodokter!"}
            textDua={"Respons Cepat, Jawaban Akurat!"}
          />
        )}

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
