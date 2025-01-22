import ArticleTagAtm from "@/components/atoms/ArticleTagAtm";
import LinkAtm from "@/components/atoms/LinkAtm";
import Image from "next/image";
import React from "react";

const CardPostMol = ({ title, intro, img, imgAlt = "", tag, tagClassName }) => {
  return (
    <>
      <div className="mt-5">
        <div className="card-post-index-view flex flex-row gap-5">
          <div className="card-image">
            <ArticleTagAtm tag={tag} className={tagClassName} />
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
                <h4 className="w-[341px] h-[25px] text-[#424242] text-[18px] font-alo font-bold">
                  {title}
                </h4>
              </LinkAtm>
              <p className="w-[331px] py-[16px] text-[#7f7f7f] text-justify font-alo">
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

export default CardPostMol;
