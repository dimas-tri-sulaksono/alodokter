import React from "react";

const ArticleTag = ({
  tag,
  className = "bg-tagKesehatan text-white text-[12px] leading-[20px] w-[75.73px] h-[21px]",
}) => {
  return (
    <div
      className={`${className} absolute rounded-full m-[6px] px-[10px] text-center`}
    >
      {tag}
    </div>
  );
};

export default ArticleTag;
