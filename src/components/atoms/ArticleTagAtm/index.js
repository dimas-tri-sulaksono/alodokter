import React from "react";

const ArticleTagAtm = ({
  tag,
  className = "bg-[#F85B06] text-white text-[12px] leading-[20px] w-[75.73px] h-[21px]",
}) => {
  return (
    <div
      className={`${className} absolute rounded-full m-[6px] px-[10px] text-center font-alo`}
    >
      {tag}
    </div>
  );
};

export default ArticleTagAtm;
