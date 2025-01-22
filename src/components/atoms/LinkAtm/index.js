import Link from "next/link";
import React from "react";

const LinkAtm = ({ href = "#", text = "", children, className = "" }) => {
  return (
    <Link className={className} href={href}>
      {children}
      {text}
    </Link>
  );
};

export default LinkAtm;
