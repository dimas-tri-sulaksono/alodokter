import HeroMenu from "@/components/molecules/HeroMenu";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero bg-[url('/images/bg-banner.jpg')] bg-[length:412px_180px] bg-no-repeat text-[16px] lg:bg-[url('/images/bg-banner.jpg')] lg:bg-cover">
        <div className="container-hero h-[300px] w-full text-white lg:relative lg:mx-auto lg:min-h-[612px] lg:w-[1112px] lg:pt-[82px]">
          <div className="hero-content-inner lg:pb-[113px] lg:pt-[91px]">
            <div className="absolute right-10 top-16 z-0 h-[412px] w-[150px] bg-[url('/images/doctor.png')] bg-contain bg-no-repeat"></div>

            {/* banner */}
            <div className="banner-content w-[211px] px-4">
              <h1 className="banner-title mx-0 mb-1 mt-0 pt-[50px] text-[16px] font-bold lg:mb-[12px] lg:text-[36px]">
                Layanan Cepat dan Tepat
              </h1>
              <p className="banner-subtitle text-[12px] font-normal lg:mb-[52px] lg:text-[28px]">
                Layanan Booking dan Chat Dokter Terbaik di Indonesia
              </p>
            </div>

            {/* hero menu */}
            <div className="hero-menu center-alo z-10 mt-[46.5px] rounded-t-3xl bg-white p-8">
              <div className="menu-container row-alo gap-3 lg:inline-flex lg:gap-[8px]">
                <HeroMenu
                  href="#"
                  image="bg-[url('/images/hero/hero-chat2.svg')] lg:bg-[url('/images/hero/hero-chat.svg')]"
                  text="Chat Dokter"
                />
                <HeroMenu
                  href="#"
                  image="bg-[url('/images/hero/hero-booking2.svg')] lg: bg-[url('/images/hero/hero-booking.svg')]"
                  text="Buat Janji"
                />
                <HeroMenu
                  href="#"
                  image="bg-[url('/images/hero/hero-aloshop2.svg')] lg:bg-[url('/images/hero/hero-aloshop.svg')]"
                  text="Aloshop"
                />
                <HeroMenu
                  href="#"
                  image="bg-[url('/images/hero/hero-proteksi2.svg')] lg:bg-[url('/images/hero/hero-proteksi.svg')]"
                  text="Langganan"
                />
                <HeroMenu
                  href="#"
                  image="bg-[url('/images/hero/hero-alochoice2.svg')] lg:bg-[url('/images/hero/hero-alochoice.svg')]"
                  text="Alochoice"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
