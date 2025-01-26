import HeroMenu from "@/components/molecules/HeroMenu";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero w-full  bg-[url('/images/bg-banner.jpg')] bg-[length:412px_250px] bg-no-repeat lg:bg-[url('/images/bg-banner.jpg')] lg:bg-cover text-[16px] font-normal">
        <div className="container-hero text-white w-full h-[612px] lg:pt-[82px] lg:relative lg:mx-auto lg:w-[1112px] lg:min-h-[612px]">
          <div className="hero-content-inner pt-[91px] pb-[113px]">
            
            
            <Image
              src="/images/doctor.png"
              alt="doctor"
              className="absolute  lg:bottom-0 lg:-right-10"
              // width={486.8}
              width={150}
              height={150}
            />
            <div className="hero  banner content hidden md:flex">
              <h1 className="font-alo font-bold text-[36px] mb-[12px]">
                Layanan Cepat dan Tepat
              </h1>
              <p className="font-alo font-normal text-[28px] mb-[52px] ">
                Layanan Booking dan Chat Dokter Terbaik di Indonesia
              </p>
            </div>
            <div className="hero-menu hidden md:flex">
              <div className="menu-container inline-flex gap-[8px]">
                <HeroMenu
                  href="#"
                  image="/images/hero/hero-chat.svg"
                  alt="chat dokter"
                  text="Chat Dokter"
                />
                <HeroMenu
                  href="#"
                  image="/images/hero/hero-booking.svg"
                  alt="chat dokter"
                  text="Buat Janji"
                />
                <HeroMenu
                  href="#"
                  image="/images/hero/hero-aloshop.svg"
                  alt="chat dokter"
                  text="Aloshop"
                />
                <HeroMenu
                  href="#"
                  image="/images/hero/hero-proteksi.svg"
                  alt="chat dokter"
                  text="Langganan"
                />
                <HeroMenu
                  href="#"
                  image="/images/hero/hero-alochoice.svg"
                  alt="chat dokter"
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
