import ArticleTag from "@/components/atoms/ArticleTag";
import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const CardPost = ({ title, intro, img, imgAlt = "", tag, classNameTag }) => {
  return (
    <>
      <div className="mt-5">
        <div className="card-post-index-view flex flex-row gap-5">
          <div className="card-image">
            <ArticleTag tag={tag} className={classNameTag} />
            <div className="card-image-bg">
              <Image
                className="rounded-lg"
                src={img}
                alt={imgAlt}
                width={300}
                height={166}
              />
            </div>
          </div>
          <div className="card-content">
            <div className="card-content-inner">
              <LinkAtm>
                <h4 className="block w-[341px] mb-[5px] text-[#424242] text-[18px] font-alo font-bold">
                  {title}
                </h4>
              </LinkAtm>
              <p className="block w-[331px] mb-[10px] text-[#7f7f7f] text-justify font-alo">
                {intro}....
              </p>
              <LinkAtm className={"text-[#3670D2] text-sm font-alo font-bold"}>
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
