import ArticleTagAtm from "@/components/atoms/ArticleTagAtm";
import LinkAtm from "@/components/atoms/LinkAtm";
import CardPostMol from "@/components/molecules/CardPostMol";
import SubNavMenuMol from "@/components/molecules/SubNavMenuMol";
import FooterOrg from "@/components/organism/FooterOrg";
import NavOrg from "@/components/organism/NavOrg";
import Image from "next/image";
// import { Popins } from "next/fonts/google";

// const poppins = Popins({ subset: ["latin"] });

export default function Home() {
  return (
    <>
      <NavOrg className={`bg-white border-[#dadee4]`} />
      <div id="content" className="content">
        <div className="hero bg-[url('/images/bg-banner.jpg')] text-[16px] font-normal">
          <div className="container-hero text-white pt-[82px] relative mx-auto w-[1112px] min-h-[612px]">
            <div className="hero-content-inner pt-[91px] pb-[113px]">
              <Image
                src="/images/doctor.png"
                alt="doctor"
                className="h-[495px] absolute bottom-0 -right-10"
                width={486.8}
                height={495}
              />
              <div className="hero banner content">
                <h1 className="font-alo font-bold text-[36px] mb-[12px]">
                  Layanan Cepat dan Tepat
                </h1>
                <p className="font-alo font-normal text-[28px] mb-[52px] ">
                  Layanan Booking dan Chat Dokter Terbaik di Indonesia
                </p>
              </div>
              <div className="hero-menu"></div>
            </div>
          </div>
        </div>
        <div className="subnav-center flex items-center justify-center mt-[50px]">
          <div className="container-subnav-center w-[1000px]">
            <h2 className="text-[30px] text-[#424242] font-bold font-alo">
              Artikel Kesehatan Terkini untuk Anda
            </h2>
            {/* subnav */}
            <SubNavMenuMol />
          </div>
        </div>
        <div className="content-inner">
          <div className="container w-[1000px] h-[1250px] mx-[405px]">
            <div className="main-container">
              {/* <!-- chat --> */}
              <LinkAtm
                className={"fixed bottom-6 right-9 z-[100] cursor-pointer"}
              >
                <Image
                  src="/images/chat-now.gif"
                  alt="chat-now"
                  className="w-[202px]"
                  width={202}
                  height={81.39}
                />
              </LinkAtm>

              {/* <!-- trending article --> */}
              <div className="trending-article">
                <div className="trending-wrapper">
                  <div className="trending-image">
                    <LinkAtm href="blog.js">
                      <ArticleTagAtm tag={"Kesehatan"} />
                    </LinkAtm>
                    <LinkAtm>
                      <Image
                        className="w-[667px] h-[336px]"
                        src="/images/obat-diare-ampuh.jpg"
                        alt="obat-diare-ampuh"
                        width={667}
                        height={336}
                      />
                    </LinkAtm>
                  </div>
                  <div className="trending-content mt-[17px]">
                    <div>
                      <LinkAtm href="blog.html">
                        <h3 className="w-[667px] h-[21px] text-[#424242] text-[21px] font-alo font-bold">
                          10 Obat Diare Ampuh
                        </h3>
                      </LinkAtm>
                      <p className="w-[667px] py-[16px] text-[#7f7f7f] font-alo">
                        Obat diare efektif menghentikan mencret yang sudah
                        terjadi berkali-kali dan meredakan berbagai keluhan yang
                        menyertainya. Obat ini dapat membuat buang...
                      </p>
                      <LinkAtm
                        href="blog.html"
                        className="text-[#3670D2] text-sm font-alo font-bold"
                      >
                        Baca Selengkapnya
                      </LinkAtm>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card post 1 --> */}
              <CardPostMol
                title={"Iris Mata, Ketahui Bagian dan Fungsinya"}
                intro={
                  "Iris mata adalah bagian berwarna pada mata yang terletak di antara kornea dan lensa mata"
                }
                img={"/images/iris-mata-ketahui-bagian-dan-fungsinya.jpg"}
                imgAlt="iris-mata-ketahui-bagian-dan-fungsinya"
                tag={"KESEHATAN"}
                tagClassName={
                  "bg-[#F85B06] h-[25px] text-white text-[10px] leading-[24px]"
                }
              />

              {/* <!-- card post 2 --> */}
              <CardPostMol
                title={"7 Ciri-Ciri Depresi Ringan yang Perlu Dikenali"}
                intro={
                  "Ciri-ciri depresi ringan terkadang bisa sulit dikenali karena kerap dianggap sebagai perubahan mood yang normal"
                }
                img={
                  "/images/7-ciri-ciri-depresi-ringan-yang-perlu-dikenali.jpg"
                }
                imgAlt="7-ciri-ciri-depresi-ringan-yang-perlu-dikenali"
                tag={"KESEHATAN"}
                tagClassName={
                  "bg-[#F85B06] h-[25px] text-white text-[10px] leading-[24px]"
                }
              />

              {/* <!-- card post 3 --> */}
              <CardPostMol
                title={"9 Makanan untuk Menaikkan Trombosit"}
                intro={
                  "Makanan untuk menaikkan trombosit cukup beragam, mulai dari daging hingga sayuran. Berbagai makanan ini bisa"
                }
                img={"/images/9-makanan-untuk-menaikkan-trombosit.jpg"}
                imgAlt="9-makanan-untuk-menaikkan-trombosit"
                tag={"HIDUP SEHAT"}
                tagClassName={
                  "bg-[#C78F00] h-[25px] text-white text-[10px] leading-[24px]"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <FooterOrg />
    </>
  );
}
