import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LinkAtm from "@/components/atoms/LinkAtm";
import Cart from "@/components/molecules/Cart";
import Image from "next/image";
import React from "react";

const Aloshop = () => {
  return (
    <>
      <div className="hero-aloshop bg-aloshop h-[156px]">
        <div className="inner px-[15px]">
          <div className="address pt-4">
            <div className="text-sm text-white">Alamat Pengiriman:</div>
            <div className="tambah-alamat center-alo h-auto w-1/2 gap-[8px] rounded-full bg-[#003a9e] px-[12px] py-[8px]">
              {/* <div className="icon h-10 w-auto bg-[url('/images/icons/pin-loc-white.svg')] bg-[length:16px] bg-[position:12px_center] bg-no-repeat"></div> */}
              <Image
                src={"/images/icons/pin-loc-white.svg"}
                alt={""}
                width={14}
                height={14}
              />
              <span className="text-sm text-white">Tambah Alamat </span>
              <Image
                src={"/images/icons/arrow-down-white.svg"}
                alt={""}
                width={14}
                height={0}
              />
            </div>
          </div>
          <div className="location mt-[10px] h-[50px]">
            <Input
              className={`h-[48px] w-full bg-white bg-[url('/images/cari-dokter/loupe.svg')] bg-[length:16px] bg-[position:12px_center] bg-no-repeat pl-[45px] focus-within:border-[#3570d2] focus-visible:outline-none`}
              type={"search"}
              name={"search"}
              id={"search"}
              placeholder={"Cari obat, vitamin, produk kesehatan lainnya"}
            />
          </div>
        </div>
      </div>

      <div className="container min-h-96 bg-[#fafafa]">
        {/* panel kategori */}
        <div className="category mb-10 min-h-10 w-full bg-[#ffffff] pb-5 shadow-sm">
          <div className="header between-alo px-[15px] pb-[10px] pt-[30px]">
            <div className="left mb-[20px] text-[18px] font-bold">
              <h3>Kategori</h3>
            </div>
            <div className="right text-sm font-bold text-alo">
              <span>Lihat Semua</span>
            </div>
          </div>
          <div className="list grid grid-cols-2 px-[15px]">
            {/* category */}
            <div className="category-item row-alo mb-4 max-w-[150px] items-center break-words border-0 text-[12px] font-normal text-[#424242]">
              <div className="icon border-0">
                <Image
                  src={"/images/icons/populer.png"}
                  alt={""}
                  width={40}
                  height={40}
                />
              </div>
              <div className="text ml-[10px] border-0">Populer</div>
            </div>
            {/* category */}
            <div className="category-item row-alo mb-4 max-w-[150px] items-center break-words border-0 text-[12px] font-normal text-[#424242]">
              <div className="icon border-0">
                <Image
                  src={"/images/icons/vitamin-c.png"}
                  alt={""}
                  width={40}
                  height={40}
                />
              </div>
              <div className="text ml-[10px] border-0">Vitamin C</div>
            </div>
            {/* category */}
            <div className="category-item row-alo mb-4 max-w-[150px] items-center break-words border-0 text-[12px] font-normal text-[#424242]">
              <div className="icon border-0">
                <Image
                  src={"/images/icons/masuk-angin.png"}
                  alt={""}
                  width={40}
                  height={40}
                />
              </div>
              <div className="text ml-[10px] border-0">Obat Masuk Angin</div>
            </div>
            {/* category */}
            <div className="category-item row-alo mb-4 max-w-[150px] items-center break-words border-0 text-[12px] font-normal text-[#424242]">
              <div className="icon border-0">
                <Image
                  src={"/images/icons/sakit-kepala.png"}
                  alt={""}
                  width={40}
                  height={40}
                />
              </div>
              <div className="text ml-[10px] border-0">Obat Sakit kepala</div>
            </div>
            {/* end category */}
          </div>
        </div>

        {/* upload resep obat */}
        <div className="center-alo mb-5">
          <div className="upload between-alo h-[75px] w-11/12 rounded-md bg-white px-5 py-4">
            <div className="text-sm">
              <div className="border-0 font-bold">Punya Resep Obat?</div>
              <div className="border-0">Upload resep & dapatkan obat Anda</div>
            </div>
            <div className="button-upload rounded-lg border border-alo px-3 py-2 text-alo">
              Upload
            </div>
          </div>
        </div>

        {/* panel products */}
        <div className="product min-h-10 w-full bg-[#fafafa] pb-5">
          <div className="header between-alo px-[15px] pb-[10px] pt-[30px]">
            <div className="left text-[18px] font-bold">
              <h3>Populer</h3>
            </div>
            <div className="right text-sm font-bold text-alo">
              <span>Lihat Semua</span>
            </div>
          </div>
          <div className="list grid grid-cols-2 gap-2 px-[15px]">
            {/* product */}
            <div className="card-product bg-white px-3 py-3 shadow-sm">
              <div className="inner">
                <div className="product-image center-alo border-0">
                  <Image
                    className="border-0"
                    src={"/images/products/elzsa_21_tablet.png"}
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
                <div className="description">
                  <div className="product-name min-h-[39px] break-words text-sm font-normal text-[#424242]">
                    Elzsa 21 Tablet
                  </div>
                  <div className="product-unit text-[12px] text-[#7f7f7f]">
                    Per Strip
                  </div>
                  <div className="product-price text-sm font-bold text-[#ed6700]">
                    Rp158.826
                  </div>
                  <div className="buy mt-2 rounded-md border border-[#ed6700] py-1 text-center font-bold text-[#ed6700]">
                    + Tambah
                  </div>
                </div>
              </div>
            </div>

            {/* product */}
            <div className="card-product bg-white px-3 py-3 shadow-sm">
              <div className="inner">
                <div className="product-image center-alo border-0">
                  <Image
                    className="border-0"
                    src={"/images/products/Postpil_2_Tablet.png"}
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
                <div className="description">
                  <div className="product-name min-h-[39px] break-words text-sm font-normal text-[#424242]">
                    Postpil 2 Tablet
                  </div>
                  <div className="product-unit text-[12px] text-[#7f7f7f]">
                    Per Strip
                  </div>
                  <div className="product-price text-sm font-bold text-[#ed6700]">
                    Rp34.425
                  </div>
                  <div className="buy mt-2 rounded-md border border-[#ed6700] py-1 text-center font-bold text-[#ed6700]">
                    + Tambah
                  </div>
                </div>
              </div>
            </div>

            {/* end product */}
          </div>
        </div>

        {/* panel products */}
        <div className="product min-h-10 w-full bg-[#fafafa] pb-5">
          <div className="header between-alo px-[15px] pb-[10px] pt-[30px]">
            <div className="left text-[18px] font-bold">
              <h3>Vitamin C</h3>
            </div>
            <div className="right text-sm font-bold text-alo">
              <span>Lihat Semua</span>
            </div>
          </div>
          <div className="list grid grid-cols-2 gap-2 px-[15px]">
            {/* product */}
            <div className="card-product bg-white px-3 py-3 shadow-sm">
              <div className="inner">
                <div className="product-image center-alo border-0">
                  <Image
                    className="border-0"
                    src={"/images/products/black-mores.png"}
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
                <div className="description">
                  <div className="product-name min-h-[39px] break-words text-sm font-normal text-[#424242]">
                    Blackmores Bio C 1000 Mg 30 Tablet
                  </div>
                  <div className="product-unit text-[12px] text-[#7f7f7f]">
                    Per Botol
                  </div>
                  <div className="product-price text-sm font-bold text-[#ed6700]">
                    Rp171.139
                  </div>
                  <div className="buy mt-2 rounded-md border border-[#ed6700] py-1 text-center font-bold text-[#ed6700]">
                    + Tambah
                  </div>
                </div>
              </div>
            </div>

            {/* product */}
            <div className="card-product bg-white px-3 py-3 shadow-sm">
              <div className="inner">
                <div className="product-image center-alo border-0">
                  <Image
                    className="border-0"
                    src={"/images/products/Postpil_2_Tablet.png"}
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
                <div className="description">
                  <div className="product-name min-h-[39px] break-words text-sm font-normal text-[#424242]">
                    Postpil 2 Tablet
                  </div>
                  <div className="product-unit text-[12px] text-[#7f7f7f]">
                    Per Strip
                  </div>
                  <div className="product-price text-sm font-bold text-[#ed6700]">
                    Rp34.425
                  </div>
                  <div className="buy mt-2 rounded-md border border-[#ed6700] py-1 text-center font-bold text-[#ed6700]">
                    + Tambah
                  </div>
                </div>
              </div>
            </div>

            {/* end product */}
          </div>
        </div>

        {/* more button */}
        <div className="px-4">
          <div className="mt-2 rounded-md border border-alo py-[6px] text-center font-bold text-alo">
            Muat Lebih Banyak
          </div>
        </div>

        {/* Apa itu alodokter shop? */}
        <div className="mt-10 min-h-[100px] w-full bg-white p-[15px]">
          <div className="">
            <div className="">
              <p className="mb-[20px] mr-[10px] mt-[10px] text-[21px] font-bold text-alo">
                Apa Itu Alodokter Shop?
              </p>
              <p className="my-[14px] text-justify text-sm font-normal">
                Alodokter Shop merupakan platform yang bekerja sama dengan
                partner tepercaya untuk menyediakan obat-obatan, produk
                kesehatan dan kecantikan, serta berbagai kebutuhan ibu dan anak,
                agar pengguna aplikasi Alodokter dapat membelinya secara mudah
                dan aman.
              </p>
              <p className="mb-[20px] mr-[10px] mt-[30px] text-[21px] font-bold text-alo">
                Keuntungan Menggunakan Alodokter Shop
              </p>
              <div className="benefit">
                <div className="content-benefit row-alo items-center gap-3 border-l-0">
                  <div className="icon relative mt-[5px] flex h-[60px] w-[60px] items-center rounded-full border-0 bg-white p-[18px] shadow-sm">
                    <Image
                      src={"/images/icons/touch-screen.png"}
                      alt={""}
                      width={46}
                      height={46}
                    />
                  </div>
                  <div className="text-sm text-[#7f7f7f]">
                    <span>Kemudahan membeli obat &amp; produk kesehatan</span>
                  </div>
                </div>
                <div className="content-benefit row-alo items-center gap-3 border-0">
                  <div className="icon relative mt-[5px] flex h-[60px] w-[60px] items-center rounded-full border-0 bg-white p-[5px] shadow-sm">
                    <Image
                      className="border-0"
                      src={"/images/icons/group.png"}
                      alt={""}
                      width={46}
                      height={46}
                    />
                  </div>
                  <div className="text-sm text-[#7f7f7f]">
                    <span>Pesanan dikirim di hari yang sama</span>
                  </div>
                </div>
                <div className="content-benefit row-alo items-center gap-3 border-0">
                  <div className="icon relative mt-[5px] flex h-[60px] w-[60px] items-center rounded-full border-0 bg-white p-[12px] shadow-sm">
                    <Image
                      src={"/images/icons/shield.png"}
                      alt={""}
                      width={46}
                      height={46}
                    />
                  </div>
                  <div className="text-sm text-[#7f7f7f]">
                    <span>Kualitas & mutu obat terjamin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cart />
    </>
  );
};

export default Aloshop;
