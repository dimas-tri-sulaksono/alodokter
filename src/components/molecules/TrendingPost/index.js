import ArticleTag from "@/components/atoms/ArticleTag";
import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const TrendingPost = () => {
  return (
    <>
      <div className="trending-article hidden md:block">
        <div className="trending-wrapper">
          <div className="trending-image">
            <LinkAtm href="blog.js">
              <ArticleTag
                tag={"Kesehatan"}
                className="h-[21px] w-[75.73px] bg-tagKesehatan text-[12px] leading-[20px] text-white"
              />
            </LinkAtm>
            <LinkAtm>
              <Image
                className="lg:h-[336px] lg:w-[667px]"
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
                <h3 className="h-[21px] text-[21px] font-bold text-[#424242] lg:w-[667px]">
                  10 Obat Diare Ampuh
                </h3>
              </LinkAtm>
              <p className="py-[16px] text-[#7f7f7f] lg:w-[667px]">
                Obat diare efektif menghentikan mencret yang sudah terjadi
                berkali-kali dan meredakan berbagai keluhan yang menyertainya.
                Obat ini dapat membuat buang...
              </p>
              <LinkAtm
                href="blog.html"
                className="text-sm font-bold text-[#3670D2]"
              >
                Baca Selengkapnya
              </LinkAtm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingPost;
