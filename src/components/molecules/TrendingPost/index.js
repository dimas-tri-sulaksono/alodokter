import ArticleTag from "@/components/atoms/ArticleTag";
import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const TrendingPost = () => {
  return (
    <>
      <div className="trending-article">
        <div className="trending-wrapper">
          <div className="trending-image">
            <LinkAtm href="blog.js">
              <ArticleTag
                tag={"Kesehatan"}
                className="bg-tagKesehatan text-white text-[12px] leading-[20px] w-[75.73px] h-[21px]"
              />
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
                Obat diare efektif menghentikan mencret yang sudah terjadi
                berkali-kali dan meredakan berbagai keluhan yang menyertainya.
                Obat ini dapat membuat buang...
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
    </>
  );
};

export default TrendingPost;
