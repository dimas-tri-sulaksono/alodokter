import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const CariDokter = () => {
  return (
    <>
      {/* <div className="min-h-[823px]"></div> */}

      <div className="min-h-[260px] min-w-[345px] border-b bg-white p-0 px-[15px] pb-[25px] pt-[20px] filter">
        <div className="inner">
          <div className="title">
            <span className="text-[20px] font-bold">
              Buat Janji dengan Dokter Pilihan Lebih Mudah
            </span>
          </div>
          <div className="location mt-[20px] h-[50px]">
            <Input
              className={`h-[48px] w-full bg-[url('/images/cari-dokter/pin-loc-blue-small.svg')] bg-[length:16px] bg-[position:12px_center] bg-no-repeat pl-[45px] pr-[60px] focus-within:border-[#3570d2] focus-visible:outline-none`}
              type={"search"}
              name={"search"}
              id={"search"}
              placeholder={"Semua Lokasi"}
            />
          </div>
          <div className="keyword mt-[24px]">
            <Input
              className={`h-[48px] w-full bg-[url('/images/cari-dokter/loupe.svg')] bg-[length:16px] bg-[position:12px_center] bg-no-repeat pl-[45px] pr-[60px] focus-within:border-[#3570d2] focus-visible:outline-none`}
              type={"search"}
              name={"search"}
              id={"search"}
              placeholder={"Cari dokter, tindakan medis, rumah sakit"}
            />
          </div>
          <div className="search-button mt-[24px] font-bold text-white">
            <Button
              text={"CARI"}
              className="w-full rounded-sm border-none bg-tagKeluarga"
            />
          </div>
        </div>
      </div>

      <div className="spesialisai min-h-10 w-full bg-[#f9f9f9]">
        <div className="header between-alo px-[15px] pb-[10px] pt-[20px]">
          <div className="left text-[18px] font-bold">
            <h3>Spesialisasi</h3>
          </div>
          <div className="right text-sm font-bold text-alo">
            <span>Lihat Semua</span>
          </div>
        </div>
        <div className="list grid grid-cols-2 gap-4 px-[15px]">
          {/* card */}
          <div className="card rounded-[3px]">
            <div className="boxShadow-soft h-[74px] w-[180px] rounded-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-[74px] w-[100%] rounded-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
          </div>

          {/* card */}
          <div className="card rounded-[3px]">
            <div className="boxShadow-soft h-[74px] w-[180px] rounded-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-full w-full rounded-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
          </div>

          {/* card */}
          <div className="card rounded-[3px]">
            <div className="boxShadow-soft h-[74px] w-[180px] rounded-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-full w-full rounded-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
          </div>

          {/* card */}
          <div className="card rounded-[3px]">
            <div className="boxShadow-soft h-[74px] w-[180px] rounded-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-full w-full rounded-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
          </div>

          {/* card */}
          <div className="card rounded-[3px]">
            <div className="boxShadow-soft h-[74px] w-[180px] rounded-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-full w-full rounded-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
          </div>

          {/* card */}
          <div className="card rounded-[3px]">
            <div className="boxShadow-soft h-[74px] w-[180px] rounded-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-full w-full rounded-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
          </div>

          {/* end card */}
        </div>
      </div>

      <div className="tindakan-medis min-h-10 w-full bg-[#f9f9f9] pb-10">
        <div className="header between-alo px-[15px] pb-[10px] pt-[30px]">
          <div className="left text-[18px] font-bold">
            <h3>Tindakan Medis</h3>
          </div>
          <div className="right text-sm font-bold text-alo">
            <span>Lihat Semua</span>
          </div>
        </div>
        <div className="list grid grid-cols-1 gap-4 px-[15px]">
          {/* card */}
          <div className="card rounded-t-[3px]">
            <div className="boxShadow-soft h-[74px] w-full rounded-t-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-[74px] w-[100%] rounded-t-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
            <div className="opsi grid-col-1 grid rounded-b-[3px] bg-white py-4 text-alo">
              <LinkAtm className="px-2 py-[1px]">Skrining Narkoba</LinkAtm>
              <LinkAtm className="px-2 py-[1px]">
                Layanan Kunjungan Rumah
              </LinkAtm>
              <LinkAtm className="px-2 py-[1px]">Infus Vitamin C</LinkAtm>
              <LinkAtm className="px-2 py-[1px]">Medical Check Up</LinkAtm>
            </div>
          </div>

          {/* card */}
          <div className="card rounded-t-[3px]">
            <div className="boxShadow-soft h-[74px] w-full rounded-t-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-[74px] w-[100%] rounded-t-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
            <div className="opsi grid-col-1 grid rounded-b-[3px] bg-white py-4 text-alo">
              <LinkAtm className="px-2 py-[1px]">Skrining Narkoba</LinkAtm>
              <LinkAtm className="px-2 py-[1px]">
                Layanan Kunjungan Rumah
              </LinkAtm>
              <LinkAtm className="px-2 py-[1px]">Infus Vitamin C</LinkAtm>
              <LinkAtm className="px-2 py-[1px]">Medical Check Up</LinkAtm>
            </div>
          </div>

          {/* card */}
          <div className="card rounded-t-[3px]">
            <div className="boxShadow-soft h-[74px] w-full rounded-t-[3px] bg-[url('/images/cari-dokter/spesialis-kandungan-dan-kebidanan.jpg')] bg-cover bg-center bg-no-repeat">
              <LinkAtm className="">
                <p className="center-alo h-[74px] w-[100%] rounded-t-[3px] bg-[rgba(0,0,0,0.45)] font-bold text-white">
                  Dokter Kandungan
                </p>
              </LinkAtm>
            </div>
            <div className="opsi grid-col-1 grid rounded-b-[3px] bg-white py-4 text-alo">
              <LinkAtm className="px-2 py-[1px]">Skrining Narkoba</LinkAtm>
              <LinkAtm className="px-2 py-[1px]">
                Layanan Kunjungan Rumah
              </LinkAtm>
              <LinkAtm className="px-2 py-[1px]">Infus Vitamin C</LinkAtm>
              <LinkAtm className="px-2 py-[1px]">Medical Check Up</LinkAtm>
            </div>
          </div>

          {/* end card */}
        </div>
      </div>
    </>
  );
};

export default CariDokter;
