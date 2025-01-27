import ArticleTag from "@/components/atoms/ArticleTag";
import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const CardPost = ({ title, intro, img, imgAlt = "", tag, classNameTag }) => {
  return (
    <>
      <div className="mx-4 mt-5">
        <div className="card-post-index-view flex flex-row border-0 lg:gap-5">
          <div className="card-image  w-[25%] border-0">
            <ArticleTag
              tag={tag.toUpperCase()}
              className={`hidden md:block ${classNameTag}`}
            />
            <div className="card-image-bg h-[73px] w-[73px] border-0">
              <Image
                className="rounded-lg"
                src={img}
                alt={imgAlt}
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="card-content w-[75%] borde-0">
            <div className="card-content-inner  min-h-[73px] border-b">
              <span className="block text-[12px] text-alo md:hidden">
                {tag}
              </span>
              <LinkAtm>
                <h4 className="mb-[15px] block text-[16px] font-bold text-[#424242] lg:w-[341px] lg:text-[18px]">
                  {title}
                </h4>
              </LinkAtm>
              <p className="mb-[10px] hidden text-justify text-[#7f7f7f] md:block lg:w-[331px]">
                {intro}....
              </p>
              <LinkAtm
                className={"hidden text-sm font-bold text-[#3670D2] md:block"}
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

export default CardPost;
